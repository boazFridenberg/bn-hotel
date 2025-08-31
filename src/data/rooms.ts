import type { Room } from "../types";

export const rooms: Room[] = [
  {
    id: "r1",
    slug: "skyline-suite",
    name: "Skyline Suite",
    pricePerNight: 520,
    size: "65 m²",
    beds: "1 King",
    guests: 2,
    amenities: ["City view", "Private lounge access", "Rain shower", "Smart TV", "High-speed Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d70?q=80&w=1600&auto=format&fit=crop"
    ],
    shortDescription: "Panoramic skyline views with refined details and calm tones."
  },
  {
    id: "r2",
    slug: "ocean-deluxe",
    name: "Ocean Deluxe",
    pricePerNight: 680,
    size: "72 m²",
    beds: "1 King + Daybed",
    guests: 3,
    amenities: ["Oceanfront balcony", "Soaking tub", "Nespresso", "Premium linens", "Bluetooth sound"],
    images: [
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop"
    ],
    shortDescription: "Floor-to-ceiling ocean views and tranquil palette inspired by coastal luxury."
  },
  {
    id: "r3",
    slug: "garden-villa",
    name: "Garden Villa",
    pricePerNight: 940,
    size: "110 m²",
    beds: "2 Queens",
    guests: 4,
    amenities: ["Private garden", "Outdoor shower", "Separate living room", "Butler on request", "In-villa dining"],
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d70?q=80&w=1600&auto=format&fit=crop"
    ],
    shortDescription: "A serene indoor-outdoor sanctuary with lush greenery."
  }
];
