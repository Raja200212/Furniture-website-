"use client";

import React, { useState } from "react";
import { TESTIMONIALS, FAQS } from "../data/keralaData";
import { Star, Quote, ChevronDown, ChevronUp, HelpCircle, MessageSquare, ShieldCheck } from "lucide-react";

export default function TestimonialsAndFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-[#f8faf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Testimonials Block */}
        <div>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-semibold border border-emerald-300">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Memories of a Lifetime</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-emerald-950 tracking-tight">
              Stories from Travelers Worldwide
            </h2>
            <p className="text-emerald-800/80 text-base sm:text-lg">
              Over 12,000 satisfied guests have experienced the magic of Kerala with our bespoke itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-emerald-100 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-emerald-200" />
                  </div>

                  <p className="text-xs sm:text-sm text-emerald-900/90 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-emerald-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-emerald-300 shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-emerald-950">{t.name}</h4>
                    <p className="text-[11px] text-emerald-700">{t.location} • <span className="text-amber-700 font-medium">{t.tour}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Block */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold border border-amber-300">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-emerald-950">
              Planning Your Trip to Kerala
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-emerald-100 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-emerald-50/50 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-emerald-950">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-emerald-900/80 leading-relaxed border-t border-emerald-50 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need More Assistance Box */}
          <div className="mt-8 bg-emerald-950 text-white p-6 rounded-3xl border border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-sm sm:text-base text-amber-300">Have custom requirements or dietary needs?</h4>
              <p className="text-xs text-emerald-200/80">Our Kerala tourism travel specialists are available 24/7 on WhatsApp & Phone.</p>
            </div>
            <a
              href="https://wa.me/919847012345?text=Hello%2C%20I%20have%20questions%20about%20traveling%20to%20Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-bold text-xs sm:text-sm text-emerald-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
