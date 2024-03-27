import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col">
			<div id="title" className="h-screen flex items-center justify-around">
				<h1 className="title rounded-full bg-black/70 p-5">Tristan GAUTIER</h1>
			</div>
			<div id="initial-presentation" className="flex-dynamic justify-around items-center px-5 py-2 bg-white h-screen">
				<div className="m-10 w-4/6">
					<h1 className="text-lg font-bold">Présentation</h1>
					<div className="text-pretty flex flex-col">
						<p>
							Je m'appelle Tristan GAUTIER, je suis actuellement alternant en 3ème
							année de BUT Informatique.
						</p>
						<p>
							Je suis jeune et passionné par l'informatique depuis plusieurs années : mes principales qualités sont la rigueur, le travail d'équipe,
							la curiosité et la persévérance.
						</p>
						<p>
							Mon objectif est de devenir développeur fullstack, et je suis actuellement à la recherche d'une alternance pour la rentrée 2024 dans
							l'optique de passer un diplôme Master (Bac+5).
						</p>
					</div>
				</div>
				<div className="flex flex-col relative w-[30vh] h-[40vh]">
					<Image
						src="/images/photo-profil.webp"
						alt="Picture of the author"
						className="rounded-full border-4 border-gray-900 shadow-lg bg-gray-100"
						width={400}
						height={200}
					/>
				</div>
			</div>
			<div id="alternance-GYS" className="flex flex-col bg-slate-100 py-10 px-5 h-screen justify-around">
				<div className="flex-dynamic-reversed items-center justify-around">
					<div className="flex flex-col relative w-[30vh] h-[30vh] m-2">
						<Image
							src="/images/logo-gys.png"
							alt="Logo GYS"
							className="border-1 bg-slate-500 p-1 my-2 size-fit rounded"
							fill={true}
						/>
					</div>
					<div className="flex flex-col w-4/6">
						<div className="justify-center flex flex-col">
							<h2 className="text-lg font-bold">Alternance GYS</h2>
							<p>
								En alternance chez GYS, j'ai pu travailler sur plusieurs projets de développement de solutions logicielles tels
								que des modules pour des solutions robotiques ayant pour but de réaliser de la sidérurgie ou encore un logiciel de
								sniffer de bus CAN.
								L'essentiel de mes projets ont été réalisés en Java et en C++ avec l'utilisation de la librairie Qt.
							</p></div>
					</div>
				</div>
				<div className="font-bold text-lg flex place-content-end justify-end">
					<Link href="/alternance" className="link">Alternance ➜</Link>
				</div>
			</div>
			<div id="portfolio" className="flex-dynamic-reversed justify-around px-5 py-2 bg-slate-200 h-screen">
				<div className="text-pretty flex flex-col justify-center">
					<h1 className="text-lg font-bold">Portfolio</h1>
					<p>Dans cette partie, vous pourrez retrouver mes différents projets, ainsi que le résumé de mes compétences acquises au cours de mes études.</p>
					<p>J'ai séparé chacune de mes années afin d'observer l'évolution de mes compétences.</p>
				</div>
				<div className="flex flex-col justify-center">
					<h2 className="font-bold text-center mb-2">Compétences</h2>
					<div className="flex flex-col">
						<div className="flex justify-center">
							<Link href="/portfolio/but2">
								<div id="but2" className="border-2 border-black rounded-full size-40 mx-2 flex justify-center flex-wrap content-center text-xl round-button">BUT2</div>
							</Link>
							<Link href="/portfolio/but3">
								<div id="but3" className="border-2 border-black rounded-full size-40 mx-2 flex justify-center flex-wrap content-center text-xl round-button">BUT3</div>
							</Link>
						</div>
						<Link href="/portfolio/projets" className="justify-center flex">
							<div id="projets" className="border-2 border-black rounded-full size-40 m-2 flex justify-center flex-wrap content-center text-xl round-button">Projets</div>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
