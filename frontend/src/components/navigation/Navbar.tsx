import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Volume2, ArrowRight } from 'lucide-react';
import { PERSONAL_IDENTITY } from '../../data/portfolioData';
import { narrationService } from '../../services/narrationService';
import type { NarrationListenerState } from '../../services/narrationService';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [narration, setNarration] = useState<NarrationListenerState>(narrationService.getSnapshot());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const unsubscribe = narrationService.subscribe(setNarration);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 glass-panel shadow-sm border-b border-slate-200/60 dark:border-slate-800/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <button
          onClick={() => scrollToSection('hero')}
          className="group flex items-center space-x-2 text-left focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg p-1"
          aria-label="Easwar S homepage"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-indigo-700 flex items-center justify-center text-white font-display font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            E
          </div>
          <div>
            <span className="font-display font-bold text-base tracking-tight text-slate-900 dark:text-white block group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {PERSONAL_IDENTITY.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block -mt-1">
              AI / ML · Full-Stack
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full shadow-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/70'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Voice Pill, Theme Switcher, Contact CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          {/* Quick Narration Pill */}
          <button
            onClick={() => {
              if (narration.state === 'speaking') {
                narrationService.pause();
              } else {
                narrationService.play(activeSection);
              }
            }}
            className={`flex items-center space-x-2 text-xs font-mono px-3 py-1.5 rounded-full border transition-all ${
              narration.state === 'speaking'
                ? 'bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-300 border-primary-500/30 ring-2 ring-primary-500/20'
                : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-primary-400'
            }`}
            title="Narrator Story Controller"
            aria-label="Toggle narrator audio story"
          >
            <Volume2 className={`w-3.5 h-3.5 ${narration.state === 'speaking' ? 'animate-pulse text-primary-600' : ''}`} />
            <span>{narration.state === 'speaking' ? 'Story Live' : 'Voice Guide'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-sm"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Toggle ${isDark ? 'Light' : 'Dark'} Theme`}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Let's Talk CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center space-x-1.5 bg-slate-900 hover:bg-primary-600 dark:bg-white dark:hover:bg-primary-500 text-white dark:text-slate-950 dark:hover:text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md transition-all duration-200 group"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu & Theme Switcher Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 focus-visible:ring-2 focus-visible:ring-primary-500"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-6 py-6 mt-2 space-y-4 animate-fadeIn shadow-2xl">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                if (narration.state === 'speaking') {
                  narrationService.pause();
                } else {
                  narrationService.play(activeSection);
                }
              }}
              className="flex items-center space-x-2 text-xs font-mono text-primary-600 dark:text-primary-400"
            >
              <Volume2 className="w-4 h-4" />
              <span>{narration.state === 'speaking' ? 'Pause Audio Story' : 'Listen to Story'}</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 text-white text-xs font-semibold px-4 py-2 rounded-full"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
