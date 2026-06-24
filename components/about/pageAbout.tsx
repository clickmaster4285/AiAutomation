'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/components/services/Shared/animation';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Code,
  Shield,
  BookOpen,
  BarChart,
  TrendingUp,
  Star,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Script from 'next/script';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ====== SCHEMA MARKUP ====== */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Clickmasters',
            url: 'https://clickmasters.io',
            logo: 'https://clickmasters.io/logo.png',
            description:
              'Clickmasters is a US AI automation agency that builds production AI agents and workflow automation businesses actually own.',
            address: { '@type': 'PostalAddress', addressCountry: 'US' },
            contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', email: 'hello@clickmasters.io' },
          }),
        }}
      />
      <Script
        id="aboutpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Clickmasters | AI Automation Agency',
            description: 'Clickmasters is a US AI automation agency that builds production AI agents and workflow automation businesses actually own.',
            url: 'https://clickmasters.io/about',
            mainEntity: { '@type': 'Organization', name: 'Clickmasters' },
          }),
        }}
      />
      <Script
        id="person-schema-0"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Amjad Khan',
            jobTitle: 'Founder & CEO',
            description: 'Founder of Clickmasters Digital Marketing Agency, specializing in AI automation and digital growth strategies.',
            worksFor: { '@type': 'Organization', name: 'Clickmasters' },
          }),
        }}
      />

      {/* ====== HERO – Light with Image ====== */}
      <section className="relative min-h-[50vh] flex items-center py-20 bg-gradient-to-br from-brand/5 via-white to-white">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="container relative mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand backdrop-blur-sm mb-6"
              >
                <Sparkles className="h-4 w-4" />
                <span>About Us</span>
                <span className="h-1 w-1 rounded-full bg-brand" />
                <span className="text-brand/70 animate-pulse">TRUSTED PARTNER</span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-gray-900"
              >
                Build AI automation{' '}
                <span className="text-brand">you actually own.</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-600 leading-relaxed max-w-2xl text-justify"
              >
                Clickmasters is a US-based AI automation agency focused on production systems, not demonstrations — automation our clients own, understand, and rely on.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 -m-8 rounded-full bg-brand/20 blur-3xl" />
                <div className="absolute inset-0 -m-4 rounded-full bg-brand/10 blur-xl" />
                <Image
                  src="/images/about.png"
                  alt="AI Automation Agency"
                  fill
                  className="object-contain drop-shadow-[0_0_60px rgba(249,115,22,0.35)]"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== WHO WE ARE – Dark ====== */}
      <section className="relative py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">Who We Are</p>
              <h2 className="display text-4xl md:text-5xl font-bold text-white leading-tight">
                Built because most automation projects never survive the real world.
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p className="text-justify">
                We started Clickmasters because we saw too many businesses sold AI strategy and slide decks that never became working systems, and too many automation projects that broke the moment they met the real world.
              </p>
              <p className="text-gray-400 border-l-4 border-brand pl-4 text-justify">
                Amjad Khan founded Clickmasters after seeing too many AI projects fail in production. 
                He built the agency to deliver real, working automation that businesses can actually use and scale. 
                Today, Clickmasters helps companies automate processes across finance, sales, and operations — with systems that survive the real world.
              </p>
              <p className="text-justify">
                We build the version that actually works and keeps working — connected to your real tools, owned by you, and built to survive production.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== OUR APPROACH – Light ====== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="max-w-3xl mb-14">
              <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">Our Approach</p>
              <h2 className="display text-4xl md:text-5xl font-bold text-gray-900">How we think and work.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Code className="h-6 w-6 text-brand" />, title: "Build, don't just advise", desc: 'We ship working systems, not strategy decks. The value is in production, not PowerPoint.' },
                { icon: <Shield className="h-6 w-6 text-brand" />, title: 'Platform‑honest', desc: 'We recommend the right tool for your situation, even the cheaper one, even when it means less work for us.' },
                { icon: <BookOpen className="h-6 w-6 text-brand" />, title: 'You own it', desc: 'Transparent, documented systems with no black boxes and no lock‑in. Take it in‑house anytime.' },
                { icon: <BarChart className="h-6 w-6 text-brand" />, title: 'ROI‑first', desc: 'We automate what saves real hours and dollars, and we measure it.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="display text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== FOUNDER / CEO – Dark ====== */}
      <section className="relative py-24 bg-black border-t border-gray-800 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />

        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >

            {/* ── LEFT ── */}
            <div>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
                style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.25)' }}>
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse flex-shrink-0" />
                <span className="text-[11px] font-black tracking-[0.16em] uppercase text-brand">
                  Founder & CEO
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="display font-black leading-tight mb-5"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                  letterSpacing: '-0.03em',
                  color: '#fff',
                }}
              >
                Amjad Khan
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed mb-4 text-justify"
                style={{ fontSize: '0.9375rem', maxWidth: '440px' }}>
                Founder of <span className="text-white font-semibold">Clickmasters Digital Marketing Agency</span>, Amjad built the company on one belief: automation should be owned by the businesses it serves — not locked inside agency black boxes.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-400 leading-relaxed mb-8 text-justify"
                style={{ fontSize: '0.9375rem', maxWidth: '440px' }}>
                With deep roots in digital marketing and AI-driven growth, he leads every engagement with a production-first mindset — shipping systems that survive the real world and deliver measurable ROI.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex items-center gap-8 mb-8">
                {[
                  { value: '5+',   label: 'Years Building' },
                  { value: '80+',  label: 'Clients Served' },
                  { value: '120+', label: 'Projects Live' },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-8">
                    <div>
                      <div className="font-black leading-none text-white"
                        style={{ fontSize: 'clamp(1.6rem, 3vw, 2rem)', letterSpacing: '-0.03em' }}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-500 mt-1">
                        {stat.label}
                      </div>
                    </div>
                    {i < 2 && <div className="w-px h-8 bg-gray-800" />}
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                {['AI Automation', 'Digital Marketing', 'Growth Strategy', 'AI Agents'].map((tag) => (
                  <span key={tag}
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(249,115,22,0.08)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      color: '#f97316',
                    }}>
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT ── */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full blur-2xl opacity-70"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)' }} />
                <div className="relative w-[260px] h-[360px] rounded-[130px_130px_0_0] overflow-hidden z-10 border-2 border-brand/20"
                  style={{ background: 'linear-gradient(180deg, rgba(249,115,22,0.12), rgba(249,115,22,0.06))' }}
                >
                  <img
                    src="/images/founder.png"
                    alt="Amjad Khan — Founder & CEO"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center text-5xl font-black text-brand/30';
                        fallback.textContent = 'AK';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 w-full max-w-md">
                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-2 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(249,115,22,0.1)' }}>
                    <TrendingUp className="h-3 w-3 text-brand" />
                  </div>
                  <div>
                    <span className="text-sm font-black text-gray-900">120+</span>
                    <span className="text-[9px] text-gray-400 ml-1">Projects</span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className="px-3 py-2 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-2"
                >
                  <span className="text-sm font-black text-gray-900">4.9</span>
                  <div className="flex gap-px">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-brand text-brand" />
                    ))}
                  </div>
                  <span className="text-[9px] text-gray-400">(80+)</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="px-3 py-2 rounded-xl bg-black border border-brand/20 shadow-sm flex items-center gap-2"
                >
                  <span className="text-xs font-black text-white">Clickmasters</span>
                  <span className="text-[9px] font-bold text-brand">Digital</span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  className="px-3 py-2 rounded-xl bg-brand shadow-sm flex items-center gap-1.5"
                >
                  <Zap className="h-3.5 w-3.5 text-white" />
                  <span className="text-[10px] font-black text-white tracking-wide">AI-First</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== HOW WE WORK – Light ====== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="max-w-3xl mb-14">
              <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">How We Work</p>
              <h2 className="display text-4xl md:text-5xl font-bold text-gray-900">From audit to production.</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Free Audit', desc: 'We map your processes and find the highest-ROI automation opportunity.' },
                { step: '02', title: 'Build in Sprints', desc: 'Connected to your real tools, with you reviewing as it takes shape.' },
                { step: '03', title: 'Documented Hand‑off', desc: 'Transparent systems you own — no black boxes, no dependency on us.' },
                { step: '04', title: 'Optimize', desc: 'We monitor, refine, and expand as your needs grow.' },
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50 hover:shadow-sm transition-all">
                  <span className="text-brand/40 text-5xl font-bold block mb-4">{item.step}</span>
                  <h3 className="display text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== WHY IT MATTERS – Dark ====== */}
      <section className="py-20 bg-black border-t border-gray-800 text-center">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">Why It Matters</p>
              <h2 className="display text-4xl md:text-5xl font-bold text-white mb-6">
                Close the gaps between strategy and production
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
                Most failed AI initiatives die in the gap between a strategy and a system in production. We exist to close that gap — to be the partner that actually builds, that tells you the truth about what's worth doing, and that hands you something you own and understand. That's the whole point of Clickmasters.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====== CTA – Light ====== */}
      <section className="py-24 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Want to see how we work?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 text-lg mb-8 text-justify">
              Book a free automation audit — 30 minutes, no obligation.
            </motion.p>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                className="bg-brand hover:bg-brand-dark text-white px-10 py-6 text-lg rounded-full font-medium shadow-lg shadow-brand/25 transition-all"
              >
                Book Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}