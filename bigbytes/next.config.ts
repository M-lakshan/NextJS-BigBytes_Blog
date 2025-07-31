import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@/cmp_g": path.resolve(__dirname, "src/components/general"),
    };
    return config;
  },
};

export default nextConfig;