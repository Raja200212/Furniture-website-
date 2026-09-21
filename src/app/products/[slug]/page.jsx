"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import { products } from "@/data/products";

export default function ProductDetailPage({ params }) {
  const { slug } = use(params);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");

  useEffect(() => {
    if (!document.getElementById("font-awesome-cdn")) {
      const link = document.createElement("link");
      link.id = "font-awesome-cdn";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
      document.head.appendChild(link);
    }
  }, []);

  const product = products.find((p) => p.slug === slug) || products[0];

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  const fallbackProducts = relatedProducts.length >= 4 
    ? relatedProducts 
    : products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject || product.name);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back to Catalogue Navigation */}
          <div className="py-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-[#040C1A] text-xs font-bold rounded-lg shadow-xs transition-all"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back to Products Catalogue</span>
            </Link>
          </div>

          {/* Product Detail Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4 mb-20">
            
            {/* Left Detail Gallery */}
            <div className="lg:col-span-6 bg-[#F4F8FC] border border-slate-200 rounded-3xl p-10 flex items-center justify-center min-h-[480px] sticky top-28">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[420px] max-w-full object-contain hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                }}
              />
            </div>

            {/* Right Details & Specs */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 font-mono text-xs font-bold uppercase tracking-wider rounded-md mb-4 self-start">
                {product.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#040C1A] tracking-tight leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Technical Specifications Card */}
              <div className="bg-[#F4F8FC] border border-slate-200 rounded-2xl p-6 mb-8">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#040C1A] mb-2">
                  Technical Specifications
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom dimensions, structural load ratings, utility service integration, and chemical resistance finishes are configured based on individual project floor plans and BOQ requirements.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleOpenQuote(product.name)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Quotation</span>
                  <i className="fa-solid fa-paper-plane text-xs"></i>
                </button>

                <a
                  href={`https://wa.me/918193856070?text=Hi%20Space%20Vision%20Lab,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-xl text-xs transition-all shadow-md flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                  <span>Talk to Specialist</span>
                </a>
              </div>
            </div>

          </div>

          {/* Related Products Strip: You May Also Need */}
          <div className="pt-14 border-t border-slate-200">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              <span className="w-4 h-0.5 bg-blue-600"></span>
              <span>Modular Complements</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#040C1A] mb-8">
              You May Also Need
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fallbackProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500 transition-all flex flex-col justify-between hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full bg-white p-6 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                    <span className="absolute top-3 left-3 bg-[#F4F8FC] border border-slate-200 text-[#040C1A] text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded shadow-xs">
                      {rel.category}
                    </span>
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#040C1A] group-hover:text-blue-600 line-clamp-1 mb-1">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        {rel.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>View Details</span>
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteSubject} />
    </div>
  );
}
