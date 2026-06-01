import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-cream">
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="eyebrow">About the studio</span>
          <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl font-light">
            A studio built on <em className="italic text-accent">craft</em>,
            curiosity and care.
          </h2>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-10"
          >
            <img
              src="https://picsum.photos/seed/bridge-studio/1200/900"
              alt="Inside the Bridge studio"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-cream/95 px-4 py-2 text-xs uppercase tracking-widest">
              Inside the studio · 2024
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10 text-ink/80">
            <p className="leading-relaxed">
              We're a small team of designers, developers and strategists who
              believe the best work happens when business goals meet emotional
              storytelling. We collaborate closely — no layers, no noise.
            </p>
            <p className="leading-relaxed">
              From brand systems and editorial design to performant Shopify and
              Webflow builds, we ship work that's beautiful, fast and built to
              last beyond the launch.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-ink/10 pt-8">
            {[
              ['11', 'years young'],
              ['280+', 'projects shipped'],
              ['42', 'countries served'],
              ['16', 'awards won'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl font-light">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted">{l}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-10 inline-flex items-center gap-2 font-medium link-underline">
            Meet the team <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
