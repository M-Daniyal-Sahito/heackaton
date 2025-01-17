import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add Sanity's CDN domain here
  },
  experimental: {
    // Your other experimental configurations can go here
  },
};

export default nextConfig;
