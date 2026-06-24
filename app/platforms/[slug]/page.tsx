// app/platforms/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { platformContent, platformSlugs } from '@/content/Platforms';
import Hero from '@/components/platforms/Hero';
import TextSec from '@/components/platforms/TextSec';
import FeatureSec from '@/components/platforms/FeatureSec';
import GridSec from '@/components/platforms/GridSec';
import FaqSec from '@/components/platforms/FAQSec';
import CTASec from '@/components/platforms/CTASec';
import StepSec from '@/components/platforms/StepSec';
import PainPoint from '@/components/platforms/PainPoint';

// Map section type to component
const sectionMap: Record<string, React.ComponentType<{ section: any }>> = {
  hero: Hero,
  text: TextSec,
  features: FeatureSec,
  grid: GridSec,
  faq: FaqSec,
  cta: CTASec,
  steps: StepSec,
  painpoint: PainPoint,
};

// Generate static paths for all platforms
export async function generateStaticParams() {
  return platformSlugs.map((slug) => ({ slug }));
}

// Generate metadata – await params
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap the Promise
  const content = platformContent[slug];
  if (!content) return notFound();
  return {
    title: content.title,
    description: content.metaDescription,
  };
}

// Render the page – await params
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // ✅ unwrap the Promise
  const content = platformContent[slug];
  if (!content) return notFound();

  return (
    <main className="bg-black text-white">
      {content.sections.map((section, idx) => {
        const Component = sectionMap[section.type];
        if (!Component) return null;
        return <Component key={idx} section={section} />;
      })}
    </main>
  );
}