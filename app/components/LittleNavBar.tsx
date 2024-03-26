'use client'
import Link from "next/link";
import Image from "next/image";

export default function LittleNavBar(_props: any) {
    return (
        <nav id="little-nav" className="flex items-center justify-between px-5 py-2 bg-gray-900 text-white little-nav">
            <div className="flex justify-between">
                <div className="flex justify-items-start">
                    <Link href="/" className="relative w-[10vh] h-[4vh]"><Image src="/logo.svg" alt="Logo" className="h-10 w-30" layout="fill" /></Link>
                </div>
                <div>
                    <button id="little-nav-btn" className="flex items-center justify-center" onClick={() => {
                        document.getElementById("little-nav-items")?.classList.toggle("hidden");
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="little-nav-items" className="items-center hidden">
                <div className="flex flex-col items-end">
                    <Link href="/alternance" className="m-2">Alternance</Link>
                    <Link href="/portfolio" className="m-2">Portfolio</Link>
                    <Link href="/contact" className="m-2">Contact</Link>
                </div>
            </div>
        </nav>
    );
}