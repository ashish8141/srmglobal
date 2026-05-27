import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Local Cookie Mapping — SRM Global Tech Limited",
  description: "Transparent breakdown of local storage cookies and tracking tags used on our terminal.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL FRAMEWORK"
        title="Local Cookie Mapping"
        subtitle="Transparent breakdown of local storage parameters, session identifiers, and analytics tags deployed on our platform."
      />

      <section className="section-tight" style={{ background: "var(--paper-2)" }}>
        <div className="container" style={{ maxWidth: 860, margin: "0 auto" }}>
          <div className="card" style={{ padding: "48px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
            
            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>01 / STATEMENT OF PURPOSE</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>What Are Cookies?</h3>
              <p>
                Cookies and local storage keys are small text files or database records written to your web browser when visiting websites. They serve multiple functions, including maintaining your interface preferences, keeping track of active queues (like your RFQ part number chips), and transmitting anonymous performance data to web servers.
              </p>
              <p style={{ marginTop: 12 }}>
                SRM Global Tech Limited utilizes cookies and browser local storage primarily to optimize search terminal speeds and protect the stability of our rapid RFQ engines.
              </p>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>02 / GA4 ANALYTICS & TELEMETRY</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Google Analytics 4 Deployed Tags</h3>
              <p>
                To measure how our platform is used, optimize visual performance, and ensure serverless API stability under load, we deploy Google Analytics 4 (GA4) tags. These tags write standard tracking cookies to map user flows.
              </p>
              <p style={{ marginTop: 12 }}>
                The following GA4 tracking cookies may be set:
              </p>
              <div style={{ overflowX: "auto", marginTop: 14 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, textAlign: "left" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--line)", background: "var(--ink-050)" }}>
                      <th style={{ padding: "10px 14px", fontWeight: 600 }}>Cookie ID</th>
                      <th style={{ padding: "10px 14px", fontWeight: 600 }}>Domain</th>
                      <th style={{ padding: "10px 14px", fontWeight: 600 }}>Purpose</th>
                      <th style={{ padding: "10px 14px", fontWeight: 600 }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--line)" }}>
                      <td style={{ padding: "10px 14px" }} className="mono">_ga</td>
                      <td style={{ padding: "10px 14px" }}>srmglobaltech.com</td>
                      <td style={{ padding: "10px 14px" }}>Distinguish unique users for anonymous traffic stats.</td>
                      <td style={{ padding: "10px 14px" }}>2 years</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--line)" }}>
                      <td style={{ padding: "10px 14px" }} className="mono">_ga_*</td>
                      <td style={{ padding: "10px 14px" }}>srmglobaltech.com</td>
                      <td style={{ padding: "10px 14px" }}>Persist session state and track search interactions.</td>
                      <td style={{ padding: "10px 14px" }}>2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>03 / ESSENTIAL LOCAL FUNCTIONALITIES</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>Essential Browser Session and Local Storage</h3>
              <p>
                Certain user preferences are stored directly in your browser's local storage rather than being sent back as network cookies. This minimizes request payload sizes and ensures high page speeds.
              </p>
              <p style={{ marginTop: 12 }}>
                Essential variables stored locally include:
              </p>
              <ul style={{ paddingLeft: 20, marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
                <li><strong>RFQ In-Memory Queue:</strong> Temporarily caches the list of part numbers you have queued in the **Rapid RFQ Module** so that navigating between pages does not erase your unsubmitted forms.</li>
                <li><strong>Stock Sheet Session State:</strong> Maintains fast client-side query results so you do not hit API rate limits when scrolling back and forth.</li>
              </ul>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--line)" }} />

            <div>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-500)", fontWeight: 600 }}>04 / CONTROLLING COOKIES</span>
              <h3 style={{ marginTop: 8, marginBottom: 12 }}>User Preference & Controls</h3>
              <p>
                You can block, disable, or delete cookies at any time by configuring your browser's security settings (usually under "Options", "Preferences", or "Settings"). 
              </p>
              <p style={{ marginTop: 12 }}>
                Please note that blocking essential session storage parameters may degrade performance when using our inventory search filters or queuing multiple components in the Rapid RFQ Module.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
