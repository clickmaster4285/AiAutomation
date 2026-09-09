import { notFound } from 'next/navigation';
import {
  serviceCategories,
  getServiceBySlug,
  getTemplate,
} from '@/content/index';

const categoryPageMap: Record<string, () => Promise<React.ComponentType>> = {
  'core-automation': () => import('@/app/services/core-automation/page').then((mod) => mod.default),
  'ai-agents-and-assistants': () => import('@/app/services/ai-agents-and-assistants/page').then((mod) => mod.default),
  'automation-by-function': () => import('@/app/services/automation-by-function/page').then((mod) => mod.default),
  'ai-strategy-development': () => import('@/app/services/ai-strategy-development/page').then((mod) => mod.default),
};

const categoryAliases: Record<string, string> = {
  'ai-strategy-and-development': 'ai-strategy-development',
};

function resolveCategorySlug(segment: string) {
  return categoryAliases[segment] ?? segment;
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const segments = slug ?? [];

  if (segments.length === 1) {
    const [segment] = segments;
    const categorySlug = resolveCategorySlug(segment);
    const category = serviceCategories.find((cat) => cat.slug === categorySlug);

    if (category) {
      const CategoryPageComponent = await categoryPageMap[categorySlug]?.();
      if (CategoryPageComponent) {
        return <CategoryPageComponent />;
      }
    }

    const service = getServiceBySlug(segment);
    if (service) {
      const Template = getTemplate(segment);
      return <Template data={service} />;
    }
  }

  if (segments.length === 2) {
    const [categorySegment, serviceSegment] = segments;
    const categorySlug = resolveCategorySlug(categorySegment);
    const category = serviceCategories.find((cat) => cat.slug === categorySlug);
    const service = getServiceBySlug(serviceSegment);

    if (category && service) {
      const Template = getTemplate(serviceSegment);
      return <Template data={service} />;
    }
  }

  notFound();
}
