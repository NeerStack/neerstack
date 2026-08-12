import { cn } from "@/lib/cn";
import type { PostStatus } from "@/lib/admin-utils";

const styles: Record<PostStatus, string> = {
  published: "border-emerald-700/20 bg-emerald-600/10 text-emerald-800 dark:text-emerald-300",
  draft: "border-amber-700/20 bg-amber-500/10 text-amber-800 dark:text-amber-300",
  archived: "border-line bg-paper-2 text-muted",
};

const labels: Record<PostStatus, string> = {
  published: "Published",
  draft: "Draft",
  archived: "Archived",
};

export function StatusBadge({ status }: { status: PostStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
        styles[status],
      )}
    >
      {labels[status]}
    </span>
  );
}
