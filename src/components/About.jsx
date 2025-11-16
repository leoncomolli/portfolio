import React from 'react';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-accent-green mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 text-6xl text-accent-green/20 font-serif">"</div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed px-8">
            Soy <span className="text-white font-semibold">Leon Comolli</span>, programador full stack apasionado por el desarrollo web. 
            Me encanta diseñar soluciones que combinen <span className="text-accent-green">estética</span>, 
            <span className="text-accent-green"> funcionalidad</span> y <span className="text-accent-green">rendimiento</span>. 
            Ya trabajo con varios clientes que confiaron en mí para llevar sus proyectos adelante, 
            y me encantaría ayudarte a plasmar tu idea en una web profesional, moderna y escalable.
          </p>
          <div className="absolute -right-4 -bottom-4 text-6xl text-accent-green/20 font-serif">"</div>
        </div>

        <button
          onClick={scrollToContact}
          className="btn-primary inline-block mt-8"
        >
          Contacto
        </button>
      </div>
    </section>
  );
};

export default About;
