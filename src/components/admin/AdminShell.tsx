"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  clearSession,
  getUserLabel,
  isAuthenticated,
  subscribeAuth,
} from "@/lib/auth";
import { cn } from "@/lib/cn";

const links = [
  { href: "/admin/", label: "Dashboard", match: "exact" as const },
  { href: "/admin/posts/", label: "Posts", match: "posts" as const },
  { href: "/admin/drafts/", label: "Drafts", match: "exact" as const },
  { href: "/admin/posts/new/", label: "New post", match: "exact" as const },
];

function normalizePath(pathname: string | null) {
  if (!pathname) return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function isActive(pathname: string | null, href: string, match: "exact" | "posts") {
  const path = normalizePath(pathname);
  if (match === "exact") return path === href;
  return path === "/admin/posts/";
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const authed = useSyncExternalStore(
    subscribeAuth,
    isAuthenticated,
    () => false,
  );
  const userLabel = useSyncExternalStore(
    subscribeAuth,
    getUserLabel,
    () => "Admin",
  );

  useEffect(() => {
    if (mounted && !authed) router.replace("/admin/login/");
  }, [mounted, authed, router]);

  function signOut() {
    clearSession();
    router.replace("/admin/login/");
  }

  if (!mounted || !authed) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-paper text-sm text-muted">
        Checking session…
      </div>
    );
  }

  const nav = (
    <nav className="flex flex-col gap-1 px-3 pb-4">
      {links.map((link) => {
        const active = isActive(pathname, link.href, link.match);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "rounded-xl px-3 py-2.5 text-sm transition",
              active
                ? "bg-white/10 font-medium text-on-void"
                : "text-on-void/65 hover:bg-white/5 hover:text-on-void",
            )}
          >
            {link.label}
          </Link>
        );
      })}
      <div className="my-3 border-t border-white/10" />
      <Link
        href="/"
        onClick={() => setMobileOpen(false)}
        className="rounded-xl px-3 py-2.5 text-sm text-on-void/65 transition hover:bg-white/5 hover:text-on-void"
      >
        ← Back to site
      </Link>
      <button
        type="button"
        onClick={signOut}
        className="rounded-xl px-3 py-2.5 text-left text-sm text-on-void/65 transition hover:bg-white/5 hover:text-on-void"
      >
        Sign out
      </button>
    </nav>
  );

  return (
    <div className="min-h-[100dvh] bg-paper md:grid md:grid-cols-[248px_1fr]">
      <aside className="border-b border-line bg-void text-on-void md:sticky md:top-0 md:flex md:h-[100dvh] md:flex-col md:border-b-0 md:border-r md:border-white/10">
        <div className="flex items-center justify-between gap-3 px-5 py-5">
          <div className="min-w-0">
            <Link href="/admin/" className="font-display text-lg tracking-tight">
              NeerStack
            </Link>
            <p className="mt-0.5 text-[11px] tracking-[0.14em] text-on-void/45 uppercase">
              Admin
            </p>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-lg border border-white/15 px-3 py-2 text-xs text-on-void/80 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="admin-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div
          id="admin-nav"
          className={cn("md:flex md:flex-1 md:flex-col", mobileOpen ? "block" : "hidden md:flex")}
        >
          {nav}
          <div className="mt-auto hidden px-5 pb-5 md:block">
            <p className="truncate text-xs text-on-void/45">{userLabel}</p>
          </div>
        </div>
      </aside>

      <div className="min-w-0 p-4 sm:p-5 md:p-8 lg:p-10">{children}</div>
    </div>
  );
}
