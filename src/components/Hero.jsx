"use client";

import React, { useState, useEffect } from "react";
import { 
  Compass, MapPin, Calendar, Users, ArrowRight, ShieldCheck, 
  Sparkles, Star, Award, ChevronRight, Play, CheckCircle2
} from "lucide-react";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=85",
    title: "Silent Lagoons & Backwaters",
    location: "Alleppey & Kumarakom",
    tagline: "Glide through emerald waterways on a handcrafted luxury Kettuvallam"
  },
  {
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=85",
    title: "Misty Tea Hills & Cascades",
    location: "Munnar & Western Ghats",
    tagline: "Awaken to rolling clouds, aromatic cardamom forests, and cool mountain sunrises"
  },
  {
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=85",
    title: "Laterite Cliffs & Sacred Sea",
    location: "Varkala & Kovalam Beaches",
    tagline: "Experience breathtaking Arabian Sea sunsets from dramatic cliff-top yoga cafes"
  },
  {
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1920&q=85",
    title: "5000-Year Spice & Art Heritage",
    location: "Fort Kochi & Mattancherry",
    tagline: "Discover historic Chinese fishing nets, Kathakali dance rituals, and ancient spice bazaars"
  }
];

export default function Hero({ onOpenBooking, onSelectDestination }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDest, setSelectedDest] = useState("all");
  const [travelMonth, setTravelMonth] = useState("Oct-Nov");
  const [guests, setGuests] = useState("2 Adults");
  const [tripType, setTripType] = useState("Honeymoon & Luxury");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleQuickSearch = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking({
        type: "search",
        destination: selectedDest,
        month: travelMonth,
        guests: guests,
        tripType: tripType
      });
    }
  };

  return (
    <div className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden text-white">
      {/* Background Image Carousel with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
            } transition-transform duration-[7000ms]`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        ))}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-emerald-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/50 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 backdrop-blur-md shadow-lg text-xs sm:text-sm font-medium text-amber-300 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>National Geographic: Top 50 Must-Visit Paradises of a Lifetime</span>
          </div>

          {/* Dynamic Headline */}
          <div className="space-y-2">
            <p className="text-amber-400 font-serif italic text-lg sm:text-xl tracking-wide">
              {HERO_SLIDES[currentSlide].location}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] drop-shadow-md">
              God&apos;s Own Country, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-teal-200">
                Awaken Your Soul.
              </span>
            </h1>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-emerald-100/90 font-light leading-relaxed max-w-2xl drop-shadow">
            {HERO_SLIDES[currentSlide].tagline}. Curated private houseboat cruises, mist-clad tea plantations, authentic Ayurvedic rejuvenation, and tropical beaches.
          </p>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#planner"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-emerald-950 font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Build My Custom Holiday</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#packages"
              className="px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Explore Curated Packages</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-emerald-200/90 font-medium border-t border-emerald-700/40">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>100% Tailored Private Itineraries</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9/5 Rating (12,400+ Travelers)</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-300" />
              <span>Govt. Accredited Tour Operators</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Interactive Quick Search / Planner Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="bg-emerald-950/90 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-emerald-700/60 shadow-2xl shadow-emerald-950/80">
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
            
            {/* Destination Select */}
            <div className="bg-emerald-900/70 p-3 rounded-2xl border border-emerald-700/50 hover:border-amber-400/60 transition-colors">
              <label className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Destination
              </label>
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none mt-1 cursor-pointer"
              >
                <option value="all" className="bg-emerald-950 text-white">All Kerala (Classic Route)</option>
                <option value="alleppey" className="bg-emerald-950 text-white">Alleppey (Backwaters)</option>
                <option value="munnar" className="bg-emerald-950 text-white">Munnar (Tea & Mist)</option>
                <option value="wayanad" className="bg-emerald-950 text-white">Wayanad (Wilderness)</option>
                <option value="varkala" className="bg-emerald-950 text-white">Varkala (Cliffs & Beach)</option>
                <option value="kochi" className="bg-emerald-950 text-white">Fort Kochi (Heritage)</option>
                <option value="thekkady" className="bg-emerald-950 text-white">Thekkady (Periyar Safari)</option>
              </select>
            </div>

            {/* Travel Month */}
            <div className="bg-emerald-900/70 p-3 rounded-2xl border border-emerald-700/50 hover:border-amber-400/60 transition-colors">
              <label className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> When to Travel
              </label>
              <select
                value={travelMonth}
                onChange={(e) => setTravelMonth(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none mt-1 cursor-pointer"
              >
                <option value="This Month" className="bg-emerald-950 text-white">This Month (Instant Plan)</option>
                <option value="Oct-Nov" className="bg-emerald-950 text-white">October - November (Autumn)</option>
                <option value="Dec-Jan" className="bg-emerald-950 text-white">December - January (Peak Fest)</option>
                <option value="Feb-Apr" className="bg-emerald-950 text-white">February - April (Sunny Beach)</option>
                <option value="Monsoon" className="bg-emerald-950 text-white">June - August (Ayurveda Monsoon)</option>
              </select>
            </div>

            {/* Traveler Group */}
            <div className="bg-emerald-900/70 p-3 rounded-2xl border border-emerald-700/50 hover:border-amber-400/60 transition-colors">
              <label className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" /> Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none mt-1 cursor-pointer"
              >
                <option value="2 Adults (Couple)" className="bg-emerald-950 text-white">2 Adults (Couple)</option>
                <option value="Family (2 Adults + 1-2 Kids)" className="bg-emerald-950 text-white">Family (2+ Kids)</option>
                <option value="Solo Traveler" className="bg-emerald-950 text-white">Solo Explorer</option>
                <option value="Group / Friends (4-8 Pax)" className="bg-emerald-950 text-white">Group (4+ Pax)</option>
              </select>
            </div>

            {/* Trip Theme */}
            <div className="bg-emerald-900/70 p-3 rounded-2xl border border-emerald-700/50 hover:border-amber-400/60 transition-colors">
              <label className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Experience Style
              </label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full bg-transparent text-white font-medium text-sm focus:outline-none mt-1 cursor-pointer"
              >
                <option value="Honeymoon & Luxury" className="bg-emerald-950 text-white">Honeymoon & Luxury</option>
                <option value="Backwater & Nature" className="bg-emerald-950 text-white">Backwater & Nature</option>
                <option value="Ayurvedic Wellness & Spa" className="bg-emerald-950 text-white">Ayurveda Rejuvenation</option>
                <option value="Wildlife & Adventure" className="bg-emerald-950 text-white">Wildlife & Adventure</option>
                <option value="Heritage & Food Trail" className="bg-emerald-950 text-white">Heritage & Food Trail</option>
              </select>
            </div>

            {/* Search CTA */}
            <button
              type="submit"
              className="h-full min-h-[52px] w-full rounded-2xl font-bold text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentSlide ? "w-8 bg-amber-400" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
