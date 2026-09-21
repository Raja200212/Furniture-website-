"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918193856070?text=Hello%20Space%20Vision%20Lab%2C%20I%20would%20like%20to%20discuss%20a%20laboratory%20furniture%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#20b858] hover:bg-[#1a9e4b] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group font-bold text-xs"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">WhatsApp Lab Support</span>
    </a>
  );
}
