"use client";
import { useState } from "react";
import RFQInterceptModal from "./RFQInterceptModal";

function statusTag(s) {
  if (s === "in-stock") return <span className="tag green">● IN STOCK</span>;
  if (s === "low")      return <span className="tag amber">● LOW STOCK</span>;
  if (s === "eol")      return <span className="tag red">● EOL / RFQ</span>;
  return <span className="tag">{s}</span>;
}

export default function InventorySearch() {
  const [q, setQ] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [added, setAdded] = useState({});

  const run = async (val) => {
    const term = val.trim();
    setHasSearched(true);
    if (!term) { setResults([]); return; }
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(term)}`);
      const data = await res.json();
      setResults(data.results || []);
      if (!data.results || data.results.length === 0) setShowModal(true);
    } catch (e) {
      setResults([]);
      setShowModal(true);
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
    <div className="card" style={{ position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div>
          <span className="num">LEFT TERMINAL — SEARCH FACILITY</span>
          <h3 style={{ marginTop: 4 }}>Search Live Inventory</h3>
        </div>
        <span className="tag blue mono">2,000+ ACTIVE SKUs</span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") run(q); }}
          placeholder="Enter Part Number (e.g., STM32F..., SN74...)"
          style={{
            flex: 1, height: 50, padding: "0 16px",
            border: "1px solid var(--line-2)", borderRadius: "var(--radius)",
            font: "inherit", fontSize: 14.5
          }}
        />
        <button className="btn btn-primary" style={{ height: 50 }} onClick={() => run(q)} disabled={loading}>
          {loading ? "Searching…" : "Search"}
        </button>
      </div>
      <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--text-faint)" }}>
        <div className="mono">TIP: try <code style={{ background: "var(--ink-050)", padding: "1px 5px" }}>STM32</code>, <code style={{ background: "var(--ink-050)", padding: "1px 5px" }}>SN74</code>, <code style={{ background: "var(--ink-050)", padding: "1px 5px" }}>MAX232</code></div>
        <div className="mono">⏱ avg response &lt; 2h</div>
      </div>

      {hasSearched && results.length > 0 && (
        <div style={{ marginTop: 16, border: "1px solid var(--line)", borderRadius: "var(--radius)", overflow: "hidden", maxHeight: 380, overflowY: "auto", background: "#fff" }}>
          <div className="mono" style={{
            display: "grid", gridTemplateColumns: "1.3fr 1fr 0.6fr 0.55fr 0.55fr 0.7fr",
            gap: 8, padding: "10px 14px", fontSize: 11, letterSpacing: "0.08em",
            background: "var(--ink-050)", color: "var(--ink-700)", fontWeight: 600, textTransform: "uppercase",
            position: "sticky", top: 0, zIndex: 1
          }}>
            <div>PART NUMBER</div><div>DESCRIPTION</div><div>STOCK</div><div>PRICE</div><div>STATUS</div><div style={{ textAlign: "right" }}>ACTION</div>
          </div>
          {results.map((p) => (
            <div key={p.pn} style={{
              display: "grid", gridTemplateColumns: "1.3fr 1fr 0.6fr 0.55fr 0.55fr 0.7fr",
              gap: 8, padding: "12px 14px", borderTop: "1px solid var(--line)",
              fontSize: 13, alignItems: "center", color: "var(--text)"
            }}>
              <div>
                <div className="mono" style={{ fontWeight: 600, color: "var(--ink-700)" }}>{p.pn}</div>
                <div style={{ fontSize: 11, color: "var(--text-faint)" }}>{p.mfr}</div>
              </div>
              <div style={{ color: "var(--text-soft)", fontSize: 12 }}>{p.desc}</div>
              <div className="mono" style={{ color: "var(--text)" }}>{p.stock > 0 ? p.stock.toLocaleString() : "—"}</div>
              <div className="mono" style={{ color: "var(--text)" }}>{p.price}</div>
              <div>{statusTag(p.status)}</div>
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
      )}

      {showModal && <RFQInterceptModal q={q} onClose={() => setShowModal(false)} />}
    </div>
  );
}
