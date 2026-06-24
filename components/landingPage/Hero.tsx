"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

import { Dot, Marker } from "./Shared";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-word", {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.2,
      });

      gsap.from(".hero-meta", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.9,
        stagger: 0.1,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-24 pb-20 overflow-hidden bg-paper isolate"
    >
      <div className="mx-auto max-w-[84vw] px-6 relative z-10">

        {/* TOP META */}
        <div className="flex items-center justify-between hero-meta">
          <div className="flex items-center gap-4 py-8">
            <Marker n="01" />
            <span className="eyebrow text-muted-foreground">
              AI Automation Agency
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="eyebrow text-muted-foreground">
              Available for new projects
            </span>
          </div>
        </div>

        <div className="border-t border-border mt-4" />

        {/* HERO MAIN */}
        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-6 mt-10">

          {/* TEXT */}
          <div className="relative z-10 py-10">
            <h1 className="display text-[13vw] md:text-[8.5vw] leading-[0.92]">

              <div className="overflow-hidden">
                <div className="hero-word">AUTOMATE</div>
              </div>

              <div className="overflow-hidden">
                <div className="hero-word whitespace-nowrap">
                  THE <span className="text-brand">FUTURE</span>
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="hero-word display-italic font-normal">
                  of work.
                </div>
              </div>

            </h1>
          </div>

          {/* IMAGE */}
          <motion.div
            style={{ y }}
            className="relative md:absolute md:right-0 md:top-0 md:w-[42%] md:h-full flex items-end justify-end pointer-events-none z-0"
          >
            <Image
              src="/images/hero.png"
              alt="AI robot"
              width={1024}
              height={1280}
              priority
              className="w-full max-w-md md:max-w-none object-contain"
            />
          </motion.div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 grid md:grid-cols-[1.4fr_auto_auto] items-end gap-8 hero-meta relative z-10">

          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            We build intelligent AI systems that eliminate repetitive work,
            supercharge your team, and scale without headcount.
          </p>

          <div className="flex gap-10">
            <div>
              <div className="display text-5xl">500+</div>
              <div className="eyebrow text-muted-foreground mt-1">Projects</div>
            </div>

            <div>
              <div className="display text-5xl">120+</div>
              <div className="eyebrow text-muted-foreground mt-1">Clients</div>
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="#contact"
              className="bg-ink text-white text-sm px-5 py-3 hover:bg-brand transition-colors inline-flex items-center gap-2"
            >
              Start Automating <span>›</span>
            </a>

            <a
              href="#work"
              className="border border-ink text-ink text-sm px-5 py-3 font-medium hover:bg-ink hover:text-white transition-colors"
            >
              View Work
            </a>
          </div>

        </div>
      </div>

      {/* DOTS */}
      <Dot className="absolute top-[30%] left-[55%]" />
      <Dot className="absolute top-[45%] left-[8%]" />
      <Dot className="absolute top-[70%] left-[12%]" />
    </section>
  );
}