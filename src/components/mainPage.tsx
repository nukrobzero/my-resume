"use client";

import ContactSection from "@/components/contact";
import Experience from "@/components/experience";
import HomeHero from "@/components/home";
import Skills from "@/components/skills";
import Work from "@/components/work";

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => (
  <div className="mb-8 sm:mb-10">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
      {eyebrow}
    </p>
    <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-xl text-sm leading-6 text-neutral-400 sm:text-right">
        {description}
      </p>
    </div>
    <div className="mt-6 h-px bg-gradient-to-r from-blue-400/70 via-white/10 to-transparent" />
  </div>
);

export default function MainPage() {
  return (
    <>
      <HomeHero />
      <section id="skills" className="scroll-mt-20 py-20 sm:py-24">
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills"
          description="Technologies and tools I use to take ideas from interface design to reliable production systems."
        />
        <Skills />
      </section>
      <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
        <SectionHeader
          eyebrow="Career journey"
          title="Experience"
          description="A track record across full-stack development, web programming, systems engineering, and technical operations."
        />
        <Experience />
      </section>
      <section id="works" className="scroll-mt-20 py-20 sm:py-24">
        <SectionHeader
          eyebrow="Selected repositories"
          title="Works"
          description="A selection of public projects, experiments, and tools from my GitHub profile."
        />
        <Work />
      </section>
      <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
        <SectionHeader
          eyebrow="Get in touch"
          title="Contact"
          description="Have an opportunity or an idea worth building? Send the details and I’ll get back to you."
        />
        <ContactSection />
      </section>
    </>
  );
}
