import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs Offered", href: "/departments/computer" },
  { label: "Campus Life", href: "/#activities" },
  { label: "Placements", href: "/placement-cell" },
  { label: "Admissions", href: "/admissions" },
  { label: "Home", href: "/" }
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-slate/20 bg-[#f5f7fb]" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Site footer
      </h2>

      <div className="mx-auto max-w-grid px-4 md:px-8 py-14 grid gap-10 lg:grid-cols-4">
        <section>
          <div className="inline-flex items-center gap-3">
            <Image src="/images/college-logo.png" alt="RIT logo" width={56} height={22} className="h-11 w-auto rounded-sm bg-white p-1" />
            <p className="font-heading text-2xl leading-tight text-navy">RIT POLYTECHNIC PUNE</p>
          </div>
          <p className="mt-1 text-sm font-semibold text-gold">AICTE and MSBTE Approved Institute</p>

          <p className="mt-7 text-2xl font-heading text-navy">Address</p>
          <address className="mt-2 not-italic text-slate text-base leading-8">
            S. No. 35/4, Vadgaon-Shinde Road,
            <br />
            Lohegaon, Pune-411047.
          </address>
        </section>

        <section>
          <h3 className="font-heading text-3xl text-navy">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="inline-flex items-center gap-3 text-slate hover:text-navy transition-colors">
                  <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-navy text-white text-xs">
                    ›
                  </span>
                  <span className="text-lg leading-none">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-3xl text-navy">Get In Touch</h3>
          <ul className="mt-5 space-y-4 text-lg text-slate">
            <li>
              <a href="tel:+919607956658" className="hover:text-navy transition-colors">
                Tel. 9607956658/59/60
              </a>
            </li>
            <li>
              <a href="mailto:kesadmin@ritppune.com" className="hover:text-navy transition-colors">
                Email: kesadmin@ritppune.com
              </a>
            </li>
            <li>
              <a href="https://www.ritppune.com" target="_blank" rel="noreferrer" className="hover:text-navy transition-colors">
                Website: www.ritppune.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=S.+No.+35/4,+Vadgaon-Shinde+Road,+Lohegaon,+Pune-411047"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-navy hover:text-gold transition-colors"
              >
                View Campus Location
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-heading text-3xl text-navy">Join Our Newsletter</h3>
          <p className="mt-5 text-lg leading-8 text-slate">
            Stay up to date with our latest notices, campus events, and admissions announcements.
          </p>

          <form className="mt-6 flex flex-col sm:flex-row gap-4" action="#" method="post">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="h-14 w-full rounded-xl border border-slate/25 bg-white px-5 text-lg text-slate outline-none focus:border-navy"
            />
            <button
              type="submit"
              className="h-14 min-w-36 rounded-xl border border-navy bg-navy px-6 text-lg font-semibold text-white transition-colors hover:bg-[#0c3563]"
            >
              Sign Up
            </button>
          </form>
        </section>
      </div>

      <div className="bg-navy">
        <div className="mx-auto max-w-grid px-4 md:px-8 h-16 flex items-center justify-between text-white text-sm md:text-base">
          <p>© 2026. All Rights Reserved.</p>
          <div className="flex items-center gap-6" aria-label="Social media links">
            <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
