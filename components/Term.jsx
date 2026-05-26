export default function Term({ k, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 18, borderBottom: "1px dashed var(--line)", paddingBottom: 12 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--text-faint)", textTransform: "uppercase" }}>{k}</div>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink-700)", textAlign: "right" }}>{v}</div>
    </div>
  );
}
