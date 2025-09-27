import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ['raw.githubusercontent.com', 'github.com', 'avatars.githubusercontent.com'],
    // Removed unoptimized for better performance with local images
  },
  distDir: 'dist',
};

export default nextConfig;
