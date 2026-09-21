"use client";

import Image from "next/image";
import { ArrowRight, Sliders, ShieldCheck, Sparkles, CheckCircle2, Award, Zap } from "lucide-react";

export default function Hero({ onOpenQuote }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden tech-grid-bg bg-gradient-to-b from-blue-50/40 via-white to-slate-50">
      {/* Background ambient decorative orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-400/10 to-cyan-300/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>Smart • Durable • Functional Lab Systems</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1C38] tracking-tight leading-[1.1] mb-6">
              Next-Gen Laboratory{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600">
                Furniture & Cleanroom
              </span>{" "}
              Engineering.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Precision-crafted modular workstations, chemical-grade fume containment hoods, sterile cleanrooms, and deployable container laboratories. Certified for education, healthcare diagnostics, and pharmaceutical R&D.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => onOpenQuote()}
                className="flex items-center justify-center gap-2 bg-[#0A1C38] hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/15 hover:shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer text-sm w-full sm:w-auto"
              >
                <span>Request 3D Lab Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#configurator"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3.5 rounded-full border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-sm shadow-xs w-full sm:w-auto"
              >
                <Sliders className="w-4 h-4 text-blue-600" />
                <span>Interactive Workstation Builder</span>
              </a>

              <a
                href="#products"
                className="text-xs font-bold text-slate-600 hover:text-blue-600 underline underline-offset-4 px-2 py-1 transition-colors"
              >
                Browse 140+ Catalog Items ↓
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 w-full max-w-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-800">SEFA-8 Tested</div>
                  <div className="text-[11px] text-slate-500">Heavy Load Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-800">ISO 9001:2015</div>
                  <div className="text-[11px] text-slate-500">Certified Quality</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-slate-800">Custom Built</div>
                  <div className="text-[11px] text-slate-500">3D CAD Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-[#0A1C38] p-3 shadow-2xl border border-slate-800/80">
              
              {/* Product Showcase Image Container */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <Image
                  src="https://spacevisionlabs.com/images/pp-lab-bench-4.jpg"
                  alt="Space Vision Lab Workstation Solution"
                  fill
                  priority
                  className="object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040C1A] via-transparent to-transparent opacity-80" />

                {/* Floating Tech Pill Top Right */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-[11px] font-bold tracking-wider flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>MODULAR C-FRAME SERIES</span>
                </div>

                {/* Bottom Glass Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0A1C38]/90 backdrop-blur-md border border-white/15 rounded-xl p-4 text-white shadow-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider">Engineered Excellence</span>
                    <span className="text-[11px] text-slate-300 font-mono">1000 KG LOAD CAP</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Heavy-Duty Chemical & Acid Resistant Benches</h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Features electrostatic anti-corrosion powder coating, TRESPA® worktops, and integrated overhead utility raceways.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-extrabold text-xl">
                  15+
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#0A1C38]">Years of Innovation</div>
                  <div className="text-[11px] text-slate-500">Turnkey Lab Contracting</div>
                </div>
              </div>

              {/* Floating Stat Card Right */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-extrabold text-xl">
                  500+
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#0A1C38]">Projects Delivered</div>
                  <div className="text-[11px] text-slate-500">Across Academic & Pharma</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
