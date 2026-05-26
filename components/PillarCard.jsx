import Icon from "./Icon";

export default function PillarCard({ icon, num, title, body }) {
  return (
    <div className="card" style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <div style={{
          width: 52, height: 52, borderRadius: "var(--radius)",
          background: "var(--ink-050)", border: "1px solid var(--ink-100)",
          color: "var(--ink-600)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Icon name={icon} size={26} />
        </div>
        <span className="num" style={{ margin: 0 }}>{num}</span>
      </div>
      <h3 style={{ marginTop: 0, marginBottom: 12 }}>{title}</h3>
      <p style={{ fontSize: 14.5 }}>{body}</p>
    </div>
  );
}
