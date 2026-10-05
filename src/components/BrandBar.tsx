import React from 'react';
import { POPULAR_BRANDS } from '../data/storeData';
import { Check } from 'lucide-react';

export const BrandBar: React.FC = () => {
  return (
    <section id="brands" className="py-12 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Branded Collection
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 mt-1">
              Popular Fashion Brands at Direct Retail Pricing
            </h2>
          </div>
          <p className="text-sm text-stone-500 max-w-md">
            No need to travel to metropolitan centers. Deep Handloom brings original licensed 
            collections from India&apos;s most sought-after brands directly to Merta City.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {POPULAR_BRANDS.map((b) => (
            <div
              key={b.name}
              className="p-5 rounded-xl border border-stone-200/90 bg-stone-50/50 hover:bg-stone-50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="font-serif text-xl font-bold text-stone-900 tracking-tight">
                  {b.name}
                </div>
                <div className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                  {b.category}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-medium text-amber-900">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{b.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
