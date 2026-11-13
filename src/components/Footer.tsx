import React from 'react';
import { WORKSHOP_CONTACT } from '../data/projectImages';
import { Facebook, Phone, Mail, MessageSquare, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Brand & Location */}
          <div>
            <span className="text-sm font-black text-white uppercase tracking-tight block">
              {WORKSHOP_CONTACT.name}
            </span>
            <span className="text-xs text-slate-500 mt-1 block">
              Direct Fabrication Workshop • High Court Road, Rawalpindi
            </span>
          </div>

          {/* Social Icons (No spelled long numbers) */}
          <div className="flex items-center gap-2">
            <a
              href={WORKSHOP_CONTACT.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-slate-800 hover:border-blue-600 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              aria-label="Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={`tel:${WORKSHOP_CONTACT.phoneRaw}`}
              className="w-9 h-9 border border-slate-800 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${WORKSHOP_CONTACT.email}`}
              className="w-9 h-9 border border-slate-800 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={WORKSHOP_CONTACT.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-slate-800 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 border border-slate-800 hover:border-white hover:bg-white hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors ml-4"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600">
          <div>
            © {new Date().getFullYear()} All Kind of Fiberglass and Steel Works. Rawalpindi.
          </div>
          <div className="mt-2 sm:mt-0">
            Rawalpindi • Islamabad • Bahria Town • DHA • Nationwide
          </div>
        </div>
      </div>
    </footer>
  );
};
