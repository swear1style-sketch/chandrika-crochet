import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/products';

export default function FloatingAction({ onOpenCommission }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto">
      
      {/* Friendly Chatbot Bubble */}
      {showTooltip && (
        <div className="relative bg-white text-cabin-900 px-3.5 py-2 rounded-2xl shadow-xl border border-parchment-300 text-xs flex items-center gap-2 animate-bounce-subtle max-w-[240px]">
          <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0 animate-ping"></span>
          <p className="text-[11px] font-medium leading-tight">
            Hi! Looking for a custom crochet frame or figure?
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-cabin-500 hover:text-cabin-800 p-0.5 rounded-full hover:bg-parchment-200 transition-colors"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          
          {/* Arrow pointing down to WhatsApp button */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-b border-r border-parchment-300 transform rotate-45"></div>
        </div>
      )}

      {/* Main WhatsApp Action Button - Designed as an authentic WhatsApp floating button */}
      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 group"
        aria-label="Chat with Chandrika on WhatsApp"
      >
        <div className="relative">
          <WhatsAppIcon className="w-6 h-6 fill-white text-white drop-shadow-sm" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white ring-2 ring-[#25D366] animate-pulse"></span>
        </div>
        <span className="text-xs font-semibold tracking-wide uppercase hidden sm:inline font-sans">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}
