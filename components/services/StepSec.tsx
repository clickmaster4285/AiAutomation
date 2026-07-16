'use client';

import { motion } from 'framer-motion';
import { Search, Zap, Check, BarChart3, Sparkles, Rocket, Target, Lightbulb } from 'lucide-react';
import { Section, SectionItem } from '@/content/type';
import { fadeInUp, staggerContainer } from './Shared/animation';

const stepIcons = [Search, Zap, Check, BarChart3, Rocket, Target, Lightbulb];

export default function StepSec({ section }: { section: Section }) {
  const items = section.items || [];
  
  const isHowWeWork = section.heading?.includes('How We Work');

  return (
    <section className={`py-24 md:py-32 border-t border-gray-800 dark:border-gray-800 ${isHowWeWork ? 'bg-gray-950/80 dark:bg-gray-950/80' : 'bg-black dark:bg-black'} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(249,115,22,0.02),rgba(0,0,0,0))]" />
      
      {isHowWeWork && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_30%,rgba(249,115,22,0.03),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_70%,rgba(99,102,241,0.02),transparent)]" />
        </>
      )}

      <div className="mx-auto max-w-[84vw] px-6">
        {section.heading && (
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="display mb-4 text-3xl font-bold md:text-4xl text-white text-left relative inline-block"
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
            className="mb-12 text-left text-gray-400 max-w-2xl leading-relaxed text-justify"
          >
            {section.subheading}
          </motion.p>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item: SectionItem, idx: number) => {
            const Icon = stepIcons[idx % stepIcons.length] || Sparkles;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  transition: { duration: 0.3 },
                }}
                className="relative rounded-2xl border border-gray-800/50 bg-white/5 backdrop-blur-sm p-8 text-left transition-all duration-300 hover:border-brand/40 hover:bg-white/10 hover:shadow-xl hover:shadow-brand/5 group"
              >
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-brand text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-brand/30">
                  {idx + 1}
                </div>

                <motion.div
                  className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand group-hover:bg-brand/20 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                {item.title && (
                  <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                )}
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