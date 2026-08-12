import type { Metadata } from "next";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Reveal } from "@/components/marketing/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="ns-mesh ns-grain relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="relative z-[2] container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Contact</p>
            <h1 className="font-display mt-3 max-w-3xl text-5xl tracking-tight text-ink text-balance md:text-6xl">
              Tell us what you are building.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              Share context on product, timeline, and constraints. We respond with a
              clear next step, not a generic pitch deck.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-ns grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal variant="left">
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-paper-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/contact.jpg"
                alt=""
                className="h-64 w-full object-cover md:h-full md:min-h-[420px]"
              />
            </div>
            <div className="mt-6 space-y-3 rounded-[1.25rem] border border-line bg-ns-white px-6 py-5 text-sm text-ink-soft">
              <p>
                Email:{" "}
                <a className="font-medium text-accent transition hover:text-accent-deep" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  className="font-medium text-accent transition hover:text-accent-deep"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /company/neerstack
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <div className="magnetic-card rounded-[1.75rem] border border-line bg-ns-white px-6 pt-8 pb-7 md:px-9 md:pt-10 md:pb-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
