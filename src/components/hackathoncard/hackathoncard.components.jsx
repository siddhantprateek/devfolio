import React from 'react'
import './hackathoncard.styles.css';

const Hackathoncard = (props) => {
  return (
    <div className='hack-card' 
    style={{ 
      backgroundColor: props.color,
      
       }} >
        <img src={props.image} className="hack-icon" alt="hack-img" />
        <div className="hack-content">
            <h2 style={{
              color: props.font_color,
            }}>{props.title}</h2>
        </div>
    </div>
  )
}

export default Hackathoncard;