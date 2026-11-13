import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem } from '../data/servicesData';
import { WORKSHOP_CONTACT } from '../data/projectImages';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => (prev === 0 ? SERVICES_LIST.length - 1 : prev - 1));
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % SERVICES_LIST.length);
  };

  const handleInquire = (service: ServiceItem) => {
    const text = `Inquiry: ${service.title}\nSpecs: ${service.specs.gauge}, ${service.specs.turnaround}.\nPlease share current rates for Rawalpindi/Islamabad.`;
    window.open(`${WORKSHOP_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Fabrication Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Core Services &amp; Structures
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 border border-slate-300 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Previous Service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 border border-slate-300 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Next Service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Cards Grid with Sharp Borders (rounded-none) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className="border border-slate-200 bg-white hover:border-slate-900 transition-all flex flex-col justify-between group"
            >
              {/* Image Frame */}
              <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                <img
                  src={service.sampleImage}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <span className="absolute top-2 left-2 bg-slate-950 text-white text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider">
                  0{idx + 1}
                </span>
              </div>

              {/* Minimal Text Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-snug group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Specs Box */}
                <div>
                  <div className="border-t border-slate-100 pt-3 space-y-1.5 text-[11px] text-slate-600 mb-4 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Gauge:</span>
                      <span className="font-bold text-slate-800">{service.specs.gauge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Finish:</span>
                      <span className="font-bold text-slate-800">{service.specs.finish}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Delivery:</span>
                      <span className="font-bold text-emerald-700">{service.specs.turnaround}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleInquire(service)}
                    className="w-full flex items-center justify-between border border-slate-900 bg-slate-900 hover:bg-amber-500 hover:border-amber-500 text-white hover:text-slate-950 py-2.5 px-3 text-xs font-bold transition-colors uppercase tracking-wider"
                  >
                    <span>Inquire Rates</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
