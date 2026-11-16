import { siteConfig } from "@/site.config";

/** Two rounded bars, side by side: one person beside another. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 28" width="22" height="28" aria-hidden="true" focusable="false">
      <rect x="0" y="2" width="9" height="26" rx="4.5" fill="#69C1EA" />
      <rect x="13" y="8" width="9" height="20" rx="4.5" fill="#87CDD0" />
    </svg>
  );
}

/** Mark plus serif wordmark. The wordmark stacks on two lines on small screens. */
export function Logo() {
  const [first, ...rest] = siteConfig.brandName.split(" ");
  return (
    <span className="logo">
      <LogoMark className="logo__mark" />
      <span className="logo__word">
        <span>{first}</span> <span>{rest.join(" ")}</span>
      </span>
    </span>
  );
}
