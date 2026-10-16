import React, { useState } from 'react';
import { ShieldCheck, Calendar } from 'lucide-react';
import { CERTIFICATES } from '../../data/portfolioData';
import type { CertificateItem } from '../../types/portfolio';
import { CertificateModal } from '../modals/CertificateModal';

export const ExperienceSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/70 dark:border-slate-800/70">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 block mb-2">
            05 / Proven Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Credentials & <br className="hidden sm:inline" />
            <span className="text-slate-400 dark:text-slate-500">Corporate Simulations.</span>
          </h2>
        </div>
        <p className="text-sm font-mono text-slate-500 dark:text-slate-400 max-w-xs">
          Authentic certificates, letters of recommendation, industry job simulations, and cybersecurity training.
        </p>
      </div>

      {/* Certificates & Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="group cursor-pointer p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {cert.type}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mt-1 mb-3">
                {cert.issuer}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                {cert.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified</span>
              </span>

              <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                <span>View Details</span>
                <span>→</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
