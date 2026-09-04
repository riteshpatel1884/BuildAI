'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AGENTIC_AI } from './docs';

const MIN_WIDTH = 200;
const MAX_WIDTH = 480;
const DEFAULT_WIDTH = 256;
const STORAGE_KEY = 'notes-sidebar-width';

export function NotesSidebar({ open, onToggle }) {
  const pathname = usePathname();
  const [openSubtopics, setOpenSubtopics] = useState({});
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [isResizing, setIsResizing] = useState(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(DEFAULT_WIDTH);

  // Restore a previously chosen width.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = Number(saved);
      if (!Number.isNaN(parsed)) {
        setWidth(Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, parsed)));
      }
    }
  }, []);

  const handlePointerMove = useCallback((e) => {
    const delta = e.clientX - startXRef.current;
    const next = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, startWidthRef.current + delta));
    setWidth(next);
  }, []);

  const handlePointerUp = useCallback(() => {
    setIsResizing(false);
    setWidth((current) => {
      window.localStorage.setItem(STORAGE_KEY, String(current));
      return current;
    });
  }, []);

  useEffect(() => {
    if (!isResizing) return;

    document.addEventListener('mousemove', handlePointerMove);
    document.addEventListener('mouseup', handlePointerUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseup', handlePointerUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing, handlePointerMove, handlePointerUp]);

  const startResizing = (e) => {
    startXRef.current = e.clientX;
    startWidthRef.current = width;
    setIsResizing(true);
  };

  const toggleSubtopic = (key) => {
    setOpenSubtopics((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!open) {
    return (
      <div className="sticky top-0 flex h-screen w-12 shrink-0 flex-col items-center border-r border-zinc-200 bg-zinc-50/60 py-3 dark:border-white/10 dark:bg-white/[0.02]">
        <button
          onClick={onToggle}
          aria-label="Open sidebar"
          className="flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
        >
          <ChevronIcon />
        </button>
      </div>
    );
  }

  const topicActive = pathname?.startsWith('/agentic-ai');

  return (
    <div className="sticky top-0 flex h-screen shrink-0">
      <nav
        aria-label="Notes navigation"
        style={{ width }}
        className="flex h-full shrink-0 flex-col overflow-y-auto border-r border-zinc-200 bg-zinc-50/60 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-track]:bg-transparent dark:border-white/10 dark:bg-white/[0.02] dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700"
      >
        <div className="flex items-center justify-end px-3 py-3">
          <button
            onClick={onToggle}
            aria-label="Collapse sidebar"
            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <ChevronIcon flipped />
          </button>
        </div>

        <div className="flex flex-col gap-1 px-2 pb-4">
          <div className="flex flex-col">
            <div
              className={[
                'flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium',
                topicActive
                  ? 'bg-[#3654FF]/10 text-[#3654FF] dark:bg-[#7C93FF]/10 dark:text-[#7C93FF]'
                  : 'text-zinc-700 dark:text-zinc-300',
              ].join(' ')}
            >
              <DocIcon />
              <span className="truncate">{AGENTIC_AI.title}</span>
            </div>

            <div className="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-zinc-200 pl-2 dark:border-white/10">
              {Object.entries(AGENTIC_AI.subtopics).map(([subSlug, subtopic]) => {
                const subHref = `/agentic-ai/${subSlug}`;
                const subActive =
                  pathname === subHref || pathname?.startsWith(`${subHref}/`);

                const hasNotes = Boolean(subtopic.notes);
                const hasCode = Boolean(subtopic.code);
                const hasChildren = hasNotes || hasCode;

                // Auto-expand a subtopic whenever the current page is inside it.
                const expanded = openSubtopics[subSlug] ?? subActive;

                return (
                  <div key={subSlug} className="flex flex-col">
                    <button
                      onClick={() => hasChildren && toggleSubtopic(subSlug)}
                      className={[
                        'flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-sm transition-colors',
                        subActive
                          ? 'font-medium text-[#3654FF] dark:text-[#7C93FF]'
                          : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white',
                      ].join(' ')}
                    >
                      {hasChildren ? (
                        <ChevronIcon small flipped={expanded} />
                      ) : (
                        <span className="inline-block w-3 shrink-0" />
                      )}
                      <DocIcon />
                      <span className="truncate">{subtopic.label}</span>
                    </button>

                    {hasChildren && expanded && (
                      <div className="ml-6 mt-0.5 flex flex-col gap-0.5 border-l border-zinc-200 pl-2 dark:border-white/10">
                        {hasNotes && (
                          <SidebarLeaf
                            href={`${subHref}/notes`}
                            label="Notes"
                            active={pathname === `${subHref}/notes`}
                          />
                        )}
                        {hasCode && (
                          <SidebarLeaf
                            href={`${subHref}/code`}
                            label="Code"
                            active={pathname === `${subHref}/code`}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Drag handle — sits on the sidebar's right edge, lets the user set the width */}
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label="Resize sidebar"
        onMouseDown={startResizing}
        className={[
          'group flex w-1.5 shrink-0 cursor-col-resize items-stretch justify-center',
          isResizing ? 'bg-[#3654FF]/30' : 'hover:bg-[#3654FF]/20',
        ].join(' ')}
      >
        <div className="w-px bg-zinc-200 group-hover:bg-transparent dark:bg-white/10" />
      </div>
    </div>
  );
}

function SidebarLeaf({ href, label, active }) {
  return (
    <Link
      href={href}
      className={[
        'rounded-md px-2 py-1.5 text-sm transition-colors',
        active
          ? 'bg-[#3654FF]/10 font-medium text-[#3654FF] dark:bg-[#7C93FF]/10 dark:text-[#7C93FF]'
          : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white',
      ].join(' ')}
    >
      {label}
    </Link>
  );
}

function DocIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-zinc-400 dark:text-zinc-500"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

function ChevronIcon({ flipped, small }) {
  const size = small ? 12 : 14;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-zinc-400"
      style={{
        transform: flipped ? 'rotate(90deg)' : 'none',
        transition: 'transform 150ms',
      }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}