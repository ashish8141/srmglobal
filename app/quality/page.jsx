import PageHero from "@/components/PageHero";
import QualityPhases from "@/components/QualityPhases";
import Term from "@/components/Term";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Our Quality Guarantee",
  description: "At SRM Global Tech Limited, quality is not a standard—it is an uncompromising promise.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="QUALITY CONTROL & INSPECTION PROTOCOLS"
        title="Our Quality Guarantee."
        subtitle="At SRM Global Tech Limited, quality is not a standard—it is an uncompromising promise."
      />

      <section className="section-tight">
        <div className="container">
          <div className="card" style={{
            padding: "40px 44px", display: "grid", gridTemplateColumns: "0.6fr 1.4fr", gap: 48,
            background: "linear-gradient(180deg, #0b1e3f, #07142b)", color: "#d9e2f1",
            borderColor: "var(--ink-800)", alignItems: "center"
          }}>
            <div>
              <div className="mono" style={{
                display: "inline-block", padding: "6px 12px",
                background: "rgba(232,144,40,0.14)", border: "1px solid #e8902844",
                color: "#f5b969", fontSize: 11, letterSpacing: "0.14em",
                borderRadius: 4, fontWeight: 600
              }}>POLICY · ZT-CTF</div>
              <h2 style={{ color: "#fff", marginTop: 14, fontSize: 32 }}>Zero-Tolerance for Counterfeits.</h2>
            </div>
            <p style={{ fontSize: 16.5, color: "#aebbd1" }}>
              In an independent distribution landscape, security is everything. SRM Global Tech Limited operates a strict quality inspection framework designed to eliminate risk and safeguard your product integrity. From visual verification to advanced testing, we treat every single line item with critical scrutiny before it receives our stamp of approval.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow"><span className="dot" />CHRONOLOGICAL INSPECTION BLUEPRINT</div>
          <h2 style={{ marginTop: 14, maxWidth: 680 }}>Four Sequential Phases. Every Line Item.</h2>
          <QualityPhases />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, padding: "40px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
            <div>
              <div className="eyebrow"><span className="dot" />WARRANTY DECLARATIONS</div>
              <h2 style={{ marginTop: 14 }}>2–3 Month Comprehensive Corporate Protection.</h2>
              <p style={{ marginTop: 18, fontSize: 16 }}>
                We stand behind every part we deliver. All shipments from SRM Global Tech Limited are covered by our complete 2–3 Month Quality Guarantee. In the highly unlikely event that a component fails to meet the original manufacturer specifications within 2–3 months of delivery, we will replace the components free of charge or issue a full refund immediately.
              </p>
            </div>
            <div className="card" style={{ padding: 28, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="num">▎ WARRANTY TERMS</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
                <Term k="Coverage window" v="2–3 months from delivery date" />
                <Term k="Failure mode" v="Out-of-spec vs OEM datasheet" />
                <Term k="Remedy" v="Free replacement or full refund" />
                <Term k="Documentation" v="Full inspection record retained" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Have a question about an inspection record?" cta="Talk to QA" />
    </>
  );
}
