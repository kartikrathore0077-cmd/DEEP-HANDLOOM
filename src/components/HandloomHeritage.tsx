import React from 'react';
import { Feather, Award, HeartHandshake, Sparkles } from 'lucide-react';

export const HandloomHeritage: React.FC = () => {
  const highlights = [
    {
      title: 'Artisan Loom Sourcing',
      desc: 'Sourced directly from skilled Rajasthani and Indian weaver communities, preserving generational warp and weft traditions.'
    },
    {
      title: 'Breathable Pure Cotton',
      desc: 'Finest long-staple cotton perfect for Rajasthan’s desert climate—cooling in summer and enduring through countless washes.'
    },
    {
      title: 'Ceremonial & Family Needs',
      desc: 'Complete ceremonial attire including authentic dhotis, traditional safas, festive sarees, and daily luxury bed linens.'
    },
    {
      title: 'Modern Retail Standards',
      desc: 'Air-conditioned showroom, fixed transparent pricing, attentive assistance, and comfortable family shopping.'
    }
  ];

  return (
    <section id="heritage" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-md aspect-4/5 bg-stone-200">
              <img
                src="/src/assets/images/collection_handloom_fabrics_1791161689849.jpg"
                alt="Rajasthani handwoven textiles and pure cotton fabrics"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Trust callout box */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl border border-stone-200 shadow-lg max-w-xs hidden sm:block">
              <div className="text-amber-900 font-serif text-2xl font-bold">100% Pure</div>
              <div className="text-xs text-stone-600 mt-1">
                Authentic handwoven fabrics tested for dye fastness and yarn longevity.
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Heritage & Craftsmanship
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
              Rooted in Handloom Tradition, Designed for Contemporary Life
            </h2>
            <p className="text-stone-600 text-base leading-relaxed">
              At Deep Handloom Merta City, we take pride in being a vital bridge between India&apos;s 
              storied handwoven textile tradition and contemporary modern wardrobe needs. For years, 
              families across Nagaur district have counted on us for genuine handloom cotton bedsheets, 
              fine Kota Doria sarees, and ritual dhotis alongside top-tier branded readymade clothing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((h, i) => (
                <div key={i} className="space-y-1.5 border-l-2 border-amber-900/30 pl-4">
                  <h4 className="font-semibold text-stone-900 text-sm">{h.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-stone-500">
              <span>Authentic Weaves</span>
              <span aria-hidden="true">·</span>
              <span>Tested Colors</span>
              <span aria-hidden="true">·</span>
              <span>Skin-Friendly Cottons</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
