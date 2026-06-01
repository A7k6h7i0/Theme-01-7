import { motion } from 'framer-motion';
import {
  Sparkles,
  Layers,
  Code2,
  Megaphone,
  Camera,
  Package,
  ArrowUpRight,
} from 'lucide-react';

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Brand Identity',
    desc: 'Naming, logo systems, visual language and brand guidelines that scale across every touchpoint.',
    bullets: ['Strategy & positioning', 'Logo & wordmarks', 'Guidelines & toolkits'],
  },
  {
    icon: Layers,
    title: 'Web & Product Design',
    desc: 'Beautiful, usable interfaces for websites, SaaS dashboards and mobile apps — designed in Figma, ready to build.',
    bullets: ['UX research', 'UI design systems', 'Design tokens'],
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Hand-crafted code in Next.js, Webflow, Shopify and WordPress. Fast, accessible and SEO-ready.',
    bullets: ['Headless commerce', 'CMS integrations', 'Core Web Vitals'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Launch campaigns, lifecycle automation and content systems that convert and compound over time.',
    bullets: ['Performance ads', 'SEO content', 'Email & CRM'],
  },
  {
    icon: Camera,
    title: 'Art Direction',
    desc: 'Photography, motion and editorial direction. We oversee shoots end-to-end, from mood to delivery.',
    bullets: ['Shoot production', 'Motion & 3D', 'Editorial design'],
  },
  {
    icon: Package,
    title: 'Packaging',
    desc: 'Tactile, sustainable packaging systems for premium consumer brands. From dieline to shelf.',
    bullets: ['Structural design', 'Print direction', 'Sustainability'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-ink text-cream">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow !text-cream/50 before:!bg-cream/30">What we do</span>
            <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl font-light">
              Six disciplines, <em className="italic text-accent">one</em> studio.
            </h2>
          </div>
          <p className="max-w-md text-cream/70 leading-relaxed">
            We're a full-service partner — combining strategy, design and
            engineering under one roof so nothing gets lost in translation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10 border border-cream/10 rounded-3xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative bg-ink p-8 lg:p-10 transition hover:bg-graphite"
            >
              <div className="flex items-start justify-between mb-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/15 group-hover:border-accent group-hover:bg-accent group-hover:text-ink transition">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-sm text-cream/40">
                  / {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display text-3xl font-light mb-3">{s.title}</h3>
              <p className="text-cream/65 leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-1.5 text-sm text-cream/55">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" /> {b}
                  </li>
                ))}
              </ul>
              <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 text-cream/30 opacity-0 -translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
