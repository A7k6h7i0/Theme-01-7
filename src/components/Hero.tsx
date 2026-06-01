import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden grain">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[420px] w-[420px] rounded-full bg-ink/10 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Creative Multipurpose Studio · Est. 2014
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-sm text-ink/70"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent stroke-accent" />
              ))}
            </div>
            <span>4.9 · 280+ projects shipped</span>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-display text-[clamp(3.5rem,11vw,11rem)] font-light"
        >
          We design
          <span className="inline-flex items-center align-middle mx-3 md:mx-5">
            <span className="relative inline-block h-[0.8em] w-[1.6em] overflow-hidden rounded-full">
              <img
                src="https://picsum.photos/seed/bridge-hero/400/400"
                alt=""
                className="h-full w-full object-cover"
              />
            </span>
          </span>
          brands,
          <br />
          build <em className="font-medium italic text-accent">experiences</em> &
          <br />
          tell stories that <span className="italic font-normal">last.</span>
        </motion.h1>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 text-lg md:text-xl text-ink/75 leading-relaxed max-w-xl"
          >
            Bridge is an independent multidisciplinary studio crafting
            identities, websites and digital products for ambitious brands across
            fashion, hospitality, technology and culture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-4 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="btn-primary">
              See selected work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">Start a project</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-3 flex items-center gap-4 lg:justify-end"
          >
            <div className="relative">
              <div className="h-16 w-16 rounded-full bg-accent text-ink flex items-center justify-center animate-float">
                <ArrowDown className="h-6 w-6" />
              </div>
            </div>
            <div className="text-sm text-ink/70 leading-tight">
              Scroll to explore<br />
              <span className="text-ink/40">14 chapters · ~6 min</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
