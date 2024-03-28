'use client';
import { useEffect, useState } from 'react';
// css for the page
import Project from './components/Project';
import './page.css';
import '../../components/LoadingSpinner.css';

interface Project {
    id: number;
    title: string;
    title_desc: string;
    description: string;
    img: string;
}

export default function Page() {

    const [projects, setProjects] = useState<Project[]>([]);

    console.log(projects);

    async function getProjects() {
        await fetch('/api/projects')
            .then((res) => res.json())
            .then((res) => {
                setProjects(res);
            });
    }

    useEffect(() => {
        getProjects();
    }, []);

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
            <div className='projects'>
                {projects.length > 0 ? (projects.map((project: Project) => {
                    return <Project title={project.title} title_desc={project.title_desc} description={project.description} img={project.img} />
                })) :
                    <div className='loading'>
                        <h1>Loading ...</h1>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>}
            </div>
        </main>
    )
}