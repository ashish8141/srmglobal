import PageHero from "@/components/PageHero";
import ContactRow from "@/components/ContactRow";
import ResponseRow from "@/components/ResponseRow";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Connect With Our Sourcing Experts",
  description: "Ready to solve your component shortages? Get in touch with SRM Global Tech Limited today.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="ENGAGEMENT TERMINAL"
        title="Connect With Our Sourcing Experts."
        subtitle="Ready to solve your component shortages? Get in touch with SRM Global Tech Limited today."
      />

      <section className="section-tight" style={{ paddingTop: 24 }}>
        <div className="container contact-grid">

          {/* LEFT — corporate contact nodes */}
          <div>
            <div className="card" style={{ padding: 32 }}>
              <div className="eyebrow"><span className="dot" />CORPORATE CONTACT NODES</div>
              <h3 style={{ marginTop: 14, marginBottom: 24, fontSize: 22 }}>SRM Global Tech Limited</h3>

              <ContactRow icon="✉" label="Group Logistics Router"     value="sales@srmglobaltech.com" href="mailto:sales@srmglobaltech.com" />
              <ContactRow icon="⚡" label="Immediate Sourcing Router"   value="rfq@srmglobaltech.com"   href="mailto:rfq@srmglobaltech.com" />
              <ContactRow icon="☏" label="Voice Interface Terminal"   value="+91 44 4500 8200" href="tel:+914445008200" mono />
              <ContactRow icon="⏱" label="Target Hours"               value="Monday – Friday · 09:00 – 18:00 IST" />
              <ContactRow icon="◉" label="Headquarters"               value="UNIT 2904-05, 29/F UNIVERSAL TRADE CTR 3 ARBUTHNOT RD CENTRAL HONG KONG" />

              <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "22px 0" }} />

              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--text-faint)" }}>RESPONSE TARGETS</div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                <ResponseRow label="Sales inquiry"        v="≤ 4 business hours" />
                <ResponseRow label="RFQ acknowledgement"  v="≤ 30 minutes" />
                <ResponseRow label="Quotation"            v="≤ 2 business hours" />
                <ResponseRow label="BOM analysis"         v="≤ 24 business hours" />
              </div>
            </div>

            <div style={{
              marginTop: 18, padding: "18px 22px",
              background: "var(--ink-050)", borderRadius: "var(--radius-lg)",
              border: "1px solid var(--ink-100)", display: "flex", gap: 14, alignItems: "flex-start"
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", background: "var(--ink-600)",
                color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <circle cx="12" cy="8" r="0.6" fill="currentColor" />
                </svg>
              </div>
              <div style={{ fontSize: 13, color: "var(--text-soft)" }}>
                Submitting a long BOM? Paste it directly into the request field — we accept Excel rows pasted as plain text, CSV, or just lines of <span className="mono" style={{ color: "var(--ink-700)" }}>PN, MFR, QTY</span>.
              </div>
            </div>
          </div>

          {/* RIGHT — BOM ingestion engine */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
