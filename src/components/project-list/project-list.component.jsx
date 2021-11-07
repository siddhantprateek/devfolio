import './project-list.style.css';
import { ProjectCard } from '../project-card/project-card.component';
export const ProjectList = () =>(
    <div className="project-list-div">
        <div className="project-list">
            <ProjectCard name="project 1"/>
            <ProjectCard name="project 2"/>
            <ProjectCard name="project 3"/>
            <ProjectCard name="project 4"/>
        </div>
        <div className="btn-div">
        <a href="https://github.com/siddhantprateek" target="__blank">
            <button className="learnMore-btn">LEARN MORE.</button>
        </a>
        </div>
    </div>
);