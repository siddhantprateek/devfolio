import React from "react";
import "./about.styles.css";
import UNILOGO from "../../assets/icons/dark/instituteIcon.png";
import TechList from "../../components/tech-list/techlist.component";
class About extends React.Component {
  render() {
    return (
      <div className="About">
        <div className="about-container">
          <div className="aboutme">
            <div className="about-content">
              <h1>About</h1>
              <p>
                👋 Hi, I'm Siddhant Prateek Mahanayak, currently a junior at
                Kalinga Institute of Industrial technology pursuing my{" "}
                <b>Computer Science and Engineering</b> Degree. I'm passionate
                about Cloud Technology and Blockchain Technology. I'm an
                open-source enthusiast and love learning from open source
                communities and giving back the same.
              </p>
            </div>
            <div className="institute-content">
              <div className="building-logo">
                <img
                  className="uni-logo"
                  src={UNILOGO}
                  alt=""
                  height="40px"
                  width="40px"
                />
              </div>
              <div className="uni-content">
                <h2>Kalinga Institute of Industrial Technology</h2>
                <p>Bachelors in Computer Science and Engineering</p>
              </div>
            </div>
          </div>
          <div className="tech">
            <h1>Tech Stack</h1>
            <p>I'm familiar with</p>
            <TechList />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
