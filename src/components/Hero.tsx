import React from 'react';
import { ArrowRight, MapPin, Star, ShieldCheck, Car, Clock } from 'lucide-react';
import { checkStoreStatus } from '../data/storeData';

interface HeroProps {
  onExploreClick: () => void;
  onDirectionsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onDirectionsClick }) => {
  const storeStatus = checkStoreStatus();

  return (
    <section className="relative overflow-hidden bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Unboxed Metadata Kicker (Anti-slop: zero pill capsules) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-stone-600 tracking-wide uppercase">
              <span className="text-amber-900 font-bold">Deep Handloom Merta City</span>
              <span aria-hidden="true">·</span>
              <span>Readymade & Handloom Emporium</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                {storeStatus.isOpen ? 'Open Today' : 'Store Hours Updated'}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-stone-900 tracking-tight leading-[1.12]" style={{ textWrap: 'balance' }}>
              Where Rajasthani Weaving Craft Meets Modern Branded Fashion.
            </h1>

            {/* Stylish Infinite Scroll Ribbon Animation: DEEP HANDLOOM */}
            <div className="relative py-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-amber-50/80 via-stone-100 to-amber-50/80 border border-amber-900/20 shadow-xs mask-marquee select-none group">
              <div className="animate-marquee flex items-center gap-6 text-sm font-semibold tracking-wider uppercase">
                {/* Track 1 */}
                <div className="flex items-center gap-6 shrink-0">
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-950 tracking-widest drop-shadow-xs">
                    DEEP HANDLOOM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="text-stone-700 font-serif tracking-widest text-xs sm:text-sm">
                    MERTA CITY
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-900 tracking-widest">
                    DEEP HANDLOOM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="text-stone-600 text-xs sm:text-sm">
                    MULTI-BRAND READYMADE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-950 tracking-widest">
                    DEEP HANDLOOM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="text-stone-700 font-serif tracking-widest text-xs sm:text-sm">
                    HANDWOVEN HERITAGE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-900 tracking-widest">
                    DEEP HANDLOOM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="text-stone-600 text-xs sm:text-sm">
                    JOCKEY · MUFTI · RED TAPE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                </div>

                {/* Track 2 (Clone for seamless infinite scrolling) */}
                <div className="flex items-center gap-6 shrink-0" aria-hidden="true">
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-950 tracking-widest drop-shadow-xs">
                    DEEP HANDLOOM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="text-stone-700 font-serif tracking-widest text-xs sm:text-sm">
                    MERTA CITY
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-900 tracking-widest">
                    DEEP HANDLOOM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="text-stone-600 text-xs sm:text-sm">
                    MULTI-BRAND READYMADE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-950 tracking-widest">
                    DEEP HANDLOOM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="text-stone-700 font-serif tracking-widest text-xs sm:text-sm">
                    HANDWOVEN HERITAGE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="font-serif text-base sm:text-lg font-bold text-amber-900 tracking-widest">
                    DEEP HANDLOOM
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                  <span className="text-stone-600 text-xs sm:text-sm">
                    JOCKEY · MUFTI · RED TAPE
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700/60" />
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Current Collections</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onDirectionsClick}
                className="px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <MapPin className="w-4 h-4 text-amber-900" />
                <span>Merta City Store & Timings</span>
              </button>
            </div>

            {/* Social Proof & Trust Metrics (Claim-to-Proof Adjacency) */}
            <div className="pt-6 border-t border-stone-200/90 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-1.5 text-amber-800 font-semibold text-lg tabular-nums">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  <span>4.1 / 5</span>
                </div>
                <div className="text-xs text-stone-500 mt-0.5">300+ Verified Reviews</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-stone-900 font-semibold text-lg">
                  <ShieldCheck className="w-5 h-5 text-amber-800" />
                  <span>100% Genuine</span>
                </div>
                <div className="text-xs text-stone-500 mt-0.5">Jockey, Mufti & Red Tape</div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-stone-900 font-semibold text-lg">
                  <Car className="w-5 h-5 text-amber-800" />
                  <span>Free Parking</span>
                </div>
                <div className="text-xs text-stone-500 mt-0.5">Opp. Government College</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor with Styled Scrim & Resilient Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-stone-200 border border-stone-300 shadow-xl aspect-4/3 sm:aspect-16/10 lg:aspect-4/5 group">
              <img
                src="/src/assets/images/hero_deep_handloom_1791161675883.jpg"
                alt="Inside Deep Handloom showroom showing handwoven fabrics and branded apparel"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Scrim for Contrast & Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Main Showroom · Merta City
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white">
                  Gotan Borunda Circle, Gagrana
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 mt-2 line-clamp-2">
                  Two expansive floors of pure handloom linens, festive sarees, and youth streetwear.
                </p>

                {/* Operating hours snippet */}
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-stone-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Mon: 9AM - 9PM · Tue-Sat: 9AM - 7PM</span>
                  </span>
                  <span className="text-amber-300 font-medium">Sunday Closed</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset card */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-stone-200 shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 border border-amber-200">
                  <span className="font-serif text-amber-900 font-bold text-lg">DH</span>
                </div>
                <div className="text-xs">
                  <p className="font-bold text-stone-900">Family & Youth Shopping</p>
                  <p className="text-stone-500 mt-0.5">Air conditioned trial rooms & polite advisory staff.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
