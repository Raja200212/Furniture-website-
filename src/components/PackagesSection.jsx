"use client";

import React, { useState } from "react";
import { TOUR_PACKAGES } from "../data/keralaData";
import { 
  Compass, Star, Clock, MapPin, Check, ArrowRight, 
  ChevronDown, ChevronUp, Sparkles, Shield, Heart, MessageSquare
} from "lucide-react";

export default function PackagesSection({ onOpenBooking }) {
  const [expandedItinerary, setExpandedItinerary] = useState({});

  const toggleItinerary = (pkgId) => {
    setExpandedItinerary(prev => ({ ...prev, [pkgId]: !prev[pkgId] }));
  };

  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#f8faf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Curated Experiential Journeys</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-950 tracking-tight">
            Handcrafted Kerala Holiday Packages
          </h2>
          <p className="text-emerald-800/80 text-base sm:text-lg">
            Complete hassle-free vacation packages with chauffeured private cars, handpicked luxury resorts, private houseboats, and personalized local guides.
          </p>
        </div>

        {/* Tour Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TOUR_PACKAGES.map((pkg) => {
            const isExpanded = expandedItinerary[pkg.id];
            const discountPct = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-xl hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Image + Badges */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-emerald-950 font-bold text-xs shadow-md">
                      {pkg.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-900/80 backdrop-blur-md text-emerald-200 font-semibold text-xs border border-emerald-500/40">
                      {discountPct}% OFF
                    </span>
                  </div>

                  {/* Title & Info inside Image Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-3 text-xs text-amber-300 font-medium mb-1.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {pkg.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> {pkg.rating} ({pkg.reviews} reviews)
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-1 text-xs text-emerald-200 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-teal-300 flex-shrink-0" />
                      <span className="truncate">{pkg.destinations.join(" → ")}</span>
                    </div>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  
                  {/* Inclusions */}
                  <div>
                    <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-2.5">
                      Package Inclusions:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-900">
                      {pkg.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span className="truncate">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Day-by-Day Itinerary Accordion */}
                  <div className="border-t border-b border-emerald-100 py-3">
                    <button
                      onClick={() => toggleItinerary(pkg.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors py-1 cursor-pointer"
                    >
                      <span>Day-by-Day Detailed Itinerary ({pkg.itinerary.length} Days)</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-2.5 pt-2 animate-in fade-in duration-200">
                        {pkg.itinerary.map((day) => (
                          <div key={day.day} className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100/80 text-xs">
                            <span className="font-bold text-emerald-950 block mb-0.5">
                              Day {day.day}: {day.title}
                            </span>
                            <span className="text-emerald-900/80">{day.desc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price & Action CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-serif font-bold text-emerald-950">
                          ₹{pkg.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-400 line-through">
                          ₹{pkg.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-700 block">per person on twin sharing basis</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/919847012345?text=Hello%2C%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(pkg.title)}%20package.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => onOpenBooking ? onOpenBooking({ type: "package", packageTitle: pkg.title, price: pkg.price }) : null}
                        className="flex-1 sm:flex-none px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Book Package</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
