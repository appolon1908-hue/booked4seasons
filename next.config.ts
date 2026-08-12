import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return ["hvac","plumbing","electrical","cleaning","handyman","landscaping","junk-removal","mobile-car-wash"].map((slug)=>({source:`/${slug}`,destination:`/services/${slug}`,permanent:true}));
  },
};

export default nextConfig;
