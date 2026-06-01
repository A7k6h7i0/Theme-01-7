import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const POSTS = [
  {
    cat: 'Essay',
    date: 'May 12, 2026',
    title: 'Why the best brand systems leave room to breathe',
    excerpt:
      'On constraints, white space and the discipline of not adding one more thing.',
    img: 'https://picsum.photos/seed/journal-essay-1/900/700',
    read: '8 min',
  },
  {
    cat: 'Case study',
    date: 'Apr 28, 2026',
    title: "How we rebuilt Helio's site in six weeks",
    excerpt:
      "A look behind the scenes at our fastest brand and web overhaul yet — and what we'd do differently.",
    img: 'https://picsum.photos/seed/journal-case-1/900/700',
    read: '12 min',
  },
  {
    cat: 'Notes',
    date: 'Apr 4, 2026',
    title: 'Six tools we actually use in 2026',
    excerpt:
      'Beyond Figma and Notion — the small, sharp tools that have quietly changed our workflow this year.',
    img: 'https://picsum.photos/seed/journal-tools-1/900/700',
    read: '5 min',
  },
];

export default function Journal() {
  return (
    <section id="journal" className="py-24 md:py-36 bg-cream">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">The Journal</span>
            <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl font-light">
              Notes from the <em className="italic text-accent">studio</em>.
            </h2>
          </div>
          <a href="#" className="btn-ghost">
            All entries <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col"
            >
              <a href="#" className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                <img
                  src={p.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-cream/90 px-3 py-1 text-[11px] uppercase tracking-widest">
                  {p.cat}
                </span>
              </a>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-muted">
                <span>{p.date}</span>
                <span className="inline-block h-px w-4 bg-muted" />
                <span>{p.read} read</span>
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-light leading-tight">
                <a href="#" className="link-underline">
                  {p.title}
                </a>
              </h3>
              <p className="mt-3 text-ink/70 leading-relaxed">{p.excerpt}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent link-underline w-fit"
              >
                Read entry <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
