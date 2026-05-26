export default function HeroChipArt() {
  return (
    <div className="hero-chip-stage">
      <svg viewBox="0 0 480 540" style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }} aria-hidden="true">
        <defs>
          <linearGradient id="chipBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#1a365d" />
            <stop offset="55%" stopColor="#102346" />
            <stop offset="100%" stopColor="#07142b" />
          </linearGradient>
          <linearGradient id="chipBodySm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#23426b" />
            <stop offset="100%" stopColor="#0b1e3f" />
          </linearGradient>
          <linearGradient id="pinMetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#d9dde3" />
            <stop offset="50%" stopColor="#b5bcc6" />
            <stop offset="100%" stopColor="#8a93a0" />
          </linearGradient>
          <linearGradient id="chipShine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#ffffff" stopOpacity="0.16" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <pattern id="padDots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="7" cy="7" r="1.1" fill="#1a365d" fillOpacity="0.12" />
          </pattern>
          <filter id="chipShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <rect x="20" y="60" width="440" height="430" fill="url(#padDots)" rx="14" />

        <g fill="none" stroke="#1a365d" strokeOpacity="0.32" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 40 130 L 110 130 L 130 110 L 215 110" />
          <path d="M 40 170 L 130 170 L 150 190 L 215 190" />
          <path d="M 440 100 L 380 100 L 360 120 L 320 120" />
          <path d="M 440 200 L 380 200 L 360 220 L 320 220" />
          <path d="M 60 410 L 130 410 L 150 430 L 230 430" />
          <path d="M 440 450 L 360 450 L 340 430 L 280 430" />
          <path d="M 245 320 L 245 360" />
          <path d="M 295 320 L 295 360" />
        </g>

        <g fill="#e89028">
          {[
            [110,130],[130,110],[215,110],[130,170],[150,190],[215,190],
            [380,100],[360,120],[320,120],[380,200],[360,220],[320,220],
            [130,410],[150,430],[230,430],[360,450],[340,430],[280,430],
          ].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="2.4" />)}
        </g>

        <g transform="translate(140, 140)">
          <rect x="6" y="14" width="200" height="200" rx="10" fill="#07142b" opacity="0.18" filter="url(#chipShadow)" />
          {Array.from({length: 10}).map((_, i) => (
            <rect key={"t"+i} x={20 + i * 18} y={-12} width="10" height="22" rx="2" fill="url(#pinMetal)" />
          ))}
          {Array.from({length: 10}).map((_, i) => (
            <rect key={"b"+i} x={20 + i * 18} y={200 - 10} width="10" height="22" rx="2" fill="url(#pinMetal)" />
          ))}
          {Array.from({length: 10}).map((_, i) => (
            <rect key={"l"+i} x={-12} y={20 + i * 18} width="22" height="10" rx="2" fill="url(#pinMetal)" />
          ))}
          {Array.from({length: 10}).map((_, i) => (
            <rect key={"r"+i} x={200 - 10} y={20 + i * 18} width="22" height="10" rx="2" fill="url(#pinMetal)" />
          ))}

          <rect x="0" y="0" width="200" height="200" rx="10" fill="url(#chipBody)" />
          <rect x="0" y="0" width="200" height="200" rx="10" fill="url(#chipShine)" />
          <rect x="0" y="0" width="200" height="200" rx="10" fill="none" stroke="#000" strokeOpacity="0.4" />

          <circle cx="18" cy="18" r="5" fill="none" stroke="#8fb0e1" strokeOpacity="0.5" strokeWidth="1.2" />
          <circle cx="18" cy="18" r="2.2" fill="#e89028" />

          <text x="100" y="92" textAnchor="middle" fill="#e6edf8" fillOpacity="0.92"
            fontFamily="JetBrains Mono, monospace" fontSize="22" fontWeight="700" letterSpacing="0.08em">SRM</text>
          <text x="100" y="118" textAnchor="middle" fill="#aebbd1" fillOpacity="0.85"
            fontFamily="JetBrains Mono, monospace" fontSize="13" letterSpacing="0.16em">GLOBAL TECH</text>
          <text x="100" y="146" textAnchor="middle" fill="#8fb0e1" fillOpacity="0.7"
            fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.14em">QFP-40 · IN1A · 26+</text>

          <g stroke="#8fb0e1" strokeOpacity="0.22" strokeWidth="1.2" fill="none">
            <path d="M 8 8 L 8 18 M 8 8 L 18 8" />
            <path d="M 192 8 L 192 18 M 192 8 L 182 8" />
            <path d="M 8 192 L 8 182 M 8 192 L 18 192" />
            <path d="M 192 192 L 192 182 M 192 192 L 182 192" />
          </g>
        </g>

        <g transform="translate(50, 388) rotate(-6)">
          <rect x="4" y="4" width="120" height="60" rx="4" fill="#07142b" opacity="0.18" filter="url(#chipShadow)" />
          {Array.from({length: 8}).map((_, i) => (
            <rect key={"dt"+i} x={6 + i * 14} y={-8} width="8" height="14" rx="1.5" fill="url(#pinMetal)" />
          ))}
          {Array.from({length: 8}).map((_, i) => (
            <rect key={"db"+i} x={6 + i * 14} y={54} width="8" height="14" rx="1.5" fill="url(#pinMetal)" />
          ))}
          <rect x="0" y="0" width="120" height="60" rx="4" fill="url(#chipBodySm)" />
          <rect x="0" y="0" width="120" height="60" rx="4" fill="url(#chipShine)" />
          <path d="M 0 26 a 6 6 0 0 0 0 12 z" fill="#04101f" />
          <text x="60" y="34" textAnchor="middle" fill="#e6edf8" fillOpacity="0.85"
            fontFamily="JetBrains Mono, monospace" fontSize="11" fontWeight="600" letterSpacing="0.12em">NE555 · DIP-8</text>
        </g>

        <g transform="translate(330, 60) rotate(8)">
          <rect x="3" y="4" width="100" height="48" rx="3" fill="#07142b" opacity="0.18" filter="url(#chipShadow)" />
          {Array.from({length: 7}).map((_, i) => (
            <rect key={"st"+i} x={8 + i * 13} y={-7} width="7" height="12" rx="1.5" fill="url(#pinMetal)" />
          ))}
          {Array.from({length: 7}).map((_, i) => (
            <rect key={"sb"+i} x={8 + i * 13} y={43} width="7" height="12" rx="1.5" fill="url(#pinMetal)" />
          ))}
          <rect x="0" y="0" width="100" height="48" rx="3" fill="url(#chipBodySm)" />
          <rect x="0" y="0" width="100" height="48" rx="3" fill="url(#chipShine)" />
          <circle cx="10" cy="10" r="1.6" fill="#e89028" />
          <text x="50" y="28" textAnchor="middle" fill="#e6edf8" fillOpacity="0.85"
            fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="600" letterSpacing="0.12em">FT232RL</text>
        </g>

        <g transform="translate(330, 380) rotate(-12)">
          <rect x="0" y="0" width="92" height="20" rx="10" fill="#c8a878" />
          <rect x="0" y="0" width="92" height="20" rx="10" fill="url(#chipShine)" />
          <rect x="20" y="0" width="3" height="20" fill="#1a365d" />
          <rect x="28" y="0" width="3" height="20" fill="#7a1f1f" />
          <rect x="38" y="0" width="3" height="20" fill="#e89028" />
          <rect x="60" y="0" width="3" height="20" fill="#1f8a5b" />
          <line x1="-14" y1="10" x2="0" y2="10" stroke="url(#pinMetal)" strokeWidth="3" />
          <line x1="92" y1="10" x2="106" y2="10" stroke="url(#pinMetal)" strokeWidth="3" />
        </g>

        <g transform="translate(70, 90)">
          <rect x="0" y="0" width="42" height="22" rx="2" fill="#d9d4c0" />
          <rect x="0" y="0" width="6" height="22" fill="#3a3225" />
          <rect x="36" y="0" width="6" height="22" fill="#3a3225" />
          <text x="21" y="14" textAnchor="middle" fill="#3a3225"
            fontFamily="JetBrains Mono, monospace" fontSize="8" fontWeight="700">10µF</text>
        </g>
      </svg>

      <div className="hero-float-card" style={{ top: -14, right: -8, animationDelay: "0s" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--green)", boxShadow: "0 0 0 4px #1f8a5b22" }} />
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--text-faint)" }}>RFQ ACK</div>
          <div style={{ fontWeight: 600, color: "var(--ink-700)" }}>1h 04m response</div>
        </div>
      </div>

      <div className="hero-float-card" style={{ bottom: 24, left: -22, animationDelay: "-3s" }}>
        <div style={{
          width: 30, height: 30, borderRadius: 6,
          background: "linear-gradient(180deg, var(--ink-700), var(--ink-900))",
          color: "#e6edf8", display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700
        }}>QC</div>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--text-faint)" }}>4-PHASE INSPECTION</div>
          <div style={{ fontWeight: 600, color: "var(--ink-700)" }}>Verified authentic</div>
        </div>
      </div>

      <div className="hero-float-card" style={{ top: "42%", right: -32, animationDelay: "-1.5s", padding: "8px 12px" }}>
        <div style={{
          width: 24, height: 24, borderRadius: 5, background: "#fdf5e8",
          border: "1px solid #f1d6ad",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9731a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7 L12 3 L21 7 V17 L12 21 L3 17 Z" /><line x1="3" y1="7" x2="12" y2="11" /><line x1="21" y1="7" x2="12" y2="11" /><line x1="12" y1="11" x2="12" y2="21" /></svg>
        </div>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--text-faint)" }}>LIVE SKUs</div>
          <div style={{ fontWeight: 700, color: "var(--ink-700)", letterSpacing: "-0.01em" }}>1.2M+ in catalog</div>
        </div>
      </div>
    </div>
  );
}
