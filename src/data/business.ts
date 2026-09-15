export const business = {
  name: "Samana Real Estate Hub",
  legalName: "Samana Real Estate Hub",
  tagline: "Your gateway to real estate in Samana, Dominican Republic.",
  description:
    "The leading real estate directory in Samana province. Find agencies, agents, developers, property management, and all real estate services across Las Terrenas, Samana, Sanchez, El Valle, Las Galeras, El Limon, and Arroyo Barril.",
  founded: 2024,
  address: {
    street: "",
    suburb: "Samana",
    province: "Samana",
    country: "DO",
    formatted: "Samana, Dominican Republic",
  },
  phone: "",
  phoneE164: "",
  email: "",
  hours: [
    { day: "Mon-Fri", open: "08:00", close: "18:00" },
    { day: "Saturday", open: "09:00", close: "14:00" },
    { day: "Sunday", open: "Closed", close: "" },
  ],
  serviceAreas: [
    "Santa Barbara de Samana",
    "Las Terrenas",
    "Sanchez",
    "El Valle",
    "Las Galeras",
    "El Limon",
    "Arroyo Barril",
  ],
  socials: {
    google: "",
    instagram: "",
    facebook: "",
  },
  review: {
    rating: 0,
    count: 0,
    source: "Google",
  },
  siteUrl: "https://samanarealestatehub.example.com",
} as const;

export type Business = typeof business;
