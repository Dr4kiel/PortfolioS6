import Image from "next/image";
import Link from "next/link";

export default function Alternance() {
    return (
        <main className="relative">
            <div id="title" className="h-screen flex justify-center flex-col">
                <h1 className="title text-center font-bold text-white">Alternance</h1>
                <div className="bg-white mx-auto text-center rounded w-2/3 text-white">
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
                <div className="grid md:grid-cols-3 h-screen">
                    <div className="col-span-3 flex flex-col">
                        <div className="flex flex-col my-2">
                            <h1 className="font-bold sm:text-3xl text-white bg-black/70 size-fit self-center p-2 rounded-full">Technologies Apprises</h1>
                        </div>
                        <div className="grid w-full h-full">
                            <div className="grid md:grid-cols-3 gap-2">
                                <div className="grid grid-rows-2 justify-center skill-card">
                                    <div className="flex flex-col justify-center"><Image src="/illustrations/java-logo.png" alt="Java" width={100} height={100} className="scale-[2] self-center" /></div>
                                    <p className="p-2 text-justify">Le langage Java est largement utilisé pour les logiciels métiers et reste une valeur sure en matière de dévloppement.
                                        J'ai développé, lors de mon alternance, des modules à installer sur un robot collaboratif afin de réaliser des
                                        opérations de sidérurgie.</p>
                                </div>
                                <div className="grid grid-rows-2 skill-card">
                                    <div className="flex flex-col justify-center"><Image src="/illustrations/cpp-logo.png" alt="C++" width={100} height={100} className="self-center" /></div>
                                    <p className="p-2 text-justify">Le C++ est un langage de programmation orienté objet, très puissant et performant. J'ai utilisé ce langage
                                        pour développer un logiciel de sniffer de bus CAN. Un autre projet sur lequel j'ai travaillé c'est un logiciel de monitoring pour
                                        les appareils de soudures.</p>
                                </div>
                                <div className="grid grid-rows-2 skill-card">
                                    <div className="flex flex-col justify-center"><Image src="/illustrations/qt-logo.png" alt="Qt" width={100} height={100} className="self-center" /></div>
                                    <p className="p-2 text-justify">Qt est un framework de développement d'interfaces graphiques multiplateformes.
                                        J'ai utilisé Qt pour toutes les application logicielles fait en C++ soit : le sniffer de bus CAN, le logiciel de monitoring d'appareil de soudure
                                        mais également un logiciel permettant de créer et modifier des configurations de soudages semblable à Excel en plus simple et orienté métier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}