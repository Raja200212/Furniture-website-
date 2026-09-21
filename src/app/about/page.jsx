"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Factory, Award, Users, Compass, Hammer, Sparkles } from "lucide-react";

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const pillars = [
    {
      num: "01",
      title: "In-House Manufacturing",
      desc: "Direct fabrication from precision sheet metal CNC shearing, bending, woodworking, to powder-coating lines under one roof in Calicut, Kerala."
    },
    {
      num: "02",
      title: "Technical Space Planning",
      desc: "Coordinated 2D/3D CAD laboratory drawings detailing gas lines, water drops, drainage gradients, and fume hood exhaust routes."
    },
    {
      num: "03",
      title: "Accurate BOQ Support",
      desc: "Itemized Bill of Quantities with clear material specifications, load capacities, and SEFA-8/ISO compliant performance ratings."
    },
    {
      num: "04",
      title: "Turnkey Project Execution",
      desc: "Complete project handover including safe transport, certified on-site mechanical assembly, utility integration, and commissioning."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B111D]">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Main Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                <span className="w-4 h-0.5 bg-blue-600"></span>
                <span>About Space Vision Lab</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#040C1A] tracking-tight leading-tight">
                Built Around How Laboratories Actually Work.
              </h1>
              
              <p className="text-base sm:text-lg text-slate-700 font-medium mt-6 mb-4 leading-relaxed">
                Space Vision Lab Private Limited is a fully integrated manufacturing and solutions company specializing in educational, laboratory, industrial, and office furniture systems.
              </p>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                We design, manufacture, and deliver complete furniture solutions under one roof supported by professional layout drawings, technical documentation, and detailed project quotations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "In-House Manufacturing",
                  "Space Planning & Drawings",
                  "Accurate BOQ Quotations",
                  "Modular Systems",
                  "Turnkey Execution",
                  "ISO Material Standards"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#040C1A]">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-blue-500/25 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Contact Engineering Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/services"
                  className="bg-slate-100 hover:bg-slate-200 text-[#040C1A] font-bold px-7 py-4 rounded-xl text-xs sm:text-sm transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Turnkey Services</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-2xl bg-[#F4F8FC] p-4 group">
                <img
                  src="https://spacevisionlabs.com/images/floor-mounted-lab-sink-cabinet-2.png"
                  alt="About Space Vision Lab"
                  className="w-full h-[400px] sm:h-[480px] object-contain group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                  }}
                />
              </div>
            </div>
          </div>

          {/* 4 Pillars Section */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                <span className="w-4 h-0.5 bg-blue-600"></span>
                <span>Our Core Principles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#040C1A]">
                Engineering Integrity at Every Step
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="bg-[#F4F8FC] p-8 rounded-3xl border border-slate-200 hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg relative overflow-hidden"
                >
                  <div className="text-3xl font-black text-blue-600/25 font-mono mb-4">
                    {pillar.num}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#040C1A] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-20 bg-[#040C1A] text-white p-8 sm:p-12 rounded-3xl tech-grid-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                LET'S BUILD YOUR FACILITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Partner with Certified Laboratory Engineers
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                From room dimension audit to turnkey equipment handover, our technical specialists ensure strict SEFA-8 and ISO compliance.
              </p>
            </div>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-xs transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              Request Project Proposal →
            </button>
          </div>

        </div>
      </main>

      <Footer onOpenQuote={() => setQuoteModalOpen(true)} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
