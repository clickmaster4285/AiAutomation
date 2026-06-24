'use client';

import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import type { Section } from '@/content/type';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const wordStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 48, rotateX: -12 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ section }: { section: Section }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const heading = section.heading || '';
  const subheading = section.subheading || '';
  const stats = section.stats || [];
  const ctas = section.ctas || [];
  const primaryCta = ctas.find(c => c.primary) || ctas[0];
  const secondaryCtas = ctas.filter(c => !c.primary);

  const words = heading.split(' ');
  const lastWord = words[words.length - 1];
  const leadWords = words.slice(0, -1);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-screen flex items-end pb-0"
      style={{ background: '#090909' }}
    >
      {/* ── Noise, grid, radial glow (unchanged) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 82% 45%, rgba(249,115,22,0.13) 0%, transparent 65%)',
        }}
      />

      {/* ── Hero image (unchanged) ── */}
      {section.image && (
        <motion.div
          className="pointer-events-none"
          style={{
            y: parallaxY,
            opacity: imgOpacity,
            position: 'absolute',
            top: 0,
            right: 0,
            width: '48%',
            height: '100%',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage: `
                linear-gradient(to right, transparent 0%, black 22%),
                linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)
              `,
              maskComposite: 'intersect',
              WebkitMaskImage: `
                linear-gradient(to right, transparent 0%, black 22%),
                linear-gradient(to bottom, transparent 0%, black 10%, black 80%, transparent 100%)
              `,
              WebkitMaskComposite: 'source-in',
            }}
          >
            <Image
              src={section.image.src}
              alt={section.image.alt}
              fill
              className="object-contain object-bottom"
              priority
              style={{ filter: 'drop-shadow(0 0 80px rgba(249,115,22,0.28))' }}
            />
          </div>
        </motion.div>
      )}

      {/* ── Main content ── */}
      <div className="container relative mx-auto px-6 md:px-12 lg:px-20 pt-40 pb-20 z-10 w-full">
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-3 mb-10"
        >
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase border-brand/40 bg-brand/10 text-brand"
          >
            <Zap className="h-3 w-3" />
            Certified Experts
          </span>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase"
            style={{
              border: '1px solid rgba(255,255,255,0.07)',
              color: 'rgba(255,255,255,0.32)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
              style={{ boxShadow: '0 0 5px #34d399' }}
            />
            Available now
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={wordStagger}
          className="display leading-none mb-0"
          style={{
            fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)',
            perspective: '800px',
            maxWidth: '62%',
            letterSpacing: '-0.02em',
          }}
        >
          {leadWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordReveal}
              className="inline-block mr-[0.15em]"
              style={{ color: '#fff' }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={wordReveal}
            className="inline-block"
            style={{ color: 'var(--brand)' }}
          >
            {lastWord}
          </motion.span>
        </motion.h1>

        {/* Bottom bar: subheading + stats + CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-16 pt-8 flex flex-col md:flex-row md:items-end gap-8 md:gap-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {subheading && (
            <p
              className="leading-relaxed flex-shrink-0 text-justify"
              style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.45)',
                maxWidth: '300px',
              }}
            >
              {subheading}
            </p>
          )}

          {stats.length > 0 && (
            <div className="flex items-end gap-10 flex-shrink-0">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div
                    className="font-black tabular-nums leading-none"
                    style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#fff' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-1 text-[10px] font-bold tracking-[0.15em] uppercase"
                    style={{ color: 'rgba(255,255,255,0.28)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── CTAs with square corners and custom styles ── */}
          <div className="flex items-center gap-3 md:ml-auto flex-wrap">
            {/* Primary CTA – square corners, brand background */}
            {primaryCta && (
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="relative group">
                <div
                  className="absolute inset-0 rounded-none blur-xl opacity-60 group-hover:opacity-90 transition-opacity"
                  style={{ background: 'var(--brand)' }}
                />
                <Button
                  size="lg"
                  className="relative font-bold text-white rounded-none bg-brand hover:bg-brand-dark"
                  style={{
                    height: '52px',
                    paddingInline: '2rem',
                    fontSize: '0.9375rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            )}

            {/* Secondary CTAs (e.g., "View Work") – white bg, black text, square corners, hover animation */}
            {secondaryCtas.map((cta, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}