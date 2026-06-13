import { motion } from "framer-motion";
import { Marker, Dot } from "./Shared";

const services = [
  {
    title: "AI Agents",
    tag: "Most Popular",
    desc: "Autonomous agents that think, decide, and act on your behalf — handling complex multi-step tasks without human input.",
    col: "md:col-span-2",
    row: "md:row-span-1",
  },
  {
    title: "Workflow Automation",
    desc: "Connect every tool in your stack and orchestrate seamless processes across your entire operation.",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    title: "AI Chatbots",
    desc: "Conversational AI that qualifies leads, answers questions, and books meetings on autopilot.",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    title: "Voice AI",
    desc: "Human-like voice agents that handle calls, qualify leads, and schedule meetings around the clock.",
    col: "md:col-span-2",
    row: "md:row-span-1",
  },
  {
    title: "CRM Automation",
    desc: "Keep your CRM synced, enriched, and organized without any manual effort from your team.",
    col: "md:col-span-2",
    row: "md:row-span-1",
  },
  {
    title: "Lead Generation",
    desc: "Automated outreach and inbound that fills your pipeline 24/7 — zero manual prospecting.",
    col: "md:col-span-1",
    row: "md:row-span-1",
  },
  {
    title: "Custom AI Systems",
    desc: "Bespoke AI infrastructure built for your unique business model and competitive advantage.",
    col: "md:col-span-3",
    row: "md:row-span-1",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24">
          <div className="mx-auto max-w-[84vw] px-6">
              

        <div className="flex items-center w-full gap-4 mb-12">
  <Marker n="04" />

  <div className="flex-1 h-px bg-black/10" />

  <span className="eyebrow text-muted-foreground whitespace-nowrap">
    What We Build
  </span>
</div>
              

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <h2 className="display text-6xl md:text-8xl">
            Our<br />
            <span className="display-italic text-brand">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-right md:self-end">
            Seven automation verticals. One agency. Infinite scale.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border relative ">

          {/* Floating dots — positional decorators */}
          <Dot className="absolute -top-2 -right-2 z-10" />
          <Dot className="absolute top-[29%] left-[33%] z-10 -translate-x-1/2 -translate-y-1/2" />
          <Dot className="absolute -left-2 top-[55%] z-10" />
          <Dot className="absolute -bottom-2 -right-2 z-10" />

          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`bg-paper p-8 ${s.col} ${s.row} group hover:bg-ink hover:text-white transition-colors duration-500`}
            >
              {s.tag && (
                <span className="eyebrow text-brand border border-brand inline-block px-2 py-1 mb-4">
                  {s.tag}
                </span>
              )}
              <h3 className="display text-5xl mb-3">{s.title}</h3>
              <p className="text-md text-muted-foreground group-hover:text-white/70 max-w-full">
                {s.desc}
              </p>
              <div className="mt-6 eyebrow text-muted-foreground group-hover:text-brand">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}