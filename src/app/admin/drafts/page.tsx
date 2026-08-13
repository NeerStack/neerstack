"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { PostsTable } from "@/components/admin/PostsTable";
import { Button } from "@/components/ui/Button";
import { useDraftPostsQuery } from "@/lib/blog-queries";

export default function AdminDraftsPage() {
  const { data: posts = [], error, isLoading } = useDraftPostsQuery();

  return (
    <AdminShell>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Content
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-ink">Drafts</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Unpublished posts ready to finish and ship.
          </p>
        </div>
        <Button href="/admin/posts/new/" arrow={false}>
          New post
        </Button>
      </div>

      <PostsTable
        posts={posts}
        isLoading={isLoading}
        error={error instanceof Error ? error : null}
        showStatusFilter={false}
        defaultFilter="all"
        emptyTitle="No drafts"
        emptyDescription="Everything is published, or create a new draft."
      />
    </AdminShell>
  );
}
