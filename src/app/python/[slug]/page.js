import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNoteBySlug, getAdjacentNotes, allNotes } from '../lib/python-notes-data';
import { CodeCell, MarkdownCell } from '../CodeCell';

export function generateStaticParams() {
  return allNotes.map((note) => ({ slug: note.slug }));
}

export default async function NotePage({ params }) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  const { prev, next } = getAdjacentNotes(slug);
  let codeCount = 0;

  return (
    <article>
      <span
        className="text-xs font-medium uppercase tracking-widest text-[#3654FF] dark:text-[#7C93FF]"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        {note.group}
      </span>
      <h1
        className="mt-3 mb-8 text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {note.title}
      </h1>

      {note.cells ? (
        note.cells.map((cell, i) =>
          cell.type === 'markdown' ? (
            <MarkdownCell key={i} text={cell.text} />
          ) : (
            <CodeCell key={i} code={cell.code} output={cell.output} count={++codeCount} />
          )
        )
      ) : (
        <div className="rounded-xl border border-dashed border-zinc-300 px-6 py-10 text-center dark:border-white/15">
          <p className="text-zinc-500 dark:text-zinc-400">
            This note hasn't been ported over from the notebook yet.
          </p>
        </div>
      )}

      <div className="mt-12 flex items-center justify-between border-t border-zinc-200 pt-6 text-sm dark:border-white/10">
        {prev ? (
          <Link
            href={`/python/${prev.slug}`}
            className="text-zinc-500 hover:text-[#3654FF] dark:text-zinc-400 dark:hover:text-[#7C93FF] transition-colors"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/python/${next.slug}`}
            className="text-zinc-500 hover:text-[#3654FF] dark:text-zinc-400 dark:hover:text-[#7C93FF] transition-colors"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}