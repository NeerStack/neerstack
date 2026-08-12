import type { Metadata } from "next";
import { BlogList } from "@/components/marketing/BlogList";
import { Reveal } from "@/components/marketing/Reveal";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <section className="ns-mesh ns-grain relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="relative z-[2] container-ns">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Blog</p>
            <h1 className="font-display mt-3 max-w-3xl text-5xl tracking-tight text-ink text-balance md:text-6xl">
              Field notes from the build.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              Delivery notes, product craft, and what we learn shipping with partners.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="pb-20 md:pb-28">
        <div className="container-ns">
          <BlogList />
        </div>
      </section>
    </>
  );
}
