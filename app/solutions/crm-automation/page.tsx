// app/solutions/crm-automation/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Database,
  Mail,
  Cloud,
  CheckCircle,
  Sparkles,
  Building2,
  HardHat,
  ShoppingBag,
  GraduationCap,
  Heart,
  Shield,
  Scale,
  Truck,
  Factory,
  Home,
  Utensils,
  Store,
  Cpu,
  Users,
  Link2,
  BarChart3,
} from 'lucide-react';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { CTASection } from '@/components/solutions/sections/CTA';
import { Section } from '@/components/solutions/layout/Section';
import { FeatureGrid } from '@/components/solutions/sections/FeatureGrid';

export default function CRMAutomationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredIndustryCard, setHoveredIndustryCard] = useState<string | null>(null);

  const heroData = {
    badge: 'CRM Automation',
    heading: 'CRM Automation Solutions',
    subheading:
      'Keep your CRM accurate and active automaticallybuilt on the platforms you already use.',
    primaryCta: {
      text: 'Book a Free Audit',
      href: '/free-automation-audit',
    },
    image: '/images/crm.png',
    imageWidth: 600,
    imageHeight: 500,
    textSize: 'xlarge' as const,
  };

  const platforms = [
    {
      id: 'airtable',
      title: 'Airtable CRM Automation',
      icon: Database,
      description:
        'Flexible CRM automation on Airtableperfect for custom operational tools and data workflows without full custom development.',
      href: '/solutions/crm-automation/with-airtable',
      features: ['Flexible database', 'Custom workflows', 'Ops teams'],
      color: 'from-brand/30 to-orange-400/30',
      iconColor: 'text-brand',
      bgGradient: 'from-brand/10 to-orange-400/10',
      borderColor: 'border-brand/30',
      hoverColor: 'group-hover:border-brand/60',
      badge: 'Flexible',
    },
    {
      id: 'hubspot',
      title: 'HubSpot CRM Automation',
      icon: Mail,
      description:
        'Extend HubSpot\'s CRM power with AI workflows connected to your wider stackideal for teams already running sales and marketing on HubSpot.',
      href: '/solutions/crm-automation/with-hubspot',
      features: ['Native CRM', 'AI integration', 'Scalable'],
      color: 'from-brand/30 to-orange-400/30',
      iconColor: 'text-brand',
      bgGradient: 'from-brand/10 to-orange-400/10',
      borderColor: 'border-brand/30',
      hoverColor: 'group-hover:border-brand/60',
      badge: 'Popular',
    },
    {
      id: 'salesforce',
      title: 'Salesforce CRM Automation',
      icon: Cloud,
      description:
        'Enterprise-grade CRM automation on Salesforceideal for organizations with Salesforce at the core of revenue operations.',
      href: '/solutions/crm-automation/with-salesforce',
      features: ['Enterprise security', 'Native CRM', 'Scalable'],
      color: 'from-brand/30 to-orange-400/30',
      iconColor: 'text-brand',
      bgGradient: 'from-brand/10 to-orange-400/10',
      borderColor: 'border-brand/30',
      hoverColor: 'group-hover:border-brand/60',
      badge: 'Enterprise',
    },
  ];

  const industries = [
    {
      id: 'for-accounting-firms',
      title: 'Accounting Firms',
      icon: Building2,
      description: 'CRM automation that handles client data, document collection, and pipeline tracking.',
      href: '/solutions/crm-automation/for-accounting-firms',
      features: ['Client data management', 'Document collection', 'Pipeline tracking'],
      color: 'from-blue-500/30 to-cyan-400/30',
      badge: 'Popular',
    },
    {
      id: 'for-construction',
      title: 'Construction',
      icon: HardHat,
      description: 'CRM automation that manages bids, project leads, and client communications.',
      href: '/solutions/crm-automation/for-construction',
      features: ['Lead management', 'Bid tracking', 'Client communication'],
      color: 'from-amber-500/30 to-orange-400/30',
      badge: null,
    },
    {
      id: 'for-ecommerce',
      title: 'E-commerce',
      icon: ShoppingBag,
      description: 'CRM automation that handles customer data, support, and marketing.',
      href: '/solutions/crm-automation/for-ecommerce',
      features: ['Customer data', 'Support tracking', 'Marketing automation'],
      color: 'from-purple-500/30 to-pink-400/30',
      badge: 'Popular',
    },
    {
      id: 'for-education',
      title: 'Education',
      icon: GraduationCap,
      description: 'CRM automation that manages student inquiries, enrollment, and communication.',
      href: '/solutions/crm-automation/for-education',
      features: ['Inquiry management', 'Enrollment tracking', 'Student communication'],
      color: 'from-green-500/30 to-emerald-400/30',
      badge: null,
    },
    {
      id: 'for-healthcare',
      title: 'Healthcare',
      icon: Heart,
      description: 'CRM automation that handles patient data, scheduling, and billing.',
      href: '/solutions/crm-automation/for-healthcare',
      features: ['Patient data', 'Appointment scheduling', 'Billing follow-up'],
      color: 'from-red-500/30 to-rose-400/30',
      badge: 'Popular',
    },
    {
      id: 'for-insurance',
      title: 'Insurance Agencies',
      icon: Shield,
      description: 'CRM automation that manages quotes, policies, and renewals.',
      href: '/solutions/crm-automation/for-insurance',
      features: ['Quote management', 'Policy tracking', 'Renewal alerts'],
      color: 'from-indigo-500/30 to-purple-400/30',
      badge: null,
    },
    {
      id: 'for-law-firms',
      title: 'Law Firms',
      icon: Scale,
      description: 'CRM automation that handles client intake, case tracking, and deadlines.',
      href: '/solutions/crm-automation/for-law-firms',
      features: ['Client intake', 'Case tracking', 'Deadline management'],
      color: 'from-slate-500/30 to-gray-400/30',
      badge: 'New',
    },
    // NEW INDUSTRIES
    {
      id: 'for-logistics',
      title: 'Logistics & Transportation',
      icon: Truck,
      description: 'CRM automation that manages orders, tracking, and customer communication.',
      href: '/solutions/crm-automation/for-logistics',
      features: ['Order tracking', 'Customer updates', 'Documentation'],
      color: 'from-cyan-500/30 to-blue-400/30',
      badge: 'New',
    },
    {
      id: 'for-manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      description: 'CRM automation that handles orders, inventory, and supplier data.',
      href: '/solutions/crm-automation/for-manufacturing',
      features: ['Order management', 'Inventory tracking', 'Supplier data'],
      color: 'from-yellow-500/30 to-orange-400/30',
      badge: 'New',
    },
    {
      id: 'for-real-estate',
      title: 'Real Estate',
      icon: Home,
      description: 'CRM automation that handles leads, showings, and transactions.',
      href: '/solutions/crm-automation/for-real-estate',
      features: ['Lead management', 'Showing scheduling', 'Transaction tracking'],
      color: 'from-teal-500/30 to-cyan-400/30',
      badge: 'New',
    },
    {
      id: 'for-restaurants',
      title: 'Restaurants & Hospitality',
      icon: Utensils,
      description: 'CRM automation that handles reservations, guest data, and loyalty.',
      href: '/solutions/crm-automation/for-restaurants',
      features: ['Reservations', 'Guest data', 'Loyalty tracking'],
      color: 'from-orange-500/30 to-red-400/30',
      badge: 'New',
    },
    {
      id: 'for-retail',
      title: 'Retail',
      icon: Store,
      description: 'CRM automation that handles customer data, inventory, and reporting.',
      href: '/solutions/crm-automation/for-retail',
      features: ['Customer data', 'Inventory tracking', 'Sales reporting'],
      color: 'from-pink-500/30 to-rose-400/30',
      badge: 'New',
    },
    {
      id: 'for-saas',
      title: 'SaaS Companies',
      icon: Cpu,
      description: 'CRM automation that handles support, onboarding, and churn monitoring.',
      href: '/solutions/crm-automation/for-saas',
      features: ['Support tracking', 'Onboarding', 'Churn monitoring'],
      color: 'from-violet-500/30 to-indigo-400/30',
      badge: 'New',
    },
  ];

  const features = [
    {
      id: 'automatic-record-updates',
      title: 'Automatic Record Updates',
      description: 'Activity and data captured without manual entryyour CRM stays current automatically.',
      icon: Database,
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'data-hygiene',
      title: 'Data Hygiene',
      description: 'Deduplication, enrichment, and cleaning that runs continuouslykeep your CRM pristine.',
      icon: Sparkles,
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 'lead-routing',
      title: 'Lead Routing & Sequencing',
      description: 'The right lead to the right person with the right follow-upevery time.',
      icon: Users,
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 'cross-system-sync',
      title: 'Cross-System Sync',
      description: 'Your CRM connected to billing, support, and marketing toolsdata flows seamlessly.',
      icon: Link2,
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      id: 'pipeline-reporting',
      title: 'Pipeline Reporting',
      description: 'Trustworthy numbers because the underlying data is maintained accurately.',
      icon: BarChart3,
      color: 'from-teal-500/20 to-cyan-500/20',
    },
    {
      id: 'production-ready',
      title: 'Production-Ready',
      description: 'Staged rollout, comprehensive documentation, and reliability engineering.',
      icon: Sparkles,
      color: 'from-amber-500/20 to-yellow-500/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    hover: {
      rotate: [0, -10, 10, -5, 0],
      scale: 1.15,
      transition: {
        duration: 0.6,
        ease: 'easeInOut' as const,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    }),
  };

  const featureContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getBadgeColor = (badge: string | null) => {
    if (!badge) return '';
    switch (badge) {
      case 'Popular':
        return 'bg-brand/20 text-brand';
      case 'Enterprise':
        return 'bg-purple-500/20 text-purple-400';
      case 'Flexible':
        return 'bg-blue-500/20 text-blue-400';
      case 'New':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-brand/20 text-brand';
    }
  };

  return (
    <PageWrapper>
      <HeroSection
        {...heroData}
        imageWidth={heroData.imageWidth}
        imageHeight={heroData.imageHeight}
        textSize={heroData.textSize}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Solutions', href: '/solutions' },
          { label: 'CRM Automation', href: '/solutions/crm-automation' },
        ]}
      />

      {/* Platform Selection Section */}
      <Section bg="black" pattern="dots" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow inline-flex items-center gap-2 text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Platform Selection
            </span>
            <h2 className="display text-3xl md:text-5xl text-white font-bold">Choose Your Platform</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto">
              We build CRM automation on the platforms you already usewith honest platform recommendations.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
          >
            {platforms.map((platform) => {
              const Icon = platform.icon;
              const isHovered = hoveredCard === platform.id;

              return (
                <motion.div
                  key={platform.id}
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredCard(platform.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <div
                    className={`
                      absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 
                      transition-all duration-500 blur-xl
                      bg-gradient-to-r ${platform.color}
                    `}
                  />

                  <Link
                    href={platform.href}
                    className={`
                      relative block h-full p-8 rounded-2xl 
                      bg-gradient-to-br ${platform.bgGradient}
                      border-2 ${platform.borderColor} ${platform.hoverColor}
                      transition-all duration-300 shadow-lg hover:shadow-2xl
                      backdrop-blur-sm bg-white/5
                      text-white
                    `}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand blur-3xl" />
                    </div>

                    <motion.div
                      className="flex items-start justify-between mb-6"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <div
                        className={`
                          w-16 h-16 rounded-2xl 
                          bg-gradient-to-br ${platform.color}
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:shadow-lg
                        `}
                      >
                        <Icon className={`h-8 w-8 ${platform.iconColor}`} />
                      </div>
                      {platform.badge && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: isHovered ? 1 : 0.6,
                            scale: isHovered ? 1 : 0.9,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`
                            flex items-center gap-1 text-sm font-medium
                            ${getBadgeColor(platform.badge)}
                            px-3 py-1 rounded-full
                          `}
                        >
                          <Sparkles className="h-3 w-3" />
                          <span>{platform.badge}</span>
                        </motion.div>
                      )}
                    </motion.div>

                    <div className="relative z-10">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-3 font-serif"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {platform.title}
                      </motion.h3>

                      <motion.p
                        className="text-gray-300 leading-relaxed mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {platform.description}
                      </motion.p>

                      <motion.div
                        className="space-y-2 mb-6"
                        initial="hidden"
                        animate="visible"
                        variants={featureContainerVariants}
                      >
                        {platform.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            variants={featureVariants}
                            custom={idx}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <CheckCircle className="h-4 w-4 text-brand flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isHovered ? 1 : 0.8,
                          x: isHovered ? 0 : -5,
                        }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-2 text-brand font-medium group/link"
                      >
                        <span>Learn More</span>
                        <motion.span
                          animate={{
                            x: isHovered ? 8 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand/0 via-brand to-brand/0 rounded-b-2xl"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: isHovered ? 1 : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* Industry Solutions Section */}
      <Section bg="black" pattern="dots" className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Industry Solutions
              <span className="w-8 h-px bg-brand" />
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
              CRM Automation for Every <span className="text-brand">Industry</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              We build CRM automation designed for the workflows, tools, and constraints of your specific industry.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              const isHovered = hoveredIndustryCard === industry.id;

              return (
                <motion.div
                  key={industry.id}
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredIndustryCard(industry.id)}
                  onMouseLeave={() => setHoveredIndustryCard(null)}
                  className="relative group"
                >
                  <div
                    className="
                      absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100
                      transition-all duration-500 blur-xl
                      bg-brand/10
                    "
                  />

                  <Link
                    href={industry.href}
                    className="
                      relative block h-full p-6 rounded-2xl
                      bg-gradient-to-br from-white/10 via-white/5 to-brand/5
                      border border-white/10 group-hover:border-brand/30
                      transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.24)]
                      backdrop-blur-sm
                      text-white
                    "
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand/25 blur-3xl" />
                    </div>

                    <motion.div
                      className="flex items-start justify-between mb-4"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <div
                        className="
                          w-14 h-14 rounded-2xl
                          bg-brand/10
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:shadow-lg
                        "
                      >
                        <Icon className="h-7 w-7 text-brand" />
                      </div>
                      {industry.badge && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: isHovered ? 1 : 0.6,
                            scale: isHovered ? 1 : 0.9,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`
                            flex items-center gap-1 text-xs font-medium
                            ${getBadgeColor(industry.badge)}
                            px-2.5 py-1 rounded-full
                          `}
                        >
                          <Sparkles className="h-3 w-3" />
                          <span>{industry.badge}</span>
                        </motion.div>
                      )}
                    </motion.div>

                    <div className="relative z-10">
                      <motion.h3
                        className="text-xl font-bold text-white mb-2 font-serif"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {industry.title}
                      </motion.h3>

                      <motion.p
                        className="text-sm text-gray-300 leading-relaxed mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {industry.description}
                      </motion.p>

                      <motion.div
                        className="space-y-1.5 mb-4"
                        initial="hidden"
                        animate="visible"
                        variants={featureContainerVariants}
                      >
                        {industry.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            variants={featureVariants}
                            custom={idx}
                            className="flex items-center gap-2 text-xs text-gray-400"
                          >
                            <CheckCircle className="h-3.5 w-3.5 text-brand flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isHovered ? 1 : 0.8,
                          x: isHovered ? 0 : -5,
                        }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-2 text-brand font-medium text-sm group/link"
                      >
                        <span>Learn More</span>
                        <motion.span
                          animate={{
                            x: isHovered ? 8 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.span>
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand/0 via-brand to-brand/0 rounded-b-2xl"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: isHovered ? 1 : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <FeatureGrid
        eyebrow="Key Features"
        heading="What Our CRM Automation Can Do"
        subheading="Every CRM automation we build comes with these core capabilities, tailored to your specific needs."
        features={features}
        columns={3}
        bg="orange-light"
      />

      {/* CTA Section */}
      <CTASection
        eyebrow="Get Started"
        title="Ready to Automate Your CRM?"
        subtitle="Book a free consultation and let's discuss how CRM automation can keep your data accurate and your team productive."
        primaryCta={{
          text: 'Book a Free Audit',
          href: '/free-automation-audit',
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