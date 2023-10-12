"use client";

import { FC, ReactNode } from "react";
import NavBar from "./navBar";
import PageWrapper from "./page-wrapper";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row min-h-screen text-neutral-100">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.5 }}
          >
            <NavBar />
          </motion.div>
        </AnimatePresence>
        <div className="container lg:w-[70%] mx-auto">
          <PageWrapper>{children}</PageWrapper>
        </div>
      </div>
    </div>
  );
};

export default Layout;
