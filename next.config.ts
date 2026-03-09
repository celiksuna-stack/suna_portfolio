import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static export so the site can be hosted on GitHub Pages
  output: 'export',
  // We serve the site at the root of the custom domain (www.sunadenmer.com.tr),
  // so no basePath/assetPrefix are needed. Trailing slash keeps static export happy.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
