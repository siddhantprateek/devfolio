import React from 'react';
import { ProjectList } from '../../components/project-list/project-list.component';
class Projects extends React.Component {
    render(){
        return(
            <div className="Project">
                <ProjectList/>
            </div>
        );
    }
}

export default Projects;