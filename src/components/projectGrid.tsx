'use client';

import { dateFormat } from '@/lib/dateFormat';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Code2, GitFork, Plus, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface ProjectGridProps {
  data: GitHubRepository[];
  initialCount: number;
  increment: number;
}

const ProjectGrid = ({ data, initialCount, increment }: ProjectGridProps) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const reduceMotion = useReducedMotion();
  const visibleProjects = data.slice(0, visibleCount);
  const hasMore = visibleCount < data.length;

  return (
    <div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
        {visibleProjects.map((repo, index) => (
          <motion.article
            key={repo.id}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: (index % increment) * 0.05 }}
            className='group relative flex min-h-64 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07] motion-reduce:transform-none'
          >
            <div className='absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 transition group-hover:opacity-100' />
            <div className='mb-5 flex items-center justify-between'>
              <span className='flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300'>
                <Code2 size={22} aria-hidden='true' />
              </span>
              <ArrowUpRight
                className='text-neutral-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300 motion-reduce:transform-none'
                size={20}
                aria-hidden='true'
              />
            </div>

            <h3 className='break-words text-lg font-semibold text-white'>
              <Link
                href={repo.html_url}
                target='_blank'
                rel='noreferrer'
                className='outline-none after:absolute after:inset-0 focus-visible:after:rounded-3xl focus-visible:after:ring-2 focus-visible:after:ring-blue-400'
              >
                {repo.name}
                <span className='sr-only'> (opens in a new tab)</span>
              </Link>
            </h3>
            <p className='mt-3 line-clamp-3 flex-1 text-sm leading-6 text-neutral-400'>
              {repo.description || 'A public GitHub project by Nukrobzero.'}
            </p>

            <div className='mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 text-xs text-neutral-400'>
              {repo.language && (
                <span className='inline-flex items-center gap-2 rounded-full bg-blue-400/10 px-2.5 py-1 text-blue-200'>
                  <span className='h-1.5 w-1.5 rounded-full bg-blue-400' />
                  {repo.language}
                </span>
              )}
              <span className='inline-flex items-center gap-1.5'>
                <Star size={14} aria-hidden='true' /> {repo.stargazers_count}
              </span>
              <span className='inline-flex items-center gap-1.5'>
                <GitFork size={14} aria-hidden='true' /> {repo.forks_count}
              </span>
              <span className='ml-auto'>Updated {dateFormat(repo.updated_at)}</span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className='mt-10 flex flex-col items-center gap-4'>
        <p className='text-sm text-neutral-500' aria-live='polite'>
          Showing {visibleProjects.length} of {data.length} projects
        </p>
        {hasMore && (
          <button
            type='button'
            onClick={() => setVisibleCount((count) => Math.min(count + increment, data.length))}
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 text-sm font-semibold text-blue-100 transition hover:border-blue-300/50 hover:bg-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
          >
            <Plus size={18} aria-hidden='true' />
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;
