"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const ROUTES = [
  { href: "/",         label: "Home" },
  { href: "/about",    label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/quality",  label: "Quality Assurance" },
  { href: "/contact",  label: "Contact Us" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" style={{ textDecoration: "none" }}>
          <Image src="/assets/logo-icon.png" alt="SRM Global Tech Limited" width={140} height={140} priority />
        </Link>

        {/* Desktop nav links */}
        <nav className="nav-links" aria-label="Primary navigation">
          {ROUTES.map((r) => (
            <Link key={r.href} href={r.href}
              className={"nav-link " + (isActive(r.href) ? "active" : "")}>
              {r.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="nav-ctas" style={{ display: "flex", gap: 10 }}>
          <Link href="/#search-block" className="btn btn-ghost btn-sm">Search Inventory</Link>
          <Link href="/contact" className="btn btn-amber btn-sm">Request a Rapid RFQ</Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={"nav-hamburger " + (open ? "open" : "")}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-nav"
        className={"nav-mobile-drawer " + (open ? "open" : "")}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {ROUTES.map((r) => (
          <Link key={r.href} href={r.href}
            className={"nav-link " + (isActive(r.href) ? "active" : "")}
            onClick={() => setOpen(false)}>
            {r.label}
          </Link>
        ))}
        <div className="nav-mobile-ctas">
          <Link href="/#search-block" className="btn btn-ghost" onClick={() => setOpen(false)}>
            Search Inventory
          </Link>
          <Link href="/contact" className="btn btn-amber btn-arrow" onClick={() => setOpen(false)}>
            Request a Rapid RFQ
          </Link>
        </div>
      </nav>
    </header>
  );
}
