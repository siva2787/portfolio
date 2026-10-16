import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, AlertTriangle } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'engineering'>('overview');

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 dark:text-primary-400 font-semibold block">
              Case Study Deep Dive · {project.category}
            </span>
            <h3 id="modal-title" className="text-2xl font-display font-extrabold text-slate-900 dark:text-white mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex px-6 pt-3 border-b border-slate-100 dark:border-slate-800 space-x-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            1. Problem & Solution
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            2. System Architecture
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`pb-3 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-colors ${
              activeTab === 'engineering'
                ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            3. Engineering Highlights
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {project.image && (
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 aspect-video max-h-72 w-full flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-1">
                  Tagline & Focus
                </h4>
                <p className="text-base text-slate-900 dark:text-white font-medium">
                  {project.tagline}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-900/30">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-rose-700 dark:text-rose-400 font-bold mb-2 flex items-center space-x-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>The Problem Space</span>
                  </h5>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold mb-2 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>The Engineered Solution</span>
                  </h5>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-primary-600 dark:text-primary-400 font-bold mb-3 flex items-center space-x-2">
                  <Layers className="w-4 h-4" />
                  <span>Subsystem Breakdown</span>
                </h4>
                <div className="space-y-3">
                  {project.architecture.map((layer, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-950/80 text-primary-700 dark:text-primary-300 flex items-center justify-center font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">
                  Verified Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs border border-slate-200/80 dark:border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Engineering Highlights */}
          {activeTab === 'engineering' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-3">
                {project.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-start space-x-3 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>

              {project.metrics && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-center">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        {m.label}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Deployment</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
