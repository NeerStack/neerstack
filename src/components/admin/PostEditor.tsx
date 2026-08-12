"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/lib/api";
import { markdownToHtml, resolveEditorMarkdown } from "@/lib/markdown";
import { Button } from "@/components/ui/Button";
import {
  useChangeImageMutation,
  useCreatePostMutation,
  usePostByIdQuery,
  useRemoveImageMutation,
  useUpdatePostMutation,
} from "@/lib/blog-queries";

const MarkdownEditor = dynamic(() => import("@/components/admin/MarkdownEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[420px] items-center justify-center rounded-xl border border-line bg-ns-white text-sm text-muted">
      Loading editor…
    </div>
  ),
});

const fieldClass =
  "w-full rounded-xl border border-line bg-ns-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-ink/30";

type FormProps = {
  mode: "create" | "edit";
  id?: string;
  initial?: BlogPost | null;
};

function PostEditorForm({ mode, id, initial = null }: FormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title || "");
  const [tags, setTags] = useState<string[]>(initial?.tags || []);
  const [tagInput, setTagInput] = useState("");
  const [content, setContent] = useState(() =>
    resolveEditorMarkdown(initial?.content, initial?.htmlContent),
  );
  const [draft, setDraft] = useState(Boolean(initial?.draft));
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(
    initial?.image?.url || null,
  );
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const createMutation = useCreatePostMutation();
  const updateMutation = useUpdatePostMutation();
  const changeImageMutation = useChangeImageMutation();
  const removeImageMutation = useRemoveImageMutation();

  const saving =
    createMutation.isPending ||
    updateMutation.isPending ||
    changeImageMutation.isPending ||
    removeImageMutation.isPending;

  function setLocalImage(file: File | null) {
    setImagePreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return file ? URL.createObjectURL(file) : null;
    });
    setImage(file);
  }

  function addTag() {
    const value = tagInput.trim();
    if (!value) return;
    if (!tags.includes(value)) setTags((prev) => [...prev, value]);
    setTagInput("");
  }

  function validate() {
    if (!title.trim()) {
      setError("Title is required.");
      return false;
    }
    if (!content.trim()) {
      setError("Content is required.");
      return false;
    }
    return true;
  }

  async function save(asDraft?: boolean) {
    setStatus(null);
    setError(null);
    if (!validate()) return;

    const nextDraft = typeof asDraft === "boolean" ? asDraft : draft;
    const markdown = content.trim();
    const html = markdownToHtml(markdown);

    try {
      if (mode === "create") {
        const form = new FormData();
        if (image) form.append("image", image);
        form.append("title", title.trim());
        form.append("tags", tags.join(","));
        form.append("content", markdown);
        form.append("htmlContent", html);
        form.append("draft", String(nextDraft));
        form.append("archived", "false");
        await createMutation.mutateAsync(form);
        router.push(nextDraft ? "/admin/drafts/" : "/admin/posts/");
        return;
      }

      if (!id) return;
      await updateMutation.mutateAsync({
        id,
        body: {
          title: title.trim(),
          tags,
          content: markdown,
          htmlContent: html,
          draft: nextDraft,
        },
      });
      setDraft(nextDraft);
      setStatus(nextDraft ? "Saved as draft" : "Published changes saved");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await save();
  }

  async function onChangeImage(file: File | null) {
    if (!file || mode !== "edit" || !id) {
      setLocalImage(file);
      return;
    }
    setError(null);
    setStatus(null);
    try {
      const post = await changeImageMutation.mutateAsync({ id, image: file });
      setExistingImageUrl(post?.image?.url || null);
      setLocalImage(null);
      setStatus("Cover image updated");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image update failed");
    }
  }

  async function onRemoveImage() {
    if (mode === "create") {
      setLocalImage(null);
      return;
    }
    if (!id) return;
    if (!confirm("Remove the cover image?")) return;
    setError(null);
    setStatus(null);
    try {
      await removeImageMutation.mutateAsync(id);
      setExistingImageUrl(null);
      setLocalImage(null);
      setStatus("Cover image removed");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Image remove failed");
    }
  }

  const previewSrc = imagePreview || existingImageUrl;

  return (
    <form className="max-w-3xl space-y-5" onSubmit={onSubmit}>
      <div className="space-y-2">
        <label className="text-xs font-medium tracking-wide text-muted uppercase">
          Title
        </label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          className={fieldClass}
        />
      </div>

      {mode === "edit" && initial?.slug ? (
        <p className="text-sm text-muted">
          Slug: <span className="font-mono text-ink-soft">/{initial.slug}</span>
        </p>
      ) : null}

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-wide text-muted uppercase">
          Tags
        </label>
        <div className="flex gap-2">
          <input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === ",") {
                e.preventDefault();
                addTag();
              }
            }}
            placeholder="Add a tag and press Enter"
            className={fieldClass}
          />
          <button
            type="button"
            onClick={addTag}
            className="shrink-0 rounded-xl border border-line px-4 text-sm text-ink-soft transition hover:border-ink/30 hover:text-ink"
          >
            Add
          </button>
        </div>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="rounded-lg border border-line bg-paper-2 px-3 py-1 text-xs text-ink-soft"
                onClick={() => setTags((prev) => prev.filter((t) => t !== tag))}
              >
                {tag} ×
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-wide text-muted uppercase">
          Content
        </label>
        <MarkdownEditor value={content} onChange={setContent} />
        <p className="text-xs text-muted">
          Write Markdown with live preview. Saved as markdown (`content`) and HTML
          (`htmlContent`) for the public blog.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-line bg-ns-white p-4">
        <div className="flex items-center justify-between gap-3">
          <label className="text-xs font-medium tracking-wide text-muted uppercase">
            Cover image
          </label>
          {previewSrc ? (
            <button
              type="button"
              onClick={onRemoveImage}
              disabled={saving}
              className="text-xs text-accent-deep disabled:opacity-50"
            >
              Remove
            </button>
          ) : null}
        </div>
        {previewSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={previewSrc}
            alt=""
            className="max-h-48 w-full rounded-xl object-cover"
          />
        ) : (
          <p className="text-sm text-muted">No cover image yet.</p>
        )}
        <input
          type="file"
          accept="image/*"
          disabled={saving}
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            if (mode === "edit") {
              void onChangeImage(file);
            } else {
              setLocalImage(file);
            }
          }}
          className="block w-full text-sm text-muted file:mr-3 file:rounded-lg file:border-0 file:bg-paper-2 file:px-3 file:py-2 file:text-sm file:font-medium file:text-ink"
        />
      </div>

      <label className="flex items-center gap-2.5 text-sm text-ink-soft">
        <input
          type="checkbox"
          checked={draft}
          onChange={(e) => setDraft(e.target.checked)}
          className="size-4 rounded border-line accent-[var(--ns-red)]"
        />
        Save as draft (unlisted until published)
      </label>

      {status ? (
        <p className="rounded-xl border border-emerald-700/20 bg-emerald-600/10 px-4 py-3 text-sm text-emerald-800 dark:text-emerald-300">
          {status}
        </p>
      ) : null}
      {error ? (
        <p className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent-deep">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3 pt-1">
        <Button type="submit" disabled={saving} arrow={false}>
          {saving
            ? "Saving…"
            : mode === "create"
              ? draft
                ? "Create draft"
                : "Publish post"
              : "Save changes"}
        </Button>
        {mode === "create" && !draft ? (
          <Button
            type="button"
            variant="ghost"
            disabled={saving}
            arrow={false}
            onClick={() => void save(true)}
          >
            Save as draft
          </Button>
        ) : null}
        {mode === "edit" ? (
          <Button
            type="button"
            variant="ghost"
            disabled={saving}
            arrow={false}
            onClick={() => void save(!draft)}
          >
            {draft ? "Publish now" : "Convert to draft"}
          </Button>
        ) : null}
        <Button href="/admin/posts/" variant="ghost" arrow={false}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export function PostEditor({ mode, id }: { mode: "create" | "edit"; id?: string }) {
  const postQuery = usePostByIdQuery(id, mode === "edit");

  if (mode === "create") {
    return <PostEditorForm mode="create" />;
  }

  if (postQuery.isLoading) {
    return (
      <div className="max-w-3xl space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-12 animate-pulse rounded-xl border border-line bg-ns-white/70"
          />
        ))}
      </div>
    );
  }

  if (postQuery.error || !postQuery.data) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-accent/5 px-5 py-4 text-sm text-accent-deep">
        {postQuery.error instanceof Error
          ? postQuery.error.message
          : "Unable to load post"}
      </div>
    );
  }

  return (
    <PostEditorForm
      key={postQuery.data._id}
      mode="edit"
      id={id}
      initial={postQuery.data}
    />
  );
}
