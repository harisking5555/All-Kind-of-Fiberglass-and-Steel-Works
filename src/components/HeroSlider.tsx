import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, WORKSHOP_HIGHLIGHTS } from '../data/projectImages';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [tickerPaused, setTickerPaused] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section id="overview" className="relative w-full bg-slate-950 text-white overflow-hidden border-b border-slate-200">
      
      {/* Main Sliding Banner Viewport */}
      <div className="relative min-h-[500px] sm:min-h-[540px] lg:h-[580px] w-full flex flex-col justify-between">
        
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Ambient Atmospheric Backdrop */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter blur-md brightness-[0.25] scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1800&q=85";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
              </div>

              {/* Main Slide Content: Split Left (Text) and Right (Crisp Framed Real Photo) */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-10 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                  
                  {/* Left 7 Cols: Typography & Actions */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <span className="inline-block text-[11px] sm:text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">
                      {slide.tagline}
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-3">
                      {slide.title}
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed mb-6 max-w-xl">
                      {slide.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="#estimator"
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-3 transition-colors uppercase tracking-wider"
                      >
                        <span>Estimate Budget</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="#gallery"
                        className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-bold text-xs sm:text-sm px-5 py-3 transition-colors uppercase tracking-wider"
                      >
                        <span>View Real Works</span>
                      </a>
                    </div>
                  </div>

                  {/* Right 5 Cols: Crisp Framed Workshop Photo */}
                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm sm:max-w-md bg-slate-900 border-2 border-slate-700/80 shadow-2xl overflow-hidden group">
                      <div className="h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-slate-950">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                      </div>

                      {/* Photo Badge / Caption Bar */}
                      <div className="p-3 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-amber-400 font-bold">
                          <ShieldCheck className="w-4 h-4 shrink-0" />
                          <span className="truncate">{slide.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 shrink-0">
                          Rawalpindi Shop
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* Slide Controls: Prev / Next */}
        <div className="absolute bottom-6 right-4 sm:right-8 z-20 flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="w-10 h-10 border border-white/20 bg-slate-900/80 text-white hover:bg-white hover:text-slate-950 flex items-center justify-center transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="w-10 h-10 border border-white/20 bg-slate-900/80 text-white hover:bg-white hover:text-slate-950 flex items-center justify-center transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-4 sm:left-8 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`h-1 transition-all ${
                idx === current ? 'w-8 bg-amber-500' : 'w-3 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <span className="text-xs font-mono text-slate-400 ml-2">
            0{current + 1} / 0{HERO_SLIDES.length}
          </span>
        </div>

      </div>

      {/* CONTINUOUS SMOOTH AUTO-SLIDING TICKER (Below Banner) */}
      <div 
        className="border-t border-slate-800 bg-slate-900 overflow-hidden py-3"
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div className="overflow-hidden flex">
          <div 
            className={`animate-marquee-slow flex gap-8 items-center ${tickerPaused ? 'pause-hover' : ''}`}
            style={tickerPaused ? { animationPlayState: 'paused' } : {}}
          >
            {[...WORKSHOP_HIGHLIGHTS, ...WORKSHOP_HIGHLIGHTS].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 shrink-0 px-2 text-xs"
              >
                <span className="w-1.5 h-1.5 bg-amber-500 shrink-0" />
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 font-mono text-[10px] tracking-wider uppercase">
                    {item.label}:
                  </span>
                  <span className="font-bold text-white tracking-wide">
                    {item.val}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
