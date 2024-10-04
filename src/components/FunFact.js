import React, { useState, useEffect } from 'react';

const countryData = {
  USD: {
    country: "Estados Unidos",
    data: [
      { type: 'Dato Interesante', text: "Hogar de Hollywood y la industria del cine", image: "/images/hollywood.jpg"},
      { type: 'Dato Interesante', text: "Tierra del jazz y el rock and roll", image:"/images/jazz.jpg" },
      { type: 'Artista Destacado', text: "Michael Jackson - Rey del Pop", image: "https://musicandote.com/wp-content/uploads/2014/11/michael-1024x759.jpg"},
      { type: 'Artista Destacado', text: "Elvis Presley - Rey del Rock", image:"https://www.latercera.com/resizer/v2/DE4AXLGGB5BJZBLK323KSMSAUY.jpeg?quality=80&smart=true&auth=1d172692a663ddfc716a66bab993b5f44094902747f1df783616059f71f31261&width=800&height=800" },
    ],
  },
  EUR: {
    country: "Unión Europea",
    data: [
      { type: 'Dato Interesante', text: "Compuesta por 27 países miembros" },
      { type: 'Dato Interesante', text: "Hogar del Renacimiento y la Ilustración" },
      { type: 'Artista Destacado', text: "Pablo Picasso - Pintor español" },
      { type: 'Artista Destacado', text: "Leonardo da Vinci - Genio renacentista" },
    ],
  },
  CLP: {
    country: "Chile",
    data: [
      { type: 'Dato Interesante', text: "Hogar del desierto más árido del mundo" },
      { type: 'Dato Interesante', text: "País con más de 6,000 km de costa" },
      { type: 'Artista Destacado', text: "Violeta Parra - Folclorista y artista" },
      { type: 'Artista Destacado', text: "Pablo Neruda - Premio Nobel de Literatura" },
    ],
  },
  JPY: {
    country: "Japón",
    data: [
      { type: 'Dato Interesante', text: "Hogar del Monte Fuji, símbolo nacional" },
      { type: 'Dato Interesante', text: "Conocido por su cultura del sushi y la ceremonia del té" },
      { type: 'Artista Destacado', text: "Hayao Miyazaki - Director de cine de animación" },
      { type: 'Artista Destacado', text: "Hikaru Utada - Cantante y compositora" },
    ],
  },
  ARS: {
    country: "Argentina",
    data: [
      { type: 'Dato Interesante', text: "Conocido por su cultura del tango y el fútbol" },
      { type: 'Dato Interesante', text: "Hogar de la Patagonia y las Cataratas del Iguazú" },
      { type: 'Artista Destacado', text: "Carlos Gardel - Icono del tango" },
      { type: 'Artista Destacado', text: "Jorge Luis Borges - Escritor famoso" },
    ],
  },
};

const FunFact = ({ currency }) => {
  const data = countryData[currency] || null;

  // Estado para manejar el índice del dato actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia automáticamente cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.data.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [data]);

  // Funciones para cambiar manualmente
  const nextFact = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousFact = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.data.length - 1 : prevIndex - 1
    );
  };

  if (!data) return null;

  return (
    <div className="max-w-lg mx-auto p-5 bg-white text-black rounded-lg shadow-lg mt-10">
      <div className="flex items-center justify-between">
        {/* Flecha izquierda */}
        <button onClick={previousFact} className="bg-gray-300 rounded-full p-2 hover:bg-gray-200">
          <img src="/images/flecha-izq.png" alt="Flecha izquierda" className="h-6 w-6" /> {/* Flecha izquierda */}
        </button>

        <div className="flex-1 text-center">
          <h3 className="text-2xl mb-2 font-semibold text-black">
            {data.flag} {data.country}
          </h3>
          {/* Mostrar la imagen del dato actual */}
          <img 
            src={data.data[currentIndex].image} 
            alt={data.country} 
            className="block mx-auto h-80 w-80 object-cover rounded-md mb-2" // Ajusta el tamaño según necesidad
          />
          <h4 className="text-lg font-semibold text-blue-600 mb-2">
            {data.data[currentIndex].type}
          </h4>
          <p className="text-gray-700">{data.data[currentIndex].text}</p>
        </div>

        {/* Flecha derecha */}
        <button onClick={nextFact} className="bg-gray-300 rounded-full p-2 hover:bg-gray-200">
          <img src="/images/flecha-der.png" alt="Flecha derecha" className="h-6 w-6" /> {/* Flecha derecha */}
        </button>
      </div>
    </div>
  );
};

export default FunFact;

