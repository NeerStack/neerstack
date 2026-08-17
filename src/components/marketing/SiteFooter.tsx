import Link from "next/link";
import { Logo } from "@/components/marketing/Logo";
import { legalNav, services, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-void text-on-void">
      <div className="container-ns grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-on-void/65">
            {site.tagline} Design, build, test, and ship with a team that works like
            an extension of yours.
          </p>
          <address className="mt-6 max-w-sm text-sm not-italic leading-relaxed text-on-void/55">
            <p className="font-medium text-on-void/70">{site.legalName}</p>
            <p className="mt-1">{site.rcNumber}</p>
            {site.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="mt-3">
              <a className="transition hover:text-on-void" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-void/40">
            Services
          </p>
          <ul className="mt-5 space-y-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="inline-flex min-h-11 items-center text-sm text-on-void/70 transition hover:text-on-void"
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
          <ul className="mt-5 space-y-1 text-sm text-on-void/70">
            <li>
              <Link href="/about/" className="inline-flex min-h-11 items-center transition hover:text-on-void">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio/" className="inline-flex min-h-11 items-center transition hover:text-on-void">
                Work
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="inline-flex min-h-11 items-center transition hover:text-on-void">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="inline-flex min-h-11 items-center transition hover:text-on-void">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition hover:text-on-void"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-on-void/40">
            Legal
          </p>
          <ul className="mt-5 space-y-1 text-sm text-on-void/70">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center transition hover:text-on-void">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-ns flex flex-col gap-2 py-5 text-xs text-on-void/40 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.rcNumber}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">{site.address}</p>
        </div>
      </div>
    </footer>
  );
}
