import React from 'react';
import ClientSlider from './ClientSlider';

const Hero = () => {
  const technologies = [
    { name: 'React', icon: '/react.png' },
    { name: 'JavaScript', icon: '/javascript.png' },
    { name: 'Laravel', icon: '/laravel.png' },
    { name: 'Tailwind CSS', icon: '/tailwind_css.png' },
    { name: 'MySQL', icon: '/mysql.png' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                  Programador Full Stack
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
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-4">
                Han confiado en mí
              </h4>
            </div>
            <ClientSlider />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent-green rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
