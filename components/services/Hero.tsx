'use client';

import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';

interface HeroProps {
  section: Section;
}

export default function Hero({ section }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const heading = section.heading || 'AI Automation Agency';
  const subheading = section.subheading || '';
  const stats = section.stats || [];
  const ctas = section.ctas || [];

  const words = heading.split(' ');
  const primaryCta = ctas.find(c => c.primary) || ctas[0];
  const secondaryCtas = ctas.filter(c => !c.primary);

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const highlightWords = ['Automation'];

  return (
    <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center bg-black">

      {/* ====== BACKGROUND EFFECTS (unchanged) ====== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(249,115,22,0.08),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_80%,rgba(249,115,22,0.05),rgba(0,0,0,0))]" />

        <motion.div
          className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-brand/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const seed = i;
            const left = (seed * 73) % 100;
            const top = (seed * 97) % 100;
            const moveX = (seed * 13) % 100 - 50;
            const moveY = (seed * 29) % 100 - 50;
            const duration = 12 + (seed % 8) * 2;
            const size = 2 + (seed % 4);
            const opacity = 0.1 + (seed % 5) * 0.05;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-brand"
                style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, opacity }}
                animate={{ x: [0, moveX, 0], y: [0, moveY, 0] }}
                transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
              />
            );
          })}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ====== RIGHT IMAGE WITH EDGE FADE ====== */}
      {section.image && (
        <div
          className="absolute top-0 right-0 w-[60%] min-h-screen h-full z-0 flex items-center justify-center"
          style={{
            maskImage: `
              radial-gradient(ellipse at center, black 55%, transparent 85%),
              linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
              linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)
            `,
            maskComposite: 'intersect',
            WebkitMaskImage: `
              radial-gradient(ellipse at center, black 55%, transparent 85%),
              linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
              linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 100%)
            `,
            WebkitMaskComposite: 'source-in',
          }}
        >
          <div className="absolute inset-0 bg-brand/20 blur-3xl" />

          <motion.div
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="w-full h-full object-contain object-center drop-shadow-[0_0_80px rgba(249,115,22,0.5)]"
            />
          </motion.div>
        </div>
      )}

      {/* ====== MAIN CONTENT ====== */}
      <div className="container relative mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* ====== LEFT CONTENT ====== */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand backdrop-blur-sm mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span>AI Automation Agency</span>
              <span className="h-1 w-1 rounded-full bg-brand" />
              <span className="text-brand/70 animate-pulse">AVAILABLE FOR NEW PROJECTS</span>
            </motion.div>

            {/* Heading – uses display class */}
            <motion.h1 className="display mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              {words.map((word, index) => {
                const isHighlighted = highlightWords.some(hw =>
                  word.toLowerCase().includes(hw.toLowerCase())
                );
                return (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block mr-2 ${isHighlighted ? 'text-brand' : ''}`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.h1>

            {/* Subheading */}
            {subheading && (
              <motion.p
                variants={fadeInUp}
                className="mb-6 text-lg text-gray-300 md:text-xl max-w-xl leading-relaxed font-light text-justify"
              >
                {subheading}
              </motion.p>
            )}

            {/* Stats + CTAs – with square corners and hover effects */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-row items-center gap-6 mt-2 flex-wrap"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-baseline gap-1.5">
                  <span className="text-2xl md:text-3xl font-bold text-brand">{stat.value}</span>
                  <span className="text-xs text-gray-400 tracking-widest uppercase">{stat.label}</span>
                </div>
              ))}

              {/* Primary CTA – square corners, brand background */}
              {primaryCta && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                  <div className="absolute inset-0 bg-brand/30 blur-xl rounded-none group-hover:blur-2xl transition-all" />
                  <Button
                    size="lg"
                    className="relative bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg rounded-none transition-all font-medium shadow-lg shadow-brand/25"
                  >
                    {primaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              )}

              {/* Secondary CTAs – white bg, black text, square corners, hover animation */}
              {secondaryCtas.map((cta, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-medium rounded-none transition-all duration-300"
                    style={{
                      background: '#ffffff',
                      color: '#000000',
                      border: '1px solid #ffffff',
                      height: '52px',
                      paddingInline: '2rem',
                      fontSize: '0.9375rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#000000';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.borderColor = '#ffffff';
                    }}
                  >
                    {cta.text}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust badge */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex items-center gap-4 text-sm text-gray-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs font-medium text-gray-300">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-400">Trusted by 500+ companies</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}