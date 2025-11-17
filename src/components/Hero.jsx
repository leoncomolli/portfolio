import React from 'react';
import ClientSlider from './ClientSlider';

const Hero = () => {
  const technologies = [
    { name: 'React', icon: '/react.png' },
    { name: 'JavaScript', icon: '/javascript.png' },
    { name: 'Laravel', icon: '/laravel.png' },
    { name: 'Tailwind', icon: '/tailwind_css.png' },
    { name: 'MySQL', icon: '/mysql.png' },
    { name: 'GitHub', icon: '/github.png' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            {/* Left Side - Logo and Info */}
            <div className="space-y-8">
              <div className="w-full max-w-2xl">
                <img
                  src="/logodev.png"
                  alt="Leon Comolli"
                  className="w-full h-auto object-contain"
                  draggable="false"
                />
              </div>

              <div className="space-y-6 border-l-2 border-accent-green pl-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-accent-green">
                  Desarrollador Full Stack
                </h3>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center gap-2 p-3 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-accent-green/50 transition-all duration-300 hover:scale-105"
                      title={tech.name}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="text-xs text-gray-400 group-hover:text-accent-green transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Apasionado por el desarrollo web, creo soluciones que combinan estética, 
                  funcionalidad y rendimiento. Transformo ideas en experiencias digitales profesionales y escalables.
                </p>
              </div>
            </div>

          {/* Right Side - Client Slider */}
          <div className="flex flex-col justify-start">
            <ClientSlider />
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-white text-black font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gray-200"
              >
                Ver mis proyectos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-transparent border-2 border-accent-green text-accent-green font-medium rounded-full hover:bg-accent-green hover:text-white transition-all duration-300"
              >
                Contáctame
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg 
          className="w-6 h-6 text-accent-green" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
