import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Hotel Logo"
          width={120}
          height={40}
          priority
        />

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-4xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Serenity Hotel
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Experience luxury and comfort in the heart of Nairobi. Book your stay today and enjoy world-class hospitality.
          </p>
        </div>
        {/* Destination */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-4xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Serenity Hotel
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Experience luxury and comfort in the heart of Nairobi. Book your stay today and enjoy world-class hospitality.
          </p>
        </div>

        {/* Offers */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-4xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Serenity Hotel
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Experience luxury and comfort in the heart of Nairobi. Book your stay today and enjoy world-class hospitality.
          </p>
        </div>

        {/* Events */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xl text-4xl font-bold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Serenity Hotel
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Experience luxury and comfort in the heart of Nairobi. Book your stay today and enjoy world-class hospitality.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700 md:w-[158px]"
            href="/booking"
          >
            Book Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/rooms"
          >
            View Rooms
          </a>
        </div>
      </main>
    </div>
  );
}
