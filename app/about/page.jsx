import Image from "next/image";
import PageHero from "@/components/PageHero";
import Pillar from "@/components/Pillar";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "About SRM Global Tech Limited",
  description: "Driven by precision, backed by global relationships, dedicated to your supply chain security.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="CORPORATE PROFILE"
        title="About SRM Global Tech Limited."
        subtitle="Driven by precision, backed by global relationships, dedicated to your supply chain security."
      >
        <div style={{ display: "flex", gap: 18, marginTop: 32, flexWrap: "wrap" }}>
          <span className="tag mono"><span style={{ color: "var(--amber-2)" }}>●</span> INDEPENDENT STOCKING DISTRIBUTOR</span>
          <span className="tag mono">OEMs · EMS · DISTRIBUTORS</span>
          <span className="tag mono">GLOBAL FOOTPRINT</span>
        </div>
      </PageHero>

      {/* WHO WE ARE */}
      <section className="section-tight">
        <div className="container about-who-grid">
          <div>
            <div className="eyebrow"><span className="dot" />WHO WE ARE</div>
            <h2 style={{ marginTop: 18 }}>An independent supply partner — without the franchise constraints.</h2>
          </div>
          <div>
            <p style={{ fontSize: 17 }}>
              SRM Global Tech Limited is an independent stocking distributor of electronic components, specializing in supply chain solutions for OEMs, EMS providers, and distributors worldwide.
            </p>
            <p style={{ fontSize: 17, marginTop: 18 }}>
              Born out of the need for a highly responsive, flexible, and quality-driven supply partner, we have grown to become an essential ally for electronics manufacturers navigating unpredictable component shortages.
            </p>
            <p style={{ fontSize: 17, marginTop: 18 }}>
              We do not just source components; we deliver <span style={{ color: "var(--ink-700)", fontWeight: 600 }}>operational peace of mind</span> by managing the complexities of global procurement on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* WORKBENCH PHOTO */}
      <section className="section-tight" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="workbench-photo">
            <Image
              src="/assets/workbench.jpg"
              alt="Electronic component workbench — microcontrollers, sensors, breadboard prototyping, and soldering station."
              fill
              sizes="(max-width: 1280px) calc(100vw - 40px), 1216px"
              style={{ objectFit: "cover" }}
            />
            <div className="workbench-photo__overlay">
              <div className="workbench-photo__tag">
                <span className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", color: "var(--amber)" }}>● BENCH FLOOR</span>
                <div style={{ color: "#fff", fontSize: 18, fontWeight: 600, marginTop: 6, letterSpacing: "-0.01em" }}>Every part validated before it ships.</div>
                <div style={{ color: "#aebbd1", fontSize: 13, marginTop: 4, maxWidth: 420 }}>
                  Visual, microscopy, lab — multi-phase QC on every line we route through Chennai.
                </div>
              </div>
              <div className="workbench-photo__chips">
                <span>BREADBOARD VERIFY</span>
                <span>RoHS</span>
                <span>4-PHASE QC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-tight">
        <div className="container">
          <div className="about-mv-grid">
            <div className="card" style={{ padding: 36 }}>
              <span className="num">▎ CORPORATE MISSION STATEMENT</span>
              <h3 style={{ marginTop: 8, marginBottom: 14, fontSize: 24 }}>Eliminate manufacturing downtime worldwide.</h3>
              <p style={{ fontSize: 15.5 }}>
                To eliminate manufacturing downtime worldwide by providing swift, reliable, and authentic electronic component sourcing solutions backed by unmatched customer service.
              </p>
            </div>
            <div className="card" style={{ padding: 36, background: "var(--ink-900)", color: "#d9e2f1", borderColor: "var(--ink-800)" }}>
              <span className="num" style={{ color: "var(--amber)" }}>▎ CORPORATE VISION STATEMENT</span>
              <h3 style={{ marginTop: 8, marginBottom: 14, fontSize: 24, color: "#fff" }}>The most dependable, quality-centric independent distributor.</h3>
              <p style={{ fontSize: 15.5, color: "#aebbd1" }}>
                To be recognized globally as the most dependable and quality-centric independent electronics distributor, fostering long-term supply relationships built on absolute transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section">
        <div className="container">
          <div className="eyebrow"><span className="dot" />STRUCTURAL FOUNDATIONS</div>
          <h2 style={{ marginTop: 16, maxWidth: 680 }}>Our Core Pillars.</h2>
          <div className="about-pillars-grid">
            <Pillar n="01" icon="scales" t="Ethical Sourcing"
              body="We continuously evaluate and vet our supply network, procuring only from verified, trusted vendors." />
            <Pillar n="02" icon="headset" t="Customer-Centric Support"
              body="Every client is assigned a dedicated Account Manager who understands their unique production schedules and technical requirements." />
            <Pillar n="03" icon="cycle" t="Continuous Adaptation"
              body="The electronics market changes daily. We actively pivot, utilizing real-time global market data to find cost savings and stock buffers for our clients." />
          </div>
        </div>
      </section>

      {/* PROTOTYPE BENCH — secondary photo */}
      <section className="section-tight">
        <div className="container">
          <div className="bench-split">
            <div className="bench-split__copy">
              <div className="eyebrow"><span className="dot" />ON THE BENCH</div>
              <h2 style={{ marginTop: 18, maxWidth: 520 }}>Prototypes, breadboards, and the long tail of obsolete silicon.</h2>
              <p style={{ marginTop: 18, maxWidth: 520 }}>
                Most of what we ship is mainstream — but the work that earns us repeat customers is the long tail: Nokia 5110 controllers, HanRun ethernet magnetics, NE555s, FT232RLs, the parts your franchised distributor stopped quoting in 2018.
              </p>
              <p style={{ marginTop: 14, maxWidth: 520 }}>
                Every legacy line we route through Chennai gets a bench check — power-up, signal continuity, footprint match — before it leaves our floor.
              </p>
              <div className="bench-split__stats">
                <div>
                  <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "var(--text-faint)" }}>OBSOLETE LINES</div>
                  <div style={{ fontSize: 30, fontWeight: 700, color: "var(--ink-800)", letterSpacing: "-0.02em", marginTop: 6 }}>14k+</div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "var(--text-faint)" }}>BENCH-VERIFIED</div>
                  <div style={{ fontSize: 30, fontWeight: 700, color: "var(--ink-800)", letterSpacing: "-0.02em", marginTop: 6 }}>100%</div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "var(--text-faint)" }}>RETURN RATE</div>
                  <div style={{ fontSize: 30, fontWeight: 700, color: "var(--ink-800)", letterSpacing: "-0.02em", marginTop: 6 }}>0.04%</div>
                </div>
              </div>
            </div>
            <div className="bench-split__photo">
              <Image
                src="/assets/658.jpg"
                alt="Bench-top prototype with breadboard, Arduino-style microcontroller boards, soldering iron, capacitors, and assorted through-hole resistors."
                fill
                sizes="(max-width: 900px) calc(100vw - 40px), 56vw"
                style={{ objectFit: "cover" }}
              />
              <div className="bench-split__photo-meta">
                <span className="mono">FRAME 042 · CHENNAI LAB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational footprint */}
      <section className="section dark" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ position: "relative" }}>
          <div className="eyebrow"><span className="dot" />OPERATIONAL FOOTPRINT</div>
          <h2 style={{ color: "#fff", marginTop: 14, maxWidth: 680 }}>A sourcing desk that runs while the world is awake.</h2>
          <div className="about-ops-grid">
            {[
              { k: "TIME ZONES", v: "5+", s: "Continuous sourcing coverage across Asia, EMEA, and the Americas." },
              { k: "VETTED VENDORS", v: "2,000+", s: "Independently verified suppliers in active rotation." },
              { k: "SKU CATALOG", v: "1M+", s: "Standard, hard-to-find, and obsolete electronic components." },
              { k: "QC PROTOCOLS", v: "04", s: "Sequential inspection phases on every line item." },
            ].map((m) => (
              <div key={m.k}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--ink-300)" }}>{m.k}</div>
                <div style={{ fontSize: 42, fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", marginTop: 8, lineHeight: 1 }}>{m.v}</div>
                <div style={{ fontSize: 13, color: "#aebbd1", marginTop: 10 }}>{m.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Want to work with a supply partner who picks up the phone?" cta="Talk to a sourcing manager" />
    </>
  );
}
