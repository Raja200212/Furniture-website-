"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { products } from "@/data/products";
import { 
  ArrowRight, 
  ShieldCheck, 
  Flame, 
  Droplets, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Layers, 
  Box, 
  RotateCcw,
  Wind,
  Sparkle,
  Stethoscope,
  GraduationCap,
  Wrench,
  Activity,
  TableProperties,
  Armchair,
  Archive,
  Grid,
  Eye,
  X,
  ExternalLink,
  PhoneCall
} from "lucide-react";

// Category Icons & descriptions mapping
const categoryMeta = {
  "Air Handling": {
    icon: Wind,
    color: "from-cyan-500/10 to-blue-500/10 border-cyan-200 text-cyan-700",
    desc: "Critical containment, laminar flow cabinets, and chemical fume extraction workstations."
  },
  "Cleanroom": {
    icon: Sparkle,
    color: "from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-700",
    desc: "Interlocked dynamic/static pass boxes, air showers, and ISO Class cleanroom support equipment."
  },
  "Dental Furniture": {
    icon: Stethoscope,
    color: "from-teal-500/10 to-emerald-500/10 border-teal-200 text-teal-700",
    desc: "Ergonomic dental workstations, technician tables, and clinical dental laboratory benches."
  },
  "Education Furniture": {
    icon: GraduationCap,
    color: "from-amber-500/10 to-orange-500/10 border-amber-200 text-amber-700",
    desc: "Heavy-duty science classroom benches, multimedia teacher podiums, and student desks."
  },
  "Fittings & Sinks": {
    icon: Wrench,
    color: "from-sky-500/10 to-blue-500/10 border-sky-200 text-sky-700",
    desc: "PP laboratory sinks, chemical-resistant water taps, gas outlets, and emergency eyewashes."
  },
  "Healthcare & Pathology": {
    icon: Activity,
    color: "from-rose-500/10 to-pink-500/10 border-rose-200 text-rose-700",
    desc: "Clinical pathology workstations, specimen handling tables, and medical-grade stainless systems."
  },
  "Lab Benches & Workstations": {
    icon: TableProperties,
    color: "from-blue-500/10 to-violet-500/10 border-blue-200 text-blue-700",
    desc: "Modular C-frame, H-frame, and floor-mounted analytical workbenches with reagent shelving."
  },
  "Specialised Furniture": {
    icon: Armchair,
    color: "from-purple-500/10 to-fuchsia-500/10 border-purple-200 text-purple-700",
    desc: "Anti-vibration balance tables, instrument consoles, and specialized testing furniture."
  },
  "Storage & Safety": {
    icon: Archive,
    color: "from-amber-500/10 to-yellow-500/10 border-amber-200 text-amber-700",
    desc: "Flammable safety cabinets, corrosive acid lockers, gas cylinder storage, and chemical cupboards."
  },
  "Worktops & Materials": {
    icon: Grid,
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-200 text-emerald-700",
    desc: "Chemical-grade TRESPA, epoxy resin slabs, ceramic countertops, and sintered surfaces."
  },
  "Worktops & Surfaces": {
    icon: Layers,
    color: "from-blue-500/10 to-cyan-500/10 border-blue-200 text-blue-700",
    desc: "Granite balance tops, stainless steel SS304/316, laminated surfaces, and polypropylene tops."
  }
};

export default function MaterialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Worktops & Surfaces");
  const [searchQuery, setSearchQuery] = useState("");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");
  const [previewProduct, setPreviewProduct] = useState(null);

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  // Group products by category
  const groupedProducts = useMemo(() => {
    const groups = {};
    
    // Ordered custom categories
    const categoryOrder = [
      "Worktops & Surfaces",
      "Worktops & Materials",
      "Lab Benches & Workstations",
      "Air Handling",
      "Cleanroom",
      "Storage & Safety",
      "Fittings & Sinks",
      "Dental Furniture",
      "Education Furniture",
      "Healthcare & Pathology",
      "Specialised Furniture"
    ];

    categoryOrder.forEach((cat) => {
      groups[cat] = [];
    });

    products.forEach((p) => {
      const cat = p.category || "Specialised Furniture";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(p);
    });

    // Remove empty groups
    Object.keys(groups).forEach((key) => {
      if (groups[key].length === 0) delete groups[key];
    });

    return groups;
  }, []);

  const categoriesList = useMemo(() => {
    return Object.keys(groupedProducts);
  }, [groupedProducts]);

  // Filtered groups based on search & active category
  const filteredGroups = useMemo(() => {
    const result = {};
    const q = searchQuery.toLowerCase().trim();

    Object.keys(groupedProducts).forEach((cat) => {
      if (selectedCategory !== "All" && selectedCategory !== cat) {
        return;
      }

      let items = groupedProducts[cat];
      if (q) {
        items = items.filter((p) => {
          const matchesName = (p.name || "").toLowerCase().includes(q);
          const matchesCat = (p.category || "").toLowerCase().includes(q);
          const matchesDesc = (p.description || "").toLowerCase().includes(q);
          const matchesTags = (p.tags || []).some((t) => (t || "").toLowerCase().includes(q));
          return matchesName || matchesCat || matchesDesc || matchesTags;
        });
      }

      if (items.length > 0) {
        result[cat] = items;
      }
    });

    return result;
  }, [groupedProducts, selectedCategory, searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return Object.values(filteredGroups).reduce((acc, items) => acc + items.length, 0);
  }, [filteredGroups]);

  // Primary Worktop Surface Highlight Cards
  const primaryMaterials = [
    {
      id: "granite",
      productSlug: "granite-worktop",
      title: "Granite Worktop",
      tag: "NATURAL STONE",
      desc: "Heavy and dense natural stone top finished with safe rounded edges. Best for heavy testing and vibration-sensitive balance scales.",
      image: "https://spacevisionlabs.com/images/anti-vibration-balance-table.png",
      specs: "Vibration-Damping • Beveled Edge • Heavy Load Support"
    },
    {
      id: "trespa",
      productSlug: "trespa-worktop",
      title: "TRESPA Worktop",
      tag: "SOLID PHENOLIC",
      desc: "Thermosetting resins and natural fibers with superior chemical, moisture, and impact resilience.",
      image: "https://spacevisionlabs.com/images/laboratory-trespa-worktop.jpg",
      specs: "EBC Non-Porous • 50+ Reagent Resistant • ISO 9001"
    },
    {
      id: "epoxy",
      productSlug: "epoxy-resin",
      title: "Epoxy Resin",
      tag: "MOLDED MONOLITHIC",
      desc: "Monolithic composition highly resistant to aggressive chemicals, boiling acids, and direct thermal shock.",
      image: "https://spacevisionlabs.com/images/laboratory-countertops-2.png",
      specs: "Marine Anti-Drip Rim • 600°C Thermal Shock Rating"
    },
    {
      id: "ceramic",
      productSlug: "ceramic-worktop",
      title: "Sintered Industrial Ceramic",
      tag: "VITRIFIED SLAB",
      desc: "Pure natural minerals fired at 1200°C. Virtually impervious to boiling acids, solvents, and open flames.",
      image: "https://spacevisionlabs.com/images/ceramic-worktop-2.jpg",
      specs: "Zero Porosity • Flame-Proof • Unaffected by Organic Dyes"
    },
    {
      id: "stainless",
      productSlug: "stainless-steel-worktop",
      title: "SS 304 / 316 Stainless Steel",
      tag: "MEDICAL GRADE",
      desc: "Seamless welded, electropolished surface for sterile hygiene, clinical cleanrooms, and anti-static ESD dissipation.",
      image: "https://spacevisionlabs.com/images/stainless_countertop.jpg",
      specs: "Sterile Cleanroom Standard • Seamless Marine Edge"
    },
    {
      id: "pp",
      productSlug: "polypropylene-worktop",
      title: "Polypropylene (PP) Homopolymer",
      tag: "CORROSION PROOF",
      desc: "100% rust-free, zero-corrosion thermoplastic structure resistant to hydrofluoric acid (HF) and aqua regia.",
      image: "https://spacevisionlabs.com/images/school-laboratory-2.jpg",
      specs: "100% Acid Proof • Welded Construction • Wet Chemistry"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote("Category & Materials Consultation")} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
              <span className="w-4 h-0.5 bg-blue-600"></span>
              <span>Category-Wise Product Directory</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#040C1A] tracking-tight">
              Laboratory Materials & Products by Category
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">
              Explore our laboratory equipment and engineered worktop surfaces organized by specific category. Click on any category to view its complete product range.
            </p>
          </div>

          {/* Quick Category Navigation Bar & Search */}
          <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-3xl p-4 sm:p-5 mb-12 shadow-md">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-4">
              
              {/* Category selector headline */}
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                <span className="font-extrabold text-sm sm:text-base text-[#040C1A]">
                  Select Category to View Products:
                </span>
              </div>

              {/* Real-time search */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products, models, materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-[#F4F8FC] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Category Navigation Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 max-h-48 overflow-y-auto no-scrollbar py-1">
              {categoriesList.map((cat) => {
                const count = groupedProducts[cat]?.length || 0;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-600 font-bold scale-[1.02]"
                        : "bg-[#F4F8FC] hover:bg-slate-200 text-slate-700 border border-slate-200"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Status bar */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div>
                Active Category: <strong className="text-blue-600 font-bold">{selectedCategory}</strong> ({totalFilteredCount} products available)
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-1 text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear Search</span>
                </button>
              )}
            </div>
          </div>

          {/* =========================================================================
              CATEGORY-WISE PRODUCTS DISPLAY
              ========================================================================= */}
          {Object.keys(filteredGroups).length > 0 ? (
            <div className="space-y-16">
              {Object.keys(filteredGroups).map((categoryName) => {
                const items = filteredGroups[categoryName];
                const meta = categoryMeta[categoryName] || {
                  icon: Box,
                  color: "from-slate-50 to-slate-100 border-slate-200 text-slate-700",
                  desc: "Specialized laboratory systems designed for safety and efficiency."
                };
                const IconComponent = meta.icon;

                return (
                  <section 
                    key={categoryName} 
                    id={categoryName.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                    className="scroll-mt-40 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm"
                  >
                    {/* Category Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100">
                      <div className="flex items-start sm:items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5">
                            <h2 className="text-xl sm:text-2xl font-extrabold text-[#040C1A]">
                              {categoryName}
                            </h2>
                            <span className="text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded-full">
                              {items.length} {items.length === 1 ? "Product" : "Products"}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                            {meta.desc}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleOpenQuote(`${categoryName} Inquiry`)}
                        className="self-start sm:self-center bg-[#F4F8FC] hover:bg-blue-50 hover:text-blue-600 border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                      >
                        <span>Inquire Category</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Category Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {items.map((p) => (
                        <div
                          key={p.id}
                          className="bg-[#F8FAFC] rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-2xs hover:shadow-xl flex flex-col justify-between group"
                        >
                          <div>
                            {/* Product Thumbnail with Image Click Quick-View */}
                            <div 
                              onClick={() => setPreviewProduct(p)}
                              className="h-52 bg-white border-b border-slate-100 flex items-center justify-center p-4 overflow-hidden relative cursor-pointer group/img"
                            >
                              <img
                                src={p.image}
                                alt={p.name}
                                className="max-h-full max-w-full object-contain group-hover/img:scale-108 transition-transform duration-500"
                                onError={(e) => {
                                  e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                                }}
                              />
                              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                  <Eye className="w-3.5 h-3.5 text-blue-600" />
                                  <span>View Image</span>
                                </span>
                              </div>
                            </div>

                            {/* Product Info */}
                            <div className="p-4 sm:p-5">
                              <Link href={`/products/${p.slug}`} className="block">
                                <h3 className="text-sm font-extrabold text-[#040C1A] group-hover:text-blue-600 transition-colors mb-1.5 line-clamp-1">
                                  {p.name}
                                </h3>
                              </Link>
                              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                                {p.description}
                              </p>
                              {p.tags && p.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {p.tags.slice(0, 3).map((tag, idx) => (
                                    <span
                                      key={idx}
                                      className="text-[9.5px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-100"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="p-4 sm:p-5 pt-0 flex gap-2">
                            <Link
                              href={`/products/${p.slug}`}
                              className="flex-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1"
                            >
                              <span>Details</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                            <button
                              onClick={() => handleOpenQuote(p.name)}
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                            >
                              <span>Quote</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="bg-[#F4F8FC] rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto mb-20">
              <Box className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#040C1A] mb-1">No products found</h3>
              <p className="text-xs text-slate-500 mb-6">
                No items match your search &quot;{searchQuery}&quot; in the selected category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Worktops & Surfaces");
                  setSearchQuery("");
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Quick-View Product Image Modal */}
          {previewProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
              <div 
                className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setPreviewProduct(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Big Image Container */}
                <div className="bg-[#F8FAFC] p-8 sm:p-12 flex items-center justify-center border-b border-slate-200 relative min-h-[280px] sm:min-h-[360px]">
                  <img
                    src={previewProduct.image}
                    alt={previewProduct.name}
                    className="max-h-[240px] sm:max-h-[300px] max-w-full object-contain"
                  />
                  <span className="absolute top-4 left-4 text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">
                    {previewProduct.category}
                  </span>
                </div>

                {/* Modal Info & CTA */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#040C1A] mb-2">
                    {previewProduct.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {previewProduct.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/products/${previewProduct.slug}`}
                      className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 text-center"
                      onClick={() => setPreviewProduct(null)}
                    >
                      <span>Open Full Product Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => {
                        const name = previewProduct.name;
                        setPreviewProduct(null);
                        handleOpenQuote(name);
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-center"
                    >
                      <span>Request Quotation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Featured Primary Worktops Matrix Showcase */}
          <div className="mt-20 pt-16 border-t border-slate-200 mb-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                <span className="w-4 h-0.5 bg-blue-600"></span>
                <span>Surface Engineering</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#040C1A]">
                Worktop Materials & Chemical Resilience
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Engineered countertop materials tailored for thermal shock, corrosive chemicals, and static load support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {primaryMaterials.map((mat) => (
                <div
                  key={mat.id}
                  className="bg-[#F4F8FC] rounded-3xl border border-slate-200 overflow-hidden hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <Link href={`/products/${mat.productSlug}`} className="h-52 bg-white border-b border-slate-200 flex items-center justify-center p-6 overflow-hidden relative block">
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
                    </Link>

                    {/* Body */}
                    <div className="p-6">
                      <Link href={`/products/${mat.productSlug}`} className="block">
                        <h3 className="text-lg font-extrabold text-[#040C1A] hover:text-blue-600 transition-colors mb-2 flex items-center justify-between">
                          <span>{mat.title}</span>
                          <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {mat.desc}
                      </p>
                      <div className="text-[11px] font-mono text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200/80 inline-block">
                        {mat.specs}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-2">
                    <Link
                      href={`/products/${mat.productSlug}`}
                      className="flex-1 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <button
                      onClick={() => handleOpenQuote(mat.title)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>Get Quote</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chemical Resilience Guide Banner */}
          <div className="bg-gradient-to-r from-[#040C1A] via-[#0A1C38] to-[#12284C] text-white p-8 sm:p-12 rounded-3xl tech-grid-dark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
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

      <Footer onOpenQuote={() => handleOpenQuote("Category & Materials Consultation")} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteSubject} />
    </div>
  );
}
