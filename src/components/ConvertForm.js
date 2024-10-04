'use client';
import { useState } from 'react';

const currencies = [
  { code: 'USD', name: 'USD' },
  { code: 'EUR', name: 'EUR' },
  { code: 'CLP', name: 'CLP' },
  { code: 'JPY', name: 'JPY' },
  { code: 'ARS', name: 'ARS' },
];

export default function ConvertForm({ onConvert }) {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          fromCurrency,
          toCurrency,
        }),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Error en la conversión');
      }
      
      onConvert({
        amount: parseFloat(amount),
        fromCurrency,
        toCurrency,
        result: data.result.convertedAmount,
        rate: data.result.rate,
        timestamp: data.result.timestamp
      });
    } catch (error) {
      console.error('Error al convertir:', error);
      setError('No se pudo realizar la conversión. Por favor, intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6">
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <span className="text-red-500 mr-2">⚠️</span>
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl space-y-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Cantidad
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ingresa la cantidad"
            required
            min="0"
            step="any"
          />
        </div>

        <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-end">
          <div>
            <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700 mb-1">
              De
            </label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleSwapCurrencies}
            className="mb-[2px] px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Intercambiar monedas"
          >
            ⇄
          </button>

          <div>
            <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700 mb-1">
              A
            </label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {currencies.map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors
            ${isLoading 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
            }`}
        >
          {isLoading ? 'Convirtiendo...' : 'Convertir'}
        </button>
      </form>
    </div>
  );
}
