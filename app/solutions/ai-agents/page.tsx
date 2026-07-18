// app/solutions/ai-agents/page.tsx
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
} from 'lucide-react';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { CTASection } from '@/components/solutions/sections/CTA';
import { Section } from '@/components/solutions/layout/Section';

export default function AIAgentsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const heroData = {
    badge: 'AI Agents',
    heading: 'AI Agent Development',
    subheading: 'Custom AI agents that reason, act, and complete tasks automatically — built for your industry.',
    primaryCta: {
      text: 'Book a Free Audit',
      href: '/free-automation-audit',
    },
    image: '/images/ai-agents-hero.png',
    imageWidth: 700,
    imageHeight: 580,
    textSize: 'xlarge' as const,
  };

  const industries = [
    {
      id: 'for-accounting-firms',
      title: 'Accounting Firms',
      icon: Building2,
      description: 'AI agents that handle document collection, data entry, and reconciliation.',
      href: '/solutions/ai-agents/for-accounting-firms',
      features: ['Document collection', 'Data entry automation', 'Deadline tracking'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-construction',
      title: 'Construction',
      icon: HardHat,
      description: 'AI agents that manage bids, documents, and client communications.',
      href: '/solutions/ai-agents/for-construction',
      features: ['Lead intake', 'Bid handling', 'Document organization'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-ecommerce',
      title: 'E-commerce',
      icon: ShoppingBag,
      description: 'AI agents that handle support, cart recovery, and order processing.',
      href: '/solutions/ai-agents/for-ecommerce',
      features: ['Customer support', 'Cart recovery', 'Order processing'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-education',
      title: 'Education',
      icon: GraduationCap,
      description: 'AI agents that manage inquiries, enrollment, and student communication.',
      href: '/solutions/ai-agents/for-education',
      features: ['Inquiry response', 'Enrollment nurture', 'FAQ handling'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-healthcare',
      title: 'Healthcare',
      icon: Heart,
      description: 'AI agents that handle scheduling, intake, and patient communication.',
      href: '/solutions/ai-agents/for-healthcare',
      features: ['Appointment scheduling', 'Patient intake', 'Reminders & follow-up'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-insurance',
      title: 'Insurance Agencies',
      icon: Shield,
      description: 'AI agents that manage quotes, certificates, and renewals.',
      href: '/solutions/ai-agents/for-insurance',
      features: ['Quote intake', 'Certificate issuance', 'Renewal tracking'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-law-firms',
      title: 'Law Firms',
      icon: Scale,
      description: 'AI agents that handle intake, document assembly, and deadlines.',
      href: '/solutions/ai-agents/for-law-firms',
      features: ['Client intake', 'Engagement letters', 'Deadline tracking'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-logistics',
      title: 'Logistics & Transportation',
      icon: Truck,
      description: 'AI agents that manage orders, tracking, and documentation.',
      href: '/solutions/ai-agents/for-logistics',
      features: ['Order intake', 'Status updates', 'Document processing'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      description: 'AI agents that handle orders, inventory, and purchasing.',
      href: '/solutions/ai-agents/for-manufacturing',
      features: ['Order entry', 'Inventory monitoring', 'Purchase orders'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-real-estate',
      title: 'Real Estate',
      icon: Home,
      description: 'AI agents that handle leads, showings, and transactions.',
      href: '/solutions/ai-agents/for-real-estate',
      features: ['Lead response', 'Nurture sequences', 'Showing scheduling'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-restaurants',
      title: 'Restaurants & Hospitality',
      icon: Utensils,
      description: 'AI agents that handle reservations, calls, and reviews.',
      href: '/solutions/ai-agents/for-restaurants',
      features: ['Reservation booking', 'Call answering', 'No-show reduction'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-retail',
      title: 'Retail',
      icon: Store,
      description: 'AI agents that handle inventory, inquiries, and reporting.',
      href: '/solutions/ai-agents/for-retail',
      features: ['Inventory monitoring', 'Customer inquiries', 'Sales reporting'],
      color: 'from-brand/30 to-orange-400/30',
    },
    {
      id: 'for-saas',
      title: 'SaaS Companies',
      icon: Cloud,
      description: 'AI agents that handle support, onboarding, and churn monitoring.',
      href: '/solutions/ai-agents/for-saas',
      features: ['Support triage', 'User onboarding', 'Churn monitoring'],
      color: 'from-brand/30 to-orange-400/30',
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
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      y: -12,
      scale: 1.02,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
      },
    },
  };

  const iconVariants = {
    initial: { 
      rotate: 0, 
      scale: 1 
    },
    hover: { 
      rotate: [0, -10, 10, -5, 0],
      scale: 1.15,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
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
        ease: "easeOut" as const,
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
          { label: 'AI Agents', href: '/solutions/ai-agents' },
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
              AI Agents for Every <span className="text-brand">Industry</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              We build custom AI agents designed for the workflows, tools, and constraints of your specific industry.
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
                  <div className={`
                    absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 
                    transition-all duration-500 blur-xl
                    bg-gradient-to-r ${industry.color}
                  `} />

                  <Link
                    href={industry.href}
                    className={`
                      relative block h-full p-6 rounded-2xl 
                      bg-gradient-to-br ${industry.color}
                      border-2 border-brand/30 group-hover:border-brand/60
                      transition-all duration-300 shadow-lg hover:shadow-2xl
                      backdrop-blur-sm bg-white/5
                      text-white
                    `}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand blur-3xl" />
                    </div>

                    <motion.div 
                      className="flex items-start justify-between mb-4"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <div className={`
                        w-14 h-14 rounded-2xl 
                        bg-gradient-to-br ${industry.color}
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:shadow-lg
                      `}>
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

      <CTASection
        title="Ready to Build Your AI Agent?"
        subtitle="Book a free consultation and let's discuss how AI agents can transform your business."
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