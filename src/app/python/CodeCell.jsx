'use client';

import { tokenizeCode } from './lib/pythonTokenizer'; // adjust path to where you save it

// VS Code "Dark+" token colors — deliberately separate from the site's
// --color-* theme vars, since a code editor stays dark in both light and
// dark mode, same as VS Code itself.
const TOKEN_COLORS = {
  comment: '#6A9955',   // green, italic
  string: '#CE9178',    // orange
  number: '#B5CEA8',    // soft green
  keyword: '#569CD6',   // blue
  variable: '#9CDCFE',  // light blue
  func: '#DCDCAA',      // yellow
  operator: '#D4D4D4',  // near-white
  punctuation: '#D4D4D4',
  plain: '#D4D4D4',
};

function Token({ text, type }) {
  return (
    <span
      style={{
        color: TOKEN_COLORS[type] ?? TOKEN_COLORS.plain,
        fontStyle: type === 'comment' ? 'italic' : 'normal',
      }}
    >
      {text}
    </span>
  );
}

export function MarkdownCell({ text }) {
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
  const lines = tokenizeCode(code);

  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
      <div className="flex items-start gap-3 bg-[#1e1e1e] px-4 py-3.5">
        <span
          className="mt-0.5 shrink-0 text-xs text-[#6e7681]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Input:
        </span>
        <pre className="min-w-0 flex-1 overflow-x-auto text-[13px] leading-relaxed">
          <code style={{ fontFamily: 'var(--font-mono)' }}>
            {lines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line.blank
                  ? '\u00A0'
                  : line.tokens.map((tok, j) => (
                      <Token key={j} text={tok.text} type={tok.type} />
                    ))}
              </div>
            ))}
          </code>
        </pre>
      </div>

      {output && (
        <div className="border-t border-[#3c3c3c] bg-[#181818] px-4 py-3.5">
          <div className="flex items-start gap-3">
            <span
              className="mt-0.5 shrink-0 text-xs text-[#6e7681]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Output:
            </span>
            <pre className="min-w-0 flex-1 overflow-x-auto text-[13px] leading-relaxed text-[#d4d4d4]">
              <code style={{ fontFamily: 'var(--font-mono)' }}>{output}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}