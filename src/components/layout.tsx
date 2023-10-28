"use client";

import { FC, ReactNode } from "react";
import NavBar from "./navBar";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="grid lg:grid-cols-8 min-h-screen text-neutral-100">
        <div className="z-50 col-span-2">
          <NavBar />
        </div>
        <div className="container mx-auto col-span-6">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
