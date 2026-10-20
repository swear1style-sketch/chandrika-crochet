import React from 'react';
import { Sparkles, Heart, Feather, ShieldCheck, MapPin } from 'lucide-react';

export default function BrandStrip() {
  const pillars = [
    {
      icon: Feather,
      title: "100% Hand-Hooked",
      desc: "Every loop sculpted single-stitch by hand"
    },
    {
      icon: Sparkles,
      title: "Customisation Is Available",
      desc: "Tailored botanicals, portraits & sizes"
    },
    {
      icon: Heart,
      title: "Heirloom Grade",
      desc: "Pure mercerized cotton & archival frames"
    },
    {
      icon: MapPin,
      title: "Himachal Origin",
      desc: "Handcrafted in the silence of the Himalayas"
    }
  ];

  return (
    <div className="bg-parchment-200/80 border-b border-parchment-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-parchment-100 border border-amberGold-400/50 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-4 h-4 text-amberGold-700" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-cabin-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-cabin-700/80 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
