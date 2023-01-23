import React from 'react'
import './experiencecard.styles.css';

const Experiencecard = (props) => {
  return (
    <div className='experience-card' 
    style={{ 
      backgroundColor: props.color,
       }} >
        <img src={props.image} className="exp-icon" alt="comp-name" />
        <div className="exp-content">
            <h2>{props.position}</h2>
            <p>{props.company_name}</p>
        </div>
    </div>
  )
}

export default Experiencecard;