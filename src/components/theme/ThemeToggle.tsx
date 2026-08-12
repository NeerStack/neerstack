"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";

const labels = {
  light: "Light",
  dark: "Dark",
  system: "System",
} as const;

export function ThemeToggle({ className }: { className?: string }) {
  const { mode, resolved, cycle } = useTheme();

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-full border border-line bg-ns-white/80 px-3 text-xs font-semibold tracking-tight text-ink transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-ink/25",
        className,
      )}
      aria-label={`Theme: ${labels[mode]}. Click to change.`}
      title={`Theme: ${labels[mode]}`}
    >
      <span className="relative grid h-4 w-4 place-items-center" aria-hidden>
        {resolved === "dark" ? (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.75]">
            <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.75]">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
          </svg>
        )}
      </span>
      <span className="hidden sm:inline">{labels[mode]}</span>
    </button>
  );
}
