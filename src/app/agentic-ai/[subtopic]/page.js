'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AGENTIC_AI } from '../docs';

// Notes and Code are reached directly from the sidebar (nested under each
// subtopic), so this page just forwards you to whichever one exists.
export default function SubtopicPage() {
  const params = useParams();
  const router = useRouter();

  const subtopic = AGENTIC_AI.subtopics?.[params.subtopic];

  useEffect(() => {
    if (!subtopic) return;
    const baseUrl = `/agentic-ai/${params.subtopic}`;

    if (subtopic.notes) {
      router.replace(`${baseUrl}/notes`);
    } else if (subtopic.code) {
      router.replace(`${baseUrl}/code`);
    }
  }, [subtopic, params.subtopic, router]);

  if (!subtopic) {
    return <div>Topic not found</div>;
  }

  if (!subtopic.notes && !subtopic.code) {
    return (
      <div>
        <h1
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {subtopic.label}
        </h1>
        <p className="mt-4 text-sm text-zinc-500">Content coming soon.</p>
      </div>
    );
  }

  return null;
}