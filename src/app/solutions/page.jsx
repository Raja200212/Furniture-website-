"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Building2, FlaskConical, Stethoscope, Factory } from "lucide-react";

export default function SolutionsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  const sectors = [
    {
      sectorNum: "SECTOR 01",
      icon: Building2,
      title: "School Science & STEAM Laboratories",
      desc: "Igniting curiosity, fostering excellence. We design safe, durable, and engaging science, computer, and STEAM lab furniture for schools, including student workstations, teacher demonstration benches, storage units, and mobile furniture.",
      features: [
        "Hexagonal Collaborative Benches",
        "Multimedia Teacher Podiums",
        "Chemical Storage Cupboards",
        "Impact-Resistant Rounded Edges"
      ],
      btnLabel: "Inquire for School Fitout",
      image: "/school-lab.jpg",
      reverse: false
    },
    {
      sectorNum: "SECTOR 02",
      icon: FlaskConical,
      title: "University & Advanced Research Laboratories",
      desc: "Unleashing the potential of higher education. Our university-grade laboratory furniture supports advanced research and teaching environments, including chemistry, physics, biology, and engineering labs.",
      features: [
        "C-Frame & H-Frame Floor Benches",
        "High-Airflow Ducted Fume Hoods",
        "Over-Bench Reagent Shelving",
        "Heavy Instrument Load Capacity"
      ],
      btnLabel: "Inquire for University Labs",
      image: "/university-lab.jpg",
      reverse: true
    },
    {
      sectorNum: "SECTOR 03",
      icon: Stethoscope,
      title: "Hospital, Clinical & Pathology Diagnostic Labs",
      desc: "Hygienic, easy-to-clean furniture for clinical diagnostic labs, pathology departments, and medical training facilities. Engineered for sterile protocol adherence and non-porous chemical resistance.",
      features: [
        "Seamless 304/316 Stainless Steel Worktops",
        "Antimicrobial Solid Epoxy Surfaces",
        "Surgical-Grade PP Wash Sinks",
        "Vibration-Free Precision Microtome Stands"
      ],
      btnLabel: "Inquire for Healthcare Labs",
      image: "/healthcare-lab.jpg",
      reverse: false
    },
    {
      sectorNum: "SECTOR 04",
      icon: Factory,
      title: "Industrial R&D & Quality Control Laboratories",
      desc: "Reinforced benches, chemical-resistant worktops, fume extraction, and storage solutions designed for heavy continuous QC testing, metallurgical inspection, and petrochemical analysis.",
      features: [
        "Extreme Acid-Resistant TRESPA® Tops",
        "Reinforced 1000kg Load Frameworks",
        "Flammable & Toxic Storage Vaults",
        "Overhead Gas & High-Power Spines"
      ],
      btnLabel: "Inquire for Industrial Labs",
      image: "/industrial-lab.jpg",
      reverse: true
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
              <span>Sector Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#040C1A] tracking-tight">
              Sector Laboratory Solutions
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
              Space Vision Lab configures laboratory furniture tailored to distinct operational standards, hygienic requirements, and educational curriculums.
            </p>
          </div>

          {/* Alternating Sectors List */}
          <div className="space-y-20">
            {sectors.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <div
                  key={sec.sectorNum}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
                >
                  {/* Text Content Column */}
                  <div className={`lg:col-span-6 ${sec.reverse ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-3">
                      <IconComponent className="w-3.5 h-3.5 text-blue-600" />
                      <span>{sec.sectorNum}</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#040C1A] tracking-tight leading-tight mb-4">
                      {sec.title}
                    </h2>
                    
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {sec.desc}
                    </p>

                    {/* 4 Feature Checklist Items */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {sec.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#040C1A]">
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleOpenQuote(sec.title)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-blue-500/25 cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>{sec.btnLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Visual Image Column */}
                  <div className={`lg:col-span-6 ${sec.reverse ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-[#F4F8FC] group">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-24 bg-[#040C1A] text-white p-8 sm:p-12 rounded-3xl tech-grid-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                PLANNING A FACILITY FITOUT?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request a Custom 3D Laboratory Layout Proposal
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                Our design architects review room dimensions, plumbing, and gas utility feeds to produce an optimized 3D lab simulation.
              </p>
            </div>

            <button
              onClick={() => handleOpenQuote("Custom 3D Laboratory Proposal")}
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-xs transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
            >
              Start Consultation →
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
