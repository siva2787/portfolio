import React, { useState } from 'react';
import { SKILL_GROUPS } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedGroupIdx, setSelectedGroupIdx] = useState<number>(0);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/70 dark:border-slate-800/70">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 block mb-2">
            04 / Technical Fluency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Applied Capabilities & <br className="hidden sm:inline" />
            <span className="text-slate-400 dark:text-slate-500">Engineering Stack.</span>
          </h2>
        </div>
        <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs">
          Organized by domain, grounded in production-tested projects, and verified through practical software delivery.
        </p>
      </div>

      {/* Domain Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {SKILL_GROUPS.map((group, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedGroupIdx(idx)}
            className={`text-xs font-mono px-4 py-2 rounded-xl transition-all ${
              selectedGroupIdx === idx
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-md scale-102'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Selected Domain Showcase Card */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 shadow-sm">
        <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
              {SKILL_GROUPS[selectedGroupIdx].category}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {SKILL_GROUPS[selectedGroupIdx].description}
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 self-start sm:self-center">
            {SKILL_GROUPS[selectedGroupIdx].skills.length} Verified Competencies
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_GROUPS[selectedGroupIdx].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80 hover:border-primary-400/60 dark:hover:border-primary-500/60 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2.5">
                  <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-950/80 text-primary-700 dark:text-primary-300 flex items-center justify-center font-mono font-bold text-xs group-hover:scale-105 transition-transform">
                    {skill.iconLetter}
                  </span>
                  <span className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                  {skill.level}
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-10">
                {skill.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
