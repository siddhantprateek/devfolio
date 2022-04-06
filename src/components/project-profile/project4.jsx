import React from "react";
import "./projectprofile.styles.css";
import Techused from "./Techused";

const Tech = ["Ruby", "Rails", "PostgresQL"];

function Project4(props) {
  return (
    <div className="project-profile">
      {/* Header and Images */}
      <div className="project-container">
        <h1>{props.project_name}</h1>
        {/* Contents */}
        <p>{props.details}</p>
        {/* Image Container */}
        <div className="project-banner">
          <img src={props.thumbnail} alt="" />
        </div>
   
      </div>
      {/* Tech and Links */}
      <div className="project-resource">
        <div className="link-to">
          <h1>Link</h1>
          <a href={props.url}>
            <div className="github-link" target="__blank">
              <p>siddhantprateek/klimate</p>
            </div>
          </a>
          <a href={`${props.url}/issues`} target="__blank">
            <div className="github-link">
              <p>Contribute / Open Issues</p>
            </div>
          </a>
        </div>

        <div className="tech-stack-div">
          <h1>Tools & Technologies</h1>
          <p className="techsiu">Tech stack I used.</p>
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
