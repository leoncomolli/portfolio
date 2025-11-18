import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar con tu servicio de email preferido
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-accent-green mx-auto"></div>
        </div>

        {/* Two columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-green transition-colors duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-green transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent-green transition-colors duration-300 resize-none"
                  placeholder="Contame sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer w-full"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Right - Marketing text */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Hagamos realidad tu próximo proyecto
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Diseños modernos, alta performance y soluciones a medida para llevar tu negocio al siguiente nivel.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Desarrollo personalizado</h4>
                    <p className="text-gray-400">Soluciones adaptadas a tus necesidades específicas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Alto rendimiento</h4>
                    <p className="text-gray-400">Sitios optimizados y veloces</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Diseño profesional</h4>
                    <p className="text-gray-400">Interfaces modernas y atractivas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
