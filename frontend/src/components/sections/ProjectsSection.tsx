import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Code2, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectCaseStudyModal } from '../modals/ProjectCaseStudyModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'AI / ML' | 'Full-Stack' | 'Intelligent Utility'>('all');

  const filteredProjects = filter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/70 dark:border-slate-800/70">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 block mb-2">
            03 / Verified Engineering Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & <br className="hidden sm:inline" />
            <span className="text-slate-400 dark:text-slate-500">Case Studies.</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {(['all', 'AI / ML', 'Full-Stack', 'Intelligent Utility'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-mono px-3 py-1.5 rounded-full transition-colors ${
                filter === cat
                  ? 'bg-primary-600 text-white font-semibold'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
              }`}
            >
              {cat === 'all' ? 'All Works' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="space-y-16">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              {/* Media Column */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 aspect-[16/10] flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                      <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-950/80 text-primary-600 dark:text-primary-400 flex items-center justify-center">
                        <Code2 className="w-7 h-7" />
                      </div>
                      <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                        {project.title}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {project.category} · Architecture Verified
                      </span>
                    </div>
                  )}

                  {/* Category Pill Tag on Image */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono px-2.5 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Editorial Text Column */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
                  <span className="text-primary-600 dark:text-primary-400 font-bold">0{idx + 1}</span>
                  <span>/</span>
                  <span className="uppercase tracking-wider">{project.tagline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Highlight Pill */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{project.highlights[0]}</span>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions & Links */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center space-x-1.5 bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
                  >
                    <span>Deep Dive Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-primary-500" />
                      <span>Live App</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
