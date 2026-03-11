import { NextResponse } from "next/server";
import { db, enquiries } from "@/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { type, santaSlug, name, email, phone, message } = body;

    if (!type || !name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await db.insert(enquiries).values({
      type,
      santaSlug: santaSlug || null,
      name,
      email,
      phone: phone || null,
      message,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
