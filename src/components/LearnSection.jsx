import { useState } from 'react';
import { categoriesData } from '../data/kokamaData';
import { sounds } from '../utils/soundEngine';
import LearnDetailSection from './LearnDetailSection';

export default function LearnSection() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCardClick = (catId) => {
    sounds.playWoodClick();
    if (selectedCategoryId === catId) {
      // Si ya está abierto, se pliega/oculta
      setSelectedCategoryId(null);
    } else {
      // Se abre el módulo seleccionado
      setSelectedCategoryId(catId);
      setTimeout(() => {
        const detailEl = document.getElementById('modulo-interactivo-detalle');
        if (detailEl) {
          detailEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  };

  const handleChangeCategory = (catId) => {
    sounds.playWoodClick();
    setSelectedCategoryId(catId);
  };

  return (
    <section id="aprender" className="section-container learn-main-section">
      <div className="section-header">
        <span className="section-eyebrow">Módulos Didácticos</span>
        <h2 className="section-title">Estructura de Aprendizaje Kokama</h2>
        <p className="section-subtitle">
          Selecciona cualquiera de los módulos didácticos para interactuar directamente con su 
          contenido interno: tarjetas didácticas 3D, audios fonéticos, mini retos y catálogo de vocabulario.
        </p>
      </div>

      {/* 4 Category Cards acting as the interactive module selector */}
      <div className="category-cards-grid">
        {categoriesData.map((cat) => {
          const isSelected = selectedCategoryId === cat.id;
          return (
            <div
              key={cat.id}
              className={`interactive-learn-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleCardClick(cat.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCardClick(cat.id);
                }
              }}
              title={`Ver contenido didáctico de ${cat.subtitle}`}
            >
              <div className="card-top-indicator">
                <span className="card-badge-pill">{cat.badge}</span>
                <span className="card-count-tag">{cat.count}</span>
              </div>

              <div className="card-icon-presentation">
                <span className="card-big-emoji">{cat.icon}</span>
              </div>

              <div className="card-info-content">
                <h3 className="card-title-kokama">{cat.title}</h3>
                <h4 className="card-subtitle-spanish">{cat.subtitle}</h4>
                <p className="card-desc-text">{cat.description}</p>
              </div>

              <div className="card-action-bar">
                <span className="action-explore-text">
                  {isSelected ? '▲ Plegar Módulo' : 'Abrir Módulo ➔'}
                </span>
                <span className="action-circle-arrow">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Estructura Interna del Módulo Didáctico Activo (Visible únicamente al seleccionar) */}
      {selectedCategoryId && (
        <div className="module-internal-wrapper">
          <LearnDetailSection 
            selectedCategoryId={selectedCategoryId}
            onClose={() => setSelectedCategoryId(null)}
            onChangeCategory={handleChangeCategory}
          />
        </div>
      )}
    </section>
  );
}
