"use client";

import { useState } from "react";
import Link from "next/link";
import { sendContact } from "@/lib/api";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setError(null);
    const res = await sendContact(form);
    setLoading(false);
    if (res.status) {
      setStatus(res.message || "Message sent.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setError(res.message || "Unable to send message right now.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {(
        [
          ["name", "Name", "text"],
          ["email", "Email", "email"],
          ["phone", "Phone", "tel"],
        ] as const
      ).map(([key, label, type]) => (
        <label key={key} className="block">
          <span className="mb-1.5 block text-xs font-medium text-muted">{label}</span>
          <input
            required={key !== "phone"}
            type={type}
            value={form[key]}
            onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
            className="w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
      ))}
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="w-full resize-y rounded-xl border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </label>
      {status ? <p className="text-sm text-accent">{status}</p> : null}
      {error ? <p className="text-sm text-accent-deep">{error}</p> : null}
      <p className="text-xs leading-relaxed text-muted">
        By sending this form you agree to our{" "}
        <Link href="/legal/privacy/" className="font-medium text-accent underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
        . We use your details only to respond to this enquiry.
      </p>
      <Button type="submit" disabled={loading}>{loading ? "Sending…" : "Send message"}</Button>
    </form>
  );
}
