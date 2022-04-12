import './project-card.styles.css';
import GITHUB from '../../assets/icons/dark/GITHUB.png';

export const ProjectCard = (props) => (
    <div className="project-card">
        <div className="thumbnail">
            <img src={props.thumbnail} height="180px" width="100%"alt="" />
        </div>
        <div className="project-description">
            <h2>{props.project_name}</h2>
            <p className='project-details'>
                {props.details.length <= 150 ? props.details : props.details.slice(0, 150)+"..."}
            </p>

            <div className="github-icon-div">
                <a href={props.url}>
                    <img className="github-icon" src={GITHUB} alt="source-code" />
                </a>
            </div>
        </div>
    </div>
);