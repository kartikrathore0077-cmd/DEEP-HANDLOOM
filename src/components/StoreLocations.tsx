import React, { useState } from 'react';
import { STORE_LOCATIONS, OPERATING_HOURS, checkStoreStatus } from '../data/storeData';
import { MapPin, Phone, Clock, Car, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface StoreLocationsProps {
  selectedLocationId: string;
  onSelectLocation: (id: string) => void;
}

export const StoreLocations: React.FC<StoreLocationsProps> = ({
  selectedLocationId,
  onSelectLocation
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedLocationId || 'merta-main');
  const storeStatus = checkStoreStatus();
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...

  const selectedLoc = STORE_LOCATIONS.find((l) => l.id === activeTab) || STORE_LOCATIONS[0];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Locations & Address Details
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 mt-1">
              Visit Deep Handloom in Nagaur District
            </h2>
            <p className="text-stone-600 mt-2 text-sm sm:text-base max-w-xl">
              Experience two dedicated showrooms in Merta City and Gotan equipped with wide fitting rooms, 
              ample vehicle parking, and cordial staff ready to serve your family.
            </p>
          </div>

          {/* Location Selector Tabs (Clean segmented button controls) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl self-start md:self-auto">
            {STORE_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  setActiveTab(loc.id);
                  onSelectLocation(loc.id);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === loc.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {loc.name.replace('Deep Handloom - ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Location Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details: Address, Contact, Parking, Features */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-6">
              
              {/* Landmark & Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200 text-xs">
                <span className="font-semibold text-amber-900 uppercase tracking-wide">
                  {selectedLoc.isMain ? 'Main Showroom · Merta City' : 'Branch Store · Gotan'}
                </span>
                <span className="flex items-center gap-1.5 font-medium text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  {storeStatus.message}
                </span>
              </div>

              {/* Title & Landmark */}
              <div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">
                  {selectedLoc.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-900 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Landmark: {selectedLoc.landmark}</span>
                </div>
              </div>

              {/* Full Address Block */}
              <div className="p-4 bg-white rounded-xl border border-stone-200 text-sm space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Physical Store Address
                </div>
                <p className="font-medium text-stone-800 leading-relaxed">
                  {selectedLoc.address}
                </p>
                <div className="text-xs text-stone-500">
                  {selectedLoc.city}, {selectedLoc.district}, {selectedLoc.state} - {selectedLoc.pincode}, India.
                </div>
              </div>

              {/* Parking Facility Highlight (Prompt Requirement) */}
              <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200/80 flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-lg text-amber-900 shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                    Hassle-Free Parking Facility
                  </h4>
                  <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
                    {selectedLoc.parkingInfo}
                  </p>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Showroom Amenities & Offerings
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  {selectedLoc.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions: Directions & Direct Call */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={selectedLoc.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={`tel:${selectedLoc.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-5 py-3 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-900" />
                  <span>Call {selectedLoc.phone}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Operating Hours Schedule & Storefront Imagery */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Storefront Exterior Photography */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-16/10 bg-stone-200">
              <img
                src="/src/assets/images/store_front_merta_city_1791161721934.jpg"
                alt="Deep Handloom Merta City storefront with customer parking"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <div className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider">
                  Verified Storefront
                </div>
                <div className="font-serif text-lg font-bold text-white">
                  Gotan Borunda Circle, Gagrana
                </div>
                <p className="text-xs text-stone-300 mt-0.5">
                  Directly opposite Government College with dedicated customer car & scooter parking.
                </p>
              </div>
            </div>

            {/* Operating Hours Table (Prompt: Mon 9am-9pm, Tue-Sat 9am-7pm/9:30pm seasonal, Sun Closed) */}
            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <Clock className="w-4 h-4 text-amber-900" />
                  <span>Weekly Operating Hours</span>
                </div>
                <span className="text-[11px] font-medium text-stone-500">
                  Seasonal evening schedule
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                {OPERATING_HOURS.map((item, index) => {
                  // Sunday is 0, Monday is 1, etc.
                  const isToday =
                    (item.day === 'Sunday' && currentDayIndex === 0) ||
                    (item.day === 'Monday' && currentDayIndex === 1) ||
                    (item.day === 'Tuesday' && currentDayIndex === 2) ||
                    (item.day === 'Wednesday' && currentDayIndex === 3) ||
                    (item.day === 'Thursday' && currentDayIndex === 4) ||
                    (item.day === 'Friday' && currentDayIndex === 5) ||
                    (item.day === 'Saturday' && currentDayIndex === 6);

                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                        isToday
                          ? 'bg-amber-100/70 border border-amber-300 font-semibold text-stone-950'
                          : 'text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.day}</span>
                        {isToday && (
                          <span className="text-[10px] text-amber-900 bg-white px-1.5 py-0.5 rounded border border-amber-300 font-bold uppercase">
                            Today
                          </span>
                        )}
                      </div>
                      <div className="tabular-nums">
                        {item.isOpen ? (
                          <span className={item.extended ? 'text-stone-900 font-semibold' : 'text-stone-700'}>
                            {item.hours}
                          </span>
                        ) : (
                          <span className="text-red-700 font-bold">Closed (Weekly Off)</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-[11px] text-stone-500 leading-relaxed border-t border-stone-200">
                * Note: Timings may extend up to 9:30 PM during festival and wedding shopping seasons (Diwali, Eid, Akshaya Tritiya).
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
