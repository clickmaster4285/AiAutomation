'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './Shared/animation';
import * as Icons from 'lucide-react';
import type { Section } from '@/content/type';

export default function FeatureSec({ section, bg = 'bg-gray-50' }: { section: Section; bg?: string }) {
  const items = section.items || [];
  const isBlack = bg === 'bg-black';

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${bg}`}>
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(249,115,22,0.06),transparent)]`} />

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
              <span className="text-brand text-sm font-semibold tracking-widest uppercase">What We Do</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => {
              const IconComponent = item.icon ? (Icons as any)[item.icon] : Icons.Zap;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(249,115,22,0.12)' }}
                  transition={{ duration: 0.3 }}
                  className={`group relative p-8 rounded-2xl border transition-all duration-300 cursor-default ${
                    isBlack
                      ? 'bg-gray-900 border-gray-800 hover:border-brand/40'
                      : 'bg-white border-gray-100 hover:border-brand/30 shadow-sm hover:shadow-lg'
                  }`}
                >
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                      {IconComponent && (
                        <IconComponent className="h-5 w-5 text-brand group-hover:text-white transition-colors duration-300" />
                      )}
                    </div>
                  </div>

                  <h3 className={`text-lg font-bold mb-3 ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isBlack ? 'text-gray-400' : 'text-gray-500'}`}>
                    {item.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-brand/60 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}