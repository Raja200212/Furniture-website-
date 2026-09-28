"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import { categoryLandings } from "@/data/categoryLandings";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export default function CategoryLandingPage({ params }) {
  const { slug } = use(params);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");

  const normalizedSlug = (slug || "").toLowerCase().trim();
  const categoryData = categoryLandings[normalizedSlug] || categoryLandings["emergency-shower-eyewash"];

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject || categoryData.title);
    setQuoteModalOpen(true);
  };

  const scrollToSubcategories = () => {
    const el = document.getElementById("subcategories-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1 pt-24 pb-20">
        
        {/* Breadcrumb Bar */}
        <div className="bg-[#F8FAFC] border-b border-slate-200/80 py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/materials"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#432C7A] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#432C7A] group-hover:-translate-x-1 transition-transform" />
              <span>Back to Primary Categories</span>
            </Link>

            <div className="text-xs font-mono text-slate-500 hidden sm:flex items-center gap-2">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/materials" className="hover:text-[#432C7A] transition-colors">Categories</Link>
              <span>/</span>
              <span className="text-[#3B2D71] font-bold">{categoryData.title}</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            1. HERO SPLIT SECTION (Matching user reference template)
            ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F7FB] via-[#F8FAFC] to-[#EEF2F9] py-14 sm:py-20 border-b border-slate-200/70">
          
          {/* Subtle Poly-faceted background overlay */}
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Hero Category Product Image */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[260px] sm:h-[320px] flex items-center justify-center p-4">
                  <img
                    src={categoryData.heroImage}
                    alt={categoryData.title}
                    className="max-h-full max-w-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://spacevisionlabs.com/images/eye-washes-emergency-showers.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Right Column: Title, Description & Action Button */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B2D71] tracking-tight mb-4">
                  {categoryData.title}
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl font-normal">
                  {categoryData.heroDesc}
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button
                    type="button"
                    onClick={scrollToSubcategories}
                    className="bg-[#432C7A] hover:bg-[#32205E] active:bg-[#251648] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    VIEW PRODUCTS
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenQuote(`Inquiry: ${categoryData.title}`)}
                    className="bg-white hover:bg-slate-50 text-[#3B2D71] border border-slate-300 text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-full shadow-xs hover:border-[#3B2D71] transition-all cursor-pointer"
                  >
                    REQUEST QUOTE
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            2. MIDDLE OVERVIEW / COMPLIANCE TEXT (Centered Section)
            ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {categoryData.overviewText}
            </p>
          </div>
        </section>

        {/* =========================================================================
            3. SUB-CATEGORY / PRODUCT SERIES 3-COLUMN CARDS GRID
            ========================================================================= */}
        <section id="subcategories-section" className="py-8 sm:py-12 bg-[#FAFCFF] border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {categoryData.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white rounded-none border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#432C7A] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Image & Content */}
                  <div className="p-8 pb-6 flex flex-col items-center text-center">
                    
                    {/* Subcategory Image */}
                    <div className="h-44 w-full flex items-center justify-center mb-6 overflow-hidden">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="max-h-full max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://spacevisionlabs.com/images/eye-washes-emergency-showers.jpg";
                        }}
                      />
                    </div>

                    {/* Subcategory Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#3B2D71] group-hover:text-blue-600 transition-colors mb-3 tracking-tight min-h-[52px] flex items-center justify-center text-center">
                      {sub.title}
                    </h3>

                    {/* Subcategory Description */}
                    <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-normal max-w-xs">
                      {sub.desc}
                    </p>

                  </div>

                  {/* Rounded Purple Action Button at Bottom */}
                  <div className="p-6 pt-0 flex justify-center">
                    <Link
                      href={sub.link}
                      className="bg-[#432C7A] hover:bg-[#32205E] active:bg-[#251648] text-white text-[11px] font-bold tracking-widest uppercase px-7 py-3 rounded-full shadow-xs hover:shadow-md transition-all text-center"
                    >
                      VIEW PRODUCTS
                    </Link>
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Catalog Quick Link */}
            <div className="mt-16 text-center pt-10 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={categoryData.targetCatalogLink || "/products"}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                <span>Browse All {categoryData.mainCategory} in Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/materials"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-bold text-xs rounded-xl shadow-xs transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to All Primary Categories</span>
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <WhatsAppFloat />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={quoteSubject}
      />
    </div>
  );
}
