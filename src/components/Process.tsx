import { motion } from 'framer-motion';

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    desc: 'A two-week deep dive into your business, audience and category. We run interviews, audits and workshops to find the truths worth telling.',
    deliverables: ['Strategy doc', 'Competitive audit', 'Brand brief'],
  },
  {
    n: '02',
    title: 'Define',
    desc: "We translate insight into territory — naming, positioning, tone of voice and visual direction. You get two distinct routes to react to, not a vague mood board.",
    deliverables: ['Positioning', 'Naming', 'Design directions'],
  },
  {
    n: '03',
    title: 'Design',
    desc: 'The chosen direction is refined into a full system — identity, web, product or packaging — pixel-perfect in Figma, ready to hand to engineering.',
    deliverables: ['Brand system', 'UI library', 'Guidelines'],
  },
  {
    n: '04',
    title: 'Deliver',
    desc: 'We build, ship and measure. Whether it goes to print, on the App Store or live on your domain, we own the launch and the first 90 days.',
    deliverables: ['Production', 'Launch', 'Aftercare'],
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-36 bg-cream">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">How we work</span>
            <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl font-light">
              A simple, <em className="italic text-accent">honest</em> process.
            </h2>
          </div>
          <p className="max-w-md text-ink/70 leading-relaxed">
            Four phases, weekly check-ins, one shared Notion. No black boxes,
            no surprises — just steady, considered work.
          </p>
        </div>

        <div className="space-y-px bg-ink/10 border-y border-ink/10">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group grid grid-cols-12 gap-6 items-start bg-cream py-10 md:py-12 px-2 hover:bg-sand transition"
            >
              <div className="col-span-2 md:col-span-2">
                <div className="font-display text-3xl md:text-5xl font-light text-accent">
                  {s.n}
                </div>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-display text-3xl md:text-4xl font-light">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-4 text-ink/75 leading-relaxed">
                {s.desc}
              </div>
              <div className="col-span-12 md:col-span-2">
                <div className="text-[11px] uppercase tracking-widest text-muted mb-2">
                  Deliverables
                </div>
                <ul className="space-y-1 text-sm text-ink/80">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
