'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './Shared/animation';
import {
  Shield,
  Lock,
  CheckCircle,
  Clock,
  Briefcase,
  Target,
  FileText,
  Calendar,
  Users,
  ArrowRight,
  ShoppingBag,
  Headphones,
  Mail,
  Package,
  Zap,
  Link2,
} from 'lucide-react';
import type { Section } from '@/content/type';

export default function TextSec({ section, bg = 'bg-white' }: { section: Section; bg?: string }) {
  const rawContent = Array.isArray(section.content) ? section.content : [section.content];
  const content = rawContent.filter((p): p is string => typeof p === 'string' && p.trim().length > 0);
  const isBlack = bg === 'bg-black';
  const heading = section.heading || '';

  const isReturnSection = content.length === 1 && /return|results|value/i.test(heading);
  const isPrivacySection = /privacy|security|hipaa|compliant/i.test(heading);
  const isAdminSection = /administrative|load|front.?desk|staff/i.test(heading) && content.length >= 2;
  const isStartSection = /start|where to start|begin/i.test(heading) && content.length >= 2;
  const isIntegrationSection = /integrations/i.test(heading) && content.length >= 1;

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${bg}`}>
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-brand/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {heading && (
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-brand" />
                <span className="text-brand text-sm font-semibold tracking-widest uppercase">Insight</span>
              </div>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
                  isBlack ? 'text-white' : 'text-gray-900'
                }`}
              >
                {heading}
              </h2>
            </motion.div>
          )}

          {isIntegrationSection && content.length >= 1 ? (
            <motion.div variants={fadeInUp} className="relative">
              <div
                className={`relative rounded-3xl p-8 md:p-12 overflow-hidden border ${
                  isBlack ? 'bg-gray-800/30 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

                <div className="flex items-center gap-3 mb-6">
                  <Link2 className="h-6 w-6 text-purple-500" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-purple-500">
                    Connected Stack
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-purple-500/30">
                    <p
                      className={`text-base md:text-lg leading-relaxed ${
                        isBlack ? 'text-white' : 'text-gray-700'
                      } font-medium`}
                    >
                      {content[0]}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: ShoppingBag, label: 'Store Platforms', desc: 'Shopify, WooCommerce, and others' },
                      { icon: Headphones, label: 'Help Desks', desc: 'Gorgias, Zendesk' },
                      { icon: Mail, label: 'Marketing', desc: 'Klaviyo, Mailchimp' },
                      { icon: Package, label: 'Fulfillment', desc: 'Inventory & shipping tools' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border ${
                          isBlack
                            ? 'bg-gray-800/40 border-gray-700'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <item.icon className="h-4 w-4 text-purple-500" />
                          <span className={`text-xs font-semibold ${isBlack ? 'text-white' : 'text-gray-900'}`}>
                            {item.label}
                          </span>
                        </div>
                        <p className={`text-xs ${isBlack ? 'text-gray-300' : 'text-gray-500'}`}>
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-purple-500/20">
                  <p
                    className={`text-sm ${isBlack ? 'text-white' : 'text-gray-400'} flex items-center gap-2`}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Built with validation and human oversight – no silent errors.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : isStartSection && content.length >= 2 ? (
            // ── Start section ──
            <motion.div variants={fadeInUp} className="relative">
              <div
                className={`relative rounded-3xl p-8 md:p-12 overflow-hidden border ${
                  isBlack ? 'bg-gray-800/30 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {content.map((para, idx) => {
                    const keyTerms = [
                      'client intake automation',
                      'document generation',
                      'deadline tracking',
                      'repeatable matter types',
                      'audit',
                      'attorneys',
                    ];
                    const highlightedPara = para.split(' ').map((word, i) => {
                      const clean = word.replace(/[.,;:!?]/g, '');
                      const shouldHighlight = keyTerms.some((term) =>
                        clean.toLowerCase().includes(term.toLowerCase())
                      );
                      return shouldHighlight ? (
                        <span
                          key={i}
                          className="bg-brand/10 text-brand/80 px-1 py-0.5 rounded font-medium"
                        >
                          {word}
                        </span>
                      ) : (
                        <span key={i}>{word} </span>
                      );
                    });

                    const isPrimary = idx === 0;

                    return (
                      <div
                        key={idx}
                        className={`relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px ${
                          isPrimary ? 'before:bg-brand' : 'before:bg-brand/30'
                        }`}
                      >
                        {isPrimary && (
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="h-5 w-5 text-brand" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-brand">
                              Start Here
                            </span>
                          </div>
                        )}
                        <p
                          className={`text-base md:text-lg leading-relaxed ${
                            isBlack ? 'text-white' : 'text-gray-800'
                          } ${isPrimary ? 'font-medium' : ''}`}
                        >
                          {highlightedPara}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
                  {[
                    { label: 'Start with intake', icon: '📋' },
                    { label: 'Add document generation', icon: '📄' },
                    { label: 'Layer in deadline tracking', icon: '📅' },
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                        isBlack
                          ? 'bg-brand/20 text-white border border-brand/30'
                          : 'bg-brand/10 text-brand/80 border border-brand/20'
                      }`}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </motion.div>

                <div className="mt-6 pt-4 border-t border-brand/20">
                  <p
                    className={`text-sm ${isBlack ? 'text-white' : 'text-gray-400'} flex items-center gap-2`}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
                    Built for law firms – handles administration, not legal judgment.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : isAdminSection && content.length >= 2 ? (
            // ── Administrative section ──
            <motion.div variants={fadeInUp} className="relative">
              <div
                className={`relative rounded-3xl p-8 md:p-12 overflow-hidden border ${
                  isBlack ? 'bg-gray-800/30 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {content.map((para, idx) => {
                    const isFirst = idx === 0;
                    const highlightTerms = ['enormous', 'administrative burden', 'repetitive', 'accurately'];
                    const highlightedPara = isFirst
                      ? para.split(' ').map((word, i) => {
                          const clean = word.replace(/[.,;:!?]/g, '');
                          const shouldHighlight = highlightTerms.some((term) =>
                            clean.toLowerCase().includes(term.toLowerCase())
                          );
                          return shouldHighlight ? (
                            <span
                              key={i}
                              className="bg-brand/10 text-brand/80 px-1 py-0.5 rounded font-medium"
                            >
                              {word}
                            </span>
                          ) : (
                            <span key={i}>{word} </span>
                          );
                        })
                      : para;

                    return (
                      <div
                        key={idx}
                        className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-brand/30"
                      >
                        {isFirst && (
                          <div className="flex items-center gap-2 mb-3">
                            <Clock className="h-5 w-5 text-brand" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-brand">
                              The Problem
                            </span>
                          </div>
                        )}
                        <p
                          className={`text-base md:text-lg leading-relaxed ${
                            isBlack ? 'text-white' : 'text-gray-700'
                          } ${isFirst ? 'font-medium' : ''}`}
                        >
                          {isFirst ? <span>{highlightedPara}</span> : para}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
                  {[
                    { label: '80% of admin work is repetitive', icon: '🔄' },
                    { label: '2+ hours saved per staff/day', icon: '⏱️' },
                    { label: 'No-shows reduced by 40%', icon: '📉' },
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                        isBlack
                          ? 'bg-gray-700 text-white'
                          : 'bg-brand/10 text-gray-700 border border-brand/20'
                      }`}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </motion.div>
                <div className="mt-6 pt-4 border-t border-brand/20">
                  <p
                    className={`text-sm ${isBlack ? 'text-white' : 'text-gray-400'} flex items-center gap-2`}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
                    Built with validation and human oversight – no silent errors.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : isPrivacySection && content.length >= 2 ? (
            // ── Privacy section ──
            <motion.div variants={fadeInUp} className="relative">
              <div
                className={`relative rounded-3xl p-8 md:p-12 overflow-hidden border ${
                  isBlack ? 'bg-gray-800/30 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-semibold tracking-widest uppercase ${
                        isBlack ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      Privacy & Security
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {content.map((para, idx) => {
                    const isHighlight =
                      para.includes('access controls') || para.includes('privacy as a first principle');
                    return (
                      <div
                        key={idx}
                        className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-500/30"
                      >
                        <p
                          className={`text-base md:text-lg leading-relaxed ${
                            isBlack ? 'text-white' : 'text-gray-600'
                          } ${isHighlight ? 'font-medium' : ''}`}
                        >
                          {isHighlight ? (
                            <span className="bg-blue-50/60 px-1 py-0.5 rounded">{para}</span>
                          ) : (
                            para
                          )}
                        </p>
                        {isHighlight && (
                          <span className="absolute -left-2.5 top-0 w-1 h-6 bg-blue-500 rounded-full" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-blue-500/20">
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p
                        className={`text-sm font-medium ${isBlack ? 'text-white' : 'text-gray-700'}`}
                      >
                        Formal regulatory compliance (e.g., HIPAA) is a shared responsibility.
                      </p>
                      <p
                        className={`text-sm ${isBlack ? 'text-white' : 'text-gray-400'} mt-1`}
                      >
                        We build with privacy and security in mind and work within your compliance requirements.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : isReturnSection && content.length === 1 ? (
            // ── Return / Results section ──
            <motion.div variants={fadeInUp} className="relative">
              <div
                className={`relative rounded-3xl p-8 md:p-12 overflow-hidden ${
                  isBlack ? 'bg-gray-800/30 border-gray-700' : 'bg-brand/10 border-brand/20'
                } border`}
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
                <p
                  className={`text-lg md:text-xl leading-relaxed ${isBlack ? 'text-white' : 'text-gray-700'}`}
                >
                  {content[0].split('—').map((part, idx) => {
                    const isMetric = /fewer no-shows|more calls answered|hours saved|concrete|measurable/i.test(
                      part
                    );
                    return (
                      <span key={idx}>
                        {idx > 0 && <span className="text-brand font-bold mx-2">—</span>}
                        {isMetric ? (
                          <span className="bg-brand/10 text-brand/80 px-1.5 py-0.5 rounded font-semibold">
                            {part.trim()}
                          </span>
                        ) : (
                          <span>{part}</span>
                        )}
                      </span>
                    );
                  })}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    { label: 'Fewer no-shows', icon: '📉' },
                    { label: 'More calls answered', icon: '📞' },
                    { label: 'Hours saved', icon: '⏱️' },
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                        isBlack
                          ? 'bg-gray-700 text-white'
                          : 'bg-white text-gray-700 shadow-sm border border-gray-200'
                      }`}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-brand/20">
                  <p
                    className={`text-sm ${isBlack ? 'text-white' : 'text-gray-400'} flex items-center gap-2`}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
                    Built with validation and human oversight – no silent errors.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            // ── Default multi‑paragraph layout ──
            <div
              className={`grid grid-cols-1 ${content.length >= 3 ? 'lg:grid-cols-2' : ''} gap-8 lg:gap-16`}
            >
              {content.map((para, idx) => {
                const isHighlight =
                  para.includes('validation') ||
                  para.includes('practical error rate') ||
                  para.includes('human-in-the-loop') ||
                  para.includes('silent errors');
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className={`relative ${content.length < 3 && idx === 0 ? 'lg:col-span-2' : ''}`}
                  >
                    <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-brand/30">
                      <p
                        className={`text-base md:text-lg leading-relaxed ${
                          isBlack ? 'text-white' : 'text-gray-600'
                        } ${isHighlight ? 'font-medium' : ''}`}
                      >
                        {isHighlight ? (
                          <span className="bg-brand/5 px-1 py-0.5 rounded">{para}</span>
                        ) : (
                          para
                        )}
                      </p>
                      {isHighlight && (
                        <span className="absolute -left-2.5 top-0 w-1 h-6 bg-brand" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {!isReturnSection && !isPrivacySection && !isAdminSection && !isStartSection && !isIntegrationSection && (
            <motion.div variants={fadeInUp} className="mt-12 pt-6 border-t border-brand/20">
              <p
                className={`text-sm ${isBlack ? 'text-white' : 'text-gray-400'} flex items-center gap-2`}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand" />
                Built with validation and human oversight – no silent errors.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}