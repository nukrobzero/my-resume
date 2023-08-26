"use client";
import Image from "next/image";
import Link from "next/link";

const ScrollAreaProfile = () => {
  return (
    <div className="p-4">
      <div className="py-6 overflow-hidden">
        <Image
          src={`https://drive.google.com/uc?id=1QH5gU4n_g3g9KQV9EyyytACO-B7uC9Bk`}
          width={280}
          height={280}
          alt="img-profile"
          style={{ objectFit: "cover", }}
          className="rounded-full border-double border-4 border-blue-500 p-2 hover:scale-150 transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="py-6 text-center">
        <h1 className="text-xl font-semibold uppercase">Peeradon (Nukrob)</h1>
      </div>
      <div className="flex justify-center items-center py-8">
        <ul className="flex flex-col justify-center items-start space-y-4 uppercase font-semibold">
          <li className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500">
            <Link href={`/#home`}>Home</Link>
          </li>
          <li className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500">
            <Link href={`/#skills`}>Skills</Link>
          </li>
          <li className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500">
            <Link href={`/#experience`}>Experience</Link>
          </li>
          <li className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500">
            <Link href={`/#works`}>Works</Link>
          </li>
          <li className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500">
            <Link href={`/#contact`}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScrollAreaProfile;
