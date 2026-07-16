'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, TrendingUp, DollarSign, HeadphonesIcon, Package, FileText } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Sales Automation',
    slug: 'sales-automation',
    description:
      'From lead capture to closed deal automate follow-ups, CRM updates, proposal generation, and pipeline reporting so your sales team focuses on selling.',
    outcomes: ['Auto lead routing & scoring', 'Follow-up sequences', 'CRM data hygiene'],
    color: 'from-blue-50 to-transparent',
  },
  {
    icon: Users,
    title: 'Marketing Automation',
    slug: 'marketing-automation',
    description:
      'Segment audiences, trigger personalized email sequences, sync ad audiences, and auto-report on campaign performance all without manual effort.',
    outcomes: ['Email & SMS sequences', 'Audience sync to ad platforms', 'Campaign performance reports'],
    color: 'from-purple-50 to-transparent',
  },
  {
    icon: DollarSign,
    title: 'Finance & Billing Automation',
    slug: 'finance-billing-automation',
    description:
      'Automate invoicing, payment reconciliation, expense approvals, and financial reporting across your accounting stack.',
    outcomes: ['Auto invoice generation', 'Payment reconciliation', 'Expense approval flows'],
    color: 'from-green-50 to-transparent',
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer Support Automation',
    slug: 'customer-support-automation',
    description:
      'Route tickets intelligently, auto-resolve common issues, sync your helpdesk with your CRM, and generate CSAT reports automatically.',
    outcomes: ['Smart ticket routing', 'Auto-resolve common issues', 'Helpdesk ↔ CRM sync'],
    color: 'from-orange-50 to-transparent',
  },
  {
    icon: Package,
    title: 'Operations Automation',
    slug: 'operations-automation',
    description:
      'Streamline inventory updates, vendor communications, project status updates, and inter-team handoffs without anyone manually chasing anyone.',
    outcomes: ['Inventory sync', 'Vendor notification flows', 'Project status automation'],
    color: 'from-red-50 to-transparent',
  },
  {
    icon: FileText,
    title: 'HR & Onboarding Automation',
    slug: 'hr-onboarding-automation',
    description:
      'Automate new hire onboarding checklists, equipment provisioning, tool access, and HR document collection so every new starter has a great first day.',
    outcomes: ['Onboarding task automation', 'Tool access provisioning', 'Document collection flows'],
    color: 'from-teal-50 to-transparent',
  },
];

const stats = [
  { value: '6', label: 'Business functions covered' },
  { value: '40%', label: 'Avg. operational cost saved' },
  { value: '2 weeks', label: 'Avg. time to first automation live' },
  { value: '500+', label: 'Businesses automated' },
];

const howItWorks = [
  {
    title: 'Pick your function',
    desc: 'Tell us which part of your business is eating the most time. Sales, marketing, ops, finance we start where the pain is biggest.',
  },
  {
    title: 'Map the process',
    desc: 'We sit with your team and document every step, decision, and tool involved. The audit takes 1–2 sessions and always reveals more than expected.',
  },
  {
    title: 'Build & integrate',
    desc: 'We build the automation in your existing stack no ripping and replacing. Make, Zapier, n8n, or custom code depending on what fits.',
  },
  {
    title: 'Monitor & scale',
    desc: 'After launch, we monitor, tune, and hand over full documentation. Most clients add a second function within 60 days.',
  },
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

export default function AutomationByFunctionClient() {
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
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(249,115,22,0.12),transparent)]" />

  <div className="relative max-w-[84vw] px-6 mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* ── LEFT COLUMN: Text ── */}
      <div>
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-orange-800/60 bg-orange-950/30">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          <span className="eyebrow text-brand text-[11px]">Automation by Functions</span>
        </div>

        <h1 className="display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[0.95]">
          Automate the work,<br />
          <span className="display-italic text-brand">not the people.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
          Every department in your business has repetitive, automatable work. We build automation tailored to how your Sales, Marketing, Finance, HR, and Operations teams actually operate so they can do more with less.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-black text-white px-8 py-4 rounded-full font-semibold text-sm transition-colors shadow-lg shadow-brand/30 hover:shadow-black/30"
          >
            Choose your function <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── RIGHT COLUMN: Image (big, right edge faded) ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-5xl">
          {/* Glow behind image */}
          <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-70"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)' }} />
          <div className="absolute -inset-4 rounded-2xl blur-2xl opacity-50"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)' }} />

          <motion.img
            src="/images/mini.png"
            alt="Automation by Function illustration"
            className="w-full h-auto rounded-2xl shadow-2xl shadow-brand/10 object-cover"
            style={{
              maskImage: 'linear-gradient(to left, transparent 0%, black 25%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 25%, black 100%)',
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
      {/* ── STATS ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="border-y border-gray-100 bg-gray-50"
      >
        <div className="max-w-[84vw] px-6 mx-auto py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="flex flex-col gap-1">
                <span className="text-4xl font-bold text-brand font-sans">{s.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SERVICES ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="py-24 bg-white"
      >
        <div className="max-w-[84vw] px-6 mx-auto">
          <motion.div variants={fadeUp} className="mb-14">
            <p className="eyebrow text-brand text-[11px] mb-3">By department</p>
            <h2 className="display text-4xl md:text-5xl text-gray-900">
              Pick your function
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={i} variants={cardVariants}>
                  <Link
                    href={`/services/automation-by-function/${svc.slug}`}
                    className="group relative flex flex-col p-7 border border-gray-200 rounded-2xl hover:border-brand/40 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 bg-white overflow-hidden h-full"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative">
                      <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors">
                        <Icon className="h-5 w-5 text-brand group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                        {svc.description}
                      </p>

                      <ul className="space-y-1.5">
                        {svc.outcomes.map((o, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand flex-shrink-0" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

    {/* ── HOW IT WORKS / THE PROCESS ── */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  variants={staggerContainer}
  className="py-24 bg-gray-950 text-white relative overflow-hidden"
>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_0%_50%,rgba(249,115,22,0.08),transparent)]" />
  <div className="relative max-w-[84vw] px-6 mx-auto">
    <motion.div variants={fadeUp} className="mb-14">
      <p className="eyebrow text-brand text-[11px] mb-3">The Process</p>
      <h2 className="display text-4xl md:text-5xl text-white">
        From spreadsheet chaos<br />
        <span className="display-italic text-brand">to automated calm.</span>
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-px bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
      {howItWorks.map((step, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          custom={i}
          whileHover={{
            scale: 1.02,
            backgroundColor: 'rgba(249,115,22,0.10)',
            borderColor: 'var(--brand)',
            transition: { duration: 0.2, ease: 'easeInOut' },
          }}
          className="bg-gray-950 p-10 flex flex-col gap-4 border border-transparent rounded-lg transition-all duration-200 cursor-default"
        >
          <motion.span
            whileHover={{
              color: 'var(--brand)',
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="text-5xl font-bold text-gray-700 font-sans transition-colors duration-200"
          >
            {String(i + 1).padStart(2, '0')}
          </motion.span>
          <h3 className="text-xl font-semibold text-white group-hover:text-brand transition-colors duration-200">
            {step.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
      {/* ── CTA ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="py-24 relative overflow-hidden bg-gray-100"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(249,115,22,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-[84vw] px-6 mx-auto">
          <div className="relative bg-white shadow-xl shadow-gray-200/60 border border-gray-200/60 rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <div className="relative">
              <p className="text-sm font-mono text-brand/70 uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse" />
                START WITH ONE FUNCTION
                <span className="inline-block w-2 h-2 rounded-full bg-brand animate-pulse delay-75" />
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                <span className="text-gray-900">Free process audit.</span>
                <br />
                <span className="text-brand relative inline-block">
                  Zero obligation.
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
                </span>
              </h2>

              <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed mb-10">
                In 30 minutes we'll map your biggest manual bottlenecks and show you what automation would look like in your specific stack.
              </p>

              <Link
                href="/free-automation-audit"
                className="group relative inline-flex items-center gap-3 bg-brand hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:scale-[1.02]"
              >
                <span>Book your free audit</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}