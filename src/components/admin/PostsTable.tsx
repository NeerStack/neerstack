"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/api";
import {
  formatAdminDate,
  getPostStatus,
  postMatchesQuery,
  type PostStatus,
} from "@/lib/admin-utils";
import {
  useDeletePostMutation,
  useSetArchivedMutation,
  useSetDraftMutation,
} from "@/lib/blog-queries";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { cn } from "@/lib/cn";

type Filter = "all" | PostStatus;

type Props = {
  posts: BlogPost[];
  isLoading?: boolean;
  error?: Error | null;
  emptyTitle?: string;
  emptyDescription?: string;
  showStatusFilter?: boolean;
  defaultFilter?: Filter;
};

export function PostsTable({
  posts,
  isLoading,
  error,
  emptyTitle = "No posts yet",
  emptyDescription = "Create a post to get started.",
  showStatusFilter = true,
  defaultFilter = "all",
}: Props) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  const [actionError, setActionError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const deleteMutation = useDeletePostMutation();
  const draftMutation = useSetDraftMutation();
  const archiveMutation = useSetArchivedMutation();

  const filtered = useMemo(() => {
    return posts
      .filter((post) => postMatchesQuery(post, query))
      .filter((post) => {
        if (filter === "all") return true;
        return getPostStatus(post) === filter;
      })
      .sort((a, b) => {
        const aTime = new Date(a.updatedAt || a.createdAt || 0).getTime();
        const bTime = new Date(b.updatedAt || b.createdAt || 0).getTime();
        return bTime - aTime;
      });
  }, [posts, query, filter]);

  async function runAction(id: string, action: () => Promise<unknown>) {
    setActionError(null);
    setBusyId(id);
    try {
      await action();
    } catch (err) {
      setActionError(err instanceof Error ? err.message : "Action failed");
    } finally {
      setBusyId(null);
    }
  }

  if (isLoading) {
    return (
      <div className="mt-8 space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-20 animate-pulse rounded-2xl border border-line bg-ns-white/70"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 px-5 py-4 text-sm text-accent-deep">
        {error.message || "Failed to load posts"}
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Search posts</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, slug, or tags…"
            className="w-full rounded-xl border border-line bg-ns-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink/30"
          />
        </label>
        {showStatusFilter ? (
          <div className="flex flex-wrap gap-1.5">
            {(["all", "published", "draft", "archived"] as const).map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={cn(
                  "rounded-lg border px-3 py-1.5 text-xs font-medium capitalize transition",
                  filter === value
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-ns-white text-ink-soft hover:border-ink/30",
                )}
              >
                {value}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {actionError ? (
        <p className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent-deep">
          {actionError}
        </p>
      ) : null}

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-ns-white/60 px-6 py-12 text-center">
          <p className="font-display text-xl text-ink">{emptyTitle}</p>
          <p className="mt-2 text-sm text-muted">{emptyDescription}</p>
        </div>
      ) : (
        <ul className="overflow-hidden rounded-2xl border border-line bg-ns-white">
          {filtered.map((post, index) => {
            const status = getPostStatus(post);
            const busy = busyId === post._id;
            return (
              <li
                key={post._id}
                className={cn(
                  "flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5",
                  index > 0 && "border-t border-line",
                )}
              >
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/admin/posts/edit/?id=${post._id}`}
                      className="truncate font-medium text-ink hover:text-accent"
                    >
                      {post.title || "Untitled"}
                    </Link>
                    <StatusBadge status={status} />
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
                    {post.slug ? <span>/{post.slug}</span> : null}
                    <span>Updated {formatAdminDate(post.updatedAt || post.createdAt)}</span>
                    {post.tags?.length ? (
                      <span className="truncate">{post.tags.slice(0, 3).join(", ")}</span>
                    ) : null}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <Link
                    href={`/admin/posts/edit/?id=${post._id}`}
                    className="rounded-lg border border-line px-3 py-1.5 text-ink-soft transition hover:border-ink/30 hover:text-ink"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    disabled={busy}
                    className="rounded-lg border border-line px-3 py-1.5 text-ink-soft transition hover:border-ink/30 hover:text-ink disabled:opacity-50"
                    onClick={() =>
                      runAction(post._id, () =>
                        draftMutation.mutateAsync({
                          id: post._id,
                          draft: !post.draft,
                        }),
                      )
                    }
                  >
                    {post.draft ? "Publish" : "Draft"}
                  </button>
                  <button
                    type="button"
                    disabled={busy}
                    className="rounded-lg border border-line px-3 py-1.5 text-ink-soft transition hover:border-ink/30 hover:text-ink disabled:opacity-50"
                    onClick={() =>
                      runAction(post._id, () =>
                        archiveMutation.mutateAsync({
                          id: post._id,
                          archived: !post.archived,
                        }),
                      )
                    }
                  >
                    {post.archived ? "Unarchive" : "Archive"}
                  </button>
                  <button
                    type="button"
                    disabled={busy}
                    className="rounded-lg border border-accent/25 px-3 py-1.5 text-accent-deep transition hover:bg-accent/5 disabled:opacity-50"
                    onClick={() => {
                      if (!confirm(`Delete “${post.title || "this post"}”? This cannot be undone.`)) {
                        return;
                      }
                      return runAction(post._id, () =>
                        deleteMutation.mutateAsync(post._id),
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
