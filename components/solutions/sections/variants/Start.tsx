// components/solutions/sections/variants/StartSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface StartSectionProps {
  title: string;
  content: string[];
}

export function StartSection({ title, content }: StartSectionProps) {
  const paragraphs = (content || []).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-orange-50/90 via-white/80 to-gray-50/95">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-200/20" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Where to Begin
            </div>
            
            <h2 className="display text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-[1.05]">
              {title}
            </h2>

            <div className="space-y-6">
              {paragraphs.map((paragraph, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 text-brand" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">{paragraph}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual - Professional Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative space-y-4">
              {[
                { icon: Target, label: 'Identify', desc: 'Find your highest-return workflow', color: 'from-brand/20 to-orange-400/20' },
                { icon: TrendingUp, label: 'Automate', desc: 'Build and deploy the automation', color: 'from-brand/20 to-orange-400/20' },
                { icon: Sparkles, label: 'Optimize', desc: 'Monitor, refine, and expand', color: 'from-brand/20 to-orange-400/20' },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.3 }}
                  className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{step.label}</h4>
                      <p className="text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StartSection;