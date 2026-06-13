import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: to, duration: 1.8, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      onUpdate: () => { if (ref.current) ref.current.textContent = Math.round(obj.v).toString(); },
    });
    return () => { tween.kill(); };
  }, [to]);
  return <span ref={ref} className="display text-7xl md:text-8xl">0</span>;
}