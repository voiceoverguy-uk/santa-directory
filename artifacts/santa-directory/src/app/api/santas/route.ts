import { NextRequest, NextResponse } from "next/server";
import { db, santaListings } from "@/db";
import { eq, and, ilike, or, isNotNull, type SQL } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const search = searchParams.get("search");
    const dbsChecked = searchParams.get("dbsChecked");
    const realBeard = searchParams.get("realBeard");
    const homeVisits = searchParams.get("homeVisits");
    const corporateEvents = searchParams.get("corporateEvents");
    const schoolsNurseries = searchParams.get("schoolsNurseries");
    const grottos = searchParams.get("grottos");
    const videoAvailable = searchParams.get("videoAvailable");

    const conditions: SQL[] = [eq(santaListings.approved, true)];

    if (search) {
      const q = `%${search}%`;
      conditions.push(
        or(
          ilike(santaListings.name, q),
          ilike(santaListings.location, q),
          ilike(santaListings.region, q),
          ilike(santaListings.headline, q),
          ilike(santaListings.bio, q)
        )!
      );
    }

    if (dbsChecked === "true") conditions.push(eq(santaListings.dbsChecked, true));
    if (realBeard === "true") conditions.push(eq(santaListings.realBeard, true));
    if (homeVisits === "true") conditions.push(eq(santaListings.homeVisits, true));
    if (corporateEvents === "true") conditions.push(eq(santaListings.corporateEvents, true));
    if (schoolsNurseries === "true") conditions.push(eq(santaListings.schoolsNurseries, true));
    if (grottos === "true") conditions.push(eq(santaListings.grottos, true));
    if (videoAvailable === "true") conditions.push(isNotNull(santaListings.youtubeUrl));

    const listings = await db
      .select()
      .from(santaListings)
      .where(and(...conditions))
      .orderBy(santaListings.featured, santaListings.name);

    return NextResponse.json(listings);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}
