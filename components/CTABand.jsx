import Link from "next/link";

export default function CTABand({ title, cta = "Get in touch", href = "/contact" }) {
  return (
    <section style={{ padding: "72px 0", borderTop: "1px solid var(--line)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        <h2 style={{ maxWidth: 560 }}>{title}</h2>
        <Link href={href} className="btn btn-amber btn-arrow">{cta}</Link>
      </div>
    </section>
  );
}
