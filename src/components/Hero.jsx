import { sounds } from '../utils/soundEngine';
import { languageStats } from '../data/kokamaData';

export default function Hero({ onStartLearn, onExploreStories }) {
  const handleListenWelcome = () => {
    sounds.speak("Etepe, mai katu! Bienvenidos a Ikua", "[e-te-pe mai ka-tu bi-en-ve-ni-dos a i-kwa]");
  };

  const tickerPhrases = [
    { kokama: "Uni tsupi ore rekove", spanish: "El agua pura es nuestra vida", phonetic: "[u-ni tsu-pi o-re re-ko-ve]" },
    { kokama: "Yawar pua ka'a pe", spanish: "El jaguar camina en el bosque", phonetic: "[ya-war pu-a ka-a pe]" },
    { kokama: "Kukama ikua", spanish: "Sabiduría viva del pueblo", phonetic: "[ku-ka-ma i-kwa]" },
    { kokama: "Kuarachy ohesape parana", spanish: "El sol ilumina el gran río", phonetic: "[kwa-ra-chy o-he-sa-pe pa-ra-na]" },
    { kokama: "Irapatse tupan", spanish: "Gratitud profunda a la vida", phonetic: "[i-ra-pat-se tu-pan]" }
  ];

  return (
    <section id="inicio" className="hero-section">
      {/* Dynamic Background Canopy Texture & Ambient Glows */}
      <div className="hero-ambient-glow glow-left"></div>
      <div className="hero-ambient-glow glow-right"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Cultural Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Selva Peruana · Loreto & Pacaya Samiria</span>
            <span className="badge-divider">•</span>
            <span className="badge-highlight">Pueblo Kukama-Kukamiria</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Descubre la Sabiduría Ancestral con{' '}
            <span className="highlight-text">Ikua</span>
          </h1>

          {/* Welcome subtitle */}
          <p className="hero-description">
            Plataforma educativa interactiva sobre la lengua, mitos y cosmovisión del 
            pueblo <strong>Kokama</strong>, guardianes milenarios de los ríos Marañón, Huallaga y Ucayali.
          </p>

          {/* Interactive Welcome Audio Button */}
          <div className="hero-greeting-pill">
            <button 
              className="greeting-audio-btn"
              onClick={handleListenWelcome}
              title="Escuchar saludo tradicional en Kokama"
            >
              <span className="audio-icon">🔊</span>
              <span className="greeting-text">
                <em>"Etepe, mai katu!"</em> (¡Hola, bienvenidos a Ikua!)
              </span>
              <span className="greeting-tag">Escuchar</span>
            </button>
          </div>

          {/* Call to Actions */}
          <div className="hero-actions">
            <button 
              className="btn-primary-amazon"
              onClick={() => {
                sounds.playWoodClick();
                onStartLearn();
              }}
            >
              <span>🌿 Empezar a aprender</span>
              <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <button 
              className="btn-secondary-amazon"
              onClick={() => {
                sounds.playWoodClick();
                onExploreStories();
              }}
            >
              <span>📖 Cuentos y Mitos</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Card Showcase with Glassmorphism */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img 
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80" 
              alt="Río serpenteante en la selva amazónica de Loreto" 
              className="hero-main-img"
              loading="eager"
            />
            <div className="hero-image-gradient-dark"></div>
            
            {/* Dynamic Interactive Card 1 */}
            <div 
              className="floating-stat-card card-top"
              onClick={() => sounds.speak("Yapana", "[ya-pa-na]")}
              title="Toca para escuchar 'Yapana' (Canoa)"
            >
              <span className="float-icon">🛶</span>
              <div>
                <strong className="float-title">Gente del Agua · Yapana</strong>
                <p className="float-sub">Navegantes milenarios del río Marañón</p>
              </div>
              <span className="float-audio-pill">🔊</span>
            </div>

            {/* Dynamic Interactive Card 2 */}
            <div 
              className="floating-stat-card card-bottom"
              onClick={() => sounds.speak("Yawar", "[ya-war]")}
              title="Toca para escuchar 'Yawar' (Jaguar)"
            >
              <span className="float-icon">🐆</span>
              <div>
                <strong className="float-title">Yawar · El Otorongo</strong>
                <p className="float-sub">Fuerza espiritual y guardián del monte</p>
              </div>
              <span className="float-audio-pill">🔊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Marquee Ticker: Continuous Smooth Stream of Kokama Wisdom */}
      <div className="dynamic-wisdom-ticker">
        <div className="ticker-label-badge">
          <span>🌿 Voces del Río:</span>
        </div>
        <div className="ticker-track">
          <div className="ticker-content">
            {tickerPhrases.concat(tickerPhrases).map((item, idx) => (
              <button 
                key={idx} 
                className="ticker-item-btn"
                onClick={() => sounds.speak(item.kokama, item.phonetic)}
                title="Haz clic para escuchar la frase en Kokama"
              >
                <span className="ticker-kokama">{item.kokama}</span>
                <span className="ticker-dot">•</span>
                <span className="ticker-spanish">{item.spanish}</span>
                <span className="ticker-audio-icon">🔊</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Ribbon in Glassmorphism */}
      <div className="hero-stats-ribbon">
        <div className="stats-container">
          {languageStats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-detail">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
