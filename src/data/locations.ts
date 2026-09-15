export interface Location {
  slug: string;
  name: string;
  type: string;
  typeEn: string;
  municipality: string;
  tagline: string;
  description: string;
  lat: number;
  lng: number;
  zoom: number;
}

export const locations: Location[] = [
  {
    slug: "santa-barbara-de-samana",
    name: "Santa Barbara de Samana",
    type: "Municipio (Cabecera)",
    typeEn: "Municipality (Capital)",
    municipality: "Samana",
    tagline: "The heart of Samana's real estate market.",
    description:
      "Santa Barbara de Samana, the provincial capital, offers a diverse real estate market from beachfront condos to mountain-view villas. As the main urban center, it hosts the highest concentration of real estate agencies and services in the province.",
    lat: 19.20561,
    lng: -69.33685,
    zoom: 13,
  },
  {
    slug: "las-terrenas",
    name: "Las Terrenas",
    type: "Municipio",
    typeEn: "Municipality",
    municipality: "Las Terrenas",
    tagline: "Caribbean living at its finest.",
    description:
      "Las Terrenas is one of the most sought-after real estate markets in the Dominican Republic. With its pristine beaches, international community, and growing infrastructure, it attracts investors and retirees from around the world looking for vacation homes and rental properties.",
    lat: 19.31102,
    lng: -69.5428,
    zoom: 13,
  },
  {
    slug: "sanchez",
    name: "Sanchez",
    type: "Municipio",
    typeEn: "Municipality",
    municipality: "Sanchez",
    tagline: "Historic charm meets modern opportunity.",
    description:
      "Sanchez, one of the oldest towns in the region, offers affordable real estate options with rich cultural heritage. Its strategic location between Samana and Las Terrenas makes it an emerging area for property investment and development.",
    lat: 19.229842,
    lng: -69.613280,
    zoom: 13,
  },
  {
    slug: "el-valle",
    name: "El Valle",
    type: "Paraje / Comunidad Costera",
    typeEn: "Coastal Community",
    municipality: "Samana",
    tagline: "Hidden gem of the Samana coast.",
    description:
      "El Valle is a tranquil coastal community nestled between mountains and sea. This hidden gem offers unique real estate opportunities for those seeking privacy, natural beauty, and authentic Dominican lifestyle away from the tourist crowds.",
    lat: 19.2767694,
    lng: -69.3364408,
    zoom: 13,
  },
  {
    slug: "las-galeras",
    name: "Las Galeras",
    type: "Distrito Municipal",
    typeEn: "Municipal District",
    municipality: "Samana",
    tagline: "Pristine beaches, unlimited potential.",
    description:
      "Las Galeras sits at the eastern tip of the Samana peninsula, home to some of the most beautiful beaches in the Caribbean. Real estate here offers exceptional value with beachfront properties and eco-tourism development opportunities.",
    lat: 19.2819,
    lng: -69.2028,
    zoom: 13,
  },
  {
    slug: "el-limon",
    name: "El Limon",
    type: "Distrito Municipal",
    typeEn: "Municipal District",
    municipality: "Samana",
    tagline: "Where mountains meet the sea.",
    description:
      "El Limon is known for its famous waterfall and lush mountain landscapes. The real estate market here offers hillside properties with stunning ocean views, making it ideal for eco-lodges, boutique hotels, and residential developments.",
    lat: 19.292288,
    lng: -69.43082,
    zoom: 13,
  },
  {
    slug: "arroyo-barril",
    name: "Arroyo Barril",
    type: "Distrito Municipal",
    typeEn: "Municipal District",
    municipality: "Samana",
    tagline: "Emerging real estate frontier.",
    description:
      "Arroyo Barril is an emerging real estate destination with affordable land and growing infrastructure. Its proximity to Samana city and the airport makes it attractive for both residential and commercial development projects.",
    lat: 19.203739,
    lng: -69.446554,
    zoom: 13,
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
