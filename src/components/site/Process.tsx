import { motion } from "framer-motion";
import robotAstronaut from "@/assets/process.png";
import { Marker } from "./Shared";

export default function Process() {
  const steps = [
    ["Discover", "Week 1"], ["Strategize", "Week 2"],
    ["Build", "Weeks 3-5"], ["Deploy", "Week 6"], ["Optimize", "Ongoing"],
  ];
  return (
    <section id="process" className="bg-ink text-white py-24">
          <div className="mx-auto max-w-[84vw] px-6">
              
      <div className="flex items-center w-full gap-4 mb-12">
  <Marker n="05" />

  <div className="flex-1 h-px bg-white/10" />

  <span className="eyebrow text-white/60 whitespace-nowrap">
    Our Process
  </span>
</div>
              

        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="display text-7xl">How It<br /><span className="display-italic text-brand">Works</span></h2>
                      <p className="text-white/60 text-sm mt-4 max-w-md">From discovery to deployment in as little as 6 weeks.</p>
                      




            <motion.img src={robotAstronaut} alt="" loading="lazy" width={640} height={640}
              className="w-115 mt-8"
                          animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} />
                      






                      
          </div>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {steps.map(([name, when], i) => (
              <motion.div key={name}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-8 py-12 group">
                <span className="eyebrow text-white/40 tabular-nums">0{i + 1}</span>
                <span className="display text-4xl group-hover:text-brand group-hover:translate-x-2 transition-all">{name}</span>
                <span className="eyebrow text-white/60">{when}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}