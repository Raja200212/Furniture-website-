"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

const RAW_IMAGE_FILES = [
  "1-pass-box.jpg", "2-air-shower-pass-box-dynamic.png", "20gp-container-laboratory1.jpg", "40hq-container-laboratory1.jpg",
  "60gal-227l-ventilated-flammable-storage-cabinet.jpg", "90gal-340l.jpg", "340l-weak-corrosive-storage-cabinet.jpg",
  "634d6c29eacab98c22015b27514a4c82.jpg", "0805f69453c9ebccad964d43ffec990e.jpg", "1234-outlet-lab-water-faucet.jpg",
  "air-shower-price.jpg", "all-steel-rhombus-reagent-racks-2.jpg", "all-steel-wall-cupboards.jpg", "aluminum-glass.png",
  "anti-static-load-bearing-fitter-benchs1.jpg", "anti-vibration-balance-table.png", "anti-vibration-table-bt-01.jpg",
  "base-cabinet.jpg", "bench-mounted-laboratory-water-taps.jpg", "c-frame-lab-bench-2.jpg", "ceramic-worktop-2.jpg",
  "clean-room-booth.jpg", "clean-room-pass-box-3.png", "clean-room-shower-air.png", "d83caa64252c20b61898897cb9c37518.jpg",
  "dental-bench.png", "double-cylinder-cabinet.jpg", "double-door-steel-vessel-cabinet.jpg", "drum-safety-cabinet.jpg",
  "dry-slide-cabinet.jpg", "dt-01-dental-lab-workstation.jpg", "dt-02-portable-dental-lab-benches.jpg", "dt-03-dental-lab-tables.jpg",
  "dt-04-dental-office-lab-table-furniture.jpg", "dt-05-dental-lab-work-bench.jpg", "ductless-benchtop-fume-hood.jpg",
  "ductless-hazardous-chemical-cabinets.jpg", "ead7ecdbd263c6d04a691b477a44e4b5.jpg", "easy-to-install-medicine-cabinet.jpg",
  "electric-mobile-shelving.png", "electronics-laboratory-furniture.jpg", "esd-steel-vessel-cabinet.jpg",
  "eye-washes-emergency-showers.jpg", "flammable-liquid-cabinet.jpg", "flammable-poison-storage-cabinet-supplier-2.jpg",
  "floor-mounted-lab-bench-2.jpg", "floor-mounted-lab-corner-cabinet.png", "floor-mounted-lab-sink-cabinet-2.png",
  "flow-hood-laminar.jpg", "gas-cylinder-cabinets-5.jpg", "gas-tap-laboratory.jpg", "guangzhou-factory-fume-hoods.jpg",
  "h-frame-lab-bench-2.jpg", "h-frame-lab-bench-4.jpg", "hbc-11160.jpg", "healthcare-cabinet.jpg",
  "hexagonal-lab-table-for-students-3.jpg", "higher-strength-acid-base-experiments.jpg", "intelligent-automatic-mobile-shelving.png",
  "intelligent-hazardous-chemical-cabinet.jpg", "l-shaped-floor-lab-desk.png", "l-shaped-workbench-with-drawers.png",
  "lab-gas-faucet.jpg", "lab-gooseneck-sink-assay-faucet.jpg", "lab-hot-and-cold-water-mixer-tap-2.jpg", "lab-pure-water-tap.jpg",
  "lab-sink-price.jpg", "lab-sink-stainless-steel.jpg", "lab-sink-water-tap.jpg", "lab-steel-vessel-cabinet.jpg",
  "lab-storage-cabinets-for-schools.jpg", "lab-taps.jpg", "lab-water-mixer-tap.jpg", "lab-water-outlet.jpg",
  "lab-water-tap-for-workbench.jpg", "lab-water-tap-price-4.jpg", "laboratory-countertops-2.png", "laboratory-eye-wash-and-water-tap-2.jpg",
  "laboratory-faucets.jpg", "laboratory-mixer-tap.jpg", "laboratory-pp-countertops.png", "laboratory-scrubber233.jpg",
  "laboratory-sink-cover.jpg", "laboratory-sink-poly.jpg", "laboratory-sink-price-philippines.jpg", "laboratory-sink-specification.jpg",
  "laboratory-sink-tap-4.jpg", "laboratory-sink-tap-supplier-2.jpg", "laboratory-sinks.jpg", "laboratory-trespa-worktop.jpg",
  "laboratory-water-fitting.jpg", "laboratory-water-tap-for-sink.jpg", "laminar-flow-cabinet-vertical-ventilation.jpg",
  "lpg-lab-taps.jpg", "manual-mobile-shelving.png", "medical-storage-cabinet.jpg", "medicine-cabinet-13.jpg",
  "mobile-storage-cabinets-on-wheel.jpg", "moular-bench-for-testing.jpg", "multimedia-teacher-podium-2.jpg",
  "paraffin-block-cabinet.jpg", "pathology-slide-storage-cabinet.jpg", "pathology-workstation.jpg",
  "perchloric-acid-fume-hood-chemical-laboratory.jpg", "pesticide-storage-cabinet.jpg", "phenolic-resin-countertop-3.jpg",
  "pmc-01-3.png", "polypropylene-fumehood.png", "pp-construction.jpg", "pp-lab-bench-4.jpg", "pp-laboratory-sink.jpg",
  "pp-material-strong-corrosive-storage-cabinet.jpg", "pp-reagent-shelve.png", "rust-proof-medicine-cabinet.jpg",
  "safety-storage-cabinet.jpg", "school-laboratory-2.jpg", "school-laboratory-furniture-supplier-2.jpg",
  "school-students-benches-2.jpg", "single-cylinder-cabinet.jpg", "stainless-steel-construction.jpg",
  "stainless-steel-lab-benches-2.jpg", "stainless-steel-lab-water-tap-2.jpg", "stainless-steel-laboratory-sink-cabinet.jpg",
  "stainless-steel-medical-cabinet.jpg", "stainless-steel-medicine-cabinet.jpg", "stainless-steel-reagent-shelve.png",
  "stainless_countertop.jpg", "steel-chemical-storage-cabinet.jpg", "steel-glass-reagent-racks-5.png",
  "steel-glass-rhombus-reagent-racks.jpg", "steel-medicine-cabinet.jpg", "steel-medicine-storage-cabinet.jpg",
  "steel-reagent-cabinet.jpg", "steel-reagent.jpg", "steel-storage-cabinet-2.jpg", "steel-vessel-cabinet-unique-structure.jpg",
  "student-lab-table-5.jpg", "supplies-laboratory-tables.png", "swan-neck-lab-taps.jpg", "two-handle-laboratory-water-faucet-2.jpg",
  "unique-structure-steel-vessel-cabinet.jpg", "vav-fume-hood.jpg", "walk-in-fume-hood.jpg", "water-faucet.jpg",
  "water-tap-laborator.jpg", "water-tap.jpg", "weight-capacity-lab-storage-cabinet.jpg", "wooden-wall-cupboard.jpg"
];

function generateProducts() {
  const IMAGE_BASE = "https://spacevisionlabs.com/images/";
  return RAW_IMAGE_FILES.map((filename, index) => {
    let cleanBase = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    let slug = cleanBase.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    let name = "";
    let category = "Laboratory Benches";
    let sector = ["University", "Industrial"];
    let material = "Steel";
    let featured = false;

    if (/^[0-9a-f]{20,}/i.test(cleanBase) || /^hbc-\d+/i.test(cleanBase)) {
      name = `Laboratory Furniture Component #${index + 1}`;
      category = "Workstations";
    } else {
      name = cleanBase
        .replace(/^[0-9]+-/, '')
        .replace(/-\d+$/, '')
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    }

    const lower = filename.toLowerCase();
    if (lower.includes('fume-hood') || lower.includes('fumehood') || lower.includes('laminar') || lower.includes('flow-hood') || lower.includes('scrubber')) {
      category = "Fume Hoods & Air Handling";
      sector = ["University", "Industrial", "Healthcare"];
    } else if (lower.includes('pass-box') || lower.includes('clean-room') || lower.includes('air-shower') || lower.includes('pmc-01')) {
      category = "Cleanroom Solutions";
      sector = ["Cleanroom", "Healthcare", "Industrial"];
    } else if (lower.includes('cabinet') || lower.includes('cupboard') || lower.includes('storage') || lower.includes('vessel') || lower.includes('shelving')) {
      category = "Storage & Safety Cabinets";
      sector = ["University", "Industrial", "Healthcare", "Education"];
    } else if (lower.includes('tap') || lower.includes('faucet') || lower.includes('fitting') || lower.includes('eye-wash') || lower.includes('shower')) {
      category = "Fittings & Safety";
      sector = ["University", "Industrial", "Education", "Healthcare"];
    } else if (lower.includes('sink')) {
      category = "Sinks & Wastage";
      sector = ["University", "Industrial", "Healthcare"];
    } else if (lower.includes('countertop') || lower.includes('worktop')) {
      category = "Countertops & Surfaces";
    } else if (lower.includes('school') || lower.includes('student') || lower.includes('teacher') || lower.includes('hexagonal')) {
      category = "School & Education";
      sector = ["Education"];
    } else if (lower.includes('dental') || lower.includes('pathology') || lower.includes('slide') || lower.includes('paraffin') || lower.includes('medicine')) {
      category = "Healthcare & Pathology";
      sector = ["Healthcare"];
    } else if (lower.includes('container-laboratory')) {
      category = "Specialised Solutions";
      sector = ["Industrial"];
    } else if (lower.includes('anti-vibration')) {
      category = "Anti-Vibration & Support";
      sector = ["University", "Industrial"];
    }

    if (lower.includes('pp-') || lower.includes('polypropylene')) material = "Polypropylene";
    else if (lower.includes('stainless')) material = "Stainless";
    else if (lower.includes('resin') || lower.includes('trespa') || lower.includes('ceramic')) material = "Resin";

    if (index % 12 === 0 || lower.includes('pass-box') || lower.includes('fume-hood') || lower.includes('c-frame')) featured = true;

    return {
      id: `svl-prod-${index + 1}`,
      slug: slug,
      name: name,
      filename: filename,
      category: category,
      sector: sector,
      material: material,
      image: IMAGE_BASE + filename,
      description: `Engineered laboratory equipment configured for high durability, structural modularity, and compliance with project workflow layouts.`,
      featured: featured
    };
  });
}

const PRODUCTS = generateProducts();

export default function SpaceVisionLab002Page() {
  const [activeView, setActiveView] = useState("home");
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (!document.getElementById("font-awesome-cdn")) {
      const link = document.createElement("link");
      link.id = "font-awesome-cdn";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
      document.head.appendChild(link);
    }
  }, []);

  const categories = useMemo(() => {
    return [...new Set(PRODUCTS.map((p) => p.category))].sort();
  }, []);

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((product) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase().trim();
        const matches =
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.filename.toLowerCase().includes(query);
        if (!matches) return false;
      }
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
      if (selectedSectors.length > 0 && !product.sector.some((s) => selectedSectors.includes(s))) return false;
      if (selectedMaterials.length > 0 && !selectedMaterials.includes(product.material)) return false;
      return true;
    });

    if (sortOption === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortOption === "name-desc") list.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortOption === "category") list.sort((a, b) => a.category.localeCompare(b.category));

    return list;
  }, [searchQuery, selectedCategories, selectedSectors, selectedMaterials, sortOption]);

  const featuredHomeProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.featured).slice(0, 8);
  }, []);

  const selectedProduct = useMemo(() => {
    if (!selectedProductSlug) return null;
    return PRODUCTS.find((p) => p.slug === selectedProductSlug) || PRODUCTS[0];
  }, [selectedProductSlug]);

  const openQuote = (subject = "") => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  const handleOpenProduct = (slug) => {
    setSelectedProductSlug(slug);
    setActiveView("product-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleSector = (sector) => {
    if (selectedSectors.includes(sector)) {
      setSelectedSectors(selectedSectors.filter((s) => s !== sector));
    } else {
      setSelectedSectors([...selectedSectors, sector]);
    }
  };

  const toggleMaterial = (mat) => {
    if (selectedMaterials.includes(mat)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== mat));
    } else {
      setSelectedMaterials([...selectedMaterials, mat]);
    }
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSectors([]);
    setSelectedMaterials([]);
    setSearchQuery("");
    setSortOption("default");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B111D]">
      {/* Top Banner */}
      <div className="bg-[#040C1A] text-white px-4 py-2.5 flex items-center justify-between text-xs border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
            <i className="fa-solid fa-arrow-left"></i> Return to Main Next.js App
          </Link>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-400 hidden sm:inline">Space Vision Lab 002 Experience</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+918193856070" className="hover:text-blue-400 font-bold">
            <i className="fa-solid fa-phone"></i> +91 8193856070
          </a>
        </div>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 left-0 w-full bg-white z-40 border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-800">
            <button
              onClick={() => { setActiveView("solutions"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${activeView === "solutions" ? "text-blue-600" : ""}`}
            >
              Solutions
            </button>
            <button
              onClick={() => { setActiveView("products"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${activeView === "products" ? "text-blue-600" : ""}`}
            >
              Products Catalogue
            </button>
            <button
              onClick={() => { setActiveView("workstations"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${activeView === "workstations" ? "text-blue-600" : ""}`}
            >
              Workstations
            </button>
          </nav>

          <div 
            onClick={() => { setActiveView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="cursor-pointer"
          >
            <img
              src="/logo.png"
              alt="Space Vision Lab"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="font-black text-sm tracking-wider text-[#040C1A] leading-none uppercase">
                SPACE VISION LAB
              </span>
              <span className="text-[8px] tracking-widest text-slate-500 font-bold uppercase mt-0.5">
                LABORATORY FURNITURE SOLUTIONS
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-800">
            <button
              onClick={() => { setActiveView("materials"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${activeView === "materials" ? "text-blue-600" : ""}`}
            >
              Materials
            </button>
            <button
              onClick={() => { setActiveView("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${activeView === "services" ? "text-blue-600" : ""}`}
            >
              Services
            </button>
            <button
              onClick={() => { setActiveView("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${activeView === "contact" ? "text-blue-600" : ""}`}
            >
              Contact
            </button>
            <button
              onClick={() => openQuote()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Request Quote
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-xl text-slate-800"
          >
            <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-xl flex flex-col gap-3 font-bold text-sm">
            <button onClick={() => { setActiveView("home"); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-100">Home</button>
            <button onClick={() => { setActiveView("products"); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-100">Products Catalogue</button>
            <button onClick={() => { setActiveView("solutions"); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-100">Sector Solutions</button>
            <button onClick={() => { setActiveView("workstations"); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-100">Workstation Series</button>
            <button onClick={() => { setActiveView("materials"); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-100">Materials & Countertops</button>
            <button onClick={() => { setActiveView("services"); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-100">Turnkey Services</button>
            <button onClick={() => { setActiveView("contact"); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-slate-100">Contact Us</button>
            <button onClick={() => { setMobileMenuOpen(false); openQuote(); }} className="bg-[#0A1C38] text-white py-3 rounded-xl font-bold mt-2">Request Consultation</button>
          </div>
        )}
      </header>

      {/* Main Dynamic View Controller */}
      <main className="flex-1">
        
        {/* VIEW: HOME */}
        {activeView === "home" && (
          <div>
            <section className="py-16 md:py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-mono font-bold text-blue-700 uppercase mb-6 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                      SPACE VISION LAB • SMART DURABLE & FUNCTIONAL
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1C38] tracking-tight leading-tight mb-6">
                      Laboratories Designed for Better Work.
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                      Smart, durable and functional laboratory furniture systems engineered around how your space actually works. Complete turnkey manufacturing under one roof.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => { setActiveView("products"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer text-sm"
                      >
                        <span>Explore Products</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                      <a
                        href="https://wa.me/918193856070?text=Hello%20Space%20Vision%20Lab,%20I%20would%20like%20to%20plan%20a%20laboratory%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center gap-2 text-sm"
                      >
                        <i className="fa-brands fa-whatsapp text-lg"></i>
                        <span>Direct WhatsApp Chat</span>
                      </a>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="rounded-3xl p-3 bg-white border border-slate-200 shadow-2xl overflow-hidden">
                      <img
                        src="https://productimages.withfloats.com/actual/68a88c7de1493bda3146b398.png"
                        alt="Space Vision Lab Advanced Laboratory Workspace"
                        className="w-full h-[420px] object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Metrics Bar */}
            <section className="bg-[#040C1A] text-white py-10 border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                  <div className="p-4">
                    <div className="text-cyan-400 font-mono font-bold text-2xl mb-1">01</div>
                    <div className="font-bold text-sm">In-House Manufacturing</div>
                    <div className="text-xs text-slate-400">Precision facility in Calicut, Kerala</div>
                  </div>
                  <div className="p-4">
                    <div className="text-cyan-400 font-mono font-bold text-2xl mb-1">02</div>
                    <div className="font-bold text-sm">Technical Space Planning</div>
                    <div className="text-xs text-slate-400">CAD layout drawings & BOQ support</div>
                  </div>
                  <div className="p-4">
                    <div className="text-cyan-400 font-mono font-bold text-2xl mb-1">03</div>
                    <div className="font-bold text-sm">Modular Systems</div>
                    <div className="text-xs text-slate-400">Scalable C-Frame & H-Frame benches</div>
                  </div>
                  <div className="p-4">
                    <div className="text-cyan-400 font-mono font-bold text-2xl mb-1">04</div>
                    <div className="font-bold text-sm">Turnkey Execution</div>
                    <div className="text-xs text-slate-400">From brief to final installation</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Product Discovery */}
            <section className="py-20 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-2">PRODUCT DISCOVERY</span>
                    <h2 className="text-3xl font-extrabold text-[#0A1C38]">Explore the Laboratory System</h2>
                  </div>
                  <button
                    onClick={() => { setActiveView("products"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 underline cursor-pointer"
                  >
                    View Complete 112+ Product Catalog →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredHomeProducts.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleOpenProduct(p.slug)}
                      className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="h-48 w-full bg-slate-50 rounded-xl p-4 flex items-center justify-center mb-3">
                        <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">{p.category}</span>
                        <h4 className="text-sm font-bold text-[#0A1C38] mt-1 mb-1 line-clamp-1">{p.name}</h4>
                        <p className="text-xs text-slate-500 line-clamp-2">{p.description}</p>
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                        <span>View Details</span>
                        <i className="fa-solid fa-arrow-right text-[10px]"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW: PRODUCTS */}
        {activeView === "products" && (
          <section className="py-12 bg-slate-50 min-h-[80vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">OFFICIAL DATABASE</span>
                <h1 className="text-3xl font-extrabold text-[#0A1C38]">Complete Laboratory Catalogue</h1>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                <aside className="hidden lg:block bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="font-bold text-sm text-[#0A1C38]">Filter Products</h3>
                    <button onClick={resetFilters} className="text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer">Reset All</button>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-3">Category</h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                      {categories.map((cat) => (
                        <label key={cat} className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="rounded text-blue-600"
                          />
                          <span>{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </aside>

                <div className="lg:col-span-3 space-y-6">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <input
                      type="text"
                      placeholder="Search products by keyword..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full sm:max-w-md px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:bg-white focus:border-blue-500"
                    />
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end text-xs">
                      <button
                        onClick={() => setMobileFiltersOpen(true)}
                        className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-[#040C1A] font-bold rounded-xl text-xs transition-colors"
                      >
                        <i className="fa-solid fa-sliders text-blue-600"></i>
                        <span>Filters</span>
                        {(selectedCategories.length + selectedSectors.length + selectedMaterials.length) > 0 && (
                          <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center font-bold">
                            {selectedCategories.length + selectedSectors.length + selectedMaterials.length}
                          </span>
                        )}
                      </button>
                      <span className="text-slate-500 hidden sm:inline">Showing <strong>{filteredProducts.length}</strong> items</span>
                      <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="py-2 px-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 outline-none"
                      >
                        <option value="default">Featured</option>
                        <option value="name-asc">Name A-Z</option>
                        <option value="name-desc">Name Z-A</option>
                        <option value="category">Category</option>
                      </select>
                    </div>
                  </div>

                  {/* Mobile Slide-Over Filter Drawer */}
                  {mobileFiltersOpen && (
                    <div className="fixed inset-0 z-[2500] lg:hidden">
                      <div
                        className="fixed inset-0 bg-[#040C1A]/70 backdrop-blur-xs transition-opacity"
                        onClick={() => setMobileFiltersOpen(false)}
                      />
                      <div className="fixed inset-y-0 left-0 max-w-[340px] w-full bg-white shadow-2xl z-10 flex flex-col p-6 overflow-y-auto">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                          <h3 className="font-extrabold text-base text-[#040C1A]">Filter Products</h3>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={resetFilters}
                              className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                            >
                              Reset All
                            </button>
                            <button
                              onClick={() => setMobileFiltersOpen(false)}
                              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200"
                            >
                              &times;
                            </button>
                          </div>
                        </div>

                        <div className="py-5 space-y-6 flex-1">
                          <div>
                            <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider mb-3">
                              Category ({categories.length})
                            </h4>
                            <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                              {categories.map((cat) => (
                                <label key={cat} className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => toggleCategory(cat)}
                                    className="rounded text-blue-600 w-4 h-4"
                                  />
                                  <span>{cat}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                          <button
                            onClick={() => setMobileFiltersOpen(false)}
                            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-sm shadow-md"
                          >
                            Apply Filters ({filteredProducts.length} Results)
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleOpenProduct(p.slug)}
                        className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div className="h-48 w-full bg-slate-50 rounded-xl p-4 flex items-center justify-center mb-3">
                          <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">{p.category}</span>
                          <h4 className="text-sm font-bold text-[#0A1C38] mt-1 mb-1 line-clamp-1">{p.name}</h4>
                          <p className="text-xs text-slate-500 line-clamp-2">{p.description}</p>
                        </div>
                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                          <span>View Details</span>
                          <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* VIEW: PRODUCT DETAIL */}
        {activeView === "product-detail" && selectedProduct && (
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setActiveView("products")}
                className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 bg-slate-100 px-4 py-2 rounded-full cursor-pointer"
              >
                <i className="fa-solid fa-arrow-left"></i>
                <span>Back to Catalogue</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex items-center justify-center min-h-[400px]">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-[380px] max-w-full object-contain" />
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">{selectedProduct.category}</span>
                  <h1 className="text-3xl font-extrabold text-[#0A1C38] mt-2 mb-4">{selectedProduct.name}</h1>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{selectedProduct.description}</p>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-8 space-y-2 text-xs">
                    <div className="font-bold text-slate-800 uppercase text-[11px] mb-2">Technical Specifications</div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Material Standard</span>
                      <span className="font-bold text-slate-800">{selectedProduct.material} Grade</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Manufacturing Base</span>
                      <span className="font-bold text-slate-800">Calicut, Kerala Facility</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => openQuote(selectedProduct.name)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                      <span>Request Quotation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#040C1A] text-white py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-white rounded-xl p-1 shrink-0 flex items-center justify-center shadow-sm">
                <img src="/logo.png" alt="Space Vision Lab" className="h-full w-full object-contain" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black text-sm tracking-wider text-white leading-none uppercase">
                  SPACE VISION LAB
                </span>
                <span className="text-[8px] tracking-widest text-slate-400 font-bold uppercase mt-0.5">
                  LABORATORY FURNITURE SOLUTIONS
                </span>
              </div>
            </div>
            <span className="text-slate-400">© {new Date().getFullYear()} Space Vision Lab Private Limited.</span>
          </div>
          <div className="text-slate-400 flex items-center gap-6">
            <span>Calicut, Kerala, India</span>
            <span>+91 8193856070</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918193856070"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-2xl"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Quote Modal */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full relative shadow-2xl border border-slate-200">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-lg cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">PROJECT CONSULTATION</span>
            <h3 className="text-xl font-extrabold text-[#0A1C38] mb-1">
              {quoteSubject ? `Inquire About: ${quoteSubject}` : "Request Quotation & Layout Planning"}
            </h3>
            <p className="text-xs text-slate-500 mb-6">Submit your requirements and our engineers will prepare a technical layout review and BOQ proposal.</p>

            <form onSubmit={(e) => { e.preventDefault(); setQuoteModalOpen(false); alert("Enquiry submitted successfully!"); }} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input type="text" required placeholder="Name" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Email *</label>
                <input type="email" required placeholder="name@domain.com" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone *</label>
                <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none" />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Requirements</label>
                <textarea rows={3} placeholder="Specify linear bench length or room dimensions..." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
