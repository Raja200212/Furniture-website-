"use client";

import { useState } from "react";
import Header from "@/components/Header";
import LabConfigurator from "@/components/LabConfigurator";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";
import { Sliders, Sparkles } from "lucide-react";

export default function ConfiguratorPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteData, setQuoteData] = useState(null);

  const handleOpenQuote = (data = null) => {
    setQuoteData(data);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1 pt-24">
        {/* Page Hero Header */}
        <section className="py-14 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 border-b border-slate-200 tech-grid-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Sliders className="w-3.5 h-3.5 text-blue-600" />
              <span>Custom Workstation Configurator</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1C38] tracking-tight">
              Interactive Lab Workstation Builder
            </h1>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Design your custom lab bench: select steel structural frame architecture, chemical-grade worktop surface, exact dimensions, and integrated gas, power, and plumbing utilities.
            </p>
          </div>
        </section>

        {/* Live Lab Configurator */}
        <LabConfigurator onConfigureQuote={(configSummary) => handleOpenQuote(configSummary)} />
      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteData} />
    </div>
  );
}
