// components/layout/SectionWrapper.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function SectionWrapper({ 
  children, 
  className = '', 
  id,
  delay = 0 
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}