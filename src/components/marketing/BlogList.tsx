"use client";

import Link from "next/link";
import { useActivePostsQuery } from "@/lib/blog-queries";
import { Button } from "@/components/ui/Button";

export function BlogList() {
  const { data: posts = [], error, isPending } = useActivePostsQuery();

  if (isPending) {
    return (
      <div className="rounded-[1.5rem] border border-line bg-ns-white px-7 py-16 text-center">
        <p className="text-sm text-muted">Loading posts…</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="rounded-[1.5rem] border border-line bg-ns-white px-7 py-16 text-center">
        <p className="font-display text-xl tracking-tight text-ink">Couldn’t load posts</p>
        <p className="mt-2 text-sm text-muted">
          {error instanceof Error ? error.message : "Unable to load posts."}
        </p>
      </div>
    );
  }
  if (!posts.length) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-line bg-paper-2/60 px-7 py-16 text-center md:px-10">
        <p className="font-display text-2xl tracking-tight text-ink">No published posts yet</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          Field notes from builds and partnerships will land here. Meanwhile, see how we work.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/services/" variant="ghost" arrow={false}>
            Explore services
          </Button>
          <Button href="/contact/">Start a conversation</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-10">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/blog/${post.slug}/`}
          className="magnetic-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-ns-white"
        >
          {post.image?.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.image.url} alt="" className="h-48 w-full object-cover" />
          ) : (
            <div className="flex h-48 items-end bg-paper-2 p-7">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/kit/mark.svg" alt="" className="h-10 w-auto opacity-40" />
            </div>
          )}
          <div className="px-8 pt-11 pb-9 md:px-11 md:pt-14 md:pb-11">
            <h2 className="font-display text-xl tracking-tight text-ink transition group-hover:text-accent sm:text-2xl">
              {post.title}
            </h2>
            <p className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-accent transition group-hover:translate-x-1">
              Read
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
