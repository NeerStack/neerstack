import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/marketing/Reveal";
import { legalDocs } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Legal",
  description: `Legal documents for ${site.legalName}, including privacy, terms, and cookies.`,
};

export default function LegalIndexPage() {
  return (
    <section className="pt-[7.5rem] pb-24 md:pt-[9rem] md:pb-32">
      <div className="container-ns">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Legal</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl md:text-6xl">
            Company documents
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            {site.legalName} ({site.rcNumber}), registered in Nigeria. Registered office: {site.address}.
          </p>
        </Reveal>
        <div className="mt-14 flex flex-col gap-8 md:mt-20 md:gap-10">
          {legalDocs.map((doc, i) => (
            <Reveal key={doc.slug} delayMs={i * 60}>
              <Link
                href={`/legal/${doc.slug}/`}
                className="magnetic-card group block rounded-[1.5rem] border border-line bg-ns-white px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11"
              >
                <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">{doc.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">{doc.description}</p>
                <p className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-accent transition group-hover:translate-x-1">
                  Read document
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
