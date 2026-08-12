import Link from "next/link";
import { Logo } from "@/components/marketing/Logo";
import { services, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-void text-on-void">
      <div className="container-ns grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-void/65">
            {site.tagline} Design, build, test, and ship with a team that works like
            an extension of yours.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-void/40">
            Services
          </p>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="text-sm text-on-void/70 transition hover:text-on-void"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-void/40">
            Company
          </p>
          <ul className="mt-5 space-y-3 text-sm text-on-void/70">
            <li><Link href="/about/" className="transition hover:text-on-void">About</Link></li>
            <li><Link href="/portfolio/" className="transition hover:text-on-void">Work</Link></li>
            <li><Link href="/blog/" className="transition hover:text-on-void">Blog</Link></li>
            <li><Link href="/contact/" className="transition hover:text-on-void">Contact</Link></li>
            <li><Link href="/brand/" className="transition hover:text-on-void">Brand</Link></li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-on-void">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-ns py-5 text-xs text-on-void/40">
          <p>© {new Date().getFullYear()} NeerStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
