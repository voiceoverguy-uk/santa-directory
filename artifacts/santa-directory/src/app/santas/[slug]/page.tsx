import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db, santaListings } from "@/db";
import { eq, and, ne } from "drizzle-orm";
import {
  MapPin,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Music,
} from "lucide-react";
import BadgePill from "@/components/BadgePill";
import Gallery from "@/components/Gallery";
import EnquiryForm from "@/components/EnquiryForm";
import ListingCard from "@/components/ListingCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const [santa] = await db
    .select()
    .from(santaListings)
    .where(and(eq(santaListings.slug, slug), eq(santaListings.approved, true)))
    .limit(1);

  if (!santa) return { title: "Santa Not Found" };

  return {
    title: `${santa.name} — ${santa.headline}`,
    description: santa.bio.slice(0, 160),
  };
}

export default async function SantaProfilePage({ params }: PageProps) {
  const { slug } = await params;

  const [santa] = await db
    .select()
    .from(santaListings)
    .where(and(eq(santaListings.slug, slug), eq(santaListings.approved, true)))
    .limit(1);

  if (!santa) notFound();

  const badges: string[] = [];
  if (santa.dbsChecked) badges.push("dbsChecked");
  if (santa.realBeard) badges.push("realBeard");
  if (santa.homeVisits) badges.push("homeVisits");
  if (santa.corporateEvents) badges.push("corporateEvents");
  if (santa.schoolsNurseries) badges.push("schoolsNurseries");
  if (santa.grottos) badges.push("grottos");

  const services = (santa.services as string[]) || [];
  const gallery = (santa.galleryImages as string[]) || [];
  const social = (santa.socialLinks as Record<string, string>) || {};

  const similar = await db
    .select()
    .from(santaListings)
    .where(
      and(eq(santaListings.approved, true), ne(santaListings.slug, slug))
    )
    .limit(3);

  const youtubeEmbedUrl = santa.youtubeUrl
    ? santa.youtubeUrl
        .replace("watch?v=", "embed/")
        .replace("youtu.be/", "youtube.com/embed/")
    : null;

  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark pt-24 lg:pt-28 pb-8 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/santas" className="hover:text-white transition-colors">
              Find a Santa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{santa.name}</span>
          </nav>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="lg:col-span-2 space-y-10">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="shrink-0">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-cream">
                  {santa.profileImageUrl ? (
                    <Image
                      src={santa.profileImageUrl}
                      alt={santa.name}
                      fill
                      className="object-cover"
                      sizes="160px"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">
                      🎅
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-charcoal">
                  {santa.name}
                </h1>
                <p className="text-lg text-brand font-medium mt-1">
                  {santa.headline}
                </p>
                <div className="flex items-center gap-1.5 text-charcoal-light mt-2">
                  <MapPin size={16} />
                  <span>
                    {santa.location}
                    {santa.region ? `, ${santa.region}` : ""}
                  </span>
                </div>
                {santa.pricingFrom && (
                  <p className="mt-2 text-charcoal-light">
                    From{" "}
                    <span className="font-semibold text-charcoal">
                      {santa.pricingFrom}
                    </span>
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {badges.map((b) => (
                    <BadgePill key={b} badge={b} size="md" />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-charcoal mb-3">
                About
              </h2>
              <p className="text-charcoal-light leading-relaxed whitespace-pre-line">
                {santa.bio}
              </p>
            </div>

            {santa.experience && (
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  Experience & Credits
                </h2>
                <p className="text-charcoal-light leading-relaxed whitespace-pre-line">
                  {santa.experience}
                </p>
              </div>
            )}

            {services.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  Services Offered
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 text-charcoal-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {gallery.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  Gallery
                </h2>
                <Gallery images={gallery} alt={santa.name} />
              </div>
            )}

            {youtubeEmbedUrl && (
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  Video
                </h2>
                <div className="aspect-video rounded-xl overflow-hidden bg-charcoal">
                  <iframe
                    src={youtubeEmbedUrl}
                    title={`${santa.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}

            {santa.audioUrl && (
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  Audio Sample
                </h2>
                <div className="bg-cream rounded-xl p-4 flex items-center gap-4">
                  <Music className="text-brand shrink-0" size={24} />
                  <audio controls className="w-full" preload="none">
                    <source src={santa.audioUrl} type="audio/mpeg" />
                    Your browser does not support audio playback.
                  </audio>
                </div>
              </div>
            )}

            {santa.availableDates && (
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  Availability
                </h2>
                <p className="text-charcoal-light">{santa.availableDates}</p>
              </div>
            )}

            <div className="bg-cream rounded-xl p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Service Area
              </h3>
              <p className="text-charcoal-light text-sm">
                {santa.name} is based in {santa.location}
                {santa.region ? `, ${santa.region}` : ""}. Contact them directly
                to discuss your location and availability.
              </p>
              <p className="text-xs text-charcoal-light/60 mt-2">
                Interactive map coming soon.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-charcoal mb-4">
                  Contact {santa.name}
                </h3>
                <EnquiryForm
                  type="profile"
                  santaSlug={santa.slug}
                  santaName={santa.name}
                />
              </div>

              {Object.keys(social).length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-charcoal mb-3">
                    Find Them Online
                  </h3>
                  <div className="flex gap-3">
                    {social.website && (
                      <a
                        href={social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal-light hover:text-brand hover:bg-brand/10 transition-colors"
                      >
                        <Globe size={18} />
                      </a>
                    )}
                    {social.instagram && (
                      <a
                        href={social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal-light hover:text-brand hover:bg-brand/10 transition-colors"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {social.facebook && (
                      <a
                        href={social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal-light hover:text-brand hover:bg-brand/10 transition-colors"
                      >
                        <Facebook size={18} />
                      </a>
                    )}
                    {social.twitter && (
                      <a
                        href={social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-charcoal-light hover:text-brand hover:bg-brand/10 transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {similar.length > 0 && (
        <section className="bg-cream py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-charcoal mb-8">
              Similar Santas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((s) => (
                <ListingCard key={s.id} santa={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
