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

function renderInlineText(text, keyPrefix = '') {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) =>
    part.startsWith('`') && part.endsWith('`') ? (
      <code
        key={`${keyPrefix}-${i}`}
        className="rounded bg-zinc-100 px-1.5 py-0.5 text-[13px] text-[#3654FF] dark:bg-white/10 dark:text-[#7C93FF]"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {part.slice(1, -1)}
      </code>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    )
  );
}

function parseMarkdownTable(text) {
  const lines = text.trim().split('\n').filter((l) => l.trim() !== '');
  if (lines.length < 2 || !lines[0].trim().startsWith('|')) return null;
  if (!/^\|?[\s:|-]+\|?$/.test(lines[1].trim())) return null;

  const parseRow = (line) =>
    line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());

  return {
    header: parseRow(lines[0]),
    rows: lines.slice(2).map(parseRow),
  };
}

export function MarkdownCell({ text }) {
  const table = parseMarkdownTable(text);

  if (table) {
    return (
      <div className="mb-5 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-white/10">
                {table.header.map((cell, i) => (
                  <th
                    key={i}
                    className="px-4 py-2.5 text-left font-semibold text-zinc-700 dark:text-zinc-200"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {renderInlineText(cell, `h${i}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={
                    ri !== table.rows.length - 1
                      ? 'border-b border-zinc-200/70 dark:border-white/5'
                      : ''
                  }
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2.5 text-zinc-600 dark:text-zinc-400">
                      {renderInlineText(cell, `${ri}-${ci}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5 rounded-xl border border-zinc-200 bg-zinc-50/60 px-4 py-3.5 dark:border-white/10 dark:bg-white/[0.03]">
      <p className="whitespace-pre-line text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
        {renderInlineText(text)}
      </p>
    </div>
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