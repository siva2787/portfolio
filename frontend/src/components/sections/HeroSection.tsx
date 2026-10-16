import { ArrowDown, Mail, Terminal, Code2, BrainCircuit } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { PERSONAL_IDENTITY } from '../../data/portfolioData';
import { TalkingPortrait } from '../narrator/TalkingPortrait';
import { HeroScene } from '../3d/HeroScene';
import type { NarrationListenerState } from '../../services/narrationService';

interface HeroSectionProps {
  isDark: boolean;
  narration: NarrationListenerState;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark, narration }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-subtle"
    >
      {/* 3D Scene in background */}
      <HeroScene
        isDark={isDark}
        isSpeaking={narration.state === 'speaking'}
        audioLevel={narration.audioLevel}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Headline & Identity */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/10 border border-slate-900/10 dark:border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
              {PERSONAL_IDENTITY.statusBadge}
            </span>
          </div>

          {/* Main Title & Editorial Headline */}
          <div className="space-y-3">
            <p className="text-sm md:text-base font-mono uppercase tracking-widest text-primary-600 dark:text-primary-400 font-semibold">
              The Digital Portfolio of {PERSONAL_IDENTITY.name}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08]">
              Turning Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-indigo-500 to-accent-cyan">Meaningful Digital Experiences.</span>
            </h1>
          </div>

          {/* Credible Subheading */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
            AI/ML Engineer and Full-Stack Developer specializing in adaptive learning systems, intelligent web applications, and production engineering. Designing end-to-end software where modern machine learning meets clean code.
          </p>

          {/* Core Technical Highlights Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center space-x-1.5 text-xs font-mono px-3 py-1 rounded-md bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-sm">
              <BrainCircuit className="w-3.5 h-3.5 text-primary-500" />
              <span>Adaptive ML Architectures</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 text-xs font-mono px-3 py-1 rounded-md bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-sm">
              <Code2 className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Full-Stack React & FastAPI</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 text-xs font-mono px-3 py-1 rounded-md bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-emerald-500" />
              <span>Data-Driven Engineering</span>
            </span>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={() => scrollTo('projects')}
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-full text-sm shadow-lg hover:shadow-primary-500/25 transition-all duration-200 flex items-center space-x-2 group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="glass-panel text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 font-semibold px-6 py-3 rounded-full text-sm border border-slate-200 dark:border-slate-700 transition-all duration-200"
            >
              Let's Talk
            </button>
          </div>

          {/* Verified Social Connectors */}
          <div className="pt-2 flex items-center space-x-4 text-slate-500 dark:text-slate-400">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Verified Links:
            </span>
            <a
              href={PERSONAL_IDENTITY.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_IDENTITY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_IDENTITY.email}`}
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Central Talking Portrait Narrator */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <TalkingPortrait />
        </div>
      </div>

      {/* Editorial Bottom Metrics Bar */}
      <div className="relative z-10 max-w-5xl mx-auto w-full mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <span className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white block">
            4+
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Verified Projects
          </span>
        </div>
        <div>
          <span className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white block">
            SIH '25
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            National Hackathon
          </span>
        </div>
        <div>
          <span className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white block">
            6+
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Industry Simulations
          </span>
        </div>
        <div>
          <span className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white block">
            100%
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Production Quality
          </span>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="mt-8 text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex flex-col items-center space-y-1 group"
        aria-label="Scroll down to About section"
      >
        <span className="text-[11px] font-mono uppercase tracking-widest">Story Begins</span>
        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
};
