import { motion } from "framer-motion";
import { Bird, BoomBox, Rocket } from "lucide-react";

const HomeHero = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
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
            initial={{ opacity: 0, x: "100%" }}
            exit={{ opacity: 0, x: "100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              type: "spring",
              stiffness: 150,
            }}
            className="flex flex-col justify-center items-start space-y-4"
          >
            <span>
              🌱 I&apos;m constantly learning new technologies for Front-End,
              Back-End, DevOps & more
            </span>
          </motion.p>
        </div>
      </div>
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
        <div className="animate-bounce text-white">
          <Rocket size={80} />
        </div>
        <div className="animate-pulse text-white">
          <BoomBox size={80} />
        </div>
        <div className="animate-waving-hand text-white r">
          <Bird size={80} />
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;
