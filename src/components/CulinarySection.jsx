"use client";

import React, { useState } from "react";
import { CULINARY_SPECIALTIES } from "../data/keralaData";
import { Utensils, Sparkles, ChefHat, Heart, Award, ArrowRight } from "lucide-react";

export default function CulinarySection({ onOpenBooking }) {
  const [selectedDish, setSelectedDish] = useState(CULINARY_SPECIALTIES[0]);

  // Banana leaf sadya dishes interactive list
  const sadyaDishes = [
    { name: "Parippu & Ghee", desc: "Creamy yellow moong lentils poured over steaming hot red rice with golden cow ghee." },
    { name: "Avial", desc: "A colorful medley of 13 local vegetables cooked in ground coconut, cumin, yogurt and raw coconut oil." },
    { name: "Sambar", desc: "Tangy drumstick and shallot stew seasoned with toasted roasted spices and asafoetida." },
    { name: "Thoran", desc: "Finely chopped cabbage or yard-long beans stir-fried with fresh grated coconut, mustard seeds and curry leaves." },
    { name: "Olan", desc: "Delicate ash gourd and red cowpeas simmered gently in thick coconut milk." },
    { name: "Puli Inji", desc: "Sweet-sour-spicy dark reduction of ginger, green chilies, tamarind and jaggery." },
    { name: "Ada Pradhaman", desc: "The grand finale payasam made of steamed rice flakes, smoky palm jaggery, roasted coconut slices, and cardamom." }
  ];

  const [activeSadyaDish, setActiveSadyaDish] = useState(sadyaDishes[0]);

  return (
    <section id="cuisine" className="py-20 sm:py-28 bg-[#f8faf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold border border-amber-300">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>Flavors of the Malabar Spice Coast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-950 tracking-tight">
            A Feast for the Senses: Kerala Cuisine
          </h2>
          <p className="text-emerald-800/80 text-base sm:text-lg">
            Imbued with fresh crushed coconut, pungent black peppercorns, aromatic curry leaves, and sour kudampuli tamarind.
          </p>
        </div>

        {/* Interactive Banana Leaf Sadya Feature */}
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Graphic representation / description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-emerald-950 font-bold text-xs">
                <ChefHat className="w-4 h-4" /> The Grand Royal Sadya Experience
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                The 24-Dish Vegetarian Banquet on Banana Leaf
              </h3>

              <p className="text-emerald-200/90 text-sm leading-relaxed">
                Sadya is not just a meal; it is a sacred culinary ritual of harmony. Every dish is placed at a designated spot on the plantain leaf to stimulate all six basic tastes: sweet, sour, salty, bitter, pungent, and astringent.
              </p>

              {/* Active clicked Sadya dish spotlight */}
              <div className="bg-emerald-900/80 p-5 rounded-2xl border border-amber-400/40 space-y-2">
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                  Featured Banana Leaf Delicacy:
                </span>
                <h4 className="font-serif text-xl font-bold text-white">{activeSadyaDish.name}</h4>
                <p className="text-xs sm:text-sm text-emerald-200/90">{activeSadyaDish.desc}</p>
              </div>

              <button
                onClick={() => onOpenBooking ? onOpenBooking({ type: "sadya_masterclass" }) : null}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Kerala Village Cooking Masterclass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Interactive Dish Selector Leaf */}
            <div className="lg:col-span-6 bg-emerald-900/60 p-6 rounded-3xl border border-emerald-700/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4 flex items-center gap-2">
                <span>🍃 Tap any dish to explore its secret recipe:</span>
              </h4>
              <div className="space-y-2.5">
                {sadyaDishes.map((dish, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSadyaDish(dish)}
                    className={`w-full p-3.5 rounded-2xl text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between border ${
                      activeSadyaDish.name === dish.name
                        ? "bg-amber-400 text-emerald-950 border-amber-300 shadow-md font-bold scale-[1.02]"
                        : "bg-emerald-950/70 text-emerald-200 border-emerald-800 hover:bg-emerald-800"
                    }`}
                  >
                    <span>{i + 1}. {dish.name}</span>
                    <span className="text-[11px] opacity-75">{activeSadyaDish.name === dish.name ? "Viewing" : "Explore"}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Signature Specialties Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CULINARY_SPECIALTIES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="relative h-48">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-bold border border-amber-400/30">
                    {item.type}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h4 className="font-serif text-lg font-bold text-white">{item.name}</h4>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-amber-700 mb-1">{item.tagline}</p>
                  <p className="text-xs text-emerald-900/80 leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-3 border-t border-emerald-100 text-[11px] text-emerald-700 font-medium">
                  ✨ Served fresh across all partner luxury resorts & houseboats
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
