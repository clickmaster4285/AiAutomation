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
      className="relative pt-8 pb-12 md:pt-16 md:pb-20 overflow-hidden bg-paper isolate"
    >
      <div className="mx-auto max-w-[84vw] px-6 relative z-10">

        {/* HERO MAIN */}
        <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-4 md:gap-6 mt-6 md:mt-10">

          {/* TEXT */}
          <div className="relative z-10 py-6 md:py-10">
            <h1 className="display text-[13vw] md:text-[8.5vw] leading-[1.05]">
              <div className="overflow-hidden">
                <div className="hero-word py-1">AUTOMATE</div>
              </div>
              <div className="overflow-hidden">
                <div className="hero-word whitespace-nowrap py-1">
                  THE <span className="text-brand">FUTURE</span>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="hero-word display-italic font-normal py-1">
                  of work.
                </div>
              </div>
            </h1>
          </div>

          {/* IMAGE */}
          <motion.div
            style={{ y }}
            className="relative md:absolute md:right-0 md:top-0 md:w-[42%] md:h-full flex items-end justify-center md:justify-end pointer-events-none z-0 mt-4 md:mt-0"
          >
            <Image
              src="/images/hero.png"
              alt="AI robot"
              width={1024}
              height={1280}
              priority
              className="w-full max-w-sm md:max-w-none object-contain max-h-[50vh] md:max-h-full"
            />
          </motion.div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-8 md:mt-16 grid md:grid-cols-[1.4fr_auto_auto] items-end gap-6 md:gap-8 hero-meta relative z-10">

          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            We build intelligent AI systems that eliminate repetitive work,
            supercharge your team, and scale without headcount.
          </p>

          <div className="flex gap-6 md:gap-10">
            <div>
              <div className="display text-3xl md:text-5xl">500+</div>
              <div className="eyebrow text-muted-foreground mt-1 text-xs md:text-sm">Projects</div>
            </div>

            <div>
              <div className="display text-3xl md:text-5xl">120+</div>
              <div className="eyebrow text-muted-foreground mt-1 text-xs md:text-sm">Clients</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              className="bg-ink text-white text-sm px-5 py-3 hover:bg-brand transition-colors inline-flex items-center justify-center gap-2 text-center"
            >
              Start Automating <span>›</span>
            </a>

            <a
              href="#work"
              className="border border-ink text-ink text-sm px-5 py-3 font-medium hover:bg-ink hover:text-white transition-colors text-center"
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