import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

let stockCache;
let indexedCache;

function normalizePart(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

async function getStockRows() {
  if (!stockCache) {
    const file = path.join(process.cwd(), "data", "tsstock.json");
    stockCache = JSON.parse(await readFile(file, "utf8"));
    indexedCache = stockCache.map((row) => ({
      ...row,
      key: normalizePart(row.pn),
      text: `${row.pn} ${row.manufacturer} ${row.comments}`.toUpperCase(),
    }));
  }
  return indexedCache;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").trim();
  const exact = searchParams.get("exact") === "1";

  if (q.length < 2) {
    return NextResponse.json({ query: q, count: 0, results: [] });
  }

  const rows = await getStockRows();
  const partKey = normalizePart(q);
  const textTerm = q.toUpperCase();
  const results = [];

  for (const row of rows) {
    const isExact = row.key === partKey;
    if (isExact || (!exact && (row.key.includes(partKey) || row.text.includes(textTerm)))) {
      const { key, text, ...result } = row;
      results.push({ ...result, matchType: isExact ? "exact" : "partial" });
      if (results.length >= 25) break;
    }
  }

  return NextResponse.json({
    query: q,
    source: "TSStock_21-May-2026.xlsx",
    count: results.length,
    results,
  });
}
