"use client";

import { motion } from "framer-motion";

import { Marker, splitHeading } from "./Shared";

type IntegrationCategory = { title: string; description: string };

type IntegrationsData = {
  heading: string;
  subheading: string;
  categories: IntegrationCategory[];
};

export default function Integrations({ data }: { data: IntegrationsData }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="integrations" className="bg-secondary py-12 md:py-24">
      <div className="mx-auto max-w-[84vw] px-6">
        <div className="flex items-center w-full gap-4 mb-8 md:mb-12">
          <Marker n="08" />
          <div className="flex-1 h-px bg-black/10" />
          <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
            Integrations
          </span>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {head}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>

          <p className="text-sm md:text-base text-muted-foreground md:text-right md:self-end">
            {data.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {data.categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-paper border border-border p-6 md:p-8 hover:border-brand transition-colors"
            >
              <div className="eyebrow text-brand tabular-nums mb-4">
                0{i + 1}
              </div>

              <h3 className="display text-xl md:text-2xl mb-3">{c.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}