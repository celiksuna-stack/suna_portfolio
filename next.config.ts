import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Enable static export so the site can be hosted on GitHub Pages
  output: 'export',
  // Make paths work when the site is served from /suna_portfolio on GitHub Pages
  basePath: isProd ? '/suna_portfolio' : '',
  assetPrefix: isProd ? '/suna_portfolio/' : '',
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
