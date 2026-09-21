"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import { products } from "@/data/products";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Wind, 
  ShieldCheck, 
  Sliders, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  MessageSquare, 
  Send,
  ChevronLeft,
  ChevronRight,
  Search,
  X
} from "lucide-react";

const heroSlides = [
  {
    image: "https://productimages.withfloats.com/actual/68a88c7de1493bda3146b398.png",
    tag: "MANUFACTURING STANDARD",
    title: "Integrated Lab Solutions",
    desc: "Space planning, 3D CAD rendering & accurate BOQ project support."
  },
  {
    image: "https://spacevisionlabs.com/images/school-laboratory-2.jpg",
    tag: "ACADEMIC & STEAM EXCELLENCE",
    title: "Modular STEAM Science Labs",
    desc: "Safe, durable student workstations & teacher demonstration podiums."
  },
  {
    image: "https://spacevisionlabs.com/images/h-frame-lab-bench-2.jpg",
    tag: "STRUCTURAL PLATFORMS",
    title: "H-Frame & C-Frame Heavy Duty Systems",
    desc: "Cold-rolled welded steel frames with 1000kg static load capacity."
  },
  {
    image: "https://spacevisionlabs.com/images/vav-fume-hood.jpg",
    tag: "SAFETY & CONTAINMENT",
    title: "Certified Fume Extraction Hoods",
    desc: "SEFA-1 compliant ducted exhaust systems with smart aerodynamic sashes."
  }
];

const airHandlingItems = [
  {
    title: "SVL Fume Hood",
    img: "https://spacevisionlabs.com/images/vav-fume-hood.jpg",
    desc: "Equipped with durable chemical lining, counterbalanced safety sash, integrated LED illumination, and smart control system for fume extraction.",
    pills: ["Durable Structure", "Safety Sash", "LED Lighting", "Internal Lining", "Smart Controls", "Electrical System"]
  },
  {
    title: "SVL Bio Safety Cabinet",
    img: "https://spacevisionlabs.com/images/flow-hood-laminar.jpg",
    desc: "Offers triple protection for personnel, product, and environment during microbiological and clinical processes with vertical laminar HEPA filtration.",
    pills: ["Triple Protection", "Vertical Laminar Flow", "HEPA Filtration", "Stainless Steel", "UV Sterilization", "Low-Noise"]
  },
  {
    title: "SVL Dynamic & Static Pass Box",
    img: "https://spacevisionlabs.com/images/1-pass-box.jpg",
    desc: "Interlocked material transfer chambers designed to maintain ISO Class 5 cleanroom integrity, eliminate cross-contamination, and protect pressure cascades.",
    pills: ["Safe Material Transfer", "ISO Class 5 Cleanroom", "UV Door Interlock", "HEPA Filtration", "Electronic Interlocking"]
  }
];

const turnkeySteps = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Site Survey & Assessment",
    image: "https://spacevisionlabs.com/images/clean-room-booth.jpg",
    desc: "Site visits, brief assessment, and understanding exact chemical, electrical, and workflow requirements.",
    points: [
      "3D laser space scanning & layout evaluation",
      "Chemical compatibility & exhaust duct audit",
      "Gas manifold, plumbing & power load mapping"
    ]
  },
  {
    step: "02",
    title: "Design",
    subtitle: "3D CAD & BOQ Planning",
    image: "https://productimages.withfloats.com/actual/68a88c7de1493bda3146b398.png",
    desc: "Space planning, technical layout drawings, material selection, and accurate BOQ quotation generation.",
    points: [
      "Photorealistic 3D virtual lab simulations",
      "Ergonomic workflow & cleanroom zoning",
      "Comprehensive itemized BOQ & tech specs"
    ]
  },
  {
    step: "03",
    title: "Manufacture",
    subtitle: "Precision CNC Fabrication",
    image: "https://spacevisionlabs.com/images/h-frame-lab-bench-2.jpg",
    desc: "Controlled in-house production with precision sheet metal, woodwork, and powder-coating lines.",
    points: [
      "CNC laser cutting & robotic welding lines",
      "7-tank anti-rust pre-treatment & pure epoxy",
      "SEFA-8 load compliance & QA verification"
    ]
  },
  {
    step: "04",
    title: "Deliver",
    subtitle: "Turnkey Installation & Commissioning",
    image: "https://spacevisionlabs.com/images/school-laboratory-2.jpg",
    desc: "Safe transport, on-site structural assembly, utility integration, and final project handover.",
    points: [
      "Crated shock-proof logistics & delivery",
      "Factory-certified mechanical & gas hookup",
      "Fume containment testing & project sign-off"
    ]
  }
];

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");
  const [airTab, setAirTab] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [homeSearch, setHomeSearch] = useState("");
  const [homeCategory, setHomeCategory] = useState("All");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    labType: "School Science / STEAM Lab",
    city: "",
    message: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const airTimer = setInterval(() => {
      setAirTab((prev) => (prev + 1) % airHandlingItems.length);
    }, 4500);
    return () => clearInterval(airTimer);
  }, [airHandlingItems.length]);

  const featuredProducts = products
    .filter((p) => {
      const matchesCat = homeCategory === "All" || p.category.toLowerCase().includes(homeCategory.toLowerCase());
      if (!homeSearch) return matchesCat && p.featured;
      const q = homeSearch.toLowerCase().trim();
      return (
        matchesCat && (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
        )
      );
    })
    .slice(0, 8);

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1 pt-20">
        
        {/* ==========================================================================
            1. HIGH-IMPACT HERO SECTION
            ========================================================================== */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-[#EBF2F9] border-b border-slate-200 overflow-hidden tech-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping"></span>
                  <span>SPACE VISION LAB • SMART DURABLE & FUNCTIONAL</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#040C1A] tracking-tight leading-[1.08] mb-6">
                  Laboratories Designed for Better Work.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                  Smart, durable and functional laboratory furniture systems engineered around how your space actually works. Complete turnkey manufacturing under one roof.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/products"
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 text-sm"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://wa.me/918193856070?text=Hello%20Space%20Vision%20Lab,%20I%20would%20like%20to%20plan%20a%20laboratory%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5 text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Hero Right Visual Card with Enlarged Interactive Slider Bar */}
              <div className="lg:col-span-6 relative group">
                <div className="relative rounded-3xl bg-white p-3 sm:p-3.5 border border-slate-200 shadow-2xl overflow-hidden">
                  
                  {/* Slide Image - Enlarged */}
                  <div className="relative h-[480px] sm:h-[540px] lg:h-[560px] w-full rounded-2xl overflow-hidden bg-slate-900">
                    <img
                      key={heroSlide}
                      src={heroSlides[heroSlide].image}
                      alt={heroSlides[heroSlide].title}
                      className="w-full h-full object-cover rounded-2xl animate-in fade-in zoom-in-95 duration-700"
                    />
                    
                    {/* Subtle bottom shadow gradient for pure text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Left / Right Slider Navigation Buttons - Enlarged */}
                    <button
                      onClick={() => setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                      className="absolute top-1/2 left-4 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer backdrop-blur-sm hover:scale-110"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                      className="absolute top-1/2 right-4 -translate-y-1/2 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer backdrop-blur-sm hover:scale-110"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Floating HUD - Clean Minimalist Text */}
                  <div className="absolute bottom-6 left-6 right-6 text-white p-0">
                    
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest block drop-shadow-md mb-1.5">
                      {heroSlides[heroSlide].tag}
                    </span>

                    <h4 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">
                      {heroSlides[heroSlide].title}
                    </h4>
                    
                    <p className="text-xs sm:text-sm text-slate-100 mt-1 leading-relaxed drop-shadow-md max-w-xl">
                      {heroSlides[heroSlide].desc}
                    </p>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. METRICS BAR
            ========================================================================== */}
        <section className="bg-[#040C1A] text-white py-10 border-b border-slate-800 tech-grid-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              <div className="pt-4 lg:pt-0 lg:px-6 border-l-4 border-blue-600 pl-4">
                <div className="text-cyan-400 font-mono font-bold text-xl mb-1">01</div>
                <div className="font-bold text-sm text-white">In-House Manufacturing</div>
                <div className="text-xs text-slate-400 mt-0.5">Precision facility in Calicut, Kerala</div>
              </div>

              <div className="pt-4 lg:pt-0 lg:px-6 border-l-4 border-blue-600 pl-4">
                <div className="text-cyan-400 font-mono font-bold text-xl mb-1">02</div>
                <div className="font-bold text-sm text-white">Technical Space Planning</div>
                <div className="text-xs text-slate-400 mt-0.5">CAD layout drawings & BOQ support</div>
              </div>

              <div className="pt-4 lg:pt-0 lg:px-6 border-l-4 border-blue-600 pl-4">
                <div className="text-cyan-400 font-mono font-bold text-xl mb-1">03</div>
                <div className="font-bold text-sm text-white">Modular Systems</div>
                <div className="text-xs text-slate-400 mt-0.5">Scalable C-Frame & H-Frame benches</div>
              </div>

              <div className="pt-4 lg:pt-0 lg:px-6 border-l-4 border-blue-600 pl-4">
                <div className="text-cyan-400 font-mono font-bold text-xl mb-1">04</div>
                <div className="font-bold text-sm text-white">Turnkey Execution</div>
                <div className="text-xs text-slate-400 mt-0.5">From brief to final installation</div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. EDITORIAL INTRODUCTION (WHO WE ARE)
            ========================================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Visual with Floating Badge */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
                  <img
                    src="https://spacevisionlabs.com/images/c-frame-lab-bench-2.jpg"
                    alt="Space Vision Lab Engineering"
                    className="w-full h-[460px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 bg-blue-600 text-white p-5 rounded-2xl shadow-xl text-center">
                  <div className="font-mono text-3xl font-extrabold">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mt-1">Integrated Facility</div>
                </div>
              </div>

              {/* Right Introduction Copy */}
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                  WHO WE ARE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#040C1A] tracking-tight leading-tight mb-4">
                  One Partner. From Laboratory Planning to Delivery.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-4">
                  Space Vision Lab Private Limited is a fully integrated manufacturing and solutions company specializing in educational, laboratory, industrial and office furniture systems.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  We design, manufacture and deliver complete furniture solutions under one roof supported by professional layout drawings, technical documentation, and detailed project quotations.
                </p>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    "In-House Manufacturing",
                    "Space Planning & Drawings",
                    "Accurate BOQ Quotations",
                    "Modular Systems",
                    "Turnkey Execution",
                    "ISO Material Standards"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#040C1A]">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all shadow-xs"
                >
                  <span>Learn More About SVL</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
            4. SECTOR SOLUTIONS FOR EVERY NEED
            ========================================================================== */}
        <section className="py-20 bg-[#F4F8FC] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                SECTOR SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#040C1A] tracking-tight">
                Solutions For Every Need
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Engineered laboratory platforms configured for unique educational, clinical, and industrial workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <Link href="/solutions" className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between hover:-translate-y-1">
                <img src="https://spacevisionlabs.com/images/school-laboratory-furniture-supplier-2.jpg" alt="Schools" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-blue-600">01 — SCHOOLS</span>
                    <h3 className="text-base font-extrabold text-[#040C1A] mt-1 mb-2">Schools & STEAM</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">Safe, durable and engaging science, computer and STEAM lab furniture including student workstations and storage.</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore School Labs →
                  </span>
                </div>
              </Link>

              <Link href="/solutions" className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between hover:-translate-y-1">
                <img src="https://spacevisionlabs.com/images/h-frame-lab-bench-2.jpg" alt="Universities" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-blue-600">02 — UNIVERSITIES</span>
                    <h3 className="text-base font-extrabold text-[#040C1A] mt-1 mb-2">Universities</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">Advanced chemistry, physics, biology and engineering laboratory benches and fume extraction systems.</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore University Labs →
                  </span>
                </div>
              </Link>

              <Link href="/solutions" className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between hover:-translate-y-1">
                <img src="https://spacevisionlabs.com/images/pathology-workstation.jpg" alt="Healthcare" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-blue-600">03 — HEALTHCARE</span>
                    <h3 className="text-base font-extrabold text-[#040C1A] mt-1 mb-2">Clinics & Hospitals</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">Hygienic, easy-to-clean furniture for clinical diagnostic labs, pathology departments, and medical training.</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Healthcare Labs →
                  </span>
                </div>
              </Link>

              <Link href="/solutions" className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between hover:-translate-y-1">
                <img src="https://spacevisionlabs.com/images/pp-lab-bench-4.jpg" alt="Industrial" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-blue-600">04 — INDUSTRIAL</span>
                    <h3 className="text-base font-extrabold text-[#040C1A] mt-1 mb-2">Industrial Labs</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">Reinforced benches, chemical-resistant worktops, fume extraction, and storage designed for heavy continuous QC testing.</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Industrial Labs →
                  </span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* ==========================================================================
            5. LAB WORKSTATION SERIES (4 SYSTEMS)
            ========================================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                ENGINEERING SYSTEMS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#040C1A] tracking-tight">
                Lab Workstation Series
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Four specialized structural platforms designed to balance load requirements, hygiene maintenance, and spatial flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-[#F4F8FC] p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-44 h-44 bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center shrink-0">
                  <img src="https://spacevisionlabs.com/images/floor-mounted-lab-bench-2.jpg" alt="Monolithic Base" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">SERIES 01</span>
                  <h3 className="text-lg font-extrabold text-[#040C1A] mt-1 mb-2">Monolithic Base Series</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A strong, permanent bench where the worktop sits directly on top of the cabinets. It does not need a metal frame and can hold very heavy equipment. Sits flat on the floor to eliminate dust accumulation underneath.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-44 h-44 bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center shrink-0">
                  <img src="https://spacevisionlabs.com/images/h-frame-lab-bench-2.jpg" alt="Elevated Hygiene" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">SERIES 02</span>
                  <h3 className="text-lg font-extrabold text-[#040C1A] mt-1 mb-2">Elevated Hygiene Series</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stands on heavy-duty H-frame steel assemblies, lifting cabinets off the ground so floors can be washed down thoroughly. Ideal for hospital and clinical environments.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-44 h-44 bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center shrink-0">
                  <img src="https://spacevisionlabs.com/images/c-frame-lab-bench-2.jpg" alt="Cantilevered Clearance" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">SERIES 03</span>
                  <h3 className="text-lg font-extrabold text-[#040C1A] mt-1 mb-2">Cantilevered Clearance Series</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Features C-frame structural clearance allowing suspended or hanging under-bench units to slide or hook effortlessly without disrupting desktop utilities.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-44 h-44 bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center shrink-0">
                  <img src="https://spacevisionlabs.com/images/mobile-storage-cabinets-on-wheel.jpg" alt="Omni-Directional Mobile" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">SERIES 04</span>
                  <h3 className="text-lg font-extrabold text-[#040C1A] mt-1 mb-2">Omni-Directional Mobile Series</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dynamic research bench platforms mounted on heavy-duty lockable castors. Easily deployed, locked in position, or reconfigured for agile lab procedures.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
            6. AIR HANDLING & CRITICAL CONTAINMENT
            ========================================================================== */}
        <section className="py-20 bg-[#040C1A] text-white relative tech-grid-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Selector Navigation */}
              <div className="lg:col-span-6">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                  CONTAINMENT & VENTILATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  Air Handling Workstations
                </h2>
                <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                  Specialized negative-pressure and clean air systems ensuring personnel safety and contamination-free sample handling.
                </p>

                <div className="space-y-4">
                  {airHandlingItems.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setAirTab(idx)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                        airTab === idx
                          ? "bg-blue-600/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/10"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-base text-white">{item.title}</h4>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          airTab === idx ? "bg-cyan-400 text-[#040C1A]" : "bg-white/10 text-slate-400"
                        }`}>
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>

                      {/* Auto Progress Bar on Active Tab */}
                      {airTab === idx && (
                        <div className="mt-3.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-[progress_4.5s_linear]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Active Air Handling Display with Interactive Slider */}
              <div className="lg:col-span-6">
                <div className="bg-[#0A1C38] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                  
                  {/* Image Display */}
                  <div className="bg-white rounded-2xl p-6 h-64 sm:h-72 flex items-center justify-center mb-6 overflow-hidden">
                    <img
                      key={airTab}
                      src={airHandlingItems[airTab].img}
                      alt={airHandlingItems[airTab].title}
                      className="max-h-full max-w-full object-contain animate-in fade-in zoom-in-95 duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-extrabold text-white">
                      {airHandlingItems[airTab].title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-md">
                      0{airTab + 1} / 0{airHandlingItems.length}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {airHandlingItems[airTab].desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {airHandlingItems[airTab].pills.map((p, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 border border-white/15 text-white text-[10px] font-mono rounded-full font-semibold">
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Slider Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                    {airHandlingItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setAirTab(idx)}
                        className="flex-1 h-1.5 rounded-full overflow-hidden bg-white/20 transition-all cursor-pointer relative group/bar"
                        aria-label={`Go to ${airHandlingItems[idx].title}`}
                      >
                        <div
                          className={`h-full transition-all duration-500 rounded-full ${
                            airTab === idx
                              ? "w-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-sm shadow-cyan-400/80"
                              : "w-0 group-hover/bar:w-full group-hover/bar:bg-white/40"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
            7. WORKTOP MATERIALS EXPLORER
            ========================================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                SURFACES & CHEMISTRY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#040C1A] tracking-tight">
                Lab Worktop / Countertop Materials
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Select from our catalogue-identified work surfaces to match exact thermal, chemical, and physical stress demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-[#F4F8FC] rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <img src="https://spacevisionlabs.com/images/anti-vibration-balance-table.png" alt="Granite" className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-[#040C1A] mb-2">Granite Worktop</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Heavy and dense natural stone surface finished with safe rounded edges. Best for areas with heavy testing or where sensitive scales need a steady surface.</p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <img src="https://spacevisionlabs.com/images/laboratory-trespa-worktop.jpg" alt="TRESPA" className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-[#040C1A] mb-2">TRESPA Worktop</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Advanced thermosetting resin and natural fiber construction providing superior impact, thermal, chemical, and moisture resistance.</p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <img src="https://spacevisionlabs.com/images/laboratory-countertops-2.png" alt="Epoxy Resin" className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-[#040C1A] mb-2">Epoxy Resin</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Solid, monolithic composition highly resistant to aggressive chemicals, direct heat, and staining. Standard choice for modern chemistry testing labs.</p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <img src="https://spacevisionlabs.com/images/stainless_countertop.jpg" alt="Stainless Steel" className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-[#040C1A] mb-2">Stainless Steel</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Rust-proof sanitary steel top that accommodates seamless welded sinks. Easy to wash down and disinfect for clinical and biological environments.</p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <img src="https://spacevisionlabs.com/images/ceramic-worktop-2.jpg" alt="Ceramic Worktop" className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-[#040C1A] mb-2">Ceramic Worktop</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Scratch-proof ceramic slabs joined with chemical-resistant grout. Exceptional defense against corrosive acids, sharp instruments, and high heat.</p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <img src="https://spacevisionlabs.com/images/phenolic-resin-countertop-3.jpg" alt="Laminated Worktop" className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-base font-extrabold text-[#040C1A] mb-2">Laminated Worktop</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Economical top for dry analysis, office administration, and student IT labs. Waterproof substrate faced with robust decorative laminate.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
            8. PRODUCT DISCOVERY SECTION
            ========================================================================== */}
        <section className="py-20 bg-[#F4F8FC] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                PRODUCT DISCOVERY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#040C1A] tracking-tight">
                Explore the Laboratory System
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Browse from our comprehensive range of manufactured laboratory components and safety units.
              </p>
            </div>

            {/* Modern Product Discovery Toolbar */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm mb-10 space-y-4">
              
              {/* Top Row: Search Input & Catalogue Action */}
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Search Input with Icon */}
                <div className="relative w-full md:max-w-md">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name, category, or component..."
                    value={homeSearch}
                    onChange={(e) => setHomeSearch(e.target.value)}
                    className="w-full pl-10 pr-9 py-2.5 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl text-xs sm:text-sm outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-[#040C1A] placeholder:text-slate-400"
                  />
                  {homeSearch && (
                    <button
                      onClick={() => setHomeSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Right: Counter Badge & Explore Catalogue Button */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                    Showing <strong className="text-[#040C1A]">{featuredProducts.length}</strong> featured items
                  </span>

                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 bg-[#040C1A] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-blue-500/25 shrink-0"
                  >
                    <span>View All 148+ Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Bottom Row: Quick Category Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-slate-100 text-xs no-scrollbar">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                  Filter:
                </span>
                {[
                  "All",
                  "Workstation",
                  "Fume Hood",
                  "Cabinet",
                  "Cleanroom",
                  "Storage"
                ].map((cat) => {
                  const isSelected = homeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setHomeCategory(cat)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-xs"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      {cat === "All" ? "All Categories" : cat}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleOpenQuote(p.name)}
                  className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="h-48 w-full bg-slate-50 rounded-xl p-4 flex items-center justify-center mb-3">
                    <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">{p.category}</span>
                    <h4 className="text-sm font-bold text-[#040C1A] mt-1 mb-1 line-clamp-1">{p.name}</h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{p.description}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                    <span>Inquire Item</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#040C1A] hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-xs transition-all shadow-md"
              >
                <span>Open Complete 112+ Product Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            9. TURNKEY PROCESS ROADMAP
            ========================================================================== */}
        <section className="py-20 bg-[#040C1A] text-white tech-grid-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                TURNKEY EXECUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                From Brief to Laboratory
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-2">
                A structured four-step methodology ensuring flawless laboratory installation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {turnkeySteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#0A1A33]/80 hover:bg-[#0E2244] border border-white/10 hover:border-blue-500/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col group"
                >
                  {/* Card Top Image Showcase */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33] via-black/30 to-transparent" />
                    
                    {/* Glowing Number Badge */}
                    <div className="absolute top-3.5 left-3.5 w-11 h-11 rounded-2xl bg-blue-600/90 backdrop-blur-md text-white font-mono font-extrabold text-base flex items-center justify-center shadow-lg shadow-blue-600/50 border border-blue-400/40">
                      {step.step}
                    </div>

                    {/* Step Phase Tag */}
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-400 border border-cyan-400/30">
                      Phase {step.step}
                    </div>
                  </div>

                  {/* Card Body & Rich Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-300/90 mb-3 font-mono">
                        {step.subtitle}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mb-5">
                        {step.desc}
                      </p>
                    </div>

                    {/* Feature Bullets */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      {step.points.map((point, i) => (
                        <div key={i} className="text-[11px] text-slate-300 flex items-start gap-2 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section Link */}
            <div className="mt-12 text-center">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-full text-xs transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
              >
                <span>Explore Full Engineering Lifecycle</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            10. CONTACT & DIRECT CONSULTATION
            ========================================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Contact Card */}
              <div className="lg:col-span-5 bg-[#0A1C38] text-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden tech-grid-dark">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                  LET'S PLAN YOUR SPACE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Let's Plan Your Laboratory.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                  Whether fitting out a single classroom laboratory or an entire research floor, Space Vision Lab can understand the brief, assess the space and develop a proposal built around how the laboratory will actually be used.
                </p>

                <div className="space-y-6 text-xs text-slate-300">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Factory & Headquarters</div>
                      <div className="text-sm font-bold text-white mt-0.5">Calicut, Kerala, India</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Phone / WhatsApp</div>
                      <a href="tel:+918193856070" className="text-sm font-bold text-white hover:text-cyan-400 mt-0.5 block">
                        +91 8193856070
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Direct Email</div>
                      <a href="mailto:solutions@spacevisionlabs.com" className="text-sm font-bold text-white hover:text-cyan-400 mt-0.5 block">
                        solutions@spacevisionlabs.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Globe className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Official Website</div>
                      <a href="https://www.spacevisionlabs.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-cyan-400 mt-0.5 block">
                        www.spacevisionlabs.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-800">
                  <a
                    href="https://wa.me/918193856070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Direct WhatsApp Consultation</span>
                  </a>
                </div>
              </div>

              {/* Right Lead Form */}
              <div className="lg:col-span-7 bg-[#F4F8FC] p-8 sm:p-10 rounded-3xl border border-slate-200">
                {contactSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#040C1A] mb-2">Proposal Request Received!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                      Thank you! Your consultation request has been recorded. Our laboratory specialist will contact you shortly with 3D CAD space planning and BOQ estimate.
                    </p>
                    <button
                      onClick={() => setContactSubmitted(false)}
                      className="bg-blue-600 text-white font-bold py-2.5 px-6 rounded-full text-xs"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#040C1A] mb-2">
                      Request a Project Proposal
                    </h3>
                    <p className="text-xs text-slate-500 mb-8">
                      Fill in your facility details for space planning and itemized BOQ estimation.
                    </p>

                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Dr. / Prof. / Mr. / Ms."
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Company / Institute Name
                          </label>
                          <input
                            type="text"
                            placeholder="Organization / University"
                            value={contactForm.company}
                            onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                            className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@domain.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Phone / WhatsApp Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 XXXXX XXXXX"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Laboratory Type
                          </label>
                          <select
                            value={contactForm.labType}
                            onChange={(e) => setContactForm({ ...contactForm, labType: e.target.value })}
                            className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 cursor-pointer"
                          >
                            <option>School Science / STEAM Lab</option>
                            <option>University Chemistry / Physics Lab</option>
                            <option>Hospital & Pathology Lab</option>
                            <option>Industrial R&D / QC Testing</option>
                            <option>Cleanroom & Containment</option>
                            <option>Dental Laboratory</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Project Location / City
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Calicut, Kochi, Bangalore"
                            value={contactForm.city}
                            onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
                            className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Project Requirements / Brief
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Outline your bench linear meterage, fume hoods, chemical storage needs, or floor dimensions..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-xl outline-none focus:border-blue-500 resize-vertical"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteSubject} />
    </div>
  );
}
