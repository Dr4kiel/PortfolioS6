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
            <div id='project-list' className="bg-white">
                <h1 id='project-list-title'>Projets</h1>
                <ul id='project-link-list' className="">
                    {projects.length > 0 ? (projects.map((project: Project) => {
                        return <li><a href={`#${project.id}`} className="project-link">{project.title}</a></li>
                    })) :
                        <div className='loading absolute left-[30%] top-[10%]'>
                            <h1>Loading ...</h1>
                            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                        </div>}
                </ul>
            </div>
            <div className='projects'>
                {projects.length > 0 ? (projects.map((project: Project) => {
                    return <Project id={project.id} title={project.title} title_desc={project.title_desc} description={project.description} img={project.img} />
                })) :
                    <div className='loading'>
                        <h1>Loading ...</h1>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>}
            </div>
        </main>
    )
}