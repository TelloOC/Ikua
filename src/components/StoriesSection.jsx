import { useState } from 'react';
import { storiesData } from '../data/kokamaData';
import { sounds } from '../utils/soundEngine';

export default function StoriesSection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [readingMode, setReadingMode] = useState('bilingual'); // 'bilingual', 'kokama', 'spanish'
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const currentStory = storiesData[activeStoryIndex];

  const handleSelectStory = (idx) => {
    sounds.playWoodClick();
    setActiveStoryIndex(idx);
    setIsPlayingAudio(false);
  };

  const handleNarration = () => {
    setIsPlayingAudio(true);
    sounds.speak(
      currentStory.title + ". " + currentStory.spanishExcerpt,
      null
    );
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 8000);
  };

  return (
    <section id="cuentos" className="section-container stories-section">
      <div className="section-header">
        <span className="section-eyebrow">Tradición Oral de Nauta y Pacaya Samiria</span>
        <h2 className="section-title">Cuentos y Leyendas en Lengua Kokama</h2>
        <p className="section-subtitle">
          Relatos transmitidos por generaciones junto al fuego y a orillas del río Marañón, 
          con sus textos originales en Kokama y su correspondiente traducción al español.
        </p>
      </div>

      {/* Story Selection Pills / Thumbnails */}
      <div className="stories-selector-grid">
        {storiesData.map((story, idx) => {
          const isCurrent = idx === activeStoryIndex;
          return (
            <button
              key={story.id}
              className={`story-selector-card ${isCurrent ? 'active' : ''}`}
              onClick={() => handleSelectStory(idx)}
            >
              <div className="selector-img-wrap">
                <img src={story.image} alt={story.title} className="selector-thumbnail" />
                <span className="selector-badge">{story.badge}</span>
              </div>
              <div className="selector-info">
                <h4 className="selector-title">{story.title}</h4>
                <span className="selector-kokama-sub">{story.kokamaTitle}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Story Interactive Reader */}
      <div className="story-reader-card animate-fade-in">
        {/* Story Reader Top Banner */}
        <div className="story-reader-hero">
          <div className="reader-hero-bg">
            <img src={currentStory.image} alt={currentStory.title} className="reader-hero-img" />
            <div className="reader-hero-gradient"></div>
          </div>

          <div className="reader-hero-content">
            <div className="reader-tags-row">
              <span className="tag-river">🌊 {currentStory.river}</span>
              <span className="tag-badge">📜 {currentStory.badge}</span>
            </div>

            <h3 className="reader-title-spanish">{currentStory.title}</h3>
            <h4 className="reader-title-kokama"><em>{currentStory.kokamaTitle}</em></h4>
            <p className="reader-summary">{currentStory.summary}</p>

            {/* Controls Bar */}
            <div className="reader-action-bar">
              <button 
                className={`btn-narrator ${isPlayingAudio ? 'playing' : ''}`}
                onClick={handleNarration}
              >
                <span>{isPlayingAudio ? '🔊 Narrando relato...' : '🔊 Escuchar Resumen'}</span>
              </button>

              {/* View Mode Toggle */}
              <div className="view-mode-toggle">
                <span className="mode-label">Modo de lectura:</span>
                <button
                  className={`btn-mode-pill ${readingMode === 'bilingual' ? 'active' : ''}`}
                  onClick={() => setReadingMode('bilingual')}
                >
                  Bilingüe Paralelo
                </button>
                <button
                  className={`btn-mode-pill ${readingMode === 'kokama' ? 'active' : ''}`}
                  onClick={() => setReadingMode('kokama')}
                >
                  Kokama
                </button>
                <button
                  className={`btn-mode-pill ${readingMode === 'spanish' ? 'active' : ''}`}
                  onClick={() => setReadingMode('spanish')}
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Story Body Text Columns */}
        <div className={`story-body-container mode-${readingMode}`}>
          {/* Kokama Text Column */}
          {(readingMode === 'bilingual' || readingMode === 'kokama') && (
            <div className="story-column column-kokama">
              <div className="column-header">
                <span className="lang-flag">🌿</span>
                <h5>Versión en Lengua Kokama</h5>
              </div>
              <div className="story-paragraphs">
                {currentStory.fullStoryKokama.split('\n').map((paragraph, i) => (
                  <p key={i} className="story-text-kokama">{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Spanish Text Column */}
          {(readingMode === 'bilingual' || readingMode === 'spanish') && (
            <div className="story-column column-spanish">
              <div className="column-header">
                <span className="lang-flag">📖</span>
                <h5>Traducción y Sentido en Español</h5>
              </div>
              <div className="story-paragraphs">
                {currentStory.fullStorySpanish.split('\n').map((paragraph, i) => (
                  <p key={i} className="story-text-spanish">{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Story Moral / Cultural Wisdom Footer */}
        <div className="story-moral-footer">
          <div className="moral-icon">💡</div>
          <div className="moral-content">
            <span className="moral-eyebrow">Enseñanza y Cosmovisión de los Abuelos:</span>
            <p className="moral-text">"{currentStory.moral}"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
