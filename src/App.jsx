import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LanguageInfo from './components/LanguageInfo';
import LearnSection from './components/LearnSection';
import StoriesSection from './components/StoriesSection';
import GamesSection from './components/GamesSection';
import CultureSection from './components/CultureSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Controlar sección activa en base al scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'lengua', 'aprender', 'cuentos', 'juegos', 'cultura', 'contacto'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ikua-app-root">
      {/* Barra de navegación superior con sonido de la selva */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="main-content">
        {/* Sección 1: Inicio, Presentación y Bienvenida */}
        <Hero 
          onStartLearn={() => handleNavigate('aprender')}
          onExploreStories={() => handleNavigate('cuentos')}
        />

        {/* Sección 2: Datos sobre la lengua, origen e importancia */}
        <LanguageInfo />

        {/* Sección 3: Aprender con tarjetas interactivas (números, alfabeto, animales, naturaleza) */}
        <LearnSection />

        {/* Sección 4: Cuentos y leyendas en Kokama y traducción */}
        <StoriesSection />

        {/* Sección 5: Juegos interactivos (Trivia y Memoria) */}
        <GamesSection />

        {/* Sección 6: Cultura, historia, origen, artesanía y cosmovisión */}
        <CultureSection />
      </main>

      {/* Sección 7: Footer y Contacto */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
