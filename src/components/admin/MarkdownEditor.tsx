"use client";

import MDEditor, { commands } from "@uiw/react-md-editor";
import { useTheme } from "@/components/theme/ThemeProvider";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const toolbar = [
  commands.bold,
  commands.italic,
  commands.strikethrough,
  commands.divider,
  commands.title1,
  commands.title2,
  commands.title3,
  commands.divider,
  commands.unorderedListCommand,
  commands.orderedListCommand,
  commands.checkedListCommand,
  commands.divider,
  commands.link,
  commands.quote,
  commands.code,
  commands.codeBlock,
  commands.divider,
  commands.codeEdit,
  commands.codeLive,
  commands.codePreview,
  commands.fullscreen,
];

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: number;
};

export default function MarkdownEditor({
  value,
  onChange,
  placeholder = "Write in Markdown…",
  height = 420,
}: Props) {
  const { resolved } = useTheme();

  return (
    <div className="ns-md-editor" data-color-mode={resolved}>
      <MDEditor
        value={value}
        onChange={(next) => onChange(next ?? "")}
        height={height}
        visibleDragbar={false}
        preview="live"
        commands={toolbar}
        textareaProps={{
          placeholder,
          "aria-label": "Post content",
        }}
      />
    </div>
  );
}
