import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tags: string[];
  cover: string;
  span?: 'wide' | 'tall' | 'normal';
};

const PROJECTS: Project[] = [
  {
    id: 'helio',
    title: 'Helio — Solar Storage Rebrand',
    client: 'Helio Energy',
    category: 'Brand',
    year: '2025',
    tags: ['Identity', 'Web', 'Motion'],
    cover: 'https://picsum.photos/seed/helio-cover/1400/1000',
    span: 'wide',
  },
  {
    id: 'maison',
    title: 'Maison Rive — Fragrance House',
    client: 'Maison Rive',
    category: 'Packaging',
    year: '2024',
    tags: ['Packaging', 'Art Direction'],
    cover: 'https://picsum.photos/seed/maison-rive/900/1100',
    span: 'tall',
  },
  {
    id: 'flint',
    title: 'Flint — Banking for Builders',
    client: 'Flint',
    category: 'Product',
    year: '2024',
    tags: ['Product', 'Design System'],
    cover: 'https://picsum.photos/seed/flint-bank/900/700',
  },
  {
    id: 'sable',
    title: 'Sable & Co — Coastal Hotels',
    client: 'Sable Group',
    category: 'Web',
    year: '2024',
    tags: ['Web', 'Editorial'],
    cover: 'https://picsum.photos/seed/sable-hotels/900/700',
  },
  {
    id: 'kobu',
    title: 'Kobu — Specialty Coffee',
    client: 'Kobu Roasters',
    category: 'Brand',
    year: '2023',
    tags: ['Identity', 'Packaging'],
    cover: 'https://picsum.photos/seed/kobu-coffee/1400/900',
    span: 'wide',
  },
  {
    id: 'orbit',
    title: 'Orbit — Music Discovery App',
    client: 'Orbit Audio',
    category: 'Product',
    year: '2023',
    tags: ['Product', 'Motion'],
    cover: 'https://picsum.photos/seed/orbit-music/900/1100',
    span: 'tall',
  },
  {
    id: 'verde',
    title: 'Verde — Plant-based Skincare',
    client: 'Verde Labs',
    category: 'Packaging',
    year: '2023',
    tags: ['Packaging', 'Web'],
    cover: 'https://picsum.photos/seed/verde-skincare/900/700',
  },
  {
    id: 'atlas',
    title: 'Atlas — Travel Editorial',
    client: 'Atlas Magazine',
    category: 'Editorial',
    year: '2022',
    tags: ['Editorial', 'Art Direction'],
    cover: 'https://picsum.photos/seed/atlas-mag/900/700',
  },
];

const FILTERS = ['All', 'Brand', 'Web', 'Product', 'Packaging', 'Editorial'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const visible =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 md:py-36 bg-cream">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected work · 2022 – 2025</span>
            <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl font-light">
              Work we're <em className="italic text-accent">proud</em> of.
            </h2>
          </div>
          <a href="#" className="btn-ghost">
            View archive <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filter === f
                  ? 'bg-ink text-cream'
                  : 'border border-ink/15 text-ink/70 hover:border-ink hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px] md:auto-rows-[280px] lg:auto-rows-[320px]">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.a
                layout
                key={p.id}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl bg-sand ${
                  p.span === 'wide'
                    ? 'md:col-span-2 row-span-2'
                    : p.span === 'tall'
                    ? 'row-span-2'
                    : ''
                }`}
              >
                <img
                  src={p.cover}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-90" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-cream">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-widest">
                      {p.category}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-cream/60 mb-2">
                      {p.client} · {p.year}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-light leading-tight">
                      {p.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-cream/25 px-2.5 py-0.5 text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
