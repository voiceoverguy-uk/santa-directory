"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ListingCard from "@/components/ListingCard";
import SearchFilterBar from "@/components/SearchFilterBar";
import CTABlock from "@/components/CTABlock";
import { MapPin } from "lucide-react";
import type { SantaListing } from "@/db/schema";

interface Props {
  initialListings: SantaListing[];
}

export default function SantasListClient({ initialListings }: Props) {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialSearch);
  const [filters, setFilters] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    let results = initialListings;

    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.location.toLowerCase().includes(q) ||
          (s.region && s.region.toLowerCase().includes(q)) ||
          s.headline.toLowerCase().includes(q) ||
          s.bio.toLowerCase().includes(q)
      );
    }

    Object.entries(filters).forEach(([key, active]) => {
      if (active) {
        if (key === "videoAvailable") {
          results = results.filter((s) => !!s.youtubeUrl);
        } else {
          results = results.filter(
            (s) => s[key as keyof SantaListing] === true
          );
        }
      }
    });

    return results;
  }, [initialListings, search, filters]);

  const handleFilterChange = (key: string, val: boolean) => {
    setFilters((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <section className="bg-gradient-to-br from-brand to-brand-dark pt-24 lg:pt-28 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Find a Santa
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Browse our trusted directory of professional Santa performers across
            the UK.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <SearchFilterBar
          search={search}
          onSearchChange={setSearch}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex items-center justify-between mb-6">
          <p className="text-charcoal-light text-sm">
            {filtered.length} Santa{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((santa) => (
              <ListingCard key={santa.id} santa={santa} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-cream rounded-xl">
            <MapPin className="mx-auto text-brand/40 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-charcoal mb-2">
              No Santas Found
            </h3>
            <p className="text-charcoal-light max-w-md mx-auto">
              Try adjusting your search or filters to find available Santa
              performers in your area.
            </p>
          </div>
        )}

        <div className="mt-16 bg-cream rounded-xl p-8 lg:p-12">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
              <MapPin className="text-brand" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Map View Coming Soon
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">
                We&apos;re working on an interactive map so you can easily find
                Santas near you. In the meantime, use the search bar above to
                filter by location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Don't See What You're Looking For?"
        description="New Santa performers are joining SantaDirectory all the time. Get in touch and we'll help you find the perfect Santa for your event."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
