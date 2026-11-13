import React, { useState } from 'react';
import { Menu, X, Facebook, Phone, MessageSquare } from 'lucide-react';
import { WORKSHOP_CONTACT } from '../data/projectImages';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Services", href: "#services" },
    { label: "Cost Estimator", href: "#estimator" },
    { label: "Works Gallery", href: "#gallery" },
    { label: "Location & Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-30 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Name (2-line crisp format, subline hidden on mobile) */}
          <a href="#" className="flex flex-col group py-1">
            <span className="text-sm sm:text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight leading-tight group-hover:text-amber-600 transition-colors">
              All Kind of Fiberglass
            </span>
            <span className="text-xs sm:text-sm md:text-base font-black text-amber-600 uppercase tracking-wider leading-tight">
              &amp; Steel Works
            </span>
            <span className="hidden sm:block text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
              High Court Road, Rawalpindi
            </span>
          </a>

          {/* Right: Hamburger Menu (Three Lines) & Direct Social Icons */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 border-r border-slate-200 pr-3">
              <a
                href={WORKSHOP_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`tel:${WORKSHOP_CONTACT.phoneRaw}`}
                className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:bg-slate-100 transition-colors"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={WORKSHOP_CONTACT.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Three lines menu toggle button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Clean Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white shadow-xl animate-in fade-in duration-150">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="p-3 border border-slate-100 hover:border-amber-500 hover:bg-slate-50 transition-colors flex items-center justify-between text-sm font-bold text-slate-900"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400">→</span>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                High Court Road, Rawalpindi
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={WORKSHOP_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${WORKSHOP_CONTACT.phoneRaw}`}
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 text-slate-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={WORKSHOP_CONTACT.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
