
"use client";
import { motion } from "framer-motion";
import { Marker, splitHeading } from "./Shared";

type IndustryItem = {
  title: string;
  description: string;
  link?: string;
};

type IndustriesData = {
  heading: string;
  subheading: string;
  items: IndustryItem[];
};

export default function Industries({ data }: { data: IndustriesData }) {
  const { head, tail } = splitHeading(data.heading);

  return (
    <section id="industries" className="bg-ink text-white py-24">
          <div className="mx-auto max-w-[84vw] px-6">
              

       <div className="flex items-center w-full gap-4 mb-12">
  <Marker n="09" />

  <div className="flex-1 h-px bg-white/10" />

  <span className="eyebrow text-white/60 whitespace-nowrap">
    Industries
  </span>
</div>


        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {head}
            <br />
            <span className="display-italic text-brand">{tail}</span>
          </h2>
          <p className="text-sm text-white/60 md:text-right md:self-end max-w-xs md:ml-auto">{data.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-px bg-white/10 border border-black/10">
          {data.items.map((it, i) => (
            <motion.div key={it.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`bg-ink p-8 hover:bg-white/5 transition-colors ${i < 4 ? "md:col-span-3" : "md:col-span-4"}`}>
              <div className="eyebrow text-white/40 py-6">0{i + 1}</div>
                  <h3 className="display text-2xl md:text-3xl mb-2 pb-6 border-white/10 border-b">{it.title}</h3>
                  

              <p className="text-md text-white/60 leading-relaxed pt-4">{it.description}</p>

              {it.link && (
                <a
                  href={it.link}
                  className="mt-6 inline-block eyebrow text-brand text-xs md:text-sm hover:underline"
                >
                  Explore →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}