import Image from "next/image";
import Link from "next/link";
import { Room } from "../data/rooms";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps): JSX.Element {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white dark:bg-zinc-900">
      <Image
        src={room.image}
        alt={room.name}
        width={400}
        height={250}
        className="object-cover w-full h-56"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{room.name}</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {room.description}
        </p>
        <p className="text-lg font-semibold mb-4">${room.price}/night</p>
        <Link
          href="/booking"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
