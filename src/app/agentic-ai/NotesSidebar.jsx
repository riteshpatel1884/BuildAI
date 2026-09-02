"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { noteGroups } from "./lib/agentic-notes-data";

export default function NotesSidebar() {
  const pathname = usePathname();
  const activeSlug = pathname?.split("/").filter(Boolean).pop();

  // Agentic AI starts open since it's the only group so far.
  const [openGroups, setOpenGroups] = useState({ "agentic-ai": true });

  const toggleGroup = (slug) =>
    setOpenGroups((prev) => ({ ...prev, [slug]: !prev[slug] }));

  return (
    <nav aria-label="Agentic AI notes" className="w-full shrink-0 text-sm sm:w-64">
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 pr-2">
        {noteGroups.map((group) => {
          const isOpen = openGroups[group.slug] ?? false;
          const hasNotes = group.notes.length > 0;

          return (
            <div key={group.slug} className="mb-1">
              <button
                onClick={() => toggleGroup(group.slug)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span className="text-xs uppercase tracking-wide">{group.name}</span>
                <ChevronIcon open={isOpen} />
              </button>

              {isOpen && (
                <div className="ml-2 flex flex-col gap-0.5 border-l border-zinc-200 pl-3 dark:border-white/10">
                  {hasNotes ? (
                    group.notes.map((note) => {
                      const active = note.slug === activeSlug;
                      return (
                        <Link
                          key={note.slug}
                          href={`/agentic-ai/${note.slug}`}
                          className={[
                            "rounded-md px-2.5 py-1.5 transition-colors",
                            active
                              ? "bg-[#3654FF]/10 font-medium text-[#3654FF] dark:bg-[#7C93FF]/10 dark:text-[#7C93FF]"
                              : note.available
                              ? "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                              : "text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:text-zinc-600 dark:hover:bg-white/5 dark:hover:text-zinc-400",
                          ].join(" ")}
                        >
                          {note.title}
                        </Link>
                      );
                    })
                  ) : (
                    <span className="px-2.5 py-1.5 text-zinc-400 dark:text-zinc-600">Coming soon</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform"
      style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}