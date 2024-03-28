import './page.css';

export default function Page() {
  return (
    <main>
      <div id="main-title" className="flex-col justify-center flex">
        <h2 className="title">Portfolio</h2>
        <div className="bg-white mx-auto text-center rounded w-2/3 text-white">
          Work In Progress
        </div>
      </div>

      <div className='menu-list'>
        <a href="/portfolio/but2" id='but2-button' className='portfolio-button'>
          <h3 className='button-title'>BUT 2</h3>
          <p className='button-text'>Mes compétences de la seconde année sont répertoriés dans les 6 compétences du BUT Informatique.</p>
        </a>
        <a href="/portfolio/but3" id='but3-button' className='portfolio-button'>
          <h3 className='button-title'>BUT 3</h3>
          <p className='button-text'>Mes compétences de la troisième et dernière année sont répertoriés dans 3 compétences du BUT Informatique. (Réaliser - Optimiser - Collaborer)</p>
        </a>
        <a href="/portfolio/projets" id='projets-button' className='portfolio-button'>
          <h3 className='button-title'>Projets</h3>
          <p className='button-text'>Divers projets que j'ai pu réaliser</p>
        </a>
      </div>

      {/* <div className="grid grid-cols-2">
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
      </div> */}
    </main>
  );
}
