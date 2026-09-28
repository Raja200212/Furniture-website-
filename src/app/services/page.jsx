"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Compass, 
  Layout, 
  FileSpreadsheet, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Box, 
  Maximize2, 
  Sliders, 
  Sparkles,
  Cpu,
  Pipette,
  Wind,
  Zap
} from "lucide-react";

export default function ServicesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("");
  const [activePlanView, setActivePlanView] = useState("split"); // "split" | "2d" | "3d"
  const [activeHotspot, setActiveHotspot] = useState(null);

  const handleOpenQuote = (service = "") => {
    setQuoteService(service);
    setQuoteModalOpen(true);
  };

  const services = [
    {
      num: "01",
      icon: Compass,
      title: "Site Assessment & Discovery",
      image: "/turnkey-discover.jpg",
      badge: "Discovery Phase",
      desc: "We review utility inlets, exhaust duct pathways, chemical handling volumes, and ergonomics before finalizing layouts.",
      points: [
        "Laser spatial measurement & leveling audit",
        "HVAC & extraction riser pathway verification",
        "Utility drop coordinates (Water, Gas, Electrical)"
      ]
    },
    {
      num: "02",
      icon: Layout,
      title: "2D/3D Animation Space Planning",
      image: "/service-2d-3d.jpg",
      badge: "CAD Engineering",
      desc: "Developing coordinated CAD drawings showing service bridges, plumbing drops, and fume hood extraction points.",
      points: [
        "AutoCAD 2D technical layout drafts",
        "Photorealistic 3D virtual lab walk-throughs",
        "Ergonomic workflow & cleanroom zoning validation"
      ]
    },
    {
      num: "03",
      icon: FileSpreadsheet,
      title: "Accurate BOQ Support",
      image: "/service-boq.jpg",
      badge: "Specification",
      desc: "Supplying itemized Bill of Quantities with clear technical specifications for procurement.",
      points: [
        "Itemized line-by-line component schedules",
        "Material compatibility reports (Trespa/Epoxy/PP)",
        "Tender-ready compliance documentation"
      ]
    },
    {
      num: "04",
      icon: Wrench,
      title: "Manufacturing & Quality Control",
      image: "/turnkey-manufacture.jpg",
      badge: "Fabrication",
      desc: "In-house CNC sheet metal stamping, welding, epoxy powder coating, and precision assembly adhering to ISO 9001:2015 quality standards.",
      points: [
        "Fiber laser CNC cutting & robotic welding",
        "7-tank anti-corrosion chemical pre-treatment",
        "1000kg static weight load testing & certification"
      ]
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: "On-Site Installation & Handover",
      image: "/turnkey-deliver.jpg",
      badge: "Commissioning",
      desc: "Professional site installation, plumbing and electrical integration, fume containment validation, and final handover.",
      points: [
        "Certified mechanical & gas pipeline hookup",
        "ASHRAE 110 / EN 14175 fume containment test",
        "Operator safety training & as-built documentation"
      ]
    }
  ];

  const hotspots = [
    {
      id: "fume",
      title: "Ducted Fume Hood Array",
      icon: Wind,
      coord: { top: "28%", left: "76%" },
      desc: "Aerodynamic bypass containment with VAV exhaust duct hookups and explosion-proof LED task lighting."
    },
    {
      id: "bench",
      title: "Modular Island Wet Workstations",
      icon: Pipette,
      coord: { top: "62%", left: "68%" },
      desc: "Anti-chemical epoxy worktops with integrated PP wash sink, eye-wash safety units, and overhead reagent racks."
    },
    {
      id: "cad",
      title: "2D Architectural Floorplan Grid",
      icon: Layout,
      coord: { top: "35%", left: "26%" },
      desc: "Coordinated dimension lines (35'-0\" x 28'-0\") detailing module spacing and clearance corridors."
    },
    {
      id: "mep",
      title: "MEP Utility Drops & Power Spines",
      icon: Zap,
      coord: { top: "75%", left: "32%" },
      desc: "Direct integration for pure water, nitrogen, vacuum line, and isolated 16A/240V power sockets."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote("Turnkey Services Inquiry")} />

      <main className="flex-1">
        
        {/* ==========================================================================
            HERO BANNER SECTION
            ========================================================================== */}
        <section className="relative pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-[#040C1A] via-[#0A1C38] to-[#102A54] text-white overflow-hidden tech-grid-dark border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Our Methodology & Capabilities</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                  End-to-End Turnkey Laboratory Services.
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
                  Space Vision Lab bridges the gap between architectural plans and operational laboratory readiness. From on-site laser scanning and 2D/3D BIM drawings to precision CNC manufacturing and certified commissioning.
                </p>

                <div className="flex flex-wrap gap-3.5 w-full sm:w-auto">
                  <button
                    onClick={() => handleOpenQuote("Turnkey Project Consultation")}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 text-xs sm:text-sm cursor-pointer"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/918193856070?text=Hello%20Space%20Vision%20Lab,%20I%20would%20like%20to%20inquire%20about%20your%20Turnkey%20Laboratory%20Services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5 text-xs sm:text-sm"
                  >
                    <span>WhatsApp Direct</span>
                  </a>
                </div>

                {/* Badges Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-white/10 w-full text-left">
                  <div>
                    <div className="text-lg sm:text-xl font-mono font-extrabold text-cyan-400">100%</div>
                    <div className="text-[11px] text-slate-400">In-House Production</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-mono font-extrabold text-cyan-400">ISO 9001</div>
                    <div className="text-[11px] text-slate-400">Certified Quality</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-mono font-extrabold text-cyan-400">2D / 3D</div>
                    <div className="text-[11px] text-slate-400">CAD & BIM Coordinated</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-mono font-extrabold text-cyan-400">ISO Class</div>
                    <div className="text-[11px] text-slate-400">Cleanroom Ready</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Feature Card */}
              <div className="lg:col-span-5 relative w-full">
                <div className="relative rounded-3xl bg-[#0A1C38] p-3 sm:p-4 border border-slate-700 shadow-2xl overflow-hidden group">
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      src="/turnkey-deliver.jpg"
                      alt="Turnkey Laboratory Services"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040C1A] via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-400 mb-1">
                        <span>FULL LIFECYCLE SUPPORT</span>
                        <span>01 → 05</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Site Survey • 2D/3D Planning • BOQ • Manufacturing • Turnkey Handover
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

          {/* ==========================================================================
              INTERACTIVE 2D & 3D ANIMATION / SPACE PLANNING SHOWCASE (COMMENTED OUT)
              ========================================================================== */}
          {/*
          <section className="mb-20 bg-[#040C1A] text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden tech-grid-dark">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>2D to 3D Space Planning Engine</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Interactive 2D Blueprint & 3D Model Visualizer
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Toggle between 2D architectural schematics and 3D photorealistic renderings to see how we transform empty spaces into functional research facilities.
                </p>
              </div>

              <div className="flex items-center bg-white/10 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md shrink-0 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={() => setActivePlanView("2d")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePlanView === "2d"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>2D Blueprint Plan</span>
                </button>

                <button
                  onClick={() => setActivePlanView("split")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePlanView === "split"
                      ? "bg-cyan-500 text-[#040C1A] font-extrabold shadow-md shadow-cyan-400/40"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>2D / 3D Split View</span>
                </button>

                <button
                  onClick={() => setActivePlanView("3d")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activePlanView === "3d"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D Isometric Render</span>
                </button>
              </div>
            </div>

            <div className="mt-8 relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 aspect-[16/9] max-h-[560px] w-full shadow-2xl group">
              
              <div className="relative w-full h-full">
                {activePlanView === "split" && (
                  <img
                    src="/service-2d-3d.jpg"
                    alt="2D to 3D Split Laboratory Space Planning"
                    className="w-full h-full object-cover animate-in fade-in duration-500"
                  />
                )}

                {activePlanView === "2d" && (
                  <img
                    src="/service-2d-blueprint.jpg"
                    alt="2D Architectural CAD Blueprint Plan"
                    className="w-full h-full object-cover animate-in fade-in duration-500"
                  />
                )}

                {activePlanView === "3d" && (
                  <img
                    src="/service-3d-model.jpg"
                    alt="3D Photorealistic Isometric Laboratory Model"
                    className="w-full h-full object-cover animate-in fade-in duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              </div>

              {hotspots.map((spot) => {
                const Icon = spot.icon;
                const isSelected = activeHotspot === spot.id;
                return (
                  <div
                    key={spot.id}
                    style={{ top: spot.coord.top, left: spot.coord.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/spot"
                  >
                    <button
                      onClick={() => setActiveHotspot(isSelected ? null : spot.id)}
                      className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        isSelected 
                          ? "bg-cyan-400 text-[#040C1A] scale-110 shadow-lg shadow-cyan-400/80 ring-4 ring-cyan-400/30"
                          : "bg-blue-600/90 hover:bg-cyan-400 hover:text-[#040C1A] text-white shadow-md shadow-blue-600/50 hover:scale-110"
                      }`}
                      aria-label={spot.title}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40 pointer-events-none" />
                    </button>

                    <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 bg-slate-900/95 backdrop-blur-md border border-cyan-400/40 rounded-2xl shadow-2xl transition-all duration-300 pointer-events-none ${
                      isSelected ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95 group-hover/spot:opacity-100 group-hover/spot:translate-y-0 group-hover/spot:scale-100"
                    }`}>
                      <div className="flex items-center gap-1.5 text-cyan-400 text-[11px] font-mono font-bold uppercase mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{spot.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        {spot.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>View Mode: {activePlanView.toUpperCase()} (AutoCAD / Revit / 3ds Max Engine)</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-cyan-400 text-xs font-mono font-semibold">
                  <span>Click glowing icons for technical specs</span>
                </div>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">1. Architectural 2D CAD</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Precise ductwork, plumbing drops & electrical load layouts.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/30 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">2. Photorealistic 3D Renders</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">High-definition 3D simulations showing actual colors & clearances.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">3. Itemized BOQ Specs</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Comprehensive Bill of Quantities matching exact room dimensions.</p>
                </div>
              </div>
            </div>

          </section>
          */}

          {/* ==========================================================================
              5 DETAILED TURNKEY SERVICE CARDS WITH IMAGES
              ========================================================================== */}
          <div className="mb-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                EXECUTION PHASES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#040C1A]">
                Comprehensive Laboratory Service Range
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((srv) => {
                const IconComponent = srv.icon;
                return (
                  <div
                    key={srv.num}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-500 transition-all duration-300 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Image Header */}
                      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Number Glow Pill */}
                        <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-2xl bg-blue-600 text-white font-mono font-extrabold text-sm flex items-center justify-center shadow-lg shadow-blue-600/50 border border-blue-400/40">
                          {srv.num}
                        </div>

                        {/* Phase Tag */}
                        <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-400 border border-cyan-400/30">
                          {srv.badge}
                        </div>

                        {/* Title overlay on image */}
                        <div className="absolute bottom-3 left-4 right-4">
                          <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                            {srv.title}
                          </h3>
                        </div>
                      </div>

                      {/* Card Body Details */}
                      <div className="p-6">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {srv.desc}
                        </p>

                        {/* Feature Bullet Points */}
                        <div className="space-y-2 pt-4 border-t border-slate-100">
                          {srv.points.map((pt, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span className="leading-tight">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Action Button */}
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => handleOpenQuote(srv.title)}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white text-xs font-bold transition-all shadow-xs group-hover:shadow-md cursor-pointer"
                      >
                        <span>Inquire About {srv.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Turnkey Capabilities Feature Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#040C1A] via-[#0A1C38] to-[#12284C] text-white p-8 sm:p-12 rounded-3xl tech-grid-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                COMPLETE LABORATORY FITOUT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Site Discovery or Custom 2D/3D Drawings?
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
