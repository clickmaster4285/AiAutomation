// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import AboutPage from '@/components/about/pageAbout';
import ContactPage from '@/components/contact/pageContact';

const pages: Record<string, React.ComponentType> = {
  about: AboutPage,
  contact: ContactPage,
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const Component = pages[slug];
  if (!Component) notFound();
  return <Component />;
}