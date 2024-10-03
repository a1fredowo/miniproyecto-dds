'use client';
import { useState } from 'react';
import ConvertForm from '@/components/ConvertForm';

export default function Home() {
  const [result, setResult] = useState(null);

  const handleConvert = (conversionData) => {
    setResult(conversionData);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Conversor de monedas</h1>
      
      <ConvertForm onConvert={handleConvert} />
      
      {result && (
        <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Resultado:</h2>
          <p className="text-lg">
            {result.amount} {result.fromCurrency} = {' '}
            <span className="font-bold">{result.result}</span> {result.toCurrency}
          </p>
          {result.rate && (
            <p className="text-sm text-gray-600 mt-2">
              Tasa de cambio: 1 {result.fromCurrency} = {result.rate} {result.toCurrency}
            </p>
          )}
        </div>
      )}
    </div>
  );
}