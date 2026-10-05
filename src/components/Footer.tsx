import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Car, ExternalLink } from 'lucide-react';
import { STORE_LOCATIONS } from '../data/storeData';

interface FooterProps {
  onSelectLocationTab: (locId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectLocationTab }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-bold text-white tracking-tight">
              Deep Handloom
            </span>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Nagaur district&apos;s leading retail destination for multi-brand readymade garments 
              (Jockey, Mufti, Red Tape) and authentic Rajasthani handwoven textiles.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-stone-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Rated 4.1 / 5 by 300+ Shoppers
              </span>
              <span>·</span>
              <span>2 Showrooms</span>
            </div>
          </div>

          {/* Main Store Merta City */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Main Store (Merta City)
            </div>
            <div className="text-xs text-stone-300 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-white">Gotan Borunda Circle, Gagrana</p>
              <p className="text-amber-200">Landmark: Opposite Government College</p>
              <p className="text-stone-400">Merta - 341510, Nagaur, Rajasthan</p>
              <div className="pt-2 flex flex-col gap-1 text-[11px] text-stone-400">
                <a
                  href="tel:+919414032189"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>+91 94140 32189</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Deep+Handloom+Opposite+Government+College+Gagrana+Merta+341510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Branch Store Gotan */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Branch Store (Gotan)
            </div>
            <div className="text-xs text-stone-300 space-y-1.5 leading-relaxed">
              <p className="font-semibold text-white">MDR58, Veer Teja Colony</p>
              <p className="text-stone-400">Gotan, Nagaur - 342902, Rajasthan</p>
              <div className="pt-2 flex flex-col gap-1 text-[11px] text-stone-400">
                <a
                  href="tel:+919414187654"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>+91 94141 87654</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Deep+Handloom+MDR58+Veer+Teja+Colony+Gotan+342902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Summary */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Store Timings
            </div>
            <div className="text-xs text-stone-300 space-y-1 leading-relaxed">
              <div className="flex justify-between">
                <span className="text-stone-400">Monday:</span>
                <span className="font-medium text-white">9:00 AM – 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Tue – Sat:</span>
                <span className="font-medium text-white">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Seasonal:</span>
                <span>Till 9:30 PM</span>
              </div>
              <div className="flex justify-between text-red-400 font-semibold pt-1">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="pt-3 text-[11px] text-emerald-400 flex items-center gap-1">
                <Car className="w-3.5 h-3.5" />
                <span>Dedicated Free Parking</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Deep Handloom Merta City. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#collections" className="hover:text-stone-300 transition-colors">Catalog</a>
            <a href="#brands" className="hover:text-stone-300 transition-colors">Partner Brands</a>
            <a href="#locations" className="hover:text-stone-300 transition-colors">Store Locations</a>
            <a href="#reviews" className="hover:text-stone-300 transition-colors">Reviews</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
