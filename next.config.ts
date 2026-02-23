import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.adidas.com',
      },
      {
        protocol: 'https',
        hostname: 'static.nike.com',
      },{
        protocol: 'https',
        hostname: 'images.stockx.com',
      },{
        protocol: 'https',
        hostname: 'placehold.co',
      },{
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
