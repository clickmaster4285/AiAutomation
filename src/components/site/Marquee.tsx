export default function Marquee() {
  const items = ["25+ Countries", "98% Satisfaction", "24/7 AI Active", "500+ Projects Delivered", "120+ Global Clients"];
  const row = [...items, ...items, ...items];

  return (
    <div className="bg-ink text-white py-6 overflow-hidden">
      <style>{`
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        .marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>

      <div className="flex marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="eyebrow mx-8 inline-flex items-center gap-8">
            <span className="text-brand">•</span>{t}
          </span>
        ))}
      </div>

      <div className="flex marquee-reverse whitespace-nowrap pt-6">
        {row.map((t, i) => (
          <span key={i} className="eyebrow mx-8 inline-flex items-center gap-8">
            <span className="text-brand">•</span>{t}
          </span>
        ))}
      </div>
    </div>
  );
}