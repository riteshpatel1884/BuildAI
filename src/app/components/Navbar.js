'use client';

import Link from 'next/link';
import { useTheme } from '../ThemeProvider';

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white dark:border-white/10 dark:bg-[#18181b] transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-zinc-900 dark:text-white">
          BuildAI
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-white/20 dark:text-white/80 dark:hover:bg-white/10 transition-colors"
            style={{ visibility: mounted ? 'visible' : 'hidden' }}
          >
            {theme === 'dark' ? (
              // sun icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              // moon icon
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <Link
            href="/python"
            className="rounded-full bg-[#3654FF] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2946e0] transition-colors"
          >
            Start exploring
          </Link>
        </div>
      </div>
    </header>
  );
}