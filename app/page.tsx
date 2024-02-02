import Image from "next/image";

export default function Home() {
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
				<div className="m-5 w-4/6">
					<h1 className="text-lg font-bold">WIP Portfolio</h1>
					<p className="text-pretty">
						Je m'appelle Tristan GAUTIER, je suis actuellement alternant en 3ème
						année de BUT Informatique.<br />L'entreprise pour laquelle je travaille
						s'appelle GYS : c'est une entreprise de production d'appareil de
						soudure. Vous pourrez retrouver plus d'informations quant à mon
						alternance dans la section{" "}
						<a href="/alternance" className="italic text-cyan-800">
							Alternance
						</a>
						.
					</p>
				</div>
				<Image
					src="/images/photo_profil.webp"
					alt="Picture of the author"
					className="rounded-full border-4 border-gray-900 shadow-lg bg-gray-100 p-2 w-2/6"
					width={500}
					height={500}
				/>
			</div>
		</main>
	);
}
