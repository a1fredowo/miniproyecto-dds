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
      { type: 'Dato Interesante', text: "Compuesta por 27 países miembros", image: "https://elordenmundial.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/05/mapa-union-europea-ordenador-def.png.webp"},
      { type: 'Dato Interesante', text: "Hogar del Renacimiento y la Ilustración", image: "https://concepto.de/wp-content/uploads/2015/02/renacimiento.jpg" },
      { type: 'Artista Destacado', text: "Pablo Picasso - Pintor español", image: "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydGlzdFwvaW1hZ2VGaWxlXC9wYWJsby1waWNhc3NvLXNlbGYtcG9ydHJhaXRzLWNocm9ub2xvZ3ktMi5qcGciLCJyZXNpemVDcm9wLDQwMCw0MDAsQ1JPUF9FTlRST1BZIl19.CVyE1g9VTSk6_3/YQlE59AZDwv3TUxihk1unMFs4XwHU.jpg"},
      { type: 'Artista Destacado', text: "Leonardo da Vinci - Genio renacentista", image: "https://static.nationalgeographic.es/files/styles/image_3200/public/01-leonardo-da-vinci-book-talk.webp?w=1450&h=816" },
    ],
  },
  CLP: {
    country: "Chile",
    data: [
      { type: 'Dato Interesante', text: "Hogar del desierto más árido del mundo (Norte de Chile)", image: "https://www.uc.cl/site/assets/files/15023/desierto_florido2.700x532.jpg" },
      { type: 'Dato Interesante', text: "País con más de 6,000 km de costa", image: "https://www.cigiden.cl/wp-content/uploads/2022/06/Algarrobo1-1536x1152.jpeg" },
      { type: 'Artista Destacado', text: "Violeta Parra - Folclorista y artista", image: "https://www.latercera.com/resizer/v2/7243EA35TNBJTDPOWAXFJGHTKE.png?quality=80&smart=true&auth=82b7b85c4f071e376b9074dd244c931c2c9c1c8597831051c70fb6fb1333894e&width=1200&height=1199" },
      { type: 'Artista Destacado', text: "Pablo Neruda - Premio Nobel de Literatura", image: "https://www.biografiasyvidas.com/biografia/n/fotos/neruda_2.jpg" },
    ],
  },
  JPY: {
    country: "Japón",
    data: [
      { type: 'Dato Interesante', text: "Hogar del Monte Fuji, símbolo nacional", image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Chuurei-tou_Fujiyoshida_17025277650_c59733d6ba_o.jpg" },
      { type: 'Dato Interesante', text: "Conocido por su cultura del sushi y la ceremonia del té", image: "https://blog.pangea.es/wp-content/uploads/2020/04/receta-sushi-facil.jpg" },
      { type: 'Artista Destacado', text: "Hayao Miyazaki - Director de cine de animación", image: "https://static.wikia.nocookie.net/studioghibli/images/e/ef/Hayao_Miyazaki.jpg/revision/latest?cb=20200412201050&path-prefix=es" },
      { type: 'Artista Destacado', text: "Hikaru Utada - Cantante y compositora", image: "https://sterling-sound.com/wp-content/uploads/hatsukoi.jpg"},
    ],
  },
  ARS: {
    country: "Argentina",
    data: [
      { type: 'Dato Interesante', text: "Conocido por su cultura del tango y el fútbol", image: "https://blogskystorage.s3.amazonaws.com/2022/05/skyairline_skyairline_image_850-1536x1024.jpeg" },
      { type: 'Dato Interesante', text: "Hogar de la Patagonia y las Cataratas del Iguazú", image: "https://cdn.getyourguide.com/img/location/543f9dfed524d.jpeg/49.webp" },
      { type: 'Artista Destacado', text: "Carlos Gardel - Icono del tango", image: "https://www.cck.gob.ar/wp-content/uploads/2019/12/Homenaje-a-Gardel_Principal.jpg" },
      { type: 'Artista Destacado', text: "Jorge Luis Borges - Escritor famoso", image: "https://www.tec.ac.cr/hoyeneltec/sites/default/files/styles/colorbox/public/media/img/main/jorge_luis_bojorges.png"},
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

