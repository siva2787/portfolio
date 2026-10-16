import { NARRATION_SCRIPTS } from '../data/portfolioData';

export type NarrationState = 'idle' | 'speaking' | 'paused';

export interface NarrationListenerState {
  state: NarrationState;
  currentSectionId: string;
  currentScript: string;
  isMuted: boolean;
  autoNarrateOnScroll: boolean;
  showCaptions: boolean;
  audioLevel: number; // 0 to 1 for visualizer
}

type StateListener = (state: NarrationListenerState) => void;

class NarrationService {
  private state: NarrationState = 'idle';
  private currentSectionId: string = 'hero';
  private isMuted: boolean = false;
  private autoNarrateOnScroll: boolean = false; // Off by default to respect visitor consent
  private showCaptions: boolean = true;
  private listeners: Set<StateListener> = new Set();
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private visualizerInterval: number | null = null;
  private audioLevel: number = 0;
  private hasUserInteracted: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        // Warm up voices
      };
    }
  }

  public subscribe(listener: StateListener): () => void {
    this.listeners.add(listener);
    listener(this.getSnapshot());
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    const snapshot = this.getSnapshot();
    this.listeners.forEach((listener) => listener(snapshot));
  }

  public getSnapshot(): NarrationListenerState {
    const item = NARRATION_SCRIPTS[this.currentSectionId] || NARRATION_SCRIPTS['hero'];
    return {
      state: this.state,
      currentSectionId: this.currentSectionId,
      currentScript: item ? item.script : '',
      isMuted: this.isMuted,
      autoNarrateOnScroll: this.autoNarrateOnScroll,
      showCaptions: this.showCaptions,
      audioLevel: this.audioLevel,
    };
  }

  public setSection(sectionId: string): void {
    if (!NARRATION_SCRIPTS[sectionId]) return;

    const changed = this.currentSectionId !== sectionId;
    this.currentSectionId = sectionId;

    if (changed) {
      if (this.autoNarrateOnScroll && this.hasUserInteracted && !this.isMuted) {
        this.play(sectionId);
      } else {
        // If not playing, just update active script
        if (this.state === 'speaking') {
          // Keep current playing until finished, or notify script update
        }
        this.notify();
      }
    }
  }

  public play(sectionId?: string): void {
    this.hasUserInteracted = true;
    if (sectionId && NARRATION_SCRIPTS[sectionId]) {
      this.currentSectionId = sectionId;
    }

    const scriptData = NARRATION_SCRIPTS[this.currentSectionId] || NARRATION_SCRIPTS['hero'];
    if (!scriptData) return;

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      // Browser fallback without speech synthesis
      this.state = 'speaking';
      this.startSimulatedAudioLevel();
      this.notify();
      setTimeout(() => {
        this.stop();
      }, scriptData.estimatedDurationSeconds * 1000);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(scriptData.script);
    utterance.rate = 0.95; // Thoughtful, clear editorial pace
    utterance.pitch = 1.0;
    utterance.volume = this.isMuted ? 0 : 1;

    // Select preferred natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) => (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Daniel') || v.name.includes('Alex')) && v.lang.startsWith('en')
    ) || voices.find((v) => v.lang.startsWith('en'));

    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onstart = () => {
      this.state = 'speaking';
      this.startSimulatedAudioLevel();
      this.notify();
    };

    utterance.onend = () => {
      this.state = 'idle';
      this.stopSimulatedAudioLevel();
      this.notify();
    };

    utterance.onerror = () => {
      this.state = 'idle';
      this.stopSimulatedAudioLevel();
      this.notify();
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  public pause(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    this.state = 'paused';
    this.stopSimulatedAudioLevel();
    this.notify();
  }

  public resume(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        this.state = 'speaking';
        this.startSimulatedAudioLevel();
        this.notify();
        return;
      }
    }
    this.play(this.currentSectionId);
  }

  public stop(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.state = 'idle';
    this.stopSimulatedAudioLevel();
    this.notify();
  }

  public toggleMute(): void {
    this.isMuted = !this.isMuted;
    if (this.currentUtterance && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // If currently speaking, restart with updated volume or cancel
      if (this.state === 'speaking') {
        const currentSec = this.currentSectionId;
        this.stop();
        if (!this.isMuted) {
          this.play(currentSec);
        }
      }
    }
    this.notify();
  }

  public toggleAutoNarrate(): void {
    this.hasUserInteracted = true;
    this.autoNarrateOnScroll = !this.autoNarrateOnScroll;
    this.notify();
  }

  public toggleCaptions(): void {
    this.showCaptions = !this.showCaptions;
    this.notify();
  }

  private startSimulatedAudioLevel(): void {
    this.stopSimulatedAudioLevel();
    if (this.isMuted) {
      this.audioLevel = 0;
      return;
    }

    this.visualizerInterval = window.setInterval(() => {
      // Natural speech cadence simulation with peaks and pauses
      const rand = Math.random();
      this.audioLevel = rand > 0.85 ? 0.9 : rand > 0.3 ? 0.4 + Math.random() * 0.45 : 0.15;
      this.notify();
    }, 120);
  }

  private stopSimulatedAudioLevel(): void {
    if (this.visualizerInterval !== null) {
      clearInterval(this.visualizerInterval);
      this.visualizerInterval = null;
    }
    this.audioLevel = 0;
  }
}

export const narrationService = new NarrationService();
