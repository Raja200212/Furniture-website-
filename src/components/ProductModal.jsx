"use client";

import Image from "next/image";
import { X, Check, ArrowRight, Shield, Box, Sparkles, MessageSquare } from "lucide-react";

export default function ProductModal({ product, onClose, onEnquire }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Image Preview Container */}
            <div className="relative h-72 sm:h-80 w-full rounded-2xl bg-slate-50 border border-slate-200/80 p-6 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                }}
              />
              <span className="absolute top-3 left-3 px-3 py-1 bg-blue-100 text-blue-800 text-[11px] font-extrabold uppercase rounded-full tracking-wider">
                {product.category}
              </span>
            </div>

            {/* Content & Specs */}
            <div className="flex flex-col">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                Space Vision Engineering
              </span>
              <h3 className="text-2xl font-extrabold text-[#0A1C38] leading-tight mb-3">
                {product.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specifications table */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 mb-6 space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Category</span>
                  <span className="text-slate-800 font-bold">{product.category}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Compliance</span>
                  <span className="text-slate-800 font-bold">SEFA-8 / ISO 9001:2015</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Customization</span>
                  <span className="text-slate-800 font-bold">Custom Dimensions & Finishes</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Warranty</span>
                  <span className="text-slate-800 font-bold">5-Year Structural Guarantee</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onEnquire(product);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#0A1C38] hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-full text-xs transition-all shadow-md cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/918193856070?text=Hello%20Space%20Vision%20Lab%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.category)}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-full text-xs transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
