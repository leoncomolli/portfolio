import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ClientSlider from './ClientSlider';
import LiquidEther from './LiquidEther';

const Hero = () => {
  const [currentTechGroup, setCurrentTechGroup] = useState(0);
  const [groupAPosition, setGroupAPosition] = useState(0); // 0 = center, 110 = bottom, -110 = top
  const [groupBPosition, setGroupBPosition] = useState(-110); // Start at top

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
          setGroupBPosition(110); // Grupo B sale hacia abajo
          setTimeout(() => setGroupBPosition(-110), 700); // Después se reposiciona arriba
          setGroupAPosition(0); // Grupo A entra desde arriba
        } else {
          // Grupo B va a entrar
          setGroupAPosition(110); // Grupo A sale hacia abajo
          setTimeout(() => setGroupAPosition(-110), 700); // Después se reposiciona arriba
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
    <section id="hero" className="h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={['#1e3a8a', '#374151', '#111827']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-32 items-center">{/* Left Side - Logo and Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-full max-w-2xl flex flex-col items-center">
                <img
                  src="logodev.png"
                  alt="Leon Comolli"
                  className="w-full h-auto object-contain"
                  draggable="false"
                />
              </div>

              <motion.div 
                className="space-y-6 border-l-2 border-accent-green pl-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-accent-green">
                  Desarrollador Full Stack
                </h3>

                {/* Desktop - All technologies */}
                <div className="hidden md:flex flex-wrap gap-2 lg:gap-4 justify-start">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center gap-1 lg:gap-2 p-2 lg:p-3 bg-gray-900/50 border border-gray-700 rounded-lg hover:border-accent-green/50 transition-all duration-300 hover:scale-105"
                      title={tech.name}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
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
                    className="absolute w-full flex gap-4 justify-start mb-6"
                    style={{
                      transform: `translateY(${groupAPosition}%)`,
                      transition: groupAPosition === -110 && currentTechGroup === 1 ? 'none' : 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
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
                    className="absolute w-full flex gap-4 justify-start mb-6"
                    style={{
                      transform: `translateY(${groupBPosition}%)`,
                      transition: groupBPosition === -110 && currentTechGroup === 0 ? 'none' : 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
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

                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mt-2">
                  Apasionado por el desarrollo web, creo soluciones que combinan estética, 
                  funcionalidad y rendimiento. Transformo ideas en experiencias digitales profesionales y escalables.
                </p>
              </motion.div>
            </motion.div>

          {/* Right Side - Client Slider */}
          <motion.div 
            className="flex flex-col justify-start"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ClientSlider />
            
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-6 md:mt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base bg-white text-black font-medium rounded-full hover:bg-gray-200 hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Ver mis proyectos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base border border-white/80 text-white font-medium rounded-full hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Contáctame
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="hidden lg:block absolute bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
      >
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
      </motion.div>
    </section>
  );
};

export default Hero;
