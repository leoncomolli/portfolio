import React from 'react';

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <img
            src="/sobremi-logo.png"
            alt="Sobre mí"
            className="mx-auto h-24 md:h-32 lg:h-40 w-auto object-contain"
          />
          <div className="w-24 h-1 bg-accent-green mx-auto"></div>
        </div>

        <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="absolute -left-3 -top-3 text-6xl text-accent-green/30 font-serif">"</div>
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed px-4 md:px-8 relative z-10 space-y-4">
            <p>
              ¡Hola! Soy <span className="text-white font-semibold">León</span>, desarrollador web full stack con un año de experiencia. Egresado de la carrera Full Stack de <span className="text-white font-semibold">Coderhouse</span> y actualmente cursando la Tecnicatura Superior en Programación en la <span className="text-white font-semibold">UTN</span>.
            </p>
            <p>
              Me dedico a crear soluciones que mezclen la <span className="text-accent-green">estética</span> con <span className="text-accent-green">funcionalidad</span> de una manera eficiente y veloz, eligiendo en cada caso las tecnologías que mejor se adapten a lo que tu proyecto necesita.
            </p>
            <p>
              Ya tuve la oportunidad de trabajar con diversos clientes que apostaron por mí para hacer realidad sus ideas.
            </p>
            <p>
              Si estás buscando darle forma a tu proyecto, me encantaría ser parte de esa construcción. Charlemos y veamos cómo podemos trabajar juntos.
            </p>
          </div>
          <div className="absolute -right-3 -bottom-3 text-6xl text-accent-green/30 font-serif">"</div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-200"
          >
            Mira mis proyectos
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 inline-block"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
