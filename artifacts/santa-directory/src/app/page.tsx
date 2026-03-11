import Link from "next/link";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import ListingCard from "@/components/ListingCard";
import CTABlock from "@/components/CTABlock";
import { db, santaListings } from "@/db";
import { eq, and, desc } from "drizzle-orm";

export default async function HomePage() {
  const featured = await db
    .select()
    .from(santaListings)
    .where(
      and(eq(santaListings.approved, true), eq(santaListings.featured, true))
    )
    .orderBy(desc(santaListings.createdAt))
    .limit(4);

  const locations = [
    { name: "London", href: "/santas?search=London" },
    { name: "Manchester", href: "/santas?search=Manchester" },
    { name: "Birmingham", href: "/santas?search=Birmingham" },
    { name: "Leeds", href: "/santas?search=Leeds" },
    { name: "Bristol", href: "/santas?search=Bristol" },
    { name: "Edinburgh", href: "/santas?search=Edinburgh" },
    { name: "Liverpool", href: "/santas?search=Liverpool" },
    { name: "Glasgow", href: "/santas?search=Glasgow" },
  ];

  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal">
              Featured Santas
            </h2>
            <p className="text-charcoal-light mt-3 max-w-xl mx-auto">
              Discover some of our top-rated professional Santa performers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((santa) => (
              <ListingCard key={santa.id} santa={santa} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/santas"
              className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Santas
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal">
              Popular Locations
            </h2>
            <p className="text-charcoal-light mt-3">
              Find Santas available in your area.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.name}
                href={loc.href}
                className="bg-white rounded-xl p-5 text-center hover:shadow-md transition-shadow border border-gray-100"
              >
                <span className="text-lg font-semibold text-charcoal hover:text-brand transition-colors">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Are You a Professional Santa?"
        description="Join SantaDirectory and reach thousands of potential customers looking for trusted Santa performers. Get your profile in front of families, venues, and businesses across the UK."
        buttonText="List Your Profile"
        buttonHref="/list-your-profile"
        variant="forest"
      />
    </>
  );
}
