// components/solutions/sections/variants/ProblemsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { XCircle, AlertCircle, Clock, Users, FileText, Building2, ShoppingBag, GraduationCap } from 'lucide-react';

interface ProblemsSectionProps {
  title: string;
  content: string[];
}

export function ProblemsSection({ title, content }: ProblemsSectionProps) {
  const normalizedContent = (content || []).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );
  const problemItems = normalizedContent.filter((line) => line.includes('**'));
  const introText = normalizedContent.find((line) => !line.includes('**') && line.trim());

  const iconMap = {
    'Document collection chase': FileText,
    'Manual data entry': AlertCircle,
    'Deadline and status tracking': Clock,
    'Repetitive client questions': Users,
    'Onboarding friction': XCircle,
    'Lead and bid response lag': Building2,
    'Document and photo chaos': FileText,
    'Invoice and payment tracking': XCircle,
    'Client update burden': Users,
    'Scheduling coordination': Clock,
    'Support volume tied to sales': Users,
    'Abandoned cart revenue loss': XCircle,
    'Order exception handling': AlertCircle,
    'Review management neglect': FileText,
    'Marketing production grind': Clock,
    'Inquiry follow-up gaps': Users,
    'Enrollment paperwork': FileText,
    'Repetitive questions': AlertCircle,
    'Scheduling complexity': Clock,
    'Reporting burden': XCircle,
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gray-900 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-400/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              The Challenges
            </div>
            
            <h2 className="display text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]">
              {title}
            </h2>

            {introText && (
              <p className="text-lg text-gray-300 leading-relaxed">
                {introText}
              </p>
            )}
          </motion.div>

          {/* Right Content - Problem Cards with increased text size */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {problemItems.map((item, idx) => {
              const cleanItem = item.replace(/\*\*/g, '').trim();
              const parts = cleanItem.split('.');
              const title = parts[0]?.trim() || '';
              const description = parts.slice(1).join('.').trim() || '';
              
              const IconKey = Object.keys(iconMap).find(key => 
                title.toLowerCase().includes(key.toLowerCase())
              ) as keyof typeof iconMap;
              const Icon = IconKey ? iconMap[IconKey] : AlertCircle;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand/20 flex items-center justify-center group-hover:bg-brand/30 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-brand" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold text-white mb-2">{title}</h4>
                      <p className="text-base md:text-lg text-gray-300 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;