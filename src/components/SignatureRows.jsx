import React from 'react';
import { ArrowRight, Sparkles, Check, Eye } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { SIGNATURE_CATEGORIES, BRAND_INFO } from '../data/products';

export default function SignatureRows({ onSelectCategory }) {
  return (
    <section id="categories" className="py-20 bg-parchment-100 border-b border-parchment-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header as requested in Wireframe */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-parchment-200 border border-amberGold-600/30 text-amberGold-800 text-xs font-cinzel font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-600" />
            <span>Curated Product Showcase</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] text-cabin-900">
            CHANDRIKA COLLECTIONS
          </h2>

          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-amberGold-600"></span>
            <span className="font-serif italic text-lg sm:text-xl text-cabin-700">
              Three distinct realms of hand-hooked fiber art
            </span>
            <span className="h-[1px] w-12 bg-amberGold-600"></span>
          </div>

          <p className="text-sm sm:text-base text-cabin-800/80 leading-relaxed pt-2">
            Explore our signature creations: from gilded botanical frames and bespoke collectible action figures to scenic Himalayan painting postcards.
          </p>
        </div>

        {/* The Exact 3 Rows as Laid Out in Wireframe Image 2 */}
        <div className="space-y-16 lg:space-y-24">
          {SIGNATURE_CATEGORIES.map((category, index) => {
            const waOrderUrl = `https://wa.me/919848759103?text=${encodeURIComponent(
              `Hi Chandrika, I would like to place an order for custom ${category.title}. Please let me know the details!`
            )}`;

            return (
              <div
                key={category.id}
                id={`cat-${category.id}`}
                className="bg-white rounded-3xl p-5 sm:p-8 lg:p-12 shadow-artisan border border-parchment-300 hover:shadow-artisan-hover transition-all duration-500 relative overflow-hidden group"
              >
                {/* Stitch accent border inside card */}
                <div className="absolute inset-2 sm:inset-4 border border-dashed border-amberGold-600/20 rounded-2xl pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  
                  {/* Left Column: Image (Matching Left-Aligned Wireframe Structure) */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden bg-parchment-200 shadow-inner group/img aspect-[4/3] lg:aspect-square">
                      <img
                        src={category.image}
                        alt={category.alt}
                        className="w-full h-full object-cover object-center transition-all duration-700 group-hover/img:scale-105"
                      />

                      {/* Golden Gilded Border Rim overlay */}
                      <div className="absolute inset-0 border-2 border-antiqueGold/40 rounded-2xl pointer-events-none"></div>

                      {/* Category Floating Pill */}
                      <div className="absolute top-4 left-4 bg-cabin-900/90 backdrop-blur-md text-parchment-100 text-[11px] font-cinzel tracking-wider px-3 py-1 rounded-full uppercase shadow">
                        Row 0{index + 1} • Collection
                      </div>

                      {/* Single direct Place Order button overlay on image */}
                      <div className="absolute inset-0 bg-cabin-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <a
                          href={waOrderUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-cinzel font-bold tracking-wider uppercase shadow-xl flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform"
                        >
                          <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                          <span>Place Order on WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* Quick highlight chip beneath image */}
                    <div className="mt-3 text-center lg:text-left">
                      <span className="inline-block text-[11px] font-semibold tracking-wide text-amberGold-800 bg-amberGold-50 px-3 py-1 rounded-md border border-amberGold-200">
                        ✨ {category.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: "Written matter" as shown in the wireframe */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    <div className="space-y-1">
                      <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-amberGold-700 font-bold">
                        Signature Line
                      </span>
                      
                      {/* Category Title - bold & prominent like Wireframe */}
                      <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-cabin-900 tracking-wide">
                        {category.title}
                      </h3>

                      <p className="font-serif italic text-lg text-cabin-700">
                        {category.tagline}
                      </p>
                    </div>

                    {/* Written Matter Text */}
                    <div className="space-y-3 text-cabin-800 text-sm sm:text-base leading-relaxed">
                      <p>
                        {category.description}
                      </p>
                    </div>

                    {/* Bullet Highlights */}
                    <div className="pt-2">
                      <h5 className="font-cinzel text-xs font-bold uppercase tracking-wider text-cabin-900 mb-2.5">
                        Craftsmanship Specifications:
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cabin-700">
                        {category.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 bg-parchment-50 p-2 rounded-lg border border-parchment-200">
                            <Check className="w-3.5 h-3.5 text-moss-700 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={waOrderUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cabin-900 hover:bg-emerald-700 text-parchment-100 text-xs font-semibold tracking-wider uppercase transition-all shadow-md group/btn"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                        <span>Place Order on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onSelectCategory(category.id)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-amberGold-600 bg-white hover:bg-amberGold-50 text-cabin-900 text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5 text-amberGold-600" />
                        <span>View Sub-Catalog</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
