const CLIENTS = [
  'Helio',
  'Maison Rive',
  'Flint',
  'Sable & Co',
  'Kobu',
  'Orbit',
  'Verde',
  'Atlas',
  'Nordwest',
  'Halcyon',
  'Lumen',
  'Vespera',
];

export default function Clients() {
  const list = [...CLIENTS, ...CLIENTS];
  return (
    <section className="py-16 md:py-20 bg-cream border-y border-ink/10">
      <div className="container-x">
        <div className="flex items-center justify-between gap-6 mb-8">
          <span className="eyebrow">Trusted by</span>
          <span className="text-xs text-ink/50 hidden sm:inline">
            12 of 280+ clients shown
          </span>
        </div>
      </div>
      <div className="overflow-hidden mask-fade-x">
        <div className="flex w-max items-center gap-14 animate-marquee-slow">
          {list.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-14 shrink-0"
            >
              <span className="font-display text-3xl md:text-4xl font-light tracking-tightest text-ink/70 whitespace-nowrap">
                {c}
              </span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink/30 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
