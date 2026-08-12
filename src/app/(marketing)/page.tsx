import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/marketing/Reveal";
import { HomeQuoteButton } from "@/components/marketing/HomeQuoteButton";
import { ParallaxHeroMedia } from "@/components/marketing/ParallaxHeroMedia";
import {
  engagementSteps,
  portfolio,
  principles,
  services,
  site,
  stats,
} from "@/content/site";

export default function HomePage() {
  const project = portfolio[0];
  const marquee = [
    ...services.map((s) => s.title),
    "ProduceMart",
    "Ship faster",
    "Design systems",
    "Release confidence",
    ...services.map((s) => s.title),
  ];

  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden">
        <ParallaxHeroMedia src="/images/hero.jpg" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/92 via-void/70 to-void/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(227,30,36,0.35),transparent_55%)]" />
        <div className="relative container-ns flex min-h-[100dvh] flex-col justify-end pb-24 pt-32">
          <div className="max-w-4xl text-on-void">
            <div className="hero-animate inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 backdrop-blur-md">
              <span className="glow-dot h-2 w-2 rounded-full bg-accent" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-void/75">
                NeerStack · Engineering partners
              </p>
            </div>
            <h1 className="hero-animate-delay font-display mt-7 text-5xl leading-[0.9] tracking-[-0.055em] text-balance md:text-7xl lg:text-[5.6rem]">
              {site.tagline}
            </h1>
            <p className="hero-animate-delay-2 mt-7 max-w-xl text-base leading-relaxed text-on-void/78 text-pretty md:text-lg">
              Hire engineers who design, build, and ship production software as a
              remote extension of your team. One accountable crew. No agency fog.
            </p>
            <div className="hero-animate-delay-3 mt-10 flex flex-wrap gap-3">
              <HomeQuoteButton />
              <Button href="/services/" variant="light" arrow={false}>
                Explore services
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 hidden md:block">
          <div className="ns-spin-slow relative h-28 w-28 rounded-full border border-white/20">
            <svg viewBox="0 0 100 100" className="h-full w-full fill-on-void/80 text-[9px]">
              <defs>
                <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text>
                <textPath href="#circle">NEERSTACK · SHIP · DESIGN · BUILD · TEST ·</textPath>
              </text>
            </svg>
            <span className="absolute inset-0 grid place-items-center text-xs text-accent">↓</span>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-line bg-ns-white py-5">
        <div className="ns-marquee gap-14 text-xs font-semibold uppercase tracking-[0.28em] text-muted">
          {marquee.map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-14 whitespace-nowrap">
              {item}
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </section>

      <section className="ns-mesh py-24 md:py-32">
        <div className="container-ns">
          <Reveal variant="blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Signal</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl tracking-tight text-ink text-balance md:text-6xl">
              Built like a product team. Scoped like partners who stay.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 90} variant="scale">
                <div className="bezel h-full">
                  <div className="bezel-inner px-6 pt-8 pb-7 md:px-7 md:pt-9 md:pb-8">
                    <p className="font-display text-5xl tracking-tight text-accent">{stat.value}</p>
                    <p className="mt-3 font-semibold text-ink">{stat.label}</p>
                    <p className="mt-1 text-sm text-muted">{stat.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-ns">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Services</p>
              <h2 className="font-display mt-3 max-w-2xl text-4xl tracking-tight text-ink md:text-5xl">
                Five disciplines. One delivery loop.
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <Button href="/services/" variant="ghost" arrow={false}>
                All capabilities
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 divide-y divide-line border-y border-line">
            {services.map((service, index) => (
              <Reveal key={service.slug} delayMs={index * 45} className="block">
                <Link
                  href={`/services/${service.slug}/`}
                  className="interactive-row group grid w-full gap-4 py-9 md:grid-cols-[4.5rem_1.2fr_0.8fr_auto] md:items-center"
                >
                  <span className="font-mono text-xs tabular-nums tracking-wide text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-ink transition group-hover:text-accent md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft md:text-base">{service.short}</p>
                  </div>
                  <div className="hidden flex-wrap gap-2 md:flex">
                    {service.tools.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-paper px-2.5 py-1 text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    Open
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void py-24 text-on-void md:py-32">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-void/45">
              Featured work
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-4xl tracking-tight md:text-5xl">
              ProduceMart
            </h2>
            <p className="mt-4 max-w-2xl text-on-void/70">{project.summary}</p>
          </Reveal>
          <Reveal delayMs={120} variant="scale">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="aspect-[16/11] overflow-hidden bg-white/[0.03] p-10 md:p-14">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt="ProduceMart preview"
                    className="h-full w-full object-contain transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col justify-between border-t border-white/10 px-8 pt-9 pb-8 lg:border-t-0 lg:border-l lg:px-10 lg:pt-11 lg:pb-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-on-void/45">{project.category}</p>
                    <h3 className="font-display mt-3 text-3xl tracking-tight">{project.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-on-void/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-10 text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    Visit live site ↗
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper-2 py-24 md:py-32">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Engagement</p>
            <h2 className="font-display mt-3 max-w-2xl text-4xl tracking-tight text-ink md:text-5xl">
              From brief to shipped, without the theater
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {engagementSteps.map((step, i) => (
              <Reveal key={step.step} delayMs={i * 80}>
                <article className="bezel h-full">
                  <div className="bezel-inner flex h-full flex-col px-6 pt-8 pb-7 md:px-7 md:pt-9 md:pb-8">
                    <p className="font-mono text-xs text-accent">{step.step}</p>
                    <h3 className="font-display mt-5 text-2xl tracking-tight text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-ns grid gap-6 md:grid-cols-2">
          {principles.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 70} variant={i % 2 ? "left" : "up"}>
              <article className="bezel h-full">
                <div className="bezel-inner px-8 pt-9 pb-8 md:px-9 md:pt-10 md:pb-9">
                  <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-void py-24 text-on-void md:py-28">
        <div className="container-ns flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-void/45">Next</p>
            <h2 className="font-display mt-3 max-w-xl text-4xl tracking-tight md:text-6xl">
              Ready to extend your team?
            </h2>
            <p className="mt-5 max-w-md text-on-void/70">
              Tell us about the product, timeline, and constraints. We reply with a clear next step.
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact/">Contact us</Button>
              <Button href="/about/" variant="light" arrow={false}>
                About NeerStack
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
