// css for the page
import './page.css';

export default function Page() {
    return (
        <main id='corps'>
            <div id='project-list' className="bg-blue-500">
                <h1 id='project-list-title' className="bg-green-500">Projets</h1>
                <div id='project-link-list' className="bg-red-500">
                    <a href="#projet1" className="project-link">Projet 1</a>
                    <a href="#projet2" className="project-link">Projet 2</a>
                    <a href="#projet3" className="project-link">Projet 3</a>
                </div>
            </div>
            <div id='projet1' className='project bg-blue-500'>
                <h2 className='project-title'>Projet 1</h2>
                <div className='project-content'>
                    <div className='img-wrapper'>
                        <img src='https://via.placeholder.com/150' alt='placeholder' />
                    </div>
                    <div className='text-wrapper'>
                        <p className='project-description'>Description du projet 1</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}