'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Code2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HomeHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id='home'
      className='relative flex min-h-screen scroll-mt-24 items-center py-28 sm:py-32'
    >
      <div className='pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[110px]' />
      <div className='grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20'>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-200'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-400' />
            </span>
            Open to new opportunities
          </div>

          <p className='mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300'>
            Full-stack Developer
          </p>
          <h1 className='mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl xl:text-7xl'>
            I build dependable digital experiences{' '}
            <span className='bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent'>
              from front to back.
            </span>
          </h1>
          <p className='mt-6 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8'>
            Hi, I&apos;m Peeradon Chairattanakumrod (Nukrob) — a developer focused on practical web products, clean interfaces, reliable APIs, and the infrastructure that keeps them running.
          </p>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
            <Link
              href='/#works'
              className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 font-semibold text-white shadow-xl shadow-blue-950/30 transition hover:from-blue-500 hover:to-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
            >
              View my work <ArrowDownRight size={18} aria-hidden='true' />
            </Link>
            <Link
              href='/#contact'
              className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 font-semibold text-white transition hover:border-blue-400/40 hover:bg-blue-500/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
            >
              Let&apos;s talk <ArrowUpRight size={18} aria-hidden='true' />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          whileHover={reduceMotion ? undefined : { y: -6, rotateX: 1, rotateY: -1.5 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className='relative mx-auto w-full max-w-sm lg:max-w-md'
          style={{ transformPerspective: 1000 }}
        >
          <div className='absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/20 blur-2xl' />
          <div className='absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-violet-400/15 bg-gradient-to-br from-blue-500/10 to-violet-500/10' />
          <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-black/40 backdrop-blur-sm'>
            <div className='relative aspect-square overflow-hidden rounded-[1.4rem]'>
              <Image
                src='/profile-hero-v2.png'
                alt='Peeradon Chairattanakumrod (Nukrob), Full-stack Developer'
                fill
                priority
                sizes='(max-width: 1024px) 384px, 448px'
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent' />
            </div>
            <div className='absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4'>
              <div className='min-w-0'>
                <p className='max-w-[15rem] text-base font-semibold leading-tight text-white sm:text-lg'>
                  Peeradon Chairattanakumrod (Nukrob)
                </p>
                <p className='mt-1 text-sm text-neutral-300'>Full-stack Developer</p>
              </div>
              <Link
                href='https://github.com/nukrobzero'
                target='_blank'
                rel='noreferrer'
                className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-white backdrop-blur transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
                aria-label='GitHub profile (opens in a new tab)'
              >
                <Code2 size={20} aria-hidden='true' />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
