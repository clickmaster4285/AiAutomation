// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/services/:slug',
        destination: '/:slug',
      },
    ];
  },
  // if you have redirects, they go here
};

export default nextConfig;