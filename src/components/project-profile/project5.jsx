import React from "react";
import "./projectprofile.styles.css";
import Techused from "./Techused";

const Tech = [
  "React",
  "Redux",
  "Rest API",
  "NodeJs",
  "ExpressJs",
  "Cassandra",
  "GraphQL",
];

function Project5({ project }) {
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
      </div>

      <div className="project-banner">
        <img src={`https://camo.githubusercontent.com/d23d61690e6a04429176437826dd49100b168b6f1f2b0bd08c32a3366a8298cc/68747470733a2f2f692e696d6775722e636f6d2f59584b465654452e6a7067`} alt="" />
      </div>

      <p>This project have some of the feature and tech stack that netflix use. It can add and remove wishlisted movies and<br/> Have login Feature similar to Netflix.</p>

      <div className="project-banner">
        <video className="video" autoPlay loop muted>
            <source src={`https://user-images.githubusercontent.com/43869046/154530537-1a3d8696-cb2f-4a8d-8e9b-3ae67879967b.mp4`} type="video/mp4"/>
        </video>
      </div>

      {/* Tech and Links */}
      <div className="project-resource">
        <div className="link-to">
          <h1>Link</h1>
          <a href={project.url} target="__blank">
            <div className="github-link">
              <p>siddhantprateek/netflux</p>
            </div>
          </a>
          <a href={`${project.url}/issues`} target="__blank">
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

export default Project5;
