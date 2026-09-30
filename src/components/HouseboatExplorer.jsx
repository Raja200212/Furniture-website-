"use client";

import React, { useState } from "react";
import { HOUSEBOATS } from "../data/keralaData";
import { 
  Waves, Star, Users, Check, ArrowRight, ShieldCheck, 
  Utensils, Navigation, Coffee, Sparkles, BedDouble 
} from "lucide-react";

export default function HouseboatExplorer({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(HOUSEBOATS[0].id);

  const selectedHouseboat = HOUSEBOATS.find(h => h.id === activeTab) || HOUSEBOATS[0];

  return (
    <section id="houseboats" className="py-20 sm:py-28 bg-emerald-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <Waves className="w-4 h-4 text-teal-300" />
            <span>Luxury Kettuvallam Cruises</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Sleep Under the Stars on Kerala&apos;s Backwaters
          </h2>
          <p className="text-emerald-200/80 text-base sm:text-lg">
            Handcrafted with Anjili wood and coconut coir, our luxury houseboats feature private air-conditioned bedrooms, open-air sun-decks, and a dedicated master chef cooking fresh catch of the day.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {HOUSEBOATS.map((hb) => (
            <button
              key={hb.id}
              onClick={() => setActiveTab(hb.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                activeTab === hb.id
                  ? "bg-amber-400 text-emerald-950 border-amber-300 shadow-lg scale-105"
                  : "bg-emerald-900/60 text-emerald-200 border-emerald-700/60 hover:bg-emerald-800/80"
              }`}
            >
              <BedDouble className="w-4 h-4" />
              <span>{hb.bedrooms} Bedroom ({hb.name.split(":")[0]})</span>
            </button>
          ))}
        </div>

        {/* Featured Houseboat Showcase Card */}
        <div className="bg-emerald-900/70 backdrop-blur-xl rounded-3xl border border-emerald-700/80 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image & Overlay (6 Columns) */}
            <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-emerald-600/50">
              <img
                src={selectedHouseboat.image}
                alt={selectedHouseboat.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-black/20" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-emerald-950/90 text-amber-300 text-xs font-bold border border-amber-400/40">
                  Govt. Green Palm Certified
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold mb-1">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span>{selectedHouseboat.rating} Rating</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" /> {selectedHouseboat.capacity}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold">{selectedHouseboat.name}</h3>
              </div>
            </div>

            {/* Details & Amenities (6 Columns) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Route */}
              <div className="bg-emerald-950/80 p-4 rounded-2xl border border-emerald-800">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  <Navigation className="w-3.5 h-3.5 text-amber-400" /> Signature Cruise Route:
                </div>
                <p className="text-sm text-emerald-100 font-medium">{selectedHouseboat.route}</p>
              </div>

              {/* Inclusions */}
              <div>
                <h4 className="text-xs font-bold text-emerald-200 uppercase tracking-wider mb-3">
                  Houseboat Luxury Amenities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedHouseboat.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-emerald-100">
                      <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chef Menu Preview */}
              <div className="bg-emerald-950/60 p-4 rounded-2xl border border-emerald-800 text-xs space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300 font-bold">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Live Chef Inclusions (All 3 Meals Included):</span>
                </div>
                <p className="text-emerald-200/90 leading-relaxed">
                  Welcome tender coconut, Kerala Sadya lunch, fresh backwater pearl spot (Karimeen fry), evening banana fritters & tea, candlelight dinner, and traditional hot breakfast.
                </p>
              </div>

              {/* Price & Book */}
              <div className="pt-4 border-t border-emerald-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-emerald-300/80 block">Overnight Full Cruise from</span>
                  <div className="text-3xl font-serif font-bold text-white">
                    ₹{selectedHouseboat.pricePerNight.toLocaleString()}
                    <span className="text-xs font-sans text-emerald-300 font-normal"> / night (All Meals)</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking ? onOpenBooking({ type: "houseboat", houseboatName: selectedHouseboat.name, price: selectedHouseboat.pricePerNight }) : null}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book This Houseboat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
