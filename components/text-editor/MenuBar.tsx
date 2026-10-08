"use client";

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Redo2,
  Strikethrough,
  Undo2,
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { Toggle } from "../ui/toggle";

interface MenuBarProps {
  editor: Editor | null;
}

const buttonClass =
  "size-9 rounded-lg text-zinc-300 hover:bg-white/[0.08] hover:text-white data-[state=on]:bg-blue-500/20 data-[state=on]:text-blue-400 data-[state=on]:shadow-[inset_0_0_0_1px_rgba(59,130,246,0.35)]";

export default function MenuBar({ editor }: MenuBarProps) {
  if (!editor) return null;

  const options = [
    {
      label: "Heading 1",
      icon: <Heading1 />,
      pressed: editor.isActive("heading", { level: 1 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      label: "Heading 2",
      icon: <Heading2 />,
      pressed: editor.isActive("heading", { level: 2 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      label: "Heading 3",
      icon: <Heading3 />,
      pressed: editor.isActive("heading", { level: 3 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      label: "Bold",
      icon: <Bold />,
      pressed: editor.isActive("bold"),
      onClick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      icon: <Italic />,
      pressed: editor.isActive("italic"),
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      label: "Strikethrough",
      icon: <Strikethrough />,
      pressed: editor.isActive("strike"),
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
    {
      label: "Highlight",
      icon: <Highlighter />,
      pressed: editor.isActive("highlight"),
      onClick: () => editor.chain().focus().toggleHighlight().run(),
    },
    {
      label: "Align left",
      icon: <AlignLeft />,
      pressed: editor.isActive({ textAlign: "left" }),
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
    },
    {
      label: "Align center",
      icon: <AlignCenter />,
      pressed: editor.isActive({ textAlign: "center" }),
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
    },
    {
      label: "Align right",
      icon: <AlignRight />,
      pressed: editor.isActive({ textAlign: "right" }),
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
    },
    {
      label: "Justify",
      icon: <AlignJustify />,
      pressed: editor.isActive({ textAlign: "justify" }),
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
    },
    {
      label: "Bullet list",
      icon: <List />,
      pressed: editor.isActive("bulletList"),
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Ordered list",
      icon: <ListOrdered />,
      pressed: editor.isActive("orderedList"),
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
  ];

  return (
    <div className="editor-toolbar-wrap">
      <div className="editor-toolbar">
        <div className="toolbar-group toolbar-headings">
          {options.slice(0, 3).map((option) => (
            <Toggle
              key={option.label}
              pressed={option.active}
              onPressedChange={option.onClick}
              aria-label={option.label}
              title={option.label}
              className={buttonClass}
            >
              {option.icon}
            </Toggle>
          ))}
        </div>

        <span className="toolbar-divider" />

        <div className="toolbar-group">
          {options.slice(3, 7).map((option) => (
            <Toggle
              key={option.label}
              pressed={option.active}
              onPressedChange={option.onClick}
              aria-label={option.label}
              title={option.label}
              className={buttonClass}
            >
              {option.icon}
            </Toggle>
          ))}
        </div>

        <span className="toolbar-divider" />

        <div className="toolbar-group">
          {options.slice(7, 11).map((option) => (
            <Toggle
              key={option.label}
              pressed={option.active}
              onPressedChange={option.onClick}
              aria-label={option.label}
              title={option.label}
              className={buttonClass}
            >
              {option.icon}
            </Toggle>
          ))}
        </div>

        <span className="toolbar-divider" />

        <div className="toolbar-group">
          {options.slice(11).map((option) => (
            <Toggle
              key={option.label}
              pressed={option.active}
              onPressedChange={option.onClick}
              aria-label={option.label}
              title={option.label}
              className={buttonClass}
            >
              {option.icon}
            </Toggle>
          ))}
        </div>

        <div className="toolbar-spacer" />

        <div className="toolbar-group toolbar-history">
          <Toggle
            pressed={false}
            onPressedChange={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            aria-label="Undo"
            title="Undo"
            className={buttonClass}
          >
            <Undo2 />
          </Toggle>
          <Toggle
            pressed={false}
            onPressedChange={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            aria-label="Redo"
            title="Redo"
            className={buttonClass}
          >
            <Redo2 />
          </Toggle>
        </div>

        <span className="toolbar-divider toolbar-divider-last" />

        <button type="button" className="toolbar-more">
          <span>More</span>
          <ChevronDown className="size-4" />
        </button>
      </div>
    </div>
  );
}
