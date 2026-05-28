"use client";
import { useState } from "react";

export default function InventorySearch() {
  const [q, setQ] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState({});

  const run = async (val) => {
    const term = val.trim();
    setHasSearched(true);
    setMessage("");
    if (!term) { setResults([]); return; }
    setLoading(true);
    try {
      const sheetRes = await fetch(`/api/stock-sheet?q=${encodeURIComponent(term)}`);
      const sheetData = await sheetRes.json();
      setResults(sheetData.results || []);
      setMessage(
        sheetData.results && sheetData.results.length > 0
          ? `TS stock sheet matches from ${sheetData.source || "the imported workbook"}.`
          : "No TS stock sheet match found. Add the part to RFQ manually below."
      );
    } catch (e) {
      setResults([]);
      setMessage("Search failed. Please add the part to RFQ manually below.");
    } finally {
      setLoading(false);
    }
  };

  const addToQuote = (pn) => {
    window.dispatchEvent(new CustomEvent("srm:add-to-quote", { detail: { pn } }));
    setAdded((a) => ({ ...a, [pn]: true }));
    setTimeout(() => setAdded((a) => { const c = { ...a }; delete c[pn]; return c; }), 2200);
  };

  return (
    <div className="card inventory-card" style={{ position: "relative" }}>
      <div className="card-header-row">
        <div>
          <span className="num">LEFT TERMINAL — SEARCH FACILITY</span>
          <h3 style={{ marginTop: 4 }}>Search Live Inventory</h3>
        </div>
        <span className="tag blue mono">2,000+ ACTIVE SKUs</span>
      </div>
      <div className="inventory-search-form">
        <input
          className="inventory-search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") run(q); }}
          placeholder="Enter Part Number (e.g., STM32F..., SN74...)"
        />
        <button className="btn btn-primary inventory-search-btn" onClick={() => run(q)} disabled={loading}>
          {loading ? "Searching…" : "Search"}
        </button>
      </div>
      <div className="inventory-search-tip-row">
        <div className="mono">TIP: try <code style={{ background: "var(--ink-050)", padding: "1px 5px" }}>STM32</code>, <code style={{ background: "var(--ink-050)", padding: "1px 5px" }}>SN74</code>, <code style={{ background: "var(--ink-050)", padding: "1px 5px" }}>MAX232</code></div>
        <div className="mono">⏱ avg response &lt; 2h</div>
      </div>

      {hasSearched && results.length > 0 && (
        <div className="inventory-results-wrap" style={{ marginTop: 16, border: "1px solid var(--line)", borderRadius: "var(--radius)", background: "#fff" }}>
          {message && (
            <div className="mono" style={{
              padding: "9px 14px", fontSize: 11, letterSpacing: "0.08em",
              color: "var(--ink-600)", background: "#fff", borderBottom: "1px solid var(--line)"
            }}>
              {message}
            </div>
          )}
          <div className="inventory-results-table">
          <div className="mono" style={{
            display: "grid", gridTemplateColumns: "1.25fr 0.65fr 0.8fr 0.55fr 1fr 0.75fr",
            gap: 8, padding: "10px 14px", fontSize: 11, letterSpacing: "0.08em",
            background: "var(--ink-050)", color: "var(--ink-700)", fontWeight: 600, textTransform: "uppercase",
            position: "sticky", top: 0, zIndex: 1
          }}>
            <div>ORIG PART NO</div><div>DATE CODE</div><div>MANUFACTURER</div><div>QUANTITY</div><div>COMMENTS</div><div style={{ textAlign: "right" }}>ACTION</div>
          </div>
          {results.map((p, i) => (
            <div key={`${p.pn}-${i}`} style={{
              display: "grid", gridTemplateColumns: "1.25fr 0.65fr 0.8fr 0.55fr 1fr 0.75fr",
              gap: 8, padding: "12px 14px", borderTop: "1px solid var(--line)",
              fontSize: 13, alignItems: "center", color: "var(--text)"
            }}>
              <div className="mono" style={{ fontWeight: 600, color: "var(--ink-700)" }}>{p.pn}</div>
              <div className="mono" style={{ color: "var(--text)" }}>{p.dateCode || "—"}</div>
              <div style={{ color: "var(--text-soft)", fontSize: 12 }}>{p.manufacturer || "—"}</div>
              <div className="mono" style={{ color: "var(--text)" }}>{typeof p.quantity === "number" ? p.quantity.toLocaleString() : p.quantity || "—"}</div>
              <div style={{ color: "var(--text-soft)", fontSize: 12 }}>{p.comments || "—"}</div>
              <div style={{ textAlign: "right" }}>
                <button
                  type="button"
                  className={"btn-quote" + (added[p.pn] ? " added" : "")}
                  onClick={() => addToQuote(p.pn)}>
                  {added[p.pn] ? "✓ Added" : "+ Add to Quote"}
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}

      {hasSearched && !loading && results.length === 0 && message && (
        <div className="mono" style={{
          marginTop: 16, padding: "12px 14px", border: "1px solid var(--line)",
          borderRadius: "var(--radius)", background: "#fff", color: "var(--text-soft)",
          fontSize: 12, letterSpacing: "0.04em"
        }}>
          {message}
        </div>
      )}
    </div>
  );
}
