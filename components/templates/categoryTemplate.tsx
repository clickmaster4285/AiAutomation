// components/templates/CategoryTemplate.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServiceCategory } from '@/content/index';

interface CategoryTemplateProps {
  category: ServiceCategory;
}

export default function CategoryTemplate({ category }: CategoryTemplateProps) {
  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {category.heroTitle || category.title}
        </h1>
        {category.heroDescription && (
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {category.heroDescription}
          </p>
        )}
        {category.description && (
          <p className="text-gray-500 mt-2">{category.description}</p>
        )}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.services.map((service) => (
          <Link
            key={service.slug}
            href={`/${category.slug}/${service.slug}`}
            className="block p-6 border rounded-xl hover:shadow-lg transition-shadow bg-white hover:border-brand"
          >
            <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
            {service.description && (
              <p className="text-gray-600 mt-2">{service.description}</p>
            )}
            <div className="mt-4 text-brand text-sm font-medium inline-flex items-center">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}