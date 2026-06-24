'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';

export default function CTASec({ section }: { section: Section }) {
  return (
    <section className="relative py-24 md:py-32 border-t border-gray-800 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,rgba(249,115,22,0.08),rgba(0,0,0,0))]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand backdrop-blur-sm mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>Get Started Today</span>
          </motion.div>

          {section.heading && (
            <motion.h2
              variants={fadeInUp}
              className="display text-4xl font-bold md:text-5xl text-white"
            >
              {section.heading}
            </motion.h2>
          )}
          {section.subheading && (
            <motion.p
              variants={fadeInUp}
              className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify"
            >
              {section.subheading}
            </motion.p>
          )}
          {section.cta && (
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-block"
            >
              <div className="absolute inset-0 bg-brand/30 blur-xl rounded-full group-hover:blur-2xl transition-all" />
              <Button
                size="lg"
                className="relative bg-brand hover:bg-brand-dark text-white px-10 py-6 text-lg rounded-full transition-all font-medium shadow-lg shadow-brand/25"
              >
                {section.cta.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}