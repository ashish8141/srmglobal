export default function ContactRow({ icon, label, value, href, mono, note }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} style={{
      display: "flex", gap: 14, alignItems: "flex-start",
      padding: "14px 0", borderBottom: "1px dashed var(--line)",
      textDecoration: "none", color: "inherit", cursor: href ? "pointer" : "default"
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: "var(--radius)",
        background: "var(--ink-050)", color: "var(--ink-600)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 16, border: "1px solid var(--ink-100)", flexShrink: 0
      }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.12em", color: "var(--text-faint)", textTransform: "uppercase" }}>{label}</div>
        <div style={{ fontSize: 14.5, color: "var(--ink-700)", fontWeight: 500, marginTop: 3, fontFamily: mono ? "var(--font-mono)" : undefined }}>{value}</div>
        {note && <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2, fontStyle: "italic" }}>{note}</div>}
      </div>
    </Tag>
  );
}
