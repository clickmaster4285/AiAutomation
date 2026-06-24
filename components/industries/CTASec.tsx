'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from './Shared/animation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Section } from '@/content/type';

export default function CTASec({ section, bg = 'bg-black' }: { section: Section; bg?: string }) {
  const isBlack = bg === 'bg-black';

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${bg} text-center`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(249,115,22,0.08),transparent)]" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand/8 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]`} />

      <div className="container relative mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand mb-8"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="font-medium">Get Started</span>
          </motion.div>

          {section.heading && (
            <motion.h2
              variants={scaleUp}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${isBlack ? 'text-white' : 'text-gray-900'}`}
            >
              {section.heading}
            </motion.h2>
          )}

          {section.subheading && (
            <motion.p
              variants={fadeInUp}
              className={`text-lg mb-10 leading-relaxed ${isBlack ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {section.subheading}
            </motion.p>
          )}

          {section.cta && (
            <motion.div variants={scaleUp}>
              <motion.div
                whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block relative group"
              >
                <div className="absolute inset-0 bg-brand/30 blur-xl rounded-full group-hover:blur-2xl transition-all" />
                <Button
                  size="lg"
                  className="relative bg-brand hover:bg-brand-dark text-white px-10 py-6 text-lg rounded-full font-semibold shadow-lg shadow-brand/25"
                >
                  {section.cta.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}