import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, reviewer, message, rating, title } = (body ?? {}) as {
    name?: string;
    reviewer?: string;
    message?: string;
    rating?: number;
    title?: string;
  };

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!message || typeof message !== "string" || message.trim().length < 5) {
    return NextResponse.json(
      { error: "Message must be at least 5 characters" },
      { status: 400 },
    );
  }
  const numericRating = Number(rating);
  if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
    return NextResponse.json(
      { error: "Rating must be an integer between 1 and 5" },
      { status: 400 },
    );
  }

  const { error } = await supabase.from("reviews").insert({
    name: name.trim().slice(0, 120),
    reviewer: reviewer?.trim().slice(0, 200) || null,
    message: message.trim().slice(0, 2000),
    title: title?.trim().slice(0, 200) || null,
    rating: numericRating,
    published: false,
    verified: false,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
