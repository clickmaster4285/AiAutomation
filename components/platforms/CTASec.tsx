'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Section } from '@/content/type';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function CTASec({ section }: { section: Section }) {
  const cta = section.cta;

  return (
    <section
      className="relative py-24"
      style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #111 0%, #0e0e0e 100%)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div
            className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 0% 0%, rgba(249,115,22,0.15) 0%, transparent 65%)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 100% 100%, rgba(249,115,22,0.1) 0%, transparent 65%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10">
            {section.heading && (
              <motion.h2
                variants={fadeUp}
                className="display font-bold mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: '#fff', lineHeight: 1.2 }}
              >
                {section.heading}
              </motion.h2>
            )}

            {section.subheading && (
              <motion.p
                variants={fadeUp}
                className="mb-10 mx-auto text-justify"
                style={{
                  maxWidth: '480px',
                  fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.45)',
                  lineHeight: 1.7,
                }}
              >
                {section.subheading}
              </motion.p>
            )}

            {cta && (
              <motion.div
                variants={fadeUp}
                className="inline-block"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative group">
                  <div
                    className="absolute inset-0 rounded-full blur-2xl transition-all group-hover:blur-3xl"
                    style={{ background: 'rgba(249,115,22,0.35)' }}
                  />
                  <Button
                    size="lg"
                    className="relative rounded-full font-semibold text-white bg-brand hover:bg-brand-dark"
                    style={{
                      boxShadow: '0 0 0 1px rgba(249,115,22,0.6), 0 4px 24px rgba(249,115,22,0.3)',
                      fontSize: '1rem',
                      height: '56px',
                      paddingInline: '2.5rem',
                    }}
                  >
                    {cta.text}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            )}

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm text-justify"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              Free · No commitment · Results in 48 hrs
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
