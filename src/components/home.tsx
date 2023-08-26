import { Bird, BoomBox, Rocket } from "lucide-react";

const HomeHero = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center relative"
      id="home"
    >
      <div className="flex flex-row justify-center items-center gap-8 absolute bottom-48">
        <div className="animate-bounce text-[#ffffff61] lg:text-white">
          <Rocket size={80} />
        </div>
        <div className="animate-pulse text-[#ffffff61] lg:text-white">
          <BoomBox size={80} />
        </div>
        <div className="animate-waving-hand text-[#ffffff61] lg:text-white r">
          <Bird size={80} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto relative">
        <div className="space-y-6">
          <h1 className="flex text-4xl md:text-6xl font-semibold">
            Hi I&apos;m Peeradon, <br />
            Welcome to my profile
            <span className="animate-waving-hand flex justify-center items-center">
              👋🏻
            </span>
          </h1>
          <p className="flex flex-col justify-center items-start space-y-4">
            <span>
              🌱 I&apos;m constantly learning new technologies for Front-End,
              Back-End, DevOps & more
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
