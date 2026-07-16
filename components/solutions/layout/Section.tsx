// components/solutions/layout/Section.tsx
'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: 'paper' | 'ink' | 'muted' | 'gradient' | 'dark' | 'black'; // ✅ Added dark/black
  pattern?: 'dots' | 'blob' | 'grid' | 'none';
}

const bgMap = {
  paper: 'bg-paper text-ink',
  ink: 'bg-ink text-paper',
  muted: 'bg-secondary text-ink',
  gradient: 'bg-gradient-to-b from-paper via-secondary to-paper text-ink',
  dark: 'bg-black text-white', // ✅ Added dark
  black: 'bg-black text-white', // ✅ Added black
};

// Every section on every solutions page uses this shell.
// Padding/width match the landing-page Hero exactly:
// pt-8 pb-12 md:pt-16 md:pb-20 · mx-auto max-w-[84vw] px-6
export function Section({
  id,
  children,
  className,
  bg = 'paper',
  pattern = 'none',
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative isolate overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20',
        bgMap[bg],
        className
      )}
    >
      {pattern === 'dots' && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      )}
      {pattern === 'grid' && (
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-[0.07]" />
      )}
      {pattern === 'blob' && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="blob-gradient absolute inset-0" />
          <div className="faq-float absolute -top-16 right-[6%] w-72 h-72 rounded-full bg-brand/10 blur-3xl" />
          <div className="faq-float-slow absolute -bottom-20 left-[4%] w-96 h-96 rounded-full bg-brand/10 blur-3xl" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-[84vw] px-6">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2 text-brand mb-4">
      <span className="w-6 h-px bg-brand" />
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'center',
  className = '', // ✅ Added className prop
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'center' | 'left';
  className?: string; // ✅ Added className
}) {
  return (
    <div className={cn(
      'mb-12 md:mb-16',
      align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl',
      className
    )}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="display text-3xl md:text-5xl text-ink">{title}</h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}