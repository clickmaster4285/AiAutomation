// app/services/[categorySlug]/[serviceSlug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  getServiceBySlug, 
  getTemplate, 
  serviceCategories,
  serviceContent 
} from '@/content/index';

// Generate static params for all categorized services
export async function generateStaticParams() {
  const params: { categorySlug: string; serviceSlug: string }[] = [];
  
  // Generate params for all categorized services
  serviceCategories.forEach((cat) => {
    cat.services.forEach((svc) => {
      params.push({
        categorySlug: cat.slug,
        serviceSlug: svc.slug,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; serviceSlug: string }>;
}): Promise<Metadata> {
  const { categorySlug, serviceSlug } = await params;
  
  const service = getServiceBySlug(serviceSlug);
  
  if (!service) {
    return { 
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }
  
  const heroSection = service.sections?.find((s) => s.type === 'hero');
  const heroContent = heroSection?.content;
  const description = Array.isArray(heroContent)
    ? heroContent[0]
    : heroContent || service.metaDescription || '';
    
  return {
    title: `${service.title} | Clickmasters AI Automation`,
    description: typeof description === 'string' ? description : description?.[0] || service.metaDescription || '',
    keywords: service.keywords || `${service.title}, AI automation`,
    openGraph: {
      title: `${service.title} | Clickmasters AI Automation`,
      description: typeof description === 'string' ? description : description?.[0] || service.metaDescription || '',
      type: 'website',
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ categorySlug: string; serviceSlug: string }>;
}) {
  const { categorySlug, serviceSlug } = await params;
  
  // Log for debugging
  console.log('Looking for service:', { categorySlug, serviceSlug });
  console.log('Available service keys:', Object.keys(serviceContent));
  
  // Try to get the service by slug
  let service = getServiceBySlug(serviceSlug);
  
  // If not found, try to find by matching the full path
  if (!service) {
    const fullPath = `/services/${categorySlug}/${serviceSlug}`;
    for (const [key, svc] of Object.entries(serviceContent)) {
      if (svc.path === fullPath) {
        service = svc;
        break;
      }
    }
  }
  
  // If still not found, try to find by checking if any service has a path ending with this slug
  if (!service) {
    for (const [key, svc] of Object.entries(serviceContent)) {
      if (svc.path && svc.path.endsWith(`/${serviceSlug}`)) {
        service = svc;
        break;
      }
    }
  }
  
  if (!service) {
    console.log('Service not found for slug:', serviceSlug);
    notFound();
  }
  
  const Template = getTemplate(serviceSlug);
  return <Template data={service} />;
}