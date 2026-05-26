export default function ResponseRow({ label, v }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
      <span style={{ color: "var(--text-soft)" }}>{label}</span>
      <span className="mono" style={{
        background: "#effaf3", color: "var(--green)", padding: "3px 9px",
        borderRadius: 999, fontSize: 11, border: "1px solid #b7d9c8", letterSpacing: "0.04em"
      }}>{v}</span>
    </div>
  );
}
