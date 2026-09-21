import Image from "next/image";
import { processSteps } from "@/data/solutions";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessSection({ onOpenQuote }) {
  return (
    <section id="process" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Turnkey Delivery Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1C38] tracking-tight">
            From Blueprint to Commissioned Lab
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Our end-to-end engineering lifecycle ensures safety code compliance, ergonomic workflow zoning, and seamless utility integration.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Step badge */}
                <div className="absolute top-3.5 left-3.5 w-10 h-10 rounded-2xl bg-blue-600 text-white font-mono font-extrabold text-sm flex items-center justify-center shadow-md shadow-blue-600/40">
                  {step.step}
                </div>

                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-mono font-bold text-cyan-300 border border-cyan-400/30">
                  Phase {step.step}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-[#0A1C38] mb-0.5 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3 font-mono">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {step.points?.map((point, i) => (
                    <div key={i} className="text-[11px] text-slate-600 flex items-start gap-2 leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-[#0A1C38] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden tech-grid-dark flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">
              READY TO COMMENCE YOUR PROJECT?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get Your Complimentary 3D Lab Simulation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
              Send us your architectural drawings or room dimensions for a comprehensive 3D layout rendering and itemized BOQ estimate.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote()}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full text-xs transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 cursor-pointer"
          >
            Start Project Consultation →
          </button>
        </div>

      </div>
    </section>
  );
}
