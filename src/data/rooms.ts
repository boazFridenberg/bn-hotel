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
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      "https://plus.unsplash.com/premium_photo-1661962964017-b985533e1f45?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
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
      "https://plus.unsplash.com/premium_photo-1748729621256-d7612f6d1550?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      "https://plus.unsplash.com/premium_photo-1705756177169-22ac6a8af7ec?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
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
      "https://plus.unsplash.com/premium_photo-1748075354873-cb66bb1901bc?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
      "https://plus.unsplash.com/premium_photo-1682377521591-dd6fb21ec96e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
    ],
    shortDescription: "A serene indoor-outdoor sanctuary with lush greenery."
  }
];
