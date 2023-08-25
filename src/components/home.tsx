import Link from "next/link";

const HomeHero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center" id="home">
     <div className="max-w-3xl mx-auto">
     <div className="space-y-6">
        <h1 className="text-6xl font-semibold">
          Hi I'm Peeradon, <br />
          Welcome to my profile 👋
        </h1>
        <p className="flex flex-col justify-center items-start space-y-4">
          <span>
            🙋 สวัสดีครับ ผม พีระดนย์ ชัยรัตนคำโรจน์ หรือนักรบ
            เป็นคนที่ชอบและหลงไหลในการเขียนโปรแกรม
          </span>
          <span>
            🌱 I’m constantly learning new technologies for Front-End, Back-End,
            DevOps & more
          </span>
        </p>
      </div>
     </div>
    </div>
  );
};

export default HomeHero;
