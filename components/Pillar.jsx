import Icon from "./Icon";

export default function Pillar({ n, t, body, icon }) {
  return (
    <div className="card" style={{ padding: 32, position: "relative" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 18, marginBottom: 8 }}>
        <div style={{
          width: 60, height: 60, borderRadius: "var(--radius-lg)",
          background: "linear-gradient(180deg, var(--ink-050), #fff)",
          border: "1px solid var(--ink-100)",
          color: "var(--ink-600)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
          boxShadow: "inset 0 -1px 0 var(--ink-100)"
        }}>
          <Icon name={icon} size={28} />
        </div>
        <div className="mono" style={{
          marginLeft: "auto",
          fontSize: 48, color: "var(--ink-100)", fontWeight: 700,
          letterSpacing: "-0.04em", lineHeight: 1
        }}>{n}</div>
      </div>
      <h3 style={{ marginTop: 16, marginBottom: 12 }}>{t}</h3>
      <p>{body}</p>
    </div>
  );
}
