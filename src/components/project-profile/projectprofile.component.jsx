import './projectprofile.styles.css';
const ProjectProfile = ({project}) => {
    return (
        <div className="project-profile">

            <div className='project-container'>
                <h1>{project.project_name}</h1>
                <img src={project.thumbnail} height="550rem" alt="" /> 
            </div>
        </div>
    )
}

export default ProjectProfile;