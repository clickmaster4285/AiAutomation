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
      <div>
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          <span className="eyebrow text-brand text-[11px]">Core Automation</span>
        </div>

        <h1 className="display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[0.95]">
          Stop doing things{' '}
          <span className="display-italic text-brand">machines</span>{' '}
          can do.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
          We design and deploy process automation systems that eliminate repetitive work, connect your tools, and run 24/7 so your team spends time on what actually moves the needle.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-brand/40 hover:shadow-brand/60"
          >
            Start automating <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── RIGHT COLUMN: Image (smaller, faded from bottom & left) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-lg">
          {/* Glow behind image */}
          <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-70"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)' }} />
          <div className="absolute -inset-3 rounded-2xl blur-2xl opacity-50"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)' }} />

          <motion.img
            src="/images/ai-agents.png"
            alt="Core Automation illustration"
            className="w-full h-auto rounded-2xl shadow-2xl shadow-brand/10 object-cover"
            style={{
              maskImage: 'radial-gradient(ellipse at bottom left, transparent 0%, black 30%, black 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at bottom left, transparent 0%, black 30%, black 100%)',
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'w-full aspect-[4/3] flex items-center justify-center text-5xl font-black text-brand/30';
                fallback.textContent = '⚙️';
                parent.appendChild(fallback);
              }
            }}
          />
        </div>
      </motion.div>
    </div>
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
          <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center shadow-lg shadow-gray-200/50">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <div className="relative">
              <p className="text-sm font-medium text-brand/70 uppercase tracking-[0.15em] mb-4 flex items-center justify-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse" />
                READY TO AUTOMATE?
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse delay-75" />
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                <span className="text-gray-900">Your first automation</span>
                <br />
                <span className="text-brand relative inline-block">
                  is on us.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
                </span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
                Book a free 30‑minute audit. We'll map your top workflow bottlenecks and
                show you exactly what automation would look like for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/free-automation-audit"
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
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}