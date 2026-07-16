// components/sections/PlatformComparison.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Section, SectionHeading } from '@/components/solutions/layout/Section';

interface PlatformComparisonProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  bestFor: string[];
  considerAlternatives: string[];
}

export function PlatformComparison({
  title,
  subtitle,
  eyebrow = 'Fit check',
  bestFor,
  considerAlternatives,
}: PlatformComparisonProps) {
  return (
    <Section bg="paper" pattern="dots">
      <SectionHeading title={title} subtitle={subtitle} eyebrow={eyebrow} />

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 rounded-2xl border border-brand/30 bg-paper shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <div className="absolute top-0 left-8 -translate-y-1/2 px-3 py-1 rounded-full bg-brand text-white text-xs font-semibold tracking-wide">
            Best For
          </div>
          <div className="p-2 bg-brand/10 rounded-lg w-fit mb-4 mt-2">
            <CheckCircle2 className="h-6 w-6 text-brand" />
          </div>
          <ul className="space-y-3">
            {bestFor.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 rounded-2xl border border-border bg-secondary/40 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="p-2 bg-ink/5 rounded-lg w-fit mb-4">
            <XCircle className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="eyebrow text-muted-foreground mb-4">Consider Alternatives If</h3>
          <ul className="space-y-3">
            {considerAlternatives.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="flex items-start gap-3"
              >
                <XCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}