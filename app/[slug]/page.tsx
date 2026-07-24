// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import { serviceCategories, getServiceBySlug, getTemplate } from '@/content/index';

const categoryPageMap: Record<string, () => Promise<React.ComponentType>> = {
  'core-automation': () => import('@/app/services/core-automation/page').then((mod) => mod.default),
  'ai-agents-and-assistants': () => import('@/app/services/ai-agents-and-assistants/page').then((mod) => mod.default),
  'automation-by-function': () => import('@/app/services/automation-by-function/page').then((mod) => mod.default),
  'ai-strategy-development': () => import('@/app/services/ai-strategy-development/page').then((mod) => mod.default),
};

const AboutPage = dynamic(() => import('@/components/about/pageAbout').then((mod) => mod.default));
const ContactPage = dynamic(() => import('@/components/contact/pageContact').then((mod) => mod.default));

const pages: Record<string, ComponentType> = {
  about: AboutPage,
  contact: ContactPage,
};

const categoryAliases: Record<string, string> = {
  'ai-strategy-and-development': 'ai-strategy-development',
};

function resolveCategorySlug(segment: string) {
  return categoryAliases[segment] ?? segment;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const Component = pages[slug];
  if (Component) {
    return <Component />;
  }

  const categorySlug = resolveCategorySlug(slug);
  const category = serviceCategories.find((cat) => cat.slug === categorySlug);
  if (category) {
    const CategoryPageComponent = await categoryPageMap[categorySlug]?.();
    if (CategoryPageComponent) {
      return <CategoryPageComponent />;
    }
  }

  const service = getServiceBySlug(slug);
  if (service) {
    const Template = getTemplate(slug);
    return <Template data={service} />;
  }

  notFound();
}