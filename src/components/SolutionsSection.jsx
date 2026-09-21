"use client";

import { solutions } from "@/data/solutions";
import { CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from "lucide-react";

export default function SolutionsSection({ onOpenQuote }) {
  return (
    <section id="solutions" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Turnkey Laboratory Environments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1C38] tracking-tight">
            Tailored Industry Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            From K-12 STEM classrooms and high-throughput pathology suites to ISO Class cleanrooms and deployable container laboratories.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-extrabold uppercase rounded-full tracking-wider shadow-md">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">{item.title}</h3>
                  <p className="text-xs text-blue-200 mt-1 font-medium">{item.tagline}</p>
                </div>
              </div>

              {/* Description and Key Features */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">Turnkey CAD & Install Included</span>
                  <button
                    onClick={() => onOpenQuote()}
                    className="flex items-center gap-1.5 text-xs font-extrabold text-blue-600 group-hover:text-blue-700 cursor-pointer"
                  >
                    <span>Enquire Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
