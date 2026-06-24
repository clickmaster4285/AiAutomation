'use client';

import { motion } from 'framer-motion';
import { Search, Zap, Check, BarChart3, Sparkles } from 'lucide-react';
import { Section, SectionItem } from '@/content/type';
import { fadeInUp, staggerContainer } from './Shared/animation';

const stepIcons = [Search, Zap, Check, BarChart3];

export default function StepSec({ section }: { section: Section }) {
  const items = section.items || [];

  return (
    <section className="py-20 md:py-28 border-t border-gray-800 bg-black">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Heading */}
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
        {/* Subheading */}
        {section.subheading && (
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="mb-12 text-left text-gray-400 max-w-2xl leading-relaxed text-justify"
          >
            {section.subheading}
          </motion.p>
        )}

        {/* Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item: SectionItem, idx: number) => {
            const Icon = stepIcons[idx] || Sparkles;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative rounded-2xl border border-gray-800/50 bg-white/5 backdrop-blur-sm p-8 text-left transition-all duration-300 hover:border-brand/50 hover:bg-white/10 hover:shadow-xl hover:shadow-brand/10"
              >
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-brand/30">
                  {idx + 1}
                </div>

                {/* Icon with rotation on hover */}
                <motion.div
                  className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand group-hover:bg-brand/20 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                {/* Title */}
                {item.title && (
                  <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                )}

                {/* Description */}
                {item.description && (
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                    {item.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}