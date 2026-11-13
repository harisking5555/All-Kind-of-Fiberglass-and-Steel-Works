import React, { useState, useMemo } from 'react';
import { REAL_PROJECT_IMAGES, ProjectItem, WORKSHOP_CONTACT } from '../data/projectImages';
import { Play, Pause, MessageSquare } from 'lucide-react';

export const WorksGallery: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [isPaused, setIsPaused] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'parking-shades', label: 'Parking Shades' },
    { id: 'industrial-sheds', label: 'Industrial Sheds' },
    { id: 'domes', label: 'Domes & Skylights' },
    { id: 'security-cabins', label: 'Security Cabins' },
    { id: 'steel-works', label: 'Steel Works' },
  ];

  const filtered = useMemo(() => {
    if (selectedCat === 'all') return REAL_PROJECT_IMAGES;
    return REAL_PROJECT_IMAGES.filter(img => img.category === selectedCat);
  }, [selectedCat]);

  const row1 = useMemo(() => filtered.filter((_, i) => i % 2 === 0), [filtered]);
  const row2 = useMemo(() => filtered.filter((_, i) => i % 2 !== 0), [filtered]);

  const handleWhatsApp = (item: ProjectItem) => {
    const text = `Inquiry regarding design: ${item.title}\nRef Image: ${item.url}\nPlease share rates and details.`;
    window.open(`${WORKSHOP_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const renderCard = (item: ProjectItem) => (
    <div
      key={item.id}
      className="w-44 sm:w-52 border border-slate-200 bg-white shrink-0 hover:border-slate-900 transition-colors flex flex-col justify-between group"
    >
      <div className="relative w-full h-32 sm:h-36 bg-slate-100 overflow-hidden">
        <img
          src={item.url}
          alt={item.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=400&q=80";
          }}
        />
      </div>

      <div className="p-2 sm:p-2.5 flex items-center justify-between border-t border-slate-100 bg-white">
        <div className="truncate pr-1">
          <div className="text-xs font-bold text-slate-900 truncate">
            {item.title}
          </div>
          <div className="text-[10px] text-slate-500 font-mono">
            {item.categoryLabel}
          </div>
        </div>

        <button
          type="button"
          onClick={() => handleWhatsApp(item)}
          className="w-7 h-7 shrink-0 flex items-center justify-center border border-slate-200 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white text-slate-700 transition-colors"
          title="Inquire on WhatsApp"
          aria-label="Inquire on WhatsApp"
        >
          <MessageSquare className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Workshop Archive
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Real Project Showcase
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 bg-white text-xs font-bold text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span>{isPaused ? "Resume" : "Pause"}</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((c) => {
            const isSel = selectedCat === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCat(c.id)}
                className={`px-3 py-1.5 text-xs font-bold border transition-colors shrink-0 uppercase tracking-wider ${
                  isSel
                    ? 'border-slate-950 bg-slate-950 text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Infinite Smooth Scrolling Marquee Rows */}
      <div 
        className="space-y-3 overflow-hidden py-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Row 1 */}
        <div className="flex overflow-hidden">
          <div 
            className={`animate-marquee-slow flex gap-3 ${isPaused ? 'pause-hover' : ''}`}
            style={isPaused ? { animationPlayState: 'paused' } : {}}
          >
            {[...row1, ...row1].map((item, idx) => (
              <div key={`r1-${item.id}-${idx}`}>
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden">
          <div 
            className={`animate-marquee-reverse flex gap-3 ${isPaused ? 'pause-hover' : ''}`}
            style={isPaused ? { animationPlayState: 'paused' } : {}}
          >
            {[...row2, ...row2].map((item, idx) => (
              <div key={`r2-${item.id}-${idx}`}>
                {renderCard(item)}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
