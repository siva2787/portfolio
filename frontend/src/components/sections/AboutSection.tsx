import React, { useState } from 'react';
import { Brain, Layers, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_IDENTITY } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'approach' | 'interests'>('philosophy');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/70 dark:border-slate-800/70">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 block mb-2">
            01 / Narrative & Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bridging Intelligent Algorithms <br className="hidden sm:inline" />
            <span className="text-slate-400 dark:text-slate-500">With Real Software Systems.</span>
          </h2>
        </div>
        <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs">
          "Consistency &gt; Motivation." Building resilient, intuitive software that solves practical human bottlenecks.
        </p>
      </div>

      {/* Main Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Personal Narrative & Background */}
        <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg font-normal">
            I am an <strong className="text-slate-900 dark:text-white font-semibold">AI/ML Engineer and Full-Stack Developer</strong> currently pursuing my degree in Artificial Intelligence & Data Science at <span className="text-primary-600 dark:text-primary-400 font-medium">Arasu Engineering College</span>.
          </p>

          <p>
            My engineering work is rooted in curiosity, experimentation, and a passion for turning complex mathematical models into usable everyday applications. Rather than treating artificial intelligence as a disconnected black box or relying on generic wrappers, I concentrate on building <em>complete software lifecycles</em>: data extraction, predictive pipelines, reactive frontend interfaces, and resilient backend gateways.
          </p>

          <p>
            From deploying our <strong>AI Personalized Learning Platform</strong> with adaptive question scaling, to building <strong>ResumeIQ</strong> with semantic scoring rubrics, and authoring offline-first utilities for hundreds of university peers, I focus on software that delivers tangible utility.
          </p>

          {/* Interactive Philosophy Selector */}
          <div className="pt-6">
            <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
              <button
                onClick={() => setActiveTab('philosophy')}
                className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'philosophy'
                    ? 'bg-primary-600 text-white font-semibold'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Core Philosophy
              </button>
              <button
                onClick={() => setActiveTab('approach')}
                className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'approach'
                    ? 'bg-primary-600 text-white font-semibold'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Problem-Solving
              </button>
              <button
                onClick={() => setActiveTab('interests')}
                className={`text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'interests'
                    ? 'bg-primary-600 text-white font-semibold'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Focus Areas
              </button>
            </div>

            {/* Tab 1: Core Philosophy */}
            {activeTab === 'philosophy' && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2 animate-fadeIn">
                <h3 className="text-sm font-display font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Compass className="w-4 h-4 text-primary-500" />
                  <span>End-to-End Craftsmanship</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  A machine learning model is only as powerful as the application delivering its insights. I prioritize modular architectures, accessible interfaces, and deterministic validation over flashy demos.
                </p>
              </div>
            )}

            {/* Tab 2: Problem-Solving */}
            {activeTab === 'approach' && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2 animate-fadeIn">
                <h3 className="text-sm font-display font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-accent-cyan" />
                  <span>Iterative Diagnosis & First Principles</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  I break multi-layered challenges down to fundamental data constraints: What is the core friction? Where does the latency originate? How can we reduce cognitive load for the end user?
                </p>
              </div>
            )}

            {/* Tab 3: Focus Areas */}
            {activeTab === 'interests' && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-2 animate-fadeIn">
                <h3 className="text-sm font-display font-bold text-slate-900 dark:text-white flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-emerald-500" />
                  <span>Adaptive Learning, RAG & Ethical Security</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Particularly interested in cognitive digital twins, retrieval-augmented generation pipelines, structured knowledge graphs, and ethical defensive security testing.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Architectural Highlights Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-full pointer-events-none" />

            <span className="text-xs font-mono uppercase tracking-widest text-primary-600 dark:text-primary-400 font-semibold block mb-3">
              Fast Facts
            </span>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Active Product Builder</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Regularly ship full-stack web and Python applications with end-to-end user workflows.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Ethical Hacking Trained</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Certified by Cydenium in vulnerability assessment and responsible disclosure.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">National Hackathon Experienced</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Collaborated in high-pressure 36-hour sprints during Smart India Hackathon.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Data Analytics Intern</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Completed CodeAlpha program with a formal Letter of Recommendation.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Location: {PERSONAL_IDENTITY.location}</span>
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Roles</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
