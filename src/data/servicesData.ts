export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  specs: {
    material: string;
    gauge: string;
    finish: string;
    turnaround: string;
  };
  sampleImage: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "parking-shades",
    title: "Fiberglass Car Parking Shades",
    shortDesc: "Cantilever, arch, and curved canopies engineered with UV-treated heat-resistant fiberglass sheets.",
    specs: {
      material: "MS Steel Pipe Frame + 2mm UV Composite Sheet",
      gauge: "14 / 16 Gauge Structural Pipe",
      finish: "Red Oxide Primer + Enamel Polyurethane",
      turnaround: "3 to 5 Days Fabrication"
    },
    sampleImage: "https://i.postimg.cc/3r1GhjvG/519625032-122097391179006313-3614900553748335101-n.jpg"
  },
  {
    id: "industrial-sheds",
    title: "Industrial & Warehouse Steel Sheds",
    shortDesc: "Complete steel truss structures, warehouse roofing, factory shed expansions, and workshop enclosures.",
    specs: {
      material: "MS Steel I-Beams, Angle Iron & Corrugated Sheet",
      gauge: "12 to 14 Gauge Heavy Sections",
      finish: "Industrial Anti-Corrosion Primer",
      turnaround: "1 to 2 Weeks Turnaround"
    },
    sampleImage: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "fiberglass-domes",
    title: "Fiberglass Domes & Skylights",
    shortDesc: "Seamless, leak-proof architectural domes for mosques, residential villas, and commercial daylighting.",
    specs: {
      material: "Reinforced Multi-Layer Woven Composite",
      gauge: "3mm - 5mm Monolithic Shell",
      finish: "UV-Stabilized Gelcoat (Green, Gold, White)",
      turnaround: "5 to 7 Days Delivery"
    },
    sampleImage: "https://i.postimg.cc/CM780CqH/542542140-122098269783006313-4007616120959783047-n.jpg"
  },
  {
    id: "security-cabins",
    title: "Security Cabins & Guard Huts",
    shortDesc: "Prefabricated insulated security booths with 360-degree aluminum windows and pre-wiring.",
    specs: {
      material: "High-Density Molded Insulated Fiberglass",
      gauge: "Modular Composite Panels",
      finish: "Weatherproof Gloss Gelcoat",
      turnaround: "In-Stock or 3 Days Custom"
    },
    sampleImage: "https://i.postimg.cc/Df6GhQXr/541746597-122098269741006313-4216733323056857693-n.jpg"
  },
  {
    id: "gates-stairs",
    title: "Steel Gates, Railings & Spiral Stairs",
    shortDesc: "Handcrafted metal fabrication: sliding entrance gates, space-saving spiral staircases, and window grills.",
    specs: {
      material: "Solid MS Square Bar, Round Pipe & Steel Plate",
      gauge: "12 to 16 Gauge Heavy Sections",
      finish: "Smooth Putty + Hammer Finish Paint",
      turnaround: "4 to 7 Days Delivery"
    },
    sampleImage: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "water-tanks",
    title: "Water Tank Fiberglass Lining",
    shortDesc: "Food-grade seamless composite lining for underground concrete water reservoirs to stop leakage permanently.",
    specs: {
      material: "Food-Grade Isophthalic Resin + Glass Mat",
      gauge: "4 to 6 Layer Reinforced Shell",
      finish: "Hygienic Anti-Algae Surface",
      turnaround: "24 to 48 Hours On-Site"
    },
    sampleImage: "https://i.postimg.cc/wx2Nz5mn/542751622-122097212241006313-6477345394990548198-n.jpg"
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    id: 1,
    client: "Tariq Malik",
    location: "Bahria Town, Rawalpindi",
    work: "Double Car Parking Shade",
    text: "Heavy 14-gauge pipe used as promised. Excellent cantilever curve and rapid 3-day installation."
  },
  {
    id: 2,
    client: "Dr. Farhan Abbasi",
    location: "Sector F-10, Islamabad",
    work: "Terrace Fiberglass Roof",
    text: "Completely eliminated summer heat and rain noise. Top notch craftsmanship on High Court Road."
  },
  {
    id: 3,
    client: "Chaudhry Nadeem",
    location: "Commercial Plaza, Rawalpindi",
    work: "Security Guard Cabins",
    text: "Solid insulated cabins with neat sliding windows. Clean transaction directly with the workshop."
  }
];
