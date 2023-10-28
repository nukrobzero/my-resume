import "src/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import { Providers } from "@/lib/providers";
import StarBackground from "@/components/starBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Resume",
  description: "Generated by Nukrobzero",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black`}>
        {/* <StarBackground /> */}
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
