'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp, blowOut } from './Shared/animation';
import { AlertTriangle, TrendingUp } from 'lucide-react';
import type { Section } from '@/content/type';

export default function PainPoint({ section, bg = 'bg-orange-50' }: { section: Section; bg?: string }) {
  const content = Array.isArray(section.content) ? section.content : [section.content];
  const isBlack = bg === 'bg-black';

  const painPoints = content.slice(0, -1);
  const solutionHint = content[content.length - 1];

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${bg}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(249,115,22,0.08),transparent)]" />
      <motion.div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={blowOut} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand" />
              <span className="text-brand text-sm font-semibold tracking-widest uppercase">The Problem</span>
            </div>
            {section.heading && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                {section.heading}
              </h2>
            )}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-5">
              {painPoints.map((para, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleUp}
                  whileHover={{ x: 8, scale: 1.02, boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}
                  className={`flex gap-4 p-6 rounded-2xl border transition-all duration-300 ${
                    isBlack
                      ? 'bg-red-500/5 border-red-500/10 hover:border-red-500/20'
                      : 'bg-red-50 border-red-100 hover:border-red-200'
                  }`}
                >
                  <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className={`text-sm leading-relaxed ${isBlack ? 'text-gray-300' : 'text-gray-700'}`}>
                    {para}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={blowOut}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(249,115,22,0.15)' }}
              className={`p-8 rounded-2xl border flex flex-col justify-center ${
                isBlack
                  ? 'bg-brand/10 border-brand/30'
                  : 'bg-brand/20 border-brand/30'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-brand" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                There's a better way.
              </h3>
              <p className={`text-sm leading-relaxed ${isBlack ? 'text-gray-300' : 'text-gray-700'}`}>
                {solutionHint || 'AI automation removes the manual layer while keeping humans firmly in control of the decisions that matter. The data entry runs automatically — the judgment stays with your team.'}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}