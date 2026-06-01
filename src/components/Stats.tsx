import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 280, suffix: '+', label: 'Projects shipped worldwide' },
  { value: 42, suffix: '', label: "Countries we've served" },
  { value: 16, suffix: '', label: 'Industry awards' },
  { value: 98, suffix: '%', label: 'Client retention rate' },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 md:py-24 bg-accent text-ink">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((s) => (
          <div key={s.label} className="border-l border-ink/15 pl-5">
            <div className="font-display text-5xl md:text-7xl font-light tracking-tightest">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-ink/80 max-w-[180px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
