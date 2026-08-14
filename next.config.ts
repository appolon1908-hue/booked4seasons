import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async headers() {
    return [{ source: "/:path*", headers: [
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
      { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://widgets.leadconnectorhq.com; style-src 'self' 'unsafe-inline' https://widgets.leadconnectorhq.com; img-src 'self' data: blob: https:; font-src 'self' data: https://widgets.leadconnectorhq.com; connect-src 'self' https://widgets.leadconnectorhq.com https://services.leadconnectorhq.com https://*.leadconnectorhq.com; frame-src https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests" },
    ] }];
  },
  async redirects() {
    return ["hvac","plumbing","electrical","cleaning","handyman","landscaping","junk-removal","mobile-car-wash"].map((slug)=>({source:`/${slug}`,destination:`/services/${slug}`,permanent:true}));
  },
};

export default nextConfig;
