const ICON_PATHS = {
  "shield-check": (
    <>
      <path d="M12 3 L4 6 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V6 Z" />
      <path d="M8.5 12 L11 14.5 L15.5 10" />
    </>
  ),
  "globe": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12 H21" />
      <path d="M12 3 C15 6 16 9 16 12 C16 15 15 18 12 21 C9 18 8 15 8 12 C8 9 9 6 12 3 Z" />
    </>
  ),
  "bolt": <path d="M13 3 L4 14 H11 L10 21 L20 10 H13 Z" />,
  "medal": (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8 13.5 L6 21 L12 18 L18 21 L16 13.5" />
      <path d="M9.5 9 L11 10.5 L14.5 7.5" />
    </>
  ),
  "scales": (
    <>
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="5" y1="8" x2="19" y2="8" />
      <path d="M5 8 L3 13 H7 Z" />
      <path d="M19 8 L17 13 H21 Z" />
    </>
  ),
  "headset": (
    <>
      <path d="M4 13 V11 A8 8 0 0 1 20 11 V13" />
      <rect x="3" y="13" width="4" height="6" rx="1" />
      <rect x="17" y="13" width="4" height="6" rx="1" />
      <path d="M19 19 V20 A2 2 0 0 1 17 22 H13" />
    </>
  ),
  "cycle": (
    <>
      <path d="M4 12 A8 8 0 0 1 18 7" />
      <polyline points="18 3 18 7 14 7" />
      <path d="M20 12 A8 8 0 0 1 6 17" />
      <polyline points="6 21 6 17 10 17" />
    </>
  ),
  "inbox": (
    <>
      <path d="M3 13 L6 4 H18 L21 13" />
      <path d="M3 13 V19 A2 2 0 0 0 5 21 H19 A2 2 0 0 0 21 19 V13" />
      <path d="M3 13 H8 L10 16 H14 L16 13 H21" />
    </>
  ),
  "search": (
    <>
      <circle cx="11" cy="11" r="6" />
      <line x1="15.5" y1="15.5" x2="21" y2="21" />
      <line x1="8.5" y1="11" x2="13.5" y2="11" />
      <line x1="11" y1="8.5" x2="11" y2="13.5" />
    </>
  ),
  "box": (
    <>
      <path d="M3 7 L12 3 L21 7 V17 L12 21 L3 17 Z" />
      <line x1="3" y1="7" x2="12" y2="11" />
      <line x1="21" y1="7" x2="12" y2="11" />
      <line x1="12" y1="11" x2="12" y2="21" />
      <path d="M7.5 5 L16.5 9" />
    </>
  ),
};

export default function Icon({ name, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}
