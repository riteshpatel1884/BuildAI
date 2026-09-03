import { GithubRepoCell } from '../Codecell';

export default function DeepAgentCodePage() {
  return (
    <div>
      <h1
        className="text-2xl font-semibold tracking-tight sm:text-3xl"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Code
      </h1>
      <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">
        Live from the repo — this list always reflects whatever's actually
        there.
      </p>

      <div className="mt-6">
        <GithubRepoCell
          repo="riteshpatel1884/AI"
          path="22_deep_agent"
          branch="main"
          label="riteshpatel1884/AI/22_deep_agent"
        />
      </div>
    </div>
  );
}