"use client"; // needed for interactive components in App Router

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Hotel Logo" width={40} height={40} />
        <span className="text-xl font-bold tracking-wide">Serenity Hotel</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-lg">
        <Link href="/">Home</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/booking">Booking</Link>
        <Link href="/offers">Offers</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/rooms" onClick={() => setIsOpen(false)}>Rooms</Link>
          <Link href="/booking" onClick={() => setIsOpen(false)}>Booking</Link>
          <Link href="/offers" onClick={() => setIsOpen(false)}>Offers</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
