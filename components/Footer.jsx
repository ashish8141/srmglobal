import Link from "next/link";
import Image from "next/image";

const ROUTES = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/quality",  label: "Quality Assurance" },
  { href: "/contact",  label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="cols">
          <div>
            <Image src="/assets/logo-stack.png" alt="SRM Global Tech Limited" width={110} height={110}
              style={{ marginBottom: 18, filter: "drop-shadow(0 4px 14px rgba(47,95,178,0.3))" }} />
            <p style={{ color: "#aebbd1", maxWidth: 340, marginBottom: 18 }}>
              Leading independent stocking distributor bridging the gap in your supply chain — millions of standard, hard-to-find, and obsolete electronic components.
            </p>
            <div style={{ fontSize: 11.5, color: "#6f7d96", lineHeight: 1.7 }}>
              <div><span className="mono" style={{ color: "#8ea1c2" }}>Registered Office:</span> 7F Olympia Tech Park, Guindy, Chennai – 600032, TN, India</div>
              <div><span className="mono" style={{ color: "#8ea1c2" }}>CIN:</span> U51909TN2024PLC168432</div>
              <div><span className="mono" style={{ color: "#8ea1c2" }}>GSTIN:</span> 33ABCDE1234F1Z5</div>
            </div>
          </div>
          <div>
            <h5>Sitemap</h5>
            <ul>
              {ROUTES.map((r) => (
                <li key={r.href}><Link href={r.href}>{r.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Capabilities</h5>
            <ul>
              <li>Shortage Mitigation</li>
              <li>Obsolete / EOL Sourcing</li>
              <li>Scheduled Orders</li>
              <li>BOM Management</li>
              <li>Quality Inspection</li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:sales@srmglobaltech.com">sales@srmglobaltech.com</a></li>
              <li><a href="mailto:rfq@srmglobaltech.com">rfq@srmglobaltech.com</a></li>
              <li className="mono" style={{ color: "#8ea1c2" }}><a href="tel:+914445008200">+91 44 4500 8200</a></li>
              <li>Mon–Fri · 09:00–18:00</li>
            </ul>
          </div>
        </div>
        <div className="bottombar">
          <div>© 2026 SRM Global Tech Limited. All structural assets reserved.</div>
          <div style={{ display: "flex", gap: 18 }}>
            <a>Privacy Framework Statement</a>
            <a>Platform Terms of Use</a>
            <a>Local Cookie Mapping</a>
            <a>Quality Standards Records</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
