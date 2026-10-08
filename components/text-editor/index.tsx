"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

import MenuBar from "./MenuBar";

interface TextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function TextEditor({ content, onChange }: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: { class: "editor-bullet-list" },
        },
        orderedList: {
          HTMLAttributes: { class: "editor-ordered-list" },
        },
      }),
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content,
    editorProps: {
      attributes: {
        class: "tiptap-editor",
        spellcheck: "true",
      },
    },
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    immediatelyRender: false,
  });

  return (
    <section className="editor-shell">
      <MenuBar editor={editor} />

      <div className="editor-paper-wrap">
        <EditorContent editor={editor} />
      </div>

      <div className="editor-footer">
        <span>{editor ? editor.getText().trim().split(/\s+/).filter(Boolean).length : 0} words</span>
      </div>
    </section>
  );
}
