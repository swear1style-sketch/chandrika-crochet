import React from 'react';
import { Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/products';

export default function FloatingAction({ onOpenCommission }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      
      {/* Commission Quick Pill */}
      <button
        onClick={() => onOpenCommission()}
        className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-parchment-50 border border-amberGold-600/50 text-cabin-900 shadow-md hover:bg-white transition-all text-xs font-cinzel font-semibold tracking-wider uppercase group"
      >
        <Sparkles className="w-3.5 h-3.5 text-amberGold-600 group-hover:rotate-12 transition-transform" />
        <span>• Customisation Available •</span>
      </button>

      {/* Main WhatsApp Direct Button */}
      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl border border-emerald-500/40 transition-all transform hover:-translate-y-1 group"
        aria-label="Direct WhatsApp inquiry"
      >
        <div className="relative">
          <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amberGold-400 ring-2 ring-emerald-900 animate-pulse"></span>
        </div>
        <span className="text-xs font-cinzel font-bold tracking-wider uppercase hidden sm:inline">
          Order on WhatsApp (+91 98487 59103)
        </span>
      </a>
    </div>
  );
}
