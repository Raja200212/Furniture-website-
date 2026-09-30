"use client";

import React, { useState, useMemo } from "react";
import { 
  Calculator, Sparkles, Check, ArrowRight, ShieldCheck, 
  MapPin, Calendar, Users, Coffee, Car, BedDouble, Waves, 
  Clock, HeartHandshake, Download, MessageSquare
} from "lucide-react";

export default function TripPlanner({ onOpenBooking }) {
  const [durationDays, setDurationDays] = useState(5);
  const [travelerCount, setTravelerCount] = useState(2);
  const [hotelTier, setHotelTier] = useState("4-star"); // "3-star", "4-star", "5-star"
  const [vehicleType, setVehicleType] = useState("sedan"); // "sedan", "innova", "suv"
  
  // Selected destinations/regions
  const [selectedRegions, setSelectedRegions] = useState({
    munnar: true,
    alleppey: true,
    kochi: true,
    thekkady: false,
    varkala: false,
    wayanad: false
  });

  // Optional Addon Experiences
  const [addons, setAddons] = useState({
    houseboat: true,
    ayurveda: true,
    kathakali: true,
    spiceTour: false,
    safari: false
  });

  const toggleRegion = (region) => {
    setSelectedRegions(prev => ({ ...prev, [region]: !prev[region] }));
  };

  const toggleAddon = (addon) => {
    setAddons(prev => ({ ...prev, [addon]: !prev[addon] }));
  };

  // Dynamic Price Calculation Logic
  const pricing = useMemo(() => {
    // Hotel base rates per room per night (assume 2 people per room)
    const roomsCount = Math.ceil(travelerCount / 2);
    const nights = durationDays - 1;
    
    let hotelRatePerNight = 3500;
    if (hotelTier === "4-star") hotelRatePerNight = 6500;
    if (hotelTier === "5-star") hotelRatePerNight = 13500;
    const totalHotelCost = hotelRatePerNight * nights * roomsCount;

    // Vehicle per day
    let vehiclePerDay = 2800; // sedan
    if (vehicleType === "innova") vehiclePerDay = 4200;
    if (vehicleType === "suv") vehiclePerDay = 5800;
    const totalVehicleCost = vehiclePerDay * durationDays;

    // Addons cost
    let addonCost = 0;
    if (addons.houseboat) addonCost += (hotelTier === "5-star" ? 18000 : 12000); // 1 night private houseboat upgrade
    if (addons.ayurveda) addonCost += (2500 * travelerCount);
    if (addons.kathakali) addonCost += (600 * travelerCount);
    if (addons.spiceTour) addonCost += (500 * travelerCount);
    if (addons.safari) addonCost += (900 * travelerCount);

    const subtotal = totalHotelCost + totalVehicleCost + addonCost;
    const taxAndService = Math.round(subtotal * 0.05); // 5% GST
    const total = subtotal + taxAndService;
    const perPerson = Math.round(total / travelerCount);

    return {
      totalHotelCost,
      totalVehicleCost,
      addonCost,
      taxAndService,
      total,
      perPerson
    };
  }, [durationDays, travelerCount, hotelTier, vehicleType, addons]);

  const handleBookPlanner = () => {
    const activeDestList = Object.keys(selectedRegions).filter(k => selectedRegions[k]);
    if (onOpenBooking) {
      onOpenBooking({
        type: "custom_planner",
        duration: `${durationDays} Days / ${durationDays - 1} Nights`,
        guests: `${travelerCount} Travelers`,
        hotelTier: hotelTier.toUpperCase(),
        vehicleType: vehicleType.toUpperCase(),
        destinations: activeDestList.join(", "),
        estimatedTotal: pricing.total,
        estimatedPerPerson: pricing.perPerson
      });
    }
  };

  return (
    <section id="planner" className="py-20 sm:py-28 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-700/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Smart Custom Trip & Budget Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Craft Your Custom Kerala Itinerary
          </h2>
          <p className="text-emerald-200/80 text-base sm:text-lg">
            Customize days, hotels, private vehicles, and signature experiences. Get an instant realistic transparent estimate and personalized day-by-day plan.
          </p>
        </div>

        {/* Planner Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Configurator Controls (7 Columns) */}
          <div className="lg:col-span-7 bg-emerald-900/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-emerald-700/60 shadow-xl space-y-8">
            
            {/* 1. Trip Duration Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-emerald-200 uppercase tracking-wider flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" /> Duration of Stay
                </label>
                <span className="px-3 py-1 rounded-full bg-amber-400 text-emerald-950 font-bold text-sm">
                  {durationDays} Days / {durationDays - 1} Nights
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={12}
                step={1}
                value={durationDays}
                onChange={(e) => setDurationDays(Number(e.target.value))}
                className="w-full h-2.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-xs text-emerald-300/70 mt-2 font-medium">
                <span>3 Days (Weekend)</span>
                <span>5-7 Days (Classic)</span>
                <span>10-12 Days (Grand Tour)</span>
              </div>
            </div>

            {/* 2. Number of Travelers */}
            <div>
              <label className="text-sm font-bold text-emerald-200 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-amber-400" /> Number of Travelers
              </label>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {[1, 2, 4, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setTravelerCount(num)}
                    className={`py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      travelerCount === num
                        ? "bg-amber-400 text-emerald-950 shadow-md scale-105"
                        : "bg-emerald-950/80 text-emerald-200 hover:bg-emerald-800/80 border border-emerald-700/60"
                    }`}
                  >
                    {num === 1 ? "1 (Solo)" : num === 2 ? "2 (Couple)" : `${num} Guests`}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Preferred Regions */}
            <div>
              <label className="text-sm font-bold text-emerald-200 uppercase tracking-wider flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-amber-400" /> Choose Destinations to Include
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { key: "munnar", label: "Munnar (Tea Hills)" },
                  { key: "alleppey", label: "Alleppey (Backwaters)" },
                  { key: "kochi", label: "Fort Kochi (Heritage)" },
                  { key: "thekkady", label: "Thekkady (Periyar)" },
                  { key: "varkala", label: "Varkala (Cliff Beach)" },
                  { key: "wayanad", label: "Wayanad (Wild Forest)" }
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleRegion(item.key)}
                    className={`p-3 rounded-2xl text-xs font-semibold text-left transition-all flex items-center justify-between cursor-pointer border ${
                      selectedRegions[item.key]
                        ? "bg-emerald-800/90 text-amber-300 border-amber-400/60 shadow-sm"
                        : "bg-emerald-950/60 text-emerald-300/80 border-emerald-800 hover:bg-emerald-900/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    {selectedRegions[item.key] && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Resort & Stay Category */}
            <div>
              <label className="text-sm font-bold text-emerald-200 uppercase tracking-wider flex items-center gap-2 mb-3">
                <BedDouble className="w-4 h-4 text-amber-400" /> Resort & Stay Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "3-star", name: "3-Star Boutique", desc: "Clean, scenic eco stays" },
                  { id: "4-star", name: "4-Star Premium", desc: "Lake & plantation resorts" },
                  { id: "5-star", name: "5-Star Ultra Luxury", desc: "Palaces & private pool villas" }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setHotelTier(tier.id)}
                    className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                      hotelTier === tier.id
                        ? "bg-amber-400 text-emerald-950 border-amber-300 shadow-md font-bold"
                        : "bg-emerald-950/70 text-emerald-200 border-emerald-800 hover:bg-emerald-900/80"
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold">{tier.name}</div>
                    <div className={`text-[11px] mt-0.5 ${hotelTier === tier.id ? "text-emerald-900" : "text-emerald-400"}`}>
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Chauffeured Private Vehicle */}
            <div>
              <label className="text-sm font-bold text-emerald-200 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Car className="w-4 h-4 text-amber-400" /> Dedicated Chauffeured Vehicle
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "sedan", name: "AC Sedan", type: "Swift / Dzire" },
                  { id: "innova", name: "Innova Crysta", type: "Executive Comfort" },
                  { id: "suv", name: "Luxury Fortuner", type: "High Elevation SUV" }
                ].map((veh) => (
                  <button
                    key={veh.id}
                    type="button"
                    onClick={() => setVehicleType(veh.id)}
                    className={`p-3 rounded-2xl text-left transition-all cursor-pointer border ${
                      vehicleType === veh.id
                        ? "bg-emerald-800 text-amber-300 border-amber-400/80 font-bold"
                        : "bg-emerald-950/70 text-emerald-200 border-emerald-800"
                    }`}
                  >
                    <div className="text-xs font-semibold">{veh.name}</div>
                    <div className="text-[10px] text-emerald-300/80">{veh.type}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 6. Signature Experiences Add-ons */}
            <div>
              <label className="text-sm font-bold text-emerald-200 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" /> Signature Experiences Add-ons
              </label>
              <div className="space-y-2">
                {[
                  { key: "houseboat", name: "1-Night Private Houseboat Stay Upgrade with All Meals" },
                  { key: "ayurveda", name: "Authentic Ayurvedic Rejuvenation Spa Session for all guests" },
                  { key: "kathakali", name: "Kathakali & Kalaripayattu Live Performance Tickets" },
                  { key: "spiceTour", name: "Private Guided Organic Spice Plantation Tasting Tour" },
                  { key: "safari", name: "Periyar Lake Tiger Reserve Wildlife Boat Safari" }
                ].map((add) => (
                  <div
                    key={add.key}
                    onClick={() => toggleAddon(add.key)}
                    className={`p-3 rounded-2xl text-xs flex items-center justify-between cursor-pointer border transition-all ${
                      addons[add.key]
                        ? "bg-emerald-950 text-white border-amber-400/50"
                        : "bg-emerald-950/40 text-emerald-300/70 border-emerald-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addons[add.key]}
                        onChange={() => {}}
                        className="w-4 h-4 accent-amber-400 rounded cursor-pointer"
                      />
                      <span>{add.name}</span>
                    </div>
                    {addons[add.key] && (
                      <span className="text-[11px] text-amber-300 font-semibold px-2 py-0.5 rounded bg-emerald-900">
                        Added
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right / Live Quote & Itinerary Preview Card (5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-emerald-900 to-emerald-950 p-6 sm:p-8 rounded-3xl border-2 border-amber-400/40 shadow-2xl space-y-6 sticky top-24">
            
            {/* Live Pricing Summary */}
            <div className="border-b border-emerald-700/60 pb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                  Instant Estimated Quote
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-800 text-emerald-200">
                  All-Inclusive Package
                </span>
              </div>

              <div className="mt-4">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  ₹{pricing.perPerson.toLocaleString()}
                  <span className="text-xs font-sans font-normal text-emerald-300 ml-1"> / person</span>
                </div>
                <div className="text-xs text-emerald-300/80 mt-1">
                  Total for {travelerCount} traveler{travelerCount > 1 ? "s" : ""}: <strong className="text-white">₹{pricing.total.toLocaleString()}</strong> (incl. 5% GST)
                </div>
              </div>

              {/* Price Breakdown pills */}
              <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-emerald-200/90 bg-emerald-950/60 p-3 rounded-2xl border border-emerald-800">
                <div>• Resort ({durationDays - 1} Nights): <strong>₹{pricing.totalHotelCost.toLocaleString()}</strong></div>
                <div>• Vehicle & Driver: <strong>₹{pricing.totalVehicleCost.toLocaleString()}</strong></div>
                <div>• Signature Addons: <strong>₹{pricing.addonCost.toLocaleString()}</strong></div>
                <div>• Taxes & Tolls: <strong>₹{pricing.taxAndService.toLocaleString()}</strong></div>
              </div>
            </div>

            {/* Inclusions List */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                What&apos;s Included in this Estimate:
              </h4>
              <ul className="space-y-1.5 text-xs text-emerald-100">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{durationDays - 1} Nights in handpicked {hotelTier.toUpperCase()} accommodations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Dedicated AC {vehicleType.toUpperCase()} with English/Hindi speaking chauffeur</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>Daily hot complimentary Kerala & Continental breakfast</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>State toll taxes, fuel charges, parking & driver allowances</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>24/7 On-Trip Concierge Support</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleBookPlanner}
                className="w-full py-4 rounded-2xl font-bold text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>Book This Custom Itinerary</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/919847012345?text=Hello%2C%20I%20used%20the%20Kerala%20Trip%20Planner%20for%20a%20${durationDays}%20Days%20trip%20(${travelerCount}%20guests)%20estimated%20at%20₹${pricing.total}.%20Please%20send%20detailed%20day-wise%20PDF.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl font-semibold text-emerald-200 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 flex items-center justify-center gap-2 text-xs sm:text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Get Instant Itinerary on WhatsApp</span>
              </a>
            </div>

            <div className="text-[11px] text-center text-emerald-300/70">
              🔒 No advance payment required for customized proposal. 100% money-back booking guarantee.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
