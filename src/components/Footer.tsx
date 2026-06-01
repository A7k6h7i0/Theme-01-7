import { ArrowUpRight, Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cream border-t border-ink/10">
      <div className="container-x py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-accent">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 16 L10 6 L14 14 L20 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-2xl font-semibold">
                Atelier<span className="text-accent">.</span>Nova
              </span>
            </a>
            <p className="mt-6 text-ink/70 max-w-md leading-relaxed">
              An independent creative multipurpose studio crafting brands,
              websites and digital products for ambitious teams worldwide.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex items-center gap-2 max-w-md"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full bg-cream border border-ink/15 px-5 py-3 text-sm placeholder:text-ink/40 focus:outline-none focus:border-ink transition"
              />
              <button className="btn-primary !px-5">
                Subscribe
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-xs text-ink/50">
              One letter a month. No spam, unsubscribe anytime.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Studio"
              links={[
                ['About', '#about'],
                ['Services', '#services'],
                ['Process', '#'],
                ['Careers', '#'],
              ]}
            />
            <FooterCol
              title="Work"
              links={[
                ['Selected', '#work'],
                ['Archive', '#'],
                ['Awards', '#'],
                ['Press', '#'],
              ]}
            />
            <FooterCol
              title="Connect"
              links={[
                ['Contact', '#contact'],
                ['Journal', '#journal'],
                ['Instagram', '#'],
                ['LinkedIn', '#'],
              ]}
            />
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <h3 className="font-display text-[clamp(2.5rem,9vw,7rem)] font-light leading-none tracking-tightest">
              Let's make
              <br />
              <span className="italic text-accent">something good.</span>
            </h3>
          </div>
          <div className="lg:col-span-4 flex lg:items-end lg:justify-end gap-3">
            {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 hover:bg-ink hover:text-cream transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4 text-xs text-ink/55">
          <p>© {year} Atelier Nova LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms</a>
            <a href="#" className="link-underline">Cookies</a>
            <span>Made with care in New York &amp; Lisbon.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted mb-4">{title}</div>
      <ul className="space-y-2.5 text-ink/80">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="link-underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
