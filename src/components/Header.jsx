"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, ChevronDown } from "lucide-react";

export default function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
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

  const megaMenuData = {
    primaryCategories: [
      { name: "EMERGENCY SHOWER & EYEWASH", href: "/materials/emergency-shower-eyewash" },
      { name: "LABORATORY FITTINGS", href: "/materials/laboratory-fittings" },
      { name: "LABORATORY SINKS & WASTE SYSTEM", href: "/materials/lab-sinks-waste-system" },
      { name: "FUME EXTRACTION VENTILATION SYSTEM", href: "/materials/fume-extraction" },
      { name: "LABORATORY STORAGE CABINETS", href: "/materials/laboratory-storage-cabinet" },
      { name: "SPILL CONTAINMENT", href: "/materials/spill-containment" },
      { name: "BIOSAFETY CABINETS", href: "/materials/fume-extraction" },
      { name: "OTHERS", href: "/materials/others-seating" },
      { name: "LINE8 – POWER TRACK", href: "/materials/line8-power-track" }
    ],
    productCategories: [
      { name: "Air Handling", count: 9, href: "/products?category=Air%20Handling" },
      { name: "Cleanroom", count: 6, href: "/products?category=Cleanroom" },
      { name: "Dental Furniture", count: 4, href: "/products?category=Dental%20Furniture" },
      { name: "Education Furniture", count: 6, href: "/products?category=Education%20Furniture" },
      { name: "Fittings & Sinks", count: 36, href: "/products?category=Fittings%20%26%20Sinks" },
      { name: "Healthcare & Pathology", count: 1, href: "/products?category=Healthcare%20%26%20Pathology" },
      { name: "Lab Benches & Workstations", count: 12, href: "/products?category=Lab%20Benches%20%26%20Workstations" },
      { name: "Specialised Furniture", count: 14, href: "/products?category=Specialised%20Furniture" },
      { name: "Storage & Safety", count: 48, href: "/products?category=Storage%20%26%20Safety" },
      { name: "Worktops & Materials", count: 14, href: "/products?category=Worktops%20%26%20Materials" }
    ],
    sectors: [
      { name: "Education & STEAM", href: "/products?sector=Education" },
      { name: "University Research", href: "/products?sector=University" },
      { name: "Hospital & Pathology", href: "/products?sector=Healthcare" },
      { name: "Industrial QC / R&D", href: "/products?sector=Industrial" },
      { name: "Cleanroom Facility", href: "/products?sector=Cleanroom" }
    ],
    materials: [
      { name: "All-Steel Frame", href: "/products?material=Steel" },
      { name: "Polypropylene (PP)", href: "/products?material=Polypropylene" },
      { name: "Stainless Steel", href: "/products?material=Stainless" },
      { name: "Epoxy / Phenolic", href: "/products?material=Resin" }
    ]
  };

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
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0">
            <Image
              src="/logo.png"
              alt="Space Vision Lab"
              fill
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-xs sm:text-base tracking-wider text-[#0B1528] leading-none uppercase group-hover:text-blue-600 transition-colors">
              SPACE VISION LAB
            </span>
            <span className="text-[7px] sm:text-[8.5px] tracking-widest text-slate-500 font-bold uppercase mt-0.5 sm:mt-1">
              LAB FURNITURE SOLUTIONS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.name === "Products") {
              return (
                <div key={link.name} className="relative group/menu py-2">
                  <Link
                    href={link.href}
                    className={`text-[12.5px] xl:text-[13px] font-semibold transition-colors relative py-1.5 inline-flex items-center gap-1 cursor-pointer ${
                      isActive || pathname.startsWith("/products")
                        ? "text-[#2563EB] font-bold after:w-full"
                        : "text-slate-700 hover:text-[#2563EB] after:w-0 hover:after:w-full"
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2563EB] after:transition-all after:duration-200`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/menu:text-[#2563EB] group-hover/menu:rotate-180 transition-transform duration-200" />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full -left-20 xl:-left-28 pt-2 w-[890px] xl:w-[940px] opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 ease-out translate-y-2 group-hover/menu:translate-y-0 z-50 pointer-events-none group-hover/menu:pointer-events-auto">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden">
                      
                      {/* Mega Menu 3-Column Grid */}
                      <div className="grid grid-cols-12 divide-x divide-slate-100 text-left">
                        
                        {/* Column 1: Primary Category */}
                        <div className="col-span-4 bg-slate-50/60 p-5">
                          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-200/80">
                            <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#040C1A]">
                              Primary Category
                            </span>
                            <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                              Core
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {megaMenuData.primaryCategories.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  href={item.href}
                                  className="block py-1.5 px-2.5 rounded-lg text-[11.5px] font-bold text-slate-700 hover:text-blue-600 hover:bg-white transition-all line-clamp-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: Catalogue Categories with Counts */}
                        <div className="col-span-4 p-5 bg-white">
                          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100">
                            <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#040C1A]">
                              All Categories
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              140+ Items
                            </span>
                          </div>
                          <ul className="space-y-1">
                            {megaMenuData.productCategories.map((cat, idx) => (
                              <li key={idx}>
                                <Link
                                  href={cat.href}
                                  className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-[11.5px] font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 transition-all group/item"
                                >
                                  <span className="group-hover/item:font-bold">{cat.name}</span>
                                  <span className="text-[10.5px] font-mono text-slate-400 group-hover/item:text-blue-600 font-bold">
                                    ({cat.count})
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3: Sector & Material */}
                        <div className="col-span-4 p-5 bg-[#FAFCFF] flex flex-col justify-between space-y-4">
                          
                          {/* Top: Sector / Application */}
                          <div>
                            <div className="flex items-center justify-between pb-1.5 mb-2.5 border-b border-slate-200/60">
                              <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#040C1A]">
                                Sector / Application
                              </span>
                            </div>
                            <ul className="space-y-1">
                              {megaMenuData.sectors.map((sec, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={sec.href}
                                    className="block py-1 px-2 rounded-md text-[11.5px] font-medium text-slate-600 hover:text-blue-600 hover:bg-white transition-colors"
                                  >
                                    • {sec.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Bottom: Worktop & Material */}
                          <div className="pt-3 border-t border-slate-200/80">
                            <div className="flex items-center justify-between pb-1.5 mb-2.5 border-b border-slate-200/60">
                              <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[#040C1A]">
                                Worktop & Material
                              </span>
                            </div>
                            <ul className="space-y-1">
                              {megaMenuData.materials.map((mat, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={mat.href}
                                    className="block py-1 px-2 rounded-md text-[11.5px] font-medium text-slate-600 hover:text-blue-600 hover:bg-white transition-colors"
                                  >
                                    • {mat.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>

                      </div>

                      {/* Mega Menu Footer Action Bar */}
                      <div className="bg-[#040C1A] text-white px-5 py-3 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="text-slate-300 text-[11px]">Explore 140+ Specialized Laboratory Models & Configurations</span>
                        </div>
                        <Link
                          href="/products"
                          className="font-bold text-blue-400 hover:text-white flex items-center gap-1 text-[11px] transition-colors"
                        >
                          <span>Open Full Catalogue</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12.5px] xl:text-[13px] font-semibold transition-colors relative py-1.5 inline-flex items-center gap-1 ${
                  isActive
                    ? "text-[#2563EB] font-bold after:w-full"
                    : "text-slate-700 hover:text-[#2563EB] after:w-0 hover:after:w-full"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#2563EB] after:transition-all after:duration-200`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Phone Pill on Large Desktop */}
          <a
            href="tel:+918193856070"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-800 hover:text-blue-600 px-3.5 py-2 rounded-full border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>+91 8193856070</span>
          </a>

          {/* Quick Call Icon Button on Medium Screens */}
          <a
            href="tel:+918193856070"
            className="hidden sm:flex xl:hidden items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
            aria-label="Call Space Vision Lab"
          >
            <Phone className="w-4 h-4 text-[#2563EB]" />
          </a>

          {onOpenQuote && (
            <button
              onClick={() => onOpenQuote()}
              className="hidden sm:flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Plan Your Lab</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Mobile menu hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-5 py-5 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.name === "Products") {
                return (
                  <div key={link.name} className="border-b border-slate-100 pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-sm font-bold py-2.5 px-3 rounded-xl transition-colors flex-1 ${
                          isActive ? "text-blue-600 bg-blue-50/80 font-extrabold" : "text-slate-800"
                        }`}
                      >
                        <span>{link.name}</span>
                      </Link>
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="p-2 text-slate-500 hover:text-blue-600"
                        aria-label="Toggle Products Submenu"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-blue-600" : ""}`} />
                      </button>
                    </div>

                    {mobileProductsOpen && (
                      <div className="pl-3 pr-1 py-2 space-y-3 bg-slate-50 rounded-xl my-1 border border-slate-200/80 text-xs">
                        {/* Primary Category */}
                        <div>
                          <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                            Primary Category
                          </span>
                          <div className="space-y-1 pl-1">
                            {megaMenuData.primaryCategories.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-slate-700 hover:text-blue-600 font-semibold text-[11px]"
                              >
                                • {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Catalogue Categories */}
                        <div className="pt-2 border-t border-slate-200/60">
                          <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                            Catalogue Categories
                          </span>
                          <div className="grid grid-cols-2 gap-1 pl-1">
                            {megaMenuData.productCategories.map((cat, i) => (
                              <Link
                                key={i}
                                href={cat.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-1 text-slate-700 hover:text-blue-600 text-[11px] flex items-center justify-between pr-2"
                              >
                                <span className="truncate">{cat.name}</span>
                                <span className="text-[10px] font-mono text-slate-400 font-bold shrink-0">({cat.count})</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Sector / Application */}
                        <div className="pt-2 border-t border-slate-200/60">
                          <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                            Sector / Application
                          </span>
                          <div className="space-y-1 pl-1">
                            {megaMenuData.sectors.map((sec, i) => (
                              <Link
                                key={i}
                                href={sec.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-slate-700 hover:text-blue-600 text-[11px]"
                              >
                                • {sec.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Worktop & Material */}
                        <div className="pt-2 border-t border-slate-200/60">
                          <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                            Worktop & Material
                          </span>
                          <div className="space-y-1 pl-1">
                            {megaMenuData.materials.map((mat, i) => (
                              <Link
                                key={i}
                                href={mat.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-slate-700 hover:text-blue-600 text-[11px]"
                              >
                                • {mat.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-bold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                    isActive ? "text-blue-600 bg-blue-50/80 font-extrabold" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                </Link>
              );
            })}

            <div className="flex flex-col gap-2.5 pt-4 mt-2 border-t border-slate-100">
              <a
                href="tel:+918193856070"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors"
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
                  className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3.5 rounded-xl font-bold text-xs shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <span>Plan Your Lab — Free 3D Layout</span>
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
