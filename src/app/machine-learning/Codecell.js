'use client';

import { useEffect, useState } from 'react';

function Dot({ color }) {
  return (
    <span
      className="inline-block h-3 w-3 shrink-0 rounded-full"
      style={{ backgroundColor: color }}
    />
  );
}

// Extension → color, purely cosmetic (mirrors the little language dot VS
// Code shows next to a filename).
const EXT_COLORS = {
  ipynb: '#F37626', // Jupyter orange
  py: '#3776ab',    // Python blue
  js: '#f0db4f',
  jsx: '#61dafb',
  ts: '#3178c6',
  tsx: '#3178c6',
  md: '#8a8a8a',
  json: '#cbcb41',
};

function FileIcon({ name, type }) {
  if (type === 'dir') return <Dot color="#dcb67a" />;
  const ext = name.split('.').pop()?.toLowerCase();
  return <Dot color={EXT_COLORS[ext] ?? '#6e7681'} />;
}

function formatBytes(bytes) {
  if (bytes == null) return '';
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

// GithubRepoCell live-fetches a folder's contents from the GitHub API and
// renders it as a small VS-Code-style file browser, so it always reflects
// whatever is actually in the repo. Each row links straight to that file's
// GitHub blob view.
//
// Props: repo ("owner/name"), path (folder path within the repo, "" for
// root), branch (defaults to "main"), label (optional header text —
// defaults to "repo/path").
export function GithubRepoCell({ repo, path = '', branch = 'main', label }) {
  const [state, setState] = useState({ status: 'loading', files: [] });

  useEffect(() => {
    let cancelled = false;
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const files = Array.isArray(data) ? data : [data];
        // Folders first, then files, alphabetically within each.
        files.sort((a, b) => {
          if (a.type !== b.type) return a.type === 'dir' ? -1 : 1;
          return a.name.localeCompare(b.name);
        });
        setState({ status: 'ready', files });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', files: [] });
      });

    return () => {
      cancelled = true;
    };
  }, [repo, path, branch]);

  const repoUrl = `https://github.com/${repo}${path ? `/tree/${branch}/${path}` : `/tree/${branch}`}`;

  return (
    <div className="mb-5 overflow-hidden rounded-lg border border-black/40 shadow-lg shadow-black/20">
      <div className="flex items-center justify-between gap-3 bg-[#323233] px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex shrink-0 gap-1.5">
            <Dot color="#ff5f57" />
            <Dot color="#febc2e" />
            <Dot color="#28c840" />
          </div>
          <span
            className="ml-2 truncate text-[13px] text-[#cccccc]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {label ?? `${repo}/${path}`}
          </span>
        </div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-[12px] text-[#7C93FF] hover:underline"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Open on GitHub ↗
        </a>
      </div>

      <div className="bg-[#1e1e1e] px-2 py-2">
        {state.status === 'loading' && (
          <div
            className="px-2.5 py-3 text-[13px] text-[#8a8a8a]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Loading files…
          </div>
        )}

        {state.status === 'error' && (
          <div
            className="px-2.5 py-3 text-[13px] text-[#8a8a8a]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Couldn't load the file list —{' '}
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#7C93FF] hover:underline"
            >
              view it on GitHub
            </a>{' '}
            instead.
          </div>
        )}

        {state.status === 'ready' && state.files.length === 0 && (
          <div
            className="px-2.5 py-3 text-[13px] text-[#8a8a8a]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            No files here yet.
          </div>
        )}

        {state.status === 'ready' &&
          state.files.map((f) => (
            <a
              key={f.sha ?? f.name}
              href={f.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-md px-2.5 py-2 text-[13px] text-[#d4d4d4] transition-colors hover:bg-white/5"
            >
              <span
                className="flex min-w-0 items-center gap-2 truncate"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                <FileIcon name={f.name} type={f.type} />
                <span className="truncate">{f.name}</span>
              </span>
              {f.type === 'file' && (
                <span className="shrink-0 text-[11px] text-[#6e7681]">
                  {formatBytes(f.size)}
                </span>
              )}
            </a>
          ))}
      </div>
    </div>
  );
}