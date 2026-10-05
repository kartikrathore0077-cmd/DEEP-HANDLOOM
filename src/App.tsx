import React, { useState, useEffect } from 'react';
import { Product, INITIAL_PRODUCTS, STORE_LOCATIONS } from './data/storeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandBar } from './components/BrandBar';
import { FeaturedCollections } from './components/FeaturedCollections';
import { ProductCatalog } from './components/ProductCatalog';
import { HandloomHeritage } from './components/HandloomHeritage';
import { StoreLocations } from './components/StoreLocations';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InquiryDrawer, InquiryItem } from './components/InquiryDrawer';
import { Check, MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'handloom' | 'menswear' | 'womenswear' | 'kids'
  >('all');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState('merta-main');
  
  // Inquiry Bag State
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([
    {
      product: INITIAL_PRODUCTS[0], // Mufti denim pre-shortlisted for demo delight
      size: '32',
      quantity: 1
    }
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToInquiry = (product: Product, size?: string) => {
    const chosenSize = size || product.sizes[0] || 'Standard';
    setInquiryItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === chosenSize
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === chosenSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, size: chosenSize, quantity: 1 }];
    });
    showToast(`Added "${product.name}" (${chosenSize}) to inquiry bag`);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setInquiryItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as InquiryItem[]
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setInquiryItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleClearAll = () => {
    setInquiryItems([]);
  };

  const handleSelectLocationTab = (locId: string) => {
    setSelectedLocationId(locId);
    const el = document.getElementById('locations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalInquiryCount = inquiryItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const inquiryProductIds = inquiryItems.map((item) => item.product.id);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col text-stone-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-bottom-4 duration-200 border border-stone-700">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        inquiryCount={totalInquiryCount}
        onOpenInquiry={() => setInquiryDrawerOpen(true)}
        onSelectLocationTab={handleSelectLocationTab}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('collections');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onDirectionsClick={() => {
            handleSelectLocationTab('merta-main');
          }}
        />

        {/* Brand Partnership Showcase */}
        <BrandBar />

        {/* 3 Main Specialties / Pillars */}
        <FeaturedCollections
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('collections');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Interactive In-Store Product Catalog */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onOpenProductModal={(p) => setActiveProductModal(p)}
          onAddToInquiry={handleAddToInquiry}
          inquiryProductIds={inquiryProductIds}
        />

        {/* Handloom Craft & Heritage */}
        <HandloomHeritage />

        {/* Store Locations & Timings Showcase */}
        <StoreLocations
          selectedLocationId={selectedLocationId}
          onSelectLocation={setSelectedLocationId}
        />

        {/* Customer Reviews & Feedback */}
        <CustomerReviews />
      </main>

      {/* Footer */}
      <Footer onSelectLocationTab={handleSelectLocationTab} />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToInquiry={handleAddToInquiry}
        isInInquiry={
          activeProductModal ? inquiryProductIds.includes(activeProductModal.id) : false
        }
      />

      {/* Inquiry Drawer */}
      <InquiryDrawer
        isOpen={inquiryDrawerOpen}
        onClose={() => setInquiryDrawerOpen(false)}
        items={inquiryItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
      />

      {/* Fixed WhatsApp Quick Assistance Floating Affordance (Clean, compliant) */}
      <aside aria-label="Customer Support Affordance" className="fixed bottom-6 left-6 z-40">
        <a
          href="https://wa.me/919414032189?text=Hello%20Deep%20Handloom%2C%20I%20have%20an%20inquiry%20about%20store%20timings%20and%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp Merta Store</span>
        </a>
      </aside>
    </div>
  );
}
