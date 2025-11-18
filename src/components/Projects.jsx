import React from 'react';

const ProjectCard = ({ title, description, technologies, image, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#0e0e0e] border border-gray-800/50 hover:border-gray-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 h-full flex flex-col">
      {/* Project Image - 50% height */}
      {image && (
        <div className="w-full h-64 md:h-72 overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />
        </div>
      )}
      
      {/* Content Section */}
      <div className="relative z-10 p-6 md:p-8 space-y-5 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-sm md:text-base line-clamp-3">
          {description}
        </p>

        {/* Technologies Pills */}
        {technologies && (
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#0e0e0e] text-white border border-white rounded-full"
              >
                {tech.icon && (
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-3.5 h-3.5 object-contain"
                  />
                )}
                {tech.name}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-auto pt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-white/80 text-white text-sm font-medium rounded-full hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Ver proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Agrofina',
      image: 'card-agrofina.jpg',
      description: 'Sitio institucional para empresa de agroquímicos con panel de administracion para la gestión integral de productos, novedades y noticias, con el objetivo de hacerlo autoadministrable.',
      technologies: [
        { name: 'Laravel', icon: 'laravel.png' },
        { name: 'React', icon: 'react.png' },
        { name: 'MySQL', icon: 'mysql.png' },
        { name: 'Tailwind', icon: 'tailwind_css.png' }
      ],
      link: 'https://archillimatias.dev/'
    },
    {
      title: 'Tu  Catering',
      image: 'card-tucatering.jpg',
      description: 'Landing page y sistema de gestión de catering escolar con administración de menús, control de pagos y panel para familias. Incluye calendario para reservar servicios, gestión de hijos y contratos.',
      technologies: [
        { name: 'Laravel', icon: 'laravel.png' },
        { name: 'React', icon: 'react.png' },
        { name: 'MySQL', icon: 'mysql.png' },
        { name: 'Tailwind', icon: 'tailwind_css.png' }
      ],
      link: 'https://tucatering.com.ar/'
    },
    {
      title: 'Kern IT',
      image: 'card-kernit.jpg',
      description: 'Sitio institucional para empresa de software especializada en soluciones médicas con diseño profesional optimizado.',
      technologies: [
        { name: 'React', icon: 'react.png' },
        { name: 'Tailwind', icon: 'tailwind_css.png' }
      ],
      link: 'https://kern-it.global/'
    },
    {
      title: 'Parrilla Santo Fuego',
      image: 'card-santofuego.jpg',
      description: 'Landing page minimalista con enfoque gastronomico para parrilla, diseño de alto impacto visual.',
      technologies: [
        { name: 'React', icon: 'react.png' },
        { name: 'Tailwind', icon: 'tailwind_css.png' }
      ],
      link: 'https://santo-fuego-landing.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header con imagen */}
        <div className="text-center space-y-4 mb-16">
          <img
            src="proyectospublicados-logo.png"
            alt="Proyectos publicados"
            className="mx-auto w-[280px] md:w-[380px] lg:w-[450px] h-auto mb-2"
            style={{ objectFit: 'contain' }}
          />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6">
            Soluciones web diseñadas y desarrolladas para clientes de diversos rubros
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
