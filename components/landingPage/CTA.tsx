"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-paper py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center relative">
        
        {/* Left floating mascot */}
        <motion.div
          className="absolute left-4 top-0 w-24 md:w-52"
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/images/robot-mascot2.png"
            alt=""
            width={640}
            height={640}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right floating mascot */}
        <motion.div
          className="absolute right-4 top-12 w-24 md:w-52"
          animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Image
            src="/images/robot-mascot2.png"
            alt=""
            width={640}
            height={640}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/images/clickmasters-logo.png"
            alt="ClickMasters"
            width={160}
            height={40}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </div>

        {/* Headings */}
        <h2 className="display text-5xl md:text-8xl py-8">
          Got A Vision?
        </h2>

        <h2 className="display-italic text-5xl md:text-8xl mt-2">
          Let's Build It.
        </h2>

        <p className="text-lg text-muted-foreground mt-10 max-w-md mx-auto">
          The AI automation agency for businesses that refuse to be left behind.
        </p>

        {/* Bottom marquee text */}
        <div className="mt-16 overflow-hidden">
          <div className="display text-[8vw] text-ink/5 whitespace-nowrap">
            CLICKMASTERS · CLICKMASTERS
          </div>
        </div>
      </div>
    </section>
  );
}