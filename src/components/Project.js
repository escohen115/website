import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'


function Project({project}) {

    return (<div >
        <h3 className="project-titles">{project.projectName}</h3>
        <div className="projectLinks">
            <a target="_blank" rel="noreferrer" className="github-links" href={project.gitHubFrontend}>Github Frontend</a>  
            <a target="_blank" rel="noreferrer" className="github-links" href={project.gitHubBackend}>Github Backend</a>
        </div>
        <YoutubeEmbed embedId={project.demo} />
        <p className="description">{project.description}</p>
    </div>
    )
}

export default Project;