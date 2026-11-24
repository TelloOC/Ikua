import { useState, useEffect, useRef } from 'react';
import { sounds } from '../utils/soundEngine';

export default function LanguageInfo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 'origen',
      badge: '🛶 Origen Milenario',
      title: 'Grandes Navegantes: "La Gente del Agua"',
      subtitle: 'Familia Lingüística Tupí-Guaraní · Siglos de Historia Fluvial',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1000&q=80',
      tagline: 'Del corazón de la selva al curso del río Marañón',
      highlights: [
        { icon: '🛶', title: 'Navegación Fluvial', desc: 'Maestros en tallar canoas ("yapana") en un solo tronco de cedro.' },
        { icon: '🌊', title: 'Confluencia Sagrada', desc: 'Asentados en Nauta y Requena, donde nace el río Amazonas.' },
        { icon: '🌱', title: 'Agricultura Fluvial', desc: 'Cultivo sustentable en barriales y restingas según las crecientes.' }
      ],
      quote: {
        text: 'Para el pueblo Kukama, el río no es un camino de agua; es un ser con alma y nuestra primera escuela de vida.',
        author: 'Sabia abuela de la comunidad de Nauta, Loreto'
      },
      actionAudio: {
        label: 'Escuchar frase: "Yaki ta ikua kukama"',
        text: 'Yaki ta ikua kukama',
        phonetic: '[ya-ki ta i-kwa ku-ka-ma]'
      }
    },
    {
      id: 'fonetica',
      badge: '🗣️ Peculiaridad Lingüística',
      title: 'La Sexta Vocal "ɨ" y las Dos Voces del Pueblo',
      subtitle: 'Rasgos Únicos de la Fonética y Cosmovisión Kokama',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80',
      tagline: 'Una armonía oral que refleja el murmullo del río',
      highlights: [
        { icon: 'ɨ', title: 'La Vocal Central Alta "ɨ"', desc: 'Sonido gutural profundo entre la "i" y la "u", esencial en palabras como Wepɨ (Uno).' },
        { icon: '👥', title: 'Habla de Hombres y Mujeres', desc: 'Distinción gramatical única según el género del hablante en el Kokama clásico.' },
        { icon: '🎶', title: 'Musicalidad Tonal', desc: 'Estructura rítmica diseñada para resonar sobre las aguas abiertas del río.' }
      ],
      interactiveBoard: [
        { term: 'Wepɨ', label: 'Número Uno', phonetic: '[güép-uh]' },
        { term: 'Yawatï', label: 'Tortuga fluvial', phonetic: '[ya-wa-túh]' },
        { term: 'Etepe', label: 'Saludo de paz', phonetic: '[e-te-pe]' },
        { term: 'Irapatse', label: 'Muchas gracias', phonetic: '[i-ra-pat-se]' }
      ]
    },
    {
      id: 'botanica',
      badge: '🌿 Farmacia Sagrada de la Selva',
      title: 'Herencia Botánica y Medicina Milenaria',
      subtitle: 'Más de 300 Plantas Medicinales Clasificadas en la Lengua',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
      tagline: 'El bosque no es madera, es salud, espíritu y vida',
      highlights: [
        { icon: '🍃', title: 'Chuchuhuasi y Uña de Gato', desc: 'Fortalecedores del sistema inmunológico y el espíritu del caminante.' },
        { icon: '🌴', title: 'Aguaje (Moriche)', desc: 'Fruto reina de Loreto que nutre y da vitalidad a las familias ribereñas.' },
        { icon: '🌺', title: 'Ícaros de Sanación', desc: 'Cantos sagrados en Kokama que conectan al curandero con la planta madre.' }
      ],
      counter: {
        number: '+300',
        label: 'Especies medicinales registradas con nombre y uso ancestral en Kokama'
      }
    },
    {
      id: 'resistencia',
      badge: '🛡️ Resistencia y Futuro',
      title: 'El Renacer de la Voz: Radio Ucamara y la Juventud',
      subtitle: 'Iniciativas de Revitalización en las Escuelas Bilingües (EIB)',
      image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
      tagline: 'La lengua de los abuelos se transforma en la música de los jóvenes',
      highlights: [
        { icon: '📻', title: 'Radio Ucamara (Nauta)', desc: 'Emisora comunitaria que lidera la producción de canciones y videos en Kokama.' },
        { icon: '🎤', title: 'Videoclip "Kumbarikira"', desc: 'Canción viral creada por niños y jóvenes de Nauta que dio la vuelta al mundo.' },
        { icon: '🏫', title: 'Educación Bilingüe Intercultural', desc: 'Más de 120 comunidades en Loreto enseñando el idioma a nuevas generaciones.' }
      ],
      badgeStatus: 'En Proceso Activo de Revitalización'
    },
    {
      id: 'confluencia',
      badge: '🗺️ Geografía Sagrada',
      title: 'La Confluencia del Marañón y Ucayali: Cuna del Amazonas',
      subtitle: 'Territorio de Loreto · El Gran Vientre de Agua de Sudamérica',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      tagline: 'Donde las aguas marrones y negras se abrazan para dar vida',
      highlights: [
        { icon: '📍', title: 'Nauta · Puerta a Pacaya Samiria', desc: 'Capital de la provincia de Loreto y corazón del pueblo Kukama.' },
        { icon: '🌊', title: 'Río Marañón & Ucayali', desc: 'Dos gigantes fluviales que al unirse forman oficialmente el río Amazonas.' },
        { icon: '🐟', title: 'Reserva Pacaya Samiria', desc: 'La "Selva de los Espejos", área protegida con la mayor población de paiches y bufeos.' }
      ],
      coordinates: '4°30′S 73°35′W · Loreto, Perú'
    }
  ];

  const totalSlides = slides.length;

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = 80; // actualización suave de la barra cada 80ms (8 segundos en total)
    const step = (100 / (8000 / interval));

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % totalSlides);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying, totalSlides]);

  const handleSelectSlide = (idx) => {
    sounds.playWoodClick();
    setCurrentSlide(idx);
    setProgress(0);
  };

  const handleNext = () => {
    sounds.playWoodClick();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  };

  const handlePrev = () => {
    sounds.playWoodClick();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    sounds.playWoodClick();
    setIsAutoPlaying(!isAutoPlaying);
  };

  const current = slides[currentSlide];

  return (
    <section id="lengua" className="section-container language-info-section">
      <div className="section-header">
        <span className="section-eyebrow">Conocimiento Dinámico</span>
        <h2 className="section-title">Sabiduría, Origen e Importancia</h2>
        <p className="section-subtitle">
          Explora los pilares de la lengua y cosmovisión Kokama a través de nuestro carrusel 
          interactivo de saberes ancestrales de la Amazonía peruana.
        </p>
      </div>

      {/* Dynamic Carousel Navigation Bar */}
      <div className="carousel-nav-tabs">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            className={`carousel-nav-tab ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => handleSelectSlide(idx)}
          >
            <span className="tab-number">0{idx + 1}</span>
            <span className="tab-label">{s.badge.split(' ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Main Dynamic Carousel Showcase */}
      <div 
        className="carousel-stage-card animate-fade-in"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Progress Bar Header */}
        <div className="carousel-progress-header">
          <div className="carousel-controls-left">
            <span className="carousel-counter-text">
              <strong>0{currentSlide + 1}</strong> / 0{totalSlides}
            </span>
            <span className="carousel-slide-tagline">{current.tagline}</span>
          </div>

          <div className="carousel-controls-right">
            <button 
              className={`btn-play-pause ${isAutoPlaying ? 'playing' : 'paused'}`}
              onClick={toggleAutoPlay}
              title={isAutoPlaying ? "Pausar avance automático" : "Reanudar avance automático"}
            >
              {isAutoPlaying ? '⏸ Pausa' : '▶ Automático'}
            </button>
            <button className="carousel-nav-arrow" onClick={handlePrev} title="Slide anterior">
              ❮
            </button>
            <button className="carousel-nav-arrow" onClick={handleNext} title="Siguiente slide">
              ❯
            </button>
          </div>
        </div>

        {/* Progress bar line */}
        <div className="carousel-progress-track">
          <div className="carousel-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Slide Body */}
        <div className="carousel-slide-grid">
          {/* Left Column: Visual with overlay */}
          <div className="carousel-media-wrap">
            <img src={current.image} alt={current.title} className="carousel-media-img" />
            <div className="carousel-media-gradient"></div>
            
            <div className="carousel-media-badge">
              <span>{current.badge}</span>
            </div>

            {current.coordinates && (
              <div className="carousel-floating-coord">
                <span>📍 {current.coordinates}</span>
              </div>
            )}

            {current.counter && (
              <div className="carousel-floating-stat">
                <span className="floating-stat-num">{current.counter.number}</span>
                <span className="floating-stat-lbl">{current.counter.label}</span>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Content & Highlights */}
          <div className="carousel-content-wrap">
            <div className="carousel-title-block">
              <span className="carousel-subtitle">{current.subtitle}</span>
              <h3 className="carousel-main-title">{current.title}</h3>
            </div>

            {/* Structured Highlight Cards (No textos sueltos) */}
            <div className="carousel-highlights-deck">
              {current.highlights.map((h, i) => (
                <div key={i} className="highlight-mini-card">
                  <div className="highlight-mini-icon">{h.icon}</div>
                  <div className="highlight-mini-text">
                    <strong>{h.title}</strong>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide-specific interactive widget */}
            {current.quote && (
              <div className="carousel-quote-box">
                <span className="quote-mark">“</span>
                <p className="quote-body">{current.quote.text}</p>
                <span className="quote-sig">— {current.quote.author}</span>
                {current.actionAudio && (
                  <button 
                    className="btn-carousel-audio"
                    onClick={() => sounds.speak(current.actionAudio.text, current.actionAudio.phonetic)}
                  >
                    🔊 {current.actionAudio.label}
                  </button>
                )}
              </div>
            )}

            {current.interactiveBoard && (
              <div className="carousel-soundboard-box">
                <span className="soundboard-title">🎧 Toca para escuchar la fonética en tiempo real:</span>
                <div className="soundboard-grid">
                  {current.interactiveBoard.map((item, i) => (
                    <button
                      key={i}
                      className="soundboard-btn"
                      onClick={() => sounds.speak(item.term, item.phonetic)}
                    >
                      <span className="sb-term">{item.term}</span>
                      <span className="sb-sub">{item.label}</span>
                      <span className="sb-icon">🔊</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {current.badgeStatus && (
              <div className="carousel-status-pill">
                <span className="status-live-dot"></span>
                <strong>Estado:</strong> {current.badgeStatus} · UNESCO & DREA Loreto
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
