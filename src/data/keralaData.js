export const DESTINATIONS = [
  {
    id: "alleppey",
    name: "Alleppey (Alappuzha)",
    tagline: "Venice of the East & Backwater Capital",
    category: "Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviews: 3840,
    duration: "2-3 Days",
    bestSeason: "Oct - Mar",
    highlights: ["Overnight Luxury Houseboat", "Punnamada Lake Kayaking", "Kuttanad Below-Sea-Level Farming", "Vembanad Sunset Cruise"],
    description: "Immerse yourself in a labyrinth of palm-fringed canals, serene lagoons, and floating villages. Watch life unfold slowly from the sundeck of your private traditional houseboat as the sun dips beneath the emerald canopy.",
    priceStarting: 4500,
    badge: "Most Popular"
  },
  {
    id: "munnar",
    name: "Munnar",
    tagline: "Rolling Tea Estates & Cloud-Kissed Peaks",
    category: "Hills & Mist",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    rating: 4.95,
    reviews: 4210,
    duration: "3-4 Days",
    bestSeason: "Sep - May",
    highlights: ["Anamudi Peak (South India's Highest)", "Kolukkumalai Sunrise (World's Highest Tea Estate)", "Mattupetty Dam & Eco Point", "Eravikulam Nilgiri Tahr Sanctuary"],
    description: "Perched 1,600 meters above sea level, Munnar is draped in endless rolling carpets of lush green tea plantations, tumbling waterfalls, and crisp mountain breeze scented with fresh eucalyptus.",
    priceStarting: 3800,
    badge: "Romantic Escape"
  },
  {
    id: "wayanad",
    name: "Wayanad",
    tagline: "Ancient Caves, Spice Hills & Rainforest Treehouses",
    category: "Wilderness & Hills",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.85,
    reviews: 2950,
    duration: "3 Days",
    bestSeason: "Oct - May",
    highlights: ["Edakkal Prehistoric Rock Engravings", "Banasura Sagar Earth Dam", "Chembra Heart-Shaped Lake Trek", "Kuruva Bamboo Rafting"],
    description: "A misty paradise nestled in the Western Ghats teeming with wild elephants, aromatic coffee and cardamom plantations, ancient tribal folklore, and secluded luxury treehouse retreats.",
    priceStarting: 4200,
    badge: "Eco Adventure"
  },
  {
    id: "varkala",
    name: "Varkala Cliff & Beach",
    tagline: "Dramatic Red Laterite Cliffs & Sacred Arabian Sea",
    category: "Beaches & Coast",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    rating: 4.88,
    reviews: 2470,
    duration: "2-3 Days",
    bestSeason: "Nov - Apr",
    highlights: ["Papanasam Holy Cleansing Beach", "Cliff-top Bohemian Cafes & Live Music", "Surfing & Paragliding", "Janardhana Swamy 2000-Yr Temple"],
    description: "A breathtaking geological wonder where dramatic crimson cliffs plummet directly into the azure Arabian Sea. Known for its laid-back bohemian vibe, sunset yoga sessions, and vibrant seaside bistros.",
    priceStarting: 2900,
    badge: "Sunset Haven"
  },
  {
    id: "kochi",
    name: "Fort Kochi & Mattancherry",
    tagline: "Centuries of Spice Trade, Art & Colonial Heritage",
    category: "Heritage & Culture",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviews: 3100,
    duration: "2 Days",
    bestSeason: "All Year",
    highlights: ["Iconic 14th Century Chinese Fishing Nets", "Jew Town & Paradesi Synagogue", "Kochi-Muziris Biennale Art Exhibitions", "Traditional Kathakali & Kalaripayattu Theatres"],
    description: "The historical Queen of the Arabian Sea where Portuguese mansions, Dutch palaces, British clubs, and ancient spice warehouses blend with vibrant modern art, boutique heritage hotels, and waterfront cafes.",
    priceStarting: 3200,
    badge: "Culture Capital"
  },
  {
    id: "thekkady",
    name: "Thekkady (Periyar)",
    tagline: "Wild Tiger Reserve, Elephants & Cardamom Hills",
    category: "Wildlife & Safari",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80",
    rating: 4.82,
    reviews: 2180,
    duration: "2 Days",
    bestSeason: "Sep - Apr",
    highlights: ["Periyar Lake Boat Wildlife Safari", "Spice Plantation Guided Walks", "Bamboo Rafting in Tiger Reserve", "Tribal Village Heritage Trails"],
    description: "Breathe in the rich aroma of fresh black pepper, cloves, and cardamom as you explore dense teak forests and cruise serene lakes where herds of wild elephants come to drink and bathe.",
    priceStarting: 3500,
    badge: "Wildlife Safari"
  }
];

export const TOUR_PACKAGES = [
  {
    id: "pkg-kerala-essence",
    title: "Enchanting Kerala Express: Hills & Backwaters",
    duration: "4 Days / 3 Nights",
    destinations: ["Cochin", "Munnar", "Alleppey"],
    price: 14999,
    originalPrice: 19999,
    rating: 4.94,
    reviews: 620,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    badge: "Best Seller",
    theme: "Nature & Relaxation",
    inclusions: ["Private AC Luxury Sedan", "4-Star Hill Resort in Munnar", "1 Night Private Houseboat with All Meals", "Breakfast Daily", "Sightseeing & Entry Permits", "Dedicated Local Guide"],
    itinerary: [
      { day: 1, title: "Arrival Cochin to Munnar", desc: "Scenic drive through Cheeyappara & Valara waterfalls. Check-in to luxury tea estate resort." },
      { day: 2, title: "Munnar Hill & Tea Safari", desc: "Visit Eravikulam National park, Mattupetty Dam, Echo Point and tea manufacturing museum." },
      { day: 3, title: "Munnar to Alleppey Houseboat", desc: "Board your private luxury Kettuvallam at 12:00 PM. Enjoy traditional lunch, evening tea & candlelit dinner." },
      { day: 4, title: "Alleppey to Cochin Departure", desc: "Sunrise breakfast cruise, disembarkation and drop-off at Cochin International Airport / Railway station." }
    ]
  },
  {
    id: "pkg-grand-odyssey",
    title: "Grand Kerala Panorama: The Complete Odyssey",
    duration: "7 Days / 6 Nights",
    destinations: ["Cochin", "Munnar", "Thekkady", "Alleppey", "Marari Beach"],
    price: 28999,
    originalPrice: 38999,
    rating: 4.98,
    reviews: 490,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    badge: "Signature Tour",
    theme: "Luxury & Comprehensive",
    inclusions: ["Chauffeured Executive SUV", "5-Star Resorts & Boutique Heritage stays", "All-Inclusive Luxury Houseboat", "Periyar Boat Safari", "Kathakali & Kalaripayattu VIP Front Row Passes", "Cooking Masterclass with local Masterchef"],
    itinerary: [
      { day: 1, title: "Heritage Fort Kochi Discovery", desc: "Chinese nets, Santa Cruz Basilica, spice markets and evening harbor cruise." },
      { day: 2, title: "Journey to Misty Munnar", desc: "Cheeyappara falls, cardamom valleys, luxury resort check-in." },
      { day: 3, title: "Munnar Peaks & Tea Secrets", desc: "Tea estate walks, Kundala lake, flower gardens." },
      { day: 4, title: "Thekkady Wildlife & Spice Trails", desc: "Periyar lake safari, organic spice plantation tasting, evening martial arts show." },
      { day: 5, title: "Alleppey Luxury Houseboat Cruise", desc: "Gliding through narrow canals, fresh Karimeen fish meal prepared live." },
      { day: 6, title: "Marari Pristine Beach Rejuvenation", desc: "White sand beach resort, sunset Ayurvedic massage, fresh seafood dinner." },
      { day: 7, title: "Fond Farewells from Cochin", desc: "Morning beach yoga, souvenir shopping in Lulu Mall and airport transfer." }
    ]
  },
  {
    id: "pkg-ayurveda-wellness",
    title: "Pure Ayurvedic Panchakarma & Mind-Body Rejuvenation",
    duration: "6 Days / 5 Nights",
    destinations: ["Kovalam", "Varkala Coastal Sanctuary"],
    price: 34500,
    originalPrice: 44000,
    rating: 4.96,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    badge: "Holistic Health",
    theme: "Ayurveda & Spa",
    inclusions: ["Beachfront Ayurvedic Resort", "Daily Doctor Consultation & Pulse Diagnosis", "2 Daily Prescribed Therapies (Abhyanga, Shirodhara)", "Custom Sattvic Ayurvedic Organic Meals", "Daily Sunrise Yoga & Sunset Meditation", "Herbal Medicines & Wellness Kit"],
    itinerary: [
      { day: 1, title: "Arrival & Ayurvedic Consultation", desc: "Detailed Vaidya (Doctor) assessment, dosha analysis, and welcoming oil therapy." },
      { day: 2, title: "Abhyanga & Swedana Cleansing", desc: "4-hand herbal oil massage followed by medicinal steam therapy." },
      { day: 3, title: "Shirodhara & Deep Nervous Calming", desc: "Continuous warm herbal oil stream over third eye, calming beach walk." },
      { day: 4, title: "Njavarakizhi Herbal Rice Rejuvenation", desc: "Medicinal rice boluses infused in milk & herbal decoction." },
      { day: 5, title: "Detoxification & Sound Healing", desc: "Herbal internal cleansing, singing bowl sound bath, serene sunset meditation." },
      { day: 6, title: "Wellness Blueprint & Departure", desc: "Post-retreat lifestyle diet plan, farewell yoga and private transfer." }
    ]
  },
  {
    id: "pkg-honeymoon-paradise",
    title: "Romantic Backwater & Mist-Clad Honeymoon Retreat",
    duration: "5 Days / 4 Nights",
    destinations: ["Munnar", "Kumarakom", "Marari"],
    price: 24999,
    originalPrice: 32000,
    rating: 4.99,
    reviews: 540,
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    badge: "Couples Special",
    theme: "Romance & Luxury",
    inclusions: ["Private Honeymoon Suite with Plunge Pool", "Candlelight Dinner under the Stars", "Complimentary Honeymoon Cake & Bed of Flowers", "Couple Ayurvedic Spa Session", "Private 1-Bedroom Luxury Houseboat", "Sunset Champagne Cruise"],
    itinerary: [
      { day: 1, title: "Cochin to Munnar Luxury Mountain Villa", desc: "Welcome sparkling drink, private pool plunge, scenic candlelight dinner." },
      { day: 2, title: "Munnar Misty Vistas & High Tea", desc: "Private tea garden picnic, couple photoshoot, evening bonfire." },
      { day: 3, title: "Kumarakom Serene Lake Resort", desc: "Vembanad lakefront luxury cottage, sunset cruise, couple spa." },
      { day: 4, title: "Private Kettuvallam Houseboat Cruise", desc: "Exclusive boat cruise through untouched backwater lagoons with gourmet chef." },
      { day: 5, title: "Sweet Memories & Departure", desc: "Morning village canoe ride, Kerala souvenir gift box, airport drop." }
    ]
  }
];

export const HOUSEBOATS = [
  {
    id: "hb-imperial-glass",
    name: "The Imperial Emerald: All-Glass AC Cruiser",
    bedrooms: 1,
    capacity: "2-4 Guests",
    rating: 4.98,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 16500,
    features: ["Floor-to-Ceiling Glass Lounge", "Private Chef & Butler", "Jacuzzi on Observation Deck", "100% 24/7 Air Conditioning", "Kayaks & Fishing Gear Included"],
    route: "Alleppey - Punnamada - Vembanad Lake - Kuttanad"
  },
  {
    id: "hb-royal-heritage-2bed",
    name: "Travancore Royal Heritage Suite Houseboat",
    bedrooms: 2,
    capacity: "4-6 Guests",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 22000,
    features: ["2 Master Ensuite Bedrooms", "Handcrafted Anjili Wood & Coir Ceiling", "Upper Sundeck with Lounge Chairs", "Live Fish Catch Cooking", "Traditional Kerala Banquet"],
    route: "Kumarakom - Pathiramanal Bird Sanctuary - Alleppey"
  },
  {
    id: "hb-presidential-villa-3bed",
    name: "Maharaja Presidential Floating Palace",
    bedrooms: 3,
    capacity: "6-10 Guests",
    rating: 4.96,
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    pricePerNight: 32000,
    features: ["3 Luxury King Bedrooms", "Spacious Dining & Cocktail Bar", "Live Evening Classical Music / Flute", "Speedboat Escort for Shore Trips", "Conference & Family Gathering Lounge"],
    route: "Alleppey Round Cruise - Kainakary - Champakulam Church"
  }
];

export const AYURVEDA_THERAPIES = [
  {
    id: "abhyanga",
    name: "Abhyanga Herbal Massage",
    tagline: "Full-Body Warm Medicated Oil Therapy",
    duration: "60 - 90 Mins",
    benefits: ["Boosts blood circulation & lymph flow", "Relieves chronic muscle fatigue", "Nourishes skin & deep tissues", "Balances Vata & Pitta doshas"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    price: 2500
  },
  {
    id: "shirodhara",
    name: "Shirodhara Third-Eye Therapy",
    tagline: "Continuous Stream of Herbal Oil Over Forehead",
    duration: "45 - 60 Mins",
    benefits: ["Eliminates insomnia, anxiety & mental stress", "Prevents migraine & chronic headaches", "Heightens mental clarity and memory", "Deep meditation trance state"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    price: 3200
  },
  {
    id: "njavarakizhi",
    name: "Njavarakizhi Medicated Rice Poultice",
    tagline: "Rejuvenating Herbal Milk Rice Boluses",
    duration: "60 - 75 Mins",
    benefits: ["Improves muscle tone & joint stiffness", "Anti-aging cellular rejuvenation", "Soothes arthritis & nervous conditions", "Gives radiant skin glow"],
    image: "https://images.unsplash.com/photo-1512290900672-1f02e20d20d4?auto=format&fit=crop&w=600&q=80",
    price: 3800
  },
  {
    id: "panchakarma",
    name: "Full 7-Day Panchakarma Detoxification",
    tagline: "Total Cellular Cleansing & Dosha Reset",
    duration: "7 - 14 Days",
    benefits: ["Flushes deep-seated toxic Ama from organs", "Restores digestive fire (Agni)", "Strengthens immune resilience", "Reverses biological aging markers"],
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80",
    price: 28000
  }
];

export const CULINARY_SPECIALTIES = [
  {
    name: "Traditional Kerala Sadya",
    tagline: "The Royal 24-Dish Vegetarian Feast",
    description: "Served traditionally on a fresh green banana leaf featuring red matta rice, Parippu with pure ghee, Sambar, Avial, Thoran, Olan, Kalan, Pachadi, Ginger Puli Inji, Crispy Banana Chips, and golden Ada Pradhaman Payasam.",
    type: "Vegetarian / Royal Heritage",
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Karimeen Pollichathu",
    tagline: "Pearl Spot Fish Baked in Banana Leaf",
    description: "Freshly caught backwater pearl spot fish marinated in freshly pounded shallots, garlic, curry leaves, red chilies, and tangy Kudampuli (Malabar tamarind), slow-charred inside folded plantain leaves.",
    type: "Signature Seafood",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Appam with Coconut Vegetable/Chicken Stew",
    tagline: "Fluffy Fermented Rice Hoppers with Rich Coconut Milk",
    description: "Lacy, crisp-edged bowl-shaped rice pancakes with a soft pillowy center, paired with a mildly spiced aromatic stew infused with whole cardamom, cinnamon, black peppercorns, and fresh coconut cream.",
    type: "Classic Breakfast & Dinner",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Thalassery Malabar Dum Biryani",
    tagline: "Fragrant Kaima Rice with Fried Onions & Saffron Ghee",
    description: "Originating from the historic Malabar spice coast, this iconic biryani uses fine short-grain Jeerakasala rice slow-cooked in sealed handis with tender spiced meat, roasted cashews, and golden raisins.",
    type: "Malabar Heritage Specialty",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  }
];

export const FESTIVALS = [
  {
    name: "Onam Festival",
    timing: "August - September",
    significance: "Grand harvest homecoming of mythological King Mahabali. Celebrated with floral carpets (Pookkalam), grand Sadya feasts, tiger dances (Pulikali), and Vallamkali boat races.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Thrissur Pooram",
    timing: "April - May",
    significance: "The Festival of Festivals held at Vadakkumnathan temple featuring 30 majestically caparisoned elephants, the world-famous Kudamattam parasol changing ceremony, and electrifying 250-artist percussion orchestras (Ilanjithara Melam).",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Nehru Trophy Snake Boat Race",
    timing: "Second Saturday of August",
    significance: "Over 100-foot-long Chundan Vallams with 100+ synchronized rhythmic rowers slicing through the waters of Punnamada Lake, propelled by thunderous Vanchipattu boat songs.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Theyyam Divine Dance Ritual",
    timing: "November - May (North Kerala)",
    significance: "An ancient sacred ritual dance where performers in intricate towering headgears and fiery makeup transform into living deities through trance and hypnotic drumming.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Our backwater houseboat experience in Alleppey was pure heaven. Waking up to misty waters, fresh appams made by our private chef, and kingfishers flying past was the highlight of our 2-week trip to India!",
    name: "Dr. Evelyn & Marcus Vance",
    location: "London, UK",
    tour: "Grand Kerala Panorama 7D",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The Ayurvedic rejuvenation package at Kovalam completely relieved my chronic back pain and brain fog. Authentic doctors, pure herbal medicines, and genuine Kerala hospitality. 10/10 recommended.",
    name: "Rahul & Ananya Sharma",
    location: "Bengaluru, India",
    tour: "Ayurveda Wellness 6D",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Munnar's Kolukkumalai sunrise is something words cannot capture. The travel team organized every detail seamlessly from the SUV to forest permits. Flawless service!",
    name: "Sophie & Jean-Paul Laurent",
    location: "Paris, France",
    tour: "Honeymoon Paradise 5D",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    q: "When is the best time to visit Kerala?",
    a: "September to March offers the most pleasant, dry, and cool weather for sightseeing, beaches, and backwaters. June to August (Monsoon / Karkidakam) is world-renowned as the ideal season for Ayurvedic treatments as the atmosphere is cool and body pores are most receptive."
  },
  {
    q: "How does the Houseboat cruise work?",
    a: "Houseboat check-in is typically at 12:00 PM with a welcome tender coconut drink. The boat cruises through backwaters until 5:30 PM (when government regulations require anchoring to protect fishermen's nets). You enjoy freshly prepared evening snacks, Kerala dinner on board, and overnight stay. Morning cruise resumes after breakfast with check-out around 9:30 AM."
  },
  {
    q: "Are Kerala tour packages customizable?",
    a: "Yes! Every package can be tailored with custom pickup points (Kochi, Trivandrum, or Calicut), preferred resort categories (Luxury 5-Star, Boutique Heritage, Eco Treehouse), and specific dietary preferences (Vegetarian, Vegan, Jain, Gluten-free)."
  },
  {
    q: "What is the recommended dress code in temples and cultural sites?",
    a: "Modest attire covering shoulders and knees is recommended. Major temples like Padmanabhaswamy Temple require traditional dhotis (Mundu) for men and sarees or salwar suits for women."
  }
];
