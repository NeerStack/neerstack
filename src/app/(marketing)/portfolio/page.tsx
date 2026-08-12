import type { Metadata } from "next";
import { Reveal } from "@/components/marketing/Reveal";
import { PortfolioGrid } from "@/components/marketing/PortfolioGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <>
      <section className="ns-mesh ns-grain relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="relative z-[2] container-ns">
          <Reveal variant="blur">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Portfolio
            </p>
            <h1 className="font-display mt-3 max-w-3xl text-5xl tracking-tight text-ink text-balance md:text-7xl">
              Selected work.
            </h1>
            <p className="mt-5 max-w-2xl text-ink-soft">
              The public portfolio currently features ProduceMart: commerce infrastructure
              for agricultural buyers and suppliers.
            </p>
          </Reveal>
          <div className="mt-8 md:mt-10">
            <PortfolioGrid />
          </div>
          <Reveal>
            <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/10 bg-void px-8 py-10 text-on-void md:flex-row md:items-center md:px-10 md:py-11">
              <div>
                <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                  Building in this space?
                </h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-on-void/70">
                  We can map a similar delivery path for your catalog, checkout, and ops stack.
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
