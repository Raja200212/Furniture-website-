"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Send, 
  MessageSquare, 
  User, 
  Building, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Sliders, 
  HeartHandshake,
  ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hello Space Vision Lab!%0A%0A*Name:* ${encodeURIComponent(formData.name || "N/A")}%0A*Organization:* ${encodeURIComponent(formData.org || "N/A")}%0A*Email:* ${encodeURIComponent(formData.email || "N/A")}%0A*Phone:* ${encodeURIComponent(formData.phone || "N/A")}%0A*Requirement:*%0A${encodeURIComponent(formData.message || "Laboratory Project Consultation")}`;
    window.open(`https://wa.me/918193856070?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F9FD] text-[#0B1528]">
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      <main className="flex-1 pt-24 pb-20 relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-14 relative">
            
            {/* Top Eyebrow with Lines */}
            <div className="inline-flex items-center gap-3 font-mono text-xs font-bold text-[#2563EB] tracking-widest uppercase mb-3">
              <span className="w-8 h-[1.5px] bg-[#2563EB]/40"></span>
              <span>GET IN TOUCH</span>
              <span className="w-8 h-[1.5px] bg-[#2563EB]/40"></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-[#0B1528] tracking-tight">
              Contact <span className="text-[#2563EB]">Space Vision Lab</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-3.5 leading-relaxed font-normal">
              Connect with our technical consultants to arrange a site walk, project review, or customized quotation.
            </p>

            {/* Handwritten Floating Tag on Right */}
            <div className="hidden lg:block absolute -top-2 right-[-140px] transform rotate-[-8deg] pointer-events-none select-none">
              <span className="text-[#2563EB] font-serif italic font-bold text-xl tracking-wide opacity-90 drop-shadow-xs">
                Let&apos;s Build<br />your Lab Together
              </span>
              <svg className="w-16 h-8 text-[#2563EB]/70 ml-2" viewBox="0 0 100 50" fill="none">
                <path d="M10,40 Q60,5 90,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M80,12 L92,20 L83,28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Contact Dual-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Dark Card */}
            <div className="lg:col-span-5 bg-[#051329] text-white rounded-[32px] p-8 sm:p-9 shadow-2xl border border-slate-800/80 relative overflow-hidden flex flex-col justify-between">
              
              {/* Image backdrop in top right */}
              <div className="absolute top-0 right-0 w-3/5 h-64 pointer-events-none opacity-40 overflow-hidden">
                <img
                  src="https://productimages.withfloats.com/actual/68a88c7de1493bda3146b398.png"
                  alt="Space Vision Lab Environment"
                  className="w-full h-full object-cover object-left-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#051329] via-[#051329]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#051329]/70 to-[#051329]" />
              </div>

              {/* Background Wave Lines */}
              <div className="absolute bottom-0 right-0 w-72 h-40 pointer-events-none opacity-20">
                <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-blue-400">
                  <path d="M0,150 C100,80 200,200 300,100" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M0,180 C120,100 180,220 300,130" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              {/* Content Top */}
              <div className="relative z-10">
                {/* Pill Tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono font-bold tracking-widest uppercase mb-5 backdrop-blur-xs border border-white/10">
                  CONTACT US
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Space Vision Lab Private <span className="text-[#3B82F6]">Limited</span>
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 mb-8 leading-relaxed max-w-sm font-normal">
                  Your trusted partner in laboratory furniture and workspace solutions.
                </p>

                {/* 4 Contact Channels */}
                <div className="space-y-5">
                  
                  {/* Item 1 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#1E40AF]/70 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-900/50 border border-blue-400/20">
                      <MapPin className="w-4 h-4 text-blue-200" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        PRODUCTION FACILITY
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                        Calicut, Kerala, India
                      </div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#1E40AF]/70 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-900/50 border border-blue-400/20">
                      <Phone className="w-4 h-4 text-blue-200" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        PHONE / WHATSAPP
                      </div>
                      <a href="tel:+918193856070" className="text-xs sm:text-sm font-semibold text-white hover:text-blue-300 transition-colors mt-0.5 block">
                        +91 8193856070
                      </a>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#1E40AF]/70 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-900/50 border border-blue-400/20">
                      <Mail className="w-4 h-4 text-blue-200" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        OFFICIAL EMAIL
                      </div>
                      <a href="mailto:solutions@spacevisionlabs.com" className="text-xs sm:text-sm font-semibold text-white hover:text-blue-300 transition-colors mt-0.5 block">
                        solutions@spacevisionlabs.com
                      </a>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#1E40AF]/70 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-900/50 border border-blue-400/20">
                      <Globe className="w-4 h-4 text-blue-200" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        WEBSITE ADDRESS
                      </div>
                      <a href="https://spacevisionlabs.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-white hover:text-blue-300 transition-colors mt-0.5 block">
                        www.spacevisionlabs.com
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom WhatsApp Button & Script Slogan */}
              <div className="relative z-10 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="https://wa.me/918193856070?text=Hello%20Space%20Vision%20Lab%2C%20I%20would%20like%20to%20arrange%20a%20technical%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold py-3.5 px-6 rounded-full text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/30 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Direct WhatsApp Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="text-right text-xs font-serif italic text-slate-400 select-none">
                  Quality • Innovation • Trust
                </div>
              </div>

            </div>

            {/* Right White Card */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 shadow-xl border border-slate-100/90 flex flex-col justify-between">
              <div>
                
                {/* Header of Form */}
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#2563EB] tracking-wider uppercase mb-2">
                  <span>SEND US A MESSAGE</span>
                  <span className="w-6 h-[1.5px] bg-[#2563EB]"></span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
                  Request <span className="text-[#2563EB]">an Inquiry</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-7">
                  Fill in your project details for technical review and itemized BOQ estimation.
                </p>

                {/* Submitted Message */}
                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Your message has been recorded!</span>
                      <span>Our laboratory design team will follow up promptly with layout proposals and BOQ estimation.</span>
                    </div>
                  </div>
                )}

                {/* Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-xs sm:text-sm pl-10 pr-4 py-3.5 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all text-[#0B1528] placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Organization *
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-slate-400">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="Your organization / company"
                          value={formData.org}
                          onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                          className="w-full text-xs sm:text-sm pl-10 pr-4 py-3.5 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all text-[#0B1528] placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          placeholder="name@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-xs sm:text-sm pl-10 pr-4 py-3.5 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all text-[#0B1528] placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Contact Number *
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3.5 text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full text-xs sm:text-sm pl-10 pr-4 py-3.5 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all text-[#0B1528] placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message / Requirement */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Message / Requirement Details *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-3.5 text-slate-400">
                        <FileText className="w-4 h-4" />
                      </div>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your facility space or specific furniture requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full text-xs sm:text-sm pl-10 pr-4 py-3.5 bg-[#F8FAFC] border border-slate-200/90 rounded-2xl outline-none focus:bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all text-[#0B1528] placeholder:text-slate-400 resize-vertical"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
                    <button
                      type="submit"
                      className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3.5 px-8 rounded-full text-xs sm:text-sm transition-all shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="bg-white hover:bg-emerald-50 text-[#16A34A] border border-[#22C55E] font-bold py-3.5 px-8 rounded-full text-xs sm:text-sm transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-[#16A34A]" />
                      <span>WhatsApp</span>
                    </button>
                  </div>

                </form>
              </div>

              {/* Bottom Trust Badges */}
              <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] sm:text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Expert Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Customized Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Long Term Support</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer onOpenQuote={() => setQuoteModalOpen(true)} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
