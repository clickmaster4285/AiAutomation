// app/solutions/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllSolutions } from '@/content/Solutions';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { Section, SectionHeading } from '@/components/solutions/layout/Section';
import { 
  MessageSquare, 
  Workflow, 
  Database, 
  Headphones, 
  FileText, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Briefcase,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Solutions | Clickmasters',
  description: 'Explore our comprehensive AI automation solutions for business efficiency.',
};

// Icon mapping for solution cards
const iconMap: Record<string, any> = {
  'AI Chatbots': MessageSquare,
  'AI Workflow Automation': Workflow,
  'CRM Automation': Database,
  'Customer Support Automation': Headphones,
  'Document & Data Automation': FileText,
  'Lead Generation Automation': Target,
  'Marketing Automation': TrendingUp,
  'Reporting Automation': BarChart3,
  'Sales Automation': Briefcase,
};

export default function SolutionsPage() {
  const allSolutions = getAllSolutions();

  // Group solutions by category
  const categories = allSolutions.reduce((acc, solution) => {
    const category = solution.category || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(solution);
    return acc;
  }, {} as Record<string, typeof allSolutions>);

  const heroData = {
    badge: 'Solutions',
    heading: 'AI Automation Solutions',
    subheading: 'Intelligent automation systems built on the platforms you already use.',
    primaryCta: {
      text: 'Book a Free Audit',
      href: '/free-automation-audit',
    },
    image: '/images/solutions-hero.png',
  };

  return (
    <>
      <HeroSection {...heroData} />
      
      <Section bg="muted" pattern="dots" className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Explore Our Solutions"
            subtitle="End-to-end automation systems that save time, reduce errors, and scale with your business."
            eyebrow="Solutions"
            align="center"
          />

          {Object.entries(categories).map(([category, solutions], categoryIndex) => {
            const displayName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            return (
              <div key={category} className={`${categoryIndex > 0 ? 'mt-16' : 'mt-12'}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                  {displayName}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solutions.map((solution) => {
                    // Get icon based on solution title or category
                    const Icon = iconMap[solution.heroHeading] || iconMap[solution.title] || Sparkles;
                    return (
                      <Link
                        key={solution.slug}
                        href={solution.url}
                        className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-brand/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand transition-colors">
                            {solution.heroHeading || solution.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {solution.metaDescription || solution.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-brand font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}