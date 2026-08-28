'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';

const workHistory = [
  {
    company: 'SCB (Outsource)',
    role: 'Full-stack Developer',
    period: 'March 2024 — Present',
    description: 'Develop and maintain web applications across frontend and backend systems.',
  },
  {
    company: 'Sumipol Corporation Limited',
    role: 'Web Programmer',
    period: 'December 2022 — February 2024',
    description: 'Developed and maintained websites, APIs, SEO, WordPress integrations, and analytics implementations.',
  },
  {
    company: 'Nichetel Communications',
    role: 'System Engineer',
    period: 'January 2021 — November 2022',
    description: 'Worked with fax server solutions and enterprise content management systems.',
  },
  {
    company: 'Thai Airways International — MC Technician Department',
    role: 'Assistant Engineer Intern',
    period: 'April 2018 — June 2018',
    description: 'Supported In-flight Entertainment systems and special Airbus A380 C-check operations at Suvarnabhumi Airport.',
  },
];

const education = [
  {
    school: 'Mahanakorn University of Technology',
    period: 'Graduated 2020',
    detail: 'Bachelor of Engineering in Computer Engineering',
  },
  {
    school: 'Chiang Klang Pracha Pattana School',
    period: 'Graduated 2014',
    detail: 'High School',
  },
];

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className='grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12'>
      <div>
        <div className='mb-7 flex items-center gap-3'>
          <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300'>
            <BriefcaseBusiness size={20} aria-hidden='true' />
          </span>
          <h3 className='text-xl font-semibold text-white'>Professional experience</h3>
        </div>

        <ol className='relative ml-4 border-l border-white/10'>
          {workHistory.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className='relative pb-6 pl-8 last:pb-0'
            >
              <span className='absolute -left-[5px] top-7 h-2.5 w-2.5 rounded-full border-2 border-[#080b12] bg-blue-400 ring-4 ring-blue-400/10' />
              <article className='rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-blue-400/25 hover:bg-white/[0.06] sm:p-6'>
                <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                  <div>
                    <h4 className='font-semibold text-white'>{item.role}</h4>
                    <p className='mt-1 text-sm text-blue-300'>{item.company}</p>
                  </div>
                  <span className='shrink-0 text-xs font-medium text-neutral-500'>{item.period}</span>
                </div>
                <p className='mt-4 text-sm leading-6 text-neutral-400'>{item.description}</p>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>

      <div>
        <div className='mb-7 flex items-center gap-3'>
          <span className='flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300'>
            <GraduationCap size={21} aria-hidden='true' />
          </span>
          <h3 className='text-xl font-semibold text-white'>Education</h3>
        </div>
        <div className='space-y-4'>
          {education.map((item, index) => (
            <motion.article
              key={item.school}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className='rounded-3xl border border-white/10 bg-white/[0.04] p-6'
            >
              <p className='text-xs font-medium uppercase tracking-wider text-violet-300'>{item.period}</p>
              <h4 className='mt-3 font-semibold leading-6 text-white'>{item.school}</h4>
              <p className='mt-2 text-sm leading-6 text-neutral-400'>{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
