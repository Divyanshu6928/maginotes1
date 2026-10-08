"use client";

import { FilePlus2 } from "lucide-react";
import { useState } from "react";
import TextEditor from "@/components/text-editor";

export default function Home() {
  const [post, setPost] = useState("");

  return (
    <main className="notes-page">
      <div className="notes-grid" />
      <div className="notes-orb notes-orb-top" />
      <div className="notes-orb notes-orb-bottom" />

      <div className="notes-container">
        <header className="notes-header">
          <div>
            <h1 className="notes-title">
              N<span>o</span>tes
            </h1>
            <p className="notes-subtitle">
              Write, format and organize your thoughts.
            </p>
          </div>

          <button
            type="button"
            className="new-note-button"
            onClick={() => setPost("")}
          >
            <FilePlus2 className="size-[18px]" />
            <span>New Note</span>
          </button>
        </header>

        <TextEditor content={post} onChange={setPost} />
      </div>
    </main>
  );
}
