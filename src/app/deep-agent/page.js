'use client';

import { useEffect, useState } from 'react';

// Your edit link's file ID (1u9M4G-Vn0VTTriemO--EsX03m9swiWK0BgwYWwHTrP4),
// converted to the /preview form — /edit URLs won't embed for viewers
// without edit access, /preview will.
const DOC_EMBED_URL =
  'https://docs.google.com/document/d/1u9M4G-Vn0VTTriemO--EsX03m9swiWK0BgwYWwHTrP4/edit?tab=t.eb061gjdoazt';

export default function DeepAgentDocsPage() {
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) setShowMobileWarning(true);
  }, []);

  return (
    <>
      {showMobileWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6">
          <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-xl dark:border-white/10 dark:bg-zinc-900">
            <h2
              className="text-lg font-semibold text-zinc-900 dark:text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Better on desktop
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              This doc is easier to read on a larger screen. For the best
              experience, open this page on a desktop or laptop.
            </p>
            <button
              onClick={() => setShowMobileWarning(false)}
              className="mt-5 w-full rounded-full bg-[#3654FF] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2946e0]"
            >
              Continue anyway
            </button>
          </div>
        </div>
      )}

      <iframe
        src={DOC_EMBED_URL}
        title="Deep Agent notes"
        className="h-[calc(100vh-6rem)] w-full rounded-xl border border-zinc-200 dark:border-white/10"
        allow="autoplay"
      />
    </>
  );
}