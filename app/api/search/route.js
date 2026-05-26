import { NextResponse } from "next/server";
import { searchInventory } from "@/lib/inventory";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const results = searchInventory(q);
  return NextResponse.json({ query: q, count: results.length, results });
}
