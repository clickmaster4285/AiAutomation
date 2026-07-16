'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section, SectionItem } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';

interface FAQSecProps {
  section: Section;
}

/* ── floating bubble ── */
function Bubble({
  letter,
  size,
  fontSize,
  variant,
  style,
  delay = 0,
  duration = 5,
  yRange = 12,
  opacity = 0.4,
}: {
  letter: 'Q' | 'A';
  size: number;
  fontSize: number;
  variant: 'solid' | 'white' | 'light';
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  yRange?: number;
  opacity?: number;
}) {
  const bg =
    variant === 'solid'
      ? 'var(--brand)'
      : variant === 'white'
      ? 'rgba(255,255,255,0.85)'
      : 'rgba(255,247,237,0.85)';
  const color =
    variant === 'solid' ? '#fff' : 'var(--brand)';
  const border =
    variant === 'solid' ? 'none' : '2px solid rgba(249,115,22,0.3)';
  const tailColor =
    variant === 'solid'
      ? 'var(--brand)'
      : variant === 'white'
      ? 'rgba(255,255,255,0.85)'
      : 'rgba(255,247,237,0.85)';

  return (
    <motion.div
      animate={{ y: [0, -yRange, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute select-none"
      style={{ ...style, opacity }}
    >
      <div
        className="relative flex items-center justify-center rounded-[14px] font-black backdrop-blur-sm"
        style={{
          width: size,
          height: size,
          background: bg,
          color,
          border,
          fontSize,
          fontFamily: 'var(--font-serif, Georgia, serif)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}
      >
        {letter}
        <span
          className="absolute -bottom-[10px] left-4"
          style={{
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '0px solid transparent',
            borderTop: `10px solid ${tailColor}`,
          }}
        />
      </div>
    </motion.div>
  );
}

/* ── gear ── */
function Gear({
  size,
  style,
  delay = 0,
  reverse = false,
  opacity = 0.3,
}: {
  size: number;
  style?: React.CSSProperties;
  delay?: number;
  reverse?: boolean;
  opacity?: number;
}) {
  const strokeColor = reverse ? 'rgba(249,115,22,0.5)' : 'rgba(249,115,22,0.6)';
  const fillColor = reverse ? 'rgba(255,255,255,0.2)' : 'rgba(249,115,22,0.2)';
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute"
      style={{ ...style, opacity }}
    >
      <svg width={size} height={size} viewBox="0 0 54 54" fill="none">
        <motion.g
          style={{ originX: '27px', originY: '27px' }}
          animate={{ rotate: reverse ? -360 : 360 }}
          transition={{ duration: reverse ? 10 : 8, repeat: Infinity, ease: 'linear' }}
        >
          <path
            d="M27 18a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth="2"
          />
          <path
            d="M27 4v5M27 45v5M4 27h5M45 27h5M9.4 9.4l3.5 3.5M41.1 41.1l3.5 3.5M9.4 44.6l3.5-3.5M41.1 12.9l3.5-3.5"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </motion.g>
        <text
          x="27"
          y="32"
          textAnchor="middle"
          fontSize="13"
          fontWeight="900"
          fill={reverse ? 'rgba(249,115,22,0.6)' : 'rgba(249,115,22,0.7)'}
          fontFamily="Georgia, serif"
        >
          ?
        </text>
      </svg>
    </motion.div>
  );
}

/* ── magnifier ── */
function Magnifier({
  size,
  style,
  delay = 0,
  opacity = 0.25,
}: {
  size: number;
  style?: React.CSSProperties;
  delay?: number;
  opacity?: number;
}) {
  const stroke = 'rgba(249,115,22,0.4)';
  const innerStroke = 'rgba(249,115,22,0.2)';
  const handleStroke = 'rgba(249,115,22,0.35)';
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute"
      style={{ ...style, opacity }}
    >
      <svg width={size} height={Math.round(size * 1.18)} viewBox="0 0 44 52" fill="none">
        <circle cx="18" cy="18" r="14" stroke={stroke} strokeWidth="2.5" fill="none" />
        <circle cx="18" cy="18" r="10" stroke={innerStroke} strokeWidth="1.5" fill="rgba(249,115,22,0.05)" />
        <line x1="29" y1="29" x2="42" y2="47" stroke={handleStroke} strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

export default function FAQSec({ section }: FAQSecProps) {
  const faqItems = section.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-32 border-t border-border bg-background overflow-hidden">
      <div className="mx-auto max-w-[84vw] px-6 relative">

        {/* ── DECORATIVE ELEMENTS (absolute, right side, behind cards) ── */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 pointer-events-none hidden lg:block"
          style={{
            background: 'linear-gradient(160deg, rgba(255,247,237,0.35) 0%, rgba(255,237,213,0.15) 60%, transparent 100%)',
            // Removed maskImage so the right side is fully visible
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),' +
                'linear-gradient(to right,rgba(249,115,22,0.04) 1px,transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Floating elements – higher opacity on right side */}
          <Bubble letter="Q" size={88} fontSize={46} variant="solid" delay={0.2} duration={5}   yRange={12} opacity={0.7} style={{ top: 20,  right: 20 }} />
          <Bubble letter="A" size={96} fontSize={50} variant="white" delay={0.5} duration={6}   yRange={14} opacity={0.6} style={{ top: 150, right: 0 }} />
          <Bubble letter="Q" size={58} fontSize={28} variant="solid" delay={0.1} duration={7}   yRange={10} opacity={0.55} style={{ top: 70,  left: 10 }} />
          <Bubble letter="A" size={72} fontSize={36} variant="light" delay={0.8} duration={5.5} yRange={11} opacity={0.5} style={{ top: 260, left: 0 }} />
          <Bubble letter="Q" size={76} fontSize={38} variant="solid" delay={0.3} duration={6.5} yRange={12} opacity={0.65} style={{ bottom: 40, left: 65 }} />
          <Bubble letter="A" size={74} fontSize={38} variant="white" delay={0.6} duration={5.8} yRange={10} opacity={0.55} style={{ bottom: 20, right: 10 }} />

          <Gear size={56} delay={0}   reverse={false} opacity={0.35} style={{ top: 180, left: 80 }} />
          <Gear size={40} delay={0.4} reverse={true}  opacity={0.25} style={{ bottom: 80, right: 58 }} />

          <Magnifier size={48} delay={0.2} opacity={0.25} style={{ top: 40,  left: 90 }} />
          <Magnifier size={36} delay={0.7} opacity={0.2} style={{ bottom: 110, left: 30 }} />

          {[
            { size: 38, top: 110, left: 56,  delay: 0,   dur: 6   },
            { size: 24, top: 48,  right: 125, delay: 0.3, dur: 7   },
            { size: 20, bottom: 130, right: 88, delay: 0.6, dur: 5 },
            { size: 28, bottom: 68,  left: 132, delay: 0.1, dur: 8  },
          ].map((q, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -(q.size * 0.3), 0] }}
              transition={{ duration: q.dur, repeat: Infinity, ease: 'easeInOut', delay: q.delay }}
              className="absolute select-none font-black"
              style={{
                fontFamily: 'var(--font-serif, Georgia, serif)',
                fontSize: q.size,
                color: 'rgba(249,115,22,0.2)',
                lineHeight: 1,
                top: (q as any).top,
                bottom: (q as any).bottom,
                left: (q as any).left,
                right: (q as any).right,
              }}
            >
              ?
            </motion.span>
          ))}
        </div>

        {/* ── CONTENT: FAQ heading + cards (left aligned, z-10) ── */}
        <div className="relative z-10 max-w-4xl">
          {/* Heading */}
          {section.heading && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="mb-12"
            >
              <span className="eyebrow text-brand block mb-2">FAQ</span>
              <h2 className="display text-3xl md:text-4xl lg:text-5xl text-foreground">
                {section.heading}
              </h2>
            </motion.div>
          )}

          {/* FAQ Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-3"
          >
            {faqItems.map((item: SectionItem, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group rounded-xl border border-border bg-card/50 transition-all duration-300 hover:border-brand/30 hover:shadow-md overflow-hidden"
                  style={{
                    background: isOpen
                      ? 'var(--card)'
                      : 'var(--background)',
                  }}
                >
                  <button
                    onClick={() => toggleQuestion(idx)}
                    className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <span
                      className={`text-base md:text-lg font-medium transition-colors ${
                        isOpen
                          ? 'text-brand'
                          : 'text-foreground group-hover:text-brand'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? 'border-brand bg-brand text-white'
                          : 'border-border text-muted-foreground group-hover:border-brand group-hover:text-brand'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3 w-3" />
                      ) : (
                        <Plus className="h-3 w-3" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6">
                          <p className="text-muted-foreground leading-relaxed text-justify">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}