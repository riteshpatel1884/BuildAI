'use client';

import { useState, useEffect } from 'react';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { useTheme } from './ThemeProvider';

/* ---------- Fonts ---------- */
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

const noteTopics = [
  { label: 'Python', slug: 'python' },
  { label: 'Mathematics', slug: 'mathematics', comingSoon: true },
  { label: 'Machine Learning', slug: 'machine-learning', comingSoon: true },
  { label: 'pyTorch', slug: 'pytorch', comingSoon: true },
  { label: 'Deep Learning', slug: 'deep-learning', comingSoon: true },
  { label: 'Transformer', slug: 'transformer' },
  { label: 'LLM Fundamentals', slug: 'llm-fundamentals', comingSoon: true },
  { label: 'Prompt + Context Engineering', slug: 'prompt-context-engineering', comingSoon: true },
  { label: 'RAG', slug: 'rag', comingSoon: true },
  { label: 'Agentic AI', slug: 'agentic-ai' },
  { label: 'Deep Agents', slug: 'deep-agent' },
  { label: 'MCP', slug: 'mcp', comingSoon: true },
  { label: 'LLM Evaluation', slug: 'llm-evaluation', comingSoon: true },
  { label: 'Production AI Engineering', slug: 'production-ai-engineering', comingSoon: true },
  { label: 'Observability', slug: 'observability', comingSoon: true },
  { label: 'Guardrails', slug: 'guardrails', comingSoon: true },
  { label: 'AI Security', slug: 'ai-security', comingSoon: true },
  { label: 'AI Governance / Responsible AI', slug: 'ai-governance-responsible-ai', comingSoon: true },
  { label: 'AI Cost Optimization', slug: 'ai-cost-optimization', comingSoon: true },
  { label: 'AI System Design', slug: 'ai-system-design', comingSoon: true },
  { label: 'Reliability', slug: 'reliability', comingSoon: true },
  { label: 'LLM Gateways', slug: 'llm-gateways', comingSoon: true },
  { label: 'MLOps / LLMOps', slug: 'mlops-llmops', comingSoon: true },
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

/* ---------- Desktop-nudge modal (only ever opened on mobile) ---------- */
function TopicModal({ topic, onClose, onContinue }) {
  useEffect(() => {
    if (!topic) return;

    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [topic, onClose]);

  if (!topic) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-sm rounded-3xl border border-zinc-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#3654FF]/10">
          <DesktopIcon />
        </div>

        <h3
          className="mt-4 text-center text-lg font-semibold text-zinc-900 dark:text-zinc-100"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Best viewed on desktop
        </h3>

        <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <span className="font-medium text-[#3654FF] dark:text-[#7C93FF]">{topic.label}</span> notes
          include code blocks, diagrams, and side-by-side references that read a lot better on a
          larger screen.
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <button
            onClick={() => onContinue(topic.slug)}
            className="w-full rounded-full bg-[#3654FF] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2946e0]"
          >
            Continue anyway
          </button>
          <button
            onClick={onClose}
            className="w-full rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 dark:border-white/20 dark:text-zinc-300 dark:hover:border-white/40"
          >
            Stay here
          </button>
        </div>
      </div>
    </div>
  );
}

/* Below this width counts as "mobile/tablet" for the popup nudge */
const MOBILE_BREAKPOINT = 1024;

export default function Home() {
  const { theme, toggleTheme, mounted } = useTheme();
  const dark = theme === 'dark';
  const [activeTopic, setActiveTopic] = useState(null);

  function handleTopicClick(topic) {
    const isMobile =
      typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT;

    if (isMobile) {
      setActiveTopic(topic);
    } else {
      window.location.href = `/${topic.slug}`;
    }
  }

  function handleContinue(slug) {
    window.location.href = `/${slug}`;
  }

  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300`}
      style={{ fontFamily: 'var(--font-body)', visibility: mounted ? 'visible' : 'hidden' }}
    >

      {/* ---------------- HERO ---------------- */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(54,84,255,0.10),transparent)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,147,255,0.12),transparent)]"
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10 text-center sm:pt-28">
          <p
            className="text-sm font-medium text-zinc-500 dark:text-zinc-400"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            A learning path for AI engineering
          </p>

          <h1
            className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Stop hunting for <span className="text-[#3654FF] dark:text-[#7C93FF]">notes.</span>
            <br className="hidden sm:block" /> Start following the{' '}
            <span className="text-[#3654FF] dark:text-[#7C93FF]">map.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Every roadmap, note, and resource for AI engineering — LLMs, RAG, fine-tuning,
            agents, deployment — organized in one place instead of scattered across fifty
            tabs and half-finished bookmarks.
          </p>

          <div className="mt-8 flex justify-center">
            
            <a  href="#notes"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3654FF] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2946e0]"
            >
              Browse notes
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl px-6 pb-24">
          {/* Desktop / tablet — one continuous line, no zigzag */}
          <div className="relative hidden sm:block">
            <div
              aria-hidden
              className="absolute inset-x-0 top-[7px] h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent dark:via-zinc-700"
            />
            <div className="relative flex items-start justify-between">
              {waypoints.map((label) => (
                <div key={label} className="flex flex-1 flex-col items-center px-1">
                  <span className="relative z-10 grid h-[15px] w-[15px] place-items-center rounded-full bg-[#FFB238] ring-4 ring-[#FFB238]/20" />
                  <span
                    className="mt-3 max-w-[7rem] text-center text-xs font-medium leading-snug text-zinc-600 dark:text-zinc-400"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="relative flex flex-col gap-6 pl-6 sm:hidden">
            <span className="absolute left-[7px] top-2 bottom-2 border-l border-dashed border-zinc-300 dark:border-zinc-700" />
            {waypoints.map((label) => (
              <div key={label} className="relative flex items-center gap-3">
                <span className="absolute -left-6 h-3 w-3 rounded-full bg-[#FFB238] ring-4 ring-[#FFB238]/20" />
                <span
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- NOTES ---------------- */}
      <section id="notes" className="border-y border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10 max-w-xl">
            <h2
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Notes that don&apos;t waste your time
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Short, dense, and ordered the way you&apos;d actually learn them — no fluff,
              no filler intros.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 sm:gap-x-12">
            <ol className="divide-y divide-zinc-200 dark:divide-white/10">
              {noteTopics.map((topic, i) => (
                <li key={topic.slug} className="break-inside-avoid">
                  {topic.comingSoon ? (
                    <div className="flex items-center justify-between gap-4 py-3.5 text-zinc-400 dark:text-zinc-600">
                      <span className="flex items-center gap-4">
                        <span className="text-xs tabular-nums" style={{ fontFamily: 'var(--font-mono)' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-medium">{topic.label}</span>
                      </span>
                      <span className="text-xs" style={{ fontFamily: 'var(--font-mono)' }}>
                        Soon
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleTopicClick(topic)}
                      className="group flex w-full items-center justify-between gap-4 py-3.5 text-left"
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className="text-xs tabular-nums text-[#3654FF] dark:text-[#7C93FF]"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-medium text-zinc-800 transition-colors group-hover:text-[#3654FF] dark:text-zinc-200 dark:group-hover:text-[#7C93FF]">
                          {topic.label}
                        </span>
                      </span>
                      <ArrowIcon className="text-zinc-300 transition-all group-hover:translate-x-0.5 group-hover:text-[#3654FF] dark:text-zinc-700 dark:group-hover:text-[#7C93FF]" />
                    </button>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------- WHY ---------------- */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 max-w-xl">
          <h2
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for people actually learning this stuff
          </h2>
        </div>

        <div className="grid divide-y divide-zinc-200 dark:divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {features.map((f) => (
            <div key={f.title} className="py-6 first:pt-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#FFB238]" />
              <h3 className="mt-4 text-lg font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-zinc-200 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <LogoMark small />
            <span style={{ fontFamily: 'var(--font-display)' }}>BuildAI</span>
          </div>
          <p style={{ fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} BuildAI. All AI Engineering notes, one place.
          </p>
        </div>
      </footer>

      <TopicModal
        topic={activeTopic}
        onClose={() => setActiveTopic(null)}
        onContinue={handleContinue}
      />
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

function DesktopIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3654FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
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

function ArrowIcon({ className = '' }) {
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
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}