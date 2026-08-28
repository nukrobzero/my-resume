import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peeradon Chairattanakumrod (Nukrob) | Full-stack Developer",
  description:
    "Portfolio of Peeradon Chairattanakumrod (Nukrob), a Full-stack Developer building modern web applications from frontend to backend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <NavBar />
        <main className="relative min-h-screen overflow-hidden">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
