"use client";

import { workstationSystems } from "@/data/solutions";
import { Layers, ShieldCheck, Check, Sparkles, ArrowRight } from "lucide-react";

export default function WorkstationsSection({ onOpenQuote }) {
  return (
    <section id="workstations" className="py-20 bg-[#0A1C38] text-white relative tech-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Structural Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Workstation Structural Frameworks
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Constructed from cold-rolled electro-galvanized tubular steel with epoxy powder coating rated for extreme chemical exposure and heavy instrument loading.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-lg shadow-blue-600/30 cursor-pointer self-start md:self-auto"
          >
            <span>Request Technical Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Workstations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workstationSystems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 rounded-3xl p-6 border border-slate-700/70 flex flex-col justify-between hover:border-blue-400/80 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 tracking-wider">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {item.loadCapacity}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800 mb-6">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Ideal Workflows</span>
                  <span className="text-xs text-slate-200">{item.bestFor}</span>
                </div>
              </div>

              <div>
                <div className="space-y-1.5 pt-4 border-t border-slate-800 text-[11px] text-slate-300">
                  {item.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
