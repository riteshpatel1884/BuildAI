'use client';

export function MarkdownCell({ text }) {
  // Light inline-code support ( `like this` ) to match notebook markdown cells,
  // without pulling in a full markdown renderer.
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <p className="mb-4 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
      {parts.map((part, i) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <code
            key={i}
            className="rounded bg-zinc-100 px-1.5 py-0.5 text-[13px] text-[#3654FF] dark:bg-white/10 dark:text-[#7C93FF]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  );
}

export function CodeCell({ code, output, count }) {
  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
      <div className="flex items-start gap-3 bg-zinc-50 px-4 py-3.5 dark:bg-white/[0.03]">
        <span
          className="mt-0.5 shrink-0 text-xs text-zinc-400 dark:text-zinc-500"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          In [{count}]:
        </span>
        <pre className="min-w-0 flex-1 overflow-x-auto text-[13px] leading-relaxed text-zinc-800 dark:text-zinc-200">
          <code style={{ fontFamily: 'var(--font-mono)' }}>{code}</code>
        </pre>
      </div>
      {output && (
        <div className="flex items-start gap-3 border-t border-zinc-200 bg-white px-4 py-3.5 dark:border-white/10 dark:bg-zinc-900">
          <span
            className="mt-0.5 shrink-0 text-xs text-zinc-300 dark:text-zinc-600"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Out:
          </span>
          <pre className="min-w-0 flex-1 overflow-x-auto text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            <code style={{ fontFamily: 'var(--font-mono)' }}>{output}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
