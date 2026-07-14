import Image from "next/image";

interface Offer {
  id: number;
  title: string;
  description: string;
  image: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Romantic Getaway",
    description: "Enjoy a 2-night stay with complimentary spa treatment and candlelight dinner.",
    image: "/images/offer1.jpg",
  },
  {
    id: 2,
    title: "Family Package",
    description: "Book 3 nights and get the 4th night free, plus kids stay and eat free.",
    image: "/images/offer2.jpg",
  },
  {
    id: 3,
    title: "Business Retreat",
    description: "Special rates for corporate bookings with access to conference facilities.",
    image: "/images/offer3.jpg",
  },
];

export default function OffersPage(): JSX.Element {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Special Offers</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="border rounded-lg shadow-md overflow-hidden bg-white dark:bg-zinc-900"
          >
            <Image
              src={offer.image}
              alt={offer.title}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{offer.title}</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                {offer.description}
              </p>
              <a
                href="/booking"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
