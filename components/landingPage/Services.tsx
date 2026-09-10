"use client";

import { motion } from "framer-motion";
import { Marker, Dot, splitHeading } from "./Shared";

type ServiceItem = {
  title: string;
  description: string;
  icon?: string;
};

type ServicesData = {
  heading: string;
  subheading: string;
  items: ServiceItem[];
};

// Column spans pattern for the 3-column desktop grid (rows of 12 tracks)
const colSpans = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

export default function Services({ data }: { data: ServicesData }) {
  const { head, tail } = splitHeading(data.heading, 1);

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
            {head}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground md:text-right md:self-end">
            {data.subheading}
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
            {data.items.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-paper p-5 border-b border-border last:border-b-0 group hover:bg-ink hover:text-white transition-colors duration-500"
              >
                <h3 className="display text-2xl mb-2">{s.title}</h3>

                <p className="text-sm text-muted-foreground group-hover:text-white/70">
                  {s.description}
                </p>

                <div className="mt-4 eyebrow text-muted-foreground group-hover:text-brand text-xs">
                  Learn more →
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {data.items.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className={`bg-paper p-8 ${colSpans[i] ?? "md:col-span-1"} group hover:bg-ink hover:text-white transition-colors duration-500`}
              >
                <h3 className="display text-4xl xl:text-5xl mb-3">{s.title}</h3>

                <p className="text-md text-muted-foreground group-hover:text-white/70">
                  {s.description}
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