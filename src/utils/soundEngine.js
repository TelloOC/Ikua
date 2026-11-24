// Motor de sonido Web Audio API para Ikua
// Provee efectos acústicos amazónicos naturales, pronunciación y sintetizador ambiental sin requerir archivos pesados externos.

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.ambientRunning = false;
    this.ambientNodes = null;
  }

  initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Tono de marimba / madera amazónica suave para clicks de tarjetas y botones
  playWoodClick() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.13);
    } catch {
      // Ignorar restricciones de audio del navegador si ocurren
    }
  }

  // Acorde armónico de campanas de bambú para aciertos y celebraciones
  playSuccess() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Acorde mayor brillante)
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + idx * 0.06 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.65);
      });
    } catch {
      // Audio context silently handled
    }
  }

  // Tono suave para fallo en minijuegos
  playGentleOops() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(190, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.26);
    } catch {
      // Audio fallback
    }
  }

  // Pronunciación de voz usando Web Speech API
  speak(text, phoneticGuide = null) {
    if (!('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      // Si hay guía fonética simplificada en español, pronunciar fonéticamente para sonido fidedigno
      const toSay = phoneticGuide
        ? phoneticGuide.replace(/\[|\]/g, '').replace(/yú/g, 'yu').replace(/güé/g, 'güe')
        : text;

      const utterance = new SpeechSynthesisUtterance(toSay);
      utterance.lang = 'es-PE'; // Voz peruana/hispana para máxima claridad fonética
      utterance.rate = 0.85; // Un poco más pausado para fines educativos
      utterance.pitch = 1.0;

      // Buscar si hay voz en español
      const voices = window.speechSynthesis.getVoices();
      const esVoice = voices.find(v => v.lang.startsWith('es-') || v.lang === 'es');
      if (esVoice) {
        utterance.voice = esVoice;
      }

      window.speechSynthesis.speak(utterance);
      this.playWoodClick();
    } catch {
      // Fallback
    }
  }

  // Generador de ambiente sonoro de la selva (río y brisa) con Web Audio API
  toggleAmbient(callback) {
    this.initCtx();
    if (!this.ctx) return false;

    if (this.ambientRunning) {
      if (this.ambientNodes) {
        this.ambientNodes.gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
        setTimeout(() => {
          if (this.ambientNodes) {
            this.ambientNodes.source.stop();
            this.ambientNodes = null;
          }
        }, 900);
      }
      this.ambientRunning = false;
      if (callback) callback(false);
      return false;
    } else {
      // Generar ruido blanco filtrado simulando corriente de agua serena del Marañón
      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02; // Ruido marrón (brownian noise)
        lastOut = output[i];
        output[i] *= 3.5;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filtro pasa bajos para sonido de agua suave
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 1.2);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
      this.ambientNodes = { source: whiteNoise, gain, filter };
      this.ambientRunning = true;
      if (callback) callback(true);
      return true;
    }
  }
}

export const sounds = new SoundEngine();
