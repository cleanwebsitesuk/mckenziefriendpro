import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // STATIC_EXPORT=1 writes plain HTML to /out (used for offline previews).
  // On Vercel, leave it unset: every page is still pre-rendered as static HTML.
  output: process.env.STATIC_EXPORT ? "export" : undefined,
};

export default nextConfig;
