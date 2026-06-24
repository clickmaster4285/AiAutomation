'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { fadeInUp, staggerContainer, blowOut } from './Shared/animation';
import type { Section } from '@/content/type';

interface HeroProps {
  section: Section;
  bg?: string;
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

export default function Hero({ section, bg = 'bg-black' }: HeroProps) {
  const heading = section.heading || '';
  const subheading = section.subheading || '';
  const stats = section.stats || [];
  const ctas = section.ctas || [];
  const primaryCta = ctas.find(c => c.primary) || ctas[0];
  const secondaryCtas = ctas.filter(c => !c.primary);
  const words = heading.split(' ');

  const isDark = bg === 'bg-black' || bg === 'bg-gray-900' || bg === 'bg-gray-800';

  return (
    <section className={`relative overflow-hidden min-h-screen flex items-center ${bg}`}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_70%_50%,rgba(249,115,22,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(249,115,22,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <motion.div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {section.image && (
        <div
          className="absolute top-0 right-0 w-[55%] min-h-screen h-full z-0"
          style={{
            maskImage: `linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
                        linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)`,
            maskComposite: 'intersect',
            WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%),
                              linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)`,
            WebkitMaskComposite: 'source-in',
          }}
        >
          <div className="absolute inset-0 bg-brand/10 blur-3xl" />
          <motion.div
            className="w-full h-full flex items-center justify-center p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.9, delay: 0.4 },
              x: { duration: 0.9, delay: 0.4 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
            }}
          >
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="w-full h-full object-contain object-center drop-shadow-[0_0_60px rgba(249,115,22,0.2)]"
            />
          </motion.div>
        </div>
      )}

      <div className="container relative mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-24 md:py-36 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm mb-8 ${
                isDark
                  ? 'border-brand/30 bg-brand/10 text-brand'
                  : 'border-brand/25 bg-brand/10 text-brand'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span className="font-medium">Industry Automation</span>
              <span className="h-1 w-1 rounded-full bg-brand" />
              <span className={`font-medium tracking-wide ${isDark ? 'text-brand/70' : 'text-brand/70'}`}>
                AVAILABLE NOW
              </span>
            </motion.div>

            <motion.h1 className={`mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] font-sans ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-3 ${
                    word.toLowerCase().includes('automation') || word.toLowerCase().includes('ai')
                      ? 'text-brand'
                      : isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {subheading && (
              <motion.p
                variants={fadeInUp}
                className={`mb-8 text-lg md:text-xl max-w-lg leading-relaxed font-normal ${
                  isDark ? 'text-gray-300' : 'text-gray-500'
                }`}
              >
                {subheading}
              </motion.p>
            )}

            <motion.div variants={fadeInUp} className="flex flex-row items-center gap-6 flex-wrap">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-brand">{stat.value}</span>
                  <span className={`text-xs tracking-widest uppercase font-medium ${
                    isDark ? 'text-gray-400' : 'text-gray-400'
                  }`}>{stat.label}</span>
                </div>
              ))}

              {primaryCta && (
                <motion.div
                  whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(249,115,22,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-base rounded-full font-semibold shadow-lg shadow-brand/20 transition-all"
                  >
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              )}

              {secondaryCtas.map((cta, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.04 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className={`px-8 py-6 text-base rounded-full font-semibold transition-all ${
                      isDark
                        ? 'border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-brand hover:border-brand'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-brand hover:border-brand'
                    }`}
                  >
                    {cta.text}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-gray-300'
                      : 'bg-brand/20 border-brand/30 text-brand'
                  }`}>
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
                Trusted by 500+ companies
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}