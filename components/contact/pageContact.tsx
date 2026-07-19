'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  Sparkles,
  Clock,
  CheckCircle,
} from 'lucide-react';

export default function ContactPage() {
  // State for the main (middle) form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // State for the hero form
  const [heroFormData, setHeroFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleHeroSubmit = () => {
    setHeroSubmitted(true);
    setTimeout(() => setHeroSubmitted(false), 3000);
    setHeroFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* ====== HERO – BLACK with TRANSPARENT FORM & BRAND GLOW ====== */}
      <section className="relative min-h-[50vh] flex items-center py-8 md:py-12 lg:py-16 bg-black">
        {/* Background decorations */}
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

        <div className="relative mx-auto max-w-[84vw] px-6 pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
            
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-brand backdrop-blur-sm mb-4 md:mb-6"
              >
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                <span>Get In Touch</span>
                <span className="h-1 w-1 rounded-full bg-brand" />
                <span className="text-brand/70 animate-pulse">WE REPLY FAST</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4 md:mb-6 text-white"
              >
                Let's talk{' '}
                <span className="display-italic text-brand">automation.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl text-justify"
              >
                Whether you're ready to automate something specific or just want to know if it's worth it we're easy to reach and we'll give you a straight answer either way.
              </motion.p>
            </motion.div>

            {/* Right: Transparent form with glass effect and brand glow (no white borders) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full relative"
            >
              <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-3xl opacity-70" />
              <div className="absolute -inset-2 bg-brand/10 blur-2xl rounded-3xl" />

              <div className="relative p-5 sm:p-6 md:p-8 rounded-2xl border border-brand/10 bg-transparent backdrop-blur-sm shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Quick Message</h2>
                <p className="text-gray-300 text-sm mb-4 md:mb-6">We'll reply within a few hours.</p>

                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-sm text-gray-200 mb-1 font-medium">Name</label>
                    <input
                      type="text"
                      value={heroFormData.name}
                      onChange={e => setHeroFormData({ ...heroFormData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-white/10 border border-brand/20 rounded-xl px-4 py-2.5 md:py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-200 mb-1 font-medium">Email</label>
                    <input
                      type="email"
                      value={heroFormData.email}
                      onChange={e => setHeroFormData({ ...heroFormData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/10 border border-brand/20 rounded-xl px-4 py-2.5 md:py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-200 mb-1 font-medium">Message</label>
                    <textarea
                      value={heroFormData.message}
                      onChange={e => setHeroFormData({ ...heroFormData, message: e.target.value })}
                      placeholder="What do you want to automate?"
                      rows={3}
                      className="w-full bg-white/10 border border-brand/20 rounded-xl px-4 py-2.5 md:py-3 text-white placeholder-white/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 transition-all duration-200 resize-none text-sm"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group">
                    <div className="absolute inset-0 bg-brand/20 blur-xl rounded-xl group-hover:blur-2xl transition-all" />
                    <Button
                      size="lg"
                      onClick={handleHeroSubmit}
                      className="relative w-full bg-brand hover:bg-brand-dark text-white py-5 md:py-6 text-sm md:text-base rounded-xl font-medium shadow-lg shadow-brand/30 transition-all"
                    >
                      {heroSubmitted ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5" /> Sent!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-gray-400 text-center">
                    We never share your data. Your details are used only to respond to your enquiry.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== MIDDLE SECTION – WHITE ====== */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[84vw] px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20">

            {/* LEFT – Audit Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="space-y-6 md:space-y-8"
            >
              <motion.div
                variants={fadeInUp}
                className="relative p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand/5 blur-2xl rounded-full" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-brand" />
                    </div>
                    <span className="text-xs text-brand font-medium tracking-widest uppercase">Fastest Way</span>
                  </div>
                  <h2 className="display text-xl sm:text-2xl font-bold text-gray-900 mb-3">Book a free audit</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify text-sm sm:text-base">
                    In 30 minutes we'll map your processes and tell you the highest-ROI place to start no obligation, no sales pitch.
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                    {['30 minutes', 'No obligation', 'Honest advice'].map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 text-xs text-green-700 bg-green-50 border border-green-200 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full">
                        <CheckCircle className="h-3 w-3 text-green-600" /> {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="relative group/btn block sm:inline-block">
                    <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full group-hover/btn:blur-2xl transition-all" />
                    <Button
                      size="lg"
                      className="relative bg-brand hover:bg-brand-dark text-white w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-5 rounded-full font-medium shadow-lg shadow-brand/25 text-sm sm:text-base"
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
                    className="flex items-center gap-4 p-3 sm:p-4 rounded-xl border border-gray-200 bg-gray-50/80 hover:border-brand transition-all duration-300"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-gray-800 font-medium text-sm sm:text-base break-all">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-gray-50/50"
              >
                <h3 className="display text-base font-semibold mb-2 text-gray-800">What to expect</h3>
                <p className="text-gray-600 leading-relaxed text-sm text-justify">
                  A fast, honest reply and a straight answer on whether automation fits your situation. If we're not the right fit, we'll say so.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT – Full Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="relative p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="display text-xl sm:text-2xl font-bold mb-1 text-gray-900">Send us a message</h2>
                <p className="text-gray-500 mb-6 sm:mb-8 text-sm text-justify">We'll get back to you within a few hours.</p>

                <div className="space-y-4 sm:space-y-5">
                  {[
                    { label: 'Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Company', key: 'company', type: 'text', placeholder: 'Your company name' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm text-gray-600 mb-1 sm:mb-2 font-medium">{field.label}</label>
                      <input
                        type={field.type}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 text-sm shadow-sm"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm text-gray-600 mb-1 sm:mb-2 font-medium">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking to automate..."
                      rows={5}
                      className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200 resize-none text-sm shadow-sm"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group">
                    <div className="absolute inset-0 bg-brand/20 blur-xl rounded-xl group-hover:blur-2xl transition-all" />
                    <Button
                      size="lg"
                      onClick={handleSubmit}
                      className="relative w-full bg-brand hover:bg-brand-dark text-white py-5 sm:py-6 text-sm sm:text-base rounded-xl font-medium shadow-lg shadow-brand/20 transition-all"
                    >
                      {submitted ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" /> Message Sent!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-gray-500 text-center">
                    We never share your data. Your details are used only to respond to your enquiry.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== BOTTOM STATS + CTA – BLACK ====== */}
      <section className="py-12 md:py-16 lg:py-20 border-t border-gray-800 bg-black">
        <div className="mx-auto max-w-[84vw] px-6 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              # WORK.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center mx-auto"
            >
              Build intelligent AI systems that eliminate repetitive work,
              <br className="hidden sm:block" />
              supercharge your team, and scale without headcount.
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8 lg:gap-x-12"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand">500+</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Projects</span>
            </div>
            <span className="hidden sm:inline-block w-px h-8 bg-gray-700" />

            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand">120+</span>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-400 uppercase tracking-wider">Clients</span>
            </div>
            <span className="hidden sm:inline-block w-px h-8 bg-gray-700" />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-brand hover:bg-brand-dark text-white px-6 py-4 sm:px-8 sm:py-5 md:px-8 md:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-lg shadow-brand/25 transition-all"
              >
                Start Automating
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>

            <span className="hidden sm:inline-block w-px h-8 bg-gray-700" />

            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-1.5 text-white font-semibold text-sm sm:text-base md:text-lg hover:text-brand transition-colors"
            >
              View Work
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}