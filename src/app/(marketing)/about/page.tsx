import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";
import { engagementSteps, principles, services, site, stats } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "NeerStack is a software team that designs, builds, and ships with product partners.",
};

export default function AboutPage() {
  return (
    <>
      <section className="ns-mesh ns-grain relative pt-[7.5rem] pb-16 md:pt-[9rem] md:pb-20">
        <div className="relative z-[2] container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">About</p>
            <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl md:text-7xl">
              A focused team close to the craft.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty sm:text-lg">
              NeerStack partners with product teams who need senior design and
              engineering without the agency theater. We embed, ship, and leave
              systems your people can own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ns-white py-16 md:py-24">
        <div className="container-ns grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal variant="left">
            <p className="font-display text-2xl tracking-tight text-ink sm:text-3xl md:text-4xl">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">
              Too many outsourcing models split design from engineering and bury
              accountability in account layers. We keep the loop short: the people
              who design and code are the people you talk to. That means clearer
              tradeoffs, faster iteration, and software that holds up after launch.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {site.legalName} ({site.rcNumber}) is registered in Nigeria. Registered
              office: {site.address}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">At a glance</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              Built for product teams who move
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 70} variant="scale">
                <div className="magnetic-card rounded-[1.5rem] border border-line bg-paper-2 px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
                  <p className="font-display text-4xl tracking-tight text-accent">{stat.value}</p>
                  <p className="mt-2 font-semibold text-ink">{stat.label}</p>
                  <p className="mt-1 text-sm text-muted">{stat.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void py-24 text-on-void md:py-32">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-void/45">Principles</p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl md:text-5xl">
              What we optimize for
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 60}>
                <article className="magnetic-card rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
                  <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-void/70 md:text-base">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Engagement</p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              From first brief to ongoing growth
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {engagementSteps.map((step, i) => (
              <Reveal key={step.step} delayMs={i * 70}>
                <article className="magnetic-card h-full rounded-[1.5rem] border border-line bg-ns-white px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
                  <p className="font-mono text-xs text-accent">{step.step}</p>
                  <h3 className="font-display mt-4 text-2xl tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2 py-24 md:py-28">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Capabilities</p>
            <h2 className="font-display mt-3 text-2xl tracking-tight text-ink sm:text-3xl md:text-4xl">
              Everything we bring to a partnership
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-ns-white px-4 py-2 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                {service.title}
              </Link>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact/">Start a conversation</Button>
            <Button href="/portfolio/" variant="ghost" arrow={false}>
              See the work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
