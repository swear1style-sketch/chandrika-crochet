import React, { useState } from 'react';
import { Sparkles, ArrowRight, Mail, Phone, MapPin, CheckCircle2, Eye, ZoomIn } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/products';

export default function Hero({ onOpenCommission, onSelectProduct }) {
  const [activeTexture, setActiveTexture] = useState('full');

  const textureDetails = {
    full: {
      image: '/assets/hero-cabin-tapestry.jpg',
      title: 'Full Masterpiece',
      detail: 'Himalayan Cabin & Pine Forest Relief'
    },
    sun: {
      image: '/assets/texture-sun-swatch.jpg',
      title: 'Spiral Sun Detail',
      detail: 'Concentric single-crochet relief in golden ochre'
    },
    cabin: {
      image: '/assets/texture-cabin-swatch.jpg',
      title: 'Cabin Timber Stitches',
      detail: 'Textured double-loop interlocking log stitches'
    },
    pine: {
      image: '/assets/texture-pine-swatch.jpg',
      title: 'Pine Needle Stitches',
      detail: 'Evergreen cluster needlework in deep moss'
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-parchment-300">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amberGold-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-moss-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline & Micro Announcement */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-parchment-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amberGold-600"></span>
            <span className="font-cinzel text-xs tracking-[0.2em] uppercase text-cabin-800 font-semibold">
              Studio Chandrika • Bespoke Crochet Atelier
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amberGold-100 text-amberGold-900 border border-amberGold-300 text-[11px] font-semibold tracking-wider uppercase">
            <Sparkles className="w-3 h-3 text-amberGold-700" />
            <span>{BRAND_INFO.customisationBadge}</span>
          </div>
        </div>

        {/* Main Split Grid matching Image 1 & Wireframe Welcome Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase of the Hand-Hooked Masterpiece */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative group">
              
              {/* Outer Decorative Frame with deckled edge & stitches */}
              <div className="relative bg-white p-3 sm:p-5 rounded-2xl shadow-artisan border border-parchment-300 transition-all duration-500 hover:shadow-artisan-hover">
                
                {/* Stitch effect border overlay */}
                <div className="absolute inset-2 sm:inset-3 border border-dashed border-amberGold-600/30 rounded-xl pointer-events-none z-10"></div>
                
                {/* Main Artwork Preview */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-parchment-200 shadow-inner">
                  <img
                    src={textureDetails[activeTexture].image}
                    alt={textureDetails[activeTexture].title}
                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                  />

                  {/* Artwork Corner Label */}
                  <div className="absolute top-3 left-3 z-20 bg-cabin-900/85 backdrop-blur-md text-parchment-100 px-3 py-1 rounded-full text-[11px] font-cinzel tracking-wider flex items-center gap-2 shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-amberGold-400 animate-pulse"></span>
                    <span>100% Hand-Hooked Yarn Relief</span>
                  </div>

                  {/* Zoom indicator overlay */}
                  <div className="absolute bottom-3 right-3 z-20 bg-white/90 backdrop-blur-md text-cabin-900 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5 text-amberGold-700" />
                    <span>{textureDetails[activeTexture].title}</span>
                  </div>
                </div>

                {/* Texture Swatch Selector Tabs */}
                <div className="mt-4 pt-3 border-t border-parchment-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-cabin-700 font-medium flex items-center gap-2">
                    <span className="text-amberGold-700 font-bold">Stitch Inspector:</span>
                    <span className="hidden sm:inline text-cabin-600">{textureDetails[activeTexture].detail}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTexture('full')}
                      className={`px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                        activeTexture === 'full'
                          ? 'bg-cabin-900 text-parchment-100 shadow-sm'
                          : 'bg-parchment-200 text-cabin-800 hover:bg-parchment-300'
                      }`}
                    >
                      Full View
                    </button>
                    <button
                      onClick={() => setActiveTexture('sun')}
                      className={`px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                        activeTexture === 'sun'
                          ? 'bg-cabin-900 text-parchment-100 shadow-sm'
                          : 'bg-parchment-200 text-cabin-800 hover:bg-parchment-300'
                      }`}
                    >
                      Sun Swatch
                    </button>
                    <button
                      onClick={() => setActiveTexture('cabin')}
                      className={`px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                        activeTexture === 'cabin'
                          ? 'bg-cabin-900 text-parchment-100 shadow-sm'
                          : 'bg-parchment-200 text-cabin-800 hover:bg-parchment-300'
                      }`}
                    >
                      Cabin Stitches
                    </button>
                    <button
                      onClick={() => setActiveTexture('pine')}
                      className={`px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                        activeTexture === 'pine'
                          ? 'bg-cabin-900 text-parchment-100 shadow-sm'
                          : 'bg-parchment-200 text-cabin-800 hover:bg-parchment-300'
                      }`}
                    >
                      Pine Stitches
                    </button>
                  </div>
                </div>
              </div>

              {/* Artisan Note Tag */}
              <div className="mt-3 flex items-center justify-between text-xs text-cabin-700 px-2">
                <span className="italic font-serif text-sm text-cabin-800">
                  “Every knot and ridge tells a story of Himalayan mornings.”
                </span>
                <span className="font-semibold text-amberGold-800">Himachal Atelier</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Editorial Brand Layout from Image 1 & Wireframe Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            {/* Top Brand Identity Badge */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-amberGold-600"></span>
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-amberGold-800 font-bold">
                  Original Fiber Atelier
                </span>
              </div>

              <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[0.2em] text-cabin-900 leading-tight">
                {BRAND_INFO.name}
              </h1>

              <div className="flex items-center gap-3 pt-1">
                <span className="font-cinzel text-sm sm:text-base tracking-[0.4em] uppercase text-cabin-700 font-semibold">
                  {BRAND_INFO.subtitle}
                </span>
                <span className="h-[1px] flex-1 bg-amberGold-600/40"></span>
              </div>
            </div>

            {/* Welcome Statement & Core Value Proposition */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-cabin-900 font-normal italic leading-snug">
                Where Himalayan tranquility meets the ancient warmth of hand-hooked fiber art.
              </h2>
              
              <p className="text-cabin-800/90 text-sm sm:text-base leading-relaxed">
                Welcome to the quiet craft of Chandrika. Handcrafting bespoke micro-floral frames, collector character sculptures, and scenic yarn tapestries from our studio in Himachal Pradesh.
              </p>

              <div className="p-3.5 rounded-xl bg-amberGold-50 border border-amberGold-200/80 text-cabin-800 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amberGold-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amberGold-900 uppercase tracking-wide text-xs block mb-0.5">
                    • Customisation is Available •
                  </span>
                  Share your memories, favorite flowers, anime characters, or portrait photos. Every creation is tailored to your heirloom vision.
                </div>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cabin-900 hover:bg-cabin-800 text-parchment-100 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-lg group"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-emerald-600 bg-white hover:bg-emerald-50 text-cabin-900 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                <span>Custom Order on WhatsApp</span>
              </a>
            </div>

            {/* Exact Contact & Origin Badge from Image 1 Card */}
            <div className="pt-4 border-t border-parchment-300 grid grid-cols-2 gap-3 text-xs">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-cabin-800 hover:text-amberGold-700 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-amberGold-700 shrink-0" />
                <span className="truncate">@{BRAND_INFO.instagram}</span>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2 text-cabin-800 hover:text-amberGold-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-amberGold-700 shrink-0" />
                <span className="truncate">{BRAND_INFO.email}</span>
              </a>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-cabin-800 hover:text-amberGold-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amberGold-700 shrink-0" />
                <span className="font-semibold">{BRAND_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-cabin-800">
                <MapPin className="w-4 h-4 text-moss-700 shrink-0" />
                <span className="font-medium">{BRAND_INFO.atelier}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
