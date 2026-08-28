'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Clock3, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClassName =
  'min-h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-base text-white outline-none transition placeholder:text-neutral-600 hover:border-white/20 focus:border-blue-400/70 focus:ring-4 focus:ring-blue-500/10';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const reduceMotion = useReducedMotion();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !tel.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setSubmitStatus('error');
      setErrorMessage('The contact form is not configured yet.');
      return;
    }

    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Resume contact from ${name.trim()}`,
          from_name: 'My Resume Contact Form',
          name: name.trim(),
          email: email.trim(),
          phone: tel.trim(),
          message: message.trim(),
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      setName('');
      setEmail('');
      setTel('');
      setMessage('');
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again.',
      );
    }
  };

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-blue-950/20 backdrop-blur-sm'
    >
      <div className='pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl' />

      <div className='relative grid lg:grid-cols-[0.85fr_1.15fr]'>
        <div className='flex flex-col justify-between border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200'>
              Let&apos;s connect
            </span>
            <h3 className='mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl'>
              Have a project in mind?
            </h3>
            <p className='mt-4 max-w-md leading-7 text-neutral-400'>
              Send me a message about an opportunity, collaboration, or a project you would like to build.
            </p>
          </div>

          <div className='mt-10 space-y-4'>
            <Link
              href='mailto:nukrobzero@hotmail.com'
              className='group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/15 p-4 transition hover:border-blue-400/30 hover:bg-blue-500/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
            >
              <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300'>
                <Mail size={19} aria-hidden='true' />
              </span>
              <span className='min-w-0'>
                <span className='block text-xs text-neutral-500'>Email</span>
                <span className='block truncate text-sm font-medium text-neutral-200 group-hover:text-white'>nukrobzero@hotmail.com</span>
              </span>
            </Link>
            <div className='flex items-center gap-3 px-4 text-sm text-neutral-400'>
              <Clock3 className='text-blue-300' size={18} aria-hidden='true' />
              I usually respond as soon as possible.
            </div>
          </div>
        </div>

        <div className='p-6 sm:p-8 lg:p-10'>
          {submitStatus === 'success' ? (
            <div className='flex min-h-[30rem] flex-col items-center justify-center text-center' role='status'>
              <span className='flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300'>
                <CheckCircle2 size={32} aria-hidden='true' />
              </span>
              <h3 className='mt-6 text-2xl font-semibold text-white'>Message sent</h3>
              <p className='mt-3 max-w-sm leading-7 text-neutral-400'>
                Thanks for reaching out. I&apos;ll get back to you as soon as I can.
              </p>
              <button
                type='button'
                onClick={() => setSubmitStatus('idle')}
                className='mt-8 min-h-11 rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='grid gap-5 sm:grid-cols-2'>
                <div>
                  <label htmlFor='name' className='mb-2 block text-sm font-medium text-neutral-300'>Name <span className='text-blue-300'>*</span></label>
                  <input id='name' name='name' type='text' autoComplete='name' required value={name} onChange={({ target }) => setName(target.value)} placeholder='Your name' className={inputClassName} />
                </div>
                <div>
                  <label htmlFor='email' className='mb-2 block text-sm font-medium text-neutral-300'>Email <span className='text-blue-300'>*</span></label>
                  <input id='email' name='email' type='email' autoComplete='email' required value={email} onChange={({ target }) => setEmail(target.value)} placeholder='you@example.com' className={inputClassName} />
                </div>
              </div>

              <div>
                <label htmlFor='phone' className='mb-2 block text-sm font-medium text-neutral-300'>Phone <span className='text-blue-300'>*</span></label>
                <input id='phone' name='phone' type='tel' inputMode='tel' autoComplete='tel' required value={tel} onChange={({ target }) => setTel(target.value.replace(/[^0-9+\-\s()]/g, ''))} placeholder='081-234-5678' className={inputClassName} />
              </div>

              <div>
                <label htmlFor='message' className='mb-2 block text-sm font-medium text-neutral-300'>Message</label>
                <textarea id='message' name='message' rows={6} value={message} onChange={({ target }) => setMessage(target.value)} placeholder='Tell me about your project or opportunity...' className={`${inputClassName} resize-y py-3`} />
              </div>

              {submitStatus === 'error' && (
                <p role='alert' className='rounded-xl border border-red-400/20 bg-red-400/[0.08] px-4 py-3 text-sm text-red-200'>
                  {errorMessage}
                </p>
              )}

              <button
                type='submit'
                disabled={submitStatus === 'submitting'}
                className='inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:from-blue-500 hover:to-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto'
              >
                <Send size={18} aria-hidden='true' />
                {submitStatus === 'submitting' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
}
