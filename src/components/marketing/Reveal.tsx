"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "scale" | "blur";
  delayMs?: number;
};

const variantClass = {
  up: "reveal",
  left: "reveal-left",
  scale: "reveal-scale",
  blur: "reveal-blur",
} as const;

export function Reveal({
  children,
  className,
  variant = "up",
  delayMs = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const show = () => node.classList.add("is-visible");
            if (delayMs > 0) window.setTimeout(show, delayMs);
            else show();
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);
  return (
    <div ref={ref} className={cn(variantClass[variant], className)}>
      {children}
    </div>
  );
}
