import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import BadgePill from "./BadgePill";
import type { SantaListing } from "@/db/schema";

interface ListingCardProps {
  santa: SantaListing;
}

export default function ListingCard({ santa }: ListingCardProps) {
  const badges = [];
  if (santa.dbsChecked) badges.push("dbsChecked");
  if (santa.realBeard) badges.push("realBeard");
  if (santa.homeVisits) badges.push("homeVisits");
  if (santa.corporateEvents) badges.push("corporateEvents");
  if (santa.schoolsNurseries) badges.push("schoolsNurseries");
  if (santa.grottos) badges.push("grottos");
  if (santa.youtubeUrl) badges.push("videoAvailable");

  return (
    <Link href={`/santas/${santa.slug}`} className="group block">
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          {santa.profileImageUrl ? (
            <Image
              src={santa.profileImageUrl}
              alt={santa.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-brand/30">
              <span className="text-6xl">🎅</span>
            </div>
          )}
          {santa.featured && (
            <span className="absolute top-3 left-3 bg-gold text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-charcoal group-hover:text-brand transition-colors">
            {santa.name}
          </h3>
          <p className="text-sm text-brand font-medium mt-1">
            {santa.headline}
          </p>
          <div className="flex items-center gap-1.5 text-charcoal-light text-sm mt-2">
            <MapPin size={14} />
            <span>{santa.location}</span>
          </div>

          <p className="text-sm text-charcoal-light mt-3 line-clamp-2 flex-1">
            {santa.bio}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {badges.slice(0, 4).map((badge) => (
              <BadgePill key={badge} badge={badge} />
            ))}
            {badges.length > 4 && (
              <span className="text-xs text-charcoal-light self-center ml-1">
                +{badges.length - 4} more
              </span>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            {santa.pricingFrom && (
              <span className="text-sm text-charcoal-light">
                From{" "}
                <span className="font-semibold text-charcoal">
                  {santa.pricingFrom}
                </span>
              </span>
            )}
            <span className="text-sm font-semibold text-brand group-hover:underline">
              View Profile →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
