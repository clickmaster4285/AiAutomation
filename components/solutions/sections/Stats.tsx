// components/sections/StatsSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/solutions/layout/Section';

interface StatsSectionProps {
  title?: string;
  eyebrow?: string;
  stats: Array<{ value: string; label: string }>;
  background?: 'paper' | 'ink';
}

function CountUp({ value, inView }: { value: string; inView: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return <>{match ? display : ''}{suffix}</>;
}

export function StatsSection({ title, eyebrow, stats, background = 'ink' }: StatsSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Section bg={background} pattern="blob">
      {title && (
        <div className="text-center mb-12">
          {eyebrow && <span className="eyebrow text-brand">{eyebrow}</span>}
          <h2 className="display text-3xl md:text-5xl mt-2">{title}</h2>
        </div>
      )}

      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center border-l border-current/10 first:border-l-0"
          >
            <div className="display text-4xl md:text-6xl text-brand">
              <CountUp value={stat.value} inView={inView} />
            </div>
            <div className="eyebrow mt-2 opacity-70">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}