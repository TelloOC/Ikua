import { useState } from 'react';
import { cultureInfo } from '../data/kokamaData';
import { sounds } from '../utils/soundEngine';

export default function CultureSection() {
  const [selectedCultureId, setSelectedCultureId] = useState(cultureInfo[0].id);

  const currentItem = cultureInfo.find(c => c.id === selectedCultureId) || cultureInfo[0];

  const handleSelectTab = (id) => {
    sounds.playWoodClick();
    setSelectedCultureId(id);
  };

  return (
    <section id="cultura" className="section-container culture-section">
      <div className="section-header">
        <span className="section-eyebrow">Identidad Amazónica Peruana</span>
        <h2 className="section-title">Cultura, Historia y Cosmovisión Kokama</h2>
        <p className="section-subtitle">
          Un pueblo milenario de navegantes, alfareras y sabios que entienden el río 
          como la gran arteria de la vida. Conoce sus saberes, arte y cosmovisión.
        </p>
      </div>

      {/* Culture Nav Tabs */}
      <div className="culture-tabs-bar">
        {cultureInfo.map((item) => (
          <button
            key={item.id}
            className={`culture-tab-pill ${selectedCultureId === item.id ? 'active' : ''}`}
            onClick={() => handleSelectTab(item.id)}
          >
            <span className="culture-pill-icon">{item.icon}</span>
            <span className="culture-pill-text">{item.title}</span>
          </button>
        ))}
      </div>

      {/* Main Culture Showcase Display */}
      <div className="culture-display-card animate-fade-in">
        <div className="culture-card-grid">
          {/* Left image and visual element */}
          <div className="culture-img-wrap">
            <img 
              src={currentItem.image} 
              alt={currentItem.title}
              className="culture-hero-image"
            />
            <div className="culture-tag-overlay">
              <span className="overlay-badge">{currentItem.tag}</span>
            </div>
          </div>

          {/* Right Textual Content */}
          <div className="culture-text-content">
            <div className="culture-header-line">
              <span className="culture-big-icon">{currentItem.icon}</span>
              <div>
                <span className="culture-subtag">{currentItem.tag}</span>
                <h3 className="culture-display-title">{currentItem.title}</h3>
              </div>
            </div>

            <p className="culture-body-paragraph">
              {currentItem.content}
            </p>

            <div className="culture-highlights-box">
              <h5>Puntos Clave y Tradición:</h5>
              <ul>
                {currentItem.highlights.map((h, idx) => (
                  <li key={idx}>
                    <span className="bullet-leaf">🍃</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Pillars Cards Grid */}
      <div className="cultural-pillars-grid">
        <div className="pillar-card">
          <div className="pillar-icon">🏺</div>
          <h4>Tinajas y Vasijas</h4>
          <p>Modeladas a mano con barro de quebradas y pintadas con cenizas y resinas naturales.</p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">🛶</div>
          <h4>Navegación en Canoa</h4>
          <p>Técnicas milenarias para dominar los remolinos y corrientes bravas del Marañón.</p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">🌿</div>
          <h4>Botánica y Medicina</h4>
          <p>Más de 300 especies de plantas amazónicas identificadas para curaciones corporales y espirituales.</p>
        </div>

        <div className="pillar-card">
          <div className="pillar-icon">🎶</div>
          <h4>Cantos Ícaros</h4>
          <p>Melodías ceremoniales que comunican a las personas con la madre de los bosques y ríos.</p>
        </div>
      </div>
    </section>
  );
}
