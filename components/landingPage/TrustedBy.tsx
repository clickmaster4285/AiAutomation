"use client";
import { motion } from "framer-motion";
import { Marker } from "./Shared";

function TrustedBy() {
  const items = [
    { quote: "Clickmasters replaced 3 full-time roles with a single AI system that outperforms all of them. The ROI was visible in week two.", name: "Marcus Chen", role: "CEO, Praxis Ventures" },
    { quote: "I was skeptical about AI automation but the results are undeniable. Our lead response time went from 4 hours to 8 seconds.", name: "Sophia Reeves", role: "Head of Growth, StreamBeam" },
    { quote: "The most professional automation team we've ever worked with. They understood our compliance requirements and built around them perfectly.", name: "Dr. James Okafor", role: "CIO, MedFlow Health" },
    { quote: "Our sales team can now focus entirely on closing because everything upstream is handled by AI. Revenue is up 240% YoY.", name: "Elena Vasquez", role: "VP Sales, Polestar Corp" },
  ];
  return (
    <section id="testimonial" className="bg-paper py-24">
          <div className="mx-auto max-w-[84vw] px-6">
              
    <div className="flex items-center w-full gap-4 mb-12">
  <Marker n="10" />

  <div className="flex-1 h-px bg-black/10" />

  <span className="eyebrow text-muted-foreground whitespace-nowrap">
    Testimonials
  </span>
</div>
              

        <h2 className="display text-5xl md:text-7xl mb-12">Clients Who<br /><span className="display-italic text-brand">Trust Us.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {items.map((t, i) => (
            <motion.div key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-paper p-14">
              <div className="text-brand font-serif text-5xl leading-none mb-2">"</div>
              <p className="italic font-serif text-xl leading-snug mb-10">{t.quote}</p>
              <div className="border-t border-border pt-8">
                <div className="font-semibold text-md">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
