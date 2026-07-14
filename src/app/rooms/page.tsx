import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";

export default function RoomsPage(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Rooms</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
