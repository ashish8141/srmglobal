import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Framework Statement — SRM Global Tech Limited",
  description: "How SRM Global Tech Limited processes, secures, and protects global supply chain data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL FRAMEWORK"
        title="Privacy Framework Statement"
        subtitle="How SRM Global Tech Limited processes, secures, and protects global supply chain and procurement data."
      />

      <section className="section-tight" style={{ background: "var(--paper-2)" }}>
        <div className="container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="card" style={{ padding: "48px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
            
            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>01 / OVERVIEW & SCOPE</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Introduction</h3>
              <p>
                SRM Global Tech Limited ("we", "us", or "our"), headquartered at UNIT 2904-05, 29/F UNIVERSAL TRADE CTR 3 ARBUTHNOT RD CENTRAL HONG KONG, takes privacy and data integrity seriously. This Privacy Framework outlines our practices regarding the collection, processing, and protection of information gathered through our sourcing terminals, rapid RFQ interfaces, and electronic component search systems.
              </p>
              <p style={{ marginTop: 12 }}>
                As an independent stocking distributor, we primarily interact with business entities (OEMs, EMS providers, and distributors). All data collected is utilized solely to facilitate supply chain operations, logistics routing, and customer relationship management.
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>02 / DATA ACQUISITION & COLLECTION</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>What Information We Collect</h3>
              <p>
                We collect business-specific information necessary to process requests for quotes (RFQs), BOM analysis, and supply transactions:
              </p>
              <ul style={{ paddingLeft: 20, marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                <li><strong>Professional Contact Data:</strong> Full name, corporate email address, corporate telephone number, and physical shipping/billing addresses.</li>
                <li><strong>Procurement Requirements:</strong> Requested part numbers (Manufacturer Part Numbers - MPNs), target pricing, manufacturer preferences, and delivery schedules.</li>
                <li><strong>System Log Identifiers:</strong> IP address, browser type, and navigation telemetry collected through normal traffic monitoring frameworks.</li>
              </ul>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>03 / DATA PROCESSING & UTILIZATION</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>How We Use Your Data</h3>
              <p>
                All data collected is utilized in direct support of our international logistics and sourcing operations:
              </p>
              <ul style={{ paddingLeft: 20, marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                <li><strong>RFQ Fulfillment:</strong> Processing and quoting requested electronic components, matching part numbers with active inventory, and routing RFQs to the appropriate regional sourcing desk.</li>
                <li><strong>Supply Chain Logistics:</strong> Coordinating logistics, managing customs requirements, and executing delivery routing.</li>
                <li><strong>Relationship Management:</strong> Providing transaction status alerts, response tracking, and operational communications.</li>
              </ul>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>04 / DATA SECURITY & INTEGRITY</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Security Standards</h3>
              <p>
                Our serverless APIs and internal warehousing workflows utilize industry-standard Transport Layer Security (TLS) encryption. Access to procurement logs, bill-of-materials submissions, and customer accounts is strictly restricted to authorized logistics and account management personnel.
              </p>
              <p style={{ marginTop: 12 }}>
                We enforce a strict anti-selling policy: <strong>we do not sell, rent, or trade your sourcing lists, procurement histories, or company details to third-party brokers or advertisers.</strong>
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>05 / ANALYTICS & TELEMETRY</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Google Analytics (GA4)</h3>
              <p>
                We use Google Analytics 4 (GA4) to collect standard internet log information and details of visitor behavior patterns. This helps us analyze website traffic, search terminal usage rates, and page interactions to continuously improve the user experience. All analytics telemetry is processed anonymously and is subject to Google's standard privacy policies.
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>06 / CONTACT & ENQUIRIES</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Data Protection Officer</h3>
              <p>
                For questions regarding this framework or to request the deletion or correction of your business records, please contact our administrative desk:
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>SRM Global Tech Limited</strong><br />
                UNIT 2904-05, 29/F UNIVERSAL TRADE CTR 3 ARBUTHNOT RD CENTRAL HONG KONG<br />
                Email: <a href="mailto:sales@srmglobaltech.com" className="mono" style={{ color: "var(--ink-600)", fontWeight: 600 }}>sales@srmglobaltech.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
