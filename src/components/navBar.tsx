"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft, Dot } from "lucide-react";
import ScrollAreaProfile from "./scrollAreaProfile";

const NavBar = () => {
  return (
    <nav className="w-64 z-50">
      {/* Desktop */}
      <div className="hidden lg:block fixed top-44 w-64 rounded-t-full bg-white text-black">
        <div className="w-0 h-0 border-t-[60px] border-t-transparent border-r-[75px] border-r-blue-500 border-b-[50px] border-b-transparent"></div>
        <div className="w-0 h-0 absolute -rotate-[32deg] -right-0 top-2 border-l-[75px] border-r-transparent border-r-[50px] border-b-blue-500 border-b-[75px] border-l-transparent"></div>
        <div className="w-0 h-0 absolute -left-48 top-[21rem] border-t-[200px] border-t-transparent border-r-[200px] border-r-white border-b-[5px] border-b-transparent"></div>
        <div className="w-0 h-0 absolute -right-[12rem] top-[21rem] border-l-[200px] border-t-transparent border-t-[200px] border-l-white"></div>
        <div className="absolute -left-48 top-[32.5rem] bg-red-600 rounded-full animate-ping">
          <Dot color="red" />
        </div>
        <div className="absolute -right-48 top-[32.5rem] bg-red-600 rounded-full animate-ping">
          <Dot color="red" />
        </div>
        <ScrollAreaProfile />
        <div className="w-0 h-0 flex flex-row">
          <div className="w-0 h-0 border-l-[43px] border-l-transparent border-t-[75px] border-t-red-500 border-r-[43px] border-r-transparent"></div>
          <div className="w-0 h-0 border-l-[43px] border-l-transparent border-t-[75px] border-t-red-500 border-r-[43px] border-r-transparent"></div>
          <div className="w-0 h-0 border-l-[43px] border-l-transparent border-t-[75px] border-t-red-500 border-r-[43px] border-r-transparent"></div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex justify-center items-center lg:hidden fixed top-20 bg-white w-16 h-14  rounded-r-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <AlignLeft color="#000000" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <div className="p-4">
              <div className="py-6">
                <Image
                  src={`/_nukrob.rob-11092022-0001.jpg`}
                  width={280}
                  height={280}
                  alt="img-profile"
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <div className="py-6 text-center">
                <h1 className="text-xl font-semibold uppercase">
                  Peeradon (Nukrob)
                </h1>
              </div>
              <div className="flex justify-center items-center py-8">
                <ul className="flex flex-col justify-center items-start space-y-4 uppercase font-semibold">
                  <li>
                    <SheetTrigger asChild>
                      <Link
                        href={`/#home`}
                        className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500"
                      >
                        Home
                      </Link>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <Link
                        href={`/#skills`}
                        className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500"
                      >
                        Skills
                      </Link>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <Link
                        href={`/#experience`}
                        className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500"
                      >
                        Experience
                      </Link>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <Link
                        href={`/#works`}
                        className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500"
                      >
                        Works
                      </Link>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <Link
                        href={`/#contact`}
                        className="font-bold bg-gradient-to-r from-[#0083CA] to-[#0083CA] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_3px] transition-all duration-500"
                      >
                        Contact
                      </Link>
                    </SheetTrigger>
                  </li>
                </ul>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
