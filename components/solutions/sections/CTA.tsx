// components/sections/CTASection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, User, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  background?: 'ink' | 'gradient' | 'orange' | 'light';
  showForm?: boolean;
}

export function CTASection({
  title,
  subtitle,
  eyebrow = "Let's talk",
  primaryCta,
  secondaryCta,
  background = 'light',
  showForm = true,
}: CTASectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getBackgroundStyles = () => {
    switch (background) {
      case 'ink':
        return 'bg-ink text-white';
      case 'gradient':
        return 'bg-gradient-to-r from-brand/20 via-brand/10 to-transparent';
      case 'orange':
        return 'bg-gradient-to-br from-orange-50 via-amber-50/80 to-gray-50/90 border-b border-orange-200/30';
      case 'light':
      default:
        return 'bg-gradient-to-br from-orange-50/90 via-white/80 to-gray-50/95 border-b border-orange-100/50';
    }
  };

  const getTextColor = () => {
    switch (background) {
      case 'ink':
        return 'text-white';
      case 'gradient':
        return 'text-ink';
      case 'orange':
      case 'light':
      default:
        return 'text-gray-900';
    }
  };

  const getMutedTextColor = () => {
    switch (background) {
      case 'ink':
        return 'text-white/70';
      case 'gradient':
        return 'text-muted-foreground';
      case 'orange':
      case 'light':
      default:
        return 'text-gray-600';
    }
  };

  const getFormStyles = () => {
    switch (background) {
      case 'ink':
        return 'bg-white/5 border border-white/10';
      case 'gradient':
        return 'bg-white/80 border border-gray-200/50 shadow-xl';
      case 'orange':
        return 'bg-white/95 border border-orange-200/50 shadow-xl shadow-orange-100/30';
      case 'light':
      default:
        return 'bg-white/90 border border-gray-200/60 shadow-2xl shadow-orange-100/20 backdrop-blur-sm';
    }
  };

  const getInputStyles = () => {
    switch (background) {
      case 'ink':
        return 'bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-brand focus:ring-2 focus:ring-brand/20';
      case 'gradient':
        return 'bg-white/90 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20';
      case 'orange':
        return 'bg-white/95 border border-orange-200/60 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-orange-200/50';
      case 'light':
      default:
        return 'bg-white/95 border border-gray-200/70 text-gray-900 placeholder:text-gray-400 focus:border-brand focus:ring-2 focus:ring-orange-200/40 hover:border-orange-200/80 transition-colors';
    }
  };

  return (
    <section className={`relative isolate overflow-hidden py-12 md:py-20 ${getBackgroundStyles()}`}>
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-200/30 via-orange-100/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-gray-200/40 via-gray-100/30 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-white/40 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-orange-200/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gray-200/15" />

        <div className="absolute inset-0 bg-grid-orange-100/[0.03] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:60px_60px]" />
        
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/10 via-transparent to-gray-100/20" />
        <div className="absolute inset-0 bg-gradient-to-bl from-white/30 via-transparent to-gray-50/20" />

        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-orange-200/20 backdrop-blur-sm"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`grey-${i}`}
            className="absolute rounded-full bg-gray-300/15 backdrop-blur-sm"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 7 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[84vw] px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <span className="eyebrow text-brand">
              {eyebrow}
            </span>
            <h2
              className={`display text-3xl md:text-5xl lg:text-6xl mt-3 mb-4 leading-tight ${getTextColor()}`}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`text-base md:text-lg max-w-xl mb-8 ${getMutedTextColor()}`}
              >
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-white text-sm px-8 py-3 rounded-lg font-medium transition-all duration-300 group shadow-lg shadow-orange-200/40 hover:shadow-orange-300/50"
              >
                {primaryCta.text}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 border border-gray-300/50 hover:border-brand hover:text-brand hover:bg-orange-50/50 text-gray-700 text-sm px-8 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <span className={`text-sm ${getMutedTextColor()}`}>
                  No obligation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <span className={`text-sm ${getMutedTextColor()}`}>
                  Free consultation
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <span className={`text-sm ${getMutedTextColor()}`}>
                  Fast response
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Contact Form with fixed icon spacing */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className={`
                backdrop-blur-xl rounded-2xl p-6 md:p-8
                ${getFormStyles()}
              `}>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${getTextColor()}`}>
                      Message Sent!
                    </h3>
                    <p className={`mt-2 ${getMutedTextColor()}`}>
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${getMutedTextColor()}`}>
                        Your Name
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 ${
                          background === 'light' || background === 'orange' ? 'text-gray-400' : 'text-white/40'
                        }`} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`
                            w-full pl-12 pr-4 py-3 rounded-lg transition-all duration-200
                            ${getInputStyles()}
                          `}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${getMutedTextColor()}`}>
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 ${
                          background === 'light' || background === 'orange' ? 'text-gray-400' : 'text-white/40'
                        }`} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`
                            w-full pl-12 pr-4 py-3 rounded-lg transition-all duration-200
                            ${getInputStyles()}
                          `}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium mb-1.5 ${getMutedTextColor()}`}>
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className={`absolute left-4 top-3.5 h-4 w-4 ${
                          background === 'light' || background === 'orange' ? 'text-gray-400' : 'text-white/40'
                        }`} />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={3}
                          className={`
                            w-full pl-12 pr-4 py-3 rounded-lg transition-all duration-200 resize-none
                            ${getInputStyles()}
                          `}
                          placeholder="Tell us about your automation needs..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                        font-medium transition-all duration-300 group
                        bg-brand hover:bg-brand/90 text-white
                        shadow-lg shadow-orange-200/40 hover:shadow-orange-300/50
                        ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className={`text-xs text-center ${getMutedTextColor()} opacity-60`}>
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}