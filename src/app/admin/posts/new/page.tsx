"use client";

import { AdminShell } from "@/components/admin/AdminShell";
import { PostEditor } from "@/components/admin/PostEditor";

export default function NewPostPage() {
  return (
    <AdminShell>
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
          Content
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight text-ink">New post</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Write, tag, and publish — or save as a draft.
        </p>
      </div>
      <div className="mt-8">
        <PostEditor mode="create" />
      </div>
    </AdminShell>
  );
}
