import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WIP Portfolio",
  description: "Work in progress :> ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-dragon-img bg-no-repeat bg-cover min-h-screen h-lvh bg-fixed">
      <body className={`${inter.className} antialiased`}>
        <nav id="toolbar" className="flex items-center justify-between px-5 py-2 bg-gray-900 text-white nav-sticked">
          <div className="flex justify-items-start">
            <Link href="/" className="relative w-[10vh] h-[4vh]"><Image src="/logo.svg" alt="Logo" className="h-10 w-30" layout="fill" /></Link>
          </div>
          <div className="flex items-center">
            <Link href="/alternance" className="mr-4">Alternance</Link>
            <Link href="/portfolio" className="mr-4">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <div className="mt-32">
          {children}
        </div>
        <footer>
          <p>© 2024 Tristan GAUTIER</p>
        </footer>
      </body>
    </html>
  );
}
