'use client';

import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { useTheme } from '../ThemeProvider'; // adjust path if ThemeProvider lives elsewhere
import { NotesSidebar } from './NotesSidebar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export default function PythonLayout({ children }) {
  const { mounted } = useTheme();

  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300`}
      style={{ fontFamily: 'var(--font-body)', visibility: mounted ? 'visible' : 'hidden' }}
    >
      <div className="mx-auto flex max-w-6xl gap-10 px-6 py-10">
        <NotesSidebar />
        <main className="min-w-0 flex-1 pb-24">{children}</main>
      </div>
    </div>
  );
}
