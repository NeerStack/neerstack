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
  const featured = portfolio.filter((item) => item.featured);
  const marquee = [
    ...services.map((s) => s.title),
    "PactReach",
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
        <div className="relative container-ns flex min-h-[100dvh] flex-col justify-end pb-16 pt-36 sm:pb-20 sm:pt-40 md:pb-24 md:pt-44">
          <div className="max-w-4xl text-on-void">
            <div className="hero-animate inline-flex max-w-full items-center gap-3 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 backdrop-blur-md">
              <span className="glow-dot h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-on-void/75 sm:text-[11px] sm:tracking-[0.22em]">
                NeerStack · Engineering partners
              </p>
            </div>
            <h1 className="hero-animate-delay font-display mt-6 text-[2.35rem] leading-[0.95] tracking-[-0.055em] text-balance sm:mt-7 sm:text-5xl md:text-7xl lg:text-[5.6rem]">
              {site.tagline}
            </h1>
            <p className="hero-animate-delay-2 mt-5 max-w-xl text-base leading-relaxed text-on-void/78 text-pretty sm:mt-7 md:text-lg">
              Hire engineers who design, build, and ship production software as a
              remote extension of your team. One accountable crew. No agency fog.
            </p>
            <div className="hero-animate-delay-3 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
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

      <section className="ns-mesh py-28 md:py-36">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Signal</p>
            <h2 className="font-display mt-4 max-w-3xl text-3xl tracking-tight text-ink text-balance sm:text-4xl md:text-6xl">
              Built like a product team. Scoped like partners who stay.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 90} variant="scale">
                <div className="bezel h-full">
                  <div className="bezel-inner px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
                    <p className="font-display text-4xl tracking-tight text-accent sm:text-5xl">{stat.value}</p>
                    <p className="mt-3 font-semibold text-ink">{stat.label}</p>
                    <p className="mt-1 text-sm text-muted">{stat.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container-ns">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Services</p>
              <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
                Five disciplines. One delivery loop.
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <Button href="/services/" variant="ghost" arrow={false}>
                All capabilities
              </Button>
            </Reveal>
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line sm:mt-14">
            {services.map((service, index) => (
              <Reveal key={service.slug} delayMs={index * 45} className="block">
                <Link
                  href={`/services/${service.slug}/`}
                  className="interactive-row group grid w-full gap-3 py-11 md:grid-cols-[4.5rem_1.2fr_0.8fr_auto] md:items-center md:gap-4 md:py-12"
                >
                  <span className="font-mono text-xs tabular-nums tracking-wide text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl tracking-tight text-ink transition group-hover:text-accent sm:text-2xl md:text-3xl">
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
                  <span className="inline-flex min-h-11 items-center text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    Open
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void py-28 text-on-void md:py-36">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-void/45">
              Featured work
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-4xl md:text-5xl">
              Products we ship
            </h2>
            <p className="mt-4 max-w-2xl text-on-void/70">
              Public work includes PactReach and ProduceMart: marketplace and commerce systems built end to end.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-col gap-8 sm:mt-12 md:gap-10">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delayMs={80 + index * 80} variant="scale">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] sm:rounded-[2rem]"
                >
                  <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="aspect-[16/11] overflow-hidden bg-white/[0.03] p-6 sm:p-10 md:p-14">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.imageOnDark || project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-contain transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-col justify-between border-t border-white/10 px-8 pt-11 pb-9 lg:border-t-0 lg:border-l lg:px-11 lg:pt-14 lg:pb-11">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-on-void/45">{project.category}</p>
                        <h3 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">{project.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-on-void/70">{project.summary}</p>
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
                      <p className="mt-10 inline-flex min-h-11 items-center text-sm font-semibold text-accent transition group-hover:translate-x-1">
                        Visit live site ↗
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2 py-28 md:py-36">
        <div className="container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Engagement</p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight text-ink sm:text-4xl md:text-5xl">
              From brief to shipped, without the theater
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
            {engagementSteps.map((step, i) => (
              <Reveal key={step.step} delayMs={i * 80}>
                <article className="bezel h-full">
                  <div className="bezel-inner flex h-full flex-col px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
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

      <section className="py-28 md:py-36">
        <div className="container-ns grid gap-6 md:grid-cols-2 md:gap-8">
          {principles.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 70} variant={i % 2 ? "left" : "up"}>
              <article className="bezel h-full">
                <div className="bezel-inner px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
                  <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{item.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-void py-28 text-on-void md:py-32">
        <div className="container-ns flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-void/45">Next</p>
            <h2 className="font-display mt-3 max-w-xl text-3xl tracking-tight sm:text-4xl md:text-6xl">
              Ready to extend your team?
            </h2>
            <p className="mt-5 max-w-md text-on-void/70">
              Tell us about the product, timeline, and constraints. We reply with a clear next step.
            </p>
          </Reveal>
          <Reveal delayMs={100}>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
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
