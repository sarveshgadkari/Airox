export type PageSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
  chips?: string[];
  image?: { src: string; alt: string; contain?: boolean };
  table?: { caption?: string; head: string[]; rows: string[][] };
  note?: string;
};

export type ProductPage = {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  heroImage?: { src: string; alt: string; contain?: boolean };
  sections: PageSection[];
};

export const PRODUCT_PAGES: ProductPage[] = [
  /* ============ OXYGEN GENERATOR ============ */
  {
    slug: "oxygen-generator",
    name: "PSA Oxygen Generator",
    tagline: "On-Site Medical Oxygen · 93% ± 3% Purity · 24×7",
    metaTitle: "PSA Oxygen Generator — On-Site Medical Oxygen Plants for Hospitals",
    metaDescription:
      "Airox PSA oxygen generators deliver medical-grade oxygen (93% ± 3%) on-site, 24×7. 1100+ installations, 55% market share, 13+ years of operation. US FDA & CE certified components from AirSep, USA.",
    intro:
      "Hospitals across India are moving away from cylinders and liquid oxygen tanks to on-site PSA oxygen generation. As the country's leading PSA oxygen machine manufacturer — with 13+ years of operational excellence and 1100+ successful installations — Airox delivers uninterrupted, medical-grade oxygen with complete independence from external vendors.",
    heroImage: { src: "/assets/oxygen-generator.jpeg", alt: "On-site PSA oxygen plant installation by Airox" },
    sections: [
      {
        heading: "How PSA oxygen generators work",
        paragraphs: [
          "Pressure Swing Adsorption (PSA) technology extracts oxygen from ambient air, filters out nitrogen and delivers medical-grade oxygen at 93% ± 3% purity — on demand, around the clock.",
        ],
        bullets: [
          "Air compression — ambient air is drawn in and compressed",
          "Purification — filters remove dust, moisture and hydrocarbons",
          "Adsorption — a molecular sieve captures nitrogen and lets oxygen flow through",
          "Storage — purified oxygen is collected in a tank, ready for patient care areas",
        ],
      },
      {
        heading: "Benefits for hospitals",
        bullets: [
          "Uninterrupted supply — complete control over oxygen production, no third-party dependence",
          "Cost savings — no transportation, storage or cylinder rental costs; strong long-term savings",
          "Enhanced safety — eliminates the hazards of handling high-pressure cylinders",
          "Eco-friendly — no cylinder deliveries or cryogenic transport, lower carbon footprint",
          "Scalable — systems can grow as hospital capacity needs grow",
        ],
        image: { src: "/assets/hero-plant.webp", alt: "Airox PSA oxygen generator manufacturing plant" },
      },
      {
        heading: "Why Airox sets the standard",
        paragraphs: [
          "Our systems are built with advanced components from AirSep Corporation and Caire Inc., New York, USA. We hold 55% of the Indian medical oxygen market for installed PSA generators (Fiscal 2022, CRISIL) — the result of consistent innovation, unmatched service quality and generators that keep running in the most demanding circumstances.",
        ],
        bullets: [
          "Sieves engineered to last 15–20+ years with comprehensive maintenance",
          "40–60% less electricity than comparable systems",
          "Consistent pressure and purity, 24×7, via automated controls",
          "Return on investment typically within the first couple of years",
        ],
      },
    ],
  },

  /* ============ NITROGEN GENERATOR ============ */
  {
    slug: "nitrogen-generator",
    name: "Nitrogen Generator",
    tagline: "High-Purity On-Site Nitrogen · 95% to 99.999%",
    metaTitle: "Nitrogen Generator in India — PSA Nitrogen Plants by Airox",
    metaDescription:
      "Airox supplies AirSep (USA) PSA nitrogen generators in India — continuous nitrogen at 95% to 99.999% purity for oil & gas, food packaging, manufacturing, automotive and mining. Save up to 80% vs bottled nitrogen.",
    intro:
      "Airox Technologies is authorised to sell nitrogen generators in India from AirSep Corporation, NY, USA — the world leader in Pressure Swing Adsorption technology. Our generators produce a continuous flow of nitrogen at your desired concentration, eliminating the expense, hazardous handling and storage problems of liquid or cylinder nitrogen.",
    heroImage: { src: "/assets/nitrogen-generator.webp", alt: "Airox N2 Wave twin tower series nitrogen generator", contain: true },
    sections: [
      {
        heading: "Fully automatic, easy to run",
        paragraphs: [
          "Connect an air compressor or central air supply, plug into a grounded outlet, set your delivery pressure and switch on — no specialised operating personnel required. One system can produce nitrogen at purity levels from 95% up to 99.999%.",
        ],
        bullets: [
          "Microprocessor-controlled with NEMA 4X touchscreen panel and integrated purity monitor",
          "Low operating cost with energy-efficient programming controls",
          "Automatic, unattended operation — easy to install and maintain",
          "Proprietary mufflers deliver the lowest sound levels in the industry",
          "Options: 3-way by-pass valve, flowmeter kit, mist eliminator/carbon filter, dew point sensor, pressure regulator",
        ],
        image: { src: "/assets/nitrogen-2.webp", alt: "Airox nitrogen generator installation" },
      },
      {
        heading: "Advantages over bottled & liquid nitrogen",
        bullets: [
          "Set the purity you need and pay only for that purity",
          "Save up to 80% versus bulk or bottled nitrogen — payback often in two years or less",
          "No delivery, storage or movement of high-pressure cylinders — increased safety",
          "Constant supply assured — no downtime waiting for deliveries",
          "Save space and simplify administration — no weekly deliveries to manage",
        ],
      },
      {
        heading: "Areas of application",
        chips: [
          "Oil & Gas / Power Generation",
          "Enhanced Oil Recovery",
          "Cutting, Brazing & Heat Treatment",
          "Plastic Injection Molding",
          "Modified Atmosphere Packaging",
          "Beer Drafting & Wine Capping",
          "Fruit & Controlled Atmosphere Storage",
          "Tire Inflation",
          "Mining — LEL Control",
          "Electrical Storage & Transformers",
        ],
      },
      {
        heading: "N2 Wave Twin Tower Series — selected models",
        paragraphs: [
          "PSA nitrogen generators with production capacity at up to 99.999% purity and 78 psig pressure. A selection from the 24-model range:",
        ],
        table: {
          head: ["Model", "Nitrogen Flow @ 87 psig (LPM)", "SCFM", "Nm³/hr"],
          rows: [
            ["N2AS310", "48", "1.8", "2.88"],
            ["N2AS316", "125", "4.7", "7.52"],
            ["N2AS322", "259", "9.7", "15.52"],
            ["N2AS328", "459", "17.2", "27.52"],
            ["N2AS334", "680", "25.5", "40.8"],
            ["N2AS340", "1285", "48.2", "77.12"],
            ["N2AS346", "2144", "80.4", "128.64"],
            ["N2AS352", "3789", "142.1", "227.36"],
            ["N2AS356", "5197", "194.9", "311.84"],
          ],
        },
        note: "Full range of 24 models available — contact us for the complete specification sheet and sizing help.",
      },
    ],
  },

  /* ============ OXYROOM ============ */
  {
    slug: "oxyroom",
    name: "OxyRoom",
    tagline: "Oxygen-Enriched Living · Healthy & Luxury Spaces",
    metaTitle: "OxyRoom — Oxygen Enriched Room Systems for Homes & Hotels",
    metaDescription:
      "OxyRoom by Airox: premium oxygen conditioning with indoor air quality monitoring. Maintains 21–23.5% O₂, reduces VOCs, PM 2.5 and harmful gases. For luxury homes, hotels, fitness centres and high-altitude properties.",
    intro:
      "OxyRoom is a premium, first-of-its-kind oxygen conditioning equipment with indoor air quality (IAQ) monitoring that controls and enhances air quality through oxygen infusion. It is non-hazardous, environmentally safe and scientifically tested.",
    heroImage: { src: "/assets/oxyroom.webp", alt: "OxyRoom oxygen enriched luxury living space" },
    sections: [
      {
        heading: "What OxyRoom does",
        bullets: [
          "Raises O₂ from the standard 20.9% and maintains it between 21% and 23.5% — the ideal range",
          "Reduces harmful gases such as VOCs, ammonia, CO, NOx and SO₂",
          "Drastically reduces PM 1, PM 2.5, PM 10 and other dust particles",
          "Monitored and controllable from tablets and mobile phones",
        ],
        image: { src: "/assets/oxyroom-2.webp", alt: "OxyRoom system components" },
      },
      {
        heading: "Why 21–23.5% oxygen?",
        paragraphs: [
          "Natural air contains roughly 21% oxygen. OSHA standards define the safe range for oxygen concentration as a minimum of 19.5% and a maximum of 23.5% — OxyRoom keeps your space within the ideal, safe band.",
          "Scientific testing shows significant reduction in PM 2.5, PM 10, AQI, NH₃ and O₃ within 1–3 hours of OxyRoom operation, alongside a measurable increase in room oxygen levels.",
        ],
        image: { src: "/assets/oxyroom-3.webp", alt: "OxyRoom air quality improvement data" },
      },
      {
        heading: "Benefits",
        bullets: [
          "Mental clarity and focus",
          "Improved work efficiency and productivity",
          "Helps reduce air-borne diseases",
          "Valuable where oxygen is low due to altitude or pollution",
          "Supports indoor physical activity — yoga, workouts and more",
        ],
      },
      {
        heading: "Applications",
        chips: [
          "Luxurious Homes & Apartments",
          "Luxury Hotels",
          "Business Centres",
          "High-Altitude Properties",
          "Fitness Centres",
        ],
        note: "Invest in OxyRoom, invest in your health.",
      },
    ],
  },

  /* ============ PURVECT AIR ============ */
  {
    slug: "purvect-air",
    name: "PURVECT AIR",
    tagline: "Air Purification & Disinfection Technology",
    metaTitle: "PURVECT AIR — Air Purification & Disinfection by Airox",
    metaDescription:
      "PURVECT AIR by Airox Technologies: air purification and disinfection technology engineered for clean, safe and infection-free indoor environments in hospitals, offices and public spaces.",
    intro:
      "PURVECT AIR is Airox's air purification and disinfection technology, engineered to keep indoor environments clean, safe and infection-free — bringing the company's medical-grade air handling expertise to everyday spaces.",
    sections: [
      {
        heading: "Engineered for clean indoor air",
        paragraphs: [
          "Built on the same air-treatment engineering that powers our medical oxygen systems, PURVECT AIR targets airborne impurities and pathogens to improve the quality of the air people breathe indoors.",
        ],
        bullets: [
          "Air purification and disinfection in a single system",
          "Suitable for hospitals, clinics, offices and public indoor spaces",
          "Backed by Airox's PAN-India service network",
        ],
      },
      {
        heading: "Talk to us",
        paragraphs: [
          "Our team can assess your space and recommend the right PURVECT AIR configuration. Call our toll-free line 08069068500 or send an enquiry for specifications and pricing.",
        ],
      },
    ],
  },

  /* ============ INDUSTRIAL VPSA ============ */
  {
    slug: "industrial-vpsa-oxygen",
    name: "Industrial VPSA Oxygen",
    tagline: "Custom-Engineered O₂ Plants · 79 to 3,023 Nm³/hr",
    metaTitle: "Industrial VPSA Oxygen Plants — High-Volume O₂ Generation",
    metaDescription:
      "Custom-engineered VPSA oxygen systems by Airox & AirSep USA — capacities from 3,000 to 115,000 SCFH, 99% on-stream efficiency, 20+ year life. Save 65-70% vs cryogenic oxygen for steel, glass, water treatment and more.",
    intro:
      "Airox Technologies has proven market leadership in PSA/VPSA with more than 1000 oxygen generators installed and running across India in collaboration with AirSep Corporation, USA — the world leader in Vacuum Pressure Swing Adsorption technology with 25 years of onsite O₂ system experience.",
    heroImage: { src: "/assets/vpsa.webp", alt: "Industrial VPSA oxygen plant", contain: true },
    sections: [
      {
        heading: "Custom-engineered for your site",
        paragraphs: [
          "Every system is custom engineered for the end-user's specific site and process requirements, with capacities ranging from 3,000 SCFH (79 Nm³/hr) to 115,000 SCFH (3,023 Nm³/hr). Systems are optimised for peak efficiency, low power consumption and 99% expected on-stream efficiency, with an equipment life of 20+ years.",
        ],
        bullets: [
          "Remote monitoring of system operation by AirSep engineers",
          "Critical process parameters recorded every 250 milliseconds",
          "Automatic turndown from 100% to 0% flow capacity",
          "Highly integrated skids — minimal footprint, simple installation",
          "On-site start-up assistance anywhere in the world",
        ],
        image: { src: "/assets/vpsa-2.jpeg", alt: "VPSA oxygen system installation" },
      },
      {
        heading: "Why VPSA beats cryogenic",
        bullets: [
          "65–70% lower oxygen cost than traditional cryogenic supply — electricity is your only major cost",
          "5-minute start-up; run only when you need oxygen (cryogenic plants must run continuously)",
          "Very few moving parts — 20+ years of trouble-free operation with routine maintenance",
          "Guaranteed purity with the included oxygen purity analyzer — you control your supply",
          "In-house molecular sieves without dust or purity problems",
        ],
        image: { src: "/assets/vpsa-3.jpeg", alt: "VPSA oxygen plant equipment" },
      },
      {
        heading: "Award-winning installation",
        paragraphs: [
          "A 21 MGD wastewater treatment plant in Rocky Mount, North Carolina replaced its cryogenic plant with a custom AirSep VPSA system and reported saving over 65% in electric power costs — around $345/day for electricity versus over $1000/day before. The project received the 2013 ACEC/NC Engineering Excellence Award.",
        ],
      },
      {
        heading: "Applications",
        chips: [
          "Ozone Generation",
          "Water & Waste-Water Treatment",
          "Furnace Enrichment",
          "Steel Mills",
          "Gold Leaching",
          "Uranium Recovery",
          "Oxygen Bleaching",
          "Pulp & Paper Delignification",
          "Oxygen Fuel Burners",
          "Glass Industry",
        ],
      },
    ],
  },

  /* ============ OXYGEN BOOSTERS ============ */
  {
    slug: "oxygen-boosters",
    name: "Oxygen Boosters",
    tagline: "Cylinder Filling · 4.5 bar to 150 bar",
    metaTitle: "Oxygen Boosters — High-Pressure Cylinder Filling Systems",
    metaDescription:
      "Airox oxygen boosters compress generator oxygen from 4.5 bar to 150 bar for cylinder filling — built on RIX oxygen compressors rated to 2200 psig. For hospitals, laser cutting, diving, defence and firefighting.",
    intro:
      "Oxygen generators produce oxygen at 4.5 bar, but filling cylinders requires 150 bar. The Airox oxygen booster bridges that gap — oxygen from the generator's receiver tank is boosted and filled into cylinders through a manifold, turning your on-site plant into a complete cylinder-filling station.",
    heroImage: { src: "/assets/boosters.png", alt: "Airox oxygen booster and PSA manufacturing facility" },
    sections: [
      {
        heading: "Built on proven RIX compression",
        paragraphs: [
          "Our boosters use RIX oxygen compressors, developed specifically for safe, reliable oxygen compression and proven over decades of industrial and military applications. They are suited to compressing oxygen up to 2200 psig.",
          "Gas compression generates heat, so boosters are cooled with external fins or water jackets — and every component in the gas path is made from oxygen-compatible materials to eliminate fire risk.",
        ],
      },
      {
        heading: "A growing business line",
        paragraphs: [
          "Airox added around ₹10.13 million of revenue through this product line in Fiscal 2021, and is actively expanding in the segment through government tenders and private sales.",
        ],
      },
      {
        heading: "Applications",
        chips: [
          "Laser Cutting",
          "Defence & Aviation Gas Transfer",
          "Life Support",
          "Fire Fighting",
          "Industrial Equipment Manufacturing",
          "Medical Resuscitation",
          "Diving",
          "Oxygen Bottle Charging",
        ],
      },
    ],
  },

  /* ============ HYPERBARIC CHAMBERS ============ */
  {
    slug: "hyperbaric-chambers",
    name: "Hyperbaric Chambers",
    tagline: "HBOT · Barox Solo & Omega Series",
    metaTitle: "Hyperbaric Chambers in India — Barox HBOT Systems",
    metaDescription:
      "Airox Barox hyperbaric chambers deliver 100% oxygen at up to 3 ATA for hyperbaric oxygen therapy (HBOT). Monoplace Solo and multiplace Omega series, CE certified. Installed at leading hospitals across India.",
    intro:
      "Hyperbaric oxygen therapy (HBOT) is a medical intervention where a patient breathes 100% oxygen inside a chamber pressurised above sea-level pressure (≥1.4 ATA per the Undersea and Hyperbaric Medical Society). The increased pressure dissolves more oxygen into the blood, accelerating the healing of complicated wounds, supporting the immune system and treating a range of emergent conditions.",
    heroImage: { src: "/assets/hbot-solo.png", alt: "Barox Solo hyperbaric oxygen therapy chamber", contain: true },
    sections: [
      {
        heading: "How HBOT works",
        paragraphs: [
          "Under increased ambient pressure, the amount of oxygen dissolved in blood plasma rises sharply (Henry's law). The hyper-oxygenated blood reaches all tissues with arterial flow, improving circulation in areas with poor blood supply, accelerating the wash-out of gases like carbon monoxide, and stimulating healing that doesn't respond to conventional care.",
        ],
        image: { src: "/assets/hbot-therapy.webp", alt: "Hyperbaric oxygen therapy wound healing progress" },
      },
      {
        heading: "Approved indications",
        bullets: [
          "Air or gas embolism · decompression sickness",
          "Acute thermal burn injury · crush injury and acute traumatic ischemia",
          "Carbon monoxide poisoning (incl. complicated by cyanide poisoning)",
          "Gas gangrene · necrotizing soft tissue infections · refractory osteomyelitis",
          "Compromised grafts and flaps · problem wound healing (incl. diabetic foot)",
          "Central retinal artery occlusion · sudden sensorineural hearing loss",
          "Delayed radiation injury · intracranial abscess · severe anaemia",
        ],
      },
      {
        heading: "Barox Solo — monoplace chamber",
        paragraphs: ["Available in half-acrylic and full-acrylic versions for a single patient."],
        bullets: [
          "Design pressure: 3 ATA · capacity: 1 person",
          "Inner chamber: 840 mm diameter × 2300 mm length",
          "10028-grade pressure vessel steel · 1200 kg · 1 m³ volume",
          "Pressurising: oxygen or air (via mask breathing)",
          "Standards: CE medical cert, EN 14931, 97/23/EC, EN 13445 · vessel acceptance by Lloyd or TÜV SÜD",
          "Power: 220–240 V (350 W)",
        ],
        image: { src: "/assets/hbot-solo-full.png", alt: "Barox Solo full acrylic hyperbaric chamber", contain: true },
      },
      {
        heading: "Barox Omega — multiplace chamber",
        paragraphs: ["For hospitals treating multiple patients per session."],
        bullets: [
          "Design pressure: 2–16 bar · main chamber capacity: 4–32 persons",
          "Antre chamber capacity: 1–8 persons",
          "Inner diameter 800–3200 mm · main chamber length 3–20 m",
          "10028-grade pressure vessel steel · 10,000–32,000 kg",
          "2–5 rectangular doors · 4–12 windows",
          "Standards: CE medical cert, EN 14931, 97/23/EC, EN 13445",
        ],
        image: { src: "/assets/hbot-omega.png", alt: "Barox Omega multiplace hyperbaric chamber", contain: true },
      },
      {
        heading: "Installed at",
        chips: [
          "Western India Institute of Neuro Science, Kolhapur",
          "J. Hospital, Aurangabad",
          "Sahyadri Hospital, Latur",
          "Rahate Surgical Hospital, Nagpur",
        ],
      },
    ],
  },

  /* ============ AVS ROMER ============ */
  {
    slug: "avs-romer-solenoid-valves",
    name: "AVS Romer Solenoid Valves",
    tagline: "Precision Flow Control for Liquids & Gases",
    metaTitle: "AVS Römer Solenoid Valves — Precision Flow Control",
    metaDescription:
      "AVS Römer solenoid valves from Airox Technologies: direct-acting, media-separated, diaphragm and piston valves plus Elsa & Rapid fittings — advanced flow control for industrial, food & beverage and life science applications.",
    intro:
      "AVS Römer solenoid valves, offered by Airox Technologies, provide advanced flow control solutions designed for efficiency and reliability in handling liquids and gases — from contamination-free medical applications to demanding industrial processes.",
    sections: [
      {
        heading: "The valve range",
        bullets: [
          "Direct-acting solenoid valves — quick response with reduced power consumption and minimal self-heating; suitable for liquids and gases",
          "Media-separated valves — a separating diaphragm isolates the solenoid from the medium, ideal where freedom from contamination and thermal decoupling matter",
          "GAMMA diaphragm solenoid valves — universal, robust and compact; single and battery versions in various sizes, materials and configurations",
          "Media-separated piston valves — robust design with coaxial or angle flow, 2/2- and 3/2-way versions with pneumatically actuated piston",
        ],
      },
      {
        heading: "Fittings & tubes",
        bullets: [
          "Elsa push-in fittings — mounted quickly without tools; safe, durable and cost-efficient",
          "Rapid push-on fittings — perfectly matched guide cone and union nut for high performance under harsh conditions",
          "Tubes — a broad range for demanding food & beverage, industrial and life science requirements",
        ],
      },
    ],
  },

  /* ============ STERILIZERS ============ */
  {
    slug: "sterilizers",
    name: "Sterilizers",
    tagline: "Imported MELAG Steam Sterilizers · Germany",
    metaTitle: "Medical Sterilizers — Imported MELAG Steam Autoclaves",
    metaDescription:
      "Airox supplies imported MELAG (Germany) steam sterilizers and Class-B autoclaves for hospitals and clinics — Vacuclave Pro, Pro-Class and Premium-Class series with uniform temperature and proper steam penetration.",
    intro:
      "A sterilizer destroys all pathogenic organisms using heat, pressure or radiation. International hygiene guidelines recommend autoclaves that sterilise medical devices with saturated steam — used across dentistry, medicine, podiatry and veterinary practice. Airox supplies imported MELAG sterilizers, engineered in Germany.",
    heroImage: { src: "/assets/sterilizer.png", alt: "Imported MELAG steam sterilizer", contain: true },
    sections: [
      {
        heading: "Why imported quality matters",
        paragraphs: [
          "Only a few imported sterilisers deliver uniform temperature with proper steam penetration. Quality is verified with a Class 2 (Bowie-Dick) indicator test run at 134°C for 3.5 minutes — a test many local sterilisers fail, taking 5–7 minutes with non-uniform colour change.",
        ],
        bullets: [
          "Sterilises surgical instruments, stainless steel, glassware, textiles, tissue-culture plastics, media solutions and more",
          "Daily Bowie-Dick verification supported for vacuum-type steam sterilizers",
        ],
      },
      {
        heading: "Why MELAG",
        bullets: [
          "Headquartered in Berlin, Germany — manufacturing since 1951",
          "Over 500,000 steam sterilizers and autoclaves sold worldwide",
          "More than 500 employees and a wide product range",
          "EC certified · EN ISO 13485 certified · MDD Annex II",
        ],
        image: { src: "/assets/melag.png", alt: "MELAG Vacuclave sterilizer models", contain: true },
      },
      {
        heading: "Vacuclave 123 — ProLine",
        bullets: [
          "Class-B vacuum procedure — sterilises up to 6 kg on 5 trays in 15–28 minutes (plus drying)",
          "Smart-Touch display with LED status — smartphone-like operation",
          "USB / network data logging for legal compliance",
          "Stand-alone concept with integrated water tanks and air cooling",
          "Power-save standby between sterilizations",
        ],
      },
      {
        heading: "Pro-Class & Premium-Class series",
        paragraphs: [
          "Pro-Class delivers perfect sterilization and drying of up to 7 kg in 20–39 minutes, with microprocessor-monitored documentation and the proven MELAG 4-key concept. Premium-Class Vacuclav 40/41/43/44 B+ models offer 18–23 litre chambers handling up to 9 kg of instruments.",
        ],
        table: {
          head: ["Model", "Chamber", "Volume", "Load"],
          rows: [
            ["Vacuclav 40 B+", "25 × 35 cm", "18 L", "9 kg instruments / 2 kg textiles"],
            ["Vacuclav 41 B+", "25 × 35 cm", "18 L", "9 kg instruments / 2 kg textiles"],
            ["Vacuclav 43 B+", "25 × 45 cm", "23 L", "9 kg instruments / 2.5 kg textiles"],
            ["Vacuclav 44 B+", "25 × 45 cm", "23 L", "9 kg instruments / 2.5 kg textiles"],
          ],
        },
      },
    ],
  },
];

export type Faq = { q: string; a: string };

export const FAQS_OXYGEN: Faq[] = [
  {
    q: "What is Pressure Swing Adsorption (PSA) technology?",
    a: "PSA is one of several modern technologies currently in use for separating oxygen from air. Clean, dry air is passed through zeolite-based molecular sieve beds that preferentially adsorb nitrogen and other gases, producing oxygen-enriched gas.",
  },
  {
    q: "Can ventilators and anaesthesia machines run on an Airox PSA oxygen generator?",
    a: "Absolutely yes. Ventilators and anaesthesia machines require 50–56 PSI, while our generators produce 65 PSI, which is then reduced to your required pressure.",
  },
  {
    q: "Is the system hazardous?",
    a: "No. The AirSep oxygen generator operates at only 4.5 bar, whereas oxygen cylinders operate at 160 bar. It is also not inflammable like liquid oxygen.",
  },
  {
    q: "How much space does the system need?",
    a: "It is a highly compact system. Our AS-G model, with a capacity of 30 cylinders/day, requires only an 11 × 9 feet area and can be installed on a terrace, in a room or a hall.",
  },
  {
    q: "What maintenance do PSA oxygen generators need?",
    a: "Internal filter elements are replaced every 6 months under 24/7 operation, and valves are rebuilt every 5 years. Most maintenance involves servicing the air compressor per its manufacturer's schedule.",
  },
  {
    q: "Liquid oxygen is 99% pure. Is that better than 93% from a PSA system?",
    a: "99% liquid oxygen is useful for metal cutting, but not necessarily for medical applications. International specifications — CSA (Canada), European and U.S. Pharmacopeia, Indian FDA and ISO 10083 — accept 93% medical oxygen, and older 99% requirements are being revised accordingly.",
  },
  {
    q: "What is the difference between an oxygen concentrator and an oxygen generator?",
    a: "Concentrators are smaller home medical systems that cannot produce higher pressures like 65 PSI. Generators work at these pressures, and their zeolite sieves last 20+ years depending on feed air quality.",
  },
  {
    q: "Does PSA lose oxygen to evaporation like liquid oxygen?",
    a: "No. A liquid oxygen tank normally bleeds off 10–15% of its volume to prevent pressure build-up. With PSA generators, every unit of oxygen produced can be used — there is no bleed-off.",
  },
];

export const FAQS_HBOT: Faq[] = [
  {
    q: "What is hyperbaric medicine?",
    a: "Hyperbaric medicine significantly increases the level of oxygen in the blood, generating strong hyperoxia for medical therapies. Oxygen is dissolved in the blood plasma by breathing it under higher atmospheric pressure inside specially designed chambers, triggering physiological processes that treat different diseases.",
  },
  {
    q: "Above what pressure is a chamber considered medical treatment?",
    a: "The Undersea and Hyperbaric Medical Society (UHMS) defines hyperbaric oxygen treatment as 100% oxygen delivered at pressure greater than 1.4 ATA.",
  },
  {
    q: "What can be treated with a hyperbaric chamber?",
    a: "Emergency indications include air embolism, decompression illness, burns, carbon monoxide poisoning, cerebral edema, closed head injuries, sickle cell crisis, blast injury, gas gangrene, near drowning, smoke inhalation and more. The most common use is diabetic foot and ulcer treatment.",
  },
  {
    q: "What are monoplace and multiplace chambers?",
    a: "A monoplace chamber accommodates one person; a multiplace chamber accommodates more than one person per session.",
  },
  {
    q: "What external connections does the system need?",
    a: "Air, oxygen and electricity.",
  },
  {
    q: "How long is one session?",
    a: "60 to 90 minutes, depending on the condition being treated.",
  },
  {
    q: "How many sessions are required?",
    a: "On average about 40 sessions. Some cases like sudden eyesight or hearing loss need 10–15 sessions, while some neurological cases need 60–80 sessions. Generally within 7–10 sessions you can tell whether the therapy is working.",
  },
];
