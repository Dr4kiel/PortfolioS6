export default function Page() {
  return (
    <main>
      <div className="h-screen flex-col justify-center flex">
        <h2 className="title">Portfolio</h2>
        <div className="bg-white mx-auto text-center rounded w-2/3 text-white">
          Work In Progress
        </div>
      </div>
      <div className="grid grid-cols-2">
        <a href="/portfolio/but2" className="mx-[10%]">
          <div className="grid grid-rows-2 justify-center skill-card">
            <div className="flex flex-col justify-center">BUT 2</div>
            <p className="p-2 text-justify">
              Mes compétences de la seconde année sont répertoriés dans les 6
              compétences du BUT Informatique.
            </p>
          </div>
        </a>
        <a href="/portfolio/but3" className="mx-[10%]">
          <div className="grid grid-rows-2 justify-center skill-card">
            <div className="flex flex-col justify-center">BUT 3</div>
            <p className="p-2 text-justify">
              Mes compétences de la troisième et dernière année sont répertoriés
              dans 3 compétences du BUT Informatique. (Réaliser - Optimiser -
              Collaborer)
            </p>
          </div>
        </a>
      </div>
      <div className="flex justify-around mt-4">
        <a href="/portfolio/projets" className="flex">
          <div className="grid grid-rows-2 justify-center skill-card">
            <div className="flex flex-col justify-center">Projets</div>
            <p className="p-2 text-justify">
              Divers projets que j'ai pu réaliser
            </p>
          </div>
        </a>
      </div>
    </main>
  );
}
