import React from "react";
import "./projectprofile.styles.css";
import Techused from "./Techused";
const Tech = ["React", "Rest API", "NodeJs", "ExpressJs", "CoinGecko API","Crypto News Live API"];
function Project1({ project }) {
  return (
    <div className="project-profile">
      <div className="project-container">
        <h1>{project.project_name}</h1>
        <div className="project-banner">
          <img src={project.thumbnail} height="550rem" alt="" />
        </div>
      </div>

        <div className="project-contents">
          <p>{project.details}</p>
        </div>
      <div className="project-resource">
        <div className="link-to">
          <h1>Link</h1>
          <a href={project.url} target="__blank">
            <div className="github-link">
              <p>siddhantprateek/Cryptocurrency-Tracker</p>
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

export default Project1;
