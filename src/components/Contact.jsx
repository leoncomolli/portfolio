import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const mailtoLink = "mailto:leoncomolli@gmail.com?subject=Consulta%20sobre%20proyecto%20web";

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-black via-gray-900/30 to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img src="contacto-logo.png" alt="Contacto Logo" className="mx-auto h-24 w-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Intro Text */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Tenés un proyecto en mente?
            </h3>
          </motion.div>

          {/* Email Card */}
          <motion.div 
            className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-6">
              {/* Email Address */}
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-2">Escribime a</p>
                <a 
                  href={mailtoLink}
                  className="text-2xl md:text-3xl font-semibold text-white hover:text-green-500 transition-colors duration-300"
                >
                  leoncomolli@gmail.com
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-2 sm:gap-3 items-center justify-center flex-nowrap">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-1.5 px-4 sm:px-8 py-2.5 sm:py-4 bg-white text-black text-sm sm:text-base font-semibold rounded-full hover:bg-gray-200 hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="inline-block">Enviar mail</span>
                </a>
                <button
                  type="button"
                  onClick={e => {
                    navigator.clipboard.writeText('leoncomolli@gmail.com');
                    const toast = document.createElement('div');
                    toast.textContent = 'Mail copiado con éxito';
                    toast.style.position = 'fixed';
                    toast.style.pointerEvents = 'none';
                    toast.style.background = '#222';
                    toast.style.color = '#fff';
                    toast.style.padding = '8px 18px';
                    toast.style.borderRadius = '999px';
                    toast.style.fontSize = '1rem';
                    toast.style.zIndex = '9999';
                    toast.style.boxShadow = '0 2px 16px #0008';
                    document.body.appendChild(toast);
                    function moveToast(ev) {
                      toast.style.left = ev.clientX + 18 + 'px';
                      toast.style.top = ev.clientY - 18 + 'px';
                    }
                    moveToast(e);
                    document.addEventListener('mousemove', moveToast);
                    setTimeout(() => {
                      toast.remove();
                      document.removeEventListener('mousemove', moveToast);
                    }, 1800);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 sm:px-8 py-2.5 sm:py-4 border border-white/80 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  <span className="inline-block">Copiar mail</span>
                </button>
              </div>

              {/* Response Time */}
              <p className="text-sm text-gray-500 flex items-center gap-2 whitespace-nowrap mb-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Seras respondido, por mi, a la brevedad.
              </p>

              {/* Divider */}
              <div className="w-full border-t border-gray-800 my-3"></div>

              {/* Social Links */}
              <div className="text-center space-y-4 w-full mt-3">
                <p className="text-gray-400 text-sm">También me encontrás en</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/5491137878205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-3 bg-transparent border border-white/80 rounded-full hover:bg-white hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-black transition-colors">WhatsApp</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/leon-patricio-comolli-9a2026214/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-3 bg-transparent border border-white/80 rounded-full hover:bg-white hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-black transition-colors">LinkedIn</span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/leoncomolli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-3 bg-transparent border border-white/80 rounded-full hover:bg-white hover:border-white hover:shadow-lg hover:shadow-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-black transition-colors">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;