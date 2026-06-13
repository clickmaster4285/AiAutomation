import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Intelligence from "@/components/site/Intelligence";
import Problem from "@/components/site/Problem";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import Live from "@/components/site/Live";
import Industries from "@/components/site/Industries";
import Numbers from "@/components/site/Numbers";
import Work from "@/components/site/Work";
import Testimonials from "@/components/site/Testimonials";
import Tools from "@/components/site/Tools";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";
import TrustedBy from "@/components/site/TrustedBy";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <main className="bg-paper text-ink">
      <Nav />
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
      <Footer />
    </main>
  );
}