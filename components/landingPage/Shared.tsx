export const Dot = ({ className = "" }: { className?: string }) => (
  <span className={`inline-block size-2 rounded-full bg-brand ${className}`} />
);

export const Marker = ({ n }: { n: string }) => (
  <span className="eyebrow italic  text-brand tabular-nums">{n}</span>
);