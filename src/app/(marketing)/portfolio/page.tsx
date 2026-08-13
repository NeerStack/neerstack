import type { Metadata } from "next";
import { Reveal } from "@/components/marketing/Reveal";
import { PortfolioGrid } from "@/components/marketing/PortfolioGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <section className="ns-mesh ns-grain relative pt-[7.5rem] pb-24 md:pt-[9rem] md:pb-32">
        <div className="relative z-[2] container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Portfolio
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl md:text-7xl">
              Selected work.
            </h1>
            <p className="mt-5 max-w-2xl text-ink-soft">
              Public work includes PactReach, the brand-creator escrow marketplace, and
              ProduceMart, commerce infrastructure for agricultural buyers and suppliers.
            </p>
          </Reveal>
          <div className="mt-14 md:mt-20">
            <PortfolioGrid />
          </div>
          <Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-white/10 bg-void px-8 py-11 text-on-void sm:rounded-[2rem] md:flex-row md:items-center md:px-12 md:py-14">
              <div>
                <h2 className="font-display text-2xl tracking-tight sm:text-3xl md:text-4xl">
                  Building in this space?
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-on-void/70">
                  We can map a similar delivery path for your marketplace, catalog, or ops stack.
                </p>
              </div>
              <Button href="/contact/">Discuss a project</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
