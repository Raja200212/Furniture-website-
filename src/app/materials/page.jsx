"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MaterialsPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteSubject, setQuoteSubject] = useState("");

  const handleOpenQuote = (subject = "") => {
    setQuoteSubject(subject);
    setQuoteModalOpen(true);
  };

  const productCategories = [
    {
      id: "eyewash",
      title: "Emergency Shower Eyewash",
      image: "https://spacevisionlabs.com/images/eye-washes-emergency-showers.jpg",
      desc: "Emergency eyewash & shower stations are essential in laboratories, industrial, and manufacturing facilities, for those in close contact with harmful chemicals that may cause serious injury.",
      link: "/materials/emergency-shower-eyewash"
    },
    {
      id: "fittings",
      title: "Laboratory Fittings",
      image: "https://spacevisionlabs.com/images/laboratory-water-tap-for-sink.jpg",
      desc: "Our water and gas fittings are developed with innovative configuration and operation in order to meet various requirements of a modern laboratory. Our ranges include water fittings, gas fittings, and water mixer.",
      link: "/materials/laboratory-fittings"
    },
    {
      id: "sinks",
      title: "Lab Sinks & Waste System",
      image: "https://spacevisionlabs.com/images/laboratory-sinks.jpg",
      desc: "Our sinks and waste system has superior resistance to numerous acids, alkalines, reagents and solvents. Easy to install and accommodative to laboratory requirements. Ideal for use in demanding laboratories.",
      link: "/materials/lab-sinks-waste-system"
    },
    {
      id: "fume",
      title: "Fume Extraction",
      image: "https://spacevisionlabs.com/images/vav-fume-hood.jpg",
      desc: "Functionality and durability in mind, Method fume hoods are designed for the harshest modern laboratory environment. We have configurations available to cater to your fume hood specific needs and application.",
      link: "/materials/fume-extraction"
    },
    {
      id: "storage",
      title: "Laboratory Storage Cabinet",
      image: "https://spacevisionlabs.com/images/60gal-227l-ventilated-flammable-storage-cabinet.jpg",
      desc: "Our range of cabinets includes flammable, chemical, microscope, and PPE storage cabinets. Suitable and safe for usage in chemical-related industries, laboratories, hospitals, schools, colleges and universities.",
      link: "/materials/laboratory-storage-cabinet"
    },
    {
      id: "spill",
      title: "Spill Containment",
      image: "https://spacevisionlabs.com/images/340l-weak-corrosive-storage-cabinet.jpg",
      desc: "Spill containment pallets contain leaks, drips, and spills from drums with capacities up to 240L. Made of chemical resistant polyethylene, the units are extremely corrosion resistant.",
      link: "/materials/spill-containment"
    },
    {
      id: "worktops",
      title: "Worktop & Countertop Materials",
      image: "https://spacevisionlabs.com/images/laboratory-trespa-worktop.jpg",
      desc: "Chemical-resistant TRESPA TopLab, pure monolithic epoxy resin, sintered ceramic, and grade 316 stainless steel surfaces designed to withstand aggressive thermal and chemical stress demands.",
      link: "/materials/worktop-materials"
    },
    {
      id: "workstations",
      title: "Modular Lab Workstations",
      image: "https://spacevisionlabs.com/images/floor-mounted-lab-bench-2.jpg",
      desc: "Flexible C-frame, H-frame, and floor-mounted analytical benches built with heavy-duty electrostatic powder-coated steel frames and integrated overhead utility raceways.",
      link: "/materials/modular-lab-workstations"
    },
    {
      id: "others",
      title: "Others & Seating",
      image: "https://spacevisionlabs.com/images/dt-01-dental-lab-workstation.jpg",
      desc: "Experience the pinnacle of comfort and productivity with Ayur Chair. Engineered for ergonomic excellence, it not only relieves lower back pain but also enhances focus. Redefine your seating with this thoughtfully crafted solution.",
      link: "/materials/others-seating"
    },
    {
      id: "power-track",
      title: "Line8 – Power Track",
      image: "https://spacevisionlabs.com/images/laboratory-water-fitting.jpg",
      desc: "Transform Your Laboratory Experience with Line8 – Power Track: Where Precision Craftsmanship Meets Unrivaled Durability, Seamless Connectivity, and Tailored Convenience for an Unprecedented Upgrade!",
      link: "/materials/line8-power-track"
    }
  ];

  const sectorCategories = [
    {
      id: "education",
      title: "Education & STEAM",
      image: "/school-lab.jpg",
      desc: "Durable, ergonomic, and chemical-safe laboratory workstations, demonstration benches, and secure reagent storage engineered specifically for K-12 and STEAM educational environments.",
      link: "/materials/education-steam"
    },
    {
      id: "university",
      title: "University Research",
      image: "/university-lab.jpg",
      desc: "High-spec modular laboratory bench systems, ducted fume extraction, and specialized instrumentation tables built for rigorous postgraduate and advanced research faculties.",
      link: "/materials/university-research"
    },
    {
      id: "healthcare",
      title: "Hospital & Pathology",
      image: "/healthcare-lab.jpg",
      desc: "Sterile, easy-to-sanitize stainless steel and phenolic workstations, histological grossing stations, and diagnostic pathology worktops adhering to strict medical lab standards.",
      link: "/materials/hospital-pathology"
    },
    {
      id: "industrial",
      title: "Industrial QC / R&D",
      image: "/industrial-lab.jpg",
      desc: "Heavy-duty structural steel platforms, chemical-resistant resin work surfaces, and specialized storage cabinets designed for continuous industrial quality control and testing.",
      link: "/materials/industrial-qc-rd"
    },
    {
      id: "cleanroom",
      title: "Cleanroom Facility",
      image: "https://spacevisionlabs.com/images/air-shower-1.jpg",
      desc: "ISO-compliant cleanroom furniture, dynamic pass boxes, air showers, and seamless anti-static stainless steel benches designed to minimize particulate accumulation.",
      link: "/materials/cleanroom-facility"
    }
  ];

  const materialCategories = [
    {
      id: "steel-frame",
      title: "All-Steel Frame",
      image: "https://spacevisionlabs.com/images/c-frame-lab-bench-2.jpg",
      desc: "Heavy-gauge cold-rolled steel structural frames with high-durability electrostatic epoxy powder coating, offering superior static load capacity and seismic stability.",
      link: "/materials/all-steel-frame"
    },
    {
      id: "pp-material",
      title: "Polypropylene (PP)",
      image: "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg",
      desc: "Seamless, non-porous 100% pure polypropylene construction engineered for ultra-aggressive acid digestion, aqua regia handling, and zero-corrosion longevity.",
      link: "/materials/polypropylene-pp"
    },
    {
      id: "stainless-steel",
      title: "Stainless Steel",
      image: "https://spacevisionlabs.com/images/floor-mounted-lab-sink-cabinet-2.jpg",
      desc: "Grade 304/316 seamless stainless steel work surfaces and cabinetry offering optimal sanitary performance, heat resistance, and easy biological decontamination.",
      link: "/materials/stainless-steel"
    },
    {
      id: "epoxy-phenolic",
      title: "Epoxy / Phenolic",
      image: "https://spacevisionlabs.com/images/laboratory-trespa-worktop.jpg",
      desc: "Monolithic solid epoxy resin and high-pressure phenolic compact laminates providing comprehensive resistance against harsh chemical reagents, moisture, and staining.",
      link: "/materials/epoxy-phenolic"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFC] text-[#0B111D]">
      <Header onOpenQuote={() => handleOpenQuote("Product Materials Consultation")} />

      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          {/* =========================================================================
              SECTION 1: PRIMARY CATEGORY — OUR PRODUCTS
              ========================================================================= */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
              <span className="w-4 h-0.5 bg-blue-600"></span>
              <span>Primary Category</span>
              <span className="w-4 h-0.5 bg-blue-600"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight mb-3">
              Primary Category — Our Products
            </h1>
            <div className="w-16 h-0.5 bg-[#2B4E9B] mx-auto mb-4" />
            <p className="text-xs sm:text-sm text-slate-500">
              Explore our complete range of certified laboratory furniture, fittings, work surfaces, and containment equipment.
            </p>
          </div>

          {/* 3-COLUMN PRODUCT CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {productCategories.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-none border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#432C7A] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Image & Content Container */}
                <div className="p-8 pb-6 flex flex-col items-center text-center">
                  
                  {/* Product Illustration Link */}
                  <Link
                    href={item.link}
                    className="h-44 w-full flex items-center justify-center mb-6 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-[210px] object-contain group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                      }}
                    />
                  </Link>

                  {/* Title in Deep Purple/Navy */}
                  <Link
                    href={item.link}
                    className="min-h-[56px] flex items-center justify-center"
                  >
                    <h2 className="text-lg sm:text-xl font-bold text-[#3B2D71] group-hover:text-blue-600 transition-colors mb-3 tracking-tight text-center">
                      {item.title}
                    </h2>
                  </Link>

                  {/* Description Paragraph */}
                  <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs font-normal">
                    {item.desc}
                  </p>

                </div>

                {/* Solid Full-Width Purple "LEARN MORE" Button */}
                <Link
                  href={item.link}
                  className="w-full bg-[#432C7A] hover:bg-[#32205E] active:bg-[#251648] text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase py-3.5 text-center transition-colors block shadow-xs"
                >
                  LEARN MORE
                </Link>

              </div>
            ))}
          </div>

          {/* =========================================================================
              SECTION 2: SECTOR / APPLICATION
              ========================================================================= */}
          <div className="mt-20 pt-16 border-t border-slate-200/80">
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                <span className="w-4 h-0.5 bg-blue-600"></span>
                <span>Sector / Application</span>
                <span className="w-4 h-0.5 bg-blue-600"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight mb-3">
                Sector / Application — Specialized Environments
              </h2>
              <div className="w-16 h-0.5 bg-[#2B4E9B] mx-auto mb-4" />
              <p className="text-xs sm:text-sm text-slate-500">
                Tailored laboratory engineering systems designed for academic institutions, clinical healthcare, industrial R&D, and cleanroom facilities.
              </p>
            </div>

            {/* 3-Column Sector Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {sectorCategories.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-none border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#432C7A] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Image & Content Container */}
                  <div className="p-8 pb-6 flex flex-col items-center text-center">
                    
                    {/* Sector Illustration Link */}
                    <Link
                      href={item.link}
                      className="h-44 w-full flex items-center justify-center mb-6 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-[240px] w-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                        }}
                      />
                    </Link>

                    {/* Title in Deep Purple/Navy */}
                    <Link
                      href={item.link}
                      className="min-h-[56px] flex items-center justify-center"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-[#3B2D71] group-hover:text-blue-600 transition-colors mb-3 tracking-tight text-center">
                        {item.title}
                      </h3>
                    </Link>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs font-normal">
                      {item.desc}
                    </p>

                  </div>

                  {/* Solid Full-Width Purple "LEARN MORE" Button */}
                  <Link
                    href={item.link}
                    className="w-full bg-[#432C7A] hover:bg-[#32205E] active:bg-[#251648] text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase py-3.5 text-center transition-colors block shadow-xs"
                  >
                    LEARN MORE
                  </Link>

                </div>
              ))}
            </div>
          </div>

          {/* =========================================================================
              SECTION 3: WORKTOP & MATERIAL
              ========================================================================= */}
          <div className="mt-20 pt-16 border-t border-slate-200/80">
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                <span className="w-4 h-0.5 bg-blue-600"></span>
                <span>Worktop & Material</span>
                <span className="w-4 h-0.5 bg-blue-600"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2430] tracking-tight mb-3">
                Worktop & Material — Surface Engineering
              </h2>
              <div className="w-16 h-0.5 bg-[#2B4E9B] mx-auto mb-4" />
              <p className="text-xs sm:text-sm text-slate-500">
                Explore laboratory-tested material compositions engineered for thermal shock, chemical corrosion, and heavy structural load endurance.
              </p>
            </div>

            {/* 3-Column Material Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {materialCategories.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-none border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#432C7A] transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Image & Content Container */}
                  <div className="p-8 pb-6 flex flex-col items-center text-center">
                    
                    {/* Material Illustration Link */}
                    <Link
                      href={item.link}
                      className="h-44 w-full flex items-center justify-center mb-6 overflow-hidden cursor-pointer"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-[210px] object-contain group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg";
                        }}
                      />
                    </Link>

                    {/* Title in Deep Purple/Navy */}
                    <Link
                      href={item.link}
                      className="min-h-[56px] flex items-center justify-center"
                    >
                      <h3 className="text-lg sm:text-xl font-bold text-[#3B2D71] group-hover:text-blue-600 transition-colors mb-3 tracking-tight text-center">
                        {item.title}
                      </h3>
                    </Link>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-xs font-normal">
                      {item.desc}
                    </p>

                  </div>

                  {/* Solid Full-Width Purple "LEARN MORE" Button */}
                  <Link
                    href={item.link}
                    className="w-full bg-[#432C7A] hover:bg-[#32205E] active:bg-[#251648] text-white text-[11px] sm:text-xs font-bold tracking-widest uppercase py-3.5 text-center transition-colors block shadow-xs"
                  >
                    LEARN MORE
                  </Link>

                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer onOpenQuote={() => handleOpenQuote("Product Materials Consultation")} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} initialData={quoteSubject} />
    </div>
  );
}
