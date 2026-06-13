
import clickMastersLogo from "@/assets/clickmasters-logo.png";


export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">

       <a href="#top" className="flex items-center">
  <img
    src={clickMastersLogo}
    alt="ClickMasters"
    className="h-4 w-auto md:h-5"
    loading="lazy"
  />
</a>


        <nav className="hidden md:flex items-center gap-8 text-sm">
          {["Services", "Work", "Process", "Industries", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-brand transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className=" bg-ink text-white text-sm px-5 py-2 hover:bg-brand transition-colors">Book a Call</a>
      </div>
    </header>
  );
}