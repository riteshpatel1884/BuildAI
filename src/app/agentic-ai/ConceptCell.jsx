"use client";

// ConceptCell.jsx
// Visual twin of CodeCell.jsx — same dark editor panel, same token colors —
// used for the python/json/text snippets and ASCII flow diagrams in the
// Agentic AI notes.

import { tokenizeCode, TOKEN_COLORS } from "./lib/agenticTokenizer";

function Token({ text, type }) {
  return (
    <span
      style={{
        color: TOKEN_COLORS[type] ?? TOKEN_COLORS.plain,
        fontStyle: type === "comment" ? "italic" : "normal",
      }}
    >
      {text}
    </span>
  );
}

export default function ConceptCell({ lang = "text", code = "" }) {
  const lines = tokenizeCode(code, lang);

  return (
    <div className="mb-1 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
      <div className="flex items-start gap-3 bg-[#1e1e1e] px-4 py-3.5">
        {lang !== "text" && (
          <span
            className="mt-0.5 shrink-0 text-xs text-[#6e7681]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {lang}:
          </span>
        )}
        <pre className="min-w-0 flex-1 overflow-x-auto text-[13px] leading-relaxed">
          <code style={{ fontFamily: "var(--font-mono)" }}>
            {lines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line.blank
                  ? "\u00A0"
                  : line.tokens.map((tok, j) => (
                      <Token key={j} text={tok.text} type={tok.type} />
                    ))}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}