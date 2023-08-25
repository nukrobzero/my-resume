import Experience from "@/components/experience";
import HomeHero from "@/components/home";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="container mx-auto">
      <HomeHero />
      <div className="h-[200px] flex justify-start items-center" id="skills">
        <h1 className="text-4xl font-semibold uppercase">Skills</h1>
      </div>
      <Skills />
      <div className="h-[200px] flex justify-start items-center" id="experience">
        <h1 className="text-4xl font-semibold uppercase">Experience</h1>
      </div>
      <Experience />
    </main>
  );
}
