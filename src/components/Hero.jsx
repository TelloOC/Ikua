import { sounds } from '../utils/soundEngine';
import { languageStats } from '../data/kokamaData';

export default function Hero({ onStartLearn, onExploreStories }) {
  const handleListenWelcome = () => {
    sounds.speak("Etepe, mai katu! Bienvenidos a Ikua", "[e-te-pe mai ka-tu bi-en-ve-ni-dos a i-kwa]");
  };

  return (
    <section id="inicio" className="hero-section">
      {/* Background with Amazonian visual texture and gentle gradients */}
      <div className="hero-bg-overlay"></div>
      
      {/* Decorative Amazonian River Wave SVG */}
      <div className="amazonian-curve-top">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,32L60,48C120,64,240,96,360,96C480,96,600,64,720,53.3C840,43,960,53,1080,69.3C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" 
            fill="currentColor" 
            opacity="0.07"
          />
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Cultural Tag */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Selva Peruana · Loreto & Ucayali</span>
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
            Una plataforma interactiva dedicada a la preservación y aprendizaje de la 
            lengua <strong>Kokama</strong>, nacida en los meandros sagrados del río Marañón 
            y los espejos de agua de la Amazonía peruana.
          </p>

          {/* Welcome Audio Player Pill */}
          <div className="hero-greeting-pill">
            <button 
              className="greeting-audio-btn"
              onClick={handleListenWelcome}
              title="Escuchar saludo en Kokama"
            >
              <span className="audio-icon">🔊</span>
              <span className="greeting-text">
                <em>"Etepe, mai katu!"</em> (¡Hola, bienvenidos!)
              </span>
              <span className="greeting-tag">Escuchar</span>
            </button>
          </div>

          {/* CTAs */}
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
              <span>📖 Cuentos y Leyendas</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Card / Hero Image Showcase */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img 
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80" 
              alt="Río serpenteante en la selva amazónica peruana" 
              className="hero-main-img"
              loading="eager"
            />
            <div className="image-overlay-glow"></div>
            
            {/* Floating Cultural Card 1 */}
            <div className="floating-stat-card card-top">
              <span className="float-icon">🛶</span>
              <div>
                <strong className="float-title">Gente del Agua</strong>
                <p className="float-sub">Navegantes milenarios del Marañón</p>
              </div>
            </div>

            {/* Floating Cultural Card 2 */}
            <div className="floating-stat-card card-bottom">
              <span className="float-icon">🐆</span>
              <div>
                <strong className="float-title">Yawar · El Otorongo</strong>
                <p className="float-sub">Guardián espiritual del monte</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Ribbon */}
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
