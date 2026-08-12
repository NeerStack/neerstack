"use client";

import { useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  arrow?: boolean;
};

const styles = {
  primary:
    "bg-accent text-white hover:bg-accent-deep shadow-[0_18px_50px_-28px_rgba(227,30,36,0.95)]",
  secondary: "bg-ink text-paper hover:bg-ink/90",
  ghost: "bg-transparent text-ink border border-line/80 hover:border-ink/35 hover:bg-ns-white/60",
  light:
    "bg-on-void/10 text-on-void border border-white/20 hover:bg-on-void/18 hover:border-white/40 backdrop-blur-md",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
  arrow = true,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const classes = cn(
    "group/btn relative inline-flex min-h-11 items-center justify-center gap-2.5 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform active:scale-[0.97] disabled:opacity-50",
    styles[variant],
    className,
  );

  const inner = (
    <>
      <span className="relative z-[1]">{children}</span>
      {arrow ? (
        <span className="relative z-[1] grid h-7 w-7 place-items-center rounded-full bg-black/10 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:scale-105 dark:bg-white/10">
          <span aria-hidden className="text-xs leading-none">
            ↗
          </span>
        </span>
      ) : null}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-full"
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {inner}
    </button>
  );
}
