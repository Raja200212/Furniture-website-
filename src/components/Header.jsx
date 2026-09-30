"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, X, Phone, MessageSquare, Compass, Palmtree, 
  Sparkles, Calendar, Heart, ShieldCheck, Waves, ChevronDown, 
  MapPin, Volume2, VolumeX, SunMedium
} from "lucide-react";

export default function Header({ onOpenBooking, onToggleAudio, isAudioPlaying }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro-bar */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden" : "bg-emerald-950/90 text-emerald-100/90 py-1.5 px-4 text-xs backdrop-blur-md border-b border-emerald-800/40"}`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Official Kerala Experience Portal
            </span>
            <span className="hidden sm:inline-block text-emerald-300/40">|</span>
            <span className="hidden sm:flex items-center gap-1 text-emerald-200">
              <SunMedium className="w-3.5 h-3.5 text-amber-400" /> Kochi 29°C (Sunny & Pleasant)
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {onToggleAudio && (
              <button 
                onClick={onToggleAudio}
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-900/60 hover:bg-emerald-800 text-amber-300 transition-colors"
                title="Toggle Kerala Backwaters Ambient Sound"
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="w-3 h-3 animate-pulse" />
                    <span>Rain & Stream Ambience (On)</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3 h-3 text-emerald-400" />
                    <span>Play Ambient Sound</span>
                  </>
                )}
              </button>
            )}
            <a 
              href="tel:+919847012345" 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>+91 98470 12345</span>
            </a>
            <a 
              href="https://wa.me/919847012345?text=Hello%2C%20I%20would%20like%20to%20plan%20a%20trip%20to%20Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-emerald-100 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp 24/7</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
        isScrolled 
          ? "bg-emerald-950/95 shadow-xl backdrop-blur-md py-3 border-b border-emerald-800/50" 
          : "bg-gradient-to-b from-emerald-950/80 via-emerald-950/40 to-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-emerald-600 to-teal-400 p-0.5 shadow-lg shadow-emerald-900/50 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-emerald-950 rounded-full flex items-center justify-center text-amber-400 font-serif font-bold text-lg">
                🌴
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  KERALA
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                  TRAVEL
                </span>
              </div>
              <p className="text-[10px] tracking-wider text-emerald-300 uppercase font-medium">
                God&apos;s Own Country
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-emerald-100">
            <Link href="#destinations" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Destinations</span>
            </Link>

            <Link href="#packages" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Tour Packages</span>
            </Link>

            <Link href="#houseboats" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Waves className="w-4 h-4 text-teal-400" />
              <span>Houseboats</span>
            </Link>

            <Link href="#ayurveda" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ayurveda & Spa</span>
            </Link>

            <Link href="#cuisine" className="hover:text-amber-300 transition-colors">
              <span>Cuisine & Sadya</span>
            </Link>

            <Link href="#planner" className="hover:text-amber-300 transition-colors text-amber-200">
              <span>Trip Calculator</span>
            </Link>
          </div>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => onOpenBooking ? onOpenBooking({ type: "general" }) : null}
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan My Trip</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-900/60 focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-6 px-4 bg-emerald-950/98 backdrop-blur-xl rounded-2xl border border-emerald-800/80 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-3.5 text-base font-medium text-emerald-100">
              <Link 
                href="#destinations" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-emerald-900/70"
              >
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Destinations (Munnar, Alleppey & More)</span>
              </Link>
              <Link 
                href="#packages" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-emerald-900/70"
              >
                <Compass className="w-5 h-5 text-emerald-400" />
                <span>Curated Tour Packages</span>
              </Link>
              <Link 
                href="#houseboats" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-emerald-900/70"
              >
                <Waves className="w-5 h-5 text-teal-400" />
                <span>Luxury Houseboat Stays</span>
              </Link>
              <Link 
                href="#ayurveda" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-emerald-900/70"
              >
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Authentic Ayurveda Healing</span>
              </Link>
              <Link 
                href="#cuisine" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg hover:bg-emerald-900/70"
              >
                <span>Kerala Sadya & Culinary Tour</span>
              </Link>
              <Link 
                href="#planner" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-emerald-900/50 text-amber-300"
              >
                <span>Interactive Trip Cost Calculator</span>
              </Link>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenBooking) onOpenBooking({ type: "custom" });
                  }}
                  className="w-full py-3 rounded-xl font-semibold text-emerald-950 bg-gradient-to-r from-amber-400 to-yellow-400 shadow-md text-center"
                >
                  Book Custom Itinerary
                </button>
                <a
                  href="https://wa.me/919847012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl font-medium text-emerald-200 bg-emerald-900/80 border border-emerald-700/60 text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Chat on WhatsApp (+91 98470 12345)
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
