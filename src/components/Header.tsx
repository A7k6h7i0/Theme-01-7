import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/85 backdrop-blur-md border-b border-ink/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-ink text-accent transition group-hover:bg-accent group-hover:text-ink">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 16 L10 6 L14 14 L20 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Bridge<span className="text-accent">.</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="px-4 py-2 text-sm text-ink/80 transition hover:text-ink"
              >
                <span className="link-underline">{n.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex btn-primary">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 hover:bg-ink hover:text-cream transition"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink text-cream"
          >
            <div className="container-x flex items-center justify-between pt-5">
              <span className="font-display text-xl font-semibold">
                Bridge<span className="text-accent">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 hover:bg-cream hover:text-ink transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="container-x mt-20">
              <ul className="space-y-4">
                {NAV.map((n, i) => (
                  <motion.li
                    key={n.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-5xl sm:text-6xl md:text-7xl font-light tracking-tightest hover:text-accent transition"
                    >
                      {n.label}.
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-16 grid grid-cols-2 gap-6 text-sm text-cream/70 max-w-xl">
                <div>
                  <div className="text-cream/40 text-xs uppercase tracking-widest mb-2">Studio</div>
                  <p>14 Greene Street<br />SoHo, New York 10013</p>
                </div>
                <div>
                  <div className="text-cream/40 text-xs uppercase tracking-widest mb-2">Contact</div>
                  <p>hello@bridge.studio<br />+1 (212) 555 0144</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
