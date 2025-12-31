import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // If your GitHub Pages site is hosted at https://<user>.github.io/<repo>/,
  // set NEXT_PUBLIC_BASE_PATH to "/<repo>" (e.g. "/flow-for-her") before building.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
