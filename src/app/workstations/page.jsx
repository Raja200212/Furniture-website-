"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { ArrowRight, Sliders, ShieldCheck } from "lucide-react";

export default function WorkstationsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  const workstationSeries = [
    {
      num: "01",
      title: "Monolithic Base Series",
      desc: "A strong, permanent bench where the worktop sits directly on top of the cabinets. It does not need a metal frame and can hold very heavy equipment. Sits flat on the floor to eliminate dust accumulation underneath.",
      image: "https://spacevisionlabs.com/images/floor-mounted-lab-bench-2.jpg",
      specs: "Direct Plinth Foundation • 850kg Static Load Rating"
    },
    {
      num: "02",
      title: "Elevated Hygiene Series",
      desc: "Stands on heavy-duty H-frame steel assemblies, lifting cabinets off the ground so floors can be washed down thoroughly. Ideal for hospital, clinical, and cleanroom environments.",
      image: "https://spacevisionlabs.com/images/h-frame-lab-bench-2.jpg",
      specs: "Welded Box Steel Frame • 1000kg Heavy Equipment Rating"
    },
    {
      num: "03",
      title: "Cantilevered Clearance Series",
      desc: "Features C-frame structural clearance allowing suspended or hanging under-bench pedestal units to slide or hook effortlessly without disrupting desktop utilities or restricting operator legroom.",
      image: "https://spacevisionlabs.com/images/c-frame-lab-bench-2.jpg",
      specs: "Cold-Rolled Cantilever • 600kg Distributed Load"
    },
    {
      num: "04",
      title: "Omni-Directional Mobile Series",
      desc: "Dynamic research bench platforms mounted on heavy-duty lockable castors. Easily deployed, locked in position, or reconfigured for agile and multi-disciplinary lab procedures.",
      image: "https://spacevisionlabs.com/images/mobile-storage-cabinets-on-wheel.jpg",
      specs: "Lockable PU Castors • Agile Rapid Reconfiguration"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-4 h-0.5 bg-blue-600"></span>
              <span>Structural Platforms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#040C1A] tracking-tight">
              Workstation Structural Series
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
              Space Vision Lab manufactures four foundational workstation geometries engineered for specific floor loads, cleaning protocols, and modular reconfigurations.
            </p>
          </div>

          {/* Workstations Grid (4 Series) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workstationSeries.map((ws) => (
              <div
                key={ws.num}
                className="bg-[#F4F8FC] rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center relative overflow-hidden hover:border-blue-500 hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                {/* Background Large Number */}
                <div className="absolute top-4 right-6 font-mono font-extrabold text-5xl sm:text-6xl text-slate-300/40 pointer-events-none select-none">
                  {ws.num}
                </div>

                {/* Image Box */}
                <div className="w-48 h-48 sm:w-44 sm:h-44 bg-white rounded-2xl border border-slate-200 p-4 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-[11px] font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    SERIES {ws.num}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#040C1A] mb-2.5">
                    {ws.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {ws.desc}
                  </p>
                  
                  <div className="text-[11px] font-mono text-slate-500 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-200/80 mb-4 inline-block">
                    {ws.specs}
                  </div>

                  <div>
                    <button
                      onClick={() => handleOpenQuote(ws.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      <span>Inquire Series {ws.num}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Specification Banner */}
          <div className="mt-20 bg-gradient-to-r from-[#040C1A] to-[#0A1C38] text-white p-8 sm:p-12 rounded-3xl tech-grid-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Sliders className="w-3.5 h-3.5 text-blue-400" />
                <span>CUSTOM MODULAR SIZING</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Customize Frame Dimensions, Worktops & Utilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Space Vision Lab manufactures modular workstations to exact room dimensions (1200mm to 2400mm width) with integrated gas, power spine, and chemical reagent racks.
              </p>
            </div>

            <button
              onClick={() => handleOpenQuote("Custom Workstation Sizing & Specifications")}
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-xs transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Request Workstation Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteSubject} />
    </div>
  );
}
