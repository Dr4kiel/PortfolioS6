import Image from "next/image";

export default function Alternance() {
    return (
        <main className="bg-dragon-img bg-no-repeat bg-cover min-h-screen h-lvh bg-fixed">
            <div id="toolbar" className="flex items-center justify-between px-5 py-2 bg-gray-900 text-white sticky">
                <div className="flex justify-items-start">
                    <a href="/"><img src="/logo.svg" alt="Logo" className="h-10 w-30" /></a>
                </div>
                <div className="flex items-center">
                    <a href="/alternance" className="mr-4">Alternance</a>
                    <a href="/portfolio" className="mr-4">Portfolio</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <div id="content" className="flex items-center px-5 py-2 bg-slate-400/75 rounded m-5">
                Work in Progress ...
            </div>
        </main>
    )
}