import { useState } from 'react';
import { gamesQuizData } from '../data/kokamaData';
import { sounds } from '../utils/soundEngine';

// Generador de cartas para el juego de memoria
function generateMemoryCards() {
  const basePairs = [
    { pairId: 1, text: "Yawar", sub: "Jaguar / Otorongo", icon: "🐆", type: "kokama" },
    { pairId: 1, text: "Otorongo", sub: "Yawar", icon: "🐆", type: "spanish" },
    { pairId: 2, text: "Wapuri", sub: "Bufeo Colorado", icon: "🐬", type: "kokama" },
    { pairId: 2, text: "Bufeo Colorado", sub: "Wapuri", icon: "🐬", type: "spanish" },
    { pairId: 3, text: "Arara", sub: "Guacamayo Rojo", icon: "🦜", type: "kokama" },
    { pairId: 3, text: "Guacamayo", sub: "Arara", icon: "🦜", type: "spanish" },
    { pairId: 4, text: "Warakusu", sub: "Paiche Gigante", icon: "🐟", type: "kokama" },
    { pairId: 4, text: "Paiche", sub: "Warakusu", icon: "🐟", type: "spanish" },
    { pairId: 5, text: "Wepɨ", sub: "Número Uno", icon: "1️⃣", type: "kokama" },
    { pairId: 5, text: "Uno", sub: "Wepɨ", icon: "1️⃣", type: "spanish" },
    { pairId: 6, text: "Etepe", sub: "Hola / Saludo", icon: "👋", type: "kokama" },
    { pairId: 6, text: "Hola", sub: "Etepe", icon: "👋", type: "spanish" }
  ];

  return [...basePairs].sort(() => Math.random() - 0.5).map((card, idx) => ({
    ...card,
    uniqueId: idx
  }));
}

export default function GamesSection() {
  const [activeTab, setActiveTab] = useState('trivia'); // 'trivia', 'memoria'

  // --- Estado para el juego de Trivia ---
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // --- Estado para el juego de Memoria ---
  const [memoryCards, setMemoryCards] = useState(generateMemoryCards);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [movesCount, setMovesCount] = useState(0);
  const [memoryWon, setMemoryWon] = useState(false);

  // Reiniciar juego de memoria
  const handleResetMemory = () => {
    sounds.playWoodClick();
    setMemoryCards(generateMemoryCards());
    setFlippedIndexes([]);
    setMatchedIds([]);
    setMovesCount(0);
    setMemoryWon(false);
  };

  // --- Lógica Trivia ---
  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const question = gamesQuizData[currentQuizIndex];
    if (idx === question.correct) {
      sounds.playSuccess();
      setQuizScore(prev => prev + 10);
    } else {
      sounds.playGentleOops();
    }
  };

  const handleNextQuiz = () => {
    sounds.playWoodClick();
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQuizIndex + 1 < gamesQuizData.length) {
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    sounds.playWoodClick();
    setCurrentQuizIndex(0);
    setQuizScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizFinished(false);
  };

  // --- Lógica Memoria ---
  const handleCardClick = (index) => {
    if (flippedIndexes.length === 2 || flippedIndexes.includes(index)) return;
    const card = memoryCards[index];
    if (matchedIds.includes(card.pairId)) return;

    sounds.playWoodClick();
    const newFlipped = [...flippedIndexes, index];
    setFlippedIndexes(newFlipped);

    if (newFlipped.length === 2) {
      setMovesCount(prev => prev + 1);
      const card1 = memoryCards[newFlipped[0]];
      const card2 = memoryCards[newFlipped[1]];

      if (card1.pairId === card2.pairId) {
        sounds.playSuccess();
        const newMatched = [...matchedIds, card1.pairId];
        setMatchedIds(newMatched);
        setFlippedIndexes([]);

        if (newMatched.length === 6) {
          setMemoryWon(true);
        }
      } else {
        setTimeout(() => {
          setFlippedIndexes([]);
        }, 1100);
      }
    }
  };

  return (
    <section id="juegos" className="section-container games-section">
      <div className="section-header">
        <span className="section-eyebrow">Aprende Jugando</span>
        <h2 className="section-title">Juegos Interactivos de la Selva</h2>
        <p className="section-subtitle">
          Pon a prueba tu agilidad mental y memoria cultural con nuestros juegos didácticos en lengua Kokama.
        </p>
      </div>

      {/* Tabs Game Switcher */}
      <div className="games-tab-bar">
        <button
          className={`game-nav-btn ${activeTab === 'trivia' ? 'active' : ''}`}
          onClick={() => {
            sounds.playWoodClick();
            setActiveTab('trivia');
          }}
        >
          <span>🎯</span> Trivia Kokama
        </button>
        <button
          className={`game-nav-btn ${activeTab === 'memoria' ? 'active' : ''}`}
          onClick={() => {
            sounds.playWoodClick();
            setActiveTab('memoria');
          }}
        >
          <span>🃏</span> Memoria de la Selva
        </button>
      </div>

      {/* --- PANEL TRIVIA --- */}
      {activeTab === 'trivia' && (
        <div className="game-screen-card animate-fade-in">
          {!quizFinished ? (
            <div className="quiz-play-area">
              <div className="quiz-top-info">
                <span className="quiz-progress-badge">
                  Pregunta {currentQuizIndex + 1} de {gamesQuizData.length}
                </span>
                <span className="quiz-score-pill">Puntaje: {quizScore} pts</span>
              </div>

              {/* Progress bar */}
              <div className="quiz-progress-track">
                <div 
                  className="quiz-progress-fill"
                  style={{ width: `${((currentQuizIndex + 1) / gamesQuizData.length) * 100}%` }}
                ></div>
              </div>

              <h3 className="quiz-question-text">
                {gamesQuizData[currentQuizIndex].question}
              </h3>

              <div className="quiz-options-grid">
                {gamesQuizData[currentQuizIndex].options.map((option, idx) => {
                  const isCorrect = idx === gamesQuizData[currentQuizIndex].correct;
                  const isChosen = selectedOption === idx;
                  let btnClass = 'quiz-option-btn';

                  if (isAnswered) {
                    if (isCorrect) btnClass += ' correct';
                    else if (isChosen) btnClass += ' wrong';
                  }

                  return (
                    <button
                      key={idx}
                      className={btnClass}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                    >
                      <span className="option-letter">{['A', 'B', 'C', 'D'][idx]}</span>
                      <span className="option-label">{option}</span>
                      {isAnswered && isCorrect && <span className="option-mark">✓</span>}
                      {isAnswered && isChosen && !isCorrect && <span className="option-mark">✕</span>}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation */}
              {isAnswered && (
                <div className={`quiz-feedback-box ${selectedOption === gamesQuizData[currentQuizIndex].correct ? 'correct' : 'wrong'}`}>
                  <p>
                    <strong>
                      {selectedOption === gamesQuizData[currentQuizIndex].correct ? '¡Correcto!' : '¡Respuesta equivocada!'}
                    </strong>{' '}
                    {gamesQuizData[currentQuizIndex].explanation}
                  </p>
                  <button className="btn-quiz-next" onClick={handleNextQuiz}>
                    {currentQuizIndex + 1 < gamesQuizData.length ? 'Siguiente Pregunta ➔' : 'Ver Resultados Finales 🎉'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="quiz-results-screen text-center">
              <span className="results-badge-icon">🏆</span>
              <h3>¡Desafío Kokama Completado!</h3>
              <p className="results-score-highlight">
                Obtuviste <strong>{quizScore}</strong> puntos de {gamesQuizData.length * 10} posibles.
              </p>

              <div className="results-rank-box">
                {quizScore >= 70 ? (
                  <>
                    <span className="rank-emoji">👑</span>
                    <h4>Rango: Sabio del Río Marañón</h4>
                    <p>¡Dominas con excelencia los conceptos y vocablos del pueblo Kukama!</p>
                  </>
                ) : (
                  <>
                    <span className="rank-emoji">🌿</span>
                    <h4>Rango: Explorador de la Selva</h4>
                    <p>Buen inicio. Repasa las tarjetas en la sección 'Aprender' para perfeccionar tu sabiduría.</p>
                  </>
                )}
              </div>

              <div className="results-actions">
                <button className="btn-primary-amazon" onClick={handleRestartQuiz}>
                  🔄 Jugar de Nuevo
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- PANEL JUEGO DE MEMORIA --- */}
      {activeTab === 'memoria' && (
        <div className="game-screen-card animate-fade-in">
          <div className="memory-top-bar">
            <div>
              <span className="memory-instruction">
                Encuentra las parejas correspondientes entre el término en Kokama y su significado en español.
              </span>
            </div>
            <div className="memory-stats-group">
              <span className="memory-stat-chip">Movimientos: {movesCount}</span>
              <span className="memory-stat-chip">Parejas: {matchedIds.length} / 6</span>
              <button className="btn-memory-reset" onClick={handleResetMemory}>
                🔄 Reiniciar
              </button>
            </div>
          </div>

          {memoryWon ? (
            <div className="memory-victory-card text-center animate-fade-in">
              <span className="victory-icon">🎉</span>
              <h3>¡Felicidades, ganaste el juego de Memoria!</h3>
              <p>Completaste los 6 pares en <strong>{movesCount}</strong> movimientos.</p>
              <button className="btn-primary-amazon" onClick={handleResetMemory}>
                Jugar otra partida
              </button>
            </div>
          ) : (
            <div className="memory-board-grid">
              {memoryCards.map((card, index) => {
                const isFlipped = flippedIndexes.includes(index) || matchedIds.includes(card.pairId);
                const isMatched = matchedIds.includes(card.pairId);

                return (
                  <div
                    key={card.uniqueId}
                    className={`memory-card-item ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`}
                    onClick={() => handleCardClick(index)}
                  >
                    <div className="memory-card-inner">
                      {/* Dorso (oculto) */}
                      <div className="memory-card-back">
                        <span className="back-pattern">🌿</span>
                        <span className="back-title">Ikua</span>
                      </div>

                      {/* Cara (visible al voltear) */}
                      <div className="memory-card-front">
                        <span className="card-emoji-mini">{card.icon}</span>
                        <strong className="card-term-title">{card.text}</strong>
                        <span className="card-term-type">{card.type === 'kokama' ? 'Kokama' : 'Español'}</span>
                        <span className="card-term-sub">{card.sub}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
