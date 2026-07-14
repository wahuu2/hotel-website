export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious suite with king bed, balcony, and city view.",
    price: 250,
    image: "/images/room1.jpg",
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Elegant room with modern amenities and workspace.",
    price: 180,
    image: "/images/room2.jpg",
  },
  {
    id: 3,
    name: "Standard Room",
    description: "Comfortable room with queen bed and cozy design.",
    price: 120,
    image: "/images/room3.jpg",
  },
];
