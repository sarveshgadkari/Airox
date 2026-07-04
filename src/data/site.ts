export const SITE = {
  name: "Airox Technologies Ltd",
  legalName: "Airox Technologies Limited",
  url: "https://airoxtechnologies.com",
  tollFree: "08069068500",
  phone: "+912406602686",
  email: "sales@airoxtechnologies.com",
  foundingYear: 2011,
  description:
    "India's leading PSA oxygen generator manufacturer with 1100+ installations, 55% medical oxygen market share and 13+ years of continuous on-site oxygen generation. US FDA, CE and ISO 13485 certified.",
  address: {
    street: "D-27, 5th Floor, Empire Mall Pvt. Ltd. (PTC), Chikalthana",
    city: "Aurangabad",
    region: "Maharashtra",
    postalCode: "431006",
    country: "IN",
  },
  socials: [
    "https://www.facebook.com/airoxtechnologies/",
    "https://www.linkedin.com/company/airox-technologies-ltd",
    "https://www.youtube.com/@airoxtechnologiesltd.6950",
    "https://www.instagram.com/airoxtechnologies",
  ],
};

export type Product = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  image?: { src: string; alt: string; contain?: boolean };
  icon?: "air" | "valve";
};

export const PRODUCTS: Product[] = [
  {
    slug: "oxygen-generator",
    name: "PSA Oxygen Generator",
    tag: "Flagship",
    description:
      "On-site medical oxygen at 93% ± 3% purity, produced on demand from ambient air. Hospitals gain full control of supply — no cylinders, no logistics, available 24×7.",
    image: {
      src: "/assets/oxygen-generator.jpeg",
      alt: "On-site PSA oxygen plant by Airox Technologies",
    },
  },
  {
    slug: "nitrogen-generator",
    name: "Nitrogen Generator",
    tag: "Industrial",
    description:
      "High-purity on-site nitrogen using PSA technology for pharma, food packaging, electronics and industrial processes — with low running cost.",
    image: {
      src: "/assets/nitrogen-generator.webp",
      alt: "Airox nitrogen generator twin tower series",
      contain: true,
    },
  },
  {
    slug: "oxyroom",
    name: "OxyRoom",
    tag: "Wellness",
    description:
      "Oxygen-enriched room systems for healthy and luxury living — recovery, wellness and high-altitude acclimatisation environments.",
    image: {
      src: "/assets/oxyroom.webp",
      alt: "OxyRoom oxygen enriched living space",
    },
  },
  {
    slug: "purvect-air",
    name: "PURVECT AIR",
    tag: "Air Quality",
    description:
      "Air purification and disinfection technology engineered to keep indoor environments clean, safe and infection-free.",
    icon: "air",
  },
  {
    slug: "industrial-vpsa-oxygen",
    name: "Industrial VPSA Oxygen",
    tag: "High Volume",
    description:
      "Vacuum Pressure Swing Adsorption systems for high-volume oxygen demand — steel, glass, aquaculture, water treatment and heavy industry.",
    image: {
      src: "/assets/vpsa.webp",
      alt: "Industrial VPSA oxygen plant",
      contain: true,
    },
  },
  {
    slug: "oxygen-boosters",
    name: "Oxygen Boosters",
    tag: "Accessory",
    description:
      "High-pressure oxygen boosters for cylinder filling and pipeline supply — extending the reach of your on-site generator.",
    image: {
      src: "/assets/boosters.png",
      alt: "Oxygen booster and PSA manufacturing at Airox",
    },
  },
  {
    slug: "hyperbaric-chambers",
    name: "Hyperbaric Chambers",
    tag: "Therapy",
    description:
      "Pressurised hyperbaric oxygen therapy (HBOT) chambers — Solo and Omega series — for clinical wound-healing and wellness applications.",
    image: {
      src: "/assets/hbot-solo.png",
      alt: "Hyperbaric oxygen therapy chamber",
      contain: true,
    },
  },
  {
    slug: "avs-romer-solenoid-valves",
    name: "AVS Romer Solenoid Valves",
    tag: "Components",
    description:
      "Precision pneumatic solenoid valves for gas control and automation across generation and distribution systems.",
    icon: "valve",
  },
  {
    slug: "sterilizers",
    name: "Sterilizers",
    tag: "Medical",
    description:
      "Imported medical sterilisation equipment, including MELAG systems, supporting infection control in hospitals and clinics.",
    image: {
      src: "/assets/sterilizer.png",
      alt: "Imported medical sterilizer",
      contain: true,
    },
  },
];

export const GOV_CLIENTS = [
  "Safdarjung Hospital, New Delhi",
  "LNJP Hospital, New Delhi",
  "Deen Dayal Upadhyay Hospital, Delhi",
  "LNJP Hospital, Patna",
  "HHSBT Hospital, Thane",
  "Govt. Medical College, Bambolim",
  "Govt. Medical College, Surat",
  "Mathurdas Mathur Hospital, Jodhpur",
  "Government Medical College, Baramulla",
  "Andhra Medical College, Visakhapatnam",
  "Thrissur Medical College, Thrissur",
  "Govt. Medical College, Thiruvananthapuram",
  "Gandhi Hospital, Secunderabad",
  "Indira Gandhi Govt. Hospital, Pondicherry",
  "Guru Gobind Singh Medical College, Faridkot",
  "Kabir Chaura Hospital, Varanasi",
  "Govt. Medical College, Firozabad",
  "Tripura Medical College, Agartala",
  "Agartala GMC & G.B. Pant Hospital, Agartala",
  "Govt. Medical College & Hospital, Chandigarh",
  "RIMS Hospital, Ranchi",
  "Shri Gangaram City Hospital, New Delhi",
];

export const CORP_CLIENTS = [
  "Adani Institute of Medical Science, Bhuj",
  "CARE Group Hospital, Aurangabad",
  "Sri Aurobindo Hospital, Indore",
  "Meenakshi Mission Hospital, Madurai",
  "Meenakshi Mission Hospital, Thanjavur",
  "CMC Hospital, Vellore",
  "Big Apollo Spectra Hospital, Patna",
  "KIMS Hospital, Kurnool",
  "KIMS Hospital, Vizag",
  "AIG Hospital, Hyderabad",
  "Shree Narayan Hospital, Raipur",
  "Pushpanjali Super Speciality Hospital, Agra",
  "Narayan Memorial Hospital, Kolkata",
  "Epic Hospital, Ahmedabad",
  "Choitram Hospital & Research Centre, Indore",
  "Rajasthan Hospital, Jaipur",
  "NIIM University, Jaipur",
  "Apex Hospital, Jaipur",
  "Apex Hospital, Varanasi",
  "Shri Balaji Super Specialty Hospital, Raipur",
  "Daya General Hospital, Thrissur",
  "Vivekanand Polyclinic & IMS, Lucknow",
  "F H Medical College, Agra",
  "EMC Hospital, Amritsar",
  "Sun Hospital, Cuttack",
];

export const SERVICE_CITIES = [
  "Aurangabad",
  "Ahmedabad",
  "Guwahati",
  "Hyderabad",
  "Jaipur",
  "Lucknow",
  "Kolkata",
  "Ludhiana",
  "Patna",
  "Raipur",
];

export type Office = {
  title: string;
  address: string;
  contacts: { label?: string; tel?: string; email?: string }[];
  icon: "building" | "factory" | "pin" | "wrench" | "phone";
};

export const OFFICES: Office[] = [
  {
    title: "Registered & Corporate Office",
    address:
      "D-27, 5th Floor, Empire Mall Pvt. Ltd. (PTC), Chikalthana, Aurangabad – 431 006, Maharashtra, India",
    contacts: [
      { label: "+91 240 660 2686", tel: "+912406602686" },
      { label: "Toll Free 08069068500", tel: "08069068500" },
      { email: "sales@airoxtechnologies.com" },
    ],
    icon: "building",
  },
  {
    title: "Manufacturing Unit",
    address:
      "Plot No. 62, AURIC Shendra, Sector No. 5, Aurangabad, Maharashtra, India",
    contacts: [{ label: "Gajendra Joshi · 91686 66007", tel: "9168666007" }],
    icon: "factory",
  },
  {
    title: "Delhi — Branch Office",
    address:
      "World Trade Tower, 10th Floor, Office 1005, C-1, Sector-16, Opp. Metro Station, Noida, G.B. Nagar (U.P.) – 201301",
    contacts: [{ label: "Rajesh Sinha · 91686 66032", tel: "9168666032" }],
    icon: "pin",
  },
  {
    title: "Kolkata — Branch Office",
    address:
      "Diamond Heritage, 8th Floor, Unit N-80B, 16 Strand Road, Kolkata – 700001 (W.B.)",
    contacts: [{ label: "Dibakar Pal · 91686 66012", tel: "9168666012" }],
    icon: "pin",
  },
  {
    title: "Industrial Products",
    address: "Enquiries for nitrogen generators, VPSA and industrial systems.",
    contacts: [
      { label: "Ashish Joshi · 76209 00411", tel: "7620900411" },
      { email: "industrialsales@airoxtechnologies.com" },
    ],
    icon: "wrench",
  },
  {
    title: "Service Request",
    address: "Raise a support ticket for an existing installation.",
    contacts: [
      { label: "Naveen Sharma · 91686 65990", tel: "9168665990" },
      { email: "naveen@airoxtechnologies.com" },
    ],
    icon: "phone",
  },
];

export const WHY_AIROX = [
  "Unique sieves & specialised processes that make our sieves last more than 20 years.",
  "US FDA, CE Medical Devices & Class IIb molecular sieves in our medical generator systems.",
  "Large, robust and quick service network — 70+ experienced engineers, PAN-India presence.",
  "Automated technology providing consistent pressure and purity, 24×7.",
  "40–60% less electricity than other systems — lower cost per unit of oxygen, higher savings.",
  "Your investment is safe — return on investment within the first couple of years.",
];

export const WHY_OTHERS = [
  "Low durability and efficiency, with a short life compared to the Airox generator system.",
  "Lacking necessary international standard approvals and certifications.",
  "Defective after-sales service and delayed spares — leading to reduced capacity or breakdown.",
  "Inconsistent purity 24×7 — dangerous for critical care units and during emergencies.",
  "Short-life molecular sieves (~25% of equipment cost) make replacement unviable — investment dead in a few years.",
  "Production capacity drops every month with inconsistent purity; ~30 companies have exited post-COVID.",
];
