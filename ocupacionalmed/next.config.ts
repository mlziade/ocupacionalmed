import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ocupacionalmed",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/ocupacionalmed",
  },
};

export default nextConfig;
