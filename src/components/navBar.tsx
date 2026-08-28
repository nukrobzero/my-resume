'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Code2, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Works', href: '/#works' },
];

const NavBar = () => (
  <header className='fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6'>
    <nav
      aria-label='Main navigation'
      className='mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5 md:grid md:grid-cols-[1fr_auto_1fr]'
    >
      <Link
        href='/#home'
        className='group inline-flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 md:justify-self-start'
        aria-label='Peeradon Chairattanakumrod (Nukrob) home'
      >
        <Image
          src='/samoyed-logo-v2.png'
          alt=''
          width={36}
          height={36}
          priority
          className='h-9 w-9 shrink-0 object-contain drop-shadow-[0_4px_10px_rgba(59,130,246,0.35)]'
        />
        <span className='hidden whitespace-nowrap text-sm font-semibold tracking-wide text-white sm:block xl:hidden'>
          Peeradon
        </span>
        <span className='hidden whitespace-nowrap text-sm font-semibold tracking-wide text-white xl:block'>
          Peeradon Chairattanakumrod (Nukrob)
        </span>
      </Link>

      <div className='hidden items-center gap-1 md:flex'>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='rounded-lg px-3 py-2 text-sm font-medium text-neutral-400 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className='hidden items-center gap-2 md:flex md:justify-self-end'>
        <Link
          href='https://github.com/nukrobzero'
          target='_blank'
          rel='noreferrer'
          className='flex h-10 w-10 items-center justify-center rounded-xl text-neutral-400 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
          aria-label='GitHub profile (opens in a new tab)'
        >
          <Code2 size={19} aria-hidden='true' />
        </Link>
        <Link
          href='/#contact'
          className='inline-flex min-h-10 items-center rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
        >
          Let&apos;s talk
        </Link>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='text-white hover:bg-white/10 hover:text-white md:hidden'
            aria-label='Open navigation menu'
          >
            <Menu size={22} aria-hidden='true' />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='border-white/10 bg-[#080b12] text-white sm:max-w-xs'
        >
          <SheetTitle className='text-left text-white'>Navigation</SheetTitle>
          <div className='mt-10 flex flex-col gap-2'>
            {navigation.map((item) => (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className='rounded-xl px-4 py-3 text-base font-medium text-neutral-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Link
                href='/#contact'
                className='mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-5 font-semibold text-white hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
              >
                Let&apos;s talk
              </Link>
            </SheetClose>
            <Link
              href='https://github.com/nukrobzero'
              target='_blank'
              rel='noreferrer'
              className='mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 text-sm font-medium text-neutral-300 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
            >
              <Code2 size={18} aria-hidden='true' /> GitHub
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  </header>
);

export default NavBar;
