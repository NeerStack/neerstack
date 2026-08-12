"use client";

import { useEffect, useRef } from "react";

/** Subtle parallax + scale on hero media for cinematic depth. */
export function ParallaxHeroMedia({ src, alt = "" }: { src: string; alt?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (!img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScroll = () => {
      const y = window.scrollY;
      const t = Math.min(y / 700, 1);
      img.style.transform = `scale(${1.08 + t * 0.08}) translate3d(0, ${y * 0.18}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
    />
  );
}
