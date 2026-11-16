/** A clock with a moon: available whenever you need us, evenings included. Drawn for navy backgrounds. */
export function ClockMoon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 232" aria-hidden="true" focusable="false">
      {/* moon */}
      <path d="M190 14 a44 44 0 1 0 38 66 a36 36 0 0 1 -38 -66 Z" fill="#69C1EA" />
      <circle cx="150" cy="22" r="4" fill="#87CDD0" />
      <circle cx="226" cy="118" r="3" fill="#87CDD0" />
      {/* clock */}
      <circle cx="104" cy="132" r="88" fill="#14213D" stroke="#87CDD0" strokeWidth="7" />
      <g stroke="#87CDD0" strokeWidth="6" strokeLinecap="round">
        <path d="M104 62 V70" />
        <path d="M174 132 H166" />
        <path d="M104 202 V194" />
        <path d="M34 132 H42" />
      </g>
      <g stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" fill="none">
        <path d="M104 132 V88" />
        <path d="M104 132 L136 152" />
      </g>
      <circle cx="104" cy="132" r="7" fill="#69C1EA" />
    </svg>
  );
}
