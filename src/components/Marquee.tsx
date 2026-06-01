type Props = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

export default function Marquee({ items, reverse, className = '' }: Props) {
  const list = [...items, ...items, ...items];
  return (
    <div className={`overflow-hidden mask-fade-x ${className}`}>
      <div
        className={`flex w-max items-center gap-12 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {list.map((it, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display text-5xl md:text-7xl font-light tracking-tightest whitespace-nowrap">
              {it}
            </span>
            <span className="inline-block h-3 w-3 rounded-full bg-accent shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
