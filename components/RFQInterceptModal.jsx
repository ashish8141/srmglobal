"use client";
import { useState } from "react";

export default function RFQInterceptModal({ q, onClose }) {
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState("");
  const [target, setTarget] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    setSubmitting(true);
    try {
      await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "search-intercept",
          email, pn: q, qty, notes: target,
        }),
      });
      setSent(true);
    } finally { setSubmitting(false); }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(7,20,43,0.65)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 100, padding: 20
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "#fff", borderRadius: "var(--radius-lg)", maxWidth: 520, width: "100%",
        padding: "32px 32px 28px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--line)"
      }}>
        {!sent ? (
          <>
            <span className="num mono" style={{ color: "var(--amber-2)", fontSize: 11, letterSpacing: "0.12em" }}>● NO LIVE STOCK MATCH — RFQ INTERCEPT</span>
            <h3 style={{ margin: "10px 0 8px" }}>We&apos;ll source <span className="mono" style={{ color: "var(--ink-600)" }}>{q || "this part"}</span> for you.</h3>
            <p style={{ marginBottom: 18 }}>Our sourcing desk has access to 2,000+ global vendors and can locate hard-to-find or obsolete inventory. Average response: under 2 hours.</p>
            <div style={{ display: "grid", gap: 10 }}>
              <div className="field"><input placeholder="Business email *" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
              <div className="field"><input placeholder="Quantity required *" value={qty} onChange={(e) => setQty(e.target.value)} /></div>
              <div className="field"><input placeholder="Target unit price (optional)" value={target} onChange={(e) => setTarget(e.target.value)} /></div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 18, justifyContent: "flex-end" }}>
              <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
              <button className="btn btn-amber" onClick={submit} disabled={submitting}>{submitting ? "Sending…" : "Submit RFQ →"}</button>
            </div>
          </>
        ) : (
          <>
            <span className="num mono" style={{ color: "var(--green)", fontSize: 11, letterSpacing: "0.12em" }}>✓ RFQ TRANSMITTED</span>
            <h3 style={{ margin: "10px 0 8px" }}>Routed to our sourcing desk.</h3>
            <p style={{ marginBottom: 18 }}>A dedicated account manager will respond to your business email within 2 hours during business hours.</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn btn-primary" onClick={onClose}>Close</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
