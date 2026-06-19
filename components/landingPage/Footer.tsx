export default function Footer() {
  return (
    <footer className="bg-paper border-t border-border py-6 md:py-8">
      <div className="mx-auto max-w-[90vw] md:max-w-7xl px-4 md:px-6 flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-3 md:gap-4 text-xs text-muted-foreground">
        <div className="order-2 md:order-1 text-center md:text-left">
          © 2026 Clickmasters. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-1 md:order-2">
          <a href="#contact" className="hover:text-brand text-xs whitespace-nowrap">Support</a>
          <a href="#work" className="hover:text-brand text-xs whitespace-nowrap">Blog</a>
          <a href="#testimonial" className="hover:text-brand text-xs whitespace-nowrap">Testimonials</a>
          <a href="#industries" className="hover:text-brand text-xs whitespace-nowrap">Industries</a>
          <a href="#about" className="hover:text-brand text-xs whitespace-nowrap">About Us</a>
        </div>
      </div>
    </footer>
  );
}