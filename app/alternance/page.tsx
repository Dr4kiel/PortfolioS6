import Image from "next/image";
import Link from "next/link";

export default function Alternance() {
    return (
        <main className="relative">
            <div id="title" className="h-screen flex justify-center flex-col">
                <h1 className="title text-center font-bold text-white">Alternance</h1>
                <div className="bg-white mx-auto text-center rounded w-2/3">
                    Work In Progress
                </div>
            </div>
            <div className="grid w-full">
                <div className=" grid md:grid-cols-3">
                    <div className="bg-white h-screen flex flex-col justify-center">
                        <h1 className="font-bold text-3xl ml-16 mb-10">C'est quoi GYS ?</h1>
                        <div className="container px-5">
                            <p className="text-justify">
                                GYS est une entreprise spécialisée dans la fabrication de chargeurs de batterie et de postes à souder.
                                Elle est située à Laval, en Mayenne. Elle a été créée en 1964 par Guy-Yves Stéphany. Elle est aujourd'hui dirigée
                                par la famille Bouygues et emploie plus de 500 personnes.
                                GYS est une entreprise qui a su se développer à l'international. Elle distribue ses produits dans 132 pays
                                et possède des filiales en Allemagne, en Chine, en Italie, en Espagne et en Angleterre.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-center">
                        <div className="container m-auto rounded bg-white p-3 size-fit">
                            <Image src="/images/gys-batiment.jpg" alt="GYS" width={800} height={600} className="w-[100vh] h-[40vh] rounded" />
                        </div>
                    </div>
                </div>
                <div className="grid col-span-3 bg-black py-0.5"></div>
                <div className="grid md:grid-cols-3 h-screen">
                    <div className="col-span-3 bg-white flex flex-col">
                        <div className="flex flex-col my-2">
                            <h1 className="font-bold text-3xl text-white bg-black/70 size-fit self-center p-2 rounded-full">Technologies Apprises</h1>
                        </div>
                        <div className="grid w-full h-full bg-blue-400">
                            <div className="grid grid-cols-3">
                                <div className="flex flex-col justify-center text-center">1</div>
                                <div className="flex flex-col justify-center text-center">2</div>
                                <div className="flex flex-col justify-center text-center">3</div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="flex flex-col justify-center text-center">4</div>
                                <div className="flex flex-col justify-center text-center">5</div>
                                <div className="flex flex-col justify-center text-center">6</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}