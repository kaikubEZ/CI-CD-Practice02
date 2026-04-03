import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/CI-CD-Practice02",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
