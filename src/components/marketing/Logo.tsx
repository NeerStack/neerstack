import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  /** dark = on-light lockup; light = on-dark lockup; auto = html.dark swap */
  variant?: "dark" | "light" | "auto";
  className?: string;
  mode?: "full" | "mark";
};

const CACHE = "v=3";
const MARK_SRC = `/brand/kit/mark.svg?${CACHE}`;
const LOCKUP_ON_LIGHT = `/brand/kit/lockup-on-light.png?${CACHE}`;
const LOCKUP_ON_DARK = `/brand/kit/lockup-on-dark.png?${CACHE}`;
const WORDMARK_ON_LIGHT = `/brand/kit/wordmark-on-light.png?${CACHE}`;
const WORDMARK_ON_DARK = `/brand/kit/wordmark-on-dark.png?${CACHE}`;

function MarkImg({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={MARK_SRC}
      alt=""
      width={30}
      height={37}
      className={cn(
        "h-8 w-auto shrink-0 transition duration-500 ease-out group-hover:scale-[1.06] group-hover:rotate-[-2deg]",
        className,
      )}
    />
  );
}

/**
 * Full horizontal PNG lockup (Mark C + NEERSTACK).
 * On xs: mark only. On sm+: lockup. Theme swap never double-paints.
 */
function LockupImgs({
  variant,
  className,
}: {
  variant: "dark" | "light" | "auto";
  className?: string;
}) {
  const imgBase = cn("h-8 w-auto max-w-none", className);

  if (variant === "dark") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={LOCKUP_ON_LIGHT}
        alt=""
        width={211}
        height={51}
        className={cn("hidden sm:block", imgBase)}
      />
    );
  }

  if (variant === "light") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={LOCKUP_ON_DARK}
        alt=""
        width={211}
        height={51}
        className={cn("hidden sm:block", imgBase)}
      />
    );
  }

  // auto: stacked grid. Only one visible via opacity under html.dark
  return (
    <span className="relative hidden sm:inline-grid" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOCKUP_ON_LIGHT}
        alt=""
        width={211}
        height={51}
        className={cn(
          "col-start-1 row-start-1 dark:pointer-events-none dark:opacity-0",
          imgBase,
        )}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOCKUP_ON_DARK}
        alt=""
        width={211}
        height={51}
        className={cn(
          "col-start-1 row-start-1 pointer-events-none opacity-0 dark:pointer-events-auto dark:opacity-100",
          imgBase,
        )}
      />
    </span>
  );
}

/**
 * Mark C + PNG NEERSTACK lockup from brand kit (not live Syne glyphs).
 * Spelling locked: N + three-bar E + three-bar E + RSTACK.
 */
export function Logo({ variant = "auto", className, mode = "full" }: Props) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="NeerStack home"
    >
      {mode === "mark" ? (
        <MarkImg />
      ) : (
        <>
          {/* xs: mark only. Full lockup text is illegible at phone widths */}
          <MarkImg className="sm:hidden" />
          <LockupImgs variant={variant} />
          <span className="sr-only">NeerStack</span>
        </>
      )}
    </Link>
  );
}

/** Standalone wordmark for brand kit pages (no mark, no link). */
export function WordmarkLockup({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src = variant === "light" ? WORDMARK_ON_DARK : WORDMARK_ON_LIGHT;
  return (
    <span className={cn("inline-flex items-center", className)} role="img" aria-label="NEERSTACK">
      <span className="sr-only">NeerStack</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={459}
        height={51}
        className="h-8 w-auto sm:h-10"
      />
    </span>
  );
}
