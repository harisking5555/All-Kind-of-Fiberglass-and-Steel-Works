export interface ProjectItem {
  id: number;
  url: string;
  title: string;
  category: 'parking-shades' | 'industrial-sheds' | 'domes' | 'security-cabins' | 'steel-works';
  categoryLabel: string;
  spec: string;
}

export const WORKSHOP_CONTACT = {
  name: "ALL KIND OF FIBERGLASS AND STEEL WORKS",
  phone: "+92 333 6694186",
  phoneRaw: "923336694186",
  email: "saimkhan6852@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61580189400659",
  address: "High Court Road, Rawalpindi, Pakistan",
  whatsappBaseUrl: "https://wa.me/923336694186"
};

// Real workshop photography & approved industrial imagery
export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://i.postimg.cc/3r1GhjvG/519625032-122097391179006313-3614900553748335101-n.jpg",
    tagline: "COMMERCIAL & RESIDENTIAL CANOPIES",
    title: "Fiberglass Car Parking Shades",
    subtitle: "Custom cantilever and curved arch canopies engineered with UV heat-resistant composite sheets."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1800&q=85",
    tagline: "HEAVY INDUSTRIAL STRUCTURES",
    title: "Steel Truss & Warehouse Sheds",
    subtitle: "Long-span factory roof framing, angle-iron trusses, and anti-corrosion industrial shed fabrication."
  },
  {
    id: 3,
    image: "https://i.postimg.cc/CM780CqH/542542140-122098269783006313-4007616120959783047-n.jpg",
    tagline: "ARCHITECTURAL COMPOSITES",
    title: "Fiberglass Domes & Skylights",
    subtitle: "Seamless monolithic molded domes for mosques, residential villas, and natural daylighting skylights."
  },
  {
    id: 4,
    image: "https://i.postimg.cc/Df6GhQXr/541746597-122098269741006313-4216733323056857693-n.jpg",
    tagline: "PREFABRICATED PORTABLE UNITS",
    title: "Security Cabins & Guard Huts",
    subtitle: "Insulated modular security cabins with 360-degree aluminum windows, lockable doors, and pre-wiring."
  }
];

// Continuous auto-sliding highlights bar below hero
export const WORKSHOP_HIGHLIGHTS = [
  { label: "WORKSHOP LOCATION", val: "High Court Road, Rawalpindi" },
  { label: "STEEL SPECIFICATION", val: "14 & 16 Gauge Guaranteed Heavy Pipe" },
  { label: "SHEET DURABILITY", val: "15+ Years Weatherproof UV Composite" },
  { label: "TURNAROUND", val: "3 to 5 Days Direct Workshop Delivery" },
  { label: "SITE SURVEY", val: "Free On-Site Measurement in Twin Cities" },
  { label: "WELDING QUALITY", val: "Double Red Oxide Primer & Enamel Paint" },
  { label: "COVERAGE", val: "Rawalpindi, Islamabad & Nationwide Dispatch" }
];

// All 71 Real Workshop Photos from user
export const REAL_PROJECT_IMAGES: ProjectItem[] = [
  {
    id: 1,
    url: "https://i.postimg.cc/3r1GhjvG/519625032-122097391179006313-3614900553748335101-n.jpg",
    title: "Curved Parking Shade",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Heavy pipe cantilever"
  },
  {
    id: 2,
    url: "https://i.postimg.cc/G3KDRPyy/540495830-122098269585006313-1763693481788734448-n.jpg",
    title: "Arch Canopy",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Dual car arch frame"
  },
  {
    id: 3,
    url: "https://i.postimg.cc/zD7hNwgH/541442746-122097391053006313-6128980947234160735-n.jpg",
    title: "Terrace Shade",
    category: "parking-shades",
    categoryLabel: "Terrace Shade",
    spec: "Weatherproof fiberglass"
  },
  {
    id: 4,
    url: "https://i.postimg.cc/pVCjvQFn/541643831-122098269693006313-3067679958728774505-n.jpg",
    title: "Industrial Cantilever",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Tubular steel truss"
  },
  {
    id: 5,
    url: "https://i.postimg.cc/PfyDHbwY/541745975-122097390981006313-6986604628432514575-n.jpg",
    title: "Porch Canopy",
    category: "parking-shades",
    categoryLabel: "Porch Shade",
    spec: "14-gauge steel frame"
  },
  {
    id: 6,
    url: "https://i.postimg.cc/Df6GhQXr/541746597-122098269741006313-4216733323056857693-n.jpg",
    title: "Prefab Security Cabin",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Weather-tight fiberglass"
  },
  {
    id: 7,
    url: "https://i.postimg.cc/VLNCkSq3/542108123-122101715025006313-1927884543701965924-n.jpg",
    title: "Warehouse Truss Shed",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Angle iron & pipe frame"
  },
  {
    id: 8,
    url: "https://i.postimg.cc/fWCds79Y/542131298-122097391119006313-1056193483040170850-n.jpg",
    title: "Double Bay Shade",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Two-vehicle cantilever"
  },
  {
    id: 9,
    url: "https://i.postimg.cc/CM780CqH/542542140-122098269783006313-4007616120959783047-n.jpg",
    title: "Fiberglass Skylight Dome",
    category: "domes",
    categoryLabel: "Dome",
    spec: "Seamless rain-tight dome"
  },
  {
    id: 10,
    url: "https://i.postimg.cc/kX5bgVQL/542611581-122097212565006313-5098863401931291463-n.jpg",
    title: "Steel Main Gate",
    category: "steel-works",
    categoryLabel: "Steel Gate",
    spec: "Solid wrought iron"
  },
  {
    id: 11,
    url: "https://i.postimg.cc/jqcfT67h/542632703-122097212073006313-2279355100222633691-n.jpg",
    title: "Entrance Canopy",
    category: "parking-shades",
    categoryLabel: "Canopy",
    spec: "Impact resistant"
  },
  {
    id: 12,
    url: "https://i.postimg.cc/G3KDRPyQ/542659228-122097212349006313-8361862315349966484-n.jpg",
    title: "Mosque Fiber Dome",
    category: "domes",
    categoryLabel: "Dome",
    spec: "UV gelcoat composite"
  },
  {
    id: 13,
    url: "https://i.postimg.cc/HWzMm0yB/542666433-122097212481006313-3985382778218796013-n.jpg",
    title: "Guard Sentry Post",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Portable insulated cabin"
  },
  {
    id: 14,
    url: "https://i.postimg.cc/7P9z412K/542750610-122097211971006313-381497620459177887-n.jpg",
    title: "Steel Pipe Framework",
    category: "steel-works",
    categoryLabel: "Steel Frame",
    spec: "Industrial welded joints"
  },
  {
    id: 15,
    url: "https://i.postimg.cc/sfmWzPhH/542750665-122097212421006313-5126376941911369534-n.jpg",
    title: "Cantilever Carport",
    category: "parking-shades",
    categoryLabel: "Carport",
    spec: "Single post space saver"
  },
  {
    id: 16,
    url: "https://i.postimg.cc/wx2Nz5mn/542751622-122097212241006313-6477345394990548198-n.jpg",
    title: "Workshop Roofing",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Corrugated fiber & steel"
  },
  {
    id: 17,
    url: "https://i.postimg.cc/15YNn9Mc/542752438-122096045193006313-1128914959484520147-n.jpg",
    title: "Window Grill Work",
    category: "steel-works",
    categoryLabel: "Steel Work",
    spec: "Geometric pattern"
  },
  {
    id: 18,
    url: "https://i.postimg.cc/pVCjvQFw/542752438-122096045193006313-1128914959484520147-n-(1).jpg",
    title: "Rooftop Heat Shade",
    category: "parking-shades",
    categoryLabel: "Rooftop Shade",
    spec: "Sun & rain shield"
  },
  {
    id: 19,
    url: "https://i.postimg.cc/wx2Nz5NK/542754146-122097212295006313-1163667711234948008-n.jpg",
    title: "Spiral Staircase",
    category: "steel-works",
    categoryLabel: "Spiral Stairs",
    spec: "Curved metal steps"
  },
  {
    id: 20,
    url: "https://i.postimg.cc/8PC6zFRy/542759873-122099924727006313-7980745602822163612-n.jpg",
    title: "Commercial Parking Canopy",
    category: "parking-shades",
    categoryLabel: "Commercial Canopy",
    spec: "Multi-vehicle bay"
  },
  {
    id: 21,
    url: "https://i.postimg.cc/yYNZ8JmQ/542763182-122097212133006313-5983684410207352343-n.jpg",
    title: "Translucent Skylight",
    category: "domes",
    categoryLabel: "Skylight",
    spec: "Daylight diffuser"
  },
  {
    id: 22,
    url: "https://i.postimg.cc/c4JnLKR5/543161893-122100004671006313-4050989589751066100-n.jpg",
    title: "Check Post Cabin",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Sliding windows & lock"
  },
  {
    id: 23,
    url: "https://i.postimg.cc/hPGdtJ8R/543204118-122100004731006313-3769402908848186481-n.jpg",
    title: "Pyramid Skylight",
    category: "domes",
    categoryLabel: "Skylight",
    spec: "Siliconized leak proof"
  },
  {
    id: 24,
    url: "https://i.postimg.cc/KvYM8KPH/543426118-122099198637006313-7990766513323416280-n.jpg",
    title: "Steel Girder Section",
    category: "steel-works",
    categoryLabel: "Steel Frame",
    spec: "Heavy structural beam"
  },
  {
    id: 25,
    url: "https://i.postimg.cc/gk0Z2wyG/544551987-122100949785006313-2044250741959263684-n.jpg",
    title: "Walkway Shade",
    category: "parking-shades",
    categoryLabel: "Walkway",
    spec: "Curved corridor canopy"
  },
  {
    id: 26,
    url: "https://i.postimg.cc/X7vCYZK3/544551987-122100949833006313-153274015364386064-n.jpg",
    title: "Stair Railing Work",
    category: "steel-works",
    categoryLabel: "Railing",
    spec: "Smooth polished steel"
  },
  {
    id: 27,
    url: "https://i.postimg.cc/YqSWC4Nq/544765351-122100949881006313-7764136970375412681-n.jpg",
    title: "Entry Guard Booth",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Electrical socket fitted"
  },
  {
    id: 28,
    url: "https://i.postimg.cc/3Jwvxyjx/544911871-122102614011006313-3689872680814692328-n.jpg",
    title: "Factory Cover Shed",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Corrosion-proof fiberglass"
  },
  {
    id: 29,
    url: "https://i.postimg.cc/pX1nh2kB/544940880-122101715091006313-3994183402153172591-n.jpg",
    title: "Double Slope Shed",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Rain drainage slope"
  },
  {
    id: 30,
    url: "https://i.postimg.cc/9FNqRW1Y/545148425-122102614059006313-3719856448738636323-n.jpg",
    title: "Restaurant Pergola",
    category: "parking-shades",
    categoryLabel: "Pergola",
    spec: "Outdoor weather canopy"
  },
  {
    id: 31,
    url: "https://i.postimg.cc/bNvtwG0d/545249228-122100949923006313-2575491388248918516-n.jpg",
    title: "Mosque Minaret Dome",
    category: "domes",
    categoryLabel: "Dome",
    spec: "Green & white gelcoat"
  },
  {
    id: 32,
    url: "https://i.postimg.cc/4N39xKvm/545370006-122101715217006313-7726614900705263281-n.jpg",
    title: "Truss Skeleton Frame",
    category: "steel-works",
    categoryLabel: "Steel Structure",
    spec: "Heavy pipe structural"
  },
  {
    id: 33,
    url: "https://i.postimg.cc/3JwvxyXq/545382643-122100004623006313-1023635494252065473-n.jpg",
    title: "Single Car Carport",
    category: "parking-shades",
    categoryLabel: "Carport",
    spec: "Compact home shade"
  },
  {
    id: 34,
    url: "https://i.postimg.cc/rFYt08gM/545418772-122102772381006313-7521959823809692261-n.jpg",
    title: "Generator Enclosure",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Acoustic & rain cover"
  },
  {
    id: 35,
    url: "https://i.postimg.cc/L6s18qkJ/545451772-122102614155006313-5202274597144159617-n.jpg",
    title: "Insulated Guard Room",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Modular 6x6 cabin"
  },
  {
    id: 36,
    url: "https://i.postimg.cc/65Qvp7rk/545597067-122102772339006313-3712141997978920921-n.jpg",
    title: "Semi-Circle Roof Shade",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Aerodynamic arch"
  },
  {
    id: 37,
    url: "https://i.postimg.cc/TYHWLRQ3/545908896-122102772483006313-3560324169596509064-n.jpg",
    title: "Boundary Wall Grill",
    category: "steel-works",
    categoryLabel: "Steel Work",
    spec: "Wrought iron spear"
  },
  {
    id: 38,
    url: "https://i.postimg.cc/4NFh7Jwn/546099286-122103822135006313-4056617933589736987-n.jpg",
    title: "Factory Span Roofing",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "High durability sheets"
  },
  {
    id: 39,
    url: "https://i.postimg.cc/kXht6nwB/546233383-122101714953006313-6468883932358164628-n.jpg",
    title: "Large Diameter Dome",
    category: "domes",
    categoryLabel: "Dome",
    spec: "Reinforced fiberglass"
  },
  {
    id: 40,
    url: "https://i.postimg.cc/BQvKn85v/546277384-122102772423006313-1691538060646730342-n.jpg",
    title: "Compact Security Booth",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Easily transportable"
  },
  {
    id: 41,
    url: "https://i.postimg.cc/0yTMncTq/546512762-122102614113006313-3170915680094783229-n.jpg",
    title: "Driveway Cantilever",
    category: "parking-shades",
    categoryLabel: "Carport",
    spec: "Double curved beam"
  },
  {
    id: 42,
    url: "https://i.postimg.cc/GhSs8cz4/546939751-122103822267006313-3844334446774833791-n.jpg",
    title: "Workshop Pipe Welding",
    category: "steel-works",
    categoryLabel: "Steel Work",
    spec: "Precision arc welding"
  },
  {
    id: 43,
    url: "https://i.postimg.cc/TYHWLRQW/547327484-122104892619006313-434482878067089595-n.jpg",
    title: "Skylight Pyramid",
    category: "domes",
    categoryLabel: "Skylight",
    spec: "Zero heat radiation"
  },
  {
    id: 44,
    url: "https://i.postimg.cc/RVbn6MGH/547453782-122103822177006313-9200779855212548464-n.jpg",
    title: "Truss Warehouse Shed",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Pillar-less long span"
  },
  {
    id: 45,
    url: "https://i.postimg.cc/XYGB9TDF/547690789-122105210283006313-7348481927332999-n.jpg",
    title: "Office Parking Bay",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Row car shading"
  },
  {
    id: 46,
    url: "https://i.postimg.cc/VLHbrY4R/548214038-122105210109006313-2344126682142612293-n.jpg",
    title: "Center Dome Molding",
    category: "domes",
    categoryLabel: "Dome",
    spec: "Lightweight structure"
  },
  {
    id: 47,
    url: "https://i.postimg.cc/dtSTkqnr/548541429-122104892457006313-3429882741295123571-n.jpg",
    title: "Watchman Cabin",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Ventilated unit"
  },
  {
    id: 48,
    url: "https://i.postimg.cc/YqymGp8Q/548585202-122105211147006313-4184357332163063029-n.jpg",
    title: "Steel Staircase",
    category: "steel-works",
    categoryLabel: "Stairs",
    spec: "Anti-slip steps"
  },
  {
    id: 49,
    url: "https://i.postimg.cc/nhj9q6wq/549707533-122105210193006313-6700118628469064085-n.jpg",
    title: "Plaza Front Canopy",
    category: "parking-shades",
    categoryLabel: "Canopy",
    spec: "Curved metal frame"
  },
  {
    id: 50,
    url: "https://i.postimg.cc/tCgx41dT/550173706-122104892517006313-3408599367130055592-n.jpg",
    title: "Truss Fabrication",
    category: "steel-works",
    categoryLabel: "Steel Structure",
    spec: "Structural weld"
  },
  {
    id: 51,
    url: "https://i.postimg.cc/YCGLQJys/551995643-122106100215006313-6940071370686387107-n.jpg",
    title: "Residential Car Port",
    category: "parking-shades",
    categoryLabel: "Carport",
    spec: "UV treated sheet"
  },
  {
    id: 52,
    url: "https://i.postimg.cc/JzDHj9db/554876753-122106954615006313-8889544281966065042-n.jpg",
    title: "High Dome with Crown",
    category: "domes",
    categoryLabel: "Dome",
    spec: "Ventilation base"
  },
  {
    id: 53,
    url: "https://i.postimg.cc/52YQ8Zkr/555042310-122106848799006313-8479424723492345927-n.jpg",
    title: "Bus Parking Shade",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Extended height"
  },
  {
    id: 54,
    url: "https://i.postimg.cc/t4ZnFLmf/555458477-122106848889006313-2617345839789834451-n.jpg",
    title: "Pipe Bending & Rolling",
    category: "steel-works",
    categoryLabel: "Steel Work",
    spec: "Smooth radius"
  },
  {
    id: 55,
    url: "https://i.postimg.cc/6p24CD1D/555739496-122106848847006313-26340084958515393-n.jpg",
    title: "Security Post with Desk",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Internal desk fitting"
  },
  {
    id: 56,
    url: "https://i.postimg.cc/52YQ8ZkL/555985378-122106954525006313-6840362120722880102-n.jpg",
    title: "Warehouse Steel Shed",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Foundation base plate"
  },
  {
    id: 57,
    url: "https://i.postimg.cc/bwDS1KFT/556106935-122106848931006313-1339653126269370077-n.jpg",
    title: "Terrace Fiberglass Cover",
    category: "parking-shades",
    categoryLabel: "Terrace Shade",
    spec: "Heat reduction"
  },
  {
    id: 58,
    url: "https://i.postimg.cc/x1JNLW4Q/556108013-122106954657006313-7651152154587682804-n.jpg",
    title: "Mosque Dome Architecture",
    category: "domes",
    categoryLabel: "Dome",
    spec: "Gold & green finish"
  },
  {
    id: 59,
    url: "https://i.postimg.cc/cLgtfV5p/556143821-122106954573006313-8209789754251377662-n.jpg",
    title: "Cantilever Wing Shade",
    category: "parking-shades",
    categoryLabel: "Carport",
    spec: "Double arm shade"
  },
  {
    id: 60,
    url: "https://i.postimg.cc/K86kfJdH/556580779-122107902489006313-4506739594785451095-n.jpg",
    title: "Covered Walkway",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Rain protection"
  },
  {
    id: 61,
    url: "https://i.postimg.cc/wjyRDSbk/557319881-122107902363006313-3048860355768998646-n.jpg",
    title: "Sliding Steel Gate",
    category: "steel-works",
    categoryLabel: "Gate",
    spec: "Bearing track"
  },
  {
    id: 62,
    url: "https://i.postimg.cc/jSwnyGkc/557778081-122107902405006313-4979451626653895524-n.jpg",
    title: "Courtyard Fiber Roof",
    category: "parking-shades",
    categoryLabel: "Courtyard Shade",
    spec: "Sunlight reflector"
  },
  {
    id: 63,
    url: "https://i.postimg.cc/L8YgjrbM/559241681-122107902447006313-5080140087609165696-n.jpg",
    title: "Twin Guard Post",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Heavy shell"
  },
  {
    id: 64,
    url: "https://i.postimg.cc/W1BF8XQy/605940647-122118829689006313-3907304493252514932-n.jpg",
    title: "Commercial Wing Shade",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Double cantilever"
  },
  {
    id: 65,
    url: "https://i.postimg.cc/Z5Bv61Dj/616128915-122121457011006313-8292874232979301756-n.jpg",
    title: "Skylight Flange Ring",
    category: "domes",
    categoryLabel: "Skylight",
    spec: "Rubber sealed"
  },
  {
    id: 66,
    url: "https://i.postimg.cc/dVkZGzSS/617423941-122121893007006313-3689486998607421710-n.jpg",
    title: "Truss Welding Work",
    category: "steel-works",
    categoryLabel: "Steel Work",
    spec: "High Court Rd Shop"
  },
  {
    id: 67,
    url: "https://i.postimg.cc/g2CXsNf1/639795755-122125674477006313-123515292093241546-n.jpg",
    title: "Home Car Shade",
    category: "parking-shades",
    categoryLabel: "Carport",
    spec: "Curved profile"
  },
  {
    id: 68,
    url: "https://i.postimg.cc/W1BF8XBR/827484415-122153409111006313-5806561240339279161-n.jpg",
    title: "Gutter Purlin System",
    category: "industrial-sheds",
    categoryLabel: "Industrial Shed",
    spec: "Drainage channel"
  },
  {
    id: 69,
    url: "https://i.postimg.cc/Z5GBHV1g/828026306-122153409255006313-4032288954026311520-n.jpg",
    title: "Toll Booth Cabin",
    category: "security-cabins",
    categoryLabel: "Security Cabin",
    spec: "Fire retardant"
  },
  {
    id: 70,
    url: "https://i.postimg.cc/K86kfJ6S/829544704-122153409189006313-1849663737804168526-n.jpg",
    title: "Balcony Railing",
    category: "steel-works",
    categoryLabel: "Railing",
    spec: "Wrought iron"
  },
  {
    id: 71,
    url: "https://i.postimg.cc/zGbHT9cm/903401466-122158050735006313-553101634337307958-n.jpg",
    title: "Multi-Car Parking Canopy",
    category: "parking-shades",
    categoryLabel: "Parking Shade",
    spec: "Islamabad project"
  }
];
