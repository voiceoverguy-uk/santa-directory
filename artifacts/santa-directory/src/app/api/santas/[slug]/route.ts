import { NextResponse } from "next/server";
import { db, santaListings } from "@/db";
import { eq, and } from "drizzle-orm";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const [santa] = await db
      .select()
      .from(santaListings)
      .where(
        and(eq(santaListings.slug, slug), eq(santaListings.approved, true))
      )
      .limit(1);

    if (!santa) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(santa);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch listing" },
      { status: 500 }
    );
  }
}
