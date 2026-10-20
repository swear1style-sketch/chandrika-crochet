import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/products';

export default function ContactFooter({ onOpenCommission }) {
  const [emailSub, setEmailSub] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSub) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-cabin-900 text-parchment-200 border-t-2 border-amberGold-600 relative overflow-hidden">
      
      {/* Decorative Warm Backlight */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-amberGold-700/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-cabin-800">
          
          {/* Column 1: Brand Info (Image 1 Style) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="space-y-1">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-[0.2em] text-parchment-100">
                {BRAND_INFO.name}
              </h3>
              <div className="flex items-center gap-3">
                <span className="font-cinzel text-xs tracking-[0.4em] uppercase text-amberGold-400 font-semibold">
                  {BRAND_INFO.subtitle}
                </span>
                <span className="h-[1px] w-12 bg-amberGold-600"></span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-parchment-300 leading-relaxed max-w-sm">
              Artisanal fiber studio based in Himachal Pradesh, crafting timeless micro-botanical frames, poseable character action figures, and textured landscape yarn tapestries.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cabin-800 border border-amberGold-600/40 text-amberGold-400 text-xs font-cinzel font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>• {BRAND_INFO.customisationBadge} •</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCommission}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amberGold-600 hover:bg-amberGold-500 text-cabin-900 font-semibold text-xs tracking-wider uppercase transition-all shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Request Custom Creation</span>
              </button>
            </div>
          </div>

          {/* Column 2: Exact Contact Details from Image 1 */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-amberGold-400">
              Direct Atelier Contacts
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-parchment-200 hover:text-emerald-400 transition-colors p-2 rounded-lg bg-cabin-800/60 border border-cabin-800 hover:border-emerald-600/40 group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[10px] text-parchment-400 uppercase tracking-wider block">Direct Order & Inquiries</span>
                  <span className="font-semibold text-emerald-400 group-hover:underline">Chat on WhatsApp</span>
                </div>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-3 text-parchment-200 hover:text-amberGold-400 transition-colors p-2 rounded-lg bg-cabin-800/60 border border-cabin-800 hover:border-amberGold-600/40"
              >
                <div className="w-8 h-8 rounded-full bg-amberGold-600/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-amberGold-400" />
                </div>
                <div>
                  <span className="text-[10px] text-parchment-400 uppercase tracking-wider block">Email Inquiries</span>
                  <span className="font-medium truncate">{BRAND_INFO.email}</span>
                </div>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-parchment-200 hover:text-amberGold-400 transition-colors p-2 rounded-lg bg-cabin-800/60 border border-cabin-800 hover:border-amberGold-600/40"
              >
                <div className="w-8 h-8 rounded-full bg-amberGold-600/20 flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-4 h-4 text-amberGold-400" />
                </div>
                <div>
                  <span className="text-[10px] text-parchment-400 uppercase tracking-wider block">Instagram</span>
                  <span className="font-medium">@{BRAND_INFO.instagram}</span>
                </div>
              </a>

              <div className="flex items-center gap-3 text-parchment-300 p-2 rounded-lg bg-cabin-800/60 border border-cabin-800">
                <div className="w-8 h-8 rounded-full bg-moss-700/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-moss-400" />
                </div>
                <div>
                  <span className="text-[10px] text-parchment-400 uppercase tracking-wider block">Studio Location</span>
                  <span className="font-medium">{BRAND_INFO.atelier}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Atelier Newsletter / Updates */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-amberGold-400">
              The Himalayan Gazette
            </h4>
            
            <p className="text-xs text-parchment-300 leading-relaxed">
              Receive seasonal previews of new miniature botanical frames, one-off gallery tapestries, and commission openings.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-cabin-800 border border-amberGold-500/50 text-xs text-amberGold-300">
                Thank you for connecting with Studio Chandrika.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cabin-800 border border-cabin-700 text-xs text-parchment-100 placeholder-parchment-400 focus:outline-none focus:border-amberGold-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-amberGold-600 hover:bg-amberGold-500 text-cabin-900 font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              <span className="text-[11px] text-parchment-400 italic">
                Pan-India Express Air Shipping • Safe Wooden Gift Packaging
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-parchment-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Studio Chandrika. All hand-crocheted rights reserved.</span>
            <span className="hidden sm:inline text-parchment-600">•</span>
            <span>
              Engineered by{' '}
              <a
                href="https://vectoraslab.com"
                target="_blank"
                rel="noreferrer"
                className="text-amberGold-400 hover:text-amberGold-300 font-semibold underline underline-offset-2 transition-colors"
              >
                vectoraslab.com
              </a>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amberGold-400 hover:text-amberGold-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
