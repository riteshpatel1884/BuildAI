'use client';

import { useEffect, useState } from 'react';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

/* ---------- Fonts ----------
   Space Grotesk = display / headlines (geometric, technical)
   Inter         = body copy
   JetBrains Mono = labels, tags, stats — reads like config/code
------------------------------ */
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

/* ---------- Content ---------- */
const waypoints = [
  'Python & Math',
  'LLM Fundamentals',
  'Prompt Engineering',
  'RAG',
  'Fine-tuning',
  'Agents',
  'Deployment',
];

const roadmapTracks = [
  {
    title: 'LLM Engineer',
    desc: 'Transformers, prompting, RAG, and fine-tuning — the core stack for building with large language models.',
    nodes: 14,
    tag: 'Most popular',
  },
  {
    title: 'ML Engineer',
    desc: 'Classical ML, feature engineering, model training, and evaluation, from first principles to production.',
    nodes: 18,
  },
  {
    title: 'MLOps Engineer',
    desc: 'CI/CD for models, monitoring, versioning, and infra for shipping ML reliably at scale.',
    nodes: 11,
  },
  {
    title: 'AI Agent Developer',
    desc: 'Tool use, planning, memory, and multi-agent orchestration for autonomous systems.',
    nodes: 9,
    tag: 'New',
  },
  {
    title: 'Prompt Engineer',
    desc: 'Structured prompting, evaluation harnesses, and techniques that actually move the needle.',
    nodes: 8,
  },
  {
    title: 'Data Engineer for AI',
    desc: 'Pipelines, vector stores, and data quality practices that feed every model above.',
    nodes: 10,
  },
];

const noteTopics = [
  'Transformers',
  'RAG Systems',
  'Vector Databases',
  'Fine-tuning',
  'Prompt Techniques',
  'Evaluation & Metrics',
  'AI Agents',
  'Model Deployment',
  'Tokenization',
  'Embeddings',
  'Context Windows',
  'Model Serving',
];

const features = [
  {
    title: 'One map, not fifty tabs',
    desc: 'Every roadmap and note lives in one place, cross-linked, so you stop re-Googling the same concept every few weeks.',
  },
  {
    title: 'Curated, not crawled',
    desc: 'Every note is written and checked by hand. No auto-scraped summaries, no outdated tutorials from three model generations ago.',
  },
  {
    title: 'Built while learning',
    desc: 'Maintained by someone actually working through the AI engineering stack, so gaps get filled as they are found.',
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('waypoint-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    window.localStorage.setItem('waypoint-theme', next ? 'dark' : 'light');
  };

  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-white text-slate-900 antialiased dark:bg-[#0A0E1A] dark:text-slate-100 transition-colors duration-300`}
      style={{ fontFamily: 'var(--font-body)', visibility: mounted ? 'visible' : 'hidden' }}
    >
      {/* ---------------- NAV ---------------- */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#0A0E1A]/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <LogoMark />
            <span
              className="text-lg font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Waypoint
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <a href="#roadmaps" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Roadmaps
            </a>
            <a href="#notes" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Notes
            </a>
            <a href="#why" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Why Waypoint
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900 dark:border-white/15 dark:text-slate-300 dark:hover:border-white/30 dark:hover:text-white transition-colors"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href="#roadmaps"
              className="hidden rounded-full bg-[#3654FF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2946e0] transition-colors sm:inline-block"
            >
              Start exploring
            </a>
          </div>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(54,84,255,0.14),transparent)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,147,255,0.18),transparent)]"
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-10 text-center sm:pt-28">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-500 dark:border-white/15 dark:text-slate-400"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFB238]" />
            AI engineering, mapped
          </span>

          <h1
            className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Stop hunting for notes.
            <br className="hidden sm:block" /> Start following the map.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Every roadmap, note, and resource for AI engineering — LLMs, RAG, fine-tuning,
            agents, deployment — organized in one place instead of scattered across fifty
            tabs and half-finished bookmarks.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#roadmaps"
              className="w-full rounded-full bg-[#3654FF] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#3654FF]/30 hover:bg-[#2946e0] transition-colors sm:w-auto"
            >
              Explore roadmaps
            </a>
            <a
              href="#notes"
              className="w-full rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors dark:border-white/20 dark:text-slate-300 dark:hover:border-white/40 dark:hover:text-white sm:w-auto"
            >
              Browse notes
            </a>
          </div>
        </div>

        {/* ---- Signature: the winding roadmap ---- */}
        <div className="relative mx-auto mt-16 max-w-5xl px-6 pb-24">
          <div className="overflow-x-auto">
            <div className="flex min-w-[720px] items-end justify-between gap-2 px-4">
              {waypoints.map((label, i) => (
                <div
                  key={label}
                  className="flex flex-1 flex-col items-center"
                  style={{ transform: `translateY(${i % 2 === 0 ? '0px' : '22px'})` }}
                >
                  <div className="relative flex w-full items-center">
                    {i !== 0 && (
                      <span className="absolute right-1/2 h-px w-full border-t border-dashed border-slate-300 dark:border-white/20" />
                    )}
                    <span className="relative mx-auto grid h-3 w-3 place-items-center rounded-full bg-[#FFB238] ring-4 ring-[#FFB238]/20" />
                  </div>
                  <span
                    className="mt-3 max-w-[6.5rem] text-center text-xs font-medium leading-snug text-slate-600 dark:text-slate-400"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="border-y border-slate-200 dark:border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center sm:grid-cols-4">
          {[
            ['6', 'Roadmap tracks'],
            ['340+', 'Curated notes'],
            ['60+', 'Reference resources'],
            ['Weekly', 'Content updates'],
          ].map(([value, label]) => (
            <div key={label}>
              <div
                className="text-2xl font-semibold text-[#3654FF] dark:text-[#7C93FF] sm:text-3xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ROADMAPS ---------------- */}
      <section id="roadmaps" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-xl">
          <span
            className="text-xs font-medium uppercase tracking-widest text-[#3654FF] dark:text-[#7C93FF]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Roadmaps
          </span>
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Pick your path
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Six focused tracks covering the roles inside AI engineering. Each one breaks
            down into ordered, linked notes so you always know what's next.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roadmapTracks.map((track) => (
            <a
              key={track.title}
              href="#"
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#3654FF]/40 hover:shadow-lg hover:shadow-[#3654FF]/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#7C93FF]/40"
            >
              {track.tag && (
                <span
                  className="absolute right-6 top-6 rounded-full bg-[#FFB238]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#B9711E] dark:text-[#FFB238]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {track.tag}
                </span>
              )}
              <h3
                className="pr-16 text-lg font-semibold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {track.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {track.desc}
              </p>
              <div className="mt-5 flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                <span style={{ fontFamily: 'var(--font-mono)' }}>{track.nodes} notes</span>
                <span className="inline-flex items-center gap-1 font-medium text-[#3654FF] dark:text-[#7C93FF]">
                  View roadmap
                  <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------------- NOTES ---------------- */}
      <section id="notes" className="border-y border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 max-w-xl">
            <span
              className="text-xs font-medium uppercase tracking-widest text-[#3654FF] dark:text-[#7C93FF]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Notes
            </span>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Notes that don't waste your time
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Short, dense, and linked back to the roadmap step they belong to. No fluff,
              no filler intros.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {noteTopics.map((topic) => (
              <a
                key={topic}
                href="#"
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-[#3654FF]/40 hover:text-[#3654FF] transition-colors dark:border-white/10 dark:bg-transparent dark:text-slate-300 dark:hover:border-[#7C93FF]/40 dark:hover:text-[#7C93FF]"
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY ---------------- */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-xl">
          <span
            className="text-xs font-medium uppercase tracking-widest text-[#3654FF] dark:text-[#7C93FF]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Why Waypoint
          </span>
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for people actually learning this stuff
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <div className="h-1 w-8 rounded-full bg-[#FFB238]" />
              <h3
                className="mt-4 text-lg font-semibold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-[#0A0E1A] px-8 py-16 text-center dark:bg-white/[0.03] dark:ring-1 dark:ring-white/10">
          <h2
            className="max-w-md text-2xl font-semibold text-white sm:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to stop losing your notes in fifty tabs?
          </h2>
          <a
            href="#roadmaps"
            className="rounded-full bg-[#3654FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2946e0] transition-colors"
          >
            Start exploring
          </a>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 dark:text-slate-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <LogoMark small />
            <span style={{ fontFamily: 'var(--font-display)' }}>Waypoint</span>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)' }}>© {new Date().getFullYear()} Waypoint. All roadmaps, one place.</p>
        </div>
      </footer>
    </div>
  );
}

/* ---------------- Icons / Logo ---------------- */

function LogoMark({ small }) {
  const size = small ? 22 : 28;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="9" fill="#3654FF" />
      <path
        d="M8 21L14 11L18 17L24 8"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="8" r="2.1" fill="#FFB238" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}