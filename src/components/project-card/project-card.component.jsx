import './project-card.styles.css';
import GITHUB from '../../assets/icons/GITHUB.png';

export const ProjectCard = (props) => (
    <div className="project-card">
        <div className="thumbnail">

        </div>
        <h1>{props.name}</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Tortor ullamcorper ridiculus blandit lectus. 
        </p>

        <div className="github-icon-div">
            <img className="github-icon" src={GITHUB} alt="source-code" />
        </div>
    </div>
);