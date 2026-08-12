import type { Metadata } from "next";
import { Logo, WordmarkLockup } from "@/components/marketing/Logo";
import { Reveal } from "@/components/marketing/Reveal";

export const metadata: Metadata = {
  title: "Brand",
  description: "NeerStack brand system: Mark C NS Path and Kit C.",
};

const marks = [
  {
    id: "A",
    file: "/brand/options/A-compass-n.png",
    title: "Compass N",
    note: "Geometric N + northeast compass.",
    selected: false,
  },
  {
    id: "B",
    file: "/brand/options/B-stacked-n.png",
    title: "Stacked N",
    note: "Layered plates / stack metaphor.",
    selected: false,
  },
  {
    id: "C",
    file: "/brand/options/C-ns-path.png",
    title: "NS Path",
    note: "NS ligature as a navigation path. Active mark.",
    selected: true,
  },
  {
    id: "D",
    file: "/brand/options/D-seal.png",
    title: "Seal",
    note: "Circular institutional badge.",
    selected: false,
  },
  {
    id: "E",
    file: "/brand/options/E-wordmark.png",
    title: "Wordmark",
    note: "Typography-first system.",
    selected: false,
  },
] as const;

const kits = [
  {
    id: "A",
    file: "/brand/kits/kit-A-current.png",
    title: "Kit A: Compass system",
    selected: false,
  },
  {
    id: "B",
    file: "/brand/kits/kit-B-stacked.png",
    title: "Kit B: Stacked N system",
    selected: false,
  },
  {
    id: "C",
    file: "/brand/kits/kit-C-ns-path.png",
    title: "Kit C: NS Path system",
    selected: true,
  },
] as const;

export default function BrandPage() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container-ns">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Selected · Mark C + Kit C
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl tracking-tight text-ink text-balance md:text-6xl">
            NS Path is live.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft text-pretty">
            Mark C and Kit C are applied across the logo, favicon, and Open Graph
            brand board. Archive options remain below for reference.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 rounded-[1.5rem] border border-line bg-ns-white p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/favicon.png" alt="Active favicon" className="h-16 w-16 rounded-2xl" />
            <Logo variant="dark" className="gap-4 [&_img]:h-12 sm:[&_img]:h-14" />
          </div>
          <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-line bg-void p-8">
            <div className="mx-auto flex max-w-md flex-col items-center gap-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/kit/lockup-on-dark.png?v=3"
                alt="NEERSTACK lockup on dark"
                className="h-12 w-auto sm:h-14"
              />
              <WordmarkLockup variant="light" className="[&_img]:h-10 sm:[&_img]:h-12" />
            </div>
          </div>
          <p className="mt-4 text-sm text-muted">
            PNG lockups in <code className="font-mono text-ink">/brand/kit/</code> — Mark C +
            NEERSTACK (not live Syne glyphs).
          </p>
        </Reveal>

        <div className="mt-14">
          <h2 className="font-display text-3xl tracking-tight text-ink">Logo marks</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marks.map((mark) => (
              <article
                key={mark.id}
                className={
                  mark.selected
                    ? "overflow-hidden rounded-[1.5rem] border-2 border-accent bg-ns-white"
                    : "overflow-hidden rounded-[1.5rem] border border-line bg-ns-white opacity-70"
                }
              >
                <div className="aspect-square bg-paper-2 p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mark.file}
                    alt={`Option ${mark.id}: ${mark.title}`}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
                <div className="border-t border-line p-5">
                  <p className="font-mono text-xs text-muted">
                    OPTION {mark.id}
                    {mark.selected ? " · ACTIVE" : ""}
                  </p>
                  <h3 className="font-display mt-1 text-2xl tracking-tight text-ink">
                    {mark.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{mark.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl tracking-tight text-ink">Full brand kits</h2>
          <div className="mt-8 space-y-8">
            {kits.map((kit) => (
              <article
                key={kit.id}
                className={
                  kit.selected
                    ? "overflow-hidden rounded-[1.5rem] border-2 border-accent bg-ns-white"
                    : "overflow-hidden rounded-[1.5rem] border border-line bg-ns-white opacity-70"
                }
              >
                <div className="border-b border-line px-5 py-4">
                  <p className="font-mono text-xs text-muted">
                    KIT {kit.id}
                    {kit.selected ? " · ACTIVE" : ""}
                  </p>
                  <h3 className="font-display mt-1 text-2xl tracking-tight text-ink">
                    {kit.title}
                  </h3>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={kit.file} alt={kit.title} className="w-full object-cover" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
