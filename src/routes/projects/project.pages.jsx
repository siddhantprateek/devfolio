import React from 'react';
import { ProjectList } from '../../components/project-list/project-list.component';
import './projects.styles.css';
class Projects extends React.Component {
    render(){
        return(
            <div className="Project">
                <div className='project-div'>
                <h1 className='project-back'>Projects</h1>
                <h1 className='project-front'>Projects</h1>
                </div>
                <ProjectList/>
            </div>
        );
    }
}

export default Projects;