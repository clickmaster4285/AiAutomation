"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Dot, Marker } from "./Shared";

export default function Intelligence() {
  return (
    <section id="about" className="bg-paper py-24">
      <div className="mx-auto max-w-[84vw] px-6">

        {/* Header */}
        <div className="flex items-center w-full mb-12 gap-4">
          <Marker n="02" />
          <div className="flex-1 border-t border-black/10" />
          <p className="eyebrow text-muted-foreground whitespace-nowrap">
            What We Do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="relative">
            <h2 className="display text-5xl md:text-8xl">
              Intelligence
              <br />
              that works
              <br />
              <span className="display-italic text-brand">
                while you sleep.
              </span>
            </h2>

            {/* Mascot */}
            <motion.div
              className="absolute -top-6 right-8 w-52 md:w-64 float-y"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Image
                src="/images/robot-mascot2.png"
                alt="mascot"
                width={640}
                height={640}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10">
              {[
                "Zero Downtime",
                "AI-Native",
                "Fully Managed",
                "ROI in 30 Days",
              ].map((t) => (
                <span
                  key={t}
                  className="text-sm border border-gray-300 px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              AI automation replaces manual, repetitive work with intelligent
              systems that qualify, communicate, organize, and convert — 24/7
              without human intervention.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              We design, build, and deploy end-to-end automation ecosystems
              tailored to your specific workflows and goals.
            </p>

            <div className="divide-y divide-border border-t border-border">
              {[
                ["Lead Captured", "Website / Landing Page"],
                ["AI Qualification", "Instant Scoring & Routing"],
                ["CRM Sync", "HubSpot / Salesforce"],
                ["Follow Up Sent", "Personalized Outreach"],
                ["Meeting Booked", "Auto Calendar Invite"],
              ].map(([a, b], i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="eyebrow text-muted-foreground tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-medium text-lg">{a}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}