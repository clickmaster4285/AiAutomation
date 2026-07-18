// app/solutions/ai-workflow-automation/for-healthcare/page.tsx
import { Metadata } from 'next';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import {
  WhySection,
  ProblemsSection,
  AutomationSection,
  StartSection,
  ExampleSection,
  BoundariesSection,
  RealitiesSection,
  ReturnSection,
  WhyUsSection,
} from '@/components/solutions/sections/variants';
import { FAQSection } from '@/components/solutions/sections/FAQ';
import { CTASection } from '@/components/solutions/sections/CTA';
import { RelatedSolutions } from '@/components/solutions/sections/RelatedSolutions';
import { aiWorkflowAutomationForHealthcare } from '@/content/Solutions';

export const metadata: Metadata = {
  title: aiWorkflowAutomationForHealthcare.titleTag,
  description: aiWorkflowAutomationForHealthcare.metaDescription,
  alternates: {
    canonical: aiWorkflowAutomationForHealthcare.url,
  },
  openGraph: {
    title: aiWorkflowAutomationForHealthcare.titleTag,
    description: aiWorkflowAutomationForHealthcare.metaDescription,
    url: aiWorkflowAutomationForHealthcare.url,
    type: 'website',
  },
  keywords: aiWorkflowAutomationForHealthcare.primaryKeyword,
};

export default function ForHealthcarePage() {
  const content = aiWorkflowAutomationForHealthcare;

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Workflow Automation for Healthcare',
            description: content.metaDescription,
            provider: {
              '@type': 'Organization',
              name: 'Clickmasters',
            },
            serviceType: 'AI Workflow Automation Development',
            areaServed: 'Global',
          }),
        }}
      />

      <HeroSection
        badge={content.heroBadge}
        heading={content.heroHeading}
        subheading={content.heroSubheading}
        primaryCta={{
          text: 'Book a Free Audit',
          href: content.bookingLink,
        }}
        secondaryCta={{
          text: 'Learn More',
          href: '#why-healthcare-need-ai-workflow-automation',
        }}
        image="/images/solutions/ai-workflow-automation-healthcare-hero.png"
        imageWidth={700}
        imageHeight={580}
        textSize="xlarge"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'AI Workflow Automation', href: '/solutions/ai-workflow-automation' },
          { label: 'Healthcare', href: content.url },
        ]}
      />

      <WhySection
        title="Why Healthcare Need AI Workflow Automation"
        content={[content.sections['Why Healthcare Need AI Workflow Automation']]}
      />

      <ProblemsSection
        title="The Problems This Solves for Healthcare"
        content={[content.sections['The Problems This Solves for Healthcare']]}
      />

      <AutomationSection
        title="What We Automate for Healthcare"
        content={[content.sections['What We Automate for Healthcare']]}
      />

      <StartSection
        title="Where to Start: Your First Automation"
        content={[content.sections['Where to Start: Your First Automation']]}
      />

      <ExampleSection
        title="A Worked Example"
        content={[content.sections['A Worked Example']]}
      />

      <BoundariesSection
        title="What This Is — and Isn't"
        content={[content.sections['What This Is — and Isn\'t']]}
      />

      <RealitiesSection
        title="Built for Healthcare's Realities"
        content={[content.sections['Built for Healthcare\'s Realities']]}
      />

      <ReturnSection
        title="What the Return Looks Like"
        content={[content.sections['What the Return Looks Like']]}
        stats={content.stats}
      />

      <WhyUsSection
        title="Why Clickmasters"
        content={[content.sections['Why Clickmasters']]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about AI workflow automation for healthcare"
        faqs={content.faqQuestions}
      />

      <RelatedSolutions
        title="Explore Other Solutions"
        subtitle="More ways we can help you automate"
        solutions={content.relatedSolutions}
      />

      <CTASection
        title={content.cta}
        subtitle="Book a free automation audit — 30 minutes, no obligation, and an honest read on where workflow automation pays off for healthcare."
        primaryCta={{
          text: 'Book a Free Automation Audit',
          href: content.bookingLink,
        }}
        secondaryCta={{
          text: 'View All Solutions',
          href: '/solutions',
        }}
        background="light"
        showForm={true}
      />
    </PageWrapper>
  );
}