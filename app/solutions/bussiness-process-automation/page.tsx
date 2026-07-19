// app/solutions/bussiness-process-automation/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
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
  Cloud,
  Workflow,
  Bot,
  GitBranch,
  Link2,
  Calendar,
  FileText,
  RefreshCw,
  Zap,
} from 'lucide-react';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { CTASection } from '@/components/solutions/sections/CTA';
import { Section } from '@/components/solutions/layout/Section';
import { FeatureGrid } from '@/components/solutions/sections/FeatureGrid';

export default function BussinessProcessAutomationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const heroData = {
    badge: 'Business Process Automation',
    heading: 'Business Process Automation Solutions',
    subheading:
      'Automation that runs, coordinates, and completesend-to-end processes that eliminate manual hand-offs.',
    primaryCta: {
      text: 'Book a Free Audit',
      href: '/free-automation-audit',
    },
    image: '/images/business.jpg',
    imageWidth: 700,
    imageHeight: 580,
    textSize: 'xlarge' as const,
  };

  const industries = [
    {
      id: 'for-accounting-firms',
      title: 'Accounting Firms',
      icon: Building2,
      description: 'Business process automation that handles document collection, data entry, and reconciliation.',
      href: '/solutions/bussiness-process-automation/for-accounting-firms',
      features: ['Document collection', 'Data entry automation', 'Deadline tracking'],
      color: 'from-blue-500/30 to-cyan-400/30',
    },
    {
      id: 'for-construction',
      title: 'Construction',
      icon: HardHat,
      description: 'Business process automation that manages bids, documents, and client communications.',
      href: '/solutions/bussiness-process-automation/for-construction',
      features: ['Lead intake', 'Bid handling', 'Document organization'],
      color: 'from-amber-500/30 to-orange-400/30',
    },
    {
      id: 'for-ecommerce',
      title: 'E-commerce',
      icon: ShoppingBag,
      description: 'Business process automation that handles support, cart recovery, and order processing.',
      href: '/solutions/bussiness-process-automation/for-ecommerce',
      features: ['Customer support', 'Cart recovery', 'Order processing'],
      color: 'from-purple-500/30 to-pink-400/30',
    },
    {
      id: 'for-education',
      title: 'Education',
      icon: GraduationCap,
      description: 'Business process automation that manages inquiries, enrollment, and student communication.',
      href: '/solutions/bussiness-process-automation/for-education',
      features: ['Inquiry response', 'Enrollment nurture', 'FAQ handling'],
      color: 'from-green-500/30 to-emerald-400/30',
    },
    {
      id: 'for-healthcare',
      title: 'Healthcare',
      icon: Heart,
      description: 'Business process automation that handles scheduling, intake, and patient communication.',
      href: '/solutions/bussiness-process-automation/for-healthcare',
      features: ['Appointment scheduling', 'Patient intake', 'Reminders & follow-up'],
      color: 'from-red-500/30 to-rose-400/30',
    },
    {
      id: 'for-insurance',
      title: 'Insurance Agencies',
      icon: Shield,
      description: 'Business process automation that manages quotes, certificates, and renewals.',
      href: '/solutions/bussiness-process-automation/for-insurance',
      features: ['Quote intake', 'Certificate issuance', 'Renewal tracking'],
      color: 'from-indigo-500/30 to-purple-400/30',
    },
    {
      id: 'for-law-firms',
      title: 'Law Firms',
      icon: Scale,
      description: 'Business process automation that handles intake, document assembly, and deadlines.',
      href: '/solutions/bussiness-process-automation/for-law-firms',
      features: ['Client intake', 'Engagement letters', 'Deadline tracking'],
      color: 'from-slate-500/30 to-gray-400/30',
    },
    // NEW INDUSTRIES
    {
      id: 'for-logistics',
      title: 'Logistics & Transportation',
      icon: Truck,
      description: 'Business process automation that manages orders, tracking, and documentation.',
      href: '/solutions/bussiness-process-automation/for-logistics',
      features: ['Order intake', 'Status updates', 'Document processing'],
      color: 'from-cyan-500/30 to-blue-400/30',
    },
    {
      id: 'for-manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      description: 'Business process automation that handles orders, inventory, and purchasing.',
      href: '/solutions/bussiness-process-automation/for-manufacturing',
      features: ['Order entry', 'Inventory monitoring', 'Purchase orders'],
      color: 'from-yellow-500/30 to-orange-400/30',
    },
    {
      id: 'for-real-estate',
      title: 'Real Estate',
      icon: Home,
      description: 'Business process automation that handles leads, showings, and transactions.',
      href: '/solutions/bussiness-process-automation/for-real-estate',
      features: ['Lead response', 'Nurture sequences', 'Showing scheduling'],
      color: 'from-teal-500/30 to-cyan-400/30',
    },
    {
      id: 'for-restaurants',
      title: 'Restaurants & Hospitality',
      icon: Utensils,
      description: 'Business process automation that handles reservations, calls, and reviews.',
      href: '/solutions/bussiness-process-automation/for-restaurants',
      features: ['Reservation booking', 'Call answering', 'No-show reduction'],
      color: 'from-orange-500/30 to-red-400/30',
    },
    {
      id: 'for-retail',
      title: 'Retail',
      icon: Store,
      description: 'Business process automation that handles inventory, inquiries, and reporting.',
      href: '/solutions/bussiness-process-automation/for-retail',
      features: ['Inventory monitoring', 'Customer inquiries', 'Sales reporting'],
      color: 'from-pink-500/30 to-rose-400/30',
    },
    {
      id: 'for-saas',
      title: 'SaaS Companies',
      icon: Cloud,
      description: 'Business process automation that handles support, onboarding, and churn monitoring.',
      href: '/solutions/bussiness-process-automation/for-saas',
      features: ['Support triage', 'User onboarding', 'Churn monitoring'],
      color: 'from-violet-500/30 to-indigo-400/30',
    },
  ];

  const features = [
    {
      id: 'process-mapping',
      title: 'Process Mapping & Audit',
      description: 'Your real process documented, bottlenecks identified, highest-ROI segments automated first.',
      icon: Workflow,
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'end-to-end-automation',
      title: 'End-to-End Automation',
      description: 'Complete processes running with humans only at genuine decision points.',
      icon: Bot,
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 'approval-routing',
      title: 'Approval & Routing Workflows',
      description: 'Requests that move, chase, and escalate themselves.',
      icon: GitBranch,
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 'system-synchronization',
      title: 'System Synchronization',
      description: 'Core systems kept consistent without manual re-entry.',
      icon: Link2,
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      id: 'validation-exception',
      title: 'Validation & Exception Handling',
      description: 'Errors caught and flagged instead of propagating.',
      icon: Shield,
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
          { label: 'Business Process Automation', href: '/solutions/bussiness-process-automation' },
        ]}
      />

      <Section bg="black" pattern="dots" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Industry Solutions
              <span className="w-8 h-px bg-brand" />
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
              Business Process Automation for Every <span className="text-brand">Industry</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              We build business process automation designed for the workflows, tools, and constraints of your specific industry.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              const isHovered = hoveredCard === industry.id;

              return (
                <motion.div
                  key={industry.id}
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredCard(industry.id)}
                  onMouseLeave={() => setHoveredCard(null)}
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
                        <Icon className={`h-7 w-7 text-brand`} />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          scale: isHovered ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-1 text-xs font-medium text-brand bg-brand/20 px-2.5 py-1 rounded-full"
                      >
                        <Sparkles className="h-3 w-3" />
                        <span>Available</span>
                      </motion.div>
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
        heading="What Our Business Process Automation Can Do"
        subheading="Every business process automation we build comes with these core capabilities, tailored to your specific needs."
        features={features}
        columns={3}
        bg="orange-light"
      />

      <CTASection
        title="Ready to Automate Your Business Processes?"
        subtitle="Book a free consultation and let's discuss how business process automation can transform your operations."
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