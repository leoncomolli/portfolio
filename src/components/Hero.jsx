import React, { useState, useEffect } from 'react';
import ClientSlider from './ClientSlider';

const Hero = () => {
  const [currentTechGroup, setCurrentTechGroup] = useState(0);
  const [groupAPosition, setGroupAPosition] = useState(0); // 0 = center, 100 = bottom, -100 = top
  const [groupBPosition, setGroupBPosition] = useState(-100); // Start at top

  const technologies = [
    { name: 'React', icon: 'react.png' },
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'Laravel', icon: 'laravel.png' },
    { name: 'Tailwind', icon: 'tailwind_css.png' },
    { name: 'MySQL', icon: 'mysql.png' },
    { name: 'GitHub', icon: 'github.png' }
  ];

  // Grupo A: React, JS, Laravel
  // Grupo B: Tailwind, MySQL, GitHub
  const techGroups = [
    technologies.slice(0, 3), // Grupo A
    technologies.slice(3, 6)  // Grupo B
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechGroup((prev) => {
        const next = (prev + 1) % 2;
        
        if (next === 0) {
          // Grupo A va a entrar
          setGroupBPosition(100); // Grupo B sale hacia abajo
          setTimeout(() => setGroupBPosition(-100), 700); // Después se reposiciona arriba
          setGroupAPosition(0); // Grupo A entra desde arriba
        } else {
          // Grupo B va a entrar
          setGroupAPosition(100); // Grupo A sale hacia abajo
          setTimeout(() => setGroupAPosition(-100), 700); // Después se reposiciona arriba
          setGroupBPosition(0); // Grupo B entra desde arriba
        }
        
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
                  src="logodev.png"
                  alt="Leon Comolli"
                  className="w-full h-auto object-contain"
                  draggable="false"
                />
              </div>

              <div className="space-y-6 border-l-2 border-accent-green pl-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-accent-green">
                  Desarrollador Full Stack
                </h3>

                {/* Desktop - All technologies */}
                <div className="hidden md:flex flex-wrap gap-4 justify-start">
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

                {/* Mobile - Carousel vertical con 2 grupos de 3 tecnologías */}
                <div className="md:hidden relative overflow-hidden h-28">
                  {/* Grupo A: React, JS, Laravel */}
                  <div
                    className="absolute w-full flex gap-4 justify-start"
                    style={{
                      transform: `translateY(${groupAPosition}%)`,
                      transition: groupAPosition === -100 && currentTechGroup === 1 ? 'none' : 'transform 700ms ease-in-out'
                    }}
                  >
                    {techGroups[0].map((tech, index) => (
                      <div
                        key={index}
                        className="group flex flex-col items-center gap-2 p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
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

                  {/* Grupo B: Tailwind, MySQL, GitHub */}
                  <div
                    className="absolute w-full flex gap-4 justify-start"
                    style={{
                      transform: `translateY(${groupBPosition}%)`,
                      transition: groupBPosition === -100 && currentTechGroup === 0 ? 'none' : 'transform 700ms ease-in-out'
                    }}
                  >
                    {techGroups[1].map((tech, index) => (
                      <div
                        key={index}
                        className="group flex flex-col items-center gap-2 p-3 bg-gray-900/50 border border-gray-700 rounded-lg"
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
                </div>

                <p className="text-gray-400 text-lg leading-relaxed max-w-xl mt-2">
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
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Ver mis proyectos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/80 text-white font-medium rounded-full hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Contáctame
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 md:bottom-10 bottom-16 left-1/2 transform -translate-x-1/2">
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
