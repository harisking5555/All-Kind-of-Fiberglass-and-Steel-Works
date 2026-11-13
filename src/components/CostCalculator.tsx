import React, { useState, useMemo } from 'react';
import { WORKSHOP_CONTACT } from '../data/projectImages';
import { Calculator, ArrowRight } from 'lucide-react';

interface TypeConfig {
  id: string;
  name: string;
  defaultL: number;
  defaultW: number;
  ratePerSqFt: number;
}

const TYPES: TypeConfig[] = [
  { id: 'single-car', name: 'Single Car Parking Shade (10x18 ft)', defaultL: 18, defaultW: 10, ratePerSqFt: 380 },
  { id: 'double-car', name: 'Double Car Parking Shade (18x18 ft)', defaultL: 18, defaultW: 18, ratePerSqFt: 360 },
  { id: 'custom-shade', name: 'Terrace / Porch Shade', defaultL: 20, defaultW: 12, ratePerSqFt: 350 },
  { id: 'industrial-shed', name: 'Industrial Steel Truss Shed', defaultL: 40, defaultW: 25, ratePerSqFt: 480 },
  { id: 'dome', name: 'Fiberglass Skylight / Dome', defaultL: 8, defaultW: 8, ratePerSqFt: 650 },
  { id: 'cabin', name: 'Prefab Security Cabin (5x5 ft)', defaultL: 5, defaultW: 5, ratePerSqFt: 2200 }
];

export const CostCalculator: React.FC = () => {
  const [selectedId, setSelectedId] = useState('single-car');
  const [length, setLength] = useState(18);
  const [width, setWidth] = useState(10);
  const [gauge, setGauge] = useState<'16' | '14' | '12'>('14');

  const selected = useMemo(() => {
    return TYPES.find(t => t.id === selectedId) || TYPES[0];
  }, [selectedId]);

  const handleSelectType = (t: TypeConfig) => {
    setSelectedId(t.id);
    setLength(t.defaultL);
    setWidth(t.defaultW);
  };

  const totalSqFt = Math.max(1, Number(length) || 1) * Math.max(1, Number(width) || 1);

  const gaugeMultiplier = gauge === '16' ? 0.92 : gauge === '12' ? 1.18 : 1.0;
  const estimatedCost = Math.round(totalSqFt * selected.ratePerSqFt * gaugeMultiplier);

  const handleSendWhatsApp = () => {
    const text = `Price Estimate Request:
Work: ${selected.name}
Dimensions: ${length}ft x ${width}ft (${totalSqFt} sq ft)
Steel Gauge: ${gauge} Gauge
Estimated Budget: PKR ${estimatedCost.toLocaleString()}
Please confirm availability and schedule site visit.`;

    window.open(`${WORKSHOP_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
            Fast Cost Calculation
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Estimate Project Budget
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Real direct workshop pricing for Rawalpindi &amp; Islamabad. Select structure and dimensions.
          </p>
        </div>

        {/* Minimal Grid Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-200 bg-white">
          
          {/* Inputs */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Structure Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TYPES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectType(t)}
                    className={`text-left p-3 text-xs font-bold border transition-colors ${
                      selectedId === t.id
                        ? 'border-slate-950 bg-slate-950 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Length / Front (ft)
                </label>
                <input
                  type="number"
                  min="2"
                  value={length}
                  onChange={(e) => setLength(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-slate-50 border border-slate-300 px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Width / Projection (ft)
                </label>
                <input
                  type="number"
                  min="2"
                  value={width}
                  onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-slate-50 border border-slate-300 px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:border-slate-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Steel Frame Thickness
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {(['16', '14', '12'] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGauge(g)}
                    className={`py-2 text-center border font-bold ${
                      gauge === g
                        ? 'border-amber-600 bg-amber-600 text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {g} Gauge {g === '14' ? '(Standard)' : g === '12' ? '(Heavy)' : '(Light)'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                Estimated Price Range
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight my-2">
                PKR {estimatedCost.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {totalSqFt} sq ft • Approx PKR {Math.round(selected.ratePerSqFt * gaugeMultiplier)} / sq ft
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                <div>• Frame: {gauge}-Gauge MS Pipe with Red Oxide Primer</div>
                <div>• Sheet: UV-Stabilized Molded Fiberglass</div>
                <div>• Free site measurement in Rawalpindi &amp; Islamabad</div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 text-xs sm:text-sm uppercase tracking-wider transition-colors"
              >
                <span>Confirm Estimate on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
