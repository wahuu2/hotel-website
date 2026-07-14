import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 py-10 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Hotel Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Serenity Hotel</h2>
          <p className="text-sm text-zinc-400">
            Experience luxury and comfort in the heart of Nairobi. 
            Your perfect getaway awaits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-zinc-400">
            <li><Link href="/rooms">Rooms</Link></li>
            <li><Link href="/booking">Booking</Link></li>
            <li><Link href="/offers">Offers</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-sm text-zinc-400">📍 Nairobi, Kenya</p>
          <p className="text-sm text-zinc-400">📞 +254 700 123 456</p>
          <p className="text-sm text-zinc-400">✉️ info@serenityhotel.com</p>
          <div className="flex gap-4 mt-4">
            <Link href="https://facebook.com">Facebook</Link>
            <Link href="https://instagram.com">Instagram</Link>
            <Link href="https://twitter.com">Twitter</Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Serenity Hotel. All rights reserved.
      </div>
    </footer>
  );
}
