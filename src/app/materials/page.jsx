"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Flame, Droplets, CheckCircle2, Sparkles, SlidersHorizontal } from "lucide-react";

export default function MaterialsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  const primaryMaterials = [
    {
      id: "granite",
      title: "Granite Worktop",
      tag: "NATURAL STONE",
      desc: "Heavy and dense natural stone top finished with safe rounded edges. Best for areas with heavy testing or vibration-sensitive balance scales.",
      image: "https://spacevisionlabs.com/images/anti-vibration-balance-table.png",
      specs: "Vibration-Damping • Polished Beveled Edge • Heavy Load Support"
    },
    {
      id: "trespa",
      title: "TRESPA Worktop",
      tag: "SOLID PHENOLIC",
      desc: "High-performance laboratory worktop made from advanced thermosetting resins and natural fibers with excellent chemical resilience.",
      image: "https://spacevisionlabs.com/images/laboratory-trespa-worktop.jpg",
      specs: "EBC Non-Porous Surface • 50+ Reagent Resistance • ISO 9001"
    },
    {
      id: "epoxy",
      title: "Epoxy Resin",
      tag: "MOLDED MONOLITHIC",
      desc: "Solid top highly resistant to strong chemicals, direct heat, and stains. Standard choice for modern chemistry testing labs.",
      image: "https://spacevisionlabs.com/images/laboratory-countertops-2.png",
      specs: "Seamless Marine Anti-Drip Rim • 600°C Thermal Shock Rating"
    },
    {
      id: "ceramic",
      title: "Sintered Industrial Ceramic",
      tag: "VITRIFIED SLAB",
      desc: "Pure natural minerals fired at 1200°C. Virtually impervious to boiling acids, solvents, open flames, and heavy scratch abrasion.",
      image: "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg",
      specs: "Zero Porosity • Flame-Proof • Unaffected by Organic Dyes"
    },
    {
      id: "stainless",
      title: "SS 304 / 316 Stainless Steel",
      tag: "MEDICAL GRADE",
      desc: "Seamless welded and electropolished surface. Unrivaled sterile hygiene, autoclave-compatible cleaning, moisture proof, and anti-static ESD dissipation.",
      image: "https://spacevisionlabs.com/images/floor-mounted-lab-sink-cabinet-2.png",
      specs: "Sterile Cleanroom Standard • Seamless Marine Edge • Non-Porous"
    },
    {
      id: "pp",
      title: "Polypropylene (PP) Homopolymer",
      tag: "CORROSION PROOF",
      desc: "100% rust-free, zero-corrosion thermoplastic structure. Total resistance to hydrofluoric acid (HF), concentrated hydrochloric acid, and aqua regia.",
      image: "https://spacevisionlabs.com/images/school-laboratory-2.jpg",
      specs: "100% Acid Proof • Welded Construction • Wet Chemistry Ideal"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote("Worktop Material Consultation")} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-4 h-0.5 bg-blue-600"></span>
              <span>Surface Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#040C1A] tracking-tight">
              Laboratory Countertop Materials
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
              The choice of work surface directly dictates lab longevity, chemical resilience, and decontamination efficiency.
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryMaterials.map((mat) => (
              <div
                key={mat.id}
                className="bg-[#F4F8FC] rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="h-56 bg-white border-b border-slate-200 flex items-center justify-center p-6 overflow-hidden relative">
                    <span className="absolute top-4 left-4 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">
                      {mat.tag}
                    </span>
                    <img
                      src={mat.image}
                      alt={mat.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                      }}
                    />
                  </div>

                  {/* Body */}
                  <div className="p-7">
                    <h3 className="text-xl font-extrabold text-[#040C1A] mb-2.5">
                      {mat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {mat.desc}
                    </p>
                    <div className="text-[11px] font-mono text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 inline-block">
                      {mat.specs}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    onClick={() => handleOpenQuote(mat.title)}
                    className="w-full bg-white hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-200 hover:border-blue-600 font-bold py-3 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Request Spec Sheet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Chemical Resilience Guide Banner */}
          <div className="mt-20 bg-gradient-to-r from-[#040C1A] via-[#0A1C38] to-[#12284C] text-white p-8 sm:p-12 rounded-3xl tech-grid-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>CHEMICAL RESISTANCE MATRIX</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Help Matching Chemicals to Worktops?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Our materials specialists review your laboratory's acid, alkali, solvent, and thermal load requirements to recommend the optimal surface.
              </p>
            </div>

            <button
              onClick={() => handleOpenQuote("Chemical Resistance Matrix Review")}
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-xs transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Consult Material Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </main>

      <Footer onOpenQuote={() => handleOpenQuote("Worktop Material Consultation")} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteSubject} />
    </div>
  );
}
