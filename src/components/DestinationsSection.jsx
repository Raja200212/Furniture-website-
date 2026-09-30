"use client";

import React, { useState } from "react";
import { DESTINATIONS } from "../data/keralaData";
import { 
  Star, MapPin, Clock, Calendar, Check, ArrowRight, 
  Sparkles, Compass, Eye, Heart, X, MessageSquare 
} from "lucide-react";

export default function DestinationsSection({ onOpenBooking }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalDest, setActiveModalDest] = useState(null);
  const [favorites, setFavorites] = useState({});

  const categories = ["All", "Backwaters", "Hills & Mist", "Wilderness & Hills", "Beaches & Coast", "Heritage & Culture", "Wildlife & Safari"];

  const filteredDestinations = selectedCategory === "All" 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-gradient-to-b from-[#f8faf9] via-emerald-50/40 to-[#f8faf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-300/60">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Discover God&apos;s Own Country</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-950 tracking-tight">
            Iconic Destinations & Hidden Jewels
          </h2>
          <p className="text-emerald-800/80 text-base sm:text-lg leading-relaxed">
            From the tranquil waterways of Alleppey to the emerald clouds of Munnar and the sacred laterite cliffs of Varkala, explore the diverse landscapes of Kerala.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20 scale-105"
                  : "bg-white text-emerald-900/80 border border-emerald-200 hover:bg-emerald-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => setActiveModalDest(dest)}
              className="group bg-white rounded-3xl overflow-hidden border border-emerald-100/90 shadow-lg hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Image Container with Badge */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-amber-300 text-xs font-semibold border border-amber-400/30">
                    {dest.badge}
                  </span>
                  <button
                    onClick={(e) => toggleFavorite(dest.id, e)}
                    className="p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-white/80 text-white hover:text-red-500 transition-colors"
                    aria-label="Save to favorites"
                  >
                    <Heart className={`w-4 h-4 ${favorites[dest.id] ? "fill-red-500 text-red-500" : ""}`} />
                  </button>
                </div>

                {/* Bottom title & rating inside image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-amber-300 text-xs font-medium mb-1">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>{dest.rating}</span>
                    <span className="text-white/70">({dest.reviews} reviews)</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-emerald-200/90 line-clamp-1">{dest.tagline}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-emerald-800/80 font-medium pb-2 border-b border-emerald-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" /> {dest.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-600" /> Best: {dest.bestSeason}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-emerald-900/80 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Highlights pills */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-semibold text-emerald-950 uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    <div className="space-y-1">
                      {dest.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-emerald-800">
                          <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-emerald-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-emerald-700/80 block">Day Tours from</span>
                    <span className="text-lg font-bold text-emerald-950">₹{dest.priceStarting.toLocaleString()}</span>
                    <span className="text-xs text-emerald-700/80 font-normal"> / person</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalDest(dest);
                    }}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-emerald-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>View Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Destination Detail Modal */}
      {activeModalDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-200 relative animate-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setActiveModalDest(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold mb-2 inline-block">
                  {activeModalDest.category}
                </span>
                <h3 className="font-serif text-3xl font-bold text-white">
                  {activeModalDest.name}
                </h3>
                <p className="text-sm text-emerald-200">{activeModalDest.tagline}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-3 gap-3 bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-center">
                <div>
                  <span className="text-xs text-emerald-700 block">Rating</span>
                  <span className="font-bold text-emerald-950 text-sm flex items-center justify-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> {activeModalDest.rating}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-emerald-700 block">Duration</span>
                  <span className="font-bold text-emerald-950 text-sm">{activeModalDest.duration}</span>
                </div>
                <div>
                  <span className="text-xs text-emerald-700 block">Best Season</span>
                  <span className="font-bold text-emerald-950 text-sm">{activeModalDest.bestSeason}</span>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-emerald-950 mb-2">About This Destination</h4>
                <p className="text-emerald-900/80 text-sm leading-relaxed">{activeModalDest.description}</p>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-emerald-950 mb-3">Top Must-Do Experiences</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalDest.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-emerald-100 shadow-sm text-xs font-medium text-emerald-900">
                      <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-emerald-700 block">Custom Tour Starting At</span>
                  <span className="text-2xl font-bold text-emerald-950">₹{activeModalDest.priceStarting.toLocaleString()}</span>
                  <span className="text-xs text-emerald-700"> / person</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/919847012345?text=Hello%2C%20I%20am%20interested%20in%20visiting%20${encodeURIComponent(activeModalDest.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-3 rounded-full border border-emerald-600 text-emerald-800 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-50"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      const dest = activeModalDest;
                      setActiveModalDest(null);
                      if (onOpenBooking) {
                        onOpenBooking({ type: "destination", destination: dest.name });
                      }
                    }}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg shadow-emerald-900/20"
                  >
                    Plan Trip to {activeModalDest.name}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
