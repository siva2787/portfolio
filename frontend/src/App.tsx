import React, { useState, useEffect } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { JourneySection } from './components/sections/JourneySection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/footer/Footer';
import { narrationService } from './services/narrationService';
import type { NarrationListenerState } from './services/narrationService';

export const App: React.FC = () => {
  // Light-first theme as default according to prompt instructions
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('easwar_portfolio_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return false; // Light-first by default!
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [narration, setNarration] = useState<NarrationListenerState>(narrationService.getSnapshot());

  // Apply theme class to HTML root
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('easwar_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('easwar_portfolio_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Subscribe to narration state
  useEffect(() => {
    const unsubscribe = narrationService.subscribe(setNarration);
    return unsubscribe;
  }, []);

  // Section Observer for Scroll-Aware Storytelling
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'journey', 'projects', 'skills', 'experience', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
              narrationService.setSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -40% 0px', // Trigger when section occupies comfortable reading zone
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-canvas-light dark:bg-canvas-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-primary-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Narrative Flow */}
      <main>
        <HeroSection
          isDark={isDark}
          narration={narration}
        />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
