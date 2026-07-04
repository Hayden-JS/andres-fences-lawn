import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/andres-fences-lawn',
  assetPrefix: '/andres-fences-lawn',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/andres-fences-lawn',
  },
};

export default nextConfig;
