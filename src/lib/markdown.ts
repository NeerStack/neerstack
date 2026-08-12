import { marked } from "marked";
import TurndownService from "turndown";

marked.setOptions({
  gfm: true,
  breaks: false,
});

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "*",
  strongDelimiter: "**",
});

turndown.addRule("strikethrough", {
  filter: ["del", "s"],
  replacement: (content) => `~~${content}~~`,
});

/** True when a string looks like HTML markup rather than markdown/plain text. */
export function looksLikeHtml(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed.startsWith("<")) return false;
  return /<\/[a-z][\w-]*>/i.test(trimmed) || /^<(p|div|h[1-6]|ul|ol|li|blockquote|pre|table)\b/i.test(trimmed);
}

export function markdownToHtml(markdown: string): string {
  const source = markdown.trim();
  if (!source) return "";
  return marked.parse(source, { async: false }) as string;
}

export function htmlToMarkdown(html: string): string {
  const source = html.trim();
  if (!source) return "";
  return turndown.turndown(source).trim();
}

/**
 * Hydrate the editor from API fields.
 * Prefer markdown `content` when present; fall back to converting `htmlContent`.
 */
export function resolveEditorMarkdown(content?: string | null, htmlContent?: string | null): string {
  const md = (content || "").trim();
  const html = (htmlContent || "").trim();

  if (md && !looksLikeHtml(md)) return md;
  if (html) return htmlToMarkdown(html);
  if (md && looksLikeHtml(md)) return htmlToMarkdown(md);
  return md;
}
