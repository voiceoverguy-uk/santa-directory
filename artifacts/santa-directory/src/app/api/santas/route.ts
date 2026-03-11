import { NextResponse } from "next/server";
import { db, santaListings } from "@/db";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const listings = await db
      .select()
      .from(santaListings)
      .where(eq(santaListings.approved, true))
      .orderBy(santaListings.featured, santaListings.name);

    return NextResponse.json(listings);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}
