"use client";

import { useState } from "react";

export default function ContactPage(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Contact form submitted:", { name, email, message });
    alert(`Thank you, ${name}! We’ll get back to you soon.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      {/* Contact Info */}
      <div className="mb-10 text-center">
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          📍 Nairobi, Kenya
        </p>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          📞 +254 700 123 456
        </p>
        <p className="text-lg text-zinc-700 dark:text-zinc-300">
          ✉️ info@serenityhotel.com
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 shadow-md rounded-lg p-6 flex flex-col gap-6"
      >
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Optional Map Embed */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31910.123456789!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173123456789%3A0xabcdef123456789!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1621234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
