"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  X,
  Plus
} from "lucide-react";

const heroSlides = [
  {
    image: "/industrial-lab.jpg",
    title: "Best Laboratory Equipment & Supplies In India.",
    badge: "Space Vision Lab",
    badgeLinkText: "Discover The Benefits of Space Vision Lab",
    subtitle: "Advanced Scientific Furniture, Cleanroom Systems & Analytical Instruments"
  },
  {
    image: "/hero-instruments.jpg",
    title: "High-Precision Laboratory Instruments & Analyzers.",
    badge: "Certified Precision",
    badgeLinkText: "Explore Analytical & Diagnostic Instruments",
    subtitle: "Spectrophotometers, Centrifuges, Meters & Automated Workstations"
  },
  {
    image: "/university-lab.jpg",
    title: "Modular Research Workstations & Fume Hoods.",
    badge: "Turnkey Lab Engineering",
    badgeLinkText: "View University & Industrial Workstations",
    subtitle: "Heavy-Duty Steel Frames, Epoxy Countertops & Fume Containment"
  },
  {
    image: "/healthcare-lab.jpg",
    title: "Sanitary Clinical & Pathology Furniture Systems.",
    badge: "Healthcare & Cleanrooms",
    badgeLinkText: "Explore Medical Grade Stainless Steel Solutions",
    subtitle: "ISO Class Cleanroom Equipment, Pass Boxes & Bio-Safety Cabinets"
  }
];

const quickCategories = [
  { name: "Lab Consumables & Glassware", path: "/products" },
  { name: "Liquid Handling", path: "/products" },
  { name: "Thermometers & Meters", path: "/products" },
  { name: "Modular Workstations", path: "/products" },
  { name: "Fume Hoods & Safety", path: "/products" }
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
    image: "/turnkey-discover.jpg",
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
    image: "/turnkey-design.jpg",
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
    image: "/turnkey-manufacture.jpg",
    desc: "Controlled in-house production with precision sheet metal, woodwork, and powder-coating lines.",
    points: [
      "CNC laser cutting & robotic welding lines",
      "7-tank anti-rust pre-treatment & pure epoxy",
      "Structural load compliance & QA verification"
    ]
  },
  {
    step: "04",
    title: "Deliver",
    subtitle: "Turnkey Installation & Commissioning",
    image: "/turnkey-deliver.jpg",
    desc: "Safe transport, on-site structural assembly, utility integration, and final project handover.",
    points: [
      "Crated shock-proof logistics & delivery",
      "Factory-certified mechanical & gas hookup",
      "Fume containment testing & project sign-off"
    ]
  }
];

export default function HomePage() {
  const router = useRouter();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");
  const [airTab, setAirTab] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroSearchInput, setHeroSearchInput] = useState("");
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
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const airTimer = setInterval(() => {
      setAirTab((prev) => (prev + 1) % airHandlingItems.length);
    }, 4500);
    return () => clearInterval(airTimer);
  }, [airHandlingItems.length]);

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    if (heroSearchInput.trim()) {
      router.push(`/products?search=${encodeURIComponent(heroSearchInput.trim())}`);
    } else {
      router.push(`/products`);
    }
  };

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
            1. LABFRIEND-STYLE CLEAN MODERN HERO SECTION
            ========================================================================== */}
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-[#FAFCFF] overflow-hidden border-b border-slate-100">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                
                {/* Top Badge (Labfriend Style) */}
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs hover:border-blue-400 transition-all mb-6 group cursor-pointer"
                >
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                    {heroSlides[heroSlide].badge || "Space Vision Lab"}
                  </span>
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-700 group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                    {heroSlides[heroSlide].badgeLinkText || "Discover The Benefits of Space Vision Lab"}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>

                {/* Main Bold Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.08] mb-5">
                  {heroSlides[heroSlide].title || "Best Laboratory Equipment & Supplies In India."}
                </h1>

                {/* Subtitle description */}
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-7 max-w-lg">
                  {heroSlides[heroSlide].subtitle}
                </p>

                {/* Interactive Search Bar */}
                <form onSubmit={handleHeroSearchSubmit} className="relative w-full max-w-lg mb-5">
                  <input
                    type="text"
                    value={heroSearchInput}
                    onChange={(e) => setHeroSearchInput(e.target.value)}
                    placeholder="Search through 51,000+ products..."
                    className="w-full bg-white border border-slate-200/90 rounded-xl py-3.5 pl-4 pr-12 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50/80 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    aria-label="Search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>

                {/* Quick Category Filter Pills */}
                <div className="flex flex-wrap items-center gap-2 max-w-xl">
                  {quickCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      href={cat.path}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100/90 hover:bg-blue-50 hover:text-blue-700 text-xs sm:text-[13px] font-semibold text-slate-700 border border-slate-200/60 transition-all shadow-2xs"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-blue-600 transition-colors px-2 py-1"
                  >
                    <span>View more categories</span>
                    <Plus className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

              {/* Hero Right Visual Card with Interactive Thumbnail Preview Switcher */}
              <div className="lg:col-span-6 relative">
                
                {/* Main Image Container */}
                <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100">
                  <img
                    key={heroSlide}
                    src={heroSlides[heroSlide].image}
                    alt={heroSlides[heroSlide].title}
                    className="w-full h-full object-cover transition-all duration-700 animate-in fade-in zoom-in-95"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Slide Indicators on Main Image */}
                  <div className="absolute bottom-4 left-6 flex items-center gap-2 z-10">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setHeroSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          heroSlide === idx 
                            ? "w-7 bg-white" 
                            : "w-2 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                    <button
                      onClick={() => setHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                      className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                      className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Floating Preview Thumbnail Switcher Card (Matches Reference Thumbnail) */}
                <div 
                  onClick={() => setHeroSlide((prev) => (prev + 1) % heroSlides.length)}
                  className="hidden sm:flex absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl shadow-xl border border-slate-200/90 items-center gap-3 cursor-pointer hover:shadow-2xl hover:border-blue-400 transition-all duration-300 group max-w-[260px] z-20"
                >
                  <div className="w-16 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    <img
                      src={heroSlides[(heroSlide + 1) % heroSlides.length].image}
                      alt="Next preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col text-left pr-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Next Showcase</span>
                    <span className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {heroSlides[(heroSlide + 1) % heroSlides.length].badge}
                    </span>
                    <span className="text-[11px] text-slate-500 line-clamp-1">Click to switch</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* ==========================================================================
            2. METRICS BAR
            ========================================================================== */}
        <section className="bg-[#040C1A] text-white py-8 sm:py-10 border-b border-slate-800 tech-grid-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y-0 lg:divide-x divide-slate-800">
              <div className="p-3 sm:p-4 lg:p-0 lg:px-6 border-l-3 border-blue-600 pl-3">
                <div className="text-cyan-400 font-mono font-bold text-lg sm:text-xl mb-0.5">01</div>
                <div className="font-bold text-xs sm:text-sm text-white">In-House Manufacturing</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Precision facility in Calicut</div>
              </div>

              <div className="p-3 sm:p-4 lg:p-0 lg:px-6 border-l-3 border-blue-600 pl-3">
                <div className="text-cyan-400 font-mono font-bold text-lg sm:text-xl mb-0.5">02</div>
                <div className="font-bold text-xs sm:text-sm text-white">Technical Space Planning</div>
                <div className="text-[11px] text-slate-400 mt-0.5">CAD layout & BOQ support</div>
              </div>

              <div className="p-3 sm:p-4 lg:p-0 lg:px-6 border-l-3 border-blue-600 pl-3">
                <div className="text-cyan-400 font-mono font-bold text-lg sm:text-xl mb-0.5">03</div>
                <div className="font-bold text-xs sm:text-sm text-white">Modular Systems</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Scalable C & H-Frame</div>
              </div>

              <div className="p-3 sm:p-4 lg:p-0 lg:px-6 border-l-3 border-blue-600 pl-3">
                <div className="text-cyan-400 font-mono font-bold text-lg sm:text-xl mb-0.5">04</div>
                <div className="font-bold text-xs sm:text-sm text-white">Turnkey Execution</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Brief to installation</div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. EDITORIAL INTRODUCTION (WHO WE ARE)
            ========================================================================== */}
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Visual with Floating Badge */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
                  <img
                    src="https://spacevisionlabs.com/images/c-frame-lab-bench-2.jpg"
                    alt="Space Vision Lab Engineering"
                    className="w-full h-64 sm:h-[420px] lg:h-[460px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 right-3 sm:-bottom-6 sm:-right-4 bg-blue-600 text-white p-3.5 sm:p-5 rounded-2xl shadow-xl text-center">
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold">100%</div>
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mt-0.5">Integrated Facility</div>
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
                <img src="/school-lab.jpg" alt="Schools & STEAM Laboratory Furniture" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <img src="/university-lab.jpg" alt="University Research Laboratory Furniture" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <img src="/healthcare-lab.jpg" alt="Clinics & Hospitals Laboratory Furniture" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                <img src="/industrial-lab.jpg" alt="Industrial Laboratory Furniture" className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
        <section className="py-12 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                ENGINEERING SYSTEMS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#040C1A] tracking-tight">
                Lab Workstation Series
              </h2>
              <p className="text-xs sm:text-base text-slate-600 mt-2">
                Four specialized structural platforms designed to balance load requirements, hygiene maintenance, and spatial flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              
              <div className="bg-[#F4F8FC] p-5 sm:p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
                <div className="w-full sm:w-44 h-44 bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center shrink-0">
                  <img src="https://spacevisionlabs.com/images/floor-mounted-lab-bench-2.jpg" alt="Monolithic Base" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">SERIES 01</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#040C1A] mt-1 mb-2">Monolithic Base Series</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A strong, permanent bench where the worktop sits directly on top of the cabinets. It does not need a metal frame and can hold very heavy equipment. Sits flat on the floor to eliminate dust accumulation underneath.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] p-5 sm:p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
                <div className="w-full sm:w-44 h-44 bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center shrink-0">
                  <img src="https://spacevisionlabs.com/images/h-frame-lab-bench-2.jpg" alt="Elevated Hygiene" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">SERIES 02</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#040C1A] mt-1 mb-2">Elevated Hygiene Series</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stands on heavy-duty H-frame steel assemblies, lifting cabinets off the ground so floors can be washed down thoroughly. Ideal for hospital and clinical environments.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] p-5 sm:p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
                <div className="w-full sm:w-44 h-44 bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center shrink-0">
                  <img src="https://spacevisionlabs.com/images/c-frame-lab-bench-2.jpg" alt="Cantilevered Clearance" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">SERIES 03</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#040C1A] mt-1 mb-2">Cantilevered Clearance Series</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Features C-frame structural clearance allowing suspended or hanging under-bench units to slide or hook effortlessly without disrupting desktop utilities.
                  </p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] p-5 sm:p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
                <div className="w-full sm:w-44 h-44 bg-white rounded-2xl border border-slate-200 p-3 flex items-center justify-center shrink-0">
                  <img src="https://spacevisionlabs.com/images/mobile-storage-cabinets-on-wheel.jpg" alt="Omni-Directional Mobile" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600">SERIES 04</span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#040C1A] mt-1 mb-2">Omni-Directional Mobile Series</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dynamic research bench platforms mounted on heavy-duty lockable castors. Easily deployed, locked in position, or reconfigured for agile lab procedures.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
            6. AIR HANDLING & CRITICAL CONTAINMENT (COMMENTED OUT)
            ========================================================================== */}
        {/*
        <section className="py-12 sm:py-20 bg-[#040C1A] text-white relative tech-grid-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                  CONTAINMENT & VENTILATION
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
                  Air Handling Workstations
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                  Specialized negative-pressure and clean air systems ensuring personnel safety and contamination-free sample handling.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {airHandlingItems.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setAirTab(idx)}
                      className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                        airTab === idx
                          ? "bg-blue-600/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/10"
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-sm sm:text-base text-white">{item.title}</h4>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                          airTab === idx ? "bg-cyan-400 text-[#040C1A]" : "bg-white/10 text-slate-400"
                        }`}>
                          0{idx + 1}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">{item.desc}</p>

                      {airTab === idx && (
                        <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-[progress_4.5s_linear]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-[#0A1C38] rounded-3xl border border-slate-700/80 p-5 sm:p-8 shadow-2xl relative overflow-hidden">
                  
                  <div className="bg-white rounded-2xl p-4 sm:p-6 h-56 sm:h-72 flex items-center justify-center mb-5 sm:mb-6 overflow-hidden">
                    <img
                      key={airTab}
                      src={airHandlingItems[airTab].img}
                      alt={airHandlingItems[airTab].title}
                      className="max-h-full max-w-full object-contain animate-in fade-in zoom-in-95 duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">
                      {airHandlingItems[airTab].title}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-1 rounded-md">
                      0{airTab + 1} / 0{airHandlingItems.length}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 sm:mb-5">
                    {airHandlingItems[airTab].desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {airHandlingItems[airTab].pills.map((p, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/10 border border-white/15 text-white text-[9.5px] sm:text-[10px] font-mono rounded-full font-semibold">
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center gap-2">
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
        */}

        {/* ==========================================================================
            7. WORKTOP MATERIALS EXPLORER
            ========================================================================== */}
        <section className="py-12 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                SURFACES & CHEMISTRY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#040C1A] tracking-tight">
                Lab Worktop / Countertop Materials
              </h2>
              <p className="text-xs sm:text-base text-slate-600 mt-2">
                Select from our catalogue-identified work surfaces to match exact thermal, chemical, and physical stress demands.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <Link 
                href="/products?category=Worktops%20%26%20Materials" 
                className="bg-[#F4F8FC] hover:bg-white rounded-3xl border border-slate-200 hover:border-blue-500 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-100 relative flex items-center justify-center p-6">
                    <img 
                      src="https://spacevisionlabs.com/images/laboratory-trespa-worktop.jpg" 
                      alt="TRESPA TopLab Worktop" 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100 font-mono text-[10px] font-bold uppercase tracking-wider mb-2.5">
                      CHEMICAL RESISTANT PHENOLIC
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#040C1A] group-hover:text-blue-600 transition-colors mb-2 flex items-center justify-between">
                      <span>TRESPA TopLab® / Solid Epoxy Worktop</span>
                      <ArrowRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      High-performance monolithic epoxy and solid phenolic resin surfaces engineered with electron-beam curing for supreme resistance against 140+ acids, alkalis, stains, moisture, and high thermal stress.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600 mb-2">
                      <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg">Acid & Solvent Proof</span>
                      <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg">Non-Porous Hygiene</span>
                      <span className="bg-white border border-slate-200 px-3 py-1 rounded-lg">Impact & Thermal Endurance</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 sm:px-8 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1.5 group-hover:underline">
                    View Worktop Products <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Explore all surfaces in <span className="text-blue-600 font-medium">Worktops & Materials</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            8. PRODUCT DISCOVERY SECTION (COMMENTED OUT)
            ========================================================================== */}
        {/*
        <section className="py-12 sm:py-20 bg-[#F4F8FC] border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">
                PRODUCT DISCOVERY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#040C1A] tracking-tight">
                Explore the Laboratory System
              </h2>
              <p className="text-xs sm:text-base text-slate-600 mt-2">
                Browse from our comprehensive range of manufactured laboratory components and safety units.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-sm mb-8 sm:mb-10 space-y-4">
              
              <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center justify-between">
                
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

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-end">
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                    Showing <strong className="text-[#040C1A]">{featuredProducts.length}</strong> items
                  </span>

                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 bg-[#040C1A] hover:bg-blue-600 text-white text-[11px] sm:text-xs font-bold px-3.5 sm:px-4 py-2 rounded-xl transition-all shadow-sm hover:shadow-blue-500/25 shrink-0"
                  >
                    <span>View All 148+</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleOpenQuote(p.name)}
                  className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between active:scale-[0.99]"
                >
                  <div className="h-44 sm:h-48 w-full bg-slate-50 rounded-xl p-4 flex items-center justify-center mb-3">
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

            <div className="text-center mt-10 sm:mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#040C1A] hover:bg-blue-600 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs transition-all shadow-md text-center"
              >
                <span>Open Complete 112+ Product Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        */}

        {/* ==========================================================================
            9. TURNKEY PROCESS ROADMAP
            ========================================================================== */}
        <section className="py-12 sm:py-20 bg-[#040C1A] text-white tech-grid-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                TURNKEY EXECUTION
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                From Brief to Laboratory
              </h2>
              <p className="text-xs sm:text-base text-slate-300 mt-2">
                A structured four-step methodology ensuring flawless laboratory installation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {turnkeySteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#0A1A33]/80 hover:bg-[#0E2244] border border-white/10 hover:border-blue-500/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col group"
                >
                  {/* Card Top Image Showcase */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A33] via-black/30 to-transparent" />
                    
                    {/* Glowing Number Badge */}
                    <div className="absolute top-3.5 left-3.5 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-blue-600/90 backdrop-blur-md text-white font-mono font-extrabold text-sm sm:text-base flex items-center justify-center shadow-lg shadow-blue-600/50 border border-blue-400/40">
                      {step.step}
                    </div>

                    {/* Step Phase Tag */}
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-400 border border-cyan-400/30">
                      Phase {step.step}
                    </div>
                  </div>

                  {/* Card Body & Rich Details */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-300/90 mb-3 font-mono">
                        {step.subtitle}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4 sm:mb-5">
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
            <div className="mt-10 sm:mt-12 text-center">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 sm:px-7 py-3.5 rounded-full text-xs transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
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
        <section className="py-12 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Contact Card */}
              <div className="lg:col-span-5 bg-[#0A1C38] text-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden tech-grid-dark">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                  LET'S PLAN YOUR SPACE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 sm:mb-4">
                  Let's Plan Your Laboratory.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 sm:mb-8">
                  Whether fitting out a single classroom laboratory or an entire research floor, Space Vision Lab can understand the brief, assess the space and develop a proposal built around how the laboratory will actually be used.
                </p>

                <div className="space-y-4 sm:space-y-6 text-xs text-slate-300">
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

                <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-slate-800">
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
              <div className="lg:col-span-7 bg-[#F4F8FC] p-6 sm:p-10 rounded-3xl border border-slate-200">
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
