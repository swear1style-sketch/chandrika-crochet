import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Craftsmanship() {
  const materials = [
    {
      title: "Concentric Micro Stitches",
      subtitle: "Spiral Loop Precision",
      image: "/assets/texture-sun-swatch.jpg",
      description: "Fine, tightly tensioned crochet stitches looped row-by-row with microscopic hooks, producing dense tactile spirals and seamless radiant curves."
    },
    {
      title: "Mountain Relief & Slopes",
      subtitle: "Textured Boucle Relief",
      image: "/assets/texture-mountain-swatch.jpg",
      description: "Layered high-texture yarn stitches creating dimensional ridge lines and snow-covered slopes that cast natural physical shadows under light."
    },
    {
      title: "Alpine Spruce Needlework",
      subtitle: "Evergreen Fiber Foliage",
      image: "/assets/texture-pine-swatch.jpg",
      description: "Intricately clustered double-loop stitches sculpting deep forest pine trees with rich organic texture inspired by the cedar woods of Himachal."
    },
    {
      title: "Interlocking Cabin Logs",
      subtitle: "Architectural Relief Weave",
      image: "/assets/texture-cabin-swatch.jpg",
      description: "Sturdy ribbed fiber bars recreating rustic timber cabin logs and window frames, bringing rustic Himalayan warmth directly to your walls."
    }
  ];

  return (
    <section id="craftsmanship" className="py-20 bg-parchment-50 border-b border-parchment-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-parchment-200 border border-amberGold-600/30 text-amberGold-800 text-xs font-cinzel font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amberGold-600" />
            <span>100% Authentic Crochet Art</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.15em] text-cabin-900">
            CRAFTSMANSHIP & STITCH TEXTURES
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-cabin-700">
            Macro details from Chandrika's hand-hooked mountain masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {materials.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-parchment-300 shadow-artisan hover:shadow-artisan-hover transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-square overflow-hidden bg-parchment-200">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cabin-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-cinzel uppercase tracking-wider text-amberGold-300 block">
                    {m.subtitle}
                  </span>
                  <h4 className="font-cinzel text-sm font-bold text-parchment-100">
                    {m.title}
                  </h4>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs text-cabin-800 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
