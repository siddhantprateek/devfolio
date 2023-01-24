import React from 'react'
import './communitycard.styles.css';

const Communitycard = (props) => {
  return (
    <div className='community-card' 
    style={{ 
      backgroundColor: props.color,
      
       }} >
        <img src={props.image} className="community-icon" alt="community-img" />
        <div className="community-content">
            <h2 style={{
              color: props.font_color,
            }}>{props.title}</h2>
        </div>
    </div>
  )
}

export default Communitycard