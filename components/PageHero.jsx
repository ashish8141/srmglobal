export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="section page-hero" style={{ paddingTop: 88, paddingBottom: 64, position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" className="page-hero-glow-a" />
      <div aria-hidden="true" className="page-hero-glow-b" />
      <div className="container" style={{ position: "relative" }}>
        <div className="eyebrow reveal"><span className="dot" />{eyebrow}</div>
        <h1 className="reveal" style={{ marginTop: 18, maxWidth: 920, animationDelay: "0.08s" }}>{title}</h1>
        {subtitle && <p className="reveal" style={{ marginTop: 18, fontSize: 18, color: "var(--text-soft)", maxWidth: 720, animationDelay: "0.16s" }}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
