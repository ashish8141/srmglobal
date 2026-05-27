import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Platform Terms of Use — SRM Global Tech Limited",
  description: "The binding legal and operational rules governing the SRM Global Tech transaction terminal.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL FRAMEWORK"
        title="Platform Terms of Use"
        subtitle="The binding operational rules governing the use of the SRM Global Tech sourcing terminal, stock sheet API, and RFQ engines."
      />

      <section className="section-tight" style={{ background: "var(--paper-2)" }}>
        <div className="container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="card" style={{ padding: "48px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
            
            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>01 / ACCEPTANCE OF TERMS</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Contractual Agreement</h3>
              <p>
                By accessing, browsing, or using the sourcing terminal, inventory databases, or RFQ engines provided by SRM Global Tech Limited ("SRM Global Tech"), you acknowledge that you have read, understood, and agreed to be bound by these Platform Terms of Use and all applicable laws and regulations.
              </p>
              <p style={{ marginTop: 12 }}>
                If you do not agree to these terms, you are not authorized to utilize our inventory search systems, download stock lists, or submit RFQs via our digital forms.
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>02 / AUTHORIZED PLATFORM USE</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Permitted Activities</h3>
              <p>
                Users are permitted to search our online databases, examine stock availability, and submit business-to-business Requests for Quotes (RFQs) for legitimate components acquisition, shortage mitigation, and BOM management.
              </p>
              <p style={{ marginTop: 12 }}>
                <strong>Prohibited Conduct:</strong> You may not systematically extract, scrape, mine, or copy inventory data or stock sheets using automated bots, spiders, scripts, or indexers. Any unauthorized bulk download or extraction of our proprietary component allocations is strictly prohibited and will result in the immediate revocation of access and potential legal action.
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>03 / RFQ & BOM INGESTION RULES</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Requests and Sourcing Inquiries</h3>
              <p>
                When submitting a Rapid RFQ or a multi-line Bill of Materials (BOM) through our digital portals:
              </p>
              <ul style={{ paddingLeft: 20, marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                <li>You agree to provide accurate business identification, business emails, and genuine contact information.</li>
                <li>All submissions must represent bona-fide commercial requirements for active manufacturing, prototyping, engineering, or restocking purposes.</li>
                <li>Falsified, spam, or malicious payloads designed to test API limits or compromise serverless endpoints will be logged, blacklisted, and reported to technical hosts.</li>
              </ul>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>04 / INTELLECTUAL PROPERTY RIGHTS</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Ownership of Assets</h3>
              <p>
                All materials, interface layouts, SVGs, design systems, codebase, text, brand representations, and proprietary inventory indices displayed on this website are the sole property of SRM Global Tech Limited and are protected by international copyright, trademark, and intellectual property treaties.
              </p>
              <p style={{ marginTop: 12 }}>
                Use of "SRM Global Tech" or associated logos without our express written consent is strictly prohibited.
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>05 / LIMITATION OF LIABILITY</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Disclaimer of Warranties</h3>
              <p>
                Our search terminal and raw stock sheet results are provided on an "as-is" and "as-available" basis for general planning purposes. Stock levels change dynamically due to real-time transactions at our warehousing hubs. Exact allocations, prices, and component lead times are only confirmed upon formal receipt of a written quotation from our account management team.
              </p>
              <p style={{ marginTop: 12 }}>
                SRM Global Tech Limited shall not be liable for any manufacturing downtime, component delays, or production losses resulting from reliance on estimated web statistics prior to formal contract signing and written order validation.
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>06 / GOVERNING JURISDICTION</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Governing Law</h3>
              <p>
                These terms, platform access rights, and all trade actions initiated through this digital terminal are governed by and construed in accordance with the laws of the <strong>Hong Kong Special Administrative Region</strong>. You agree to submit to the exclusive jurisdiction of the courts of Hong Kong to resolve any disputes arising from your use of this platform.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
