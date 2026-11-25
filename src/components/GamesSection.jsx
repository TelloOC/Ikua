import { useState, useEffect } from 'react';
import { 
  gamesQuizData, 
  riverMissionData, 
  sentencePuzzleData, 
  soundMysteryData 
} from '../data/kokamaData';
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
  const [activeTab, setActiveTab] = useState('trivia'); // 'trivia', 'memoria', 'rio', 'frases', 'sonidos'

  // --- 1. Estado Trivia ---
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // --- 2. Estado Memoria ---
  const [memoryCards, setMemoryCards] = useState(generateMemoryCards);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [movesCount, setMovesCount] = useState(0);
  const [memoryWon, setMemoryWon] = useState(false);

  // --- 3. Estado Navegante del Marañón (Atrapa el Vocablo) ---
  const [riverIndex, setRiverIndex] = useState(0);
  const [riverScore, setRiverScore] = useState(0);
  const [riverStreak, setRiverStreak] = useState(0);
  const [riverLives, setRiverLives] = useState(3);
  const [riverAnswered, setRiverAnswered] = useState(false);
  const [riverSelectedOpt, setRiverSelectedOpt] = useState(null);
  const [riverFeedback, setRiverFeedback] = useState(null);
  const [riverGameOver, setRiverGameOver] = useState(false);

  // --- 4. Estado Armador Sagrado (Constructor de Frases) ---
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const currentPuzzle = sentencePuzzleData[puzzleIndex];
  const [placedWords, setPlacedWords] = useState([]);
  const [bankWords, setBankWords] = useState(() => {
    return [...sentencePuzzleData[0].words].sort(() => Math.random() - 0.5);
  });
  const [puzzleSuccess, setPuzzleSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [puzzleFinished, setPuzzleFinished] = useState(false);

  // --- 5. Estado El Oído de la Selva (Detective Acústico) ---
  const [soundIndex, setSoundIndex] = useState(0);
  const currentSound = soundMysteryData[soundIndex];
  const [soundScore, setSoundScore] = useState(0);
  const [soundChosenId, setSoundChosenId] = useState(null);
  const [soundAnswered, setSoundAnswered] = useState(false);
  const [soundFinished, setSoundFinished] = useState(false);

  // Auto-reproducir audio inicial al abrir el juego de detective
  useEffect(() => {
    if (activeTab === 'sonidos' && !soundAnswered && !soundFinished) {
      const timer = setTimeout(() => {
        sounds.speak(currentSound.audioWord, currentSound.phonetic);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [activeTab, soundIndex, soundAnswered, soundFinished, currentSound]);

  // Sincronizar palabras del banco de frases al cambiar de frase
  const initPuzzle = (idx) => {
    setPlacedWords([]);
    setShowHint(false);
    setPuzzleSuccess(false);
    setBankWords([...sentencePuzzleData[idx].words].sort(() => Math.random() - 0.5));
  };

  // --- LÓGICA TRIVIA ---
  const handleSelectQuizOption = (idx) => {
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

  // --- LÓGICA MEMORIA ---
  const handleResetMemory = () => {
    sounds.playWoodClick();
    setMemoryCards(generateMemoryCards());
    setFlippedIndexes([]);
    setMatchedIds([]);
    setMovesCount(0);
    setMemoryWon(false);
  };

  const handleMemoryCardClick = (index) => {
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

  // --- LÓGICA NAVEGANTE DEL MARAÑÓN ---
  const handleRiverChoice = (opt) => {
    if (riverAnswered || riverGameOver) return;
    setRiverSelectedOpt(opt.text);
    setRiverAnswered(true);

    if (opt.isCorrect) {
      sounds.playSuccess();
      const nextStreak = riverStreak + 1;
      const points = 100 + nextStreak * 30;
      setRiverScore(prev => prev + points);
      setRiverStreak(nextStreak);
      setRiverFeedback({ type: 'success', msg: `¡Excelente navegación! +${points} pts (Racha x${nextStreak})` });
    } else {
      sounds.playGentleOops();
      const newLives = riverLives - 1;
      setRiverLives(newLives);
      setRiverStreak(0);
      setRiverFeedback({ type: 'error', msg: `¡Cuidado con el remolino! La respuesta era ${riverMissionData[riverIndex].correctKokama}.` });

      if (newLives <= 0) {
        setRiverGameOver(true);
      }
    }
  };

  const handleNextRiver = () => {
    sounds.playWoodClick();
    setRiverAnswered(false);
    setRiverSelectedOpt(null);
    setRiverFeedback(null);

    if (riverIndex + 1 < riverMissionData.length) {
      setRiverIndex(prev => prev + 1);
    } else {
      setRiverGameOver(true);
    }
  };

  const handleRestartRiver = () => {
    sounds.playWoodClick();
    setRiverIndex(0);
    setRiverScore(0);
    setRiverStreak(0);
    setRiverLives(3);
    setRiverAnswered(false);
    setRiverSelectedOpt(null);
    setRiverFeedback(null);
    setRiverGameOver(false);
  };

  // --- LÓGICA ARMADOR SAGRADO ---
  const handlePickBankWord = (word, bankIdx) => {
    sounds.playWoodClick();
    const newPlaced = [...placedWords, word];
    const newBank = bankWords.filter((_, idx) => idx !== bankIdx);
    setPlacedWords(newPlaced);
    setBankWords(newBank);

    // Verificar si ya completó la frase
    if (newPlaced.length === currentPuzzle.words.length) {
      const isCorrect = newPlaced.every((w, i) => w === currentPuzzle.words[i]);
      if (isCorrect) {
        sounds.playSuccess();
        setPuzzleSuccess(true);
        setTimeout(() => {
          sounds.speak(currentPuzzle.words.join(' '), currentPuzzle.phonetic);
        }, 400);
      } else {
        sounds.playGentleOops();
      }
    }
  };

  const handleRemovePlacedWord = (word, placedIdx) => {
    sounds.playWoodClick();
    const newPlaced = placedWords.filter((_, idx) => idx !== placedIdx);
    const newBank = [...bankWords, word];
    setPlacedWords(newPlaced);
    setBankWords(newBank);
    setPuzzleSuccess(false);
  };

  const handleNextPuzzle = () => {
    sounds.playWoodClick();
    if (puzzleIndex + 1 < sentencePuzzleData.length) {
      const nextIdx = puzzleIndex + 1;
      setPuzzleIndex(nextIdx);
      initPuzzle(nextIdx);
    } else {
      setPuzzleFinished(true);
    }
  };

  const handleRestartPuzzle = () => {
    sounds.playWoodClick();
    setPuzzleIndex(0);
    setPuzzleFinished(false);
    initPuzzle(0);
  };

  // --- LÓGICA EL OÍDO DE LA SELVA ---
  const handleSoundCardPick = (opt) => {
    if (soundAnswered) return;
    setSoundChosenId(opt.id);
    setSoundAnswered(true);

    if (opt.isCorrect) {
      sounds.playSuccess();
      setSoundScore(prev => prev + 100);
    } else {
      sounds.playGentleOops();
    }
  };

  const handleReplayAudio = () => {
    sounds.speak(currentSound.audioWord, currentSound.phonetic);
  };

  const handleNextSound = () => {
    sounds.playWoodClick();
    setSoundChosenId(null);
    setSoundAnswered(false);

    if (soundIndex + 1 < soundMysteryData.length) {
      setSoundIndex(prev => prev + 1);
    } else {
      setSoundFinished(true);
    }
  };

  const handleRestartSound = () => {
    sounds.playWoodClick();
    setSoundIndex(0);
    setSoundScore(0);
    setSoundChosenId(null);
    setSoundAnswered(false);
    setSoundFinished(false);
  };

  return (
    <section id="juegos" className="section-container games-section">
      <div className="section-header">
        <span className="section-eyebrow">Entretenimiento Educativo</span>
        <h2 className="section-title">5 Minijuegos Interactivos de la Selva</h2>
        <p className="section-subtitle">
          Aprende vocabulario, entrena tu agilidad mental y conéctate con los relatos ancestrales a través de desafíos dinámicos.
        </p>
      </div>

      {/* Selector de los 5 Minijuegos */}
      <div className="games-tab-bar five-games-bar">
        <button
          className={`game-nav-btn ${activeTab === 'trivia' ? 'active' : ''}`}
          onClick={() => {
            sounds.playWoodClick();
            setActiveTab('trivia');
          }}
        >
          <span>🎯</span> Trivia
        </button>

        <button
          className={`game-nav-btn ${activeTab === 'memoria' ? 'active' : ''}`}
          onClick={() => {
            sounds.playWoodClick();
            setActiveTab('memoria');
          }}
        >
          <span>🃏</span> Memoria
        </button>

        <button
          className={`game-nav-btn ${activeTab === 'rio' ? 'active' : ''}`}
          onClick={() => {
            sounds.playWoodClick();
            setActiveTab('rio');
          }}
        >
          <span>🚣</span> Navegante
        </button>

        <button
          className={`game-nav-btn ${activeTab === 'frases' ? 'active' : ''}`}
          onClick={() => {
            sounds.playWoodClick();
            setActiveTab('frases');
          }}
        >
          <span>🧩</span> Armador
        </button>

        <button
          className={`game-nav-btn ${activeTab === 'sonidos' ? 'active' : ''}`}
          onClick={() => {
            sounds.playWoodClick();
            setActiveTab('sonidos');
          }}
        >
          <span>🔊</span> Oído Selva
        </button>
      </div>

      {/* =========================================================================
          1. JUEGO: TRIVIA KOKAMA
          ========================================================================= */}
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
                      onClick={() => handleSelectQuizOption(idx)}
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

      {/* =========================================================================
          2. JUEGO: MEMORIA DE LA SELVA
          ========================================================================= */}
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
                    onClick={() => handleMemoryCardClick(index)}
                  >
                    <div className="memory-card-inner">
                      <div className="memory-card-back">
                        <span className="back-pattern">🌿</span>
                        <span className="back-title">Ikua</span>
                      </div>

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

      {/* =========================================================================
          3. JUEGO NUEVO: NAVEGANTE DEL MARAÑÓN (Atrapa el Vocablo)
          ========================================================================= */}
      {activeTab === 'rio' && (
        <div className="game-screen-card animate-fade-in river-game-card">
          {!riverGameOver ? (
            <div className="river-game-arena">
              {/* Top River HUD */}
              <div className="river-hud-bar">
                <div className="river-lives">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className={`river-heart ${i < riverLives ? 'alive' : 'lost'}`}>
                      {i < riverLives ? '🛶' : '💨'}
                    </span>
                  ))}
                  <span className="hud-lives-label">Canoas restantes</span>
                </div>

                <div className="river-hud-center">
                  <span className="river-progress-pill">
                    Misión {riverIndex + 1} de {riverMissionData.length}
                  </span>
                  {riverStreak > 1 && (
                    <span className="river-streak-badge animate-fade-in">
                      🔥 Racha x{riverStreak}
                    </span>
                  )}
                </div>

                <div className="river-score-box">
                  <span className="river-score-label">Puntaje</span>
                  <span className="river-score-val">{riverScore} pts</span>
                </div>
              </div>

              {/* River Animated Graphic Header */}
              <div className="river-stream-banner">
                <div className="river-water-waves"></div>
                <div className="river-canoe-avatar">🛶</div>
                <div className="river-mission-box">
                  <span className="mission-tag">🎯 Misión Fluvial:</span>
                  <h4 className="mission-title">{riverMissionData[riverIndex].mission}</h4>
                  <p className="mission-hint"><em>Pista: {riverMissionData[riverIndex].targetHint}</em></p>
                </div>
              </div>

              {/* Floating River Logs (Choices) */}
              <div className="river-choices-grid">
                {riverMissionData[riverIndex].options.map((opt, i) => {
                  const isSelected = riverSelectedOpt === opt.text;
                  let choiceClass = 'river-log-card';

                  if (riverAnswered) {
                    if (opt.isCorrect) choiceClass += ' correct';
                    else if (isSelected) choiceClass += ' wrong';
                  }

                  return (
                    <button
                      key={i}
                      className={choiceClass}
                      onClick={() => handleRiverChoice(opt)}
                      disabled={riverAnswered}
                    >
                      <span className="log-water-ripple"></span>
                      <span className="log-icon">{opt.icon}</span>
                      <strong className="log-text">{opt.text}</strong>
                      <span className="log-sub">Toca para atrapar</span>
                      {riverAnswered && opt.isCorrect && <span className="log-badge-correct">¡Atrapado! ✓</span>}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and next button */}
              {riverFeedback && (
                <div className={`river-feedback-banner ${riverFeedback.type}`}>
                  <span>{riverFeedback.msg}</span>
                  <button className="btn-river-next" onClick={handleNextRiver}>
                    {riverIndex + 1 < riverMissionData.length ? 'Siguiente Corriente ➔' : 'Ver Resultado Fluvial 🏆'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="river-results-card text-center animate-fade-in">
              <span className="river-end-icon">{riverLives > 0 ? '🌊' : '🛶'}</span>
              <h3>{riverLives > 0 ? '¡Gran Navegante del Marañón!' : '¡Las corrientes te vencieron!'}</h3>
              <p className="river-end-score">Puntaje final acumulado: <strong>{riverScore}</strong> pts</p>
              <p className="river-end-desc">
                {riverScore >= 450 
                  ? '¡Dominas la corriente como los antiguos abuelos de Nauta! Tus reflejos con el vocabulario Kokama son admirables.' 
                  : 'Sigue practicando en el río. Conocer las palabras del agua te convertirá en un maestro navegante.'}
              </p>
              <button className="btn-primary-amazon" onClick={handleRestartRiver}>
                🔄 Volver a Navegar
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          4. JUEGO NUEVO: ARMADOR SAGRADO (Constructor de Frases)
          ========================================================================= */}
      {activeTab === 'frases' && (
        <div className="game-screen-card animate-fade-in sentence-game-card">
          {!puzzleFinished ? (
            <div className="puzzle-arena">
              <div className="puzzle-top-row">
                <span className="puzzle-level-tag">
                  Frase {puzzleIndex + 1} de {sentencePuzzleData.length}
                </span>
                <button 
                  className="btn-puzzle-hint"
                  onClick={() => setShowHint(!showHint)}
                >
                  💡 {showHint ? 'Ocultar Pista' : 'Pista Ancestral'}
                </button>
              </div>

              {/* Spanish Goal Banner */}
              <div className="puzzle-goal-banner">
                <span className="goal-eyebrow">Construye en Kokama esta frase:</span>
                <h3 className="goal-spanish">"{currentPuzzle.spanish}"</h3>
                {showHint && (
                  <p className="goal-hint-text animate-fade-in">
                    🔍 <strong>Pista:</strong> {currentPuzzle.hint}
                  </p>
                )}
              </div>

              {/* Active Placement Board */}
              <div className="puzzle-placement-board">
                <span className="board-label">Tablero Ceremonial:</span>
                <div className="placed-tiles-row">
                  {placedWords.length === 0 ? (
                    <span className="empty-board-prompt">
                      👆 Toca las fichas de abajo en el orden correcto para armar la frase
                    </span>
                  ) : (
                    placedWords.map((word, idx) => (
                      <button
                        key={idx}
                        className="tile-placed"
                        onClick={() => handleRemovePlacedWord(word, idx)}
                        title="Toca para devolver la ficha al banco"
                      >
                        <span className="tile-text">{word}</span>
                        <span className="tile-remove-x">✕</span>
                      </button>
                    ))
                  )}
                </div>
              </div>

              {/* Word Bank */}
              <div className="puzzle-bank-section">
                <span className="bank-label">Fichas de madera disponibles:</span>
                <div className="bank-tiles-row">
                  {bankWords.map((word, idx) => (
                    <button
                      key={idx}
                      className="tile-bank-btn"
                      onClick={() => handlePickBankWord(word, idx)}
                    >
                      <span>{word}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Success Reveal Banner */}
              {puzzleSuccess && (
                <div className="puzzle-success-banner animate-fade-in">
                  <div className="puzzle-success-content">
                    <span className="success-sparkle">✨ ¡Frase Sagrada Armada!</span>
                    <h4 className="assembled-phrase-kokama">"{currentPuzzle.words.join(' ')}"</h4>
                    <span className="assembled-phonetic">{currentPuzzle.phonetic}</span>
                    <p className="assembled-lore">📜 <strong>Sabiduría:</strong> {currentPuzzle.lore}</p>
                  </div>
                  <div className="puzzle-success-actions">
                    <button 
                      className="btn-puzzle-speak"
                      onClick={() => sounds.speak(currentPuzzle.words.join(' '), currentPuzzle.phonetic)}
                    >
                      🔊 Escuchar
                    </button>
                    <button className="btn-puzzle-next" onClick={handleNextPuzzle}>
                      {puzzleIndex + 1 < sentencePuzzleData.length ? 'Siguiente Frase ➔' : 'Completar Taller 🎉'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="puzzle-victory-card text-center animate-fade-in">
              <span className="victory-icon">📜</span>
              <h3>¡Dominaste la Gramática Kokama!</h3>
              <p>Construiste con éxito todas las frases ancestrales de la lengua del agua.</p>
              <button className="btn-primary-amazon" onClick={handleRestartPuzzle}>
                🔄 Armar de Nuevo
              </button>
            </div>
          )}
        </div>
      )}

      {/* =========================================================================
          5. JUEGO NUEVO: EL OÍDO DE LA SELVA (Detective Acústico)
          ========================================================================= */}
      {activeTab === 'sonidos' && (
        <div className="game-screen-card animate-fade-in sound-detective-card">
          {!soundFinished ? (
            <div className="detective-arena">
              <div className="detective-top-bar">
                <span className="detective-step">Ronda {soundIndex + 1} de {soundMysteryData.length}</span>
                <span className="detective-score-badge">Puntos: {soundScore} pts</span>
              </div>

              {/* Audio Mystery Central Transmitter */}
              <div className="detective-audio-beacon">
                <span className="beacon-waves"></span>
                <button 
                  className="btn-beacon-listen"
                  onClick={handleReplayAudio}
                  title="Haz clic para volver a escuchar el sonido"
                >
                  <span className="beacon-icon">🔊</span>
                  <span className="beacon-text">Escuchar Sonido de la Selva</span>
                  <span className="beacon-sub">Toca para repetir</span>
                </button>
                <h4 className="detective-question-text">{currentSound.question}</h4>
              </div>

              {/* Mystery Illustrated Cards Grid */}
              <div className="detective-options-grid">
                {currentSound.options.map((opt) => {
                  const isChosen = soundChosenId === opt.id;
                  let cardClass = 'detective-card';

                  if (soundAnswered) {
                    if (opt.isCorrect) cardClass += ' revealed-correct';
                    else if (isChosen) cardClass += ' revealed-wrong';
                  }

                  return (
                    <button
                      key={opt.id}
                      className={cardClass}
                      onClick={() => handleSoundCardPick(opt)}
                      disabled={soundAnswered}
                    >
                      <div className="detective-card-icon-wrap">
                        <span className="detective-card-icon">{opt.icon}</span>
                      </div>
                      <strong className="detective-card-name">{opt.name}</strong>
                      <span className="detective-card-action">
                        {soundAnswered ? (opt.isCorrect ? '✓ ¡Era este!' : '') : '¿Es este?'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Reveal Explanation */}
              {soundAnswered && (
                <div className={`detective-reveal-box ${currentSound.options.find(o => o.id === soundChosenId)?.isCorrect ? 'correct' : 'wrong'}`}>
                  <p className="reveal-lore-text">
                    {currentSound.options.find(o => o.isCorrect)?.lore}
                  </p>
                  <button className="btn-detective-next" onClick={handleNextSound}>
                    {soundIndex + 1 < soundMysteryData.length ? 'Siguiente Sonido ➔' : 'Ver Récord Acústico 🏆'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="detective-results-card text-center animate-fade-in">
              <span className="results-badge-icon">🎧</span>
              <h3>¡Oído de Guardián Amazónico!</h3>
              <p className="results-score-highlight">Obtuviste <strong>{soundScore}</strong> puntos acústicos.</p>
              <div className="results-rank-box">
                <span className="rank-emoji">🌿</span>
                <h4>Tu capacidad auditiva identifica el alma del Kokama</h4>
                <p>Tu agudeza para reconocer las palabras del agua te conecta profundamente con la memoria de los abuelos.</p>
              </div>
              <button className="btn-primary-amazon" onClick={handleRestartSound}>
                🔄 Jugar de Nuevo
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
