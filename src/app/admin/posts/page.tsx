"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { PostsTable } from "@/components/admin/PostsTable";
import { Button } from "@/components/ui/Button";
import { useAdminPostsQuery } from "@/lib/blog-queries";

export default function AdminPostsPage() {
  const { data: posts = [], error, isLoading } = useAdminPostsQuery();

  return (
    <AdminShell>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Content
          </p>
          <h1 className="mt-2 font-display text-3xl tracking-tight text-ink">Posts</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Search, filter, and manage every blog post.
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
        emptyTitle="No posts found"
        emptyDescription="Try a different search, or create a new post."
      />
    </AdminShell>
  );
}
