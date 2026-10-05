import React, { useState } from 'react';
import { Product } from '../data/storeData';
import { X, Check, ShoppingBag, MessageSquare, ShieldCheck, MapPin, Truck } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToInquiry: (product: Product, size: string) => void;
  isInInquiry: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToInquiry,
  isInInquiry
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.sizes[0] || 'Standard'
  );
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Deep Handloom! I am inquiring about:\n\n*${product.name}*\nBrand: ${product.brand}\nSize: ${selectedSize}\nPrice: ₹${product.price}\n\nIs this in stock at your Merta City or Gotan branch?`
    );
    window.open(`https://wa.me/919414032189?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-stone-950 border border-stone-200 transition-colors shadow-xs cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery View */}
          <div className="relative aspect-square md:aspect-auto bg-stone-100 min-h-[300px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {product.tag && (
              <div className="absolute top-4 left-4 bg-stone-900 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-sm">
                {product.tag}
              </div>
            )}
          </div>

          {/* Contiguous Purchase Module */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Quiet Metadata */}
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                <span className="text-amber-900 font-bold">{product.brand}</span>
                <span aria-hidden="true">·</span>
                <span>{product.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700">100% Genuine</span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                {product.name}
              </h2>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 tabular-nums">
                <span className="text-2xl font-bold text-stone-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-stone-500 font-normal">MRP (Inclusive of all taxes)</span>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed">
                {product.description}
              </p>

              {/* Fabric Specs */}
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200/80 text-xs space-y-1">
                <div className="font-semibold text-stone-800">Fabric & Material Composition:</div>
                <div className="text-stone-600">{product.fabricDetails}</div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-2">
                  <span>Select Size:</span>
                  <span className="text-stone-400">Fitting rooms available in-store</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'border-amber-900 bg-amber-900 text-white shadow-xs'
                          : 'border-stone-300 bg-white text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onAddToInquiry(product, selectedSize)}
                  className={`py-3 px-4 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    isInInquiry
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{isInInquiry ? 'In Inquiry Bag' : 'Add to Bag'}</span>
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="py-3 px-4 text-xs font-semibold rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Store</span>
                </button>
              </div>

              {/* Location Trust footnote */}
              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-900" />
                  <span>Available at Merta City Showroom</span>
                </span>
                <span className="flex items-center gap-1 text-emerald-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Stock</span>
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
