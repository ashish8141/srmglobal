import Icon from "./Icon";

const STEPS = [
  { n: "01", t: "BOM / RFQ Intake",   d: "Sales desk routes your part list within minutes.",          icon: "inbox",        eta: "≤ 30 MIN" },
  { n: "02", t: "Global Sourcing",    d: "Vetted vendors across 5 time zones quote in parallel.",     icon: "globe",        eta: "≤ 2 HOURS" },
  { n: "03", t: "Quality Inspection", d: "Multi-phase QC — visual, microscopy, and lab validation.", icon: "search",       eta: "1–3 DAYS" },
  { n: "04", t: "Pack & Dispatch",    d: "ESD-safe packaging, customs-ready, same-day for stock.",   icon: "box",          eta: "SAME DAY" },
  { n: "05", t: "Warranty & Audit",   d: "2–3 month warranty plus full inspection records on file.",  icon: "shield-check", eta: "2–3 MONTHS" },
];

export default function EngagementWorkflow() {
  return (
    <div className="workflow" style={{ marginTop: 56, position: "relative" }}>
      <div className="workflow-track" aria-hidden="true">
        <div className="workflow-track-line" />
        <div className="workflow-pulse" />
      </div>

      <div className="workflow-grid">
        {STEPS.map((s, i) => (
          <div key={s.n} className="workflow-card" style={{ "--i": i }}>
            <div className="workflow-icon">
              <Icon name={s.icon} size={26} />
            </div>
            <div className="workflow-meta">
              <span className="workflow-step">STEP {s.n}</span>
              <span className="workflow-eta">{s.eta}</span>
            </div>
            <h4 className="workflow-title">{s.t}</h4>
            <p className="workflow-body">{s.d}</p>
            {i < STEPS.length - 1 && (
              <div className="workflow-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
