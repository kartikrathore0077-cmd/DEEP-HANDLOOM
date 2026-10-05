import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { checkStoreStatus } from '../data/storeData';

interface NavbarProps {
  inquiryCount: number;
  onOpenInquiry: () => void;
  onSelectLocationTab: (locId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  inquiryCount,
  onOpenInquiry,
  onSelectLocationTab
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = checkStoreStatus();

  return (
    <header className="sticky top-0 z-40 w-full bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top Quiet Utility Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-white">{status.message}</span>
            <span className="hidden sm:inline text-stone-500">·</span>
            <span className="hidden sm:inline text-stone-400">Main Store: Opp. Government College, Gagrana, Merta City</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400 text-xs">
            <button
              onClick={() => onSelectLocationTab('merta-main')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Merta City & Gotan</span>
            </button>
            <span className="text-stone-600">·</span>
            <a
              href="tel:+919414032189"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 94140 32189</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-6 Links) — Zone 3 (1-2 Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif hover:text-amber-950 transition-colors"
        >
          Deep Handloom
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
          <a
            href="#collections"
            className="hover:text-stone-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-900 after:transition-all"
          >
            Collections
          </a>
          <a
            href="#brands"
            className="hover:text-stone-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-900 after:transition-all"
          >
            Branded Fashion
          </a>
          <a
            href="#heritage"
            className="hover:text-stone-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-900 after:transition-all"
          >
            Handloom Heritage
          </a>
          <a
            href="#locations"
            className="hover:text-stone-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-900 after:transition-all"
          >
            Store Locations
          </a>
          <a
            href="#reviews"
            className="hover:text-stone-950 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-900 after:transition-all"
          >
            Reviews (4.1★)
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            aria-label="View Inquiry Bag"
            className="relative flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300/80 rounded-lg transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-amber-900" />
            <span className="hidden sm:inline">Inquiry Bag</span>
            {inquiryCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-amber-900 text-white rounded-full tabular-nums">
                {inquiryCount}
              </span>
            )}
          </button>

          <a
            href="#locations"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            Visit Showroom
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-stone-700 hover:text-stone-950 rounded-lg"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium text-stone-800">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-900 transition-colors"
            >
              Collections & Catalog
            </a>
            <a
              href="#brands"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-900 transition-colors"
            >
              Branded Wear (Jockey, Mufti, Red Tape)
            </a>
            <a
              href="#heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-900 transition-colors"
            >
              Handloom Heritage & Craft
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-900 transition-colors"
            >
              Store Locations & Operating Hours
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-900 transition-colors"
            >
              Customer Reviews (4.1★ on 300+ Reviews)
            </a>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href="tel:+919414032189"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold bg-stone-900 text-white rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call Merta Store (+91 94140 32189)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold bg-stone-200 text-stone-900 rounded-lg"
            >
              <ShoppingBag className="w-4 h-4 text-amber-900" />
              View Selected Items ({inquiryCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
