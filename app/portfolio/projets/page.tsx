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
        </main>
    )
}