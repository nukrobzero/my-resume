import { Code2, Mail } from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { label: 'Home', href: '/#home' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Works', href: '/#works' },
  { label: 'Contact', href: '/#contact' },
];

const Footer = () => (
  <footer className='border-t border-white/10 bg-black/20'>
    <div className='mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between'>
      <div>
        <Link href='/#home' className='text-base font-semibold text-white'>Peeradon Chairattanakumrod (Nukrob)</Link>
        <p className='mt-2 text-sm text-neutral-500'>Full-stack Developer · © {new Date().getFullYear()}</p>
      </div>
      <nav aria-label='Footer navigation' className='flex flex-wrap gap-x-5 gap-y-3'>
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className='text-sm text-neutral-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className='flex items-center gap-2'>
        <Link href='https://github.com/nukrobzero' target='_blank' rel='noreferrer' aria-label='GitHub profile (opens in a new tab)' className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neutral-400 transition hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'>
          <Code2 size={18} aria-hidden='true' />
        </Link>
        <Link href='mailto:nukrobzero@hotmail.com' aria-label='Email Peeradon Chairattanakumrod (Nukrob)' className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neutral-400 transition hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'>
          <Mail size={18} aria-hidden='true' />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
