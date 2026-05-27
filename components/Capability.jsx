export default function Capability({ num, tag, title, scope, metrics, kpis, tone }) {
  const dark = tone === "dark";
  return (
    <div style={{ padding: "56px 0", borderTop: "1px solid var(--line)" }}>
      <div
        className="capability-grid"
        style={{
          background: dark ? "var(--ink-900)" : "transparent",
          color: dark ? "#d9e2f1" : "inherit",
          padding: dark ? "48px 40px" : 0,
          borderRadius: dark ? "var(--radius-lg)" : 0,
          position: "relative", overflow: "hidden"
        }}
      >
        {dark && <div className="grid-bg-dark" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />}
        <div style={{ position: "relative" }}>
          <div className="mono" style={{
            fontSize: 84, color: dark ? "#ffffff10" : "var(--ink-100)",
            fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1
          }}>{num}</div>
          <div className="eyebrow" style={{ marginTop: 8, color: dark ? "var(--ink-300)" : "var(--ink-500)" }}>
            <span className="dot" />{tag}
          </div>
          <h2 style={{ marginTop: 14, color: dark ? "#fff" : undefined, fontSize: 32 }}>{title}</h2>
        </div>
        <div style={{ position: "relative" }}>
          <p style={{ fontSize: 16.5, color: dark ? "#aebbd1" : undefined }}>{scope}</p>

          <div className="mono" style={{
            marginTop: 24, fontSize: 11, letterSpacing: "0.14em",
            color: dark ? "var(--ink-300)" : "var(--ink-500)", textTransform: "uppercase"
          }}>KEY METRICS DELIVERABLE</div>
          <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            {metrics.map((m, i) => (
              <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div className="mono" style={{
                  fontSize: 11, color: dark ? "var(--ink-300)" : "var(--text-faint)",
                  paddingTop: 3, minWidth: 24
                }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ color: dark ? "#cfdcf0" : "var(--text-soft)", fontSize: 15 }}>{m}</div>
              </li>
            ))}
          </ul>

          <div className="kpi-grid" style={{
            display: "grid", gridTemplateColumns: `repeat(${kpis.length}, 1fr)`,
            marginTop: 28, border: dark ? "1px solid #ffffff15" : "1px solid var(--line)",
            borderRadius: "var(--radius)",
            background: dark ? "#ffffff05" : "#fff"
          }}>
            {kpis.map((k, i) => (
              <div key={k.k} style={{
                padding: "16px 18px",
                borderRight: i < kpis.length - 1 ? (dark ? "1px solid #ffffff15" : "1px solid var(--line)") : "none"
              }}>
                <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: dark ? "var(--ink-300)" : "var(--text-faint)" }}>{k.k.toUpperCase()}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: dark ? "#fff" : "var(--ink-700)", letterSpacing: "-0.02em", marginTop: 4 }}>{k.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
