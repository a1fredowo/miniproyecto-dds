const countryData = {
    USD: {
      country: "Estados Unidos",
      facts: [
        "Hogar de Hollywood y la industria del cine",
        "Tierra del jazz y el rock and roll",
      ],
      artists: [
        "Michael Jackson - Rey del Pop",
        "Elvis Presley - Rey del Rock",
      ],
      famousPeople: [
        "Steve Jobs - Cofundador de Apple",
        "Martin Luther King Jr. - Líder de derechos civiles",
      ],
      flag: "🇺🇸"
    },
    EUR: {
      country: "Unión Europea",
      facts: [
        "Compuesta por 27 países miembros",
        "Hogar del Renacimiento y la Ilustración",
      ],
      artists: [
        "Pablo Picasso - Pintor español",
        "Leonardo da Vinci - Genio renacentista",
      ],
      famousPeople: [
        "Marie Curie - Científica pionera",
        "Albert Einstein - Físico revolucionario",
      ],
      flag: "🇪🇺"
    },
    CLP: {
      country: "Chile",
      facts: [
        "Hogar del desierto más árido del mundo",
        "País con más de 6,000 km de costa",
      ],
      artists: [
        "Violeta Parra - Folclorista y artista",
        "Pablo Neruda - Premio Nobel de Literatura",
      ],
      famousPeople: [
        "Gabriela Mistral - Primera latinoamericana Premio Nobel",
        "Arturo Prat - Héroe naval",
      ],
      flag: "🇨🇱"
    },
    // Puedes agregar más monedas aquí
  };
  
  export default function FunFact({ currency }) {
    const data = countryData[currency] || null;
    
    if (!data) return null;
  
    return (
      <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">
            {data.flag} {data.country}
          </h3>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Datos Interesantes</h4>
            <ul className="list-disc pl-5 space-y-1">
              {data.facts.map((fact, index) => (
                <li key={index} className="text-gray-700">{fact}</li>
              ))}
            </ul>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Artistas Destacados</h4>
            <ul className="list-disc pl-5 space-y-1">
              {data.artists.map((artist, index) => (
                <li key={index} className="text-gray-700">{artist}</li>
              ))}
            </ul>
          </div>
  
          <div>
            <h4 className="text-lg font-semibold text-blue-600 mb-2">Personajes Famosos</h4>
            <ul className="list-disc pl-5 space-y-1">
              {data.famousPeople.map((person, index) => (
                <li key={index} className="text-gray-700">{person}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }