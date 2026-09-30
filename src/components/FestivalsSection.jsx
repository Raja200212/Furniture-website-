"use client";

import React from "react";
import { FESTIVALS } from "../data/keralaData";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

export default function FestivalsSection({ onOpenBooking }) {
  return (
    <section className="py-20 sm:py-28 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Living Traditions & Sacred Spectacles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-950 tracking-tight">
            Kerala Festival Calendar & Celebrations
          </h2>
          <p className="text-emerald-800/80 text-base sm:text-lg">
            Time your journey with rhythmic temple percussion, 100-oar snake boat races, and ancient trance dances.
          </p>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FESTIVALS.map((fest, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
            >
              <div className="relative h-48">
                <img src={fest.image} alt={fest.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] text-amber-300 font-semibold flex items-center gap-1 mb-1">
                    <Calendar className="w-3 h-3" /> {fest.timing}
                  </span>
                  <h4 className="font-serif text-xl font-bold">{fest.name}</h4>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-emerald-900/80 leading-relaxed">
                  {fest.significance}
                </p>

                <button
                  onClick={() => onOpenBooking ? onOpenBooking({ type: "festival", festivalName: fest.name, season: fest.timing }) : null}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-emerald-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Plan Trip During {fest.name.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
