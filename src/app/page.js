"use client";

import { useState } from 'react';
import ConvertForm from '@/components/ConvertForm';
import FunFact from '@/components/FunFact';
import Footer from '@/components/Footer'; 

const Header = () => (
  <header className="bg-blue-600 text-white p-6 w-full">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Conversor de Monedas</h1>
      <p className="text-center mt-2">Convierte tus monedas al instante.</p>
    </div>
  </header>
);

export default function Home() {
  const [result, setResult] = useState(null);

  const handleConvert = (conversionData) => {
    setResult(conversionData);
  };

  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />

      <main className="flex-grow"> 
        <ConvertForm onConvert={handleConvert} />
        
        {result && (
          <>
            <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-xl my-8"> 
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

            <FunFact currency={result.fromCurrency} />
            <FunFact currency={result.toCurrency} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
