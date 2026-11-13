import React, { useState } from 'react';
import { WORKSHOP_CONTACT } from '../data/projectImages';
import { Facebook, Phone, Mail, MessageSquare, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [work, setWork] = useState('Car Parking Shade');
  const [dimensions, setDimensions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Inquiry via Website:
Name: ${name || 'Prospective Client'}
Phone: ${phone || 'Not provided'}
Work Required: ${work}
Dimensions/Notes: ${dimensions || 'Pending site visit'}
Location: Rawalpindi / Islamabad`;

    window.open(`${WORKSHOP_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Workshop Details & Social Icons (No spelled long numbers) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                Workshop Location
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                High Court Road, Rawalpindi
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Serving Rawalpindi, Islamabad, Bahria Town, DHA, and nationwide projects. Site measurement visits available.
              </p>
            </div>

            {/* Clean Social & Contact Icons Group */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Connect Directly:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={WORKSHOP_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-slate-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white text-slate-800 flex items-center justify-center transition-colors"
                  aria-label="Facebook Page"
                  title="Official Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href={`tel:${WORKSHOP_CONTACT.phoneRaw}`}
                  className="w-11 h-11 border border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white text-slate-800 flex items-center justify-center transition-colors"
                  aria-label="Direct Phone Call"
                  title="Call Master Fabricator"
                >
                  <Phone className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${WORKSHOP_CONTACT.email}`}
                  className="w-11 h-11 border border-slate-300 hover:border-amber-600 hover:bg-amber-600 hover:text-white text-slate-800 flex items-center justify-center transition-colors"
                  aria-label="Email Address"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  href={WORKSHOP_CONTACT.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-slate-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white text-slate-800 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp Chat"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Map Link */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=High+Court+Road+Rawalpindi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-slate-900 bg-white hover:bg-slate-900 hover:text-white text-slate-900 text-xs font-bold px-4 py-2.5 transition-colors uppercase tracking-wider"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Quick Minimal Form */}
          <div className="lg:col-span-7 border border-slate-200 p-6 sm:p-8 bg-slate-50">
            <h3 className="text-lg font-black text-slate-900 mb-1">
              Book Measurement or Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Submit basic dimensions to receive a quote on WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full bg-white border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Contact / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full bg-white border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={work}
                    onChange={(e) => setWork(e.target.value)}
                    className="w-full bg-white border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                  >
                    <option value="Car Parking Shade">Car Parking Shade</option>
                    <option value="Industrial Steel Truss Shed">Industrial Steel Truss Shed</option>
                    <option value="Fiberglass Dome / Skylight">Fiberglass Dome / Skylight</option>
                    <option value="Security Guard Cabin">Security Guard Cabin</option>
                    <option value="Steel Gate & Spiral Stairs">Steel Gate &amp; Spiral Stairs</option>
                    <option value="Water Tank Fiber Lining">Water Tank Fiber Lining</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Approx Size (e.g. 10x18 ft)
                  </label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="e.g. 12x20 ft or 2 cars"
                    className="w-full bg-white border border-slate-300 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-slate-950"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-3 px-4 text-xs uppercase tracking-wider transition-colors mt-2"
              >
                <span>Send via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
