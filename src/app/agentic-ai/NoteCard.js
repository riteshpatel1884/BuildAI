// NoteCard.js
// Renders one block from agentic-notes-data.js. Typography/colors follow
// MarkdownCell's palette (zinc-700/zinc-300, #3654FF / #7C93FF accent) so
// this section reads as the same product as the Python notes.

import ConceptCell from "./ConceptCell";

function Bullets({ items }) {
  return (
    <ul className="space-y-2 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
      {items.map((item, i) => {
        if (Array.isArray(item)) {
          return (
            <li key={i} className="ml-1 list-none">
              <ul className="space-y-1.5 border-l border-zinc-200 pl-4 dark:border-white/10">
                {item.map((sub, j) => (
                  <li key={j}>{sub}</li>
                ))}
              </ul>
            </li>
          );
        }
        if (typeof item === "object") {
          return (
            <li key={i} className="flex gap-2">
              <span className="text-zinc-400 dark:text-zinc-600">\u2022</span>
              <span>
                <strong className="font-semibold text-zinc-900 dark:text-white">{item.label}</strong>
                {" \u2013 "}
                {item.text}
              </span>
            </li>
          );
        }
        return (
          <li key={i} className="flex gap-2">
            <span className="text-zinc-400 dark:text-zinc-600">\u2022</span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Flow({ steps, note }) {
  return (
    <div className="mb-1 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
      <div className="bg-[#1e1e1e] px-4 py-3.5">
        {note && (
          <div className="mb-2 text-xs text-[#6e7681]" style={{ fontFamily: "var(--font-mono)" }}>
            {note}
          </div>
        )}
        <div
          className="flex flex-col items-start gap-0.5 text-[13px] leading-relaxed text-[#d4d4d4]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col">
              <span>{step}</span>
              {i < steps.length - 1 && <span className="text-[#569CD6]">\u2193</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-white/10">
      <table className="w-full border-collapse text-[14px]">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/5">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2.5 text-left font-semibold text-zinc-900 dark:text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-zinc-100 last:border-0 dark:border-white/5">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 align-top text-zinc-600 dark:text-zinc-400">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function NoteCard({ block }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {block.text}
        </h2>
      );
    case "sub":
      return (
        <h3
          className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {block.text}
        </h3>
      );
    case "bullets":
      return <Bullets items={block.items} />;
    case "flow":
      return <Flow steps={block.steps} note={block.note} />;
    case "table":
      return <Table headers={block.headers} rows={block.rows} />;
    case "code":
      return <ConceptCell lang={block.lang} code={block.code} />;
    case "callout":
      return (
        <div className="rounded-r-lg border-l-4 border-[#3654FF] bg-[#3654FF]/5 px-4 py-3 text-[14px] text-zinc-700 dark:border-[#7C93FF] dark:bg-[#7C93FF]/10 dark:text-zinc-300">
          {block.text}
        </div>
      );
    default:
      return null;
  }
}