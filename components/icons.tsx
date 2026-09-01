type IconProps = { className?: string };

const base = "h-5 w-5 shrink-0";

export function IconToothbrush({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <path d="M3 15l7-7 3 3-7 7a2.12 2.12 0 01-3-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 11l3-3M15 13l3-3M17 15l2.5-2.5a2.5 2.5 0 10-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTube({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <path d="M8 3h6l1 3H7l1-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 6h8l1.5 12a2 2 0 01-2 2h-7a2 2 0 01-2-2L7 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBrush({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <rect x="9" y="3" width="6" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconBottle({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <path d="M10 2h4v3l2 2v13a2 2 0 01-2 2h-4a2 2 0 01-2-2V7l2-2V2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconLipBalm({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <rect x="8" y="10" width="8" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 10V7a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFidget({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8.5L10.2 10.5M16 8.5L13.8 10.5M8 15.5L10.2 13.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconBook({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 016.5 3H12v17H6.5A2.5 2.5 0 004 17.5v-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 5.5A2.5 2.5 0 0017.5 3H12v17h5.5a2.5 2.5 0 002.5-2.5v-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
