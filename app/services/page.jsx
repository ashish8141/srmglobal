import PageHero from "@/components/PageHero";
import Capability from "@/components/Capability";
import CTABand from "@/components/CTABand";
import EngagementWorkflow from "@/components/EngagementWorkflow";

export const metadata = {
  title: "Our Supply Chain Solutions",
  description: "Comprehensive sourcing and inventory strategies customized for modern electronics manufacturing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="CORE CAPABILITIES & SERVICES"
        title="Our Supply Chain Solutions."
        subtitle="Comprehensive sourcing and inventory strategies customized for modern electronics manufacturing."
      />

      <section className="section-tight">
        <div className="container">
          <Capability
            num="01"
            tag="SHORTAGE MITIGATION"
            title="Shortage Mitigation & Fast Sourcing"
            scope="When franchised distribution channels face long lead times and allocations, SRM Global Tech Limited steps in. We excel in spot sourcing, hunting down critical active components across our global network to ensure your production line stays up and running."
            metrics={[
              "Sourcing depth scaling across 2,000+ vetted vendors.",
              "Immediate turnaround on mission-critical, hard-to-find components.",
              "Same-day asset allocation and shipping for items in direct stock.",
            ]}
            kpis={[
              { k: "RFQ response", v: "< 2h" },
              { k: "Vendor pool",  v: "2,000+" },
              { k: "Dispatch",     v: "Same-day" },
            ]}
            tone="light"
          />

          <Capability
            num="02"
            tag="OBSOLETE & END-OF-LIFE"
            title="Sourcing Obsolete & End-of-Life (EOL) Parts"
            scope="Managing a legacy product line means dealing with component obsolescence. We help you extend your product life cycles by locating hard-to-find, legacy, and discontinued electronics. Every obsolete part undergoes extensive anti-counterfeiting verification to guarantee functionality."
            metrics={[
              "Continuous identification matrices for discontinued manufacturing lines.",
              "Rigorous laboratory validation routines to ensure parts conform to exact manufacturer blueprints.",
              "Professional deployment advice regarding drop-in functional alternatives if needed.",
            ]}
            kpis={[
              { k: "Validation phases", v: "04" },
              { k: "Counterfeit rate",  v: "0.0%" },
              { k: "EOL catalog",       v: "Open" },
            ]}
            tone="dark"
          />

          <Capability
            num="03"
            tag="LONG-TERM PLANNING"
            title="Scheduled Orders & Long-Term Planning"
            scope="Protect your project margins from unexpected market price hikes and sudden part shortages. With SRM Global Tech Limited's scheduled ordering service, you can secure your full Bill of Materials (BOM) in advance. We will purchase, hold, and buffer your inventory in our secure warehouse, releasing shipments exactly according to your assembly schedule."
            metrics={[
              "Contractually guaranteed fiscal metrics lock-in for deployment phases.",
              "Mitigation of immediate on-site inventory warehousing layout costs.",
              "Strategic integration with Just-In-Time (JIT) corporate assembly targets.",
            ]}
            kpis={[
              { k: "Price lock",   v: "✓" },
              { k: "JIT release",  v: "✓" },
              { k: "BOM coverage", v: "100%" },
            ]}
            tone="light"
          />
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", overflow: "hidden" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <div className="eyebrow"><span className="dot" />ENGAGEMENT WORKFLOW</div>
              <h2 style={{ marginTop: 14, maxWidth: 680 }}>How an order moves through our desk.</h2>
            </div>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: "0.14em", color: "var(--text-faint)",
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 14px", border: "1px solid var(--line-2)", borderRadius: 999, background: "#fff"
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "var(--amber)",
                boxShadow: "0 0 0 4px rgba(232,144,40,0.22)",
                animation: "workflow-blink 1.6s ease-in-out infinite"
              }} />
              TYPICAL CYCLE · 2H QUOTE → 48H DISPATCH
            </div>
          </div>

          <EngagementWorkflow />
        </div>
      </section>

      <CTABand title="Send us your BOM. We'll quote within two hours." cta="Submit BOM / RFQ" />
    </>
  );
}
