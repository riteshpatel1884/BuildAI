'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AGENTIC_AI } from '../../docs';
import { GithubRepoCell } from '../../Codecell';

export default function ContentPage() {
  const params = useParams();

  const [showMobileWarning, setShowMobileWarning] =
    useState(false);

  const subtopic = AGENTIC_AI.subtopics?.[params.subtopic];

  const section = params.section;

  if (!subtopic) {
    return <div>Content not found</div>;
  }

  useEffect(() => {
    const isMobile =
      window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) {
      setShowMobileWarning(true);
    }
  }, []);

  // -----------------------
  // NOTES
  // -----------------------

  if (section === 'notes') {
    if (!subtopic.notes) {
      return <div>Notes not available.</div>;
    }

    return (
      <>
        {showMobileWarning && (
          <MobileWarning
            onClose={() => setShowMobileWarning(false)}
          />
        )}

        <iframe
          src={subtopic.notes}
          title={`${subtopic.label} notes`}
          className="h-[calc(100vh-6rem)] w-full rounded-xl border border-zinc-200 dark:border-white/10"
          allow="autoplay"
        />
      </>
    );
  }

  // -----------------------
  // CODE
  // -----------------------

  if (section === 'code') {
    if (!subtopic.code) {
      return <div>Code not available.</div>;
    }

    return (
      <div>
        <h1
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {subtopic.label} — Code
        </h1>

        <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">
          Live from the repository.
        </p>

        <div className="mt-6">
          <GithubRepoCell
            repo={subtopic.code.repo}
            path={subtopic.code.path}
            branch={subtopic.code.branch}
            label={`${subtopic.code.repo}/${subtopic.code.path}`}
          />
        </div>
      </div>
    );
  }

  return <div>Invalid section.</div>;
}

function MobileWarning({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6">
      <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-xl dark:border-white/10 dark:bg-zinc-900">
        <h2
          className="text-lg font-semibold text-zinc-900 dark:text-white"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Better on desktop
        </h2>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          This doc is easier to read on a larger screen.
        </p>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-full bg-[#3654FF] px-4 py-2.5 text-sm font-semibold text-white"
        >
          Continue anyway
        </button>
      </div>
    </div>
  );
}