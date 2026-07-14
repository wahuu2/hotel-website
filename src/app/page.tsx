import Image from "next/image";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <section className="relative w-full h-screen">
      {/* Hero Background */}
      <Image
        src="/images/hero.jpg"
        alt="Hotel view"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Serenity Hotel</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Experience luxury and comfort in the heart of Nairobi. Your perfect getaway awaits.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex gap-4">
          <Link
            href="/booking"
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Book Now
          </Link>
          <Link
            href="/rooms"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            View Rooms
          </Link>
        </div>
      </div>
    </section>
  );
}
