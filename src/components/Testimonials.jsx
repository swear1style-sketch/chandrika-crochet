import React from 'react';
import { Star, Sparkles, Quote } from 'lucide-react';
import { REVIEWS } from '../data/faqs';

export default function Testimonials() {
  return (
    <section className="py-20 bg-parchment-100 border-b border-parchment-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-parchment-200 border border-amberGold-600/30 text-amberGold-800 text-xs font-cinzel font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-600" />
            <span>Collector Appreciation</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] text-cabin-900">
            CLIENT WORDS & KEEPSAKES
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-cabin-700">
            Stories from patrons who brought a piece of Himachal into their homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-artisan border border-parchment-300 flex flex-col justify-between relative group hover:shadow-artisan-hover transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amberGold-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <h4 className="font-cinzel text-sm font-bold text-cabin-900">
                  "{rev.title}"
                </h4>

                <p className="text-xs sm:text-sm text-cabin-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-parchment-200 flex items-center justify-between">
                <div>
                  <h5 className="font-cinzel text-xs font-bold text-cabin-900">
                    {rev.name}
                  </h5>
                  <span className="text-[11px] text-cabin-600">
                    {rev.location}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-amberGold-800 bg-amberGold-50 px-2.5 py-1 rounded-full border border-amberGold-200">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
