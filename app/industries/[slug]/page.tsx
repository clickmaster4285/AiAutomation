// app/industries/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { industryContent, industrySlugs } from '@/content/Industries';
import Hero from '@/components/industries/Hero';
import TextSec from '@/components/industries/TextSec';
import FeatureSec from '@/components/industries/FeaturesSec';
import GridSec from '@/components/industries/GridSec';
import FaqSec from '@/components/industries/FAQSec';
import CTASec from '@/components/industries/CTASec';
import PainPoint from '@/components/industries/PainPoint';
import StepSec from '@/components/industries/StepSec';

const sectionMap: Record<string, React.ComponentType<{ section: any; bg?: string }>> = {
  hero: Hero,
  text: TextSec,
  features: FeatureSec,
  grid: GridSec,
  faq: FaqSec,
  cta: CTASec,
  painpoint: PainPoint,
  steps: StepSec,
};

export async function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = industryContent[slug];
  if (!content) return notFound();
  return {
    title: content.title,
    description: content.metaDescription,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = industryContent[slug];
  if (!content) return notFound();

  // ── Background alternation ──
  // Hero (index 0) will be 'bg-black' – all sections follow the array order.
  const bgColors = [
    'bg-black',        // hero – black
    'bg-gray-50',      // text section
    'bg-black',        // features
    'bg-white',        // grid
    'bg-orange-50',    // painpoint
    'bg-gray-100',     // next section
    'bg-black',        // ...
    'bg-white',
  ];

  return (
    <main className="text-gray-900">
      {content.sections.map((section, idx) => {
        const Component = sectionMap[section.type];
        if (!Component) {
          console.warn(`No component found for section type: ${section.type}`);
          return null;
        }
        // ✅ Use the array directly – no override
        const bg = bgColors[idx % bgColors.length];
        return <Component key={idx} section={section} bg={bg} />;
      })}
    </main>
  );
}