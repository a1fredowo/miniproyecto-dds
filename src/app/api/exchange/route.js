import { NextResponse } from 'next/server';

const API_KEY = '5ea20d05e6f7a5292e0536c9';
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

// Función auxiliar para validar los datos de entrada
function validateInput(fromCurrency, toCurrency, amount) {
  const errors = [];

  if (!fromCurrency || typeof fromCurrency !== 'string') {
    errors.push('Moneda de origen inválida');
  }

  if (!toCurrency || typeof toCurrency !== 'string') {
    errors.push('Moneda de destino inválida');
  }

  if (!amount || isNaN(amount) || amount <= 0) {
    errors.push('Cantidad inválida');
  }

  return errors;
}

export async function POST(request) {
  try {
    // Obtener y validar los datos de entrada
    const { fromCurrency, toCurrency, amount } = await request.json();
    
    // Validar los datos de entrada
    const validationErrors = validateInput(fromCurrency, toCurrency, amount);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          error: 'Datos de entrada inválidos', 
          details: validationErrors 
        }, 
        { status: 400 }
      );
    }

    // Construir la URL de la API
    const apiUrl = `${BASE_URL}/${API_KEY}/latest/${fromCurrency}`;

    // Realizar la petición a la API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Verificar si la respuesta es exitosa
    if (data.result !== "success") {
      return NextResponse.json(
        { 
          error: 'Error en la API de conversión', 
          details: data['error-type'] || 'Error desconocido'
        }, 
        { status: 400 }
      );
    }

    // Verificar si existe la tasa de conversión para la moneda destino
    const conversionRate = data.conversion_rates[toCurrency];
    if (!conversionRate) {
      return NextResponse.json(
        { 
          error: 'Tasa de conversión no disponible', 
          details: `No se encontró tasa de conversión para ${toCurrency}`
        }, 
        { status: 400 }
      );
    }

    // Calcular y redondear el resultado
    const convertedAmount = Number((amount * conversionRate).toFixed(2));

    // Devolver el resultado con información adicional
    return NextResponse.json({
      success: true,
      result: {
        convertedAmount,
        rate: conversionRate,
        timestamp: data.time_last_update_unix,
        fromCurrency,
        toCurrency,
        originalAmount: amount
      }
    });

  } catch (error) {
    console.error('Error en la conversión:', error);
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor', 
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }, 
      { status: 500 }
    );
  }
}