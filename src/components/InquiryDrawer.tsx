import React, { useState } from 'react';
import { Product } from '../data/storeData';
import { X, Trash2, Plus, Minus, MessageSquare, Phone, Store, ArrowRight } from 'lucide-react';

export interface InquiryItem {
  product: Product;
  size: string;
  quantity: number;
}

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearAll: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll
}) => {
  const [preferredStore, setPreferredStore] = useState<'merta' | 'gotan'>('merta');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  const handleWhatsAppInquiry = () => {
    if (items.length === 0) return;

    const storeLabel =
      preferredStore === 'merta'
        ? 'Main Showroom (Opp. Government College, Merta City)'
        : 'Gotan Branch (Veer Teja Colony, Gotan)';

    let message = `*Deep Handloom Store Inquiry*\n`;
    if (customerName) message += `Customer Name: ${customerName}\n`;
    if (customerPhone) message += `Phone: ${customerPhone}\n`;
    message += `Preferred Location: ${storeLabel}\n\n`;
    message += `*Requested Items:*\n`;

    items.forEach((item, idx) => {
      message += `${idx + 1}. ${item.product.name}\n   Brand: ${item.product.brand}\n   Size: ${item.size} | Qty: ${item.quantity} | ₹${item.product.price * item.quantity}\n`;
    });

    message += `\n*Estimated Total: ₹${totalAmount.toLocaleString('en-IN')}*\n`;
    message += `Please confirm availability and store timings for my visit. Thank you!`;

    const encoded = encodeURIComponent(message);
    const phone = preferredStore === 'merta' ? '919414032189' : '919414187654';
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-900">
                In-Store Reservation & Quote
              </div>
              <h2 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                Your Inquiry Bag ({items.reduce((sum, i) => sum + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-stone-500">
                <Store className="w-12 h-12 text-stone-300 mb-3" />
                <p className="font-medium text-stone-800">Your bag is currently empty</p>
                <p className="text-xs text-stone-500 mt-1 max-w-xs">
                  Explore our branded readymade apparel and handloom fabrics and add items to request trial availability.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-4 py-2 text-xs font-semibold bg-amber-900 text-white rounded-lg hover:bg-amber-950"
                >
                  Browse Collections
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
                  <span>Selected Products</span>
                  <button
                    onClick={onClearAll}
                    className="text-stone-400 hover:text-red-700 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/60 flex items-start gap-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg bg-stone-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-xs font-semibold text-stone-900 truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id, item.size)}
                            className="text-stone-400 hover:text-red-700 p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-0.5">
                          <span className="text-amber-900 font-medium">{item.product.brand}</span>
                          <span>·</span>
                          <span>Size: {item.size}</span>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200/50">
                          <span className="text-xs font-bold text-stone-900 tabular-nums">
                            ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                          </span>

                          <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-md px-1.5 py-0.5">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                              className="text-stone-500 hover:text-stone-900 p-0.5"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold tabular-nums px-1">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                              className="text-stone-500 hover:text-stone-900 p-0.5"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

                {/* Location Selection */}
                <div className="pt-4 border-t border-stone-200 space-y-3">
                  <label className="block text-xs font-semibold text-stone-800">
                    Select Preferred Store for Trial / Pickup:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreferredStore('merta')}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors cursor-pointer ${
                        preferredStore === 'merta'
                          ? 'border-amber-900 bg-amber-50/50 text-stone-900 font-semibold'
                          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-bold text-stone-900">Merta City Main</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">Opp. Govt College</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPreferredStore('gotan')}
                      className={`p-2.5 text-left rounded-lg border text-xs transition-colors cursor-pointer ${
                        preferredStore === 'gotan'
                          ? 'border-amber-900 bg-amber-50/50 text-stone-900 font-semibold'
                          : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <div className="font-bold text-stone-900">Gotan Branch</div>
                      <div className="text-[10px] text-stone-500 mt-0.5">Veer Teja Colony</div>
                    </button>
                  </div>
                </div>

                {/* Quick Info Inputs */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-hidden focus:border-amber-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 98290XXXXX"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-hidden focus:border-amber-900"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-stone-50 border-t border-stone-200 space-y-3">
              <div className="flex items-baseline justify-between tabular-nums">
                <span className="text-xs text-stone-500">Total Estimated Value:</span>
                <span className="font-serif text-2xl font-bold text-stone-900">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="text-[11px] text-stone-500">
                Payment and trial completed at the store counter. No online advance required.
              </div>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send WhatsApp Order Inquiry</span>
              </button>

              <div className="flex items-center justify-center gap-2 pt-1 text-xs text-stone-600">
                <span>Or speak with the store manager:</span>
                <a
                  href={preferredStore === 'merta' ? 'tel:+919414032189' : 'tel:+919414187654'}
                  className="font-semibold text-amber-900 hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>{preferredStore === 'merta' ? '+91 94140 32189' : '+91 94141 87654'}</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
