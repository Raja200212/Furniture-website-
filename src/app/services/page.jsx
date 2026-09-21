"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { ArrowRight, Compass, Layout, FileSpreadsheet, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("");

  const handleOpenQuote = (service = "") => {
    setQuoteService(service);
    setQuoteModalOpen(true);
  };

  const services = [
    {
      num: "01",
      icon: Compass,
      title: "Site Assessment & Discovery",
      desc: "We review utility inlets, exhaust duct pathways, chemical handling volumes, and ergonomics before finalizing layouts."
    },
    {
      num: "02",
      icon: Layout,
      title: "2D/3D Space Planning",
      desc: "Developing coordinated CAD drawings showing service bridges, plumbing drops, and fume hood extraction points."
    },
    {
      num: "03",
      icon: FileSpreadsheet,
      title: "Accurate BOQ Support",
      desc: "Supplying itemized Bill of Quantities with clear technical specifications for procurement."
    },
    {
      num: "04",
      icon: Wrench,
      title: "Manufacturing & Quality Control",
      desc: "In-house CNC sheet metal stamping, welding, epoxy powder coating, and precision assembly adhering to SEFA-8 standards."
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: "On-Site Installation & Handover",
      desc: "Professional site installation, plumbing and electrical integration, fume containment validation, and final handover."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote("Turnkey Services Inquiry")} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-4 h-0.5 bg-blue-600"></span>
              <span>Our Methodology</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#040C1A] tracking-tight">
              End-to-End Turnkey Services
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
              Space Vision Lab bridges the gap between architectural plans and operational laboratory readiness.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={srv.num}
                  className="bg-[#F4F8FC] rounded-3xl border border-slate-200 p-8 sm:p-10 hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold font-mono text-blue-600">
                        {srv.num}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-[#040C1A] mb-3">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <button
                      onClick={() => handleOpenQuote(srv.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      <span>Inquire About Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Turnkey Capabilities Feature Banner */}
          <div className="mt-20 bg-gradient-to-r from-[#040C1A] via-[#0A1C38] to-[#12284C] text-white p-8 sm:p-12 rounded-3xl tech-grid-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                COMPLETE LABORATORY FITOUT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Site Discovery or 3D Drawings?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                Our CAD team turns your floor layout into detailed 2D/3D models with exact MEP (Mechanical, Electrical, Plumbing) hookup locations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <button
                onClick={() => handleOpenQuote("Full Turnkey Lab Fitout Proposal")}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-xs transition-all shadow-lg shadow-blue-600/30 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book Site Walk / Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteService} />
    </div>
  );
}
