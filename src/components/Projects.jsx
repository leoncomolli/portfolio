import React from 'react';

const ProjectCard = ({ title, description, work, color, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
      {/* Color accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: color }}></div>
      
      <div className="p-6 md:p-8 space-y-4">
        {/* Category badge */}
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-gray-500">{category}</span>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent-green transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Work details */}
        <div className="pt-4 border-t border-gray-800">
          <h4 className="text-sm font-semibold text-accent-green mb-3">Trabajo realizado:</h4>
          <ul className="space-y-2">
            {work.map((item, index) => (
              <li key={index} className="flex items-start text-gray-300 text-sm">
                <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-green flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Agrofina',
      category: 'Agroquímicos',
      color: '#4ade80',
      description: 'Plataforma completa para empresa de agroquímicos con gestión integral de productos y contenido.',
      work: [
        'Web institucional moderna y responsive',
        'Gestor de productos con catálogo dinámico',
        'Panel administrador con carga/edición de productos',
        'Sistema de gestión de noticias',
        'Carga y gestión de PDFs mensuales'
      ]
    },
    {
      title: 'TuCatering',
      category: 'Soluciones Alimenticias',
      color: '#fb923c',
      description: 'Sistema completo de gestión de catering escolar con administración de menús y pagos.',
      work: [
        'Landing page atractiva con diseño naranja/blanco',
        'Sistema de menú mensual para padres',
        'Panel administrativo completo',
        'Gestión de alumnos y servicios',
        'Control de pagos y exportación a Excel'
      ]
    },
    {
      title: 'Kern IT',
      category: 'Software Médico',
      color: '#9BA6A1',
      description: 'Sitio institucional para empresa de software especializada en soluciones médicas.',
      work: [
        'Web institucional de 4 secciones',
        'Diseño profesional con paleta corporativa',
        'Optimización para sector salud',
        'Responsive design'
      ]
    },
    {
      title: 'Parrilla Santo Fuego',
      category: 'Gastronomía',
      color: '#ef4444',
      description: 'Landing page para parrilla con diseño impactante en negro y rojo.',
      work: [
        'Landing page minimalista',
        'Diseño de alto impacto visual',
        'Optimizada para conversión',
        'Galería de productos'
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-accent-green mx-auto"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Soluciones web diseñadas y desarrolladas para clientes de diversos rubros
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
