import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VistaAgrofina from './components/VistaAgrofina';
import VistaTuCatering from './components/VistaTuCatering';
import VistaKernIT from './components/VistaKernIT';
import VistaSantoFuego from './components/VistaSantoFuego';

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        } />
        <Route path="/proyecto/agrofina" element={<VistaAgrofina />} />
        <Route path="/proyecto/tucatering" element={<VistaTuCatering />} />
        <Route path="/proyecto/kernit" element={<VistaKernIT />} />
        <Route path="/proyecto/santofuego" element={<VistaSantoFuego />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
