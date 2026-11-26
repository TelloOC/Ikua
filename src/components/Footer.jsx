import { useState } from 'react';
import { sounds } from '../utils/soundEngine';

export default function Footer({ onNavigate }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    sounds.playSuccess();
    setIsSent(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSent(false);
    }, 6000);
  };

  return (
    <footer id="contacto" className="site-footer">
      {/* Decorative River Wave Border */}
      <div className="footer-wave-top">
        <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,40 C320,100 420,10 740,50 C1060,90 1200,20 1440,60 L1440,0 L0,0 Z" 
            fill="currentColor"
            opacity="0.08"
          />
        </svg>
      </div>

      <div className="footer-main-container">
        <div className="footer-columns-grid">
          {/* Column 1: Brand and Mission */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <span className="footer-logo-icon">🌿</span>
              <h3 className="footer-brand-title">Ikua</h3>
            </div>
            <p className="footer-mission-text">
              Plataforma interactiva para la salvaguarda, enseñanza y celebración 
              de la lengua y memoria del pueblo <strong>Kukama-Kukamiria</strong> en la Amazonía peruana.
            </p>
            <div className="footer-location-chip">
              <span>📍 Nauta · Requena · Loreto, Perú</span>
            </div>
            <div className="footer-motto">
              <em>"Kukama aitsemekatun ini kumitsa"</em> (El kukama es nuestra verdadera lengua)
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Secciones de Ikua</h4>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => onNavigate('inicio')}>
                  ➔ Inicio y Bienvenida
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lengua')}>
                  ➔ Estadísticas y Realidad
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('aprender')}>
                  ➔ Módulos de Aprendizaje
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cuentos')}>
                  ➔ Cuentos y Mitos Fluviales
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('juegos')}>
                  ➔ 5 Juegos Interactivos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cultura')}>
                  ➔ Historia y Cosmovisión
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Form */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Escríbenos o Contribuye</h4>
            <p className="footer-contact-desc">
              ¿Perteneces a una comunidad, eres educador bilingüe o deseas sugerir nuevos relatos?
            </p>

            {isSent ? (
              <div className="contact-success-box animate-fade-in">
                <span className="success-icon">💌</span>
                <h5>¡Yutsurpaki! (¡Muchas gracias!)</h5>
                <p>Tu mensaje ha sido recibido con cariño. Nos pondremos en contacto pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="footer-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="footer-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="footer-input"
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="¿Cómo te gustaría colaborar o qué te gustaría aprender?"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="footer-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="btn-footer-submit">
                  <span>✉️ Enviar Mensaje a Ikua</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & Respect Statement */}
        <div className="footer-bottom-bar">
          <div className="bottom-copy">
            © 2026 <strong>Ikua</strong> · Proyecto Educativo Amazónico Peruano. Desarrollado en homenaje al pueblo Kukama-Kukamiria.
          </div>
          <div className="bottom-badges">
            <span className="badge-fluvial">Loreto - Perú</span>
            <span className="badge-fluvial">Tupí-Guaraní</span>
            <span className="badge-fluvial">Pacaya Samiria</span>
          </div>
        </div>

        {/* QUANTUM CORE Ownership and Creator Banner */}
        <div className="quantum-core-credits-banner">
          <div className="quantum-badge-chip">
            <span className="quantum-core-icon">⚛️</span>
            <span className="quantum-core-team">QUANTUM CORE</span>
          </div>
          <p className="quantum-core-statement">
            Esta página web, su desarrollo, diseño conceptual, arquitectura interactiva y derechos 
            de creación pertenecen al grupo <strong className="quantum-highlight">QUANTUM CORE</strong>.
          </p>
          <span className="quantum-signature">Propiedad intelectual y tecnológica · QUANTUM CORE 2026</span>
        </div>
      </div>
    </footer>
  );
}
