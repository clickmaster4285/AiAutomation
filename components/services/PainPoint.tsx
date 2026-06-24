'use client';

import { motion } from 'framer-motion';
import { Section } from '@/content/type';
import { fadeInUp, fadeInRight, staggerContainer } from '../services/Shared/animation';
import { Clock, DollarSign, TrendingDown } from 'lucide-react';

interface PainPointSecProps {
  section: Section;
}

export default function PainPointSec({ section }: PainPointSecProps) {
  const items = section.items || [];

  // Extract stats (first two items) and problems (remaining)
  const stats = items.slice(0, 2).map((item: any) => ({
    label: item.title || '',
    value: item.value || '',
    icon: item.icon === 'Clock' ? Clock : DollarSign,
  }));

  const problems = items.slice(2).map((item: any) => item.title) || ['Manual Tasks', 'Slow Operations'];

  const data = {
    title: section.heading || 'Stop doing work that AI can do.',
    description: section.subheading || 'Every hour your team spends on manual, repetitive tasks is an hour not spent on strategy, relationships, and growth.',
  };

  return (
    <section className="py-20 md:py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight text-left"
            >
              {data.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 leading-relaxed mb-8 text-left text-justify"
            >
              {data.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-6 md:gap-8 mb-8"
            >
              {stats.map((stat: any, idx: number) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 tracking-wider uppercase">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Problem Tags */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3"
            >
              {problems.map((problem: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300 bg-white/5"
                >
                  {problem}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="relative"
          >
            <motion.div
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-800/50 p-8 md:p-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-brand mb-2">
                    {stats[0]?.value || '40+'}
                  </div>
                  <p className="text-lg text-gray-400">
                    Hours of manual work <br />
                    <span className="text-gray-500">wasted every week</span>
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <TrendingDown className="h-4 w-4 text-brand" />
                    <span>Manual tasks are costing you</span>
                    <span className="text-white font-medium">{stats[1]?.value || '$180K'}</span>
                    <span>annually</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-2xl px-4 py-3 border border-gray-200 flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                <span className="text-sm font-medium text-black">Inefficiency Alert</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}