import React from "react";
import "./projectprofile.styles.css";
import Techused from "./Techused";

const Tech = ["Ruby", "Rails", "PostgresQL"];

function Project4({ project }) {
  return (
    <div className="project-profile">
      {/* Header and Images */}
      <div className="project-container">
        <h1>{project.project_name}</h1>
        {/* Contents */}
        <p>{project.details}</p>
        {/* Image Container */}
        <div className="project-banner">
          <img src={project.thumbnail} alt="" />
        </div>
        <div className="project-contents"></div>
      </div>
      {/* Tech and Links */}
      <div className="project-resource">
        <div className="link-to">
          <h1>Link</h1>
          <a href={project.url}>
            <div className="github-link" target="__blank">
              <p>siddhantprateek/klimate</p>
            </div>
          </a>
        </div>

        <div className="tech-stack-div">
          <h1>Tools & Technologies</h1>
          <p>Tech stack I used.</p>
          <div className="tools-list">
            {Tech.map((tech) => (
              <Techused tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project4;
