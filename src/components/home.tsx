import { motion } from "framer-motion";
import { Bird, BoomBox, Rocket } from "lucide-react";

const HomeHero = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative"
      id="home"
    >
      <div className="max-w-3xl mx-auto relative">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex text-4xl md:text-6xl font-semibold"
          >
            Hi I&apos;m Peeradon, <br />
            Welcome to my profile
            <span className="animate-waving-hand flex justify-center items-center">
              👋🏻
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: "-100%" }}
            exit={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              type: "spring",
              stiffness: 150,
            }}
            className="space-y-4"
          >
            <span>
              🌱 I&apos;m constantly learning new technologies for Front-End,
              Back-End, DevOps & more
            </span>
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, staggerChildren: 0.5 }}
      >
        <motion.div
          whileInView={{ x: [60, -60, 0, 60], y: [40, -40, 0, 40] }}
          drag
          dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.3, 0, 5],
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute top-[15%] left-8 text-white"
        >
          <Rocket size={80} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, staggerChildren: 0.5 }}
        className="z-50"
      >
        <motion.div
          initial={{ x: -40, y: 20 }}
          whileInView={{ rotate: [0, 0, 20, -20, 0, 0] }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0.3, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="absolute bottom-[15%] right-8 text-white cursor-grab"
        >
          <BoomBox size={80} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        exit={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 1,
          type: "spring",
          stiffness: 150,
        }}
        className="flex flex-row justify-center items-center gap-8 pt-24"
      >
        <div className="animate-waving-hand text-white r">
          <Bird size={80} />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
