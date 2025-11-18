import React, { useState, useEffect } from 'react';

const ClientSlider = () => {
  const clients = [
    { name: 'Agrofina', logo: 'agrofina.png' },
    { name: 'TuCatering', logo: 'tucatering.png' },
    { name: 'Kern IT', logo: 'kernit.png' },
    { name: 'Santo Fuego', logo: 'santofuego.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="relative overflow-hidden py-6 md:py-12 flex flex-col items-center justify-center min-h-[250px] md:min-h-[350px]">
      <div className="mb-4 md:mb-6 text-center">
        <h4 className="text-gray-500 text-sm uppercase tracking-wider">
          Han confiado en mí
        </h4>
      </div>
      
      <div className="relative w-full flex items-center justify-center flex-1 px-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out flex items-center justify-center w-full ${
              index === currentIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
            style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-64 w-auto max-w-full object-contain filter brightness-0 invert px-4"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
