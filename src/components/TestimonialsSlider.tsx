import React, { useState } from 'react';
import { CLIENT_TESTIMONIALS } from '../data/servicesData';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const TestimonialsSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? CLIENT_TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
  };

  const active = CLIENT_TESTIMONIALS[current];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border border-slate-200 p-6 sm:p-10 relative bg-slate-50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs font-mono text-slate-500 ml-2">Verified Client</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="w-8 h-8 border border-slate-300 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-8 h-8 border border-slate-300 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <blockquote className="text-base sm:text-xl font-medium text-slate-800 leading-relaxed mb-6">
            &ldquo;{active.text}&rdquo;
          </blockquote>

          <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
            <div>
              <span className="font-bold text-slate-900 text-sm block">{active.client}</span>
              <span className="text-slate-500">{active.location}</span>
            </div>
            <span className="font-mono text-amber-700 bg-amber-50 px-2.5 py-1 border border-amber-200 self-start sm:self-auto">
              Work: {active.work}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
