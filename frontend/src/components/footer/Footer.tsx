import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { PERSONAL_IDENTITY } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8 bg-white/40 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Timezone */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center sm:text-left">
          <div>
            <span className="font-display font-bold text-base text-slate-900 dark:text-white block">
              {PERSONAL_IDENTITY.name}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              AI/ML Engineer & Full-Stack Developer
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-800" />

          {/* Live IST clock */}
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 dark:text-slate-400 justify-center sm:justify-start">
            <Clock className="w-3.5 h-3.5 text-primary-500" />
            <span>Kumbakonam, IN: {istTime || 'Loading IST...'}</span>
          </div>
        </div>

        {/* Center: Verified Links */}
        <div className="flex items-center space-x-4 text-slate-500 dark:text-slate-400">
          <a
            href={PERSONAL_IDENTITY.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_IDENTITY.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_IDENTITY.email}`}
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-1"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Return to top & Copyright */}
        <div className="flex items-center space-x-4 text-xs font-mono text-slate-500">
          <span>© {new Date().getFullYear()} Easwar S. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            title="Return to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
