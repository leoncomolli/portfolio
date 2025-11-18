import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <ul className="flex justify-center items-center gap-8 md:gap-12 relative">
          {/* Animated underline */}
          <div 
            className="absolute bottom-0 h-0.5 bg-white transition-all duration-500 ease-out"
            style={{
              left: `${navItems.findIndex(item => item.id === activeSection) * (100 / navItems.length)}%`,
              width: `${100 / navItems.length}%`,
              transform: 'translateX(0)'
            }}
          />
          
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-300 hover:text-white transition-all duration-200 font-medium cursor-pointer pb-1 ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
