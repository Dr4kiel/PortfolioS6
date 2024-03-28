"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import '../../components/LoadingSpinner.css';
import './page.css';


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

  const { annee } = useParams();

  const [datas, setDatas] = useState<Data[]>([]);
  const [competences, setCompetences] = useState<Competence[]>([]);

  async function getDatas() {
    await fetch(`/api/portfolio/${annee}`)
      .then((res) => res.json())
      .then((res) => {
        setDatas(res.response);
      });
  }

  async function getCompetence() {
    await fetch(`/api/portfolio/${annee}/competence/`)
      .then((res) => res.json())
      .then((res) => {
        setCompetences(res.response);
      });
  }

  function colorForLevel(level: number) {
    if (level === 0) {
      return "level-0";
    } else if (level === 1) {
      return "level-50";
    } else if (level === 2) {
      return "level-100";
    } else {
      return "level";
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
          datas[0].semestres.map((semestre, index) => (
            <div className="semestre">
              <div className="titre">{semestre.semestre}</div>
              <div className="competences">
                {
                  // separer les apprentissages critiques par competence
                  competences.map((competence, index) => (
                    <div className="competence">
                      <div className="titre-competence">{competence.competence}</div>
                      {
                        semestre.apprentissageCritiques.map((apprentissageCritique, index) => (
                          apprentissageCritique.competence.id === competence.id ? (
                            <div className="apprentissageCritique">
                              <div className="apprentissage-title">{apprentissageCritique.titre}</div>
                              <div className="criteres">
                                {
                                  apprentissageCritique.criteres.map((critere, index) => {
                                    return apprentissageCritique.niveauActuel === critere.niveauAcceptabilite ? (
                                      <div className="critere level-bar">
                                        <span className="critere-text">{critere.critere}</span>
                                        <div className={` level-bar-fill ${colorForLevel(critere.niveauAcceptabilite)}`}></div>
                                      </div>
                                    ) : null
                                  })
                                }
                              </div>
                            </div>
                          ) : null
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        ) : (
          <div className='loading'>
            <h1>Loading ...</h1>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        )
      }
    </main>
  );
}
