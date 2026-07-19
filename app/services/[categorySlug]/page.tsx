// app/services/[categorySlug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  serviceCategories,
  categorySlugs,
  serviceContent,
  getServiceBySlug,
} from '@/content/index';
import CategoryTemplate from '@/components/templates/categoryTemplate';
import ServiceTemplate from '@/components/templates/ServiceTemplate';

export async function generateStaticParams() {
  return categorySlugs.map((slug) => ({ categorySlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;

  const category = serviceCategories.find((cat) => cat.slug === categorySlug);
  if (category) {
    return {
      title: `${category.title} | Clickmasters AI Automation`,
      description: category.description || `Explore our ${category.title} services.`,
    };
  }

  return { title: 'Not Found' };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  if (categorySlug === 'ai-strategy-development') {
    notFound();
  }

  // Is it a category?
  const category = serviceCategories.find((cat) => cat.slug === categorySlug);
  if (category) {
    return <CategoryTemplate category={category} />;
  }

  // Neither - not found
  notFound();
}