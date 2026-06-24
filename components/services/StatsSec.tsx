'use client';

import { motion } from 'framer-motion';
import { Section, SectionItem } from '@/content/type';
import { fadeInUp, staggerContainer, scaleIn } from '../services/Shared/animation';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

interface StatsSectionProps {
  section: Section;
}

const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand">
      {prefix}{count}{suffix}
    </span>
  );
};

export default function StatsSec({ section }: StatsSectionProps) {
  const statsItems = section.items || [];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(249,115,22,0.03),rgba(0,0,0,0))]" />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-sm font-medium text-brand/70 tracking-widest uppercase mb-3 text-left"
          >
            Numbers that matter.
          </motion.h2>
          <motion.h3 
            variants={fadeInUp}
            className="display text-3xl md:text-4xl font-bold text-black text-left"
          >
            {section.heading || 'Measurable Results'}
          </motion.h3>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {statsItems.map((item: any, idx: number) => {
            const value = typeof item.value === 'number' ? item.value : parseInt(item.value) || 0;
            const suffix = item.suffix || '';
            const prefix = item.prefix || '';
            return (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="text-left"
              >
                <div className="mb-3">
                  <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 max-w-xs leading-relaxed text-justify">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}