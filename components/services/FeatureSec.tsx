'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Section, SectionItem } from '@/content/type';
import { fadeInUp, staggerContainer, glowPulse } from '../services/Shared/animation';
import { getIcon } from '../services/Shared/icons';

export default function FeaturesSec({ section }: { section: Section }) {
  const featuresItems = section.items || [];
  
  const isKeyFeatures = section.heading?.includes('Key Features') || section.heading?.includes('What You Get');
  const isKeyCapabilities = section.heading?.includes('Key Capabilities');

  let bgClasses = 'bg-black dark:bg-black';
  let borderClasses = 'border-t border-gray-800 dark:border-gray-800';
  let headingColor = 'text-white';
  let textColor = 'text-gray-400';
  let cardBg = 'bg-white/5';
  let cardBorder = 'border-gray-800/50';
  let cardHoverBg = 'bg-white/10';

  if (isKeyFeatures) {
    bgClasses = 'bg-gray-950 dark:bg-gray-950';
    borderClasses = 'border-t border-gray-800/50 dark:border-gray-800/50';
    cardBg = 'bg-white/5';
    cardBorder = 'border-gray-800/50';
    cardHoverBg = 'bg-white/10';
  } else if (isKeyCapabilities) {
    bgClasses = 'bg-black dark:bg-black';
    borderClasses = 'border-t border-gray-800/50 dark:border-gray-800/50';
  }

  return (
    <section className={`py-24 md:py-32 ${borderClasses} ${bgClasses} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(249,115,22,0.03),rgba(0,0,0,0))]" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl"
        animate={glowPulse}
      />
      
      {isKeyFeatures && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_30%,rgba(249,115,22,0.03),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_70%,rgba(99,102,241,0.02),transparent)]" />
        </>
      )}
      
      <div className="mx-auto max-w-[84vw] px-6">
        {section.heading && (
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className={`display mb-4 text-3xl font-bold md:text-4xl ${headingColor} text-left relative inline-block`}
          >
            {section.heading}
            <motion.span 
              className="absolute -bottom-2 left-0 h-0.5 bg-brand/50 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.h2>
        )}
        {section.subheading && (
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className={`mb-12 text-left ${textColor} max-w-2xl text-justify`}
          >
            {section.subheading}
          </motion.p>
        )}
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuresItems.slice(0, 3).map((item: SectionItem, idx: number) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
                className={`group relative rounded-2xl border ${cardBorder} ${cardBg} backdrop-blur-sm p-8 transition-all duration-300 hover:border-brand/40 hover:${cardHoverBg} hover:shadow-xl hover:shadow-brand/5`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <motion.div 
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand group-hover:bg-brand/20 transition-all`}
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  {item.title && (
                    <h3 className={`mb-3 text-xl font-semibold ${headingColor} group-hover:text-brand transition-colors`}>
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className={`${textColor} leading-relaxed group-hover:text-gray-300 transition-colors text-justify`}>
                      {item.description}
                    </p>
                  )}
                  {item.link && (
                    <Link 
                      href={item.link}
                      className="mt-4 inline-flex items-center text-brand hover:underline font-medium group/link"
                    >
                      Learn more 
                      <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {featuresItems.length > 3 && (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className={`grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 ${
              featuresItems.length === 4 
                ? 'lg:grid-cols-1 lg:max-w-md lg:mx-0' 
                : 'lg:grid-cols-2'
            }`}
          >
            {featuresItems.slice(3).map((item: SectionItem, idx: number) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.div 
                  key={idx + 3} 
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.01,
                    transition: { duration: 0.3 }
                  }}
                  className={`group relative rounded-2xl border ${cardBorder} ${cardBg} backdrop-blur-sm p-8 transition-all duration-300 hover:border-brand/40 hover:${cardHoverBg} hover:shadow-xl hover:shadow-brand/5`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <motion.div 
                      className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand group-hover:bg-brand/20 transition-all`}
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    {item.title && (
                      <h3 className={`mb-3 text-xl font-semibold ${headingColor} group-hover:text-brand transition-colors`}>
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className={`${textColor} leading-relaxed group-hover:text-gray-300 transition-colors text-justify`}>
                        {item.description}
                      </p>
                    )}
                    {item.link && (
                      <Link 
                        href={item.link}
                        className="mt-4 inline-flex items-center text-brand hover:underline font-medium group/link"
                      >
                        Learn more 
                        <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}