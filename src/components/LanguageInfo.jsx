import { useState, useEffect, useRef } from 'react';
import { sounds } from '../utils/soundEngine';

export default function LanguageInfo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 'estadisticas',
      badge: '📊 Cifras Oficiales INEI & MinCul',
      title: 'La Realidad en Cifras: Una Lengua en Alerta Crítica',
      subtitle: 'Censo Nacional 2017 & Base de Datos de Pueblos Indígenas (BDPI - Perú)',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1000&q=80',
      tagline: 'Solo el 4.5% de la población étnica habla la lengua con fluidez — y casi todos son abuelos',
      statNumbers: [
        { val: '10,762', lbl: 'Personas autoidentificadas como Kukama-Kukamiria (Censo Nacional 2017 — INEI)', icon: '👥' },
        { val: '37,053', lbl: 'Población estimada en comunidades nativas según BDPI · Ministerio de Cultura', alert: true, icon: '⚠️' },
        { val: 'Solo abuelos', lbl: 'Tanto el BDPI como la UNESCO señalan que la lengua sobrevive principalmente en las generaciones de abuelos', icon: '👴' },
        { val: 'En peligro', lbl: '«Seriamente en peligro» (BDPI · Ministerio de Cultura) · «En peligro de extinción» (UNESCO)', badge: 'Alerta Máxima', icon: '🚨' }
      ],
      highlights: [
        { icon: '📉', title: 'Brecha Generacional Extrema', desc: 'Casi el 95% de los jóvenes y niños Kukama solo aprendieron castellano como primera lengua.' },
        { icon: '⏳', title: 'Cuenta Regresiva Biológica', desc: 'Cada año fallecen abuelos sabios que eran los últimos custodios de cantos y saberes fluviales.' },
        { icon: '📍', title: 'Concentración Vulnerable', desc: 'La mayoría de hablantes sobrevivientes residen dispersos en cuencas del Marañón, Samiria y Ucayali.' }
      ],
      actionAudio: {
        label: 'Escuchar clamor en Kokama: "Kukama i purukara"',
        text: 'Kukama i purukara',
        phonetic: '[ku-ka-ma i pu-ru-ka-ra]'
      }
    },
    {
      id: 'por-que-resolver',
      badge: '🚨 Emergencia Cultural y Humana',
      title: '¿Por Qué es un Problema Crucial que se Debe Resolver?',
      subtitle: 'La pérdida de una lengua no es solo un asunto de palabras, es la muerte de un universo',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=80',
      tagline: 'Cuando muere un idioma, se extingue una biblioteca viviente irreemplazable',
      highlights: [
        { icon: '🌿', title: 'Pérdida de la Farmacia Botánica', desc: 'Cientos de plantas medicinales amazónicas solo existen con su nombre, dosis y uso espiritual en Kokama. La ciencia moderna aún no ha descifrado muchas de ellas.' },
        { icon: '🛡️', title: 'Defensa del Territorio y los Ríos', desc: 'La lengua es el pilar de la identidad comunitaria para defender las reservas naturales (como Pacaya Samiria) frente a derrames petroleros y tala ilegal.' },
        { icon: '⚖️', title: 'Vulneración de Derechos Humanos', desc: 'La Constitución y convenios internacionales (OIT 169) garantizan el derecho a la lengua originaria; perderla es resignarse a la asimilación forzada.' },
        { icon: '🌊', title: 'Cosmovisión de las Aguas Vivas', desc: 'El Kokama no concibe al río como recurso inerte, sino como un ser vivo sagrado (Uni). Perder la lengua es perder esa ética ecológica vital para el planeta.' }
      ],
      quote: {
        text: 'Cuando un abuelo sabio fallece sin haber podido enseñar su lengua a sus nietos, es como si una biblioteca milenaria se incendiara en el corazón de la selva.',
        author: 'Reflexión de líderes comunitarios de Nauta, Loreto'
      }
    },
    {
      id: 'falta-educacion',
      badge: '🏫 Emergencia en las Aulas',
      title: 'La Falta de Educación: La Brecha de la EIB en Loreto',
      subtitle: 'Menos del 25% de escuelas en territorio Kokama cuentan con docentes bilingües capacitados',
      image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80',
      tagline: 'Aulas rurales donde el idioma de los abuelos está ausente en la pizarra',
      highlights: [
        { icon: '👨‍🏫', title: 'Déficit Alarmante de Docentes Bilingües', desc: 'La gran mayoría de profesores asignados a comunidades ribereñas son hispanohablantes foráneos que no conocen ni una sola palabra en Kokama.' },
        { icon: '📚', title: 'Inexistencia de Materiales Didácticos', desc: 'Faltan libros escolares, cartillas ilustradas y plataformas digitales diseñadas con la fonética y el alfabeto oficial aprobado de la lengua.' },
        { icon: '🎯', title: 'Castellanización Curricular Homogénea', desc: 'Las evaluaciones estandarizadas del Estado exigen rendimiento en castellano, orillando a directores y docentes a dejar de lado la enseñanza originaria.' },
        { icon: '📻', title: 'Resistencia Autogestionada', desc: 'Ante la ausencia estatal, iniciativas comunitarias como Radio Ucamara en Nauta y la plataforma Ikua luchan por crear recursos pedagógicos propios.' }
      ],
      badgeStatus: 'Brecha Educativa Crítica en Loreto'
    },
    {
      id: 'razones-desaparicion',
      badge: '🥀 Causas de la Desaparición',
      title: '¿Por Qué Está Desapareciendo en la Selva Amazónica?',
      subtitle: 'Las 4 heridas históricas y sociales que quebraron la transmisión oral familiar',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      tagline: 'Factores que silenciaron la voz del pueblo entre 1950 y la actualidad',
      highlights: [
        { 
          icon: '🚫', 
          title: '1. Traumas Escolares y Castigos del Pasado (1950-1990)', 
          desc: 'Durante generaciones, en las escuelas rurales de Loreto se aplicaban castigos físicos y humillaciones a los niños que hablaban Kokama. Por amor y protección, muchos padres decidieron no enseñárselo a sus hijos para evitarles el dolor de la discriminación.' 
        },
        { 
          icon: '💔', 
          title: '2. Ruptura de la Transmisión Intergeneracional en el Hogar', 
          desc: 'El hogar familiar dejó de ser el nido de la lengua. Los abuelos solo hablaban Kokama entre ancianos, y el castellano se convirtió en la lengua exclusiva para criar a los hijos.' 
        },
        { 
          icon: '🏙️', 
          title: '3. Migración Urbana por Contaminación y Falta de Oportunidades', 
          desc: 'Los derrames petroleros y la escasez de pesca en los ríos empujan a familias enteras hacia las periferias de Nauta e Iquitos, donde la presión social urbana acelera el abandono del idioma indígena.' 
        },
        { 
          icon: '📱', 
          title: '4. Hegemonía de Medios de Comunicación Masivos', 
          desc: 'La televisión, la radio comercial e internet inundan la selva en castellano absoluto, sin cuotas ni espacios que visibilicen la riqueza de las lenguas originarias amazónicas.' 
        }
      ]
    },
    {
      id: 'soluciones-accion',
      badge: '✨ Rescate y Soluciones',
      title: 'El Plan de Acción: Cómo Revertir la Desaparición',
      subtitle: 'Tecnología, escuelas interculturales y empoderamiento de la juventud',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
      tagline: 'Aún estamos a tiempo: la lengua renace cuando los jóvenes deciden hablarla',
      highlights: [
        { icon: '💻', title: 'Plataformas Educativas Digitales como Ikua', desc: 'Aprovechar la tecnología interactiva, juegos y audios fonéticos para que cualquier persona en el Perú y el mundo pueda aprender y valorar el Kokama.' },
        { icon: '👴👧', title: 'Nidos de Lengua Abuelo-Nieto', desc: 'Reunir a los ancianos sabios con escolares en talleres vivenciales donde se enseña la lengua tejiendo canoas, pescando y narrando mitos.' },
        { icon: '🎶', title: 'Música, Rap y Arte Viral', desc: 'Producciones como el videoclip "Kumbarikira" demuestran que cantar en Kokama es moderno, empoderador y motivo de orgullo nacional.' },
        { icon: '🏛️', title: 'Políticas Públicas Reales con Presupuesto', desc: 'Exigir al Ministerio de Educación y al Gobierno Regional de Loreto plazas docentes bilingües con sueldos dignos e incentivos reales.' }
      ]
    }
  ];

  const totalSlides = slides.length;

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = 80; // 9 segundos por diapositiva para permitir lectura de estadísticas
    const step = (100 / (9000 / interval));

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
        <span className="section-eyebrow">Realidad Lingüística en Alerta</span>
        <h2 className="section-title">Estadísticas Reales y Urgencia de Salvaguarda</h2>
        <p className="section-subtitle">
          Cifras oficiales sobre la crisis de extinción del Kokama-Kukamiria en Loreto, la falta de 
          educación bilingüe intercultural y las razones históricas por las que está desapareciendo en la selva peruana.
        </p>
      </div>

      {/* Pestañas de navegación rápida del carrusel */}
      <div className="carousel-nav-tabs reality-tabs">
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

      {/* Tarjeta Escenario Principal del Carrusel Dinámico */}
      <div 
        className="carousel-stage-card reality-stage-card animate-fade-in"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Barra de progreso y controles superiores */}
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
            <button className="carousel-nav-arrow" onClick={handlePrev} title="Anterior informe">
              ❮
            </button>
            <button className="carousel-nav-arrow" onClick={handleNext} title="Siguiente informe">
              ❯
            </button>
          </div>
        </div>

        {/* Línea animada de temporizador */}
        <div className="carousel-progress-track">
          <div className="carousel-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Contenido Dinámico de la Diapositiva */}
        <div className="carousel-slide-grid">
          {/* Columna Izquierda: Imagen de impacto y badges */}
          <div className="carousel-media-wrap">
            <img src={current.image} alt={current.title} className="carousel-media-img" />
            <div className="carousel-media-gradient"></div>
            
            <div className="carousel-media-badge alert-badge">
              <span>{current.badge}</span>
            </div>

            {/* Si tiene números estadísticos destacados en la imagen */}
            {current.statNumbers && (
              <div className="reality-stat-overlay-box">
                <span className="stat-overlay-title">📊 Diagnóstico Lingüístico (Loreto):</span>
                <div className="stat-overlay-grid">
                  <div className="stat-overlay-item">
                    <strong>10,762</strong>
                    <span>Autoidentificados</span>
                  </div>
                  <div className="stat-overlay-item alert">
                    <strong>37,053</strong>
                    <span>Población estimada</span>
                  </div>
                  <div className="stat-overlay-item">
                    <strong>En peligro</strong>
                    <span>UNESCO · BDPI</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Columna Derecha: Títulos, Estadísticas y Módulos de Información */}
          <div className="carousel-content-wrap">
            <div className="carousel-title-block">
              <span className="carousel-subtitle">{current.subtitle}</span>
              <h3 className="carousel-main-title">{current.title}</h3>
            </div>

            {/* Si la diapositiva tiene métricas estadísticas detalladas */}
            {current.statNumbers && (
              <div className="reality-numbers-deck">
                {current.statNumbers.map((stat, i) => (
                  <div key={i} className={`stat-metric-card ${stat.alert ? 'alert-highlight' : ''}`}>
                    <span className="metric-icon">{stat.icon}</span>
                    <div className="metric-info">
                      <strong className="metric-val">{stat.val}</strong>
                      <p className="metric-lbl">{stat.lbl}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Módulos de Puntos Clave y Razones (Estructurados sin textos sueltos) */}
            <div className="carousel-highlights-deck">
              {current.highlights.map((h, i) => (
                <div key={i} className="highlight-mini-card reality-mini-card">
                  <div className="highlight-mini-icon">{h.icon}</div>
                  <div className="highlight-mini-text">
                    <strong>{h.title}</strong>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cita testimonial si existe */}
            {current.quote && (
              <div className="carousel-quote-box alert-quote">
                <span className="quote-mark">“</span>
                <p className="quote-body">{current.quote.text}</p>
                <span className="quote-sig">— {current.quote.author}</span>
              </div>
            )}

            {/* Botón de Audio Clamor si existe */}
            {current.actionAudio && (
              <div className="reality-action-bar">
                <button 
                  className="btn-carousel-audio alert-btn-audio"
                  onClick={() => sounds.speak(current.actionAudio.text, current.actionAudio.phonetic)}
                >
                  🔊 {current.actionAudio.label}
                </button>
                <span className="action-meta">Fonética indígena de resistencia</span>
              </div>
            )}

            {/* Badge de Estado Crítico si existe */}
            {current.badgeStatus && (
              <div className="carousel-status-pill alert-status">
                <span className="status-live-dot red"></span>
                <strong>Alerta Educativa:</strong> {current.badgeStatus} · UNESCO & Ministerio de Cultura del Perú
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
