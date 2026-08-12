"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { sendQuote } from "@/lib/api";
import { Button } from "@/components/ui/Button";

type QuoteContextValue = { openQuote: () => void; closeQuote: () => void };
const QuoteContext = createContext<QuoteContextValue | null>(null);

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const openQuote = useCallback(() => {
    setOpen(true);
    setStatus(null);
    setError(null);
  }, []);
  const closeQuote = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openQuote, closeQuote }), [openQuote, closeQuote]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setError(null);
    const res = await sendQuote(form);
    setLoading(false);
    if (res.status) {
      setStatus(res.message || "Quote request sent.");
      setForm({ name: "", email: "", phone: "", website: "", message: "" });
    } else {
      setError(res.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <QuoteContext.Provider value={value}>
      {children}
      {open ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-void/55 backdrop-blur-sm"
            aria-label="Close quote dialog"
            onClick={closeQuote}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            className="relative z-10 max-h-[min(92dvh,720px)] w-full max-w-lg overflow-y-auto rounded-3xl border border-line bg-paper px-8 pt-11 pb-9 shadow-[0_40px_100px_-40px_rgba(20,18,26,0.55)] sm:px-11 sm:pt-14 sm:pb-11"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  Project inquiry
                </p>
                <h2 id="quote-title" className="font-display mt-2 text-2xl tracking-tight text-ink">
                  Get a free quote
                </h2>
              </div>
              <button
                type="button"
                onClick={closeQuote}
                className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-line px-4 py-2 text-sm text-ink-soft"
              >
                Close
              </button>
            </div>
            <form className="mt-6 space-y-3" onSubmit={onSubmit}>
              {(
                [
                  ["name", "Name", "text"],
                  ["email", "Email", "email"],
                  ["phone", "Phone", "tel"],
                  ["website", "Website", "url"],
                ] as const
              ).map(([key, label, type]) => (
                <label key={key} className="block">
                  <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
                  <input
                    required={key === "name" || key === "email"}
                    type={type}
                    value={form[key]}
                    onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                    className="w-full rounded-xl border border-line bg-ns-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent"
                  />
                </label>
              ))}
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted">Project details</span>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full resize-y rounded-xl border border-line bg-ns-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent"
                />
              </label>
              {status ? <p className="text-sm text-accent" role="status">{status}</p> : null}
              {error ? <p className="text-sm text-accent-deep" role="alert">{error}</p> : null}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending…" : "Send request"}
              </Button>
            </form>
          </div>
        </div>
      ) : null}
    </QuoteContext.Provider>
  );
}
