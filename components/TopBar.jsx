export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div><span className="pulse" />Sourcing Desk Live — Mon–Fri 09:00–18:00</div>
        <div className="links">
          <a href="mailto:sales@srmglobaltech.com" className="topbar-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            sales@srmglobaltech.com
          </a>
          <a href="tel:+914445008200" className="topbar-link mono">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
            </svg>
            +91 44 4500 8200
          </a>
        </div>
      </div>
    </div>
  );
}
