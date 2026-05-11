import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [70, 100],
  },
  allowedDevOrigins: ["192.168.1.7"],
};

export default nextConfig;
