// app/solutions/ai-chatbots/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
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
  Building,
  Utensils,
  Store,
  Cpu,
  Bot,
  MessageSquare,
  Workflow,
  Users,
  Calendar,
  BarChart3,
} from 'lucide-react';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { CTASection } from '@/components/solutions/sections/CTA';
import { Section } from '@/components/solutions/layout/Section';

export default function AIChatbotsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredIndustryCard, setHoveredIndustryCard] = useState<string | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const heroData = {
    badge: 'AI Chatbots',
    heading: 'AI Chatbot Solutions',
    subheading:
      'Intelligent conversations that answer, qualify, and book automatically built on the platforms you already use.',
    primaryCta: {
      text: 'Book a Free Audit',
      href: '/free-automation-audit',
    },
    image: '/images/solution.png',
    imageWidth: 600,
    imageHeight: 500,
    textSize: 'xlarge' as const,
  };

  const platforms = [
    {
      id: 'zapier',
      title: 'Zapier Chatbots',
      icon: Zap,
      description:
        'Accessible chatbots built on Zapier perfect for straightforward workflows and teams that want to self-serve changes.',
      href: '/solutions/ai-chatbots/with-zapier',
      features: ['6,000+ app integrations', 'Fast deployment', 'Self-serve friendly'],
      color: 'from-brand/30 to-orange-400/30',
      iconColor: 'text-brand',
      bgGradient: 'from-brand/10 to-orange-400/10',
      borderColor: 'border-brand/30',
      hoverColor: 'group-hover:border-brand/60',
      badge: 'Popular',
    },
    {
      id: 'salesforce',
      title: 'Salesforce Chatbots',
      icon: Cloud,
      description:
        'Enterprise-grade chatbots built on Salesforce ideal for organizations with Salesforce at the core of revenue operations.',
      href: '/solutions/ai-chatbots/with-salesforce',
      features: ['Native CRM integration', 'Enterprise security', 'Scalable'],
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
      description: 'AI chatbots that handle document collection, data entry, and client communication.',
      href: '/solutions/ai-chatbots/for-accounting-firms',
      features: ['Document collection', 'Data entry assistance', 'Client Q&A'],
      color: 'from-blue-500/30 to-cyan-400/30',
      badge: 'Popular',
    },
    {
      id: 'for-construction',
      title: 'Construction',
      icon: HardHat,
      description: 'AI chatbots that manage bids, documents, and client communications.',
      href: '/solutions/ai-chatbots/for-construction',
      features: ['Lead intake', 'Bid handling', 'Document organization'],
      color: 'from-amber-500/30 to-orange-400/30',
      badge: null,
    },
    {
      id: 'for-ecommerce',
      title: 'E-commerce',
      icon: ShoppingBag,
      description: 'AI chatbots that handle support, cart recovery, and order processing.',
      href: '/solutions/ai-chatbots/for-ecommerce',
      features: ['Customer support', 'Cart recovery', 'Order status'],
      color: 'from-purple-500/30 to-pink-400/30',
      badge: 'Popular',
    },
    {
      id: 'for-education',
      title: 'Education',
      icon: GraduationCap,
      description: 'AI chatbots that manage inquiries, enrollment, and student communication.',
      href: '/solutions/ai-chatbots/for-education',
      features: ['Inquiry response', 'Enrollment nurture', 'FAQ handling'],
      color: 'from-green-500/30 to-emerald-400/30',
      badge: null,
    },
    {
      id: 'for-healthcare',
      title: 'Healthcare',
      icon: Heart,
      description: 'AI chatbots that handle scheduling, intake, and patient communication.',
      href: '/solutions/ai-chatbots/for-healthcare',
      features: ['Appointment scheduling', 'Patient intake', 'Reminders'],
      color: 'from-red-500/30 to-rose-400/30',
      badge: 'Popular',
    },
    {
      id: 'for-insurance',
      title: 'Insurance Agencies',
      icon: Shield,
      description: 'AI chatbots that manage quotes, certificates, and renewals.',
      href: '/solutions/ai-chatbots/for-insurance',
      features: ['Quote intake', 'Certificate issuance', 'Renewal tracking'],
      color: 'from-indigo-500/30 to-purple-400/30',
      badge: null,
    },
    {
      id: 'for-law-firms',
      title: 'Law Firms',
      icon: Scale,
      description: 'AI chatbots that handle intake, document assembly, and deadline tracking.',
      href: '/solutions/ai-chatbots/for-law-firms',
      features: ['Client intake', 'Document assembly', 'Deadline tracking'],
      color: 'from-slate-500/30 to-gray-400/30',
      badge: 'New',
    },
    {
      id: 'for-logistics',
      title: 'Logistics & Transportation',
      icon: Truck,
      description: 'AI chatbots that manage order intake, tracking updates, and document processing.',
      href: '/solutions/ai-chatbots/for-logistics',
      features: ['Order intake', 'Tracking updates', 'Document processing'],
      color: 'from-cyan-500/30 to-blue-400/30',
      badge: 'New',
    },
    {
      id: 'for-manufacturing',
      title: 'Manufacturing',
      icon: Factory,
      description: 'AI chatbots that handle order entry, inventory alerts, and reporting.',
      href: '/solutions/ai-chatbots/for-manufacturing',
      features: ['Order entry', 'Inventory alerts', 'Reporting'],
      color: 'from-yellow-500/30 to-orange-400/30',
      badge: 'New',
    },
    {
      id: 'for-real-estate',
      title: 'Real Estate',
      icon: Building,
      description: 'AI chatbots that handle lead response, nurture, and showing coordination.',
      href: '/solutions/ai-chatbots/for-real-estate',
      features: ['Lead response', 'Nurture sequences', 'Showing scheduling'],
      color: 'from-teal-500/30 to-cyan-400/30',
      badge: 'New',
    },
    {
      id: 'for-restaurants',
      title: 'Restaurants & Hospitality',
      icon: Utensils,
      description: 'AI chatbots that handle reservations, inquiries, and event coordination.',
      href: '/solutions/ai-chatbots/for-restaurants',
      features: ['Reservations', 'Inquiry handling', 'Event coordination'],
      color: 'from-orange-500/30 to-red-400/30',
      badge: 'New',
    },
    {
      id: 'for-retail',
      title: 'Retail',
      icon: Store,
      description: 'AI chatbots that handle inventory monitoring, customer inquiries, and reporting.',
      href: '/solutions/ai-chatbots/for-retail',
      features: ['Inventory monitoring', 'Customer inquiries', 'Reporting'],
      color: 'from-pink-500/30 to-rose-400/30',
      badge: 'New',
    },
    {
      id: 'for-saas',
      title: 'SaaS Companies',
      icon: Cpu,
      description: 'AI chatbots that handle support triage, onboarding, and churn monitoring.',
      href: '/solutions/ai-chatbots/for-saas',
      features: ['Support triage', 'Onboarding', 'Churn monitoring'],
      color: 'from-violet-500/30 to-indigo-400/30',
      badge: 'New',
    },
  ];

  const features = [
    {
      id: 'grounded-qa',
      title: 'Grounded Q&A (RAG)',
      description: 'Answers drawn from your real content, so responses are accurate, on-brand, and grounded in your actual documentation.',
      icon: MessageSquare,
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      id: 'lead-qualification',
      title: 'Lead Qualification',
      description: 'Visitors are engaged, qualified, and captured naturally in conversation, with full context passed to your team.',
      icon: Users,
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 'booking-scheduling',
      title: 'Booking & Scheduling',
      description: 'Appointments are checked and booked directly in chat, synced to your calendar with automated reminders.',
      icon: Calendar,
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 'action-taking',
      title: 'Action-Taking',
      description: 'Lookups, updates, and processes are executed, not just described — your chatbot takes real action.',
      icon: Workflow,
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      id: 'human-handoff',
      title: 'Clean Human Handoff',
      description: 'Complex cases are escalated with full context attached, so your team picks up exactly where the chatbot left off.',
      icon: Bot,
      color: 'from-teal-500/20 to-cyan-500/20',
    },
    {
      id: 'production-ready',
      title: 'Production-Ready',
      description: 'Staged rollout, comprehensive documentation, and reliability engineering ensure your chatbot performs at scale.',
      icon: Sparkles,
      color: 'from-amber-500/20 to-yellow-500/20',
    },
  ];

  const stats = [
    {
      value: '25+',
      label: 'Industries Served',
      icon: Building2,
    },
    {
      value: '97%',
      label: 'Customer Satisfaction',
      icon: Heart,
    },
    {
      value: '85%',
      label: 'Process Automation',
      icon: BarChart3,
    },
    {
      value: '100%',
      label: 'Ownership Guaranteed',
      icon: CheckCircle,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
          { label: 'AI Chatbots', href: '/solutions/ai-chatbots' },
        ]}
      />

      {/* Stats Section */}
      <Section bg="dark" className="py-12 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Platform Selection Section */}
      <Section bg="dark" pattern="dots" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="eyebrow inline-flex items-center gap-2 text-brand mb-4">
              <span className="w-6 h-px bg-brand" />
              Platform Selection
            </span>
            <h2 className="display text-3xl md:text-5xl text-white font-bold">Choose Your Platform</h2>
            <p className="text-base md:text-lg text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto">
              We build chatbots on the platforms you already use with honest platform recommendations.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12"
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
              AI Chatbots for Every <span className="text-brand">Industry</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              We build AI chatbots designed for the workflows, tools, and constraints of your specific industry.
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
                    className={`
                      absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 
                      transition-all duration-500 blur-xl
                      bg-gradient-to-r ${industry.color}
                    `}
                  />

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
                      <div
                        className={`
                          w-14 h-14 rounded-2xl 
                          bg-gradient-to-br ${industry.color}
                          flex items-center justify-center
                          transition-all duration-300
                          group-hover:shadow-lg
                        `}
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

      {/* Features Section - Light Orange Background with Brand Effects */}
      <Section bg="orange-light" className="py-20 relative overflow-hidden">
        {/* Brand Color Effects - Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/3 rounded-full blur-3xl" />
          
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Subtle brand-colored border accents */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Key Features
              <span className="w-8 h-px bg-brand" />
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-[1.1] tracking-tight">
              What Our AI Chatbots <span className="text-brand">Can Do</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Every chatbot we build comes with these core capabilities, tailored to your specific needs.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === feature.id;

              return (
                <motion.div
                  key={feature.id}
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="relative group"
                >
                  {/* Brand glow effect on hover */}
                  <div
                    className={`
                      absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 
                      transition-all duration-500 blur-xl
                      bg-gradient-to-r ${feature.color}
                    `}
                  />

                  <div
                    className={`
                      relative block h-full p-6 rounded-2xl 
                      bg-gradient-to-br ${feature.color}
                      border-2 border-orange-200/50 group-hover:border-brand/40
                      transition-all duration-300
                      backdrop-blur-sm bg-white/90
                      text-gray-900
                      shadow-sm hover:shadow-xl
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`
                          w-12 h-12 rounded-xl 
                          bg-gradient-to-br ${feature.color}
                          flex items-center justify-center flex-shrink-0
                          transition-all duration-300
                          group-hover:shadow-lg
                          border-2 border-orange-200/50 group-hover:border-brand/30
                        `}
                      >
                        <Icon className="h-6 w-6 text-brand" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>

                        {/* Brand accent line on hover */}
                        <motion.div
                          initial={{ width: 0, opacity: 0 }}
                          animate={{
                            width: isHovered ? '100%' : 0,
                            opacity: isHovered ? 1 : 0,
                          }}
                          transition={{ duration: 0.4 }}
                          className="h-0.5 bg-gradient-to-r from-brand/60 via-brand to-brand/60 rounded-full mt-3"
                        />

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                          className="mt-3"
                        >
                          <span className="text-xs text-brand font-medium flex items-center gap-1 bg-brand/10 px-3 py-1 rounded-full inline-flex">
                            <CheckCircle className="h-3 w-3" />
                            Available for all industries
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Brand color progress bar at bottom */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand/0 via-brand/40 to-brand/0 rounded-b-2xl"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: isHovered ? 1 : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Brand accent circle decorations */}
          <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full border border-brand/10 opacity-20" />
          <div className="absolute top-20 left-10 w-12 h-12 rounded-full border border-brand/10 opacity-20" />
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        eyebrow="Get Started"
        title="Ready to Build Your AI Chatbot?"
        subtitle="Book a free consultation and let's discuss how AI chatbots can transform your business."
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