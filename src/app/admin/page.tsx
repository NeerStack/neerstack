"use client";

import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/Button";
import { formatAdminDate, getPostStatus } from "@/lib/admin-utils";
import { useAdminPostsQuery, useDraftPostsQuery } from "@/lib/blog-queries";

export default function AdminHomePage() {
  const allQuery = useAdminPostsQuery();
  const draftsQuery = useDraftPostsQuery();

  const posts = allQuery.data ?? [];
  const drafts = draftsQuery.data ?? [];
  const published = posts.filter((p) => !p.draft && !p.archived).length;
  const archived = posts.filter((p) => p.archived).length;
  const loading = allQuery.isLoading || draftsQuery.isLoading;
  const error = allQuery.error || draftsQuery.error;

  const recent = [...posts]
    .sort((a, b) => {
      const aTime = new Date(a.updatedAt || a.createdAt || 0).getTime();
      const bTime = new Date(b.updatedAt || b.createdAt || 0).getTime();
      return bTime - aTime;
    })
    .slice(0, 5);

  const stats = [
    { label: "Total posts", value: posts.length },
    { label: "Published", value: published },
    { label: "Drafts", value: drafts.length || posts.filter((p) => p.draft).length },
    { label: "Archived", value: archived },
  ];

  return (
    <AdminShell>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Overview
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
            Dashboard
          </h1>
          <p className="mt-2 max-w-xl text-sm text-ink-soft md:text-base">
            Manage blog content — drafts, publishes, and archives in one place.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button href="/admin/posts/new/" arrow={false}>
            New post
          </Button>
          <Button href="/admin/posts/" variant="ghost" arrow={false}>
            View posts
          </Button>
          <Button href="/admin/drafts/" variant="ghost" arrow={false}>
            View drafts
          </Button>
        </div>
      </div>

      {error ? (
        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 px-5 py-4 text-sm text-accent-deep">
          {error instanceof Error ? error.message : "Failed to load dashboard"}
        </div>
      ) : null}

      <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-line bg-ns-white px-5 py-5"
          >
            <p className="text-xs tracking-wide text-muted uppercase">{stat.label}</p>
            <p className="mt-3 font-display text-3xl tracking-tight text-ink">
              {loading ? "—" : stat.value}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl tracking-tight text-ink">Recent posts</h2>
          <Link href="/admin/posts/" className="text-sm text-accent hover:text-accent-deep">
            All posts →
          </Link>
        </div>

        {loading ? (
          <div className="mt-5 space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-16 animate-pulse rounded-2xl border border-line bg-ns-white/70"
              />
            ))}
          </div>
        ) : recent.length === 0 ? (
          <div className="mt-5 rounded-2xl border border-dashed border-line bg-ns-white/60 px-6 py-12 text-center">
            <p className="font-display text-xl text-ink">No posts yet</p>
            <p className="mt-2 text-sm text-muted">
              Create your first post to populate the dashboard.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href="/admin/posts/new/" arrow={false}>
                Create post
              </Button>
            </div>
          </div>
        ) : (
          <ul className="mt-5 overflow-hidden rounded-2xl border border-line bg-ns-white">
            {recent.map((post, index) => (
              <li
                key={post._id}
                className={`flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 ${
                  index > 0 ? "border-t border-line" : ""
                }`}
              >
                <div className="min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/admin/posts/edit/?id=${post._id}`}
                      className="truncate font-medium text-ink hover:text-accent"
                    >
                      {post.title || "Untitled"}
                    </Link>
                    <StatusBadge status={getPostStatus(post)} />
                  </div>
                  <p className="text-xs text-muted">
                    Updated {formatAdminDate(post.updatedAt || post.createdAt)}
                  </p>
                </div>
                <Link
                  href={`/admin/posts/edit/?id=${post._id}`}
                  className="text-sm text-accent hover:text-accent-deep"
                >
                  Edit →
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </AdminShell>
  );
}
