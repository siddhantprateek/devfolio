import "./header.styles.css";
import GITHUB from "../../assets/icons/GITHUB.png";
import LINKEDIN from "../../assets/icons/LINKEDIN.png";
import INSTAGRAM from "../../assets/icons/INSTA.png";
import TWITCH from "../../assets/icons/TWITCH.png";
import YOUTUBE from "../../assets/icons/YT.png";
import TWITTER from "../../assets/icons/Twitter.png";
// import CONTRIBUTIONS from "../../assets/icons/Opensource.png";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="header-header">
    <div className="nav-content">
    <ul className="nav-list">
      <li><Link className="nav-options" to="/">Home</Link></li>
      <li><Link className="nav-options" to="/about">About</Link></li>
      <li><Link className="nav-options" to="/projects">Projects</Link></li>
      <li><Link className="nav-options" to="/experience">Experience</Link></li>
      <li><Link className="nav-options" to="/blogs">Blogs</Link></li>
    </ul>
    <div className="icon-div">
      <ul className="icon-list">
        {/* GITHUB */}
				<li>
          <a target="__blank" href="https://github.com/siddhantprateek">
            <img src={GITHUB} alt="Github" />
          </a>
        </li>
				
				{/* INSTAGRAM */}
        <li>
          <a target="__blank" href="https://www.instagram.com/siddhantprateek/">
            <img src={INSTAGRAM} alt="Instagram" />
          </a>
        </li>
				
				{/* TWITCH */}
        <li>
          <a target="__blank" href="https://www.twitch.tv/siddhant_prateek">
            <img src={TWITCH} alt="Twitch" />
          </a>
        </li>
				
				{/* YOUTUBE */}
        <li>
					<a target="__blank" href="https://www.youtube.com/channel/UC9UZwhdhiSYPCnRF9C7vrfQ">
						<img src={YOUTUBE} alt="Youtube" />	
        	</a>
        </li>
				
				{/* TWITTER */}
        <li>
					<a target="__blank" href="https://twitter.com/siddhantprateek">
          	<img src={TWITTER} alt="Twitter" />
        	</a>
        </li>
				
				{/* LINKEDIN */}
        <li>
					<a target="__blank" href="https://www.linkedin.com/in/siddhantprateek/">
						<img src={LINKEDIN} alt="Linkedin" />
        	</a>
        </li>
        {/* OPENSOURCE CONTRIBUTIONS */}
        <li>
					<a target="__blank" href="https://www.linkedin.com/in/siddhantprateek/">
						<img src={'https://img.icons8.com/material/25/000000/open-source.png'} alt="My Contribution" />
        	</a>
        </li>
      </ul>
      </div>
    </div>
  </header>
);
