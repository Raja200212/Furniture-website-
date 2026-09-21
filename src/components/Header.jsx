"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";

export default function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Workstations", href: "/workstations", hasDropdown: true },
    { name: "Materials", href: "/materials", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About", href: "/about", hasDropdown: false },
    { name: "Process", href: "/process", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0">
            <Image
              src="/logo.png"
              alt="Space Vision Lab"
              fill
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#0B1528] leading-none uppercase group-hover:text-blue-600 transition-colors">
              SPACE VISION LAB
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] tracking-widest text-slate-500 font-bold uppercase mt-1">
              LAB FURNITURE SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-semibold transition-colors relative py-1.5 inline-flex items-center gap-1 ${
                  isActive
                    ? "text-[#2563EB] font-bold after:w-full"
                    : "text-slate-700 hover:text-[#2563EB] after:w-0 hover:after:w-full"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2563EB] after:transition-all after:duration-200`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+918193856070"
            className="flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-blue-600 px-4 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>+91 8193856070</span>
          </a>

          {onOpenQuote && (
            <button
              onClick={() => onOpenQuote()}
              className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Plan Your Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 border-b border-slate-100 ${
                    isActive ? "text-blue-600 font-bold" : "text-slate-800 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 pt-3">
              <a
                href="tel:+918193856070"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-800 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call +91 8193856070</span>
              </a>
              {onOpenQuote && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0A1C38] hover:bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md"
                >
                  <span>Request 3D Lab Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
