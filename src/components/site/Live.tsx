import { motion } from "framer-motion";
import { Marker } from "./Shared";

export default function Live() {
  const rows = [
    ["Website Form", "Entry Trigger", "Trigger", "amber"],
    ["AI Agent", "Processing & Routing", "Active", "rose"],
    ["CRM Update", "HubSpot / Salesforce", "Done", "emerald"],
    ["Email Sequence", "Personalized Outreach", "Done", "emerald"],
    ["Calendar Booking", "Auto-Scheduled", "Done", "emerald"],
    ["Sales Team", "Ready to Close", "Output", "sky"],
  ];

  const tone: Record<string, string> = {
    amber: "bg-amber-100 text-amber-700",
    rose: "bg-rose-100 text-rose-700",
    emerald: "bg-emerald-100 text-emerald-700",
    sky: "bg-sky-100 text-sky-700",
  };

  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-[84vw] px-6">
        <div className="flex items-center w-full gap-4 mb-12">
          <Marker n="06" />
          <div className="flex-1 h-px bg-black/10" />
          <span className="eyebrow text-muted-foreground whitespace-nowrap">Live System</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="display text-7xl">Watch the<br />automation<br /><span className="display-italic text-brand">in motion.</span></h2>
            <p className="text-muted-foreground mt-6 max-w-xl text-md leading-relaxed">
              From the moment a prospect fills in your form, our AI takes over — qualifying, enriching, syncing, and booking — without a single human touch.
            </p>
            <div className="flex gap-10 mt-10">
              <div><div className="display text-4xl">&lt;2s</div><div className="eyebrow text-muted-foreground mt-1">Response</div></div>
              <div><div className="display text-4xl">24/7</div><div className="eyebrow text-muted-foreground mt-1">Active</div></div>
              <div><div className="display text-4xl">100%</div><div className="eyebrow text-muted-foreground mt-1">Coverage</div></div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-lg border border-border bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-amber-400" />
              <span className="size-3 rounded-full bg-emerald-400" />
              <span className="text-xs text-muted-foreground mx-auto">automation.pipeline</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                LIVE
              </span>
            </div>

            <div className="divide-y divide-border">
              {rows.map(([n, sub, s, c], i) => {
                const isActive = s === "Active";
                return (
                  <motion.div key={n}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.15 }}
                    className={`flex items-center justify-between px-5 py-6 text-sm transition-opacity ${
                      isActive ? "opacity-100" : "opacity-35"
                    }`}>
                    <div className="flex items-center gap-3">
                      <span className={`size-1.5 rounded-full ${isActive ? "bg-brand" : "bg-muted-foreground/40"}`} />
                      <div>
                        <div className={`font-medium ${isActive ? "" : "text-muted-foreground"}`}>{n}</div>
                        <div className="text-xs text-muted-foreground">{sub}</div>
                      </div>
                    </div>
                  <span className={`text-xs px-2.5 py-1 rounded ${tone[c]} ${!isActive ? "opacity-90" : ""}`}>{s}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="px-5 py-3 text-xs border-t border-border flex items-center justify-between">
              <span className="text-muted-foreground">Processed 2,847 leads today</span>
              <span className="text-emerald-600 font-medium">All systems operational</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}