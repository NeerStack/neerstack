"use client";

import { portfolio } from "@/content/site";
import { Reveal } from "@/components/marketing/Reveal";

export function PortfolioGrid() {
  const project = portfolio[0];
  if (!project) return null;

  return (
    <Reveal variant="scale">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="bezel group block"
      >
        <div className="bezel-inner">
          <div className="aspect-[16/10] bg-paper-2 p-6 pt-5 md:p-10 md:pt-7">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-contain transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
            />
          </div>
          <div className="border-t border-line p-7 md:p-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  {project.category}
                </p>
                <h2 className="font-display mt-2 text-3xl tracking-tight text-ink md:text-4xl">
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
              <span className="text-sm font-semibold text-accent transition group-hover:translate-x-1">
                Visit live ↗
              </span>
            </div>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
