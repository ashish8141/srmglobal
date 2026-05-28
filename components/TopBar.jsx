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
        </div>
      </div>
    </div>
  );
}
