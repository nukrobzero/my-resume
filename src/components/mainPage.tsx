"use client";

import ContactSection from "@/components/contact";
import Experience from "@/components/experience";
import HomeHero from "@/components/home";
import Skills from "@/components/skills";
import Work from "@/components/work";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

// export const revalidate = 5;

export default function MainPage() {
  return (
    <>
      <HomeHero />
      <div className="h-[200px] flex justify-start items-center" id="skills">
        <span className="border-b w-full pb-3">
          <h1 className="text-4xl font-semibold uppercase">Skills</h1>
        </span>
      </div>
      <Skills />
      <div
        className="h-[200px] flex justify-start items-center"
        id="experience"
      >
        <span className="border-b w-full pb-3">
          <h1 className="text-4xl font-semibold uppercase">Experience</h1>
        </span>
      </div>
      <Experience />
      <div className="h-[200px] flex justify-start items-center" id="works">
        <span className="border-b w-full pb-3">
          <h1 className="text-4xl font-semibold uppercase">Works</h1>
        </span>
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          animate={{ rotate: [0, 0, 270, 270, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="cursor-grab"
        >
          <Sparkle size={100} color="#f3fa34" />
        </motion.div>
      </div>
      <Work />
      <div className="h-[200px] flex justify-start items-center" id="contact">
        <span className="border-b w-full pb-3">
          <h1 className="text-4xl font-semibold uppercase">Contact</h1>
        </span>
      </div>
      <ContactSection />
    </>
  );
}
