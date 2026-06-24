"use client";

import { motion } from "framer-motion";
import { Marker, Dot } from "./Shared";

const services = [
  {
    title: "AI Agents",
    tag: "Most Popular",
    desc: "Autonomous agents that think, decide, and act on your behalf — handling complex multi-step tasks without human input.",
    col: "md:col-span-2",
    row: "md:row-span-1",
    order: 1,
  },
  {
    title: "Workflow Automation",
    desc: "Connect every tool in your stack and orchestrate seamless processes across your entire operation.",
    col: "md:col-span-1",
    row: "md:row-span-1",
    order: 2,
  },
  {
    title: "AI Chatbots",
    desc: "Conversational AI that qualifies leads, answers questions, and books meetings on autopilot.",
    col: "md:col-span-1",
    row: "md:row-span-1",
    order: 3,
  },
  {
    title: "Voice AI",
    desc: "Human-like voice agents that handle calls, qualify leads, and schedule meetings around the clock.",
    col: "md:col-span-2",
    row: "md:row-span-1",
    order: 4,
  },
  {
    title: "CRM Automation",
    desc: "Keep your CRM synced, enriched, and organized without any manual effort from your team.",
    col: "md:col-span-2",
    row: "md:row-span-1",
    order: 5,
  },
  {
    title: "Lead Generation",
    desc: "Automated outreach and inbound that fills your pipeline 24/7 — zero manual prospecting.",
    col: "md:col-span-1",
    row: "md:row-span-1",
    order: 6,
  },
  {
    title: "Custom AI Systems",
    desc: "Bespoke AI infrastructure built for your unique business model and competitive advantage.",
    col: "md:col-span-3",
    row: "md:row-span-1",
    order: 7,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">

        {/* Header */}
        <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
          <Marker n="04" />
          <div className="flex-1 h-px bg-black/10" />
          <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
            What We Build
          </span>
        </div>

        {/* Title */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            Our<br />
            <span className="display-italic text-brand">Services</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">
            Seven automation verticals. One agency. Infinite scale.
          </p>
        </div>

        {/* GRID */}
        <div className="relative">

          {/* DOTS */}
          <Dot className="hidden md:block absolute -top-2 -right-2 z-10" />
          <Dot className="hidden md:block absolute top-[29%] left-[33%] z-10 -translate-x-1/2 -translate-y-1/2" />
          <Dot className="hidden md:block absolute -left-2 top-[55%] z-10" />
          <Dot className="hidden md:block absolute -bottom-2 -right-2 z-10" />

          {/* MOBILE */}
          <div className="block md:hidden bg-border border border-border rounded-xl overflow-hidden">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-paper p-5 border-b border-border last:border-b-0 group hover:bg-ink hover:text-white transition-colors duration-500"
              >
                {s.tag && (
                  <span className="eyebrow text-brand border border-brand inline-block px-2 py-1 mb-3 text-xs">
                    {s.tag}
                  </span>
                )}

                <h3 className="display text-2xl mb-2">{s.title}</h3>

                <p className="text-sm text-muted-foreground group-hover:text-white/70">
                  {s.desc}
                </p>

                <div className="mt-4 eyebrow text-muted-foreground group-hover:text-brand text-xs">
                  Learn more →
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className={`bg-paper p-8 ${s.col} ${s.row} group hover:bg-ink hover:text-white transition-colors duration-500`}
              >
                {s.tag && (
                  <span className="eyebrow text-brand border border-brand inline-block px-2 py-1 mb-4">
                    {s.tag}
                  </span>
                )}

                <h3 className="display text-5xl mb-3">{s.title}</h3>

                <p className="text-md text-muted-foreground group-hover:text-white/70">
                  {s.desc}
                </p>

                <div className="mt-6 eyebrow text-muted-foreground group-hover:text-brand">
                  Learn more →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}