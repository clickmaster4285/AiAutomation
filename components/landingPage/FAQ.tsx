"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How long does it take to deploy an AI automation system?",
      a: "Most projects go live within 2–6 weeks depending on complexity. Simple workflow automations can be deployed in days. Full AI agent ecosystems with custom integrations typically take 4–6 weeks.",
    },
    {
      q: "Do I need to change my existing software or tech stack?",
      a: "No. We integrate with your existing tools and layer automation on top.",
    },
    {
      q: "What types of businesses benefit most from AI automation?",
      a: "Any business with repetitive, rules-based workflows sales, support, ops, finance, marketing.",
    },
    {
      q: "How do you ensure data security and compliance?",
      a: "Enterprise-grade encryption, SOC 2 aligned processes, and full GDPR/HIPAA compliance options.",
    },
    {
      q: "What happens after the automation is deployed?",
      a: "We provide ongoing optimization, monitoring, and improvements as your business evolves.",
    },
    {
      q: "Can I start with a small pilot before committing to a full system?",
      a: "Absolutely. We recommend a 30-day pilot for most engagements.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[84vw] px-6">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="md:sticky md:top-24 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand" />
              <span className="text-brand text-sm font-semibold tracking-widest uppercase font-sans">
                FAQ
              </span>
            </div>
            <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Common
              <br />
              <span className="display-italic text-brand">Questions</span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-xs">
              Still curious? Book a free discovery call and we'll answer everything specific to your business.
            </p>
            <a
              href="#"
              className="inline-block mt-6 bg-black hover:bg-brand text-white font-medium px-6 py-3 rounded-none transition-colors duration-200 text-sm sm:text-base"
            >
              Book a Call →
            </a>
            <Image
              src="/images/robot-mascot2.png"
              alt=""
              width={640}
              height={640}
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 mt-6 md:mt-8 float-y"
            />
          </div>

          {/* Right Column – FAQ List */}
          <div className="space-y-3 sm:space-y-4 w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "border-brand/40 bg-brand/5 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left"
                  >
                    <span
                      className={`font-semibold text-sm sm:text-base transition-colors ${
                        isOpen ? "text-brand" : "text-gray-900"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-brand text-white"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      ) : (
                        <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}