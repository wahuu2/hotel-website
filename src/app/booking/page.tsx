"use client";

import { useState } from "react";

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking details:", { checkIn, checkOut, guests });
    alert(`Booking submitted!\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`);
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Book Your Stay</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 shadow-md rounded-lg p-6 flex flex-col gap-6"
      >
        {/* Check-in Date */}
        <div>
          <label htmlFor="checkIn" className="block mb-2 font-semibold">
            Check-in Date
          </label>
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Check-out Date */}
        <div>
          <label htmlFor="checkOut" className="block mb-2 font-semibold">
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block mb-2 font-semibold">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            min={1}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Check Availability
        </button>
      </form>
    </section>
  );
}
