import { motion } from "framer-motion";
import { Marker } from "./Shared";

export default function Testimonials() {
  const items = [
    { quote: "I really enjoyed collaborating with ClickMasters. They launched a cool campaign that gave quick results and great sales for our services.", name: "Director, Dzherelo", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80" },
    { quote: "The team operates like co-founders. Every detail considered, every pixel obsessed over. Truly an extension of our company.", name: "Founder, Foldery", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80" },
    { quote: "Thank you very much for everything! We revived the account and the numbers are climbing every single week now.", name: "Corporate Photographer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
    { quote: "Six weeks from sketch to a paying customer base of thousands. The cadence is unlike anything we'd ever seen before.", name: "CEO, Lumen Health", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" },
  ];
  const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];
  const offsets = ["mt-0", "mt-8", "mt-2", "mt-10"];
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-[84vw] px-6">


        <div className="flex items-center w-full gap-4 mb-12">
  <Marker n="13" />

  <div className="flex-1 h-px bg-black/10" />

  <span className="eyebrow text-muted-foreground whitespace-nowrap">
    Client Voices
  </span>
</div>


        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 mb-16">
          <h2 className="display text-5xl md:text-7xl">Hear What Our<br /><span className="display-italic text-brand">Clients Have to Say</span></h2>
          <p className="text-sm text-muted-foreground md:self-end max-w-lg">
            Discover why businesses trust us for their custom software, web, and mobile app solutions. Read real feedback from our clients who have transformed their ideas into seamless digital experiences with our expertise.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, rotate: 0, scale: 1.03, zIndex: 10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 80 }}
              className={`relative bg-white p-3 pb-6 shadow-xl ${rotations[i]} ${offsets[i]} transform origin-center`}
              style={{ boxShadow: "0 20px 40px -15px rgba(0,0,0,0.25)" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
                <img src={t.img} alt={t.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale" />
              </div>
              <div className="eyebrow text-muted-foreground text-md mb-2 px-1">{t.name}</div>
              <p className="text-lg leading-snug px-1 font-serif italic" style={{ fontFamily: "'Caveat', 'Bradley Hand', cursive" }}>
                <span className="text-brand"></span> {t.quote}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}