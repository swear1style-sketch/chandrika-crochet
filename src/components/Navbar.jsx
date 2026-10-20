import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MapPin, Mail } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { BRAND_INFO } from '../data/products';

export default function Navbar({ onOpenCommission }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#categories' },
    { name: 'Frames', href: '#frames-showcase' },
    { name: 'Custom Studio', href: '#custom-studio' },
    { name: 'Atelier Story', href: '#atelier-story' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Artisanal Announcement Bar */}
      <div className="bg-cabin-900 text-parchment-200 py-1.5 px-4 text-xs tracking-widest uppercase flex items-center justify-between border-b border-amberGold-900/40">
        <div className="hidden sm:flex items-center gap-2 text-amberGold-400 font-medium">
          <MapPin className="w-3.5 h-3.5" />
          <span>Hand-hooked in Himachal Pradesh, India</span>
        </div>
        <div className="mx-auto sm:mx-0 flex items-center gap-3 font-cinzel text-[11px] text-parchment-100">
          <span className="w-1.5 h-1.5 rounded-full bg-amberGold-500 animate-pulse"></span>
          <span className="tracking-[0.2em] font-semibold text-amberGold-400">
            • {BRAND_INFO.customisationBadge} •
          </span>
          <span className="hidden md:inline text-parchment-300">Pan-India & Global Courier Delivery</span>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-parchment-300">
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amberGold-400 flex items-center gap-1 transition-colors"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span className="text-[10px]">@{BRAND_INFO.instagram}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-parchment-50/95 backdrop-blur-md shadow-md py-3 border-b border-parchment-300'
            : 'bg-parchment-100/90 backdrop-blur-sm py-4 border-b border-parchment-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Styled directly after Image 1 */}
          <a href="#" className="flex flex-col group">
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.25em] text-cabin-900 group-hover:text-amberGold-700 transition-colors">
              {BRAND_INFO.name}
            </span>
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-4 bg-amberGold-600 transition-all group-hover:w-8"></span>
              <span className="font-cinzel text-[9px] tracking-[0.35em] uppercase text-cabin-700 font-semibold">
                {BRAND_INFO.subtitle}
              </span>
              <span className="h-[1px] w-4 bg-amberGold-600 transition-all group-hover:w-8"></span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-cabin-800 hover:text-amberGold-700 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amberGold-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCommission}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amberGold-600/60 bg-amberGold-50 text-amberGold-900 hover:bg-amberGold-100 transition-all text-xs font-semibold tracking-wider uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amberGold-600" />
              <span>Custom Order</span>
            </button>

            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white transition-all text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white text-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-cabin-900 hover:text-amberGold-700 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-parchment-50 border-b border-parchment-300 px-6 py-6 animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-cabin-900 hover:text-amberGold-700 py-1 border-b border-parchment-200/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommission();
                  }}
                  className="w-full py-2.5 rounded-full border border-amberGold-600 bg-amberGold-50 text-amberGold-900 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amberGold-600" />
                  <span>Request Custom Piece</span>
                </button>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
