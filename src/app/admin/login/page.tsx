"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Logo } from "@/components/marketing/Logo";
import { Button } from "@/components/ui/Button";
import { loginUser } from "@/lib/api";
import { isAuthenticated, setSession, subscribeAuth } from "@/lib/auth";

const fieldClass =
  "w-full rounded-xl border border-line bg-ns-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink/30";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (mounted && authed) router.replace("/admin/");
  }, [mounted, authed, router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await loginUser(email.trim(), password);
      if (res.status && res.data && "token" in res.data) {
        const data = res.data as { token: string; user?: unknown };
        setSession(data.token, data.user ?? { email: email.trim() });
        router.replace("/admin/");
        return;
      }
      setError(res.message || "Invalid email or password");
    } catch {
      setError("Unable to reach the server. Try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted || authed) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-paper text-sm text-muted">
        Checking session…
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-paper px-4 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,30,36,0.08),transparent_55%),linear-gradient(180deg,var(--ns-paper-2),var(--ns-paper))]"
      />
      <div className="relative w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Logo variant="dark" className="h-8" />
          <p className="mt-4 text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Admin access
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-[1.75rem] border border-line bg-ns-white p-7 shadow-[0_24px_80px_-48px_rgba(10,10,10,0.45)] md:p-8"
        >
          <div>
            <h1 className="font-display text-3xl tracking-tight text-ink">Sign in</h1>
            <p className="mt-2 text-sm text-ink-soft">
              Manage NeerStack blog posts and drafts.
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="admin-email" className="text-xs font-medium tracking-wide text-muted uppercase">
              Email
            </label>
            <input
              id="admin-email"
              required
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@neerstack.com"
              className={fieldClass}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="admin-password" className="text-xs font-medium tracking-wide text-muted uppercase">
              Password
            </label>
            <input
              id="admin-password"
              required
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={fieldClass}
            />
          </div>

          {error ? (
            <p className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent-deep">
              {error}
            </p>
          ) : null}

          <Button type="submit" className="w-full" disabled={loading} arrow={false}>
            {loading ? "Signing in…" : "Sign in"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          <Link href="/" className="text-ink-soft underline-offset-4 hover:text-ink hover:underline">
            ← Back to site
          </Link>
        </p>
      </div>
    </div>
  );
}
