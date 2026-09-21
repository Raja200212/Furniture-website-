"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import { products } from "@/data/products";
import { Search, RotateCcw, ArrowRight, Box, Sparkles } from "lucide-react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");

  useEffect(() => {
    // Ensure FontAwesome icons if needed
    if (!document.getElementById("font-awesome-cdn")) {
      const link = document.createElement("link");
      link.id = "font-awesome-cdn";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
      document.head.appendChild(link);
    }
  }, []);

  // Compute categories with counts
  const categoryCounts = useMemo(() => {
    const counts = {};
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = useMemo(() => {
    return Object.keys(categoryCounts).sort();
  }, [categoryCounts]);

  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  const toggleSector = (sec) => {
    if (selectedSectors.includes(sec)) {
      setSelectedSectors(selectedSectors.filter((s) => s !== sec));
    } else {
      setSelectedSectors([...selectedSectors, sec]);
    }
  };

  const toggleMaterial = (mat) => {
    if (selectedMaterials.includes(mat)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== mat));
    } else {
      setSelectedMaterials([...selectedMaterials, mat]);
    }
  };

  const resetAllFilters = () => {
    setSelectedCategories([]);
    setSelectedSectors([]);
    setSelectedMaterials([]);
    setSearchQuery("");
    setSortOption("default");
  };

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    let list = products.filter((product) => {
      // Search
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.slug.toLowerCase().includes(q) ||
          (product.description && product.description.toLowerCase().includes(q));
        if (!matches) return false;
      }

      // Categories
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      // Sectors
      if (selectedSectors.length > 0) {
        const pSector = product.sector || [];
        const hasSectorMatch = selectedSectors.some((sec) => {
          if (sec === "Education") return product.category.includes("Education") || pSector.includes("Education") || product.name.toLowerCase().includes("school") || product.name.toLowerCase().includes("student");
          if (sec === "University") return pSector.includes("University") || product.category.includes("Benches") || product.category.includes("Air Handling");
          if (sec === "Healthcare") return product.category.includes("Healthcare") || pSector.includes("Healthcare") || product.name.toLowerCase().includes("pathology") || product.name.toLowerCase().includes("dental");
          if (sec === "Industrial") return pSector.includes("Industrial") || product.category.includes("Storage") || product.category.includes("Container");
          if (sec === "Cleanroom") return product.category.includes("Cleanroom") || product.name.toLowerCase().includes("pass-box") || product.name.toLowerCase().includes("air-shower");
          return false;
        });
        if (!hasSectorMatch) return false;
      }

      // Materials
      if (selectedMaterials.length > 0) {
        const nameLower = product.name.toLowerCase();
        const hasMatMatch = selectedMaterials.some((mat) => {
          if (mat === "Steel") return nameLower.includes("steel") || !nameLower.includes("pp");
          if (mat === "Polypropylene") return nameLower.includes("pp") || nameLower.includes("polypropylene");
          if (mat === "Stainless") return nameLower.includes("stainless");
          if (mat === "Resin") return nameLower.includes("resin") || nameLower.includes("trespa") || nameLower.includes("ceramic");
          return false;
        });
        if (!hasMatMatch) return false;
      }

      return true;
    });

    if (sortOption === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === "category") {
      list.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [searchQuery, selectedCategories, selectedSectors, selectedMaterials, sortOption]);

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FC] text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title Banner */}
          <div className="py-8 sm:py-10">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
              <span className="w-4 h-0.5 bg-blue-600"></span>
              <span>Official Product Database</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#040C1A] tracking-tight">
              Complete Laboratory Catalogue
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl mt-2 leading-relaxed">
              Explore our manufactured range of modular lab benches, containment systems, safety storage cabinets, and service fittings.
            </p>
          </div>

          {/* Catalogue Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Filter Sidebar (290px equivalent) */}
            <aside className="lg:col-span-4 xl:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs sticky top-28 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="font-extrabold text-base text-[#040C1A]">Filter Products</h3>
                <button
                  onClick={resetAllFilters}
                  className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  Reset All
                </button>
              </div>

              {/* Group 1: Primary Category */}
              <div>
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#040C1A] mb-3">
                  Primary Category
                </div>
                <ul className="space-y-2 max-h-64 overflow-y-auto pr-2 text-xs">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <label className="flex items-center justify-between text-slate-600 hover:text-slate-900 cursor-pointer py-0.5">
                        <div className="flex items-center gap-2.5">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                            className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                          />
                          <span className="font-medium">{cat}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono">({categoryCounts[cat]})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group 2: Sector / Application */}
              <div className="pt-4 border-t border-slate-100">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#040C1A] mb-3">
                  Sector / Application
                </div>
                <ul className="space-y-2 text-xs">
                  {[
                    { id: "Education", label: "Education & STEAM" },
                    { id: "University", label: "University Research" },
                    { id: "Healthcare", label: "Hospital & Pathology" },
                    { id: "Industrial", label: "Industrial QC / R&D" },
                    { id: "Cleanroom", label: "Cleanroom Facility" }
                  ].map((sec) => (
                    <li key={sec.id}>
                      <label className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 cursor-pointer py-0.5">
                        <input
                          type="checkbox"
                          checked={selectedSectors.includes(sec.id)}
                          onChange={() => toggleSector(sec.id)}
                          className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                        />
                        <span className="font-medium">{sec.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group 3: Worktop & Material */}
              <div className="pt-4 border-t border-slate-100">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#040C1A] mb-3">
                  Worktop & Material
                </div>
                <ul className="space-y-2 text-xs">
                  {[
                    { id: "Steel", label: "All-Steel Frame" },
                    { id: "Polypropylene", label: "Polypropylene (PP)" },
                    { id: "Stainless", label: "Stainless Steel" },
                    { id: "Resin", label: "Epoxy / Phenolic" }
                  ].map((mat) => (
                    <li key={mat.id}>
                      <label className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 cursor-pointer py-0.5">
                        <input
                          type="checkbox"
                          checked={selectedMaterials.includes(mat.id)}
                          onChange={() => toggleMaterial(mat.id)}
                          className="w-4 h-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                        />
                        <span className="font-medium">{mat.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>

            {/* Products Grid Area */}
            <main className="lg:col-span-8 xl:col-span-9 space-y-6">
              
              {/* Catalogue Toolbar */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Search Input Box */}
                <div className="relative w-full md:max-w-md">
                  <i className="fa-solid fa-magnifying-glass text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 text-xs"></i>
                  <input
                    type="text"
                    placeholder="Instant product search by keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-[#F4F8FC] border border-slate-200 rounded-xl text-xs outline-none focus:bg-white focus:border-blue-500 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Toolbar Meta & Sort */}
                <div className="flex items-center gap-4 text-xs w-full md:w-auto justify-between md:justify-end">
                  <span className="font-mono text-slate-500 font-bold">
                    Showing <strong className="text-[#040C1A]">{filteredProducts.length}</strong> of {products.length} items
                  </span>

                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="py-2.5 px-3 bg-white border border-slate-200 rounded-xl font-bold text-[#040C1A] outline-none cursor-pointer text-xs"
                  >
                    <option value="default">Featured Sort</option>
                    <option value="name-asc">Name (A - Z)</option>
                    <option value="name-desc">Name (Z - A)</option>
                    <option value="category">By Category</option>
                  </select>
                </div>

              </div>

              {/* Main Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between hover:-translate-y-1"
                    >
                      {/* Image Wrap with Category Tag */}
                      <div className="relative h-56 w-full bg-white p-6 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                        <span className="absolute top-3 left-3 bg-[#F4F8FC] border border-slate-200 text-[#040C1A] text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded shadow-xs z-10">
                          {product.category}
                        </span>

                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-500"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                          }}
                        />
                      </div>

                      {/* Product Card Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-extrabold text-[#040C1A] group-hover:text-blue-600 transition-colors line-clamp-1 mb-1.5">
                            {product.name}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                            {product.description}
                          </p>
                        </div>

                        {/* Product Card Footer */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-blue-600">
                          <span className="group-hover:text-blue-700">View Details</span>
                          <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform"></i>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                /* No Products Found State */
                <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs">
                  <i className="fa-solid fa-box-open text-5xl text-slate-300 mb-4 block"></i>
                  <h3 className="text-lg font-bold text-[#040C1A] mb-1">
                    No matching laboratory items found
                  </h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                    Try adjusting your filters, clearing search parameters, or browse by general category.
                  </p>
                  <button
                    onClick={resetAllFilters}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}

            </main>

          </div>
        </div>
      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteSubject} />
    </div>
  );
}
