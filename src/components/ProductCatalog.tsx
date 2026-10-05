import React, { useState, useMemo } from 'react';
import { Product, INITIAL_PRODUCTS } from '../data/storeData';
import { Search, Eye, Plus, Check, Filter } from 'lucide-react';

interface ProductCatalogProps {
  selectedCategory: 'all' | 'handloom' | 'menswear' | 'womenswear' | 'kids';
  onCategoryChange: (cat: 'all' | 'handloom' | 'menswear' | 'womenswear' | 'kids') => void;
  onOpenProductModal: (product: Product) => void;
  onAddToInquiry: (product: Product, size?: string) => void;
  inquiryProductIds: string[];
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onCategoryChange,
  onOpenProductModal,
  onAddToInquiry,
  inquiryProductIds
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Catalog' },
    { id: 'menswear', label: 'Branded Menswear' },
    { id: 'handloom', label: 'Handloom & Weaves' },
    { id: 'womenswear', label: "Women's Ethnic" },
    { id: 'kids', label: 'Kids & Family' }
  ] as const;

  const brands = useMemo(() => {
    const list = Array.from(new Set(INITIAL_PRODUCTS.map((p) => p.brand)));
    return ['all', ...list];
  }, []);

  const filteredProducts = useMemo(() => {
    return INITIAL_PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || p.brand === selectedBrand;
      const matchesSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fabricDetails.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  return (
    <section id="collections" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              In-Store Catalog Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 mt-1">
              Featured Products & In-Store Availability
            </h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base max-w-xl">
              Browse current designs available at our Merta City showroom and Gotan branch. 
              Add items to your Inquiry Bag to reserve sizes or check immediate stock via WhatsApp.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Mufti, Jockey, Saree..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-900 focus:ring-1 focus:ring-amber-900 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls (Segmented Control Anti-slop buttons) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-stone-200">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Brand Filter */}
          <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-stone-600">
            <Filter className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="font-medium shrink-0">Brand:</span>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-800 focus:outline-hidden focus:border-amber-900 cursor-pointer"
            >
              <option value="all">All Brands</option>
              {brands.filter((b) => b !== 'all').map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200">
            <p className="text-stone-600 font-medium">No items match your selected filter or search.</p>
            <button
              onClick={() => {
                onCategoryChange('all');
                setSelectedBrand('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 text-xs font-semibold text-amber-900 hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isInInquiry = inquiryProductIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Lead with imagery (65-75% height) */}
                    <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />

                      {/* Quiet unboxed text tag (NOT a colored pill capsule) */}
                      {product.tag && (
                        <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm">
                          {product.tag}
                        </div>
                      )}

                      {/* Quick view button on hover */}
                      <button
                        onClick={() => onOpenProductModal(product)}
                        aria-label="Quick View"
                        className="absolute inset-0 bg-stone-950/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white cursor-pointer"
                      >
                        <span className="px-3 py-1.5 bg-stone-900/90 rounded-md flex items-center gap-1.5 shadow-md hover:bg-stone-900">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Quick View</span>
                        </span>
                      </button>
                    </div>

                    {/* Metadata Section (Anti-slop: clean unboxed text) */}
                    <div className="p-4 sm:p-5">
                      {/* Quiet metadata line */}
                      <div className="flex items-center gap-2 text-[11px] font-medium text-stone-500 uppercase tracking-wider">
                        <span className="text-amber-900 font-semibold">{product.brand}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.category}</span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => onOpenProductModal(product)}
                        className="font-semibold text-stone-900 mt-1.5 text-sm sm:text-base leading-snug hover:text-amber-900 transition-colors cursor-pointer line-clamp-2"
                      >
                        {product.name}
                      </h3>

                      {/* Fabric snippet */}
                      <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                        {product.fabricDetails}
                      </p>

                      {/* Available sizes */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-3 text-[11px] text-stone-500">
                        <span className="text-stone-400">Sizes:</span>
                        {product.sizes.slice(0, 3).map((s) => (
                          <span key={s} className="px-1.5 py-0.5 bg-stone-100 rounded text-stone-700">
                            {s}
                          </span>
                        ))}
                        {product.sizes.length > 3 && (
                          <span className="text-stone-400">+{product.sizes.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action row */}
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                    <div className="tabular-nums">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base sm:text-lg font-bold text-stone-900">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-stone-400 line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-stone-400">Incl. all taxes</span>
                    </div>

                    <button
                      onClick={() => onAddToInquiry(product, product.sizes[0])}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1 cursor-pointer shrink-0 ${
                        isInInquiry
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-stone-900 text-white hover:bg-stone-800'
                      }`}
                    >
                      {isInInquiry ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Inquire</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
