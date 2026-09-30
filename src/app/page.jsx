"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DestinationsSection from "../components/DestinationsSection";
import TripPlanner from "../components/TripPlanner";
import PackagesSection from "../components/PackagesSection";
import HouseboatExplorer from "../components/HouseboatExplorer";
import AyurvedaSection from "../components/AyurvedaSection";
import CulinarySection from "../components/CulinarySection";
import FestivalsSection from "../components/FestivalsSection";
import TestimonialsAndFaq from "../components/TestimonialsAndFaq";
import BookingModal from "../components/BookingModal";
import AmbientAudio from "../components/AmbientAudio";
import Footer from "../components/Footer";
import { MessageSquare, Phone } from "lucide-react";

export default function KeralaHomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleOpenBooking = (data = {}) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleToggleAudio = () => {
    setIsAudioPlaying(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9]">
      {/* Ambient Audio Synthesizer */}
      <AmbientAudio isPlaying={isAudioPlaying} />

      {/* Global Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onToggleAudio={handleToggleAudio}
        isAudioPlaying={isAudioPlaying}
      />

      <main className="flex-1">
        {/* Hero with Carousel & Quick Finder */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Interactive Destinations Explorer */}
        <DestinationsSection onOpenBooking={handleOpenBooking} />

        {/* Interactive Custom Trip Planner & Live Cost Estimator */}
        <TripPlanner onOpenBooking={handleOpenBooking} />

        {/* Handcrafted Tour Packages with Day-by-Day Itineraries */}
        <PackagesSection onOpenBooking={handleOpenBooking} />

        {/* Luxury Kettuvallam Houseboat Showcase */}
        <HouseboatExplorer onOpenBooking={handleOpenBooking} />

        {/* Authentic Kerala Ayurveda & Holistic Healing */}
        <AyurvedaSection onOpenBooking={handleOpenBooking} />

        {/* Kerala Sadya Banana Leaf Culinary Trail */}
        <CulinarySection onOpenBooking={handleOpenBooking} />

        {/* Festivals & Sacred Spectacles */}
        <FestivalsSection onOpenBooking={handleOpenBooking} />

        {/* Reviews & FAQ Accordions */}
        <TestimonialsAndFaq />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking / Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialData={bookingData}
      />

      {/* Floating Instant WhatsApp Button */}
      <aside aria-label="Floating Contact Support" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://wa.me/919847012345?text=Hello%2C%20I%20want%20to%20plan%20a%20trip%20to%20Kerala"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/40"
          aria-label="Chat on WhatsApp with Kerala Tourism Specialist"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-xs sm:text-sm font-bold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
