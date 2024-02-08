import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
            <a href="/"><img src="/logo.svg" alt="Logo" className="h-10 w-30" /></a>
          </div>
          <div className="flex items-center">
            <a href="/alternance" className="mr-4">Alternance</a>
            <a href="/portfolio" className="mr-4">Portfolio</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
        <div className="mt-32">
          {children}
        </div>
        <footer>
          <p>© 2021 Tristan GAUTIER</p>
        </footer>
      </body>
    </html>
  );
}
