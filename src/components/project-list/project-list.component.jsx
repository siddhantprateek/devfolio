import './project-list.style.css';
import { ProjectCard } from '../project-card/project-card.component';
import Projects from '../projects.json';
export const ProjectList = () => (
  <div className="project-list-div">
    <div className="project-list">
      {Projects.map((project) => (
        <a href={`/projects/${project.route}`}>
            <ProjectCard
              key={project.id}
              project_name={project.project_name}
              details={project.details}
              url={project.url}
              thumbnail={project.thumbnail}
            />
        </a>
      ))}
    </div>
    <div className="btn-div">
      <a href="https://github.com/siddhantprateek" target="__blank">
        <button className="learnMore-btn">LEARN MORE.</button>
      </a>
    </div>
  </div>
);