"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { PostEditor } from "@/components/admin/PostEditor";

function EditInner() {
  const params = useSearchParams();
  const id = params.get("id");
  if (!id) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 px-5 py-4 text-sm text-accent-deep">
        Missing post id. Open a post from the posts or drafts list.
      </div>
    );
  }
  return <PostEditor mode="edit" id={id} />;
}

export default function EditPostPage() {
  return (
    <AdminShell>
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
          Content
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight text-ink">Edit post</h1>
        <p className="mt-2 text-sm text-ink-soft">
          Update copy, tags, cover image, and publish state.
        </p>
      </div>
      <div className="mt-8">
        <Suspense
          fallback={
            <div className="max-w-3xl space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-12 animate-pulse rounded-xl border border-line bg-ns-white/70"
                />
              ))}
            </div>
          }
        >
          <EditInner />
        </Suspense>
      </div>
    </AdminShell>
  );
}
