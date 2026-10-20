import React from 'react';
import { MapPin, Heart, Sparkles, Feather, Mail, Phone } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/products';

export default function AtelierStory() {
  return (
    <section id="atelier-story" className="py-20 bg-parchment-100 border-b border-parchment-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Brand Card Presentation from Image 1 */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative group">
              
              {/* Outer Shadow and Deckled Paper Border */}
              <div className="relative bg-white p-3 rounded-2xl shadow-artisan border border-parchment-300 transition-all duration-500 hover:shadow-artisan-hover">
                
                {/* Stitch effect border overlay */}
                <div className="absolute inset-2 border border-dashed border-amberGold-600/30 rounded-xl pointer-events-none z-10"></div>
                
                {/* Real Brand Card from Image 1 */}
                <div className="relative rounded-lg overflow-hidden bg-parchment-200">
                  <img
                    src="/assets/chandrika-brand-card.jpg"
                    alt="Chandrika Artist Brand Identity and Crochet Mountain Artwork"
                    className="w-full h-auto object-cover object-center transition-all duration-700 group-hover:scale-102"
                  />

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 bg-cabin-900/90 backdrop-blur-md text-parchment-100 px-3 py-1 rounded-full text-[10px] font-cinzel tracking-wider flex items-center gap-1.5 shadow">
                    <Sparkles className="w-3 h-3 text-amberGold-400" />
                    <span>Official Studio Card & Masterwork</span>
                  </div>
                </div>

              </div>

              {/* Caption */}
              <div className="text-center pt-2">
                <span className="font-serif italic text-sm text-cabin-700">
                  Hand-hooked relief tapestry featuring the Himachal cabin, pine forest, and golden sun.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-moss-700" />
                <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-moss-800 font-bold">
                  Himachal Pradesh • India
                </span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cabin-900">
                THE HIMACHAL ATELIER
              </h2>

              <p className="font-serif italic text-xl text-amberGold-800">
                “Slow craft born in the shelter of deodar trees and snow-capped peaks.”
              </p>
            </div>

            <div className="space-y-4 text-cabin-800 text-sm sm:text-base leading-relaxed">
              <p>
                In a world driven by fleeting, mass-manufactured replicas, <strong>Studio Chandrika</strong> stands for the unhurried meditation of the single crochet hook. Based high in the valleys of Himachal Pradesh, every piece begins with carefully selected organic threads, wound and looped entirely by hand.
              </p>

              <p>
                From the crisp yellow buttercups that bloom across mountain meadows to the serene timber cabins tucked among pines, Chandrika translates the soul of Himalayan nature into three-dimensional fiber art.
              </p>

              <p>
                Whether it is an intimate 4-inch micro-floral baroque frame or a full-scale commissioned yarn tapestry, each work of art carries the tangible warmth and patience of its maker.
              </p>
            </div>

            {/* Direct Artist Contact Info matching Image 1 */}
            <div className="pt-4 border-t border-parchment-300 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-parchment-50 border border-parchment-200 space-y-1">
                <span className="text-[10px] text-cabin-600 uppercase tracking-wider block font-semibold">Location</span>
                <span className="font-medium text-cabin-900">Himachal Pradesh, India</span>
              </div>

              <div className="p-3 rounded-xl bg-parchment-50 border border-parchment-200 space-y-1">
                <span className="text-[10px] text-cabin-600 uppercase tracking-wider block font-semibold">Direct Atelier Orders</span>
                <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="font-bold text-emerald-700 hover:underline inline-flex items-center gap-1.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="p-3 rounded-xl bg-parchment-50 border border-parchment-200 space-y-1">
                <span className="text-[10px] text-cabin-600 uppercase tracking-wider block font-semibold">Instagram Gallery</span>
                <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noreferrer" className="font-medium text-cabin-900 hover:text-amberGold-700">
                  @{BRAND_INFO.instagram}
                </a>
              </div>

              <div className="p-3 rounded-xl bg-parchment-50 border border-parchment-200 space-y-1">
                <span className="text-[10px] text-cabin-600 uppercase tracking-wider block font-semibold">Atelier Inquiries</span>
                <a href={`mailto:${BRAND_INFO.email}`} className="font-medium text-cabin-900 hover:text-amberGold-700 truncate block">
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
