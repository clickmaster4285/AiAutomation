'use client';

import { motion, Variants } from 'framer-motion';
import { Zap, AlertCircle, CheckCircle, GitBranch, Shield, TrendingUp, Clock } from 'lucide-react';
import type { Section } from '@/content/type';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const iconMap: Record<string, React.ComponentType> = {
  Zap,
  AlertCircle,
  CheckCircle,
  GitBranch,
  Shield,
  TrendingUp,
  Clock,
};

function getIcon(name?: string) {
  if (!name) return null;
  const Icon = iconMap[name as keyof typeof iconMap] as any;
  return Icon ? <Icon className="h-5 w-5" /> : null;
}

export default function TextSec({ section }: { section: Section }) {
  const content =
    typeof section.content === 'string' ? [section.content] : section.content || [];

  const lead = content.find(p => !p.trim().startsWith('•')) || '';
  const bulletLines = content
    .filter(p => p.trim().startsWith('•'))
    .map(p => p.trim().slice(1).trim());

  const iconKeys = Object.keys(iconMap);
  const cardData = bulletLines.length > 0
    ? bulletLines.map((text, idx) => ({
        icon: iconKeys[idx % iconKeys.length],
        title: text.length > 48 ? text.slice(0, 48) + '…' : text,
        desc: text,
      }))
    : [
        { icon: 'Zap', title: 'Error Handling', desc: 'Graceful recovery from app hiccups and missing data.' },
        { icon: 'AlertCircle', title: 'Instant Alerts', desc: 'Failures surface immediately, not downstream.' },
        { icon: 'CheckCircle', title: 'Clean Logic', desc: 'Built for messy, real-world data variations.' },
        { icon: 'GitBranch', title: 'Efficient Design', desc: 'No wasted tasks – every step matters.' },
      ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #eef1f4 100%)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start"
        >
          <motion.div variants={fadeUp} className="lg:sticky lg:top-32">
            <div
              className="w-10 h-1 rounded-full mb-5"
              style={{ background: 'var(--brand)' }}
            />
            <h2
              className="display font-bold leading-tight"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                color: '#111',
                letterSpacing: '-0.02em',
              }}
            >
              {section.heading}
            </h2>
            <p
              className="mt-3 text-sm font-medium text-justify"
              style={{ color: 'rgba(0,0,0,0.4)', maxWidth: '280px' }}
            >
              Real‑world resilience, not just happy‑path scripting.
            </p>
          </motion.div>

          <div className="space-y-8">
            {lead && (
              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg leading-relaxed text-justify"
                style={{ color: 'rgba(0,0,0,0.7)', maxWidth: '600px' }}
              >
                {lead}
              </motion.p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cardData.map((card, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  className="group relative p-5 rounded-xl transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0,0,0,0.06)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 8px 30px rgba(249,115,22,0.12)',
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-xl border border-transparent group-hover:border-brand/40 transition-colors duration-300"
                  />
                  <div className="relative z-10 flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'rgba(249,115,22,0.06)',
                        color: 'var(--brand)',
                      }}
                    >
                      {getIcon(card.icon)}
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-sm"
                        style={{ color: '#111' }}
                      >
                        {card.title}
                      </h4>
                      <p
                        className="text-xs leading-relaxed mt-0.5 text-justify"
                        style={{ color: 'rgba(0,0,0,0.5)' }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-6 pt-4 border-t text-justify"
              style={{ borderColor: 'rgba(0,0,0,0.06)' }}
            >
              <p
                className="text-sm font-medium flex items-center gap-2"
                style={{ color: 'rgba(0,0,0,0.4)' }}
              >
                <span>⚡</span>
                <span>Built for edge cases, not just the ideal path.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}