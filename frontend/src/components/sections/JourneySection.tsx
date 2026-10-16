import React from 'react';
import { Calendar, MapPin, CheckCircle, Briefcase, Trophy, Building2, GraduationCap } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../../data/portfolioData';

const typeIcons: Record<string, React.ReactNode> = {
  internship: <Briefcase className="w-4 h-4 text-emerald-500" />,
  hackathon: <Trophy className="w-4 h-4 text-indigo-500" />,
  industry: <Building2 className="w-4 h-4 text-cyan-500" />,
  academic: <GraduationCap className="w-4 h-4 text-amber-500" />,
};

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/70 dark:border-slate-800/70">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 block mb-2">
            02 / Trajectory & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            An Engineering Journey <br className="hidden sm:inline" />
            <span className="text-slate-400 dark:text-slate-500">Built on Rigorous Execution.</span>
          </h2>
        </div>
        <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs">
          Verified timeline of internships, national challenges, industrial exposure, and practical product milestones.
        </p>
      </div>

      {/* Timeline Progression Container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12 ml-2 sm:ml-4">
        {JOURNEY_MILESTONES.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot Indicator */}
            <div
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center shadow-md group-hover:border-primary-500 group-hover:scale-110 transition-all duration-300"
            >
              {typeIcons[item.type] || <CheckCircle className="w-3.5 h-3.5 text-primary-500" />}
            </div>

            {/* Content Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center space-x-1.5">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{item.period}</span>
                </span>
                {item.location && (
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mt-1">
                {item.role}
              </h3>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">
                {item.organization}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Verified Highlights list */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-primary-500 font-bold">›</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
