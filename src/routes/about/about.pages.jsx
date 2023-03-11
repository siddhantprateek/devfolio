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
                👋 Hi! I'm Siddhant Prateek Mahanayak, a <b>Computer 
                Science and Engineering</b> junior at Kalinga Institute of 
                Industrial Technology. My passion lies in exploring the 
                fascinating worlds of Cloud and Blockchain Technology. 
                As an avid supporter of the open-source movement, 
                I am always eager to learn and gain knowledge from open-source 
                communities. Moreover, I am a strong believer in contributing back 
                to these communities and sharing my knowledge with others.

                Overall, I am committed to my passion for technology, and I 
                look forward to exploring and contributing to the world 
                of open-source development.
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
