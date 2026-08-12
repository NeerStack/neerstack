import type { Metadata } from "next";
import { BlogList } from "@/components/marketing/BlogList";
import { Reveal } from "@/components/marketing/Reveal";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <section className="ns-mesh ns-grain relative pt-[7.5rem] pb-24 md:pt-[9rem] md:pb-32">
      <div className="relative z-[2] container-ns">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Blog</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl md:text-6xl">
            Field notes from the build.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
            Delivery notes, product craft, and what we learn shipping with partners.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20">
          <BlogList />
        </div>
      </div>
    </section>
  );
}
