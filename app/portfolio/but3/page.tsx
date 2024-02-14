"use client"
import { useEffect, useState } from "react";


export default function Page() {

    const [datas, setDatas] = useState([]);

    async function getDatas() {
        await fetch("/api/portfolio/but3")
            .then((res) => res.json())
            .then((res) => {
                setDatas(res.response);
            })
    }

    function colorForLevel(level: number) {
        if (level == 0) {
            return "bg-red-500";
        } else if (level == 1) {
            return "bg-yellow-500";
        } else if (level == 2) {
            return "bg-green-500";
        } else {
            return "bg-gray-500";
        }
    }

    useEffect(() => {
        getDatas();
    }, []);

    return (
        <main>
            {
                // check if datas is empty
                datas.length > 0 ? datas.map((data, index) => {
                    return (
                        <div id="content" className="">
                            {data.semestres.map((semestre, index2) => {
                                return (
                                    <div>
                                        <h2 className="title">{semestre.semestre}</h2>
                                        <div className="grid grid-rows-3">
                                            <div className="flex justify-around">
                                                <div className="text-xl text-white m-5 text-center self-center">
                                                    {semestre.apprentissageCritiques[0].competence.competence}
                                                </div>
                                                {
                                                    semestre.apprentissageCritiques.map((apprentissage, index3) => {
                                                        if (apprentissage.competence.id == 1) {
                                                            return (
                                                                <div className="bg-gray-800 rounded m-1 p-3">
                                                                    <div className="text-white mb-5 text-center">{apprentissage.titre}</div>
                                                                    <div className="grid grid-rows-3 gap-2">
                                                                        {
                                                                            apprentissage.criteres.map((critere, index4) => {
                                                                                return (
                                                                                    <div className="m-3">
                                                                                        <div className={"text-white p-1 " + (
                                                                                            critere.niveauAcceptabilite == apprentissage.niveauActuel ? colorForLevel(critere.niveauAcceptabilite) : ""
                                                                                            )}>{critere.critere}
                                                                                        </div>
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }) : <p className="bg-white">Loading...</p>
            }
        </main>
    );
}