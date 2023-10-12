"use client";

import { FC, ReactNode } from "react";
import NavBar from "./navBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row min-h-screen text-neutral-100">
        <NavBar />
        <div className="container lg:w-[70%] mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
