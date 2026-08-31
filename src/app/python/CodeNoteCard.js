// VS Code / Jupyter flavored code card.
// Colors are the editor's own tokens (VS Code "Dark+"), kept separate from
// the site's --color-* theme vars on purpose — a code editor stays dark
// regardless of light/dark mode, same as VS Code itself.

const TOKEN_COLORS = {
  comment: '#6A9955', // green, italic
  string: '#CE9178', // orange
  variable: '#9CDCFE', // light blue
  func: '#DCDCAA', // yellow
  operator: '#D4D4D4', // near-white
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

function Dot({ color }) {
  return (
    <span
      className="inline-block h-3 w-3 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}

export default function CodeNoteCard({ note }) {
  return (
    <div className="overflow-hidden rounded-lg border border-black/40 shadow-lg shadow-black/20">
      {/* Title bar */}
      <div className="flex items-center gap-2 bg-[#323233] px-4 py-2.5">
        <div className="flex gap-1.5">
          <Dot color="#ff5f57" />
          <Dot color="#febc2e" />
          <Dot color="#28c840" />
        </div>
        <div className="ml-3 flex items-center gap-1.5 rounded-t-md bg-[#1e1e1e] px-3 py-1 text-[13px] text-[#cccccc]">
          <span className="h-2 w-2 rounded-sm bg-[#3776ab]" />
          {note.filename}
        </div>
      </div>

      {/* Breadcrumb, matching the GitHub-style path */}
      <div className="flex items-center gap-1.5 bg-[#252526] px-4 py-1.5 text-[12px] text-[#8a8a8a]">
        {note.breadcrumb.map((part, i) => (
          <span key={part} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-[#5a5a5a]">/</span>}
            <span
              className={
                i === note.breadcrumb.length - 1 ? 'text-[#cccccc]' : ''
              }
            >
              {part}
            </span>
          </span>
        ))}
      </div>

      {/* Code body */}
      <div className="bg-[#1e1e1e] px-4 py-4">
        <div className="flex gap-4 font-mono text-[13px] leading-6">
          <div className="select-none pt-0.5 text-right text-[#6e7681]">
            In&nbsp;[{note.cellNumber}]:
          </div>
          <div className="min-w-0 flex-1">
            {note.lines.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line.blank
                  ? '\u00A0'
                  : line.tokens.map((tok, j) => (
                      <Token key={j} text={tok.text} type={tok.type} />
                    ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Output */}
      <div className="border-t border-[#3c3c3c] bg-[#181818] px-4 py-3">
        <div className="flex gap-4 font-mono text-[13px] leading-6">
          <div className="select-none pt-0.5 text-right text-[#6e7681]">
            Out[{note.cellNumber}]:
          </div>
          <div className="text-[#d4d4d4]">{note.output}</div>
        </div>
      </div>
    </div>
  );
}