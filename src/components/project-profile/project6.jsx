import React from "react";
import "./projectprofile.styles.css";
import Techused from "./Techused";

function Project6(props) {
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

      <div className="project-banner">
        <video className="video" autoPlay loop muted>
            <source src={`https://user-images.githubusercontent.com/43869046/156356835-ce86d515-903b-49ee-94c1-1de93a2b955e.mp4`} type="video/mp4"/>
        </video>
      </div>
      
      <div className="project-banner">
        <img src={`https://i.imgur.com/0e6mkiC.png`} alt="" />
      </div>
    
      <div className="project-banner">
        <img src={`https://i.imgur.com/rOJBnIu.png`} alt="" />
      </div>
      {/* Tech and Links */}
      <div className="project-resource">
        <div className="link-to">
          <h1>Link</h1>
          <a href={props.url} target="__blank">
            <div className="github-link">
              <p>siddhantprateek/rteach</p>
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
            {props.techlist.map((tech) => (
              <Techused tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project6;
