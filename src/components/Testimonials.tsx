import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const QUOTES = [
  {
    quote:
      'Atelier Nova reframed how we talk about our entire category. Six months after launch, organic traffic is up 240% and we finally sound like the company we always wanted to be.',
    author: 'Sasha Pereira',
    role: 'CMO, Helio Energy',
    img: 'https://picsum.photos/seed/testimonial-sasha/300/300',
  },
  {
    quote:
      'A rare studio that takes business outcomes as seriously as the design itself. The strategy work alone was worth twice what we paid.',
    author: 'Marcus Lin',
    role: 'Founder, Flint',
    img: 'https://picsum.photos/seed/testimonial-marcus/300/300',
  },
  {
    quote:
      'They obsessed over every detail of our packaging — down to the substrate. Our retail partners now ask for the brand by name.',
    author: 'Elena Voss',
    role: 'Brand Director, Maison Rive',
    img: 'https://picsum.photos/seed/testimonial-elena/300/300',
  },
  {
    quote:
      "Calm, considered, fast. We've worked with five agencies in ten years; nobody else has come close.",
    author: 'Kenji Takeda',
    role: 'CEO, Sable Group',
    img: 'https://picsum.photos/seed/testimonial-kenji/300/300',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const q = QUOTES[i];
  const next = () => setI((p) => (p + 1) % QUOTES.length);
  const prev = () => setI((p) => (p - 1 + QUOTES.length) % QUOTES.length);

  return (
    <section className="py-24 md:py-36 bg-ink text-cream relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/40 blur-3xl" />
      </div>
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow !text-cream/50 before:!bg-cream/30">Kind words</span>
            <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl font-light">
              From the people we <em className="italic text-accent">work with</em>.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 hover:bg-cream hover:text-ink transition"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 hover:bg-cream hover:text-ink transition"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <Quote className="h-10 w-10 text-accent mb-6" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
              >
                "{q.quote}"
              </motion.blockquote>
            </AnimatePresence>
          </div>
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
              >
                <img
                  src={q.img}
                  alt={q.author}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-display text-xl">{q.author}</div>
                  <div className="text-sm text-cream/60">{q.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex gap-1.5">
              {QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? 'w-8 bg-accent' : 'w-4 bg-cream/20'
                  }`}
                  aria-label={`Show quote ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
