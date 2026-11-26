import { useState, useEffect } from 'react';
import { sounds } from '../utils/soundEngine';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ambientActive, setAmbientActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    sounds.playWoodClick();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAmbientToggle = () => {
    const isPlaying = sounds.toggleAmbient((active) => {
      setAmbientActive(active);
    });
    setAmbientActive(isPlaying);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a 
          href="#inicio" 
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio');
          }}
        >
          <div className="logo-icon-wrapper">
            <svg viewBox="0 0 36 36" fill="none" className="brand-svg">
              {/* Hoja y meandro de río amazónico estilizado */}
              <path d="M18 3C9.7 3 3 9.7 3 18s6.7 15 15 15 15-6.7 15-15S26.3 3 18 3z" fill="#2d6a4f" opacity="0.18" />
              <path d="M7 18C11 12 15 22 20 16C24 11 27 15 29 18" stroke="#52b788" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M18 6C23 11 25 17 21 24C17 29 11 28 8 23" stroke="#e9c46a" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
              <circle cx="18" cy="18" r="3" fill="#e9c46a" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">Ikua</span>
            <span className="brand-subtitle">Kukama Ikuan · Sabiduría Amazónica</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {/* Solo botón principal CTA */}
        </nav>

        {/* Solo botón Comenzar a aprender + Hamburger móvil */}
        <div className="nav-actions">
          <button
            className="btn-primary-amazon nav-cta-btn"
            onClick={() => handleNavClick('aprender')}
            title="Ir a los módulos de aprendizaje Kokama"
          >
            <span>🌿 Comenzar a aprender</span>
          </button>

          {/* Hamburger button (móvil) */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <button className="mobile-nav-link" onClick={() => handleNavClick('inicio')}>
            <span>🌿</span> Inicio
          </button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('lengua')}>
            <span>📊</span> Estadísticas & Realidad
          </button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('aprender')}>
            <span>📚</span> Aprender (Módulos)
          </button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('cuentos')}>
            <span>🐆</span> Cuentos & Leyendas
          </button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('juegos')}>
            <span>🎮</span> Juegos Interactivos
          </button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('cultura')}>
            <span>🛶</span> Cultura & Historia
          </button>
          <button className="mobile-nav-link" onClick={() => handleNavClick('contacto')}>
            <span>✉️</span> Contacto
          </button>
        </div>
      </div>
    </header>
  );
}
