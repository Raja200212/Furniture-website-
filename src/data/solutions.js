export const solutions = [
  {
    id: "education",
    title: "School & University Labs",
    tagline: "Inspiring future scientists with rugged, ergonomic learning labs",
    badge: "Education & STEM",
    image: "https://spacevisionlabs.com/images/hexagonal-lab-table-for-students-3.jpg",
    description: "Modular, safety-certified laboratory benches, wet chemistry tables, octagonal islands, and instructor podiums designed for rigorous academic environments.",
    features: [
      "Heavy-gauge scratch-resistant C-Frame steel structures",
      "Chemical-resistant solid phenolic & epoxy surfaces",
      "Integrated emergency gas shutoff & wet lab services",
      "ADA-compliant adjustable height workstations"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare & Pathology",
    tagline: "Clinical precision with anti-microbial clean environments",
    badge: "Clinical & Diagnostics",
    image: "https://spacevisionlabs.com/images/pathology-workstation.jpg",
    description: "Seamless, sterile, and non-porous workstations tailored for histopathology, blood banks, microbiology, and hospital testing suites.",
    features: [
      "Seamless 304/316 grade stainless steel & solid surface worktops",
      "Integrated chemical & biological waste disposal chutes",
      "Deep surgical-grade PP wash sinks with touchless sensor faucets",
      "Vibration-isolated precision microtome & balance stands"
    ]
  },
  {
    id: "research",
    title: "R&D & Industrial Chemistry",
    tagline: "Heavy-duty modular systems for cutting-edge innovation",
    badge: "Industrial & Chemical",
    image: "https://spacevisionlabs.com/images/pp-lab-bench-4.jpg",
    description: "Extreme chemical, thermal, and acid-resistant laboratory benches, walk-in fume hoods, and solvent extraction cabinets.",
    features: [
      "TRESPA® TopLab & flame-retardant ceramic worktops",
      "Ductless & bypass fume extraction with scrubbers",
      "Flammable & toxic reagent safety storage cabinets",
      "Flexible overhead service spines (Gas, Vacuum, DI Water, High Power)"
    ]
  },
  {
    id: "cleanroom",
    title: "Cleanrooms & Modular Enclosures",
    tagline: "ISO Class 5-8 certified contamination-controlled spaces",
    badge: "Cleanroom & Bio",
    image: "https://spacevisionlabs.com/images/clean-room-booth.jpg",
    description: "Turnkey deployable cleanroom booths, dynamic air showers, interlocked pass boxes, and laminar flow hoods.",
    features: [
      "HEPA / ULPA air filtration with laminar downward airflow",
      "Electropolished stainless steel interlocked pass boxes",
      "Modular hygienic partition panels & laminar flow workstations",
      "Positive pressure airlock and dynamic air shower vestibules"
    ]
  }
];

export const workstationSystems = [
  {
    id: "c-frame",
    name: "C-Frame Modular System",
    badge: "Most Popular",
    loadCapacity: "600 kg / bench",
    description: "Cantilevered tubular steel frame offering maximum under-bench legroom, suspended or mobile storage pedestal flexibility, and easy floor cleaning.",
    bestFor: "Academic labs, clinical diagnostics, biotech research",
    specs: ["60x40x2mm cold-rolled steel", "Epoxy powder-coated (80μm)", "Leveling feet with ±30mm range"]
  },
  {
    id: "h-frame",
    name: "H-Frame Heavy Duty System",
    badge: "Heavy Load",
    loadCapacity: "1000 kg / bench",
    description: "Robust dual-column boxed frame built for heavy analytical instruments, mass spectrometers, centrifuges, and industrial testing equipment.",
    bestFor: "Analytical testing, metallurgy, high-mass equipment suites",
    specs: ["80x40x2.5mm rectangular steel", "Welded cross-beam bracing", "Anti-vibration floor anchoring"]
  },
  {
    id: "floor-mounted",
    name: "Floor Mounted Pedestal System",
    badge: "High Storage",
    loadCapacity: "850 kg / bench",
    description: "Solid base-cabinet construction providing unmatched storage volume and rock-solid foundation for continuous utility routing.",
    bestFor: "Wet chemistry, heavy chemical storage, utility-dense lab setups",
    specs: ["Electro-galvanized steel carcass", "Waterproof recessed plinth", "Full-extension ball-bearing slides"]
  },
  {
    id: "mobile-flex",
    name: "Flex Mobile Workstation",
    badge: "Agile Lab",
    loadCapacity: "400 kg / bench",
    description: "Agile modular lab cart on lockable ESD-safe castors with height adjustment and plug-and-play quick-connect utility drops.",
    bestFor: "Robotics, rapid prototyping, agile multi-disciplinary labs",
    specs: ["Lockable heavy-duty polyurethane castors", "Integrated power umbilical", "Modular overhead shelves"]
  }
];

export const stats = [
  { value: "140+", label: "Specialized Lab Products", sub: "Modular benches, hoods & storage" },
  { value: "500+", label: "Turnkey Installations", sub: "Universities, pharma & hospitals" },
  { value: "15+", label: "Years of Engineering", sub: "ISO 9001:2015 certified quality" },
  { value: "100%", label: "Custom Configurable", sub: "3D CAD & tailored manufacturing" }
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Site Survey & Assessment",
    image: "/turnkey-discover.jpg",
    desc: "Site visits, brief assessment, and understanding exact chemical, electrical, and workflow requirements.",
    points: [
      "3D laser space scanning & layout evaluation",
      "Chemical compatibility & exhaust duct audit",
      "Gas manifold, plumbing & power load mapping"
    ]
  },
  {
    step: "02",
    title: "Design",
    subtitle: "3D CAD & BOQ Planning",
    image: "/turnkey-design.jpg",
    desc: "Space planning, technical layout drawings, material selection, and accurate BOQ quotation generation.",
    points: [
      "Photorealistic 3D virtual lab simulations",
      "Ergonomic workflow & cleanroom zoning",
      "Comprehensive itemized BOQ & tech specs"
    ]
  },
  {
    step: "03",
    title: "Manufacture",
    subtitle: "Precision CNC Fabrication",
    image: "/turnkey-manufacture.jpg",
    desc: "Controlled in-house production with precision sheet metal, woodwork, and powder-coating lines.",
    points: [
      "CNC laser cutting & robotic welding lines",
      "7-tank anti-rust pre-treatment & pure epoxy",
      "Structural load compliance & QA verification"
    ]
  },
  {
    step: "04",
    title: "Deliver",
    subtitle: "Turnkey Installation & Commissioning",
    image: "/turnkey-deliver.jpg",
    desc: "Safe transport, on-site structural assembly, utility integration, and final project handover.",
    points: [
      "Crated shock-proof logistics & delivery",
      "Factory-certified mechanical & gas hookup",
      "Fume containment testing & project sign-off"
    ]
  }
];
