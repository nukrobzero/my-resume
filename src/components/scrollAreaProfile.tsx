"use client";
import Image from "next/image";
import Link from "next/link";

const ScrollAreaProfile = () => {
  return (
    <div className="p-4">
      <div className="py-6">
        <Image
          src={`/blank-profile-picture-973460_1280.webp`}
          width={280}
          height={280}
          alt="img-profile"
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div className="py-6 text-center">
        <h1 className="text-xl font-semibold">eiei</h1>
      </div>
      <div className="flex justify-center items-center py-8">
        <ul className="flex flex-col justify-center items-start space-y-4 uppercase font-semibold">
          <li>
            <Link href={`/#home`}>Home</Link>
          </li>
          <li>
            <Link href={`/#skills`}>Skills</Link>
          </li>
          <li>
            <Link href={`/#experience`}>Experience</Link>
          </li>
          <li>
            <Link href={`/#works`}>Works</Link>
          </li>
          <li>
            <Link href={`/#contact`}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollAreaProfile;
