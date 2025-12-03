import React from 'react';
import { Link } from 'react-router-dom';

const VistaTuCatering = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Botón de regreso */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Volver al inicio
        </Link>

        {/* Header del proyecto */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tu Catering</h1>
          <p className="text-xl text-gray-400">Detalles del proyecto Tu Catering</p>
        </div>

        {/* Contenido del proyecto - Agregar aquí */}
        <div className="space-y-8">
          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
            <p className="text-gray-400">Contenido a completar...</p>
          </section>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Tecnologías</h2>
            <p className="text-gray-400">Contenido a completar...</p>
          </section>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Características</h2>
            <p className="text-gray-400">Contenido a completar...</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VistaTuCatering;
