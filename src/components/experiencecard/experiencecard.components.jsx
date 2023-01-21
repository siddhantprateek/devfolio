import React from 'react'
import { AVIYEL } from '../../assets/expicon';
import './experiencecard.styles.css';

const Experiencecard = () => {
  return (
    <div className='experience-card'>
        <img src={AVIYEL} className="exp-icon" alt="aviyel" />
        <div className="exp-content">
            <h2>Open Source Developer / Tech Writer</h2>
            <p>Aviyel</p>
        </div>
    </div>
  )
}

export default Experiencecard;