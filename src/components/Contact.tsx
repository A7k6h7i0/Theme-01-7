import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Check } from 'lucide-react';

const BUDGETS = ['< $15k', '$15k – $40k', '$40k – $100k', '$100k +'];
const NEEDS = ['Brand', 'Web', 'Product', 'Packaging', 'Marketing', 'Other'];

export default function Contact() {
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(['Brand']);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [sent, setSent] = useState(false);

  const toggleNeed = (n: string) =>
    setSelectedNeeds((prev) =>
      prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]
    );

  return (
    <section id="contact" className="py-24 md:py-36 bg-ink text-cream">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow !text-cream/50 before:!bg-cream/30">Let's talk</span>
            <h2 className="mt-6 text-display text-5xl md:text-6xl lg:text-7xl font-light">
              Have a <em className="italic text-accent">project</em> in mind?
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed max-w-md">
              We take on a small, curated number of projects each quarter. Tell us
              about yours and we'll respond within two business days.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <a href="mailto:hello@bridge.studio" className="flex items-center gap-3 hover:text-accent transition">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15">
                  <Mail className="h-4 w-4" />
                </span>
                hello@bridge.studio
              </a>
              <a href="tel:+12125550144" className="flex items-center gap-3 hover:text-accent transition">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15">
                  <Phone className="h-4 w-4" />
                </span>
                +1 (212) 555 0144
              </a>
              <div className="flex items-center gap-3 text-cream/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15">
                  <MapPin className="h-4 w-4" />
                </span>
                14 Greene Street, SoHo · New York
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-7 bg-graphite/60 backdrop-blur rounded-3xl p-8 md:p-10 border border-cream/10"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-ink mb-6">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-light mb-3">
                  Thanks — message received.
                </h3>
                <p className="text-cream/70 max-w-md">
                  We'll be in touch within two business days. In the meantime, feel free to browse our journal.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" placeholder="Jane Cooper" />
                  <Field label="Company" name="company" placeholder="Acme Inc." />
                  <Field label="Email" name="email" type="email" placeholder="jane@acme.com" />
                  <Field label="Website" name="url" placeholder="acme.com" />
                </div>

                <div className="mt-8">
                  <div className="text-xs uppercase tracking-widest text-cream/50 mb-3">
                    What do you need?
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {NEEDS.map((n) => (
                      <button
                        type="button"
                        key={n}
                        onClick={() => toggleNeed(n)}
                        className={`rounded-full px-4 py-2 text-sm transition border ${
                          selectedNeeds.includes(n)
                            ? 'bg-accent text-ink border-accent'
                            : 'border-cream/20 text-cream/80 hover:border-cream'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-xs uppercase tracking-widest text-cream/50 mb-3">
                    Budget
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`rounded-full px-4 py-2 text-sm transition border ${
                          budget === b
                            ? 'bg-cream text-ink border-cream'
                            : 'border-cream/20 text-cream/80 hover:border-cream'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">
                    Tell us about it
                  </label>
                  <textarea
                    rows={5}
                    placeholder="A few lines about goals, timeline and anything you'd like us to know."
                    className="w-full rounded-2xl bg-ink/60 border border-cream/10 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-accent transition"
                  />
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-cream/50 max-w-xs">
                    By submitting you agree to our privacy policy. We'll never share your details.
                  </p>
                  <button type="submit" className="btn-primary bg-accent text-ink hover:bg-cream hover:text-ink">
                    Send enquiry <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-cream/50 mb-2">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-full bg-ink/60 border border-cream/10 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-accent transition"
      />
    </label>
  );
}
