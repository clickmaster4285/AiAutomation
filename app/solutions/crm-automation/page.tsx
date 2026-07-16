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
} from 'lucide-react';
import { PageWrapper } from '@/components/solutions/layout/PageWrapper';
import { HeroSection } from '@/components/solutions/sections/Hero';
import { CTASection } from '@/components/solutions/sections/CTA';
import { Section } from '@/components/solutions/layout/Section';

export default function CRMAutomationPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const heroData = {
    badge: 'CRM Automation',
    heading: 'CRM Automation Solutions',
    subheading: 'Keep your CRM accurate and active automatically — built on the platforms you already use.',
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
      description: 'Flexible CRM automation on Airtable — perfect for custom operational tools and data workflows without full custom development.',
      href: '/solutions/crm-automation/with-airtable',
      features: ['Flexible database', 'Custom workflows', 'Ops teams'],
      color: 'from-brand/30 to-orange-400/30',
      iconColor: 'text-brand',
      bgGradient: 'from-brand/10 to-orange-400/10',
      borderColor: 'border-brand/30',
      hoverColor: 'group-hover:border-brand/60',
    },
    {
      id: 'hubspot',
      title: 'HubSpot CRM Automation',
      icon: Mail,
      description: 'Extend HubSpot\'s CRM power with AI workflows connected to your wider stack — ideal for teams already running sales and marketing on HubSpot.',
      href: '/solutions/crm-automation/with-hubspot',
      features: ['Native CRM', 'AI integration', 'Scalable'],
      color: 'from-brand/30 to-orange-400/30',
      iconColor: 'text-brand',
      bgGradient: 'from-brand/10 to-orange-400/10',
      borderColor: 'border-brand/30',
      hoverColor: 'group-hover:border-brand/60',
    },
    {
      id: 'salesforce',
      title: 'Salesforce CRM Automation',
      icon: Cloud,
      description: 'Enterprise-grade CRM automation on Salesforce — ideal for organizations with Salesforce at the core of revenue operations.',
      href: '/solutions/crm-automation/with-salesforce',
      features: ['Enterprise security', 'Native CRM', 'Scalable'],
      color: 'from-brand/30 to-orange-400/30',
      iconColor: 'text-brand',
      bgGradient: 'from-brand/10 to-orange-400/10',
      borderColor: 'border-brand/30',
      hoverColor: 'group-hover:border-brand/60',
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
      />
      
      <Section bg="black" pattern="dots" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 mt-8">
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Platform Selection
              <span className="w-8 h-px bg-brand" />
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
              Choose Your Platform
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              We build CRM automation on the platforms you already use — with honest platform recommendations.
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
                  <div className={`
                    absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 
                    transition-all duration-500 blur-xl
                    bg-gradient-to-r ${platform.color}
                  `} />

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
                      <div className={`
                        w-16 h-16 rounded-2xl 
                        bg-gradient-to-br ${platform.color}
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:shadow-lg
                      `}>
                        <Icon className={`h-8 w-8 ${platform.iconColor}`} />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          scale: isHovered ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-1 text-sm font-medium text-brand bg-brand/20 px-3 py-1 rounded-full"
                      >
                        <Sparkles className="h-3 w-3" />
                        <span>Recommended</span>
                      </motion.div>
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

      {/* CTA Section with Light Orange/Grey/White Background */}
      <CTASection
        eyebrow="Get Started"
        title="Ready to Automate Your CRM?"
        subtitle="Book a free consultation and let's discuss how CRM automation can keep your data accurate and your team productive."
        primaryCta={{
          text: 'Book a Free Audit',
          href: '/free-automation-audit',
        }}
        secondaryCta={{
          text: 'View Our Work',
          href: '/#work',
        }}
        background="light"
        showForm={true}
      />
    </PageWrapper>
  );
}