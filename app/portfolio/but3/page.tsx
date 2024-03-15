"use client";
import { useEffect, useState } from "react";

interface Data {
  semestres: Semestre[];
}

interface Semestre {
  semestre: string;
  apprentissageCritiques: ApprentissageCritique[];
}

interface ApprentissageCritique {
  competence: Competence;
  titre: string;
  criteres: Critere[];
  niveauActuel: number;
}

interface Competence {
  id: number;
  competence: string;
}

interface Critere {
  critere: string;
  niveauAcceptabilite: number;
}

export default function Page() {
  const [datas, setDatas] = useState<Data[]>([]);
  const [competences, setCompetences] = useState<Competence[]>([]);

  async function getDatas() {
    await fetch("/api/portfolio/but3")
      .then((res) => res.json())
      .then((res) => {
        setDatas(res.response);
      });
  }

  async function getCompetence() {
    await fetch("/api/portfolio/but3/competence/")
      .then((res) => res.json())
      .then((res) => {
        setCompetences(res.response);
      });
  }

  function colorForLevel(level: number) {
    if (level === 0) {
      return "bg-red-500";
    } else if (level === 1) {
      return "bg-yellow-500";
    } else if (level === 2) {
      return "bg-green-500";
    } else {
      return "bg-gray-500";
    }
  }

  useEffect(() => {
    getDatas();
    getCompetence();
  }, []);

  return (
    <main>
      {
        // check if datas is empty
        datas.length > 0 ? (
          datas.map((data, index) => {
            return (
              <div id="content" className="">
                {data.semestres.map((semestre, index2) => {
                  return (
                    <div>
                      <div className="h-screen flex-col justify-center flex">
                        <h2 className="title">{semestre.semestre}</h2>
                        <div className="bg-white mx-auto text-center rounded w-2/3 text-white">
                          Work In Progress
                        </div>
                      </div>

                      {competences.map((competence) => (
                        <div className="grid grid-rows">
                          <div className="grid grid-cols-6">
                            <div className="flex justify-around col-span-1">
                              <div className="text-xl text-white m-5 text-center self-center competence">
                                {competence.competence}
                              </div>
                            </div>
                            <div className="col-span-5 grid grid-flow-col">
                              {semestre.apprentissageCritiques.map(
                                (apprentissage, index3) => {
                                  if (
                                    apprentissage.competence.id == competence.id
                                  ) {
                                    return (
                                      <div className="bg-gray-800 rounded m-1 p-3 text-sm">
                                        <div className="text-white mb-5 text-center font-bold">
                                          {apprentissage.titre}
                                        </div>
                                        <div className="grid grid-rows-3 gap-2">
                                          {apprentissage.criteres.map(
                                            (critere, index4) => {
                                              return (
                                                <div className="m-3">
                                                  <div
                                                    className={
                                                      "text-white text-justify p-1 " +
                                                      (critere.niveauAcceptabilite ==
                                                      apprentissage.niveauActuel
                                                        ? colorForLevel(
                                                            critere.niveauAcceptabilite
                                                          )
                                                        : "")
                                                    }
                                                  >
                                                    {critere.critere}
                                                  </div>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      </div>
                                    );
                                  }
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          })
        ) : (
          <p className="bg-white">Loading...</p>
        )
      }
    </main>
  );
}
