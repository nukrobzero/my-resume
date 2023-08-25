const HomeHero = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      id="home"
    >
      <div className="max-w-3xl mx-auto relative">
        <div className="space-y-6">
          <h1 className="flex text-4xl md:text-6xl font-semibold">
            Hi I&apos;m Peeradon, <br />
            Welcome to my profile
            <span className="animate-waving-hand flex justify-center items-center">👋🏻</span>
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
