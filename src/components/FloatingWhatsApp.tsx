import React from 'react';
import { MessageSquare } from 'lucide-react';
import { WORKSHOP_CONTACT } from '../data/projectImages';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-5 z-50">
      <a
        href={WORKSHOP_CONTACT.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 shadow-2xl transition-all duration-200 border-2 border-white group"
        aria-label="Direct WhatsApp Message"
        title="Direct WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white/20" />
        <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};
