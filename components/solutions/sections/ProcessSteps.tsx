// components/solutions/sections/ProcessSteps.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section, SectionHeading } from '@/components/solutions/layout/Section';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  steps: Step[];
  background?: 'paper' | 'muted' | 'light' | 'white' | 'gray-50'; // ✅ Added more options
}

export function ProcessSteps({
  title,
  subtitle,
  eyebrow = 'How it works',
  steps,
  background = 'muted',
}: ProcessStepsProps) {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-40px' });

  // ✅ Map background to valid Section bg prop
  const getBgValue = (bg: string): 'paper' | 'muted' | undefined => {
    if (bg === 'paper' || bg === 'muted') return bg as 'paper' | 'muted';
    // Map 'light', 'white', 'gray-50' to 'paper' or 'muted'
    if (bg === 'light' || bg === 'white') return 'paper';
    if (bg === 'gray-50') return 'muted';
    return 'muted'; // Default fallback
  };

  return (
    <Section bg={getBgValue(background)} pattern="grid">
      <SectionHeading title={title} subtitle={subtitle} eyebrow={eyebrow} />

      <div className="relative max-w-3xl mx-auto">
        <div
          ref={lineRef}
          className={`absolute left-8 top-2 bottom-2 w-px bg-border hidden md:block overflow-hidden`}
        >
          <div className={`line-draw h-full w-full bg-brand ${lineInView ? 'in-view' : ''}`} />
        </div>

        <div className="space-y-10 md:space-y-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex gap-6 md:gap-8 group"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-xl font-bold z-10 transition-all duration-500 group-hover:bg-brand group-hover:rotate-[360deg] group-hover:scale-110">
                {step.number}
              </div>
              <div className="flex-1 pt-3">
                <h3 className="font-serif text-xl font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}