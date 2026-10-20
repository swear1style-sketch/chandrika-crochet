import React, { useState } from 'react';
import { Sparkles, MessageCircle, Check, Send, Palette, Layers, Frame, Smile } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/products';

export default function CustomCommissionStudio({ defaultCategory = 'frames' }) {
  const [category, setCategory] = useState(defaultCategory);
  const [frameStyle, setFrameStyle] = useState('Antique Gilded Rococo');
  const [palette, setPalette] = useState('Himalayan Wildflowers & Golden Ochre');
  const [notes, setNotes] = useState('');
  const [sizePreference, setSizePreference] = useState('Medium (5" × 7")');

  const categories = [
    { id: 'frames', label: 'Botanical Frame', icon: Frame, estTime: '5–7 days' },
    { id: 'action-figures', label: 'Action Figure / Doll', icon: Smile, estTime: '8–12 days' },
    { id: 'painting-postcards', label: 'Painting Postcard', icon: Layers, estTime: '3–5 days' },
    { id: 'bouquets', label: 'Forever Rose Bouquet', icon: Palette, estTime: '5–7 days' },
  ];

  const frameOptions = [
    'Antique Gilded Rococo',
    'Himalayan Pine Shadowbox',
    'Minimalist Brass Float Frame',
    'Wooden Easel Stand',
    'Glass Cloche with Wood Base',
  ];

  const paletteOptions = [
    'Himalayan Wildflowers & Golden Ochre (Brand Theme)',
    'Alpine Spruce Green & Cabin Timber Browns',
    'Crimson Twilight & Sunset Gold',
    'Pastel Meadow & Pearl Cream',
    'Custom Palette (Specify in notes)',
  ];

  const sizes = [
    'Miniature Keepsake (3.5" × 4.5")',
    'Medium Collector (5" × 7")',
    'Statement Gallery (8" × 10")',
    'Grand Tapestry (12" × 16" or larger)',
  ];

  const generateWhatsAppUrl = () => {
    const message = `*Custom Crochet Commission Inquiry - Studio Chandrika*
----------------------------------------
*Category:* ${category.toUpperCase()}
*Frame / Display:* ${frameStyle}
*Size:* ${sizePreference}
*Color Palette:* ${palette}
${notes ? `*Custom Notes / Requests:* ${notes}` : ''}
----------------------------------------
Hi Chandrika, I would love to commission this custom handcrafted piece with you. Please let me know the availability and confirmation!`;

    return `https://wa.me/919848759103?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="custom-studio" className="py-20 bg-parchment-100 border-b border-parchment-300 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amberGold-100 border border-amberGold-400 text-amberGold-900 text-xs font-cinzel font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-700" />
            <span>• {BRAND_INFO.customisationBadge} •</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] text-cabin-900">
            BESPOKE COMMISSION STUDIO
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-cabin-700 max-w-2xl mx-auto">
            Design your one-of-a-kind fiber heirloom in four simple steps.
          </p>
        </div>

        {/* Studio Box */}
        <div className="bg-white rounded-3xl shadow-artisan border border-parchment-300 p-6 sm:p-10 relative overflow-hidden">
          
          {/* Inner stitch accent */}
          <div className="absolute inset-3 border border-dashed border-amberGold-600/20 rounded-2xl pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            
            {/* Step 1: Category */}
            <div>
              <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-cabin-900 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cabin-900 text-parchment-100 inline-flex items-center justify-center text-[10px]">1</span>
                <span>Select Your Commission Type</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categories.map((c) => {
                  const Icon = c.icon;
                  const isSelected = category === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCategory(c.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-amberGold-600 bg-amberGold-50 shadow-sm text-cabin-900 ring-2 ring-amberGold-600/30'
                          : 'border-parchment-300 bg-parchment-50 hover:bg-parchment-100 text-cabin-800'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-amberGold-700' : 'text-cabin-600'}`} />
                      <div className="text-xs font-bold font-cinzel">{c.label}</div>
                      <div className="text-[10px] text-cabin-600 mt-1">Est. {c.estTime}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Frame & Display */}
            <div>
              <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-cabin-900 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cabin-900 text-parchment-100 inline-flex items-center justify-center text-[10px]">2</span>
                <span>Select Framing / Display Preference</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {frameOptions.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFrameStyle(f)}
                    className={`p-3 rounded-lg border text-xs font-medium text-left flex items-center justify-between transition-all ${
                      frameStyle === f
                        ? 'border-amberGold-600 bg-amberGold-50 text-cabin-900 font-semibold shadow-sm'
                        : 'border-parchment-200 bg-white hover:bg-parchment-50 text-cabin-700'
                    }`}
                  >
                    <span>{f}</span>
                    {frameStyle === f && <Check className="w-3.5 h-3.5 text-amberGold-700" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size & Palette */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-cabin-900 mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cabin-900 text-parchment-100 inline-flex items-center justify-center text-[10px]">3A</span>
                  <span>Preferred Dimensions</span>
                </label>
                <select
                  value={sizePreference}
                  onChange={(e) => setSizePreference(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-parchment-300 bg-white text-xs font-medium text-cabin-900 focus:outline-none focus:ring-2 focus:ring-amberGold-600"
                >
                  {sizes.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-cabin-900 mb-2 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cabin-900 text-parchment-100 inline-flex items-center justify-center text-[10px]">3B</span>
                  <span>Color Theme & Inspiration</span>
                </label>
                <select
                  value={palette}
                  onChange={(e) => setPalette(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-parchment-300 bg-white text-xs font-medium text-cabin-900 focus:outline-none focus:ring-2 focus:ring-amberGold-600"
                >
                  {paletteOptions.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Step 4: Custom Notes */}
            <div>
              <label className="block font-cinzel text-xs font-bold uppercase tracking-wider text-cabin-900 mb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cabin-900 text-parchment-100 inline-flex items-center justify-center text-[10px]">4</span>
                <span>Special Instructions or References (Optional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Mention specific flowers, personal dates, character references, or wedding details..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-parchment-300 bg-white text-xs text-cabin-900 focus:outline-none focus:ring-2 focus:ring-amberGold-600"
              />
            </div>

            {/* Summary & Submit via WhatsApp */}
            <div className="pt-4 border-t border-parchment-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-cabin-700">
                <span className="font-semibold text-cabin-900">Direct Consultation:</span> You will connect directly with Chandrika on WhatsApp with your selections pre-filled.
              </div>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-cinzel font-bold tracking-wider uppercase shadow-md transition-all group"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                <span>Submit Custom Inquiry to Chandrika (+91 98487 59103)</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
