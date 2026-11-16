import Link from "next/link";
import type { ComponentProps } from "react";
import { siteConfig } from "@/site.config";

/**
 * Internal link. Prefetch is off while the other pages are still being built,
 * so the home page never asks the server for pages that don't exist yet.
 * Turn it back on (remove the prop) once every page is live.
 */
export function SiteLink(props: ComponentProps<typeof Link>) {
  return <Link prefetch={false} {...props} />;
}

/**
 * A link to another page of the site. While the site is home page only
 * (homepageOnly in site.config.ts) it renders as plain, non-clickable content
 * with the same styling, so nothing leads to a page that doesn't exist.
 */
export function PageLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (siteConfig.homepageOnly) return <div className={className}>{children}</div>;
  return (
    <SiteLink href={href} className={className}>
      {children}
    </SiteLink>
  );
}
