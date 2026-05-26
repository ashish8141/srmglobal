"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ROUTES = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/quality",  label: "Quality Assurance" },
  { href: "/contact",  label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" style={{ textDecoration: "none" }}>
          <Image src="/assets/logo-icon.png" alt="SRM Global Tech Limited" width={140} height={140} priority />
        </Link>
        <nav className="nav-links">
          {ROUTES.map((r) => (
            <Link key={r.href} href={r.href}
              className={"nav-link " + (isActive(r.href) ? "active" : "")}>
              {r.label}
            </Link>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10 }}>
          <Link href="/#search-block" className="btn btn-ghost btn-sm">Search Inventory</Link>
          <Link href="/contact" className="btn btn-amber btn-sm">Request a Rapid RFQ</Link>
        </div>
      </div>
    </header>
  );
}
