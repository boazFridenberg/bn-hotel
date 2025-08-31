export type Room = {
  id: string;
  name: string;
  slug: string;
  pricePerNight: number;
  size: string;
  beds: string;
  guests: number;
  amenities: string[];
  images: string[];
  shortDescription: string;
};

export type Booking = {
  id: string;
  roomId: string;
  roomName: string;
  checkIn: string;   // YYYY-MM-DD
  checkOut: string;  // YYYY-MM-DD
  guests: number;
  fullName: string;
  email: string;
  createdAt: string;
};
