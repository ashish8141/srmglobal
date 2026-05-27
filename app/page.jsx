import Link from "next/link";
import HeroChipArt from "@/components/HeroChipArt";
import InventorySearch from "@/components/InventorySearch";
import QuickRFQ from "@/components/QuickRFQ";
import PillarCard from "@/components/PillarCard";

export const metadata = {
  title: "Your Trusted Partner in Global Electronic Component Sourcing",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #fbfaf7 0%, #f6f4ee 70%, #f1eee3 100%)" }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(26,54,93,0.12) 1px, transparent 1.4px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at 70% 35%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 35%, black 0%, transparent 75%)",
          opacity: 0.55
        }} />
        <div aria-hidden="true" style={{
          position: "absolute", top: -180, right: -120,
          width: 620, height: 620, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,144,40,0.18) 0%, rgba(232,144,40,0.06) 35%, transparent 65%)",
          pointerEvents: "none"
        }} />
        <div aria-hidden="true" style={{
          position: "absolute", bottom: -160, left: -120,
          width: 540, height: 540, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,54,93,0.10) 0%, rgba(26,54,93,0.04) 40%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div className="container" style={{ position: "relative", paddingTop: 96, paddingBottom: 80 }}>
          <div className="hero-grid">
            <div>
              <div className="eyebrow"><span className="dot" />LEADING INDEPENDENT STOCKING DISTRIBUTOR</div>
              <h1 style={{ marginTop: 22, fontSize: "clamp(36px, 4.4vw, 60px)" }}>
                Your Trusted Partner in <span style={{ color: "var(--ink-600)" }}>Global Electronic Component</span> Sourcing.
              </h1>
              <p style={{ marginTop: 24, fontSize: 18, maxWidth: 560 }}>
                As a leading independent stocking distributor, SRM Global Tech Limited bridges the gap in your supply chain. We provide instant access to millions of standard, hard-to-find, and obsolete electronic components at highly competitive market prices.
              </p>
              <div className="hero-btns" style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <Link href="/#search-block" className="btn btn-primary btn-arrow">Search Inventory</Link>
                <Link href="/contact" className="btn btn-amber btn-arrow">Request a Rapid RFQ</Link>
              </div>
            </div>

            <HeroChipArt />
          </div>
        </div>
      </section>

      {/* Value-prop tracker */}
      <section style={{ padding: "0 0 32px" }}>
        <div className="container" style={{ marginTop: -40, position: "relative", zIndex: 1 }}>
          <div className="stat-row" style={{ boxShadow: "var(--shadow-md)" }}>
            <div className="stat">
              <div className="num">2,000<small>+</small></div>
              <div className="lbl">Verified Global Suppliers</div>
            </div>
            <div className="stat">
              <div className="num">100<small>%</small></div>
              <div className="lbl">Rigorous Quality Inspection</div>
            </div>
            <div className="stat">
              <div className="num">&lt;2<small>h</small></div>
              <div className="lbl">Average RFQ Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE OPERATIONAL SOLUTIONS */}
      <section className="section">
        <div className="container">
          <div className="pillars-layout">
            <div className="pillars-sticky" style={{ position: "sticky", top: 100 }}>
              <div className="eyebrow"><span className="dot" />CORE OPERATIONAL SOLUTIONS</div>
              <h2 style={{ marginTop: 18 }}>Keeping Your Production Lines Moving.</h2>
              <p style={{ marginTop: 18, fontSize: 16 }}>
                In a highly volatile electronics market, component shortages and long factory lead times can bring production to a costly halt. At SRM Global Tech Limited, we leverage an extensive global procurement network and deep in-house stock to locate exactly what you need—exactly when you need it.
              </p>
              <p style={{ marginTop: 14, fontSize: 16 }}>
                From active everyday components to discontinued legacy parts, we protect your supply chain from disruptions.
              </p>
              <Link href="/services" className="btn btn-ghost btn-arrow" style={{ marginTop: 28 }}>
                Explore our capabilities
              </Link>
            </div>

            <div className="pillar-cards">
              <PillarCard icon="shield-check" num="PILLAR 1" title="Uncompromising Quality Control" body="Quality is our ultimate priority. Every component passing through SRM Global Tech undergoes stringent multi-stage inspection protocols to mitigate counterfeit risks before shipment." />
              <PillarCard icon="globe" num="PILLAR 2" title="Global Procurement Footprint" body="With strategic supply hubs and international procurement networks, our sourcing team operates across multiple time zones to deliver unbeatable price and speed." />
              <PillarCard icon="bolt" num="PILLAR 3" title="Rapid RFQ & Dispatch" body="Time is money. Our dedicated account managers respond to your inquiries within hours, and all in-stock orders are packaged and dispatched the very same day." />
              <PillarCard icon="medal" num="PILLAR 4" title="Complete Quality Guarantee" body="Buy with absolute confidence. All components supplied by us are backed by our comprehensive warranty. If a part fails to meet manufacturer specifications, we resolve it seamlessly." />
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SEARCH + RFQ */}
      <section className="section dark" style={{ position: "relative", overflow: "hidden" }} id="search-block">
        <div aria-hidden="true" style={{
          position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)",
          width: 900, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,144,40,0.10) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow"><span className="dot" />INTERACTIVE SEARCH INTEGRATION</div>
          <h2 style={{ marginTop: 16, color: "#fff" }}>Find Your Components Now.</h2>
          <p style={{ marginTop: 14, maxWidth: 580, color: "#aebbd1" }}>
            Two parallel intake paths — search the live stock register or transmit a structured RFQ. Both route to our sourcing desk.
          </p>
          <div className="search-rfq-grid">
            <InventorySearch />
            <QuickRFQ />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0", background: "var(--paper-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container cta-band-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ maxWidth: 560 }}>Ready to lock in your next BOM?</h2>
            <p style={{ marginTop: 10, maxWidth: 560 }}>Send us your part list and target volumes — we&apos;ll come back with quotes, alternates, and lead times within two hours.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/about" className="btn btn-ghost">About SRM</Link>
            <Link href="/contact" className="btn btn-primary btn-arrow">Talk to Sourcing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
