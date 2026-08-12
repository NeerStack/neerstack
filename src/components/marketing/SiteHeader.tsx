"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/marketing/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/site";
import { cn } from "@/lib/cn";
import { useQuote } from "@/components/marketing/QuoteProvider";

const links = [
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Work" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { openQuote } = useQuote();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4 md:pt-5">
        <div
          className={cn(
            "island-nav container-ns flex h-14 min-w-0 items-center justify-between gap-2 rounded-full border px-2.5 sm:px-3 md:h-16 md:px-4",
            scrolled
              ? "border-line/80 bg-paper/85 shadow-[0_20px_60px_-40px_rgba(10,10,10,0.55)] backdrop-blur-xl"
              : "border-white/25 bg-paper/55 backdrop-blur-lg",
          )}
        >
          <Logo className="min-w-0 shrink" />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services/"
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition hover:bg-ns-white/70 hover:text-ink"
              >
                Services
              </Link>
              <div
                className={cn(
                  "absolute left-0 top-full pt-3 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  servicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0",
                )}
              >
                <div className="min-w-[260px] rounded-[1.35rem] border border-line bg-ns-white/95 p-2 shadow-[0_30px_80px_-40px_rgba(10,10,10,0.55)] backdrop-blur-xl">
                  {services.map((service, i) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/`}
                      className="block rounded-xl px-3 py-2.5 text-sm text-ink-soft transition hover:bg-paper-2 hover:text-ink"
                      style={{ transitionDelay: `${i * 20}ms` }}
                    >
                      <span className="font-mono text-[10px] text-muted">0{i + 1}</span>
                      <span className="ml-2">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition hover:bg-ns-white/70 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button onClick={openQuote} className="!py-2.5 !px-5">
              Get quote
            </Button>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
            <ThemeToggle className="!px-2.5" />
            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ns-white/70"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span
                className={cn(
                  "absolute h-px w-4 bg-ink transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  open ? "translate-y-0 rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-4 bg-ink transition duration-300",
                  open ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-4 bg-ink transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  open ? "translate-y-0 -rotate-45" : "translate-y-1.5",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 overflow-y-auto overscroll-contain bg-void/90 backdrop-blur-2xl transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav
          className="container-ns flex min-h-full flex-col justify-center gap-1 py-28"
          aria-label="Mobile"
        >
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display inline-flex min-h-14 items-center text-3xl tracking-tight text-on-void transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:text-4xl",
                open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={cn(
              "pt-8 transition duration-500",
              open ? "translate-y-0 opacity-100 delay-300" : "translate-y-6 opacity-0",
            )}
          >
            <Button
              variant="light"
              onClick={() => {
                setOpen(false);
                openQuote();
              }}
            >
              Get quote
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
