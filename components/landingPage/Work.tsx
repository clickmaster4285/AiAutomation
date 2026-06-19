"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Marker } from "./Shared";

export default function Work() {
  const featured = {
    tag: "Real Estate",
    title: "300% more qualified leads in 60 days",
    desc: "Deployed a full-stack AI lead qualification and nurture system that processes 2,000+ inquiries per month without human touch.",
    co: "PropTech Ventures",
    pipe: "+$2.4M pipeline",
    img: "/images/work2.jpg",
  };

  const secondary = [
    {
      tag: "Finance",
      title: "AI ops eliminating 40h/week",
      co: "Northwave Capital",
      pipe: "−40 hrs/week",
      img: "/images/work3.jpg",
    },
    {
      tag: "Healthcare",
      title: "Patient intake on autopilot",
      co: "MedFlow Health",
      pipe: "−65% admin",
      img: "/images/work4.jpg",
    },
  ];

  return (
    <section id="work" className="bg-secondary py-12 md:py-24">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
          <Marker n="09" />
          <div className="flex-1 h-px bg-black/10" />
          <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">
            Case Studies
          </span>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mb-6 md:mb-10">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            Work That
            <br />
            <span className="display-italic text-brand">Speaks.</span>
          </h2>

          <a href="#" className="text-sm hover:text-brand">
            View all work →
          </a>
        </div>

        {/* Featured Work */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:grid md:grid-cols-2 overflow-hidden"
        >
          <div className="bg-ink text-white p-6 md:p-10 flex flex-col justify-between min-h-[380px] md:min-h-[420px] order-2 md:order-1">
            <div>
              <span className="eyebrow text-brand mb-4 md:mb-6 inline-block text-xs md:text-sm">
                {featured.tag}
              </span>

              <h3 className="display text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 leading-tight">
                {featured.title}
              </h3>

              <p className="text-sm text-white/60 max-w-md leading-relaxed">
                {featured.desc}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10 pt-4 md:pt-6 border-t border-white/10">
              <div>
                <div className="eyebrow text-white/40 mb-1 text-xs md:text-sm">
                  Client
                </div>

                <div className="display text-base sm:text-lg md:text-xl">
                  {featured.co}
                </div>
              </div>

              <div>
                <div className="eyebrow text-white/40 mb-1 text-xs md:text-sm">
                  Result
                </div>

                <div className="display text-base sm:text-lg md:text-xl text-brand">
                  {featured.pipe}
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[380px] overflow-hidden group order-1 md:order-2">
            <Image
              src={featured.img}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Secondary Projects */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
          {secondary.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-64 sm:h-80 md:h-110 overflow-hidden group cursor-pointer"
            >
              {c.img.startsWith("http") ? (
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              {/*
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <span className="eyebrow text-brand bg-white/10 backdrop-blur px-2 py-1 self-start">
                  {c.tag}
                </span>

                <div>
                  <h3 className="display text-2xl md:text-3xl mb-4">
                    {c.title}
                  </h3>

                  <div className="flex justify-between text-xs border-t border-white/20 pt-3">
                    <span>{c.co}</span>
                    <span className="text-brand">{c.pipe}</span>
                  </div>
                </div>
              </div>
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}