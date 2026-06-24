"use client";

import Hero from "@/components/landingPage/Hero";
import Marquee from "@/components/landingPage/Marquee";
import Intelligence from "@/components/landingPage/Intelligence";
import Problem from "@/components/landingPage/Problem";
import Services from "@/components/landingPage/Services";
import Process from "@/components/landingPage/Process";
import Live from "@/components/landingPage/Live";
import Industries from "@/components/landingPage/Industries";
import Numbers from "@/components/landingPage/Numbers";
import Work from "@/components/landingPage/Work";
import TrustedBy from "@/components/landingPage/TrustedBy";
import Tools from "@/components/landingPage/Tools";
import FAQ from "@/components/landingPage/FAQ";
import Testimonials from "@/components/landingPage/Testimonials";
import CTA from "@/components/landingPage/CTA";

export default function HomePage() {
  return (
    <main className="bg-paper text-ink">
      <Hero />
      <Marquee />
      <Intelligence />
      <Problem />
      <Services />
      <Process />
      <Live />
      <Industries />
      <Numbers />
      <Work />
      <TrustedBy />
      <Tools />
      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}