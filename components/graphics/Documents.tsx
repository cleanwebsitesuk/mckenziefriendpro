/** Stacked documents with a tick: papers in order and ready. Drawn for white backgrounds. */
export function Documents({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 232" aria-hidden="true" focusable="false">
      <g stroke="#0B1221" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="58" y="14" width="136" height="176" rx="18" fill="#69C1EA" transform="rotate(9 126 102)" />
        <rect x="42" y="20" width="136" height="176" rx="18" fill="#87CDD0" transform="rotate(-6 110 108)" />
        <rect x="50" y="30" width="136" height="176" rx="18" fill="#FFFFFF" />
        <path d="M76 70 H160 M76 100 H160 M76 130 H128" fill="none" />
        <circle cx="176" cy="188" r="32" fill="#69C1EA" />
        <path d="M161 189 L172 200 L192 177" fill="none" strokeWidth="6" />
      </g>
    </svg>
  );
}
