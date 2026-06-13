import { motion } from "framer-motion";
import robotMascot from "@/assets/robot-mascot2.png";
import { Marker } from "./Shared";
import CountUp from "./CountUp";

export default function Numbers() {
  const stats = [
    ["98", "%", "Automation Accuracy", "Mean performance across our workflows since deployment."],
    ["75", "%", "Time Saved", "Average time reclaimed per workflow per employee."],
    ["3", "×", "Lead Conversion", "Lift in pipeline conversion since automation rollout."],
    ["40", "%", "Cost Reduction", "Average operational cost savings vs. manual ops."],
  ];
  return (
    <section className="bg-paper py-12 md:py-24 relative">
      <div className="mx-auto max-w-[90vw] md:max-w-[84vw] px-4 md:px-6">
        <div className="flex items-center w-full gap-3 md:gap-4 mb-8 md:mb-12">
          <Marker n="08" />
          <div className="flex-1 h-px bg-black/10" />
          <span className="eyebrow text-muted-foreground whitespace-nowrap text-xs md:text-sm">Real Results</span>
        </div>

        <h2 className="display text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-8 md:mb-16 text-center md:text-left">
          Numbers<br />
          <span className="display-italic text-brand">that matter.</span>
        </h2>

        {/* Hidden on mobile, visible on md+ */}
        <img 
          src={robotMascot} 
          alt="" 
          loading="lazy" 
          width={640} 
          height={640} 
          className="absolute right-12 top-64 w-48 lg:w-68 float-y hidden md:block" 
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border-t border-border pt-6 md:pt-12 md:divide-x divide-border">
          {stats.map(([n, suf, label, desc], i) => (
            <motion.div 
              key={label}
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              className="px-0 md:px-8 first:pl-0 last:pr-0 text-center md:text-left"
            >
              <div className="flex items-baseline justify-center md:justify-start">
                <CountUp to={Number(n)} />
                <span className="display text-4xl sm:text-5xl md:text-6xl text-brand">{suf}</span>
              </div>
              <div className="text-brand capitalize text-base md:text-md font-medium mt-2 md:mt-3">{label}</div>
              <p className="text-xs text-muted-foreground mt-1 md:mt-2 max-w-[14rem] mx-auto md:mx-0">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}