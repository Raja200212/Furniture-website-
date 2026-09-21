"use client";

import { materials } from "@/data/materials";
import { Sparkles, Shield, Flame, Hammer, Droplets, Star } from "lucide-react";

export default function MaterialsSection({ onOpenQuote }) {
  return (
    <section id="materials" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Chemical & Thermal Resistance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1C38] tracking-tight">
            Worktop Materials & Surface Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Certified surface materials tested against 50+ corrosive reagents, open flames, thermal shock, and bacterial growth.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((mat) => (
            <div
              key={mat.id}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Swatch & Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mat.gradient} shadow-inner flex items-center justify-center font-bold text-xs shrink-0 border border-slate-200`}>
                    <Shield className="w-6 h-6 opacity-60 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#0A1C38]">
                      {mat.name}
                    </h3>
                    <span className="text-xs text-blue-600 font-semibold">{mat.type}</span>
                  </div>
                </div>

                <div className="text-xs font-mono font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 mb-4 inline-block">
                  Available Thickness: {mat.thickness}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {mat.description}
                </p>

                {/* Rating bars */}
                <div className="space-y-2 mb-6 bg-white p-3.5 rounded-2xl border border-slate-200/80 text-[11px]">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <Droplets className="w-3.5 h-3.5 text-blue-600" /> Chemical Acid Resistance
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full ${
                            i < mat.ratings.chemical ? "bg-blue-600" : "bg-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <Flame className="w-3.5 h-3.5 text-amber-500" /> Thermal & Heat Resistance
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full ${
                            i < mat.ratings.heat ? "bg-amber-500" : "bg-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                      <Hammer className="w-3.5 h-3.5 text-slate-700" /> Impact & Scratch Proof
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full ${
                            i < mat.ratings.impact ? "bg-slate-800" : "bg-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Recommended for:</span>
                <p className="text-xs text-slate-700 font-medium">{mat.idealFor}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
