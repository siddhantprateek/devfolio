import './project-card.styles.css';
import GITHUB from '../../assets/icons/GITHUB.png';

export const ProjectCard = (props) => (
    <div className="project-card">
        <div className="thumbnail">
            <img src={props.thumbnail} height="180px" width="100%"alt="" />
        </div>
        <h2>{props.project_name}</h2>
        <p>
            {props.details}
        </p>

        <div className="github-icon-div">
            <a href={props.url}>
                <img className="github-icon" src={GITHUB} alt="source-code" />
            </a>
        </div>
    </div>
);