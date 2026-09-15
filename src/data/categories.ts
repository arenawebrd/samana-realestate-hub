export interface Category {
  slug: string;
  name: string;
  nameEs: string;
  classification: string;
  classificationEn: string;
  tagline: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "real-estate-agency",
    name: "Real Estate Agency",
    nameEs: "Agencia inmobiliaria",
    classification: "Empresas y Oficinas",
    classificationEn: "Businesses & Offices",
    tagline: "Professional agencies guiding your property journey.",
    description:
      "Real estate agencies in Samana offer comprehensive services including property listing, buyer representation, seller assistance, market analysis, and negotiation support. They have deep knowledge of the local market and can help you navigate the buying, selling, or renting process with confidence.",
  },
  {
    slug: "real-estate-agent",
    name: "Real Estate Agent",
    nameEs: "Agente inmobiliario",
    classification: "Asesores e Individuos",
    classificationEn: "Advisors & Individuals",
    tagline: "Personal expertise for your real estate needs.",
    description:
      "Independent real estate agents in Samana provide personalized service and one-on-one attention. With deep local knowledge and industry connections, they help clients find the perfect property or sell their home at the best price.",
  },
  {
    slug: "real-estate-developer",
    name: "Real Estate Developer",
    nameEs: "Promotora inmobiliaria",
    classification: "Desarrollo y Proyectos",
    classificationEn: "Development & Projects",
    tagline: "Building the future of Samana.",
    description:
      "Real estate developers in Samana are shaping the region's landscape with residential communities, condominiums, and mixed-use projects. They handle everything from land acquisition to construction and sales, offering investment opportunities in one of the Caribbean's fastest-growing markets.",
  },
  {
    slug: "vacation-home-rental",
    name: "Vacation Home Rental Service",
    nameEs: "Servicio de alquiler de viviendas de vacaciones",
    classification: "Rentas Cortas / Turismo",
    classificationEn: "Short-term Rentals & Tourism",
    tagline: "Your home away from home in the Caribbean.",
    description:
      "Vacation home rental services in Samana manage short-term and seasonal rentals for property owners and tourists. From beachfront villas to cozy mountain retreats, they provide fully managed rental solutions that generate income for owners while delivering unforgettable experiences for guests.",
  },
  {
    slug: "property-management",
    name: "Property Management Company",
    nameEs: "Empresa de gestion de propiedades",
    classification: "Gestion y Administracion",
    classificationEn: "Management & Administration",
    tagline: "Expert care for your property investment.",
    description:
      "Property management companies in Samana handle the day-to-day operations of residential and commercial properties. Services include tenant screening, rent collection, maintenance, repairs, and financial reporting, allowing property owners to enjoy passive income without the hassle.",
  },
  {
    slug: "real-estate-consultant",
    name: "Real Estate Consultant",
    nameEs: "Consultor inmobiliario",
    classification: "Asesoria y Estrategia",
    classificationEn: "Advisory & Strategy",
    tagline: "Strategic advice for smarter property decisions.",
    description:
      "Real estate consultants in Samana provide expert analysis, market research, and strategic guidance for investors, developers, and property owners. They help clients make informed decisions about buying, selling, developing, or investing in real estate.",
  },
  {
    slug: "apartment-complex",
    name: "Apartment Complex",
    nameEs: "Complejo de apartamentos",
    classification: "Proyectos y Ubicaciones",
    classificationEn: "Projects & Locations",
    tagline: "Modern living spaces in paradise.",
    description:
      "Apartment complexes in Samana range from affordable residential buildings to luxury beachfront condominiums. These developments offer amenities like pools, gyms, security, and parking, making them popular choices for both residents and vacation property investors.",
  },
  {
    slug: "home-builder",
    name: "Home Builder",
    nameEs: "Constructor de viviendas",
    classification: "Construccion",
    classificationEn: "Construction",
    tagline: "Custom homes built to your vision.",
    description:
      "Home builders in Samana construct custom residential properties ranging from modest family homes to luxury villas. They handle design, permits, construction, and finishing, using local materials and craftsmanship suited to the Caribbean climate.",
  },
  {
    slug: "real-estate-attorney",
    name: "Real Estate Attorney",
    nameEs: "Abogado especializado en bienes raices",
    classification: "Servicios Legales",
    classificationEn: "Legal Services",
    tagline: "Legal protection for your property transaction.",
    description:
      "Real estate attorneys in Samana provide essential legal services for property transactions including title searches, contract review, closing assistance, and dispute resolution. They ensure your investment is legally protected and all procedures comply with Dominican law.",
  },
  {
    slug: "real-estate-appraiser",
    name: "Real Estate Appraiser",
    nameEs: "Tasador inmobiliario",
    classification: "Valuacion y Peritaje",
    classificationEn: "Valuation & Appraisal",
    tagline: "Accurate property valuations you can trust.",
    description:
      "Real estate appraisers in Samana provide professional property valuations for buying, selling, financing, and legal purposes. Their expertise in local market conditions ensures accurate and fair assessments of residential and commercial properties.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
