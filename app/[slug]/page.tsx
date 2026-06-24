// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { getServiceBySlug, getAllServiceSlugs, getTemplate } from '@/content/index';
import AboutPage from '@/components/about/pageAbout';
import ContactPage from '@/components/contact/pageContact';

// Map static page slugs to their components
const staticPages: Record<string, React.ComponentType> = {
  about: AboutPage,
  contact: ContactPage,
};

// Generate static params for all service slugs + about & contact
// Platform slugs are handled separately by app/platforms/[slug]/page.tsx
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return [
    ...slugs.map((slug) => ({ slug })),
    { slug: 'about' },
    { slug: 'contact' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // Static pages metadata
  if (slug === 'about') {
    return {
      title: 'About Clickmasters | AI Automation Agency',
      description: 'Clickmasters is a US AI automation agency that builds production AI agents and workflow automation businesses actually own.',
    };
  }

  if (slug === 'contact') {
    return {
      title: 'Contact Clickmasters | AI Automation Agency',
      description: 'Get in touch with Clickmasters. Book a free automation audit or ask a question — we reply fast and tell you honestly if we\'re the right fit.',
    };
  }

  // Service pages metadata
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Page Not Found' };

  const heroSection = service.sections.find((s) => s.type === 'hero');
  const heroContent = heroSection?.content;
  const description = Array.isArray(heroContent)
    ? heroContent[0]
    : heroContent || service.metaDescription || '';

  return {
    title: `${service.title} | Clickmasters AI Automation Agency`,
    description,
    keywords: service.keywords || `${service.title}, AI automation, business automation`,
    openGraph: {
      title: `${service.title} | Clickmasters`,
      description,
      url: `https://clickmasters.com/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. Static pages (about, contact)
  const StaticPage = staticPages[slug];
  if (StaticPage) return <StaticPage />;

  // 2. Service pages from content/services/
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Get the template component (e.g., default, dark, workflow)
  const Template = getTemplate(slug);
  return <Template data={service} />;
}