'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, Server, Wrench } from 'lucide-react';
import Link from 'next/link';

const skillGroups = [
  {
    title: 'Frontend',
    description: 'Accessible, responsive interfaces and modern web experiences.',
    icon: Code2,
    skills: [
      ['HTML5', 'https://www.w3.org/html/'],
      ['CSS3', 'https://www.w3schools.com/css/'],
      ['JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
      ['TypeScript', 'https://www.typescriptlang.org/'],
      ['React', 'https://react.dev/'],
      ['Next.js', 'https://nextjs.org/'],
      ['Angular', 'https://angular.dev/'],
      ['Vue.js', 'https://vuejs.org/'],
      ['Tailwind CSS', 'https://tailwindcss.com/'],
      ['Bootstrap', 'https://getbootstrap.com/'],
      ['Sass', 'https://sass-lang.com/'],
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, services, and application logic built for maintainability.',
    icon: Server,
    skills: [
      ['Node.js', 'https://nodejs.org/'],
      ['Express', 'https://expressjs.com/'],
      ['GraphQL', 'https://graphql.org/'],
      ['PHP', 'https://www.php.net/'],
      ['Python', 'https://www.python.org/'],
      ['Java', 'https://dev.java/'],
      ['Spring Boot', 'https://spring.io/projects/spring-boot'],
    ],
  },
  {
    title: 'Data & Cloud',
    description: 'Data stores and cloud services that support real products.',
    icon: Database,
    skills: [
      ['PostgreSQL', 'https://www.postgresql.org/'],
      ['MongoDB', 'https://www.mongodb.com/'],
      ['Microsoft SQL Server', 'https://www.microsoft.com/sql-server'],
      ['MySQL', 'https://www.mysql.com/'],
      ['Firebase', 'https://firebase.google.com/'],
      ['AWS Amplify', 'https://aws.amazon.com/amplify/'],
    ],
  },
  {
    title: 'Tools & Workflow',
    description: 'The tooling I use to design, ship, and collaborate effectively.',
    icon: Wrench,
    skills: [
      ['Git', 'https://git-scm.com/'],
      ['Docker', 'https://www.docker.com/'],
      ['Figma', 'https://www.figma.com/'],
    ],
  },
] as const;

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className='grid gap-5 md:grid-cols-2'>
      {skillGroups.map((group, index) => {
        const Icon = group.icon;

        return (
          <motion.article
            key={group.title}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className='rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-7'
          >
            <div className='flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300'>
              <Icon size={22} aria-hidden='true' />
            </div>
            <h3 className='mt-5 text-xl font-semibold text-white'>{group.title}</h3>
            <p className='mt-2 text-sm leading-6 text-neutral-400'>{group.description}</p>
            <div className='mt-6 flex flex-wrap gap-2'>
              {group.skills.map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-neutral-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400'
                >
                  {name}
                  <span className='sr-only'> (opens in a new tab)</span>
                </Link>
              ))}
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};

export default Skills;
