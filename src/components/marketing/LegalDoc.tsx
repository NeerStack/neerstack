import Link from "next/link";
import { legalNav, site } from "@/content/site";
import type { LegalDoc as LegalDocContent } from "@/content/legal";
import { Reveal } from "@/components/marketing/Reveal";

export function LegalDoc({ doc }: { doc: LegalDocContent }) {
  return (
    <section className="pt-[7.5rem] pb-24 md:pt-[9rem] md:pb-32">
      <div className="container-ns">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Legal</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl md:text-6xl">
            {doc.title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-ink-soft md:text-base">
            Last updated {doc.updated}. {site.legalName}, {site.rcNumber}.
          </p>
        </Reveal>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Legal documents">
          {legalNav.map((item) => {
            const active = item.href.includes(`/${doc.slug}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "inline-flex min-h-11 items-center rounded-full border border-accent bg-ns-white px-4 text-sm font-medium text-accent"
                    : "inline-flex min-h-11 items-center rounded-full border border-line bg-paper-2 px-4 text-sm text-ink-soft transition hover:border-accent hover:text-accent"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <article className="prose-ns mt-14 max-w-3xl md:mt-16">
          {doc.sections.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0 md:mt-12">
              <h2 className="text-2xl tracking-tight text-ink sm:text-3xl">{section.heading}</h2>
              {section.blocks.map((block, i) =>
                block.type === "ul" ? (
                  <ul key={i} className="mt-4 list-disc space-y-2 pl-5">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="mt-4 text-base">
                    {block.text}
                  </p>
                ),
              )}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
