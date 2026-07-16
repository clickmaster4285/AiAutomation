// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove redirects - they're causing issues
  // The dynamic routes should handle the URLs directly
  
  // If you want to keep redirects for old URLs, use this format:
  async redirects() {
    return [
      // Redirect old AI Consulting URL to new AI Strategy & Advisory URL
      {
        source: '/services/ai-consulting',
        destination: '/services/ai-strategy-development/ai-strategy-advisory',
        permanent: true,
      },
      {
        source: '/services/ai-consulting/',
        destination: '/services/ai-strategy-development/ai-strategy-advisory',
        permanent: true,
      },
      // Redirect old AI Lead Generation URL
      {
        source: '/services/ai-lead-generation',
        destination: '/services/ai-agents-and-assistants/ai-lead-generation',
        permanent: true,
      },
      {
        source: '/services/ai-lead-generation/',
        destination: '/services/ai-agents-and-assistants/ai-lead-generation',
        permanent: true,
      },
      // Redirect old AI Reporting URL
      {
        source: '/services/ai-reporting-automation',
        destination: '/services/core-automation/ai-reporting-automation',
        permanent: true,
      },
      {
        source: '/services/ai-reporting-automation/',
        destination: '/services/core-automation/ai-reporting-automation',
        permanent: true,
      },
      // Redirect old Custom AI Development URL
      {
        source: '/services/custom-ai-development',
        destination: '/services/ai-strategy-development/custom-ai-development',
        permanent: true,
      },
      {
        source: '/services/custom-ai-development/',
        destination: '/services/ai-strategy-development/custom-ai-development',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;