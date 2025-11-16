import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Geometric shapes with gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-green/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-gray-800/30 to-transparent rounded-full blur-3xl opacity-40"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-accent-green/10 to-gray-800/20 rounded-full blur-2xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Diagonal lines for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-green/20 to-transparent opacity-30"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-600/20 to-transparent opacity-20"></div>
      </div>
    </div>
  );
};

export default Background;
