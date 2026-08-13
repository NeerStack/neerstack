import type { BlogPost } from "@/lib/api";

export type PostStatus = "published" | "draft" | "archived";

export function getPostStatus(post: BlogPost): PostStatus {
  if (post.archived) return "archived";
  if (post.draft) return "draft";
  return "published";
}

export function formatAdminDate(value?: string) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function postMatchesQuery(post: BlogPost, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    post.title,
    post.slug,
    ...(post.tags ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}
