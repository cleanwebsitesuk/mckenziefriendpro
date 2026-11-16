/** Initials on navy, with the two bars from the logo. Used in place of a photograph. */
export function Monogram({ initials, className }: { initials: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 160" aria-hidden="true" focusable="false">
      <rect width="160" height="160" rx="44" fill="#0B1221" />
      <text x="80" y="92" textAnchor="middle" className="monogram-text" fill="#FFFFFF">
        {initials}
      </text>
      <rect x="67" y="112" width="10" height="26" rx="5" fill="#69C1EA" />
      <rect x="83" y="118" width="10" height="20" rx="5" fill="#87CDD0" />
    </svg>
  );
}
