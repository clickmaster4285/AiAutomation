'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, RefreshCw, GitMerge, Database, Clock, BarChart3 } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  slug: string;
  description: string;
  outcomes: string[];
}

const services: Service[] = [
  {
    icon: RefreshCw,
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    description:
      'Map, streamline, and automate multi-step business processes across your tools. From lead routing to invoice approval every repetitive flow becomes hands-free.',
    outcomes: ['Eliminate manual handoffs', 'Reduce process time by 80%+', 'Zero-error execution'],
  },
  {
    icon: Database,
    title: 'Data Sync & Integration',
    slug: 'data-sync-integration',
    description:
      'Connect your CRM, ERP, databases, and SaaS stack into a single source of truth. Real-time sync means your teams always work from accurate, up-to-date data.',
    outcomes: ['Bi-directional sync', 'Custom field mapping', 'Conflict resolution logic'],
  },
  {
    icon: GitMerge,
    title: 'API & Systems Integration',
    slug: 'api-systems-integration',
    description:
      'Bridge any two platforms even ones that don\'t have native integrations. We build custom middleware, webhooks, and REST/GraphQL connectors that just work.',
    outcomes: ['Custom API connectors', 'Webhook pipelines', 'Error handling & retries'],
  },
  {
    icon: Clock,
    title: 'Scheduled & Trigger Automations',
    slug: 'scheduled-trigger-automations',
    description:
      'Set it and forget it. Automate recurring tasks on a schedule or fire them based on real-world events a form submission, a payment, a status change.',
    outcomes: ['Cron-based scheduling', 'Event-driven triggers', 'Conditional branching'],
  },
  {
    icon: BarChart3,
    title: 'Reporting Automation',
    slug: 'reporting-automation',
    description:
      'Stop copy-pasting data into spreadsheets. Automated reports land in your inbox (or Slack, or dashboard) exactly when you need them, built from live data.',
    outcomes: ['Automated KPI reports', 'Multi-source aggregation', 'Custom delivery schedule'],
  },
  {
    icon: Zap,
    title: 'No-Code / Low-Code Automation',
    slug: 'no-code-low-code-automation',
    description:
      'Using Make, Zapier, n8n, or Power Automate we build production-grade automation systems on the platforms your team can actually maintain.',
    outcomes: ['Make, Zapier, n8n', 'Handover & documentation', 'Team training included'],
  },
];

const stats = [
  { value: '80%', label: 'Avg. time saved per process' },
  { value: '3×', label: 'Faster execution vs manual' },
  { value: '500+', label: 'Automations deployed' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const process = [
  { step: 'Audit', desc: 'We map your current workflows and identify the highest-leverage automation opportunities.' },
  { step: 'Design', desc: 'We architect the automation logic triggers, conditions, error paths, and integrations.' },
  { step: 'Build', desc: 'Our team builds, tests, and stress-tests every flow before it touches your live data.' },
  { step: 'Launch', desc: 'We deploy, monitor for 30 days, and hand over full documentation your team can use.' },
];

// ── Animations ──
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function CoreAutomationClient() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* ── HERO ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="relative pt-32 pb-24 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(249,115,22,0.08),transparent)]" />

        <div className="relative max-w-[84vw] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ── LEFT COLUMN: Text ── */}
            <motion.div variants={fadeInLeft}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                <span className="eyebrow text-brand text-[11px]">AI Strategy & Development</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[0.95]"
              >
                AI Strategy &{' '}
                <span className="display-italic text-brand">Development</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10"
              >
                From strategy to execution – we help you plan, build, and deploy AI solutions that drive real business value.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-brand/40 hover:shadow-brand/60"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white px-6 py-4 rounded-full font-medium text-sm transition-colors border border-gray-700 hover:border-gray-500"
                >
                  View All Solutions
                </Link>
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN: Image ── */}
            <motion.div
              variants={fadeInRight}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute -inset-6 rounded-3xl blur-3xl opacity-70"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)' }} 
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -inset-3 rounded-2xl blur-2xl opacity-50"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)' }} 
                />

                <motion.img
                  src="/images/strategy.png"
                  alt="AI Strategy illustration"
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-brand/10 object-cover"
                  style={{
                    maskImage: 'radial-gradient(ellipse at bottom left, transparent 0%, black 30%, black 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at bottom left, transparent 0%, black 30%, black 100%)',
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── AI STRATEGY & ADVISORY SECTION ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="py-24 bg-white"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              >
                <span className="w-8 h-px bg-brand" />
                Strategy & Advisory
              </motion.span>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Strategy that <span className="text-brand">ships</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed mb-8"
              >
                Opportunity audits, roadmaps, and implementationnot just PowerPoint decks.
              </motion.p>

              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4 mb-8"
              >
                {[
                  'AI readiness assessment',
                  'Use case identification & prioritization',
                  'Data strategy & infrastructure review',
                  'Implementation roadmap & resource planning',
                  'ROI modeling & success metrics',
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeIn} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInRight}
              className="relative"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -inset-4 bg-gradient-to-r from-brand/5 to-orange-400/5 rounded-3xl blur-2xl" 
              />
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center"
                  >
                    <BarChart3 className="h-6 w-6 text-brand" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-gray-900">AI Strategy Workshop</h3>
                    <p className="text-sm text-gray-500">2-day intensive</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Identify 20+ automation opportunities',
                    'Prioritize by impact & feasibility',
                    'Build your AI roadmap',
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── CUSTOM AI DEVELOPMENT SECTION ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="py-24 bg-muted"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={fadeInLeft}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute -inset-4 bg-gradient-to-r from-brand/5 to-orange-400/5 rounded-3xl blur-2xl" 
                />
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative bg-white rounded-2xl p-8 border border-gray-200"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center"
                    >
                      <Zap className="h-6 w-6 text-brand" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-gray-900">Custom AI Development</h3>
                      <p className="text-sm text-gray-500">From prototype to production</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Custom AI agents & assistants',
                      'LLM integration & fine-tuning',
                      'RAG (Retrieval Augmented Generation)',
                      'Prompt engineering & optimization',
                      'Production deployment & monitoring',
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInRight}
              className="order-1 lg:order-2"
            >
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4"
              >
                <span className="w-8 h-px bg-brand" />
                Custom Development
              </motion.span>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Custom AI solutions on proven models with{' '}
                <span className="text-brand">honest scoping</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed mb-8"
              >
                We build production-ready AI solutions using the best models for your use casewith transparent pricing and realistic timelines.
              </motion.p>

              <motion.ul 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4 mb-8"
              >
                {[
                  'No overpromisingwe tell you what\'s actually possible',
                  'Start with a prototype, scale to production',
                  'You own the IPwe don\'t lock you in',
                  'Full documentation & knowledge transfer',
                ].map((item, index) => (
                  <motion.li key={index} variants={fadeIn} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── SERVICES GRID ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="py-24 bg-white"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Our Services
              <span className="w-8 h-px bg-brand" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI & Automation{' '}
              <span className="text-brand">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end AI and automation services to transform your business operations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-brand/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand/5"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/[0.02] to-orange-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors"
                    >
                      <Icon className="h-6 w-6 text-brand" />
                    </motion.div>

                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 + 0.1 }}
                      className="text-xl font-bold text-gray-900 mb-3"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 + 0.2 }}
                      className="text-gray-600 text-sm leading-relaxed mb-4"
                    >
                      {service.description}
                    </motion.p>

                    <motion.ul 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                      className="space-y-2 mb-6"
                    >
                      {service.outcomes.map((outcome, idx) => (
                        <motion.li 
                          key={idx} 
                          variants={fadeIn}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="h-4 w-4 text-brand flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* Learn More button removed as requested */}
                  </div>

                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 + 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/30 to-transparent origin-left"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ── STATS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="py-16 bg-muted border-y border-gray-200"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                className="text-center"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-brand mb-1"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── PROCESS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="py-24 bg-white"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
              <span className="w-8 h-px bg-brand" />
              Our Process
              <span className="w-8 h-px bg-brand" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From <span className="text-brand">Audit</span> to{' '}
              <span className="text-brand">Launch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A transparent, proven process that delivers results.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                className="relative"
              >
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-2xl font-bold text-brand">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.step}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 origin-left"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brand" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="py-24 relative overflow-hidden bg-muted"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(249,115,22,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-[84vw] px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center shadow-lg shadow-gray-200/50"
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent origin-center"
            />

            <div className="relative">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm font-medium text-brand/70 uppercase tracking-[0.15em] mb-4 flex items-center justify-center gap-3"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse" />
                READY TO BUILD?
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse delay-75" />
              </motion.p>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              >
                <span className="text-gray-900">Ready to build your</span>
                <br />
                <span className="text-brand relative inline-block">
                  AI solution?
                  <motion.span 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand/60 to-transparent origin-left"
                  />
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
              >
                Book a free consultation. We'll assess your needs and show you exactly 
                how AI can transform your business.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 bg-brand hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-[1.02]"
                >
                  <span>Book your free audit</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-gray-200 hover:border-gray-300 px-6 py-3 rounded-full"
                >
                  Talk to an expert
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}