
"use client";
import { motion } from "framer-motion";
import { Marker } from "./Shared";

export default function Industries() {
  const items = [
    ["Real Estate", "3× more booked calls", "Automated outreach, property matching, appointment scheduling, and follow-up sequences."],
    ["Healthcare", "60% admin reduction", "Patient onboarding, reminders, billing workflows, and compliance automation."],
    ["Finance", "99.9% accuracy", "Document processing, compliance checks, client reporting, and fraud detection."],
    ["Education", "5× enrollment rates", "Student inquiry automation, personalized outreach, and retention systems."],
    ["Marketing", "60% lower CAC", "Omnichannel campaign optimization, lead scoring, attribution tracking, and content automation."],
    ["Ecommerce", "2× repeat purchases", "Order management, abandoned cart recovery, post-purchase automations."],
    ["SaaS", "85% churn reduction", "Onboarding automation, health scoring, renewal alerts, and expansion triggers."],
  ];
  return (
    <section id="industries" className="bg-ink text-white py-24">
          <div className="mx-auto max-w-[84vw] px-6">
              

       <div className="flex items-center w-full gap-4 mb-12">
  <Marker n="07" />

  <div className="flex-1 h-px bg-white/10" />

  <span className="eyebrow text-white/60 whitespace-nowrap">
    Industries
  </span>
</div>


        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <h2 className="display text-5xl md:text-7xl">We Serve Every<br /><span className="display-italic text-brand">Major Industry</span></h2>
          <p className="text-sm text-white/60 md:text-right md:self-end max-w-xs md:ml-auto">Proven results across every major vertical. Niche-agnostic. Results obsessed.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-px bg-white/10 border border-black/10">
          {items.map((it, i) => (
            <motion.div key={it[0]}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`bg-ink p-8 hover:bg-white/5 transition-colors ${i < 4 ? "md:col-span-3" : "md:col-span-4"}`}>
              <div className="eyebrow text-white/40 py-6">0{i + 1}</div>
                  <h3 className="display text-3xl mb-2 pb-6 border-white/10 border-b">{it[0]}</h3>
                  

              <div className="text-brand text-md  pt-4  mb-3">{it[1]}</div>
              <p className="text-md text-white/60 leading-relaxed">{it[2]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}