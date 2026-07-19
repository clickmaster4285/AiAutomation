import { Metadata } from 'next';
import AIStrategyClient from './AIStrategyClient';

export const metadata: Metadata = {
  title: 'AI Strategy & Development | ClickMasters',
  description:
    'From strategy to execution – we help you plan, build, and deploy AI solutions that drive real business value. Strategic AI consulting and custom development services to transform your business.',
  keywords: 'AI strategy, AI consulting, custom AI development, AI implementation, AI roadmap, business AI solutions',
  openGraph: {
    title: 'AI Strategy & Development | ClickMasters',
    description: 'From strategy to execution – we help you plan, build, and deploy AI solutions that drive real business value.',
    url: 'https://clickmasters.com/services/ai-strategy-development',
    siteName: 'ClickMasters',
    images: [
      {
        url: '/images/og/ai-strategy.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Strategy & Development - ClickMasters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Strategy & Development | ClickMasters',
    description: 'From strategy to execution – we help you plan, build, and deploy AI solutions that drive real business value.',
    images: ['/images/og/ai-strategy.jpg'],
  },
  alternates: {
    canonical: 'https://clickmasters.com/services/ai-strategy-development',
  },
};

export default function Page() {
  return <AIStrategyClient />;
}