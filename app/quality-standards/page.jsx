import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Quality Standards Records — SRM Global Tech Limited",
  description: "Archived compliance, traceability records, and anti-counterfeiting benchmarks.",
};

export default function QualityStandardsPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPLIANCE PROTOCOLS"
        title="Quality Standards Records"
        subtitle="Archived compliance frameworks, traceability protocols, and anti-counterfeiting verification benchmarks."
      />

      <section className="section-tight" style={{ background: "var(--paper-2)" }}>
        <div className="container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="card" style={{ padding: "48px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
            
            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>01 / ZERO-TOLERANCE QUALITY POLICY</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Our Mission</h3>
              <p>
                In the independent electronic component distribution market, quality inspection is not an optional safeguard — it is the core foundation of supply chain integrity. SRM Global Tech Limited enforces a zero-tolerance policy for counterfeit, degraded, or substandard electronic parts. 
              </p>
              <p style={{ marginTop: 12 }}>
                Every batch routed through our international logistics desks is subjected to strict quality standards to ensure 100% authenticity and functional compliance.
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>02 / ANTI-COUNTERFEITING FRAMEWORK</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Inspection Standards</h3>
              <p>
                Our visual inspection, test engineering, and lab operations are structured in alignment with the industry's most rigorous aerospace, military, and commercial distribution benchmarks:
              </p>
              <ul style={{ paddingLeft: 20, marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                <li><strong>ISO 9001 Alignment:</strong> Quality Management System standards governing procurement, vendor vetting, and logistics tracing.</li>
                <li><strong>IDEA-STD-1010-B Alignment:</strong> Industry-standard protocols for visual inspection of electronic components to identify counterfeit or refurbished lots.</li>
                <li><strong>AS6081 Alignment:</strong> Strict anti-counterfeiting processes governing testing, detection, and mitigation of risk in independent distribution.</li>
              </ul>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>03 / 4-PHASE INSPECTION WORKFLOW</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Sequential Quality Inspection</h3>
              <p>
                No component ever leaves our logistics desks without successfully passing our four-phase sequential testing inspection:
              </p>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ background: "var(--ink-050)", border: "1px solid var(--ink-100)", padding: 16, borderRadius: "var(--radius)" }}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-600)", fontWeight: 600 }}>PHASE 1: External Visual Analysis</div>
                  <p style={{ fontSize: 13.5, marginTop: 4, color: "var(--text-soft)" }}>
                    Verifying packaging labels, checking container integrity, moisture-sensitive level (MSL) tracking, and conducting full microscopic analysis of marking, leads, and packaging formats to spot sanding, re-tinning, or ghost printing.
                  </p>
                </div>
                <div style={{ background: "var(--ink-050)", border: "1px solid var(--ink-100)", padding: 16, borderRadius: "var(--radius)" }}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-600)", fontWeight: 600 }}>PHASE 2: Dimensional Matching</div>
                  <p style={{ fontSize: 13.5, marginTop: 4, color: "var(--text-soft)" }}>
                    Measuring package dimensions, pitch spacing, and lead coplanarity using digital micrometers to confirm perfect alignment with manufacturer datasheets.
                  </p>
                </div>
                <div style={{ background: "var(--ink-050)", border: "1px solid var(--ink-100)", padding: 16, borderRadius: "var(--radius)" }}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-600)", fontWeight: 600 }}>PHASE 3: Advanced Laboratory Screening</div>
                  <p style={{ fontSize: 13.5, marginTop: 4, color: "var(--text-soft)" }}>
                    Utilizing acetone marking permanency tests, solderability testing, and X-ray analysis of inner die connections to check internal structures without destroying the component.
                  </p>
                </div>
                <div style={{ background: "var(--ink-050)", border: "1px solid var(--ink-100)", padding: 16, borderRadius: "var(--radius)" }}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-600)", fontWeight: 600 }}>PHASE 4: Electrical Integrity Check</div>
                  <p style={{ fontSize: 13.5, marginTop: 4, color: "var(--text-soft)" }}>
                    Conducting diode tests, curve-trace analyses, or basic logic checks to verify components perform inside spec under operational loads.
                  </p>
                </div>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>04 / CERTIFICATION & TRACEABILITY</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Traceability Records</h3>
              <p>
                SRM Global Tech Limited guarantees absolute supply transparency. We provide a **Certificate of Conformance (CoC)** with every shipment, verifying traceability back to verified suppliers, independent tests, or original manufacturers (OEM/OCM) where available.
              </p>
              <p style={{ marginTop: 12 }}>
                Quality assurance documentation is archived for a minimum of 10 years, ensuring complete historical records for auditing, traceability, and field performance tracking.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
