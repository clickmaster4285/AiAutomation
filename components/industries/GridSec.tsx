'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './Shared/animation';
import * as Icons from 'lucide-react';
import type { Section } from '@/content/type';

export default function GridSec({ section, bg = 'bg-white' }: { section: Section; bg?: string }) {
  const items = section.items || [];
  const isBlack = bg === 'bg-black';

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${bg}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(249,115,22,0.05),transparent)]" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand" />
              <span className="text-brand text-sm font-semibold tracking-widest uppercase">Overview</span>
            </div>
            {section.heading && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                {section.heading}
              </h2>
            )}
            {section.subheading && (
              <p className={`mt-4 text-lg max-w-2xl ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                {section.subheading}
              </p>
            )}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, idx) => {
              const IconComponent = item.icon ? (Icons as any)[item.icon] : Icons.Star;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`group flex gap-5 p-7 rounded-2xl border transition-all duration-300 ${
                    isBlack
                      ? 'bg-gray-900/60 border-gray-800 hover:border-brand/30 hover:bg-gray-900'
                      : 'bg-gray-50 border-gray-100 hover:border-brand/30 hover:bg-brand/5'
                  }`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mt-0.5 group-hover:bg-brand transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent className="h-4 w-4 text-brand group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <div>
                    <h3 className={`font-bold mb-2 ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}