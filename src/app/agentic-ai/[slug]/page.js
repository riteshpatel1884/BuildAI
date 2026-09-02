import Link from "next/link";
import { notFound } from "next/navigation";
import { notesBySlug, noteOrder } from "../lib/agentic-notes-data";
import NoteCard from "../NoteCard";

export function generateStaticParams() {
  return noteOrder.map((slug) => ({ slug }));
}

export default async function AgenticTopicPage({ params }) {
  const { slug } = await params;
  const note = notesBySlug[slug];
  if (!note) notFound();

  const i = noteOrder.indexOf(slug);
  const prevSlug = i > 0 ? noteOrder[i - 1] : null;
  const nextSlug = i < noteOrder.length - 1 ? noteOrder[i + 1] : null;

  return (
    <div>
      <span
        className="text-xs font-medium uppercase tracking-widest text-[#3654FF] dark:text-[#7C93FF]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        Agentic AI
      </span>
      <h1
        className="mt-2 text-3xl font-semibold tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {note.title}
      </h1>

      <div className="mt-8 space-y-5">
        {note.blocks.length > 0 ? (
          note.blocks.map((block, i) => <NoteCard key={i} block={block} />)
        ) : (
          <p className="text-zinc-500 dark:text-zinc-500">Notes not added yet.</p>
        )}
      </div>

      <div className="mt-14 flex items-center justify-between border-t border-zinc-200 pt-6 text-sm dark:border-white/10">
        {prevSlug ? (
          <Link href={`/agentic-ai/${prevSlug}`} className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            \u2190 {notesBySlug[prevSlug].title}
          </Link>
        ) : (
          <span />
        )}
        {nextSlug ? (
          <Link href={`/agentic-ai/${nextSlug}`} className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            {notesBySlug[nextSlug].title} \u2192
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}