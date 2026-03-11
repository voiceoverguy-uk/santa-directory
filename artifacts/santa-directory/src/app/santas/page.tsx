import type { Metadata } from "next";
import { Suspense } from "react";
import { db, santaListings } from "@/db";
import { eq } from "drizzle-orm";
import SantasListClient from "./SantasListClient";

export const metadata: Metadata = {
  title: "Find a Santa | Browse Professional Santas for Hire",
  description:
    "Browse our directory of professional, DBS-checked Santa performers available for home visits, grottos, schools, and corporate events across the UK.",
};

export default async function SantasPage() {
  const listings = await db
    .select()
    .from(santaListings)
    .where(eq(santaListings.approved, true))
    .orderBy(santaListings.featured, santaListings.name);

  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SantasListClient initialListings={listings} />
    </Suspense>
  );
}
