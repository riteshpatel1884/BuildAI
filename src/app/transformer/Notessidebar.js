'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/transformer', label: 'Notes' }
  // { href: '/deep-agent/code', label: 'Code' },
];

export function NotesSidebar({ open, onToggle }) {
  const pathname = usePathname();

  // Collapsed: a slim rail with just the toggle — main content gets the
  // width back since this is only 48px wide instead of 224px.
  if (!open) {
    return (
      <div className="flex h-full w-12 shrink-0 flex-col items-center border-r border-zinc-200 bg-zinc-50/60 py-3 dark:border-white/10 dark:bg-white/[0.02]">
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

  return (
    <nav
      aria-label="Deep Agent nav"
      className="flex h-full w-56 shrink-0 flex-col border-r border-zinc-200 bg-zinc-50/60 dark:border-white/10 dark:bg-white/[0.02]"
    >
      <div className="flex items-center justify-between px-3 py-3">
        <span
          className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Transformer
        </span>
        <button
          onClick={onToggle}
          aria-label="Collapse sidebar"
          className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
        >
          <ChevronIcon flipped />
        </button>
      </div>

      <div className="flex flex-col gap-0.5 px-2 pb-3">
        {NAV_ITEMS.map((item) => {
          const active =
            item.href === '/deep-agent'
              ? pathname === '/deep-agent'
              : pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                'rounded-md px-2.5 py-1.5 text-sm transition-colors',
                active
                  ? 'bg-[#3654FF]/10 font-medium text-[#3654FF] dark:bg-[#7C93FF]/10 dark:text-[#7C93FF]'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white',
              ].join(' ')}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

// A plain chevron: "›" to open (collapsed rail), rotated to "‹" to collapse
// (expanded header).
function ChevronIcon({ flipped }) {
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
      style={{ transform: flipped ? 'rotate(180deg)' : 'none' }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}