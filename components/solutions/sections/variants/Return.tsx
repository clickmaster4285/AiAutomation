// components/solutions/sections/variants/ReturnSection.tsx
'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Clock, Users, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

interface ReturnSectionProps {
  title: string;
  content: string[];
  stats?: Array<{ label: string; value: string }>;
}

export function ReturnSection({ title, content, stats }: ReturnSectionProps) {
  const paragraphs = (content || []).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );

  const defaultMetrics = [
    { icon: Clock, label: 'Time Saved', value: '20+', unit: 'hours/week' },
    { icon: BarChart3, label: 'Efficiency', value: '85%', unit: 'faster' },
    { icon: TrendingUp, label: 'Productivity', value: '3x', unit: 'increase' },
    { icon: DollarSign, label: 'ROI', value: '500%', unit: 'first year' },
  ];

  const metrics = stats ? stats.map((stat, index) => {
    const icons = [Clock, BarChart3, TrendingUp, DollarSign];
    const labels = ['Time Saved', 'Efficiency', 'Productivity', 'ROI'];
    const units = ['hours/week', 'faster', 'increase', 'first year'];
    
    return {
      icon: icons[index % icons.length],
      label: stat.label || labels[index % labels.length],
      value: stat.value,
      unit: units[index % units.length],
    };
  }) : defaultMetrics;

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-400/10 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        {/* Orange glow orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            <span className="w-8 h-px bg-brand" />
            Measurable Results
            <span className="w-8 h-px bg-brand" />
          </div>
          <h2 className="display text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
            {title}
          </h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mx-auto mb-3">
                <metric.icon className="h-6 w-6 text-brand" />
              </div>
              <div className="text-3xl font-bold text-brand">{metric.value}</div>
              <div className="text-sm font-medium text-white">{metric.label}</div>
              <div className="text-xs text-gray-400">{metric.unit}</div>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-4">
          {paragraphs.map((paragraph, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed text-center"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReturnSection;