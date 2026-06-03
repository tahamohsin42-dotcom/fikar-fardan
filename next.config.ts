import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol:"https", hostname:"images.unsplash.com", pathname:"/**" },
      { protocol:"https", hostname:"images.pexels.com",   pathname:"/**" },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 86400,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fikar-fardan.vercel.app",
  },
};

export default nextConfig;
