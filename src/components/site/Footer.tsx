export default function Footer() {
  return (
    <footer className="bg-paper border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© 2026 Clickmasters. All rights reserved.</div>
        <div className="flex gap-6">
          {["Support", "Blog", "Testimonials", "Careers", "About Us"].map((l) => (
            <a key={l} href="#" className="hover:text-brand">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}