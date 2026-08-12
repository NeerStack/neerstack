"use client";

import Link from "next/link";
import sanitizeHtml from "sanitize-html";
import { usePostBySlugQuery } from "@/lib/blog-queries";

export function BlogPostView({ slug }: { slug: string }) {
  const { data: post, error, isPending } = usePostBySlugQuery(slug);

  if (isPending) {
    return (
      <div className="rounded-[1.5rem] border border-line bg-ns-white px-6 py-14 text-center">
        <p className="text-sm text-muted">Loading…</p>
      </div>
    );
  }
  if (error || !post) {
    return (
      <div className="rounded-[1.5rem] border border-line bg-paper-2/60 px-6 py-14 text-center">
        <p className="font-display text-2xl tracking-tight text-ink">Post not found</p>
        <p className="mt-2 text-sm text-muted">
          {error instanceof Error ? error.message : "This post may have been unpublished."}
        </p>
        <Link
          href="/blog/"
          className="mt-6 inline-block text-sm font-semibold text-accent transition hover:text-accent-deep"
        >
          ← Back to blog
        </Link>
      </div>
    );
  }

  const html = sanitizeHtml(post.htmlContent || post.content || "", {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2", "h3"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height"],
      a: ["href", "name", "target", "rel"],
    },
  });

  return (
    <article>
      <Link
        href="/blog/"
        className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted transition hover:text-accent"
      >
        ← Blog
      </Link>
      <h1 className="font-display mt-6 text-4xl tracking-tight text-ink text-balance md:text-5xl">
        {post.title}
      </h1>
      {post.image?.url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image.url}
          alt=""
          className="mt-8 w-full rounded-[1.5rem] border border-line object-cover"
        />
      ) : null}
      <div className="prose-ns mt-10 space-y-4 text-base" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
