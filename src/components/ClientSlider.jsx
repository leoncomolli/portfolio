import React, { useState, useEffect } from 'react';

const ClientSlider = () => {
  const clients = [
    { name: 'Agrofina', logo: '/agrofina.png' },
    { name: 'TuCatering', logo: '/tucatering.png' },
    { name: 'Kern IT', logo: '/kernit.png' },
    { name: 'Santo Fuego', logo: '/santofuego.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="relative overflow-hidden py-12 flex items-center justify-center min-h-[400px]">
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
            className="max-h-64 w-auto max-w-md object-contain filter brightness-0 invert"
            draggable="false"
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-accent-green w-8 h-2'
                : 'bg-gray-600 hover:bg-gray-500 w-2 h-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSlider;
