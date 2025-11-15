// Page content constants for the Luxury Bespoke Tailor website

// Store location - Dubai only
export const store = {
  id: 1,
  name: "Dubai Flagship",
  address:
    "Shop 21, Al Asmawi Building, Umm al Sheif, Sheikh Zayed Road, Dubai, UAE",
  phone: "+971 52 8989 345",
  email: "luxury.bespoke@yahoo.com",
  mapLink: "https://maps.app.goo.gl/1i6WSxt9wMPkRJuA6",
};

// Process steps for creating bespoke garments
export const processSteps = [
  {
    id: 1,
    stepNumber: 1,
    title: "Book",
    description:
      "Schedule your appointment through our website, WhatsApp, email or phone.",
  },
  {
    id: 2,
    stepNumber: 2,
    title: "Consultation",
    description:
      "We discuss your preferences and specific requirements, considering location, climate, and occasion.",
  },
  {
    id: 3,
    stepNumber: 3,
    title: "Fitting",
    description:
      "Our expert Style Consultants and Master Tailors work with you through 3 fitting sessions to perfect your garments.",
  },
  {
    id: 4,
    stepNumber: 4,
    title: "Collection",
    description:
      "Collect your new bespoke garment, crafted to perfection and tailored to you.",
  },
];

// Services offered
export const services = [
  {
    id: 1,
    title: "Bespoke Suits",
    description:
      "Experience the ultimate in personalization with our fully bespoke suit service. Every element is crafted specifically for you, from fabric selection to the final stitch.",
    features: [
      "100% custom measurements",
      "Premium fabric selection",
      "Unlimited style options",
      "Multiple fitting sessions",
    ],
  },
  {
    id: 2,
    title: "Made-to-Measure",
    description:
      "Perfect for those seeking a tailored fit with a streamlined process. Choose from our curated selection of fabrics and styles, customized to your measurements.",
    features: [
      "Personalized measurements",
      "Curated fabric collection",
      "Style customization",
      "Two fitting sessions",
    ],
  },
  {
    id: 3,
    title: "Alterations & Repairs",
    description:
      "Our master tailors provide expert alterations and repairs to ensure your garments fit perfectly and last for years to come.",
    features: [
      "Professional alterations",
      "Expert repairs",
      "Quick turnaround",
      "All garment types",
    ],
  },
  {
    id: 4,
    title: "Wedding Packages",
    description:
      "Make your special day unforgettable with our comprehensive wedding packages for grooms, groomsmen, and the entire wedding party.",
    features: [
      "Complete wedding attire",
      "Group packages available",
      "Priority scheduling",
      "Complimentary consultations",
    ],
  },
  {
    id: 5,
    title: "Women's Tailoring",
    description:
      "Exquisite bespoke tailoring for women, from elegant suits to stunning evening wear, all crafted with precision and attention to detail.",
    features: [
      "Custom suits and blazers",
      "Evening wear",
      "Professional attire",
      "Contemporary designs",
    ],
  },
];

// Category descriptions for individual category pages
export const categoryDescriptions = {
  casual: {
    title: "Casual Elegance",
    intro:
      "Elevate your everyday style with our casual tailoring collection. We believe that casual doesn't mean compromising on quality or fit.",
    mainText:
      "Our casual range combines comfort with sophistication, perfect for modern professionals who appreciate the finer details. From impeccably tailored chinos to relaxed blazers, each piece is crafted to ensure you look polished in any setting.",
    features: [
      "Relaxed yet refined silhouettes",
      "Premium casual fabrics",
      "Contemporary styling options",
      "Perfect for business casual and weekend wear",
    ],
  },
  tuxedos: {
    title: "Black Tie Perfection",
    intro:
      "Make an unforgettable impression with our bespoke tuxedo collection. Designed for life's most important moments.",
    mainText:
      "A perfectly tailored tuxedo is an investment in confidence. Our master tailors work with the finest fabrics to create tuxedos that embody timeless elegance and modern sophistication. Every detail, from the satin lapels to the precise break of the trousers, is meticulously crafted.",
    features: [
      "Classic and contemporary styles",
      "Finest tuxedo fabrics",
      "Custom lapel and button options",
      "Coordinating accessories available",
    ],
  },
  womens: {
    title: "Women's Bespoke Tailoring",
    intro:
      "Powerful, elegant, and perfectly fitted. Our women's tailoring service creates garments that celebrate your individual style.",
    mainText:
      "From boardroom to evening events, our bespoke women's collection offers impeccable tailoring that flatters and empowers. We understand that fit is paramount, and our expert tailors ensure every piece is crafted to your unique silhouette.",
    features: [
      "Custom suits and separates",
      "Evening wear and formal attire",
      "Contemporary and classic styles",
      "Expert fitting for all body types",
    ],
  },
  wedding: {
    title: "Wedding Attire",
    intro:
      "Your wedding day deserves perfection. Our wedding tailoring service ensures you look exceptional on the most important day of your life.",
    mainText:
      "Whether you're the groom, part of the wedding party, or a guest, we create stunning wedding attire that combines traditional elegance with personal style. From three-piece suits to morning coats, every garment is tailored to perfection.",
    features: [
      "Complete groom packages",
      "Groomsmen coordination",
      "Traditional and modern styles",
      "Priority scheduling for wedding parties",
    ],
  },
};

// Services overview for home page
export const servicesOverview = {
  title: "Our Tailoring Services",
  description:
    "Located in the heart of Dubai, we believe that true luxury lies in the finer details. We offer a fully bespoke experience, dedicated to crafting the perfect made-to-measure pieces that reflect your unique taste and style. Our commitment to quality craftsmanship and our meticulous attention to detail guarantees that you will feel confident and refined in your personalised bespoke garments.",
  additionalText:
    "Visit our Dubai showroom where we will work with you to curate your dream wardrobe, and ensure you experience the ultimate in luxury tailoring.",
};

// Lookbook/Gallery section for home page
export const lookbookPreview = {
  title: "Be Inspired",
  description:
    "Elevate your style: Whether you're seeking ideas for a special occasion or simply looking to refresh your wardrobe, our lookbook is your ultimate source of style inspiration.",
};
