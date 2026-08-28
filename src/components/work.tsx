'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import ProjectGrid, { type GitHubRepository } from './projectGrid';

const REPOSITORIES_URL =
  'https://api.github.com/users/nukrobzero/repos?sort=updated&direction=desc&per_page=100';

const fetchRepositories = async (signal?: AbortSignal) => {
  const response = await fetch(REPOSITORIES_URL, {
    headers: { Accept: 'application/vnd.github+json' },
    signal,
  });

  if (!response.ok) throw new Error('Unable to load repositories right now.');

  const data = (await response.json()) as GitHubRepository[];
  return Array.isArray(data) ? data : [];
};

const Work = () => {
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadRepositories = async () => {
    setLoading(true);
    setError('');

    try {
      setRepos(await fetchRepositories());
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to load repositories right now.',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchRepositories(controller.signal)
      .then(setRepos)
      .catch((requestError: unknown) => {
        if (requestError instanceof DOMException && requestError.name === 'AbortError') return;
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Unable to load repositories right now.',
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3' aria-label='Loading projects'>
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className='h-64 animate-pulse rounded-3xl border border-white/10 bg-white/[0.04]' />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex min-h-64 flex-col items-center justify-center rounded-3xl border border-red-400/20 bg-red-400/[0.06] px-6 text-center'>
        <AlertCircle className='mb-4 text-red-300' size={32} aria-hidden='true' />
        <p className='text-lg font-semibold'>Projects could not be loaded</p>
        <p className='mt-2 max-w-md text-sm text-neutral-400'>{error}</p>
        <button
          type='button'
          onClick={() => void loadRepositories()}
          className='mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 text-sm font-semibold text-blue-200 transition hover:border-blue-300/60 hover:bg-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
        >
          <RefreshCw size={16} aria-hidden='true' />
          Try again
        </button>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className='flex min-h-64 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] px-6 text-center text-neutral-400'>
        No public projects are available yet.
      </div>
    );
  }

  return <ProjectGrid data={repos} initialCount={6} increment={6} />;
};

export default Work;
