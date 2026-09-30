"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Calendar, Users, Phone, Mail, User, MapPin, Sparkles, MessageSquare, ArrowRight } from "lucide-react";

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [guests, setGuests] = useState("2 Adults");
  const [specialRequests, setSpecialRequests] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare WhatsApp URL for instant connection
    const details = `*Kerala Trip Inquiry*%0A` +
      `*Name:* ${encodeURIComponent(fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Travel Date:* ${encodeURIComponent(travelDate || "Flexible")}%0A` +
      `*Guests:* ${encodeURIComponent(guests)}%0A` +
      `*Trip Type/Details:* ${encodeURIComponent(initialData?.packageTitle || initialData?.houseboatName || initialData?.destination || initialData?.duration || "Custom Kerala Holiday")}%0A` +
      `*Requests:* ${encodeURIComponent(specialRequests || "None")}`;

    setTimeout(() => {
      window.open(`https://wa.me/919847012345?text=${details}`, "_blank");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-emerald-200 relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-emerald-100 text-emerald-900 hover:bg-emerald-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-bold text-emerald-950">Inquiry Received!</h3>
              <p className="text-sm text-emerald-800/80 leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Our Kerala Tourism travel specialist is preparing your personalized itinerary and connecting on WhatsApp.
              </p>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-xs text-emerald-900">
              📱 Redirecting to WhatsApp for instant chat...
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-full bg-emerald-800 text-white font-bold text-sm hover:bg-emerald-700 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Modal Header */}
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold inline-block mb-2">
                🌴 Personalized Trip Booking & Free Proposal
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
                Plan Your Kerala Getaway
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800/80 mt-1">
                Fill in your travel preferences. Our local destination experts will design your perfect customized itinerary.
              </p>
            </div>

            {/* If initial data passed, display summary box */}
            {initialData && (
              <div className="bg-emerald-50 p-3.5 rounded-2xl border border-emerald-100 text-xs text-emerald-950 space-y-1">
                <span className="font-bold text-emerald-800 uppercase tracking-wider text-[10px] block">
                  Selected Holiday Details:
                </span>
                {initialData.packageTitle && <div><strong>Package:</strong> {initialData.packageTitle}</div>}
                {initialData.houseboatName && <div><strong>Houseboat:</strong> {initialData.houseboatName}</div>}
                {initialData.destination && <div><strong>Destination:</strong> {initialData.destination}</div>}
                {initialData.duration && <div><strong>Duration:</strong> {initialData.duration}</div>}
                {initialData.estimatedTotal && <div><strong>Estimated Total:</strong> ₹{initialData.estimatedTotal.toLocaleString()}</div>}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-bold text-emerald-900 block mb-1">Your Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-emerald-600 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className="w-full pl-9 pr-3 py-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-emerald-900 block mb-1">WhatsApp / Phone *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-emerald-600 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-bold text-emerald-900 block mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-emerald-600 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-emerald-900 block mb-1">Estimated Travel Date</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-emerald-600 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 text-emerald-950"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-emerald-900 block mb-1">Number of Guests</label>
                <div className="relative">
                  <Users className="w-4 h-4 text-emerald-600 absolute left-3 top-3" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-emerald-50/50 border border-emerald-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600 cursor-pointer"
                  >
                    <option value="2 Adults (Couple / Friends)">2 Adults (Couple / Friends)</option>
                    <option value="1 Solo Explorer">1 Solo Explorer</option>
                    <option value="Family (2 Adults + 1 Kid)">Family (2 Adults + 1 Kid)</option>
                    <option value="Family (2 Adults + 2 Kids)">Family (2 Adults + 2 Kids)</option>
                    <option value="Group of 4-6">Group of 4 to 6</option>
                    <option value="Large Group (8+ Pax)">Large Group (8+ Pax)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-emerald-900 block mb-1">Special Preferences / Dietary / Requests</label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="e.g. Vegetarian Sadya meals, Honeymoon cake, Private pool villa, Ground floor rooms..."
                  className="w-full p-3 bg-emerald-50/50 border border-emerald-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl font-bold text-sm text-emerald-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Custom Itinerary & Connect on WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-emerald-700/80">
                ✨ 100% Free Consultation • No Credit Card Required • Instant Response
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
