import React from 'react';

const ClientSlider = () => {
  const clients = [
    'Agrofina',
    'TuCatering',
    'Kern IT',
    'Santo Fuego',
    'Agrofina',
    'TuCatering',
    'Kern IT',
    'Santo Fuego',
  ];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-6 py-4 border border-gray-700 rounded-lg bg-gray-900/30 backdrop-blur-sm hover:border-accent-green/50 transition-all duration-300"
          >
            <span className="text-gray-300 font-medium text-lg whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ClientSlider;
