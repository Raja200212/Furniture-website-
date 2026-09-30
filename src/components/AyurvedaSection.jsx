"use client";

import React, { useState } from "react";
import { AYURVEDA_THERAPIES } from "../data/keralaData";
import { 
  Sparkles, Clock, Check, ArrowRight, HeartPulse, 
  Leaf, Flower2, ShieldCheck, MessageSquare 
} from "lucide-react";

export default function AyurvedaSection({ onOpenBooking }) {
  const [selectedGoal, setSelectedGoal] = useState("stress");

  const wellnessGoals = {
    stress: {
      title: "Stress Relief, Sleep & Nervous System Reset",
      therapy: "Shirodhara & Herbal Abhyanga Massage",
      duration: "3 to 7 Days",
      herbs: ["Brahmi (Bacopa)", "Ashwagandha", "Shankhpushpi Oil"],
      desc: "Warm stream of medicated herbal oil rhythmically poured across the forehead, soothing brain waves, removing chronic insomnia and revitalizing the central nervous system."
    },
    detox: {
      title: "Cellular Detox & Panchakarma Purification",
      therapy: "Full Panchakarma & Swedana Steam Therapy",
      duration: "7 to 14 Days",
      herbs: ["Triphala", "Guggulu", "Medicated Ghee (Snehapana)"],
      desc: "Traditional five-fold cleansing method that removes deep metabolic toxins (Ama) from tissues and restores metabolic digestive fire (Agni)."
    },
    joints: {
      title: "Joint, Spine & Muscle Rejuvenation",
      therapy: "Njavarakizhi & Elakizhi Herbal Poultice",
      duration: "5 to 10 Days",
      herbs: ["Njavara Rice", "Bala Root Decoction", "Kottamchukkadi Oil"],
      desc: "Warm pouches filled with medicated herbs and cooked organic rice applied rhythmically to alleviate arthritis, slip disc strain, and joint stiffness."
    }
  };

  const currentGoalData = wellnessGoals[selectedGoal];

  return (
    <section id="ayurveda" className="py-20 sm:py-28 bg-[#fdfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-300">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>5000-Year Ancient Healing Science</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-950 tracking-tight">
            Authentic Kerala Ayurveda & Wellness
          </h2>
          <p className="text-emerald-800/80 text-base sm:text-lg">
            Kerala is the birthplace of pure unbroken Ashtangahridayam Ayurveda. Experience certified Vaidya (Doctor) consultations, herbal treatments, and peaceful beachfront retreats.
          </p>
        </div>

        {/* Interactive Wellness Goal Matcher */}
        <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-emerald-700/60 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-bold text-amber-300 tracking-wider flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400" /> Personalized Wellness Diagnostic
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              What is your primary healing or wellness goal?
            </h3>
          </div>

          {/* Goal selection buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {[
              { id: "stress", label: "🧘 Stress, Anxiety & Insomnia" },
              { id: "detox", label: "🌿 Deep Cellular Detox" },
              { id: "joints", label: "🦴 Joint, Spine & Muscle Relief" }
            ].map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGoal(g.id)}
                className={`p-4 rounded-2xl text-xs sm:text-sm font-bold text-left transition-all cursor-pointer border ${
                  selectedGoal === g.id
                    ? "bg-amber-400 text-emerald-950 border-amber-300 shadow-lg scale-105"
                    : "bg-emerald-950/70 text-emerald-200 border-emerald-700/60 hover:bg-emerald-800"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Result card */}
          <div className="bg-emerald-950/80 rounded-2xl p-6 border border-emerald-700/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-800 text-amber-300 text-xs font-bold">
                Recommended Therapy: {currentGoalData.therapy}
              </div>
              <h4 className="text-xl font-serif font-bold text-white">{currentGoalData.title}</h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">{currentGoalData.desc}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-emerald-300 pt-2">
                <span>⏱ Duration: <strong>{currentGoalData.duration}</strong></span>
                <span>🌱 Key Formulations: <strong>{currentGoalData.herbs.join(", ")}</strong></span>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking ? onOpenBooking({ type: "ayurveda_consult", goal: currentGoalData.title }) : null}
              className="px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Consult Ayurvedic Doctor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Signature Therapies Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AYURVEDA_THERAPIES.map((th) => (
            <div
              key={th.id}
              className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div className="relative h-48">
                <img src={th.image} alt={th.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h4 className="font-serif text-lg font-bold">{th.name}</h4>
                  <p className="text-[11px] text-amber-300">{th.duration}</p>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-900 mb-2">{th.tagline}</p>
                  <div className="space-y-1.5">
                    {th.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-emerald-800">
                        <Check className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-emerald-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-700 block">Session from</span>
                    <span className="text-lg font-bold text-emerald-950">₹{th.price.toLocaleString()}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking ? onOpenBooking({ type: "therapy", therapyName: th.name, price: th.price }) : null}
                    className="px-4 py-2 rounded-full text-xs font-bold text-emerald-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
