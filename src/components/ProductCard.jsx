"use client";

import { Eye, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProductCard({ product, onQuickView, onEnquire }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      {/* Category Pill */}
      <div className="absolute top-3 left-3 z-10">
        <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-md border border-slate-200 text-blue-800 text-[10px] font-extrabold uppercase rounded-full shadow-xs tracking-wider">
          {product.category}
        </span>
      </div>

      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-block px-2 py-0.5 bg-blue-600 text-white text-[9px] font-extrabold uppercase rounded-full shadow-xs tracking-wider">
            Featured
          </span>
        </div>
      )}

      {/* Image Display */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative h-56 w-full bg-slate-50 flex items-center justify-center p-6 cursor-pointer overflow-hidden border-b border-slate-100"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
          }}
        />

        {/* Quick View Hover Overlay Button */}
        <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
          <span className="inline-flex items-center gap-1.5 bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-blue-600" />
            <span>Quick Specs</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 
            onClick={() => onQuickView(product)}
            className="text-base font-bold text-[#0A1C38] group-hover:text-blue-600 transition-colors line-clamp-1 cursor-pointer mb-1.5"
            title={product.name}
          >
            {product.name}
          </h4>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => onQuickView(product)}
            className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onEnquire(product)}
            className="text-xs font-extrabold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
          >
            Quote
          </button>
        </div>
      </div>
    </div>
  );
}
