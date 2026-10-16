import { X, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';
import type { CertificateItem } from '../../types/portfolio';

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
              Verified Credential
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {cert.image && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 max-h-80 w-full flex items-center justify-center">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-auto object-contain max-h-80"
              />
            </div>
          )}

          <div>
            <h3 id="cert-modal-title" className="text-2xl font-display font-bold text-slate-900 dark:text-white">
              {cert.name}
            </h3>
            <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mt-1">
              Issued by {cert.issuer}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
            <span className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{cert.date}</span>
            </span>
            {cert.verifiedBy && (
              <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{cert.verifiedBy}</span>
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {cert.description}
          </p>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Verified Domains & Skills
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold px-5 py-2 rounded-full"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
