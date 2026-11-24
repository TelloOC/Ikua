import { useState } from 'react';
import { sounds } from '../utils/soundEngine';
import { numbersList, alphabetList, animalsList, natureList } from '../data/kokamaData';

export default function LearnDetailSection({ selectedCategoryId, onClose, onChangeCategory }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [practiceAnswer, setPracticeAnswer] = useState(null);
  const [practiceFeedback, setPracticeFeedback] = useState(null);

  // Determinar los datos según la categoría activa
  let title = '';
  let subtitle = '';
  let icon = '';
  let items = [];

  if (selectedCategoryId === 'numeros') {
    title = 'Papachika';
    subtitle = 'Los Números en Kokama (1 al 10)';
    icon = '🔢';
    items = numbersList.map(item => ({
      id: item.number,
      main: item.kokama,
      sub: item.spanish,
      phonetic: item.phonetic,
      extra: item.usage,
      note: item.note,
      type: 'number'
    }));
  } else if (selectedCategoryId === 'alfabeto') {
    title = 'Ikuashawa';
    subtitle = 'Alfabeto y Frases Clave';
    icon = '🔤';
    items = alphabetList.map(item => ({
      id: item.letter + item.kokama,
      main: item.kokama,
      sub: item.meaning,
      phonetic: item.phonetic,
      extra: item.example,
      badge: item.letter,
      note: item.category,
      type: 'alphabet'
    }));
  } else if (selectedCategoryId === 'animales') {
    title = 'Miyari';
    subtitle = 'Fauna de la Selva Peruana';
    icon = '🐆';
    items = animalsList.map(item => ({
      id: item.id,
      main: item.kokama,
      sub: item.spanish,
      phonetic: item.phonetic,
      extra: item.description,
      lore: item.lore,
      image: item.image,
      scientific: item.scientific,
      curiosity: item.curiosity,
      type: 'animal'
    }));
  } else {
    // Naturaleza
    title = "Ka'a & Teta";
    subtitle = 'Ríos, Plantas y Comunidad';
    icon = '🌿';
    items = natureList.map(item => ({
      id: item.kokama,
      main: item.kokama,
      sub: item.spanish,
      phonetic: item.phonetic,
      extra: item.desc,
      note: item.category,
      type: 'nature'
    }));
  }

  // Filtrar elementos según el buscador
  const filteredItems = items.filter(it => 
    it.main.toLowerCase().includes(searchTerm.toLowerCase()) ||
    it.sub.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentItem = items[currentFlashcardIndex] || items[0];

  const handleNextFlashcard = () => {
    sounds.playWoodClick();
    setIsFlipped(false);
    setCurrentFlashcardIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevFlashcard = () => {
    sounds.playWoodClick();
    setIsFlipped(false);
    setCurrentFlashcardIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleFlipCard = () => {
    sounds.playWoodClick();
    setIsFlipped(!isFlipped);
  };

  const handlePronounce = (text, phonetic) => {
    sounds.speak(text, phonetic);
  };

  // Mini práctica interactiva
  const handleTestPractice = (option, correct) => {
    setPracticeAnswer(option);
    if (option === correct) {
      sounds.playSuccess();
      setPracticeFeedback('¡Excelente! Respuesta correcta en Kokama.');
    } else {
      sounds.playGentleOops();
      setPracticeFeedback(`Casi cerca. La respuesta correcta era: "${correct}".`);
    }
  };

  return (
    <div id="apartado-detalle" className="learn-detail-container animate-fade-in">
      {/* Detail Header with breadcrumb and close button */}
      <div className="detail-header-card">
        <div className="detail-top-nav">
          <div className="detail-badge-group">
            <span className="detail-icon-bubble">{icon}</span>
            <div>
              <span className="detail-eyebrow">Apartado Educativo Interactivo</span>
              <h3 className="detail-title">{title} · <em>{subtitle}</em></h3>
            </div>
          </div>

          <div className="detail-header-actions">
            {/* Quick switcher buttons */}
            <div className="category-mini-switch">
              <button 
                className={`switch-chip ${selectedCategoryId === 'numeros' ? 'active' : ''}`}
                onClick={() => onChangeCategory('numeros')}
              >
                🔢 Números
              </button>
              <button 
                className={`switch-chip ${selectedCategoryId === 'alfabeto' ? 'active' : ''}`}
                onClick={() => onChangeCategory('alfabeto')}
              >
                🔤 Alfabeto
              </button>
              <button 
                className={`switch-chip ${selectedCategoryId === 'animales' ? 'active' : ''}`}
                onClick={() => onChangeCategory('animales')}
              >
                🐆 Animales
              </button>
              <button 
                className={`switch-chip ${selectedCategoryId === 'naturaleza' ? 'active' : ''}`}
                onClick={() => onChangeCategory('naturaleza')}
              >
                🌿 Naturaleza
              </button>
            </div>

            <button 
              className="btn-close-detail"
              onClick={onClose}
              title="Volver al menú de tarjetas"
            >
              ✕ Cerrar Apartado
            </button>
          </div>
        </div>

        <p className="detail-instructions">
          Explora cada término, haz clic en el altavoz 🔊 para escuchar la pronunciación auténtica con 
          la fonética indígena, rota la tarjeta interactiva de práctica o consulta el glosario completo.
        </p>
      </div>

      {/* Interactive Flashcard Studio */}
      <div className="flashcard-studio-grid">
        {/* The 3D Flip Flashcard */}
        <div className="flashcard-column">
          <div className="studio-card-header">
            <span className="studio-tag">Tarjeta de Estudio Interactivo</span>
            <span className="counter-pill">{currentFlashcardIndex + 1} de {items.length}</span>
          </div>

          <div 
            className={`flashcard-3d ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlipCard}
            role="button"
            tabIndex={0}
            title="Haz clic para voltear la tarjeta"
          >
            {/* Front Side */}
            <div className="flashcard-face flashcard-front">
              {currentItem.image && (
                <div className="flashcard-image-wrap">
                  <img src={currentItem.image} alt={currentItem.main} className="flashcard-thumb" />
                </div>
              )}
              <span className="flashcard-category-tag">{currentItem.note || currentItem.badge || 'Kokama'}</span>
              <h4 className="flashcard-word-kokama">{currentItem.main}</h4>
              <span className="flashcard-phonetic">{currentItem.phonetic}</span>
              <p className="flashcard-flip-hint">👆 Haz clic para ver significado en español</p>
              
              <button 
                className="btn-flashcard-audio"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePronounce(currentItem.main, currentItem.phonetic);
                }}
              >
                🔊 Escuchar Pronunciación
              </button>
            </div>

            {/* Back Side */}
            <div className="flashcard-face flashcard-back">
              <span className="flashcard-category-tag">Español & Uso</span>
              <h4 className="flashcard-word-spanish">{currentItem.sub}</h4>
              {currentItem.scientific && (
                <p className="flashcard-sci"><em>{currentItem.scientific}</em></p>
              )}
              <div className="flashcard-extra-box">
                <p><strong>Ejemplo / Significado:</strong> {currentItem.extra}</p>
                {currentItem.lore && (
                  <p className="flashcard-lore"><strong>Sabiduría ancestral:</strong> {currentItem.lore}</p>
                )}
                {currentItem.curiosity && (
                  <p className="flashcard-curiosity">💡 {currentItem.curiosity}</p>
                )}
              </div>
              <p className="flashcard-flip-hint">↺ Haz clic para volver a la palabra</p>
            </div>
          </div>

          {/* Flashcard Controls */}
          <div className="flashcard-controls">
            <button className="btn-flashcard-nav" onClick={handlePrevFlashcard}>
              ← Anterior
            </button>
            <button className="btn-flashcard-flip" onClick={handleFlipCard}>
              🔄 {isFlipped ? 'Ver Kokama' : 'Ver Traducción'}
            </button>
            <button className="btn-flashcard-nav" onClick={handleNextFlashcard}>
              Siguiente →
            </button>
          </div>
        </div>

        {/* Quick Challenge on this category */}
        <div className="quick-challenge-column">
          <div className="studio-card-header">
            <span className="studio-tag">Mini Reto del Apartado</span>
            <span className="challenge-star">⭐ Practica</span>
          </div>

          <div className="challenge-box">
            <h5 className="challenge-question">
              ¿Cómo se dice en Kokama: <strong>"{currentItem.sub}"</strong>?
            </h5>

            <div className="challenge-options-list">
              {[
                currentItem.main,
                items[(currentFlashcardIndex + 1) % items.length]?.main || 'Etepe',
                items[(currentFlashcardIndex + 2) % items.length]?.main || 'Uni'
              ]
                .sort(() => (currentFlashcardIndex % 2 === 0 ? 0.3 : -0.3))
                .map((opt, i) => (
                  <button
                    key={i}
                    className={`btn-challenge-opt ${
                      practiceAnswer === opt
                        ? opt === currentItem.main
                          ? 'correct'
                          : 'wrong'
                        : ''
                    }`}
                    onClick={() => handleTestPractice(opt, currentItem.main)}
                  >
                    <span>{opt}</span>
                    {practiceAnswer === opt && (opt === currentItem.main ? ' ✓' : ' ✕')}
                  </button>
                ))}
            </div>

            {practiceFeedback && (
              <div className={`challenge-feedback ${practiceFeedback.includes('Excelente') ? 'success' : 'warn'}`}>
                {practiceFeedback}
              </div>
            )}

            <div className="challenge-tip">
              <strong>Tip Kokama:</strong> Repite en voz alta el término tres veces para fijar su memoria fonética en tu mente.
            </div>
          </div>
        </div>
      </div>

      {/* Vocabulary Glossary / Grid of all items in this section */}
      <div className="vocabulary-grid-section">
        <div className="glossary-header-bar">
          <div>
            <h4>Catálogo Completo de Términos ({items.length})</h4>
            <p>Lista interactiva con reproductor individual y significado detallado.</p>
          </div>

          {/* Search Box */}
          <div className="glossary-search-wrap">
            <input 
              type="text" 
              placeholder={`Buscar en ${title}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glossary-search-input"
            />
            {searchTerm && (
              <button className="search-clear-btn" onClick={() => setSearchTerm('')}>✕</button>
            )}
          </div>
        </div>

        <div className="terms-cards-grid">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="term-card-compact">
              {item.image && (
                <div className="term-img-header">
                  <img src={item.image} alt={item.main} className="term-photo" />
                </div>
              )}
              
              <div className="term-card-body">
                <div className="term-top-row">
                  <span className="term-badge">{item.badge || item.note || 'Kokama'}</span>
                  <button 
                    className="btn-audio-play-round"
                    onClick={() => handlePronounce(item.main, item.phonetic)}
                    title={`Pronunciar ${item.main}`}
                  >
                    🔊
                  </button>
                </div>

                <h5 className="term-main-kokama">{item.main}</h5>
                <span className="term-phonetic-text">{item.phonetic}</span>
                <p className="term-spanish-text">{item.sub}</p>

                {item.extra && (
                  <p className="term-extra-text">{item.extra}</p>
                )}

                {item.lore && (
                  <div className="term-lore-snippet">
                    <strong>Sabiduría:</strong> {item.lore}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
