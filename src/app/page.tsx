import ContactSection from "@/components/contact";
import Experience from "@/components/experience";
import HomeHero from "@/components/home";
import Skills from "@/components/skills";
import Work from "@/components/work";
import { Sparkle } from "lucide-react";

export const revalidate = 5;

export default function Home() {
  return (
    <main>
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
        <div className="animate-spin">
          <Sparkle size={100} color="#f3fa34" />
        </div>
      </div>
      <Work />
      <div
        className="h-[200px] flex justify-start items-center"
        id="contact"
      >
        <span className="border-b w-full pb-3">
          <h1 className="text-4xl font-semibold uppercase">Contact</h1>
        </span>
      </div>
      <ContactSection />
    </main>
  );
}
