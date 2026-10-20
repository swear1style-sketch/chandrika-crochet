import React from 'react';
import { Sparkles, MessageCircle, Ruler, Layers } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { PRODUCTS_CATALOG, BRAND_INFO, getOrderWhatsAppUrl } from '../data/products';

export default function FramesCollection({ activeCategoryFilter, setActiveCategoryFilter, onOpenCommission }) {
  // Filter based on active tab
  const filteredProducts = PRODUCTS_CATALOG.filter((item) => {
    if (activeCategoryFilter === 'all') return true;
    return item.category === activeCategoryFilter;
  });

  return (
    <section id="frames-showcase" className="py-20 bg-parchment-50 border-b border-parchment-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title - Matching Image 3 layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-parchment-300 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-cinzel tracking-widest text-amberGold-800 uppercase font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-amberGold-600"></span>
              <span>Sub-Collection Showcase</span>
            </div>
            {/* The exact title from Image 3 */}
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-cabin-900">
              {activeCategoryFilter === 'frames' ? 'Frames' : activeCategoryFilter === 'action-figures' ? 'Crochet Action Figures' : activeCategoryFilter === 'painting-postcards' ? 'Painting Postcards' : 'All Creations'}
            </h2>
            <p className="font-serif italic text-lg text-cabin-700 mt-1">
              {activeCategoryFilter === 'frames' 
                ? 'Miniature micro-crochet blooms, Himachal flora, and landscape yarn paintings.'
                : 'Browse through our bespoke catalog of slow-crafted fiber treasures.'}
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-parchment-200/70 p-1.5 rounded-full border border-parchment-300">
            <button
              onClick={() => setActiveCategoryFilter('frames')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategoryFilter === 'frames'
                  ? 'bg-cabin-900 text-parchment-100 shadow-sm'
                  : 'text-cabin-800 hover:text-amberGold-700'
              }`}
            >
              Frames (Image 3)
            </button>
            <button
              onClick={() => setActiveCategoryFilter('action-figures')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategoryFilter === 'action-figures'
                  ? 'bg-cabin-900 text-parchment-100 shadow-sm'
                  : 'text-cabin-800 hover:text-amberGold-700'
              }`}
            >
              Action Figures
            </button>
            <button
              onClick={() => setActiveCategoryFilter('painting-postcards')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategoryFilter === 'painting-postcards'
                  ? 'bg-cabin-900 text-parchment-100 shadow-sm'
                  : 'text-cabin-800 hover:text-amberGold-700'
              }`}
            >
              Painting Postcards
            </button>
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategoryFilter === 'all'
                  ? 'bg-cabin-900 text-parchment-100 shadow-sm'
                  : 'text-cabin-800 hover:text-amberGold-700'
              }`}
            >
              All Items
            </button>
          </div>
        </div>

        {/* The Exact Grid from Image 3: 
            Crochet flowers frames | Himachal flower frames
            Painting frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product) => {
            const waUrl = getOrderWhatsAppUrl(product.title, product.subCategory, product.priceRange);

            return (
              <a
                key={product.id}
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="vintage-frame-card rounded-2xl overflow-hidden flex flex-col group block cursor-pointer transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Stitch accent border inside card */}
                <div className="absolute inset-2 border border-dashed border-amberGold-600/20 rounded-xl pointer-events-none z-10"></div>

                {/* Product Image Container */}
                <div className="relative aspect-square overflow-hidden bg-parchment-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Top Badge: Sub-Category name from Image 3 */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="inline-block bg-cabin-900/90 backdrop-blur-md text-parchment-100 text-[10px] font-cinzel font-semibold tracking-wider px-3 py-1 rounded-full uppercase shadow">
                      {product.subCategory}
                    </span>
                  </div>

                  {product.customizable && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="inline-flex items-center gap-1 bg-amberGold-100/90 backdrop-blur-md text-amberGold-900 border border-amberGold-400 text-[9px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase shadow-sm">
                        <Sparkles className="w-2.5 h-2.5 text-amberGold-700" />
                        Custom Order
                      </span>
                    </div>
                  )}

                  {/* Single Hover Option over the image as requested: ONLY "Place Order" -> WhatsApp */}
                  <div className="absolute inset-0 bg-cabin-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-20 p-4">
                    <div className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-cinzel font-bold tracking-wider uppercase shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                      <span>Place Order on WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    
                    {/* The exact label from Image 3 */}
                    <h3 className="font-cinzel text-xl font-bold text-cabin-900 group-hover:text-amberGold-700 transition-colors">
                      {product.subCategory}
                    </h3>

                    <h4 className="text-xs font-semibold text-amberGold-800 tracking-wide uppercase">
                      {product.title}
                    </h4>

                    <p className="text-xs text-cabin-700/90 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Dimensions & Materials */}
                  <div className="pt-3 border-t border-parchment-200/80 space-y-2 text-[11px] text-cabin-700">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-3.5 h-3.5 text-amberGold-700 shrink-0" />
                      <span className="truncate">{product.dimensions}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-moss-700 shrink-0" />
                      <span className="truncate">{product.materials}</span>
                    </div>
                  </div>

                  {/* Direct Place Order on WhatsApp Button */}
                  <div className="pt-3 border-t border-parchment-200 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-cabin-600 uppercase tracking-wider block font-medium">Price</span>
                      <span className="font-cinzel text-sm font-bold text-cabin-900">
                        {product.priceRange}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cabin-900 group-hover:bg-emerald-700 text-parchment-100 text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm">
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Place Order</span>
                    </div>
                  </div>

                </div>
              </a>
            );
          })}
        </div>

        {/* Customization Banner for Frames */}
        <div className="mt-14 bg-gradient-to-r from-amberGold-100/80 via-parchment-200 to-amberGold-100/80 rounded-2xl p-6 sm:p-8 border border-amberGold-300 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-cinzel font-bold text-amberGold-900 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amberGold-700" />
            <span>Have a specific blossom, frame shape, or size in mind?</span>
          </div>
          <p className="text-sm text-cabin-800 max-w-2xl mx-auto leading-relaxed">
            Every flower from your memory or wedding bouquet can be recreated in micro-crochet and placed into antique filigree frames of your choice.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919848759103?text=Hi%20Chandrika,%20I%20would%20like%20to%20discuss%20a%20custom%20crochet%20order%20with%20you!"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cabin-900 hover:bg-cabin-800 text-parchment-100 text-xs font-semibold tracking-wider uppercase shadow-md transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-amberGold-400" />
              <span>Contact Directly on WhatsApp (+91 98487 59103)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
