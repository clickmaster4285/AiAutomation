// app/[slug]/page.tsx
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

const AboutPage = dynamic(() => import('@/components/about/pageAbout').then((mod) => mod.default));
const ContactPage = dynamic(() => import('@/components/contact/pageContact').then((mod) => mod.default));

const pages: Record<string, ComponentType> = {
  about: AboutPage,
  contact: ContactPage,
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const Component = pages[slug];
  if (!Component) notFound();
  return <Component />;
}