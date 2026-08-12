import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";
import { services } from "@/content/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="ns-mesh ns-grain relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-[2] container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Services
            </p>
            <h1 className="font-display mt-3 max-w-4xl text-5xl tracking-tight text-ink text-balance md:text-7xl">
              Capabilities that stay connected.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Design, engineering, quality, and product leadership under one roof.
              Engage a single discipline or the full stack.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-ns space-y-5">
          {services.map((service, index) => (
            <Reveal key={service.slug} delayMs={index * 50}>
              <Link
                href={`/services/${service.slug}/`}
                className="magnetic-card group grid overflow-hidden rounded-[1.75rem] border border-line bg-ns-white md:grid-cols-[140px_1fr_auto]"
              >
                <div className="flex items-end bg-paper-2 px-6 py-8 md:items-center md:justify-center md:py-10">
                  <span className="font-mono text-sm text-accent">0{index + 1}</span>
                </div>
                <div className="px-6 pt-8 pb-7 md:px-9 md:pt-10 md:pb-9">
                  <h2 className="font-display text-3xl tracking-tight text-ink transition group-hover:text-accent md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
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
                </div>
                <div className="flex items-center px-6 pb-7 md:px-9 md:py-10">
                  <span className="text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    Open
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="container-ns mt-14">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-white/10 bg-void px-7 py-9 text-on-void md:flex-row md:items-center md:px-10 md:py-11">
              <div>
                <h2 className="font-display text-3xl tracking-tight">Not sure where to start?</h2>
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
    </>
  );
}
