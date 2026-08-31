import Link from 'next/link';
import { noteGroups } from './lib/python-notes-data';

export default function PythonIndexPage() {
  const firstAvailable = noteGroups
    .flatMap((g) => g.notes)
    .find((n) => n.cells);

  return (
    <div>
      <span
        className="text-xs font-medium uppercase tracking-widest text-[#3654FF] dark:text-[#7C93FF]"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Python
      </span>
      <h1
        className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Pick a topic from the sidebar
      </h1>
      <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
        Notes are organized the same way as the source repo — Basics first,
        with Data Structures, Exception Handling, File Handling, and OOPs
        filling in as they're written up.
      </p>

      {firstAvailable && (
        <Link
          href={`/python/${firstAvailable.slug}`}
          className="mt-6 inline-block rounded-full bg-[#3654FF] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2946e0] transition-colors"
        >
          Start with {firstAvailable.title}
        </Link>
      )}
    </div>
  );
}
