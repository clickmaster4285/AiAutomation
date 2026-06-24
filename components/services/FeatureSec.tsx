'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Section, SectionItem } from '@/content/type';
import { fadeInUp, staggerContainer, glowPulse } from '../services/Shared/animation';
import { getIcon } from '../services/Shared/icons';

export default function FeaturesSec({ section }: { section: Section }) {
  const featuresItems = section.items || [];

  return (
    <section className="py-20 md:py-28 border-t border-gray-800 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(249,115,22,0.03),rgba(0,0,0,0))]" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-3xl"
        animate={glowPulse}
      />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
        {section.heading && (
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="display mb-4 text-3xl font-bold md:text-4xl text-white text-left"
          >
            {section.heading}
          </motion.h2>
        )}
        {section.subheading && (
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="mb-12 text-left text-gray-400 max-w-2xl text-justify"
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
                  y: -12, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative rounded-2xl border border-gray-800/50 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:border-brand/50 hover:bg-white/10 hover:shadow-xl hover:shadow-brand/10"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <motion.div 
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand group-hover:bg-brand/20 transition-all"
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  {item.title && (
                    <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                  )}
                  {item.description && (
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
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
                    y: -12, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative rounded-2xl border border-gray-800/50 bg-white/5 backdrop-blur-sm p-8 transition-all duration-300 hover:border-brand/50 hover:bg-white/10 hover:shadow-xl hover:shadow-brand/10"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <motion.div 
                      className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand group-hover:bg-brand/20 transition-all"
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>
                    {item.title && (
                      <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-brand transition-colors">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
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