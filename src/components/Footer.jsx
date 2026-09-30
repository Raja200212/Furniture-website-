"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Phone, Mail, MapPin, MessageSquare, Sparkles, 
  ShieldCheck, Heart, ArrowRight, Check, Send
} from "lucide-react";

export default function Footer({ onOpenBooking }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-800/60 relative overflow-hidden">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-600/10 blur-3xl pointer-events-none" />

      {/* Top CTA Banner */}
      <div className="border-b border-emerald-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-emerald-900/90 to-teal-900/90 rounded-3xl p-8 sm:p-12 border border-emerald-700/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
              Start Planning Your Escape
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Ready to Experience God&apos;s Own Country?
            </h3>
            <p className="text-emerald-200/90 text-sm sm:text-base">
              Speak with our local destination consultants today. We craft custom itineraries with zero hassle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onOpenBooking ? onOpenBooking({ type: "footer_cta" }) : null}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all text-sm cursor-pointer"
            >
              Get Custom Free Quote
            </button>
            <a
              href="https://wa.me/919847012345?text=Hello%2C%20I%20want%20to%20plan%20a%20trip%20to%20Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full font-semibold text-emerald-100 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700 text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Accreditations (2 Cols on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-emerald-500 to-teal-300 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center text-lg">
                  🌴
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white">KERALA</span>
                <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                  TRAVEL PORTAL
                </span>
                <p className="text-[10px] tracking-wider text-emerald-300 uppercase">God&apos;s Own Country</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-300/80 leading-relaxed max-w-sm">
              Official recognized travel partner offering bespoke luxury houseboat stays, tea plantation escapes in Munnar, authentic Ayurvedic wellness retreats, and Malabar culinary trails.
            </p>

            <div className="flex items-center gap-4 text-xs text-emerald-300/90 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Kerala Tourism Dept. Accredited</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>100% Safe Travel Verified</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white">Destinations</h4>
            <ul className="space-y-2 text-xs text-emerald-300/80">
              <li><Link href="#destinations" className="hover:text-amber-300 transition-colors">Alleppey (Backwaters)</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-300 transition-colors">Munnar (Tea Estates)</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-300 transition-colors">Wayanad (Wilderness)</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-300 transition-colors">Varkala (Cliffs & Beaches)</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-300 transition-colors">Fort Kochi (Heritage)</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-300 transition-colors">Thekkady (Tiger Reserve)</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white">Experiences</h4>
            <ul className="space-y-2 text-xs text-emerald-300/80">
              <li><Link href="#houseboats" className="hover:text-amber-300 transition-colors">Luxury Houseboat Cruises</Link></li>
              <li><Link href="#ayurveda" className="hover:text-amber-300 transition-colors">Ayurvedic Rejuvenation</Link></li>
              <li><Link href="#cuisine" className="hover:text-amber-300 transition-colors">Kerala Sadya & Food Trails</Link></li>
              <li><Link href="#packages" className="hover:text-amber-300 transition-colors">Honeymoon Packages</Link></li>
              <li><Link href="#planner" className="hover:text-amber-300 transition-colors">Custom Trip Calculator</Link></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white">Stay Inspired</h4>
            <p className="text-xs text-emerald-300/80">
              Subscribe to get secret deals, seasonal festival schedules & travel guides.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-900/80 border border-emerald-700 text-xs text-amber-300 font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" /> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email..."
                    className="w-full px-3.5 py-2.5 bg-emerald-900/60 border border-emerald-700 rounded-l-xl text-xs text-white placeholder-emerald-400 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="px-4 bg-amber-400 text-emerald-950 rounded-r-xl hover:bg-amber-300 transition-colors cursor-pointer flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-xs text-emerald-300/80 space-y-1">
              <p>📞 Helpline: +91 98470 12345</p>
              <p>📧 Email: travel@keralatourismportal.com</p>
              <p>📍 Park Avenue, Marine Drive, Kochi, Kerala</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-emerald-900 text-center text-xs text-emerald-400/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Kerala Tourism & Experiential Travel Portal. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-emerald-300">Privacy Policy</Link>
            <span>•</span>
            <Link href="#terms" className="hover:text-emerald-300">Terms of Booking</Link>
            <span>•</span>
            <Link href="#cancellation" className="hover:text-emerald-300">100% Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
