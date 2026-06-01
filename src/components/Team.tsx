import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const TEAM = [
  {
    name: 'Mira Solberg',
    role: 'Founder · Creative Director',
    bio: '15 years across Pentagram, Wieden+Kennedy and her own kitchen table.',
    img: 'https://picsum.photos/seed/team-mira/600/800',
  },
  {
    name: 'Theo Park',
    role: 'Head of Design',
    bio: 'Builds calm, clear interfaces. Ex-Stripe, ex-Linear.',
    img: 'https://picsum.photos/seed/team-theo/600/800',
  },
  {
    name: 'Amara Idris',
    role: 'Strategy Lead',
    bio: 'Brand strategist with a background in cultural anthropology.',
    img: 'https://picsum.photos/seed/team-amara/600/800',
  },
  {
    name: 'Luca Ferreira',
    role: 'Engineering Lead',
    bio: 'Headless commerce nerd. Ships fast websites that score 100/100.',
    img: 'https://picsum.photos/seed/team-luca/600/800',
  },
];

export default function Team() {
  return (
    <section className="py-24 md:py-36 bg-cream">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">The studio</span>
            <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl font-light">
              Small team, <em className="italic text-accent">senior</em> hands.
            </h2>
          </div>
          <p className="max-w-md text-ink/70 leading-relaxed">
            No juniors learning on your dime. Every person on your project has at
            least eight years of agency or in-house experience.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-accent hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <h3 className="mt-4 font-display text-2xl font-light">{m.name}</h3>
              <div className="text-sm text-accent">{m.role}</div>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
