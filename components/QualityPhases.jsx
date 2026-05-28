"use client";
import { useState } from "react";

const PHASES = [
  { n: "01", t: "Vendor Qualification Layout",
    body: "We source components exclusively through a continuously verified, strictly audited vendor matrix base. Suppliers showing substandard metrics are immediately de-listed.",
    checks: ["Vendor onboarding audit", "Quarterly performance review", "De-listing on quality breach"] },
  { n: "02", t: "Microscopy Visual Evaluation",
    body: "Incoming batches undergo multi-point analysis under high-powered microscopy. Parameters checked include authentic factory pack materials, labeling validation codes, marking consistency, and outer surface re-work identification indicators.",
    checks: ["Factory pack integrity", "Marking + lot code validation", "Surface re-work detection", "Lead/finish uniformity"] },
  { n: "03", t: "Advanced Laboratory Validation Protocols",
    body: "When materials are routed from wider sourcing spaces, independent specialized laboratories run advanced validation procedures. These involve structural decapsulation metrics, detailed X-ray layout checks, and structural electrical trace validation sweeps to authenticate performance limits.",
    checks: ["Structural decapsulation metrics", "X-ray layout checks", "Electrical trace validation sweeps", "Performance limit authentication"] },
  { n: "04", t: "Regulatory Refinement",
    body: "All quality assurance protocols undergo systemic review shifts to lock directly into changing multi-national standards and risk environments.",
    checks: ["Standards alignment review", "Risk register update", "Customer audit support"] },
];

export default function QualityPhases() {
  const [phase, setPhase] = useState(0);
  const p = PHASES[phase];

  return (
    <div className="quality-phases-grid">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {PHASES.map((pp, i) => (
          <button key={pp.n} onClick={() => setPhase(i)} style={{
            textAlign: "left", padding: "18px 20px",
            background: i === phase ? "var(--ink-900)" : "#fff",
            color: i === phase ? "#fff" : "var(--text)",
            border: "1px solid " + (i === phase ? "var(--ink-900)" : "var(--line)"),
            borderRadius: "var(--radius-lg)",
            cursor: "pointer",
            transition: "all .15s"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: i === phase ? "var(--ink-300)" : "var(--text-faint)" }}>PHASE {pp.n}</div>
              {i === phase && <span className="mono" style={{ fontSize: 11, color: "var(--amber)" }}>● ACTIVE</span>}
            </div>
            <h4 style={{ marginTop: 6, color: i === phase ? "#fff" : "var(--ink-800)" }}>{pp.t}</h4>
          </button>
        ))}
      </div>

      <div className="card bracketed quality-detail-card">
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--amber-2)" }}>● PHASE {p.n} DETAIL</div>
        <h3 style={{ marginTop: 8, fontSize: 28 }}>{p.t}</h3>
        <p style={{ marginTop: 14, fontSize: 16 }}>{p.body}</p>

        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--text-faint)", marginTop: 28 }}>CHECK POINTS</div>
        <div className="quality-checkpoints-grid">
          {p.checks.map((c, i) => (
            <div key={i} style={{
              padding: "12px 14px", border: "1px solid var(--line)", borderRadius: "var(--radius)",
              display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13.5,
              background: "var(--ink-050)"
            }}>
              <div style={{
                width: 16, height: 16, borderRadius: "50%",
                background: "var(--green)", color: "#fff", fontSize: 10, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: 1
              }}>✓</div>
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
