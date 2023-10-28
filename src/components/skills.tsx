import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  const data = [
    {
      link: "https://aws.amazon.com/amplify/",
      src: "https://docs.amplify.aws/assets/logo-dark.svg",
      alt: "amplify",
    },
    {
      link: "https://getbootstrap.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      alt: "bootstrap",
    },
    {
      link: "https://www.w3schools.com/css/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt: "css3",
    },
    {
      link: "https://www.docker.com/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      alt: "docker",
    },
    {
      link: "https://expressjs.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      alt: "express",
    },
    {
      link: "https://www.figma.com/",
      src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      alt: "figma",
    },
    {
      link: "https://firebase.google.com/",
      src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      alt: "firebase",
    },
    {
      link: "https://git-scm.com/",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt: "git",
    },
    {
      link: "https://graphql.org",
      src: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      alt: "graphql",
    },
    {
      link: "https://www.w3.org/html/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html5",
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "javascript",
    },
    {
      link: "https://www.mongodb.com/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "mongodb",
    },
    {
      link: "https://www.microsoft.com/en-us/sql-server",
      src: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",
      alt: "mssql",
    },
    {
      link: "https://nextjs.org/",
      src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      alt: "nextjs",
    },
    {
      link: "https://nodejs.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "nodejs",
    },
    {
      link: "https://www.php.net",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      alt: "php",
    },

    {
      link: "https://www.postgresql.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      alt: "postgresql",
    },

    {
      link: "https://www.python.org",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      alt: "python",
    },
    {
      link: "https://reactjs.org/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
    },
    {
      link: "https://sass-lang.com",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      alt: "sass",
    },
    {
      link: "https://tailwindcss.com/",
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      alt: "tailwind",
    },
    {
      link: "https://www.typescriptlang.org/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      alt: "typescript",
    },
    {
      link: "https://vuejs.org/",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
      alt: "vuejs",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center pb-6" id="skills">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-x-0 gap-y-6 justify-center items-center w-full">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{opacity:0}}
            whileInView={{ opacity: 1 }}
            animate={{ d: item.alt, rotate: [0, 0, 270, 270, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.6, 1],
              repeat: Infinity,
              repeatDelay: idx + 0.3,
            }}
            layoutId={item.alt}
            className="flex justify-center items-center "
          >
            <Image
              src={item.src}
              width={80}
              height={80}
              alt={item.alt}
              style={{ objectFit: "inherit" }}
              className="!w-[80px] !h-[80px] bg-neutral-100 hover:animate-spin transition-all duration-500 ease-in-out rounded-full p-1"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
