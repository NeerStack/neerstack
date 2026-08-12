import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { services } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title || "Service", description: service?.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const index = services.findIndex((item) => item.slug === slug);
  const next = services[(index + 1) % services.length];
  const prev = services[(index - 1 + services.length) % services.length];

  return (
    <>
      <section className="ns-mesh ns-grain relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="relative z-[2] container-ns">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              <Link href="/services/" className="transition hover:text-accent">
                Services
              </Link>
              <span aria-hidden>/</span>
              <span className="text-accent">0{index + 1}</span>
            </div>
            <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] tracking-tight text-ink text-balance md:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty md:text-xl">
              {service.hero}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact/">Start a project</Button>
              <Button href="/portfolio/" variant="ghost" arrow={false}>
                See related work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ns-white py-6 overflow-hidden">
        <div className="ns-marquee gap-10 px-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          {[...service.tools, ...service.tools, ...service.tools].map((tool, i) => (
            <span key={`${tool}-${i}`} className="inline-flex items-center gap-10">
              {tool}
              <span className="text-accent">●</span>
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-ns grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal variant="left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Overview</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-ink md:text-4xl">
              What this engagement covers
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">{service.summary}</p>
            <ul className="mt-8 space-y-3">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-transparent bg-paper-2/70 px-4 py-3 text-sm text-ink-soft transition hover:border-accent/30 hover:bg-ns-white md:text-base"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="scale" delayMs={120}>
            <div className="magnetic-card rounded-[1.75rem] border border-white/10 bg-void px-7 pt-8 pb-7 text-on-void md:px-9 md:pt-10 md:pb-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-void/45">Outcomes</p>
              <ul className="mt-6 space-y-5">
                {service.outcomes.map((item) => (
                  <li key={item} className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
                    <p className="font-display text-xl tracking-tight md:text-2xl">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact/" className="w-full sm:w-auto">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 py-20 md:py-28">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Process</p>
            <h2 className="font-display mt-3 max-w-2xl text-4xl tracking-tight text-ink md:text-5xl">
              How we move from brief to shipped work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delayMs={i * 80}>
                <article className="magnetic-card group h-full rounded-[1.5rem] border border-line bg-ns-white px-6 pt-8 pb-7 md:px-7 md:pt-9 md:pb-8">
                  <p className="font-mono text-xs text-accent">{step.step}</p>
                  <h3 className="font-display mt-4 text-2xl tracking-tight text-ink transition group-hover:text-accent">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-ns grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Deliverables</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-ink md:text-4xl">
              What you leave with
            </h2>
            <ol className="mt-8 space-y-0">
              {service.deliverables.map((item, i) => (
                <li
                  key={item}
                  className="interactive-row flex items-start gap-4 border-b border-line py-5"
                >
                  <span className="font-mono text-xs tabular-nums tracking-wide text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-ink md:text-lg">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">FAQ</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-ink md:text-4xl">
              Common questions
            </h2>
            <div className="mt-8">
              <FaqAccordion items={service.faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-void py-16 text-on-void md:py-20">
        <div className="container-ns flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-void/45">Continue</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">
              Explore the next capability
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href={`/services/${prev.slug}/`}
              variant="ghost"
              arrow={false}
              className="border-white/25 text-on-void hover:border-on-void/60 hover:bg-white/5"
            >
              ← {prev.title}
            </Button>
            <Button href={`/services/${next.slug}/`} variant="light" arrow={false}>
              {next.title} →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
