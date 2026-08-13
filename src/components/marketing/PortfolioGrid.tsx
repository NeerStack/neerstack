"use client";

import { portfolio } from "@/content/site";
import { Reveal } from "@/components/marketing/Reveal";

export function PortfolioGrid() {
  if (!portfolio.length) return null;

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {portfolio.map((project, index) => (
        <Reveal key={project.slug} variant="scale" delayMs={index * 60}>
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bezel group block"
          >
            <div className="bezel-inner">
              <div className="aspect-[16/10] bg-paper-2 p-5 pt-4 sm:p-8 sm:pt-6 md:p-10 md:pt-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-contain transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="border-t border-line px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
                <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                      {project.category}
                    </p>
                    <h2 className="font-display mt-2 text-2xl tracking-tight text-ink sm:text-3xl md:text-4xl">
                      {project.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex min-h-11 shrink-0 items-center text-sm font-semibold text-accent transition group-hover:translate-x-1">
                    Visit live ↗
                  </span>
                </div>
              </div>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
