import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'github.com', 'avatars.githubusercontent.com'],
    unoptimized: true, // For Netlify compatibility
  },
  distDir: 'dist',
  experimental: {
    mdxRs: false,
  },
};

export default nextConfig;
