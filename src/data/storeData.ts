export interface Product {
  id: string;
  name: string;
  category: 'handloom' | 'menswear' | 'womenswear' | 'kids';
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  fabricDetails: string;
  sizes: string[];
  tag?: string;
  inStock: boolean;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  category: 'Branded Wear' | 'Handloom & Fabrics' | 'Staff & Service' | 'Parking & Store';
  verifiedCustomer: boolean;
}

export interface StoreLocation {
  id: string;
  name: string;
  isMain: boolean;
  address: string;
  landmark: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  googleMapsUrl: string;
  parkingInfo: string;
  features: string[];
}

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'merta-main',
    name: 'Deep Handloom - Main Showroom',
    isMain: true,
    address: 'Gotan Borunda Circle, Opposite Government College, Gagrana',
    landmark: 'Opposite Government College',
    city: 'Merta City',
    district: 'Nagaur District',
    state: 'Rajasthan',
    pincode: '341510',
    phone: '+91 94140 32189',
    whatsapp: '919414032189',
    googleMapsUrl: 'https://maps.google.com/?q=Deep+Handloom+Opposite+Government+College+Gagrana+Merta+341510',
    parkingInfo: 'Spacious dedicated parking area for cars and two-wheelers directly in front of the store.',
    features: [
      'Opposite Government College Landmark',
      'Multi-level Garment & Handloom Floors',
      'Dedicated Customer Car & Bike Parking',
      'Air Conditioned Fitting & Trial Rooms',
      'Authorized Jockey, Mufti & Red Tape Sections'
    ]
  },
  {
    id: 'gotan-branch',
    name: 'Deep Handloom - Gotan Branch',
    isMain: false,
    address: 'MDR58, Veer Teja Colony',
    landmark: 'Veer Teja Colony Main Road',
    city: 'Gotan',
    district: 'Nagaur District',
    state: 'Rajasthan',
    pincode: '342902',
    phone: '+91 94141 87654',
    whatsapp: '919414187654',
    googleMapsUrl: 'https://maps.google.com/?q=Deep+Handloom+MDR58+Veer+Teja+Colony+Gotan+342902',
    parkingInfo: 'Convenient street-front customer parking available on MDR58.',
    features: [
      'Accessible Location in Veer Teja Colony',
      'Daily Essentials & Readymade Apparel',
      'Handloom Cotton Bedsheets & Fabrics',
      'Fast Express Order Pickup Point'
    ]
  }
];

export const OPERATING_HOURS = [
  { day: 'Monday', hours: '9:00 AM – 9:00 PM', isOpen: true, extended: true },
  { day: 'Tuesday', hours: '9:00 AM – 7:00 PM (Summer till 9:30 PM)', isOpen: true },
  { day: 'Wednesday', hours: '9:00 AM – 7:00 PM (Summer till 9:30 PM)', isOpen: true },
  { day: 'Thursday', hours: '9:00 AM – 7:00 PM (Summer till 9:30 PM)', isOpen: true },
  { day: 'Friday', hours: '9:00 AM – 7:00 PM (Summer till 9:30 PM)', isOpen: true },
  { day: 'Saturday', hours: '9:00 AM – 7:00 PM (Summer till 9:30 PM)', isOpen: true },
  { day: 'Sunday', hours: 'Closed (Weekly Off)', isOpen: false }
];

export const POPULAR_BRANDS = [
  { name: 'Jockey', category: 'Innerwear, Athleisure & Loungewear', type: 'Official Retailer' },
  { name: 'Mufti', category: 'Denim, Casual Shirts & Chinos', type: 'Premium Partner' },
  { name: 'Red Tape', category: 'Formal Shirts, Polos & Footwear', type: 'Branded Collection' },
  { name: 'Deep Handloom Heritage', category: 'Traditional Weaves & Linens', type: 'In-House Weavers' },
  { name: 'Raymond', category: 'Suiting, Shirting & Fabrics', type: 'Authorized Stockist' },
  { name: 'Killer Jeans', category: 'Youth Denim & Casuals', type: 'Authorized Retailer' }
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Mufti Authentic Urban Slim Fit Stretch Denim',
    category: 'menswear',
    brand: 'Mufti',
    price: 2699,
    originalPrice: 3299,
    description: 'High-comfort stretch denim with whiskered indigo wash, durable triple-stitch seams, and signature Mufti branding. Ideal for casual and semi-formal wear.',
    fabricDetails: '98% Combed Cotton, 2% Elastane for superior flex',
    sizes: ['30', '32', '34', '36', '38'],
    tag: 'Bestseller',
    inStock: true,
    image: '/src/assets/images/collection_branded_menswear_1791161699464.jpg'
  },
  {
    id: 'prod-2',
    name: 'Rajasthani Handwoven Pure Cotton Bedsheet Set',
    category: 'handloom',
    brand: 'Deep Handloom Heritage',
    price: 1450,
    originalPrice: 1899,
    description: 'Authentic artisan-loomed 100% pure cotton king size bedsheet with two matching pillow covers. Breathable, color-fast traditional block motif from Nagaur & Marwar artisans.',
    fabricDetails: '100% Pure Handloom Long-Staple Cotton, 300 Thread Count feel',
    sizes: ['Double King (108x108 in)', 'Queen (90x100 in)'],
    tag: 'Artisan Crafted',
    inStock: true,
    image: '/src/assets/images/collection_handloom_fabrics_1791161689849.jpg'
  },
  {
    id: 'prod-3',
    name: 'Red Tape Premium Classic Oxford Button-Down Shirt',
    category: 'menswear',
    brand: 'Red Tape',
    price: 1799,
    originalPrice: 2499,
    description: 'Crisp, structured formal and smart-casual shirt with button-down collar and signature embroidered crest. Wrinkle-resistant finish for all-day sharpness.',
    fabricDetails: '100% Fine Combed Cotton Oxford Weave',
    sizes: ['38 (M)', '40 (L)', '42 (XL)', '44 (XXL)'],
    tag: 'Popular Branded',
    inStock: true,
    image: '/src/assets/images/collection_branded_menswear_1791161699464.jpg'
  },
  {
    id: 'prod-4',
    name: 'Jockey Combed Cotton Athleisure Track Pant',
    category: 'menswear',
    brand: 'Jockey',
    price: 1399,
    description: 'Genuine Jockey stay-dry athletic joggers with deep zipper pockets, elasticated drawstring waistband, and soft brushed interior.',
    fabricDetails: 'Super combed cotton rich French Terry fabric',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Official Stock',
    inStock: true,
    image: '/src/assets/images/collection_branded_menswear_1791161699464.jpg'
  },
  {
    id: 'prod-5',
    name: 'Authentic Kota Doria Handloom Zari Saree',
    category: 'handloom',
    brand: 'Deep Handloom Heritage',
    price: 2850,
    originalPrice: 3500,
    description: 'Feather-light traditional Kota Doria square weave saree with intricate golden zari border and matching unstitched blouse piece. Woven by certified Rajasthani weavers.',
    fabricDetails: 'Pure Cotton-Silk Kota Weave with fine metallic zari',
    sizes: ['Free Size (6.3m with blouse)'],
    tag: 'Exclusive Loom',
    inStock: true,
    image: '/src/assets/images/collection_handloom_fabrics_1791161689849.jpg'
  },
  {
    id: 'prod-6',
    name: 'Women Hand-Embroidered Chanderi Kurta & Pant Set',
    category: 'womenswear',
    brand: 'Deep Handloom Heritage',
    price: 2199,
    originalPrice: 2799,
    description: 'Graceful festive suit set featuring a delicately embroidered straight-cut kurta, matching tailored cigarette pants, and pure organza dupatta.',
    fabricDetails: 'Chanderi cotton blend with soft mulmul lining',
    sizes: ['36 (S)', '38 (M)', '40 (L)', '42 (XL)'],
    tag: 'New Festive',
    inStock: true,
    image: '/src/assets/images/collection_ethnic_women_kids_1791161710591.jpg'
  },
  {
    id: 'prod-7',
    name: 'Kids Handwoven Cotton Kurta & Dhoti Set',
    category: 'kids',
    brand: 'Deep Handloom Heritage',
    price: 999,
    originalPrice: 1299,
    description: 'Skin-friendly, breathable festive attire for young boys. Handloom woven fabric keeps children cool during wedding ceremonies and festive celebrations.',
    fabricDetails: '100% Hypoallergenic Handloom Cotton',
    sizes: ['2-3 Yrs', '4-5 Yrs', '6-7 Yrs', '8-9 Yrs', '10-12 Yrs'],
    tag: 'Kids Festive',
    inStock: true,
    image: '/src/assets/images/collection_ethnic_women_kids_1791161710591.jpg'
  },
  {
    id: 'prod-8',
    name: 'Mufti Micro-Checkered Casual Cotton Shirt',
    category: 'menswear',
    brand: 'Mufti',
    price: 2199,
    originalPrice: 2699,
    description: 'Modern slim-fit yarn-dyed checks with curved hem, roll-up sleeve tabs, and double chest pockets. Designed for weekend outings and festive gatherings.',
    fabricDetails: '100% Pre-washed Slub Cotton',
    sizes: ['M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    tag: 'Bestseller',
    inStock: true,
    image: '/src/assets/images/collection_branded_menswear_1791161699464.jpg'
  },
  {
    id: 'prod-9',
    name: 'Traditional Handloom Cotton Dhotis & Angavastram Set',
    category: 'handloom',
    brand: 'Deep Handloom Heritage',
    price: 850,
    originalPrice: 1100,
    description: 'Pure white fine cotton dhoti with traditional red-gold border weave, accompanied by a matching sacred angavastram for religious rituals and family occasions.',
    fabricDetails: '100% Handloom Cotton with Temple Border',
    sizes: ['Standard 4.5 Meter + Angavastram'],
    tag: 'Tradition',
    inStock: true,
    image: '/src/assets/images/collection_handloom_fabrics_1791161689849.jpg'
  },
  {
    id: 'prod-10',
    name: 'Jockey Ultra-Soft Cotton Modal Everyday Polo',
    category: 'menswear',
    brand: 'Jockey',
    price: 1199,
    description: 'Premium flat-knit collar polo shirt with side vents and ribbed cuffs. Ultra-soft touch that retains its color wash after wash.',
    fabricDetails: '95% Super Combed Cotton, 5% Spandex Pique',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    tag: 'Daily Essential',
    inStock: true,
    image: '/src/assets/images/collection_branded_menswear_1791161699464.jpg'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sunil Choudhary',
    location: 'Merta City',
    rating: 5,
    date: 'February 2026',
    comment: 'Best clothing store in Merta City! They have authentic Mufti shirts and Jockey underwear under one roof, and you do not need to travel to Jodhpur or Ajmer. Very polite staff who show multiple designs patiently.',
    category: 'Branded Wear',
    verifiedCustomer: true
  },
  {
    id: 'rev-2',
    author: 'Pooja Rathore',
    location: 'Nagaur',
    rating: 5,
    date: 'January 2026',
    comment: 'The handloom collection is outstanding. I purchased pure cotton bedsheets and handwoven sarees for my family. Even after several washes the color and fabric texture remain like new. Very reasonable prices.',
    category: 'Handloom & Fabrics',
    verifiedCustomer: true
  },
  {
    id: 'rev-3',
    author: 'Rameshwar Lal',
    location: 'Gotan',
    rating: 4,
    date: 'March 2026',
    comment: 'Huge showroom right opposite the Government College at Gagrana circle. Parking is very spacious and hassle-free, which is rare in busy market areas. Staff assisted us throughout our wedding shopping.',
    category: 'Parking & Store',
    verifiedCustomer: true
  },
  {
    id: 'rev-4',
    author: 'Mahesh Sharma',
    location: 'Merta Road',
    rating: 5,
    date: 'December 2025',
    comment: 'Genuine Red Tape and Mufti branded jeans at genuine prices. Good range for youngsters and elder family members alike. Highly recommended when in Merta.',
    category: 'Branded Wear',
    verifiedCustomer: true
  },
  {
    id: 'rev-5',
    author: 'Vimla Devi',
    location: 'Borunda',
    rating: 4,
    date: 'November 2025',
    comment: 'Visited both their Merta City showroom and Gotan branch. Both have attentive staff and great readymade garments for kids and women. Will come back for Diwali and wedding shopping.',
    category: 'Staff & Service',
    verifiedCustomer: true
  },
  {
    id: 'rev-6',
    author: 'Deepak Kaswan',
    location: 'Gagrana',
    rating: 5,
    date: 'February 2026',
    comment: 'The location opposite the Government college is very convenient. Plenty of room to park cars safely. Wide variety across all price ranges.',
    category: 'Parking & Store',
    verifiedCustomer: true
  }
];

export function checkStoreStatus(): { isOpen: boolean; message: string; todayHours: string } {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour + minute / 60;

  if (day === 0) {
    return {
      isOpen: false,
      message: 'Closed Today (Sunday). Opens Monday at 9:00 AM',
      todayHours: 'Sunday: Closed'
    };
  }

  if (day === 1) { // Monday 9:00 AM to 9:00 PM (21:00)
    if (currentTime >= 9 && currentTime < 21) {
      return {
        isOpen: true,
        message: 'Open Today until 9:00 PM',
        todayHours: 'Monday: 9:00 AM – 9:00 PM'
      };
    } else {
      return {
        isOpen: false,
        message: currentTime < 9 ? 'Opens today at 9:00 AM' : 'Closed for today. Opens tomorrow at 9:00 AM',
        todayHours: 'Monday: 9:00 AM – 9:00 PM'
      };
    }
  }

  // Tue - Sat 9:00 AM to 7:00 PM (19:00, or 21:30 in season)
  if (currentTime >= 9 && currentTime < 19) {
    return {
      isOpen: true,
      message: 'Open Today until 7:00 PM (extended till 9:30 PM seasonally)',
      todayHours: 'Tuesday–Saturday: 9:00 AM – 7:00 PM'
    };
  } else if (currentTime >= 19 && currentTime < 21.5) {
    return {
      isOpen: true,
      message: 'Open Today (Evening Seasonal Hours until 9:30 PM)',
      todayHours: 'Tuesday–Saturday: 9:00 AM – 7:00 PM / 9:30 PM'
    };
  } else {
    return {
      isOpen: false,
      message: currentTime < 9 ? 'Opens today at 9:00 AM' : (day === 6 ? 'Closed for the weekend. Reopens Monday at 9:00 AM' : 'Closed for today. Opens tomorrow at 9:00 AM'),
      todayHours: 'Tuesday–Saturday: 9:00 AM – 7:00 PM'
    };
  }
}
