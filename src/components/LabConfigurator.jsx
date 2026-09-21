"use client";

import { useState } from "react";
import { Sliders, Check, Layers, Ruler, ShieldAlert, Sparkles, ArrowRight, RefreshCw } from "lucide-react";

export default function LabConfigurator({ onConfigureQuote }) {
  const [frameType, setFrameType] = useState("c-frame");
  const [worktop, setWorktop] = useState("trespa");
  const [width, setWidth] = useState("1800");
  const [depth, setDepth] = useState("750");
  const [heightType, setHeightType] = useState("850");
  const [selectedAccessories, setSelectedAccessories] = useState([
    "reagent-rack",
    "faucet-sink",
    "drawer-pedestal"
  ]);

  const frameOptions = [
    { id: "c-frame", name: "C-Frame Cantilever", cap: "600 kg", desc: "Maximum legroom & flexible underbench storage" },
    { id: "h-frame", name: "H-Frame Heavy Duty", cap: "1000 kg", desc: "Rigid boxed steel for heavy analytical instruments" },
    { id: "floor-mounted", name: "Floor Mounted Solid", cap: "850 kg", desc: "Integrated high-density cabinetry plinth" },
    { id: "mobile-flex", name: "Flex Mobile Bench", cap: "400 kg", desc: "Lockable castors for agile reconfigurable spaces" }
  ];

  const worktopOptions = [
    { id: "trespa", name: "TRESPA® TopLab PLUS", grade: "16mm Solid Phenolic", rating: "Acid & Solvents" },
    { id: "epoxy", name: "Solid Epoxy Resin (Molded)", grade: "19mm Seamless Marine Edge", rating: "Extreme Thermal & Acid" },
    { id: "ceramic", name: "Industrial Ceramic Slab", grade: "20mm Sintered Porcelain", rating: "Scratch & Boiling Acid Proof" },
    { id: "stainless", name: "SS 304 / 316 Stainless", grade: "1.5mm Austenitic Finish", rating: "Sterile & Autoclave Safe" },
    { id: "polypropylene", name: "PP Homopolymer", grade: "15mm Thermowelded", rating: "100% Rust & HF Acid Proof" }
  ];

  const accessoriesList = [
    { id: "reagent-rack", label: "2-Tier Reagent Shelf with LED Task Light", badge: "Utility" },
    { id: "faucet-sink", label: "3-Way Gooseneck Water Tap & PP Cup Sink", badge: "Plumbing" },
    { id: "gas-turret", label: "Twin Gas / Vacuum / Compressed Air Turret", badge: "Gases" },
    { id: "drawer-pedestal", label: "Under-Bench 3-Drawer Steel Pedestal Unit", badge: "Storage" },
    { id: "anti-vibration", label: "Integrated Granite Anti-Vibration Balance Pad", badge: "Precision" },
    { id: "eyewash", label: "Bench-Mounted Pull-Out Emergency Eye Wash", badge: "Safety" }
  ];

  const toggleAccessory = (id) => {
    if (selectedAccessories.includes(id)) {
      setSelectedAccessories(selectedAccessories.filter((item) => item !== id));
    } else {
      setSelectedAccessories([...selectedAccessories, id]);
    }
  };

  const handleGenerateQuote = () => {
    const selectedFrame = frameOptions.find((f) => f.id === frameType)?.name;
    const selectedWorktopObj = worktopOptions.find((w) => w.id === worktop)?.name;
    const selectedAccNames = selectedAccessories
      .map((id) => accessoriesList.find((a) => a.id === id)?.label)
      .filter(Boolean);

    const configSummary = `Custom Workstation Configuration:\n• Frame: ${selectedFrame}\n• Worktop: ${selectedWorktopObj}\n• Dimensions: ${width}mm (W) x ${depth}mm (D) x ${heightType}mm (H)\n• Accessories (${selectedAccNames.length}):\n  - ${selectedAccNames.join("\n  - ")}`;

    onConfigureQuote(configSummary);
  };

  return (
    <section id="configurator" className="py-20 bg-white relative tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
            <Sliders className="w-3.5 h-3.5 text-blue-600" />
            <span>Interactive Laboratory Workstation Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1C38] tracking-tight">
            Configure Your Custom Lab System
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Select frames, heavy-duty chemical worktops, exact dimensions, and integrated utilities to match your scientific workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Configuration Column */}
          <div className="lg:col-span-7 space-y-8 bg-slate-50/70 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
            
            {/* Step 1: Frame Structure */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#0A1C38] text-white text-xs font-extrabold flex items-center justify-center">1</span>
                <h3 className="text-base font-extrabold text-[#0A1C38]">Choose Structural Frame System</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {frameOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setFrameType(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      frameType === item.id
                        ? "bg-white border-blue-600 ring-2 ring-blue-500/20 shadow-md"
                        : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#0A1C38]">{item.name}</span>
                      <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{item.cap}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Worktop Material */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#0A1C38] text-white text-xs font-extrabold flex items-center justify-center">2</span>
                <h3 className="text-base font-extrabold text-[#0A1C38]">Select Chemical Resistant Worktop</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {worktopOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setWorktop(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      worktop === item.id
                        ? "bg-white border-blue-600 ring-2 ring-blue-500/20 shadow-md"
                        : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#0A1C38]">{item.name}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{item.grade}</span>
                      <span className="text-blue-600 font-semibold">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Dimensions */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#0A1C38] text-white text-xs font-extrabold flex items-center justify-center">3</span>
                <h3 className="text-base font-extrabold text-[#0A1C38]">Specify Workstation Dimensions</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                
                {/* Width */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Length (W)</label>
                  <select
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full text-xs font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                  >
                    <option value="1200">1200 mm (4 ft)</option>
                    <option value="1500">1500 mm (5 ft)</option>
                    <option value="1800">1800 mm (6 ft)</option>
                    <option value="2400">2400 mm (8 ft)</option>
                  </select>
                </div>

                {/* Depth */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Depth (D)</label>
                  <select
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    className="w-full text-xs font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                  >
                    <option value="750">750 mm (Standard)</option>
                    <option value="900">900 mm (Island / Deep)</option>
                    <option value="1050">1050 mm (Double Island)</option>
                  </select>
                </div>

                {/* Height */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Height (H)</label>
                  <select
                    value={heightType}
                    onChange={(e) => setHeightType(e.target.value)}
                    className="w-full text-xs font-bold text-slate-800 bg-transparent outline-none cursor-pointer"
                  >
                    <option value="850">850 mm (Sitting Lab)</option>
                    <option value="900">900 mm (Standing Lab)</option>
                    <option value="Adjustable">Motorized Height (700-1100mm)</option>
                  </select>
                </div>

              </div>
            </div>

            {/* Step 4: Accessories */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#0A1C38] text-white text-xs font-extrabold flex items-center justify-center">4</span>
                <h3 className="text-base font-extrabold text-[#0A1C38]">Integrated Accessories & Utilities</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {accessoriesList.map((acc) => {
                  const isChecked = selectedAccessories.includes(acc.id);
                  return (
                    <div
                      key={acc.id}
                      onClick={() => toggleAccessory(acc.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? "bg-blue-50/80 border-blue-500 text-blue-950 font-bold"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-white ${
                            isChecked ? "bg-blue-600" : "border border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs">{acc.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Live Spec Sheet & Preview Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#0A1C38] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-700/80 relative overflow-hidden tech-grid-dark">
              
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold">LIVE CONFIGURATION SPEC</span>
                  <h4 className="text-lg font-extrabold text-white">Space Vision Workstation</h4>
                </div>
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Specifications List */}
              <div className="space-y-3.5 mb-8 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Frame Architecture:</span>
                  <span className="text-white font-bold">{frameOptions.find((f) => f.id === frameType)?.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Surface Material:</span>
                  <span className="text-white font-bold">{worktopOptions.find((w) => w.id === worktop)?.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Overall Footprint:</span>
                  <span className="text-white font-mono font-bold">{width}mm (L) × {depth}mm (D) × {heightType}mm (H)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-400">Load Classification:</span>
                  <span className="text-emerald-400 font-mono font-bold">{frameOptions.find((f) => f.id === frameType)?.cap}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-2">Selected Add-ons ({selectedAccessories.length}):</span>
                  {selectedAccessories.length > 0 ? (
                    <ul className="space-y-1 pl-3 text-[11px] text-slate-300">
                      {selectedAccessories.map((id) => (
                        <li key={id} className="list-disc text-blue-300">
                          {accessoriesList.find((a) => a.id === id)?.label}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-[11px] text-slate-500 italic">No optional accessories selected</span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleGenerateQuote}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 rounded-2xl text-xs transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 cursor-pointer"
              >
                <span>Request Quotation for this Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                Includes CAD layout rendering, SEFA test report & on-site delivery estimate.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
