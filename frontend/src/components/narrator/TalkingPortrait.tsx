import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, MessageSquare, Radio, Sparkles } from 'lucide-react';
import { narrationService } from '../../services/narrationService';
import type { NarrationListenerState } from '../../services/narrationService';
import { PERSONAL_IDENTITY, NARRATION_SCRIPTS } from '../../data/portfolioData';

interface TalkingPortraitProps {
  className?: string;
  compact?: boolean;
}

export const TalkingPortrait: React.FC<TalkingPortraitProps> = ({ className = '', compact = false }) => {
  const [narration, setNarration] = useState<NarrationListenerState>(narrationService.getSnapshot());
  const [hasStartedEver, setHasStartedEver] = useState(false);

  useEffect(() => {
    const unsubscribe = narrationService.subscribe((updated) => {
      setNarration(updated);
      if (updated.state === 'speaking') {
        setHasStartedEver(true);
      }
    });
    return unsubscribe;
  }, []);

  const currentMeta = NARRATION_SCRIPTS[narration.currentSectionId] || NARRATION_SCRIPTS['hero'];

  const handlePlayToggle = () => {
    if (narration.state === 'speaking') {
      narrationService.pause();
    } else if (narration.state === 'paused') {
      narrationService.resume();
    } else {
      narrationService.play(narration.currentSectionId);
    }
  };

  const handleRestart = () => {
    narrationService.play(narration.currentSectionId);
  };

  const handleMuteToggle = () => {
    narrationService.toggleMute();
  };

  const handleCaptionsToggle = () => {
    narrationService.toggleCaptions();
  };

  const handleAutoNarrateToggle = () => {
    narrationService.toggleAutoNarrate();
  };

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Outer Glow Halo synced with speech */}
      <div
        className={`absolute -inset-2 rounded-full transition-all duration-300 blur-xl ${
          narration.state === 'speaking'
            ? 'bg-primary-500/35 dark:bg-primary-500/45 scale-105'
            : 'bg-primary-500/10 dark:bg-primary-500/15 scale-95'
        }`}
        style={{
          transform: narration.state === 'speaking' ? `scale(${1 + narration.audioLevel * 0.12})` : undefined,
        }}
      />

      {/* Portrait Ring Frame */}
      <div
        className={`relative ${
          compact ? 'w-24 h-24' : 'w-48 h-48 md:w-56 md:h-56'
        } rounded-full p-[3px] bg-gradient-to-tr from-primary-600 via-accent-cyan to-accent-emerald shadow-2xl transition-transform duration-300 ${
          narration.state === 'speaking' ? 'ring-4 ring-primary-500/30 ring-offset-2 dark:ring-offset-slate-900' : ''
        }`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative group">
          <img
            src={PERSONAL_IDENTITY.avatarUrl}
            alt="Easwar S — AI/ML Engineer & Full-Stack Developer"
            className={`w-full h-full object-cover transition-all duration-500 ${
              narration.state === 'speaking' ? 'scale-105 brightness-105' : 'group-hover:scale-102'
            }`}
            loading="eager"
            onError={(e) => {
              // Graceful fallback to verified initials avatar if image fails
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />

          {/* Active Speaking Indicator Badge */}
          {narration.state === 'speaking' && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary-600/90 text-white text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center space-x-1 backdrop-blur-md shadow-md animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-ping" />
              <span>NARRATING</span>
            </div>
          )}
        </div>
      </div>

      {/* Audio Wave Visualizer Bars */}
      <div className="mt-3 flex items-center justify-center space-x-1 h-5" aria-hidden="true">
        {[0.4, 0.8, 1, 0.6, 0.9, 0.5, 0.7].map((barScale, idx) => {
          const height = narration.state === 'speaking'
            ? Math.max(4, Math.round(barScale * narration.audioLevel * 18))
            : 3;
          return (
            <span
              key={idx}
              className={`w-1 rounded-full transition-all duration-150 ${
                narration.state === 'speaking'
                  ? 'bg-primary-600 dark:bg-primary-400'
                  : 'bg-slate-300 dark:bg-slate-700'
              }`}
              style={{ height: `${height}px` }}
            />
          );
        })}
      </div>

      {/* Voice Controls Pill */}
      <div className="mt-2.5 glass-panel px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-lg border border-slate-200/80 dark:border-slate-800">
        <button
          onClick={handlePlayToggle}
          className={`flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
            narration.state === 'speaking'
              ? 'bg-primary-600 text-white'
              : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100'
          }`}
          title={narration.state === 'speaking' ? 'Pause Narration' : 'Listen to Easwar speak'}
          aria-label={narration.state === 'speaking' ? 'Pause audio story' : 'Play audio story'}
        >
          {narration.state === 'speaking' ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{hasStartedEver ? 'Resume' : 'Listen'}</span>
            </>
          )}
        </button>

        <button
          onClick={handleRestart}
          className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          title="Restart Section Story"
          aria-label="Restart current section narration"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleMuteToggle}
          className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          title={narration.isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={narration.isMuted ? 'Unmute voice' : 'Mute voice'}
        >
          {narration.isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-rose-500" />
          ) : (
            <Volume2 className="w-3.5 h-3.5" />
          )}
        </button>

        <button
          onClick={handleCaptionsToggle}
          className={`p-1.5 rounded-full transition-colors ${
            narration.showCaptions
              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40'
              : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          }`}
          title="Toggle Subtitle Captions"
          aria-label="Toggle live subtitle captions"
        >
          <MessageSquare className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={handleAutoNarrateToggle}
          className={`px-2 py-0.5 rounded-full text-[11px] font-mono flex items-center space-x-1 transition-colors ${
            narration.autoNarrateOnScroll
              ? 'bg-accent-emerald/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
              : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
          }`}
          title={narration.autoNarrateOnScroll ? 'Auto-narrate on scroll: ACTIVE' : 'Enable auto-narrate on scroll'}
          aria-label="Toggle auto narration on section scroll"
        >
          <Radio className="w-3 h-3" />
          <span className="hidden sm:inline">Auto</span>
        </button>
      </div>

      {/* Synchronized Subtitle Caption Box */}
      {narration.showCaptions && (
        <div className="mt-3.5 max-w-sm w-full mx-auto p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-md text-center transition-all animate-fadeIn">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500 mb-1">
            <span className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>{currentMeta.sectionTitle}</span>
            </span>
            <span>{narration.state === 'speaking' ? 'Speaking...' : 'Ready'}</span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans italic">
            "{currentMeta.script}"
          </p>
        </div>
      )}
    </div>
  );
};
