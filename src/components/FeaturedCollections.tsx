import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedCollectionsProps {
  onSelectCategory: (category: 'all' | 'handloom' | 'menswear' | 'womenswear' | 'kids') => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onSelectCategory }) => {
  const pillars = [
    {
      id: 'handloom' as const,
      title: 'Authentic Handloom & Linens',
      subtitle: 'Artisan Woven · 100% Pure Cotton',
      description: 'Traditional Kota Doria sarees, pure cotton double bedsheets, and fine ceremonial dhotis direct from Rajasthani artisan looms.',
      image: '/src/assets/images/collection_handloom_fabrics_1791161689849.jpg',
      stat: 'Over 200+ Handloom Designs'
    },
    {
      id: 'menswear' as const,
      title: 'Multi-Brand Readymade Menswear',
      subtitle: 'Mufti · Red Tape · Jockey',
      description: 'Complete wardrobe essentials from stretch denim jeans, linen casual shirts, and formal oxfords to Jockey athleisure and innerwear.',
      image: '/src/assets/images/collection_branded_menswear_1791161699464.jpg',
      stat: 'Authorized Brand Collections'
    },
    {
      id: 'womenswear' as const,
      title: 'Women & Kids Festive Apparel',
      subtitle: 'Ethnic Sets · Kurtis · Kids Wear',
      description: 'Elegantly tailored ethnic sets, lightweight summer cotton kurtis, and festive dresswear crafted for wedding seasons and celebrations.',
      image: '/src/assets/images/collection_ethnic_women_kids_1791161710591.jpg',
      stat: 'New Festive Arrivals'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
            Specialties & Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 mt-2">
            Curated For the Modern Family & Discerning Connoisseur
          </h2>
          <p className="text-stone-600 mt-3 text-base sm:text-lg">
            Whether you seek timeless handwoven heritage or the latest trends from leading national brands, 
            explore our specialized retail departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.id)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-900/30 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-stone-900 group-hover:bg-amber-900 group-hover:text-white transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Card Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                    {item.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-2 group-hover:text-amber-950 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span>{item.stat}</span>
                  <span className="text-amber-900 group-hover:underline font-semibold">View Catalog →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
