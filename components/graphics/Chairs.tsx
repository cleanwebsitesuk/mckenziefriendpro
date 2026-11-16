/**
 * The signature "beside you" graphic: two chairs, side by side, the same
 * size and on the same level. Drawn for navy backgrounds.
 */

function Chair({ x, fill }: { x: number; fill: string }) {
  return (
    <g transform={`translate(${x} 78)`}>
      {/* legs and stretcher */}
      <g stroke={fill} strokeLinecap="round" fill="none">
        <path d="M26 150 L17 250" strokeWidth="13" />
        <path d="M134 150 L143 250" strokeWidth="13" />
        <path d="M24 206 H136" strokeWidth="8" />
      </g>
      {/* back */}
      <rect x="18" y="0" width="124" height="126" rx="32" fill={fill} stroke="#0B1221" strokeWidth="5" />
      <g stroke="#0B1221" strokeWidth="6" strokeLinecap="round">
        <path d="M61 30 V92" />
        <path d="M99 30 V92" />
      </g>
      {/* seat */}
      <rect x="0" y="116" width="160" height="38" rx="19" fill="#F3FAFB" stroke="#0B1221" strokeWidth="5" />
    </g>
  );
}

/** `plain` leaves out the rounded backdrop and floor, for use inside another shape. */
export function Chairs({ className, plain = false }: { className?: string; plain?: boolean }) {
  return (
    <svg className={className} viewBox={plain ? "40 68 360 272" : "0 0 440 372"} aria-hidden="true" focusable="false">
      {plain ? null : (
        <>
          <rect x="0" y="24" width="440" height="324" rx="162" fill="#14213D" />
          {/* floor */}
          <path d="M58 330 H382" stroke="#0B1221" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      <Chair x={50} fill="#69C1EA" />
      <Chair x={230} fill="#87CDD0" />
    </svg>
  );
}
