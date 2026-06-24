'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  Clock,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="bg-white text-gray-900 overflow-hidden">

      {/* ====== HERO – BLACK ====== */}
      <section className="relative min-h-[60vh] flex items-center py-12 md:py-20 bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-brand/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.05),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="container relative mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand backdrop-blur-sm mb-6"
              >
                <Sparkles className="h-4 w-4" />
                <span>Get In Touch</span>
                <span className="h-1 w-1 rounded-full bg-brand" />
                <span className="text-brand/70 animate-pulse">WE REPLY FAST</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white"
              >
                Let's talk{' '}
                <span className="text-brand">automation.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl text-justify"
              >
                Whether you're ready to automate something specific or just want to know if it's worth it — we're easy to reach and we'll give you a straight answer either way.
              </motion.p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 -m-8 rounded-full bg-brand/20 blur-3xl" />
                <div className="absolute inset-0 -m-4 rounded-full bg-brand/10 blur-xl" />
                <div
                  className="relative w-full h-full"
                  style={{
                    maskImage: `
                      radial-gradient(ellipse at center, black 55%, transparent 85%),
                      linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
                      linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)
                    `,
                    maskComposite: 'intersect',
                    WebkitMaskImage: `
                      radial-gradient(ellipse at center, black 55%, transparent 85%),
                      linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%),
                      linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)
                    `,
                    WebkitMaskComposite: 'source-in',
                  }}
                >
                  <Image
                    src="/images/contact.png"
                    alt="AI Automation Agency"
                    fill
                    className="object-cover drop-shadow-[0_0_80px rgba(249,115,22,0.4)]"
                    priority
                    sizes="(max-width: 600px) 50vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== MIDDLE SECTION – WHITE ====== */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

            {/* LEFT – Audit Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div
                variants={fadeInUp}
                className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 blur-2xl rounded-full" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-brand" />
                    </div>
                    <span className="text-xs text-brand font-medium tracking-widest uppercase">Fastest Way</span>
                  </div>
                  <h2 className="display text-2xl font-bold text-gray-900 mb-3">Book a free audit</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    In 30 minutes we'll map your processes and tell you the highest-ROI place to start — no obligation, no sales pitch.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['30 minutes', 'No obligation', 'Honest advice'].map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
                        <CheckCircle className="h-3 w-3 text-green-600" /> {tag}
                      </span>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative group/btn inline-block">
                    <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full group-hover/btn:blur-2xl transition-all" />
                    <Button
                      size="lg"
                      className="relative bg-brand hover:bg-brand-dark text-white px-8 py-5 rounded-full font-medium shadow-lg shadow-brand/25"
                    >
                      Book Your Free Audit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                <h3 className="display text-lg font-semibold text-gray-700">Other ways to reach us</h3>
                {[
                  { icon: Mail, label: 'Email', value: 'sales@clickmastersdigitalmarketing.com' },
                  { icon: Phone, label: 'Phone', value: '+44 7988 576086' },
                  { icon: Clock, label: 'Response time', value: 'Within a few hours' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50/80 hover:border-brand transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-brand" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-gray-800 font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50"
              >
                <h3 className="display text-base font-semibold mb-2 text-gray-800">What to expect</h3>
                <p className="text-gray-600 leading-relaxed text-sm text-justify">
                  A fast, honest reply — and a straight answer on whether automation fits your situation. If we're not the right fit, we'll say so.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT – Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="relative p-8 md:p-10 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="display text-2xl font-bold mb-1 text-gray-900">Send us a message</h2>
                <p className="text-gray-500 mb-8 text-sm text-justify">We'll get back to you within a few hours.</p>

                <div className="space-y-5">
                  {[
                    { label: 'Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Company', key: 'company', type: 'text', placeholder: 'Your company name' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm text-gray-600 mb-2 font-medium">{field.label}</label>
                      <input
                        type={field.type}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 text-sm shadow-sm"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm text-gray-600 mb-2 font-medium">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking to automate..."
                      rows={5}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 resize-none text-sm shadow-sm"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group">
                    <div className="absolute inset-0 bg-brand/20 blur-xl rounded-xl group-hover:blur-2xl transition-all" />
                    <Button
                      size="lg"
                      onClick={handleSubmit}
                      className="relative w-full bg-brand hover:bg-brand-dark text-white py-6 text-base rounded-xl font-medium shadow-lg shadow-brand/20 transition-all"
                    >
                      {submitted ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" /> Message Sent!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-gray-500 text-center text-justify">
                    We never share your data. Your details are used only to respond to your enquiry.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== BOTTOM STATS + CTA – LIGHT GREY background ====== */}
      <section className="py-16 border-t border-gray-300 bg-gray-100">
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
            >
              # WORK.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
            >
              Build intelligent AI systems that eliminate repetitive work,
              <br className="hidden sm:block" />
              supercharge your team, and scale without headcount.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl font-extrabold text-brand">500+</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Projects</span>
            </div>
            <span className="hidden sm:inline-block w-px h-8 bg-gray-400" />

            <div className="flex items-center gap-2">
              <span className="text-3xl md:text-4xl font-extrabold text-brand">120+</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Clients</span>
            </div>
            <span className="hidden sm:inline-block w-px h-8 bg-gray-400" />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-brand hover:bg-brand-dark text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-brand/25 transition-all"
              >
                Start Automating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <span className="hidden sm:inline-block w-px h-8 bg-gray-400" />

            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-1.5 text-gray-800 font-semibold text-base md:text-lg hover:text-brand transition-colors"
            >
              View Work
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}