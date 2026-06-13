import { motion } from "framer-motion";
import robotMascot from "@/assets/robot-mascot2.png";
import clickMastersLogo from "@/assets/clickmasters-logo.png";

export default function CTA() {
  return (
    <section className="bg-paper py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center relative">
        <motion.img src={robotMascot} alt="" loading="lazy" width={640} height={640}
          className="absolute left-4 top-0 w-24 md:w-52"
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }} transition={{ duration: 5, repeat: Infinity }} />
        
        <motion.img src={robotMascot} alt="" loading="lazy" width={640} height={640}
          className="absolute right-4 top-12 w-24 md:w-52"
          animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} />
        



      <div className="mb-6 flex justify-center">
  <img
    src={clickMastersLogo}
    alt="ClickMasters"
    className="h-10 md:h-12 w-auto"
    loading="lazy"
  />
</div>


        <h2 className="display text-5xl md:text-8xl py-8">Got A Vision?</h2>
        <h2 className="display-italic text-5xl md:text-8xl mt-2">Let's Build It.</h2>
        <p className="text-lg text-muted-foreground mt-10 max-w-md mx-auto">The AI automation agency for businesses that refuse to be left behind.</p>
        <div className="mt-16 overflow-hidden">
          <div className="display text-[8vw] text-ink/5 whitespace-nowrap">CLICKMASTERS · CLICKMASTERS</div>
        </div>
      </div>
    </section>
  );
}