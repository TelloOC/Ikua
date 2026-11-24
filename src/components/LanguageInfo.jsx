import { useState } from 'react';
import { sounds } from '../utils/soundEngine';

export default function LanguageInfo() {
  const [activeTab, setActiveTab] = useState('origen');

  const tabs = [
    { id: 'origen', label: '🌿 Origen y Pueblo', icon: '🛶' },
    { id: 'linguistica', label: '🔤 Rasgos de la Lengua', icon: '🗣️' },
    { id: 'importancia', label: '🌟 ¿Por qué Preservarla?', icon: '🛡️' },
    { id: 'territorio', label: '📍 Territorio y Loreto', icon: '🗺️' }
  ];

  return (
    <section id="lengua" className="section-container language-info-section">
      <div className="section-header">
        <span className="section-eyebrow">Conocimiento Ancestral</span>
        <h2 className="section-title">La Lengua Kokama: Memoria Viva del Río</h2>
        <p className="section-subtitle">
          El pueblo Kukama-Kukamiria custodia uno de los legados lingüísticos más ricos 
          de la Amazonía peruana, forjado a lo largo de siglos entre los meandros del agua.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="tab-pill-bar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-pill-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => {
              sounds.playWoodClick();
              setActiveTab(tab.id);
            }}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Contents */}
      <div className="tab-content-panel">
        {activeTab === 'origen' && (
          <div className="info-grid-2col animate-fade-in">
            <div className="info-text-col">
              <span className="info-badge">Pueblo Kukama-Kukamiria</span>
              <h3 className="info-heading">Grandes Navegantes de la Familia Tupí-Guaraní</h3>
              <p>
                Los Kokama son reconocidos históricamente como <em>"La Gente del Agua"</em>. 
                Sus antepasados realizaron colosales migraciones fluviales desde las cuencas 
                del Amazonas oriental hasta establecerse en las confluencias de los ríos 
                <strong> Huallaga, Marañón y Ucayali</strong> en el actual departamento de Loreto, Perú.
              </p>
              <p>
                Su economía y cosmovisión giran en torno a la pesca sustentable, el cultivo 
                en barriales y restingas, y un vínculo fraternal con los espíritus que protegen 
                las aguas.
              </p>

              <div className="quote-box">
                <span className="quote-icon">“</span>
                <p className="quote-text">
                  Para el pueblo Kukama, el río no es un camino de agua; es un ser con alma y 
                  nuestra primera escuela de vida.
                </p>
                <span className="quote-author">— Sabia abuela de la comunidad de Nauta</span>
              </div>
            </div>

            <div className="info-image-col">
              <img 
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=900&q=80" 
                alt="Selva baja peruana y meandros de agua"
                className="info-feature-img"
              />
              <div className="image-caption-card">
                <strong>Reserva Nacional Pacaya Samiria</strong>
                <p>Territorio ancestral donde la lengua y la vida silvestre conviven en armonía.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'linguistica' && (
          <div className="info-grid-2col animate-fade-in">
            <div className="info-text-col">
              <span className="info-badge">Familia Tupí-Guaraní</span>
              <h3 className="info-heading">Peculiaridades Lingüísticas Fascinantes</h3>
              <p>
                La lengua Kokama (o Cocama-Cocamilla) posee características que asombran a los lingüistas 
                de todo el mundo:
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon-bubble">ɨ</div>
                  <div>
                    <strong>La Sexta Vocal Central 'ɨ':</strong>
                    <p>Un sonido gutural articulado en el centro del paladar, vital en palabras como <em>Wepɨ</em> (Uno) o <em>Yawatï</em> (Tortuga).</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-bubble">👥</div>
                  <div>
                    <strong>Distinción de Habla Femenina y Masculina:</strong>
                    <p>En el Kokama tradicional existen pronombres y partículas distintas según si quien habla es mujer o varón, reflejando roles de reciprocidad ancestral.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-bubble">🌿</div>
                  <div>
                    <strong>Riqueza Etnobotánica Inigualable:</strong>
                    <p>Posee nombres precisos para cientos de plantas medicinales, peces y tipos de lluvia que no existen en ningún otro idioma occidental.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-interactive-col">
              <div className="interactive-pronounce-card">
                <h4>Practica la Pronunciación</h4>
                <p>Escucha cómo suenan las expresiones fundamentales:</p>

                <div className="sample-phrases-list">
                  <div className="phrase-row">
                    <div>
                      <strong className="phrase-kokama">Etepe</strong>
                      <span className="phrase-trans">Hola / Saludo de paz</span>
                    </div>
                    <button 
                      className="btn-mini-audio"
                      onClick={() => sounds.speak("Etepe", "[e-te-pe]")}
                    >
                      🔊 Escuchar
                    </button>
                  </div>

                  <div className="phrase-row">
                    <div>
                      <strong className="phrase-kokama">Mai katu</strong>
                      <span className="phrase-trans">¿Cómo estás?</span>
                    </div>
                    <button 
                      className="btn-mini-audio"
                      onClick={() => sounds.speak("Mai katu", "[mai ka-tu]")}
                    >
                      🔊 Escuchar
                    </button>
                  </div>

                  <div className="phrase-row">
                    <div>
                      <strong className="phrase-kokama">Irapatse</strong>
                      <span className="phrase-trans">Muchas gracias</span>
                    </div>
                    <button 
                      className="btn-mini-audio"
                      onClick={() => sounds.speak("Irapatse", "[i-ra-pat-se]")}
                    >
                      🔊 Escuchar
                    </button>
                  </div>

                  <div className="phrase-row">
                    <div>
                      <strong className="phrase-kokama">Ikua tsupi</strong>
                      <span className="phrase-trans">Verdadera sabiduría</span>
                    </div>
                    <button 
                      className="btn-mini-audio"
                      onClick={() => sounds.speak("Ikua tsupi", "[i-kwa tsu-pi]")}
                    >
                      🔊 Escuchar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'importancia' && (
          <div className="info-grid-2col animate-fade-in">
            <div className="info-text-col">
              <span className="info-badge">Urgencia y Compromiso</span>
              <h3 className="info-heading">¿Por Qué es Vital Salvar y Aprender el Kokama?</h3>
              <p>
                Actualmente, la lengua Kukama-Kukamiria se encuentra catalogada como 
                <strong> severamente amenazada</strong> por la UNESCO y el Ministerio de Cultura del Perú. 
                La mayoría de hablantes fluidos son ancianos sabios que guardan en su memoria cantos curativos, 
                mapas de ríos y nombres sagrados.
              </p>
              
              <ul className="benefit-checklist">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Memoria Ecológica:</strong> La lengua preserva clasificaciones botánicas y biológicas milenarias que ayudan a la ciencia moderna a proteger la Amazonía.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Dignidad e Identidad:</strong> Los niños y jóvenes de Nauta y Requena recuperan su orgullo cultural frente a la discriminación histórica.
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Cultura Viva y Canto:</strong> Con cada palabra que aprendemos, el canto del río y de las aves amazónicas continúa sonando en el mundo.
                  </div>
                </li>
              </ul>
            </div>

            <div className="info-card-highlight">
              <div className="highlight-banner">
                <span className="banner-icon">📻</span>
                <div>
                  <h4>Radio Ucamara y la Juventud</h4>
                  <p>
                    En la ciudad de Nauta (Loreto), la radio comunitaria Radio Ucamara ha creado 
                    talleres de rap y videoclips virales como <em>"Kumbarikira"</em>, demostrando 
                    que el Kokama vive y se renueva con la música moderna.
                  </p>
                </div>
              </div>
              <div className="stat-callout">
                <span className="number-large">+120</span>
                <span>Comunidades nativas en Loreto y Ucayali luchando por la educación bilingüe intercultural</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'territorio' && (
          <div className="info-grid-2col animate-fade-in">
            <div className="info-text-col">
              <span className="info-badge">Geografía Peruana</span>
              <h3 className="info-heading">Las Cuencas del Marañón, Huallaga y Ucayali</h3>
              <p>
                El territorio del pueblo Kukama abarca los bosques aluviales más productivos del planeta. 
                Se encuentran distribuidos principalmente en las provincias de:
              </p>
              <div className="provinces-badges">
                <span className="prov-tag">📍 Loreto - Nauta</span>
                <span className="prov-tag">📍 Requena</span>
                <span className="prov-tag">📍 Alto Amazonas (Yurimaguas)</span>
                <span className="prov-tag">📍 Maynas (Iquitos)</span>
                <span className="prov-tag">📍 Ucayali</span>
              </div>
              <p>
                La confluencia del Marañón con el Ucayali, punto exacto donde nace formalmente 
                el <strong>río Amazonas</strong>, es el corazón espiritual de su cosmología.
              </p>
            </div>

            <div className="info-map-visual">
              <div className="map-artistic-card">
                <div className="map-river-graphic">
                  <svg viewBox="0 0 300 200" className="river-art-svg">
                    {/* Marañón */}
                    <path d="M20 50 Q 80 40 140 100" stroke="#40916c" strokeWidth="8" fill="none" strokeLinecap="round" />
                    {/* Ucayali */}
                    <path d="M20 160 Q 90 150 140 100" stroke="#52b788" strokeWidth="8" fill="none" strokeLinecap="round" />
                    {/* Amazonas */}
                    <path d="M140 100 Q 210 90 280 110" stroke="#2d6a4f" strokeWidth="12" fill="none" strokeLinecap="round" />
                    {/* Points */}
                    <circle cx="140" cy="100" r="7" fill="#e9c46a" />
                    <text x="130" y="80" fill="#f7f4ea" fontSize="11" fontWeight="bold">Nauta / Nacimiento Amazonas</text>
                    <text x="25" y="40" fill="#a06a42" fontSize="10">Río Marañón</text>
                    <text x="25" y="180" fill="#a06a42" fontSize="10">Río Ucayali</text>
                    <text x="210" y="135" fill="#f7f4ea" fontSize="10" fontWeight="bold">Río Amazonas ➔</text>
                  </svg>
                </div>
                <div className="map-text-footer">
                  <strong>La Confluencia Sagrada</strong>
                  <p>El punto de encuentro fluvial más imponente del planeta tierra.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
