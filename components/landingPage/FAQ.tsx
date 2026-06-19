"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Marker } from "./Shared";

export default function FAQ() {
  const faqs = [
    [
      "How long does it take to deploy an AI automation system?",
      "Most projects go live within 2–6 weeks depending on complexity. Simple workflow automations can be deployed in days. Full AI agent ecosystems with custom integrations typically take 4–6 weeks.",
    ],
    [
      "Do I need to change my existing software or tech stack?",
      "No. We integrate with your existing tools and layer automation on top.",
    ],
    [
      "What types of businesses benefit most from AI automation?",
      "Any business with repetitive, rules-based workflows — sales, support, ops, finance, marketing.",
    ],
    [
      "How do you ensure data security and compliance?",
      "Enterprise-grade encryption, SOC 2 aligned processes, and full GDPR/HIPAA compliance options.",
    ],
    [
      "What happens after the automation is deployed?",
      "We provide ongoing optimization, monitoring, and improvements as your business evolves.",
    ],
    [
      "Can I start with a small pilot before committing to a full system?",
      "Absolutely. We recommend a 30-day pilot for most engagements.",
    ],
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="contact" className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">

        {/* Header */}
        <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
          <Marker n="12" />
          <div className="flex-1 h-px bg-black/10" />
          <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
            FAQ
          </span>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 pt-6 md:pt-12">

          {/* Left column */}
          <div className="relative text-center md:text-left">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Common
              <br />
              <span className="display-italic text-brand">Questions</span>
            </h2>

            <p className="text-muted-foreground text-sm md:text-md mt-4 md:mt-6 max-w-xs mx-auto md:mx-0">
              Still curious? Book a free discovery call and we'll answer everything specific to your business.
            </p>

            <a
              href="#"
              className="inline-block mt-4 md:mt-6 bg-ink text-white text-sm px-4 md:px-5 py-2.5 md:py-3 rounded-sm hover:bg-brand transition-colors"
            >
              Book a Call →
            </a>

            <Image
              src="/images/robot-mascot2.png"
              alt=""
              width={640}
              height={640}
              className="w-40 sm:w-48 md:w-56 lg:w-72 mt-8 md:mt-12 float-y mx-auto md:mx-0"
            />
          </div>

          {/* Right column - FAQ */}
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <div key={f[0]}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-3 py-4 md:py-5 text-left"
                >
                  <span className="font-semibold text-xs sm:text-sm md:text-base pr-2 md:pr-6">
                    {f[0]}
                  </span>

                  <span
                    className={`size-6 md:size-7 rounded-full flex items-center justify-center text-xs transition-colors shrink-0 ${
                      open === i
                        ? "bg-brand text-white"
                        : "bg-secondary text-ink"
                    }`}
                  >
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: open === i ? "auto" : 0,
                    opacity: open === i ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-xs sm:text-sm text-muted-foreground pb-4 md:pb-5 pr-4 md:pr-12">
                    {f[1]}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}