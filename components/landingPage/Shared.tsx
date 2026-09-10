export const Dot = ({ className = "" }: { className?: string }) => (
  <span className={`inline-block size-2 rounded-full bg-brand ${className}`} />
);

export const Marker = ({ n }: { n: string }) => (
  <span className="eyebrow italic  text-brand tabular-nums">{n}</span>
);

/**
 * Splits a heading into a "head" part and an italic-accent "tail" part
 * (the last `tailWords` words) so headings follow the landing design
 * pattern: normal display text + display-italic text-brand tail.
 */
export function splitHeading(heading: string, tailWords = 2) {
  const words = heading.split(/\s+/).filter(Boolean);
  if (words.length <= tailWords) {
    return { head: "", tail: words.join(" ") };
  }
  return {
    head: words.slice(0, words.length - tailWords).join(" "),
    tail: words.slice(words.length - tailWords).join(" "),
  };
}