import React from 'react'
import Experiencecard from '../experiencecard/experiencecard.components';
import "./experiencelist.styles.css";

const Experiencelist = () => {
  return (
    <div className="exp-container">
        <div className='experience-list'>
            <Experiencecard />
            {/* <Experiencecard /> */}
            {/* <Experiencecard /> */}

        </div>
    </div>
  )
}

export default Experiencelist