// css for the page
import Project from './components/Project';
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
            <Project
                title="Projet 1"
                title_desc="Description Projet 1"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                img="https://via.placeholder.com/300x150"
            />
            <Project
                title="Projet 2"
                title_desc="Description Projet 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                img="https://via.placeholder.com/300x150"
            />
            <Project
                title="Projet 3"
                title_desc="Description Projet 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
                img="https://via.placeholder.com/300x150"
            />
        </main>
    )
}