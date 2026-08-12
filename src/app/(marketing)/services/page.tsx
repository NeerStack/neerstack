import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";
import { services } from "@/content/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <section className="ns-mesh ns-grain relative pt-[7.5rem] pb-24 md:pt-[9rem] md:pb-32">
      <div className="relative z-[2] container-ns">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Services
          </p>
          <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl md:text-7xl">
            Capabilities that stay connected.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Design, engineering, quality, and product leadership under one roof.
            Engage a single discipline or the full stack.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-col gap-8 md:mt-20 md:gap-10">
          {services.map((service, index) => (
            <Reveal key={service.slug} delayMs={index * 40} className="block w-full">
              <Link
                href={`/services/${service.slug}/`}
                className="magnetic-card group flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ns-white md:grid md:grid-cols-[7.5rem_1fr_auto]"
              >
                <div className="flex items-center gap-3 border-b border-line bg-paper-2 px-7 py-5 md:flex-col md:items-center md:justify-center md:gap-0 md:border-b-0 md:border-r md:px-6 md:py-12">
                  <span className="font-mono text-sm tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg tracking-tight text-ink md:hidden">
                    {service.title}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-7 py-8 sm:px-8 sm:py-10 md:px-11 md:py-12">
                  <h2 className="font-display hidden text-3xl tracking-tight text-ink transition group-hover:text-accent md:block md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-ink-soft md:mt-3 md:text-base">
                    {service.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent md:hidden">
                    Open
                  </span>
                </div>

                <div className="hidden items-center px-10 md:flex">
                  <span className="inline-flex min-h-11 items-center text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    Open
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 block md:mt-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-white/10 bg-void px-8 py-11 text-on-void md:flex-row md:items-center md:px-12 md:py-14">
            <div>
              <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                Not sure where to start?
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-on-void/70">
                Share the outcome you need. We will recommend the leanest mix of
                services to get there.
              </p>
            </div>
            <Button href="/contact/">Talk to us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
