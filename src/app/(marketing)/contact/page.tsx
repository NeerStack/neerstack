import type { Metadata } from "next";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Reveal } from "@/components/marketing/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="ns-mesh ns-grain relative pt-[7.5rem] pb-24 md:pt-[9rem] md:pb-32">
      <div className="relative z-[2] container-ns">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Contact</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl md:text-6xl">
            Tell us what you are building.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            Share context on product, timeline, and constraints. We respond with a
            clear next step, not a generic pitch deck.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal variant="left" className="block min-w-0">
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-paper-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/contact.jpg"
                alt=""
                className="h-56 w-full object-cover sm:h-64 lg:h-full lg:min-h-[420px]"
              />
            </div>
            <div className="mt-6 space-y-3 rounded-[1.25rem] border border-line bg-ns-white px-8 py-7 text-sm text-ink-soft md:px-10 md:py-9">
              <p>
                Email:{" "}
                <a
                  className="font-medium text-accent transition hover:text-accent-deep"
                  href={`mailto:${site.email}`}
                >
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
          <Reveal delayMs={80} className="block min-w-0">
            <div className="magnetic-card rounded-[1.75rem] border border-line bg-ns-white px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
