import React from 'react'
import { AVIYEL, GOUP } from '../../assets/expicon';
import Experiencecard from '../experiencecard/experiencecard.components';
import "./experiencelist.styles.css";

let Experience = [
  {
    image: AVIYEL,
    position: "Open Source Developer / Tech Writer",
    company_name: "Aviyel",
    color: "#845FCF"
  },
  {
    image: GOUP,
    position: "Tech Writer",
    company_name: "GOUP Community",
    color: "#000000"
  },
]

const Experiencelist = () => {
  return (
    <div className="exp-container">
        <div className='experience-list'>
          {Experience.map((exp) => (
            <>
              <Experiencecard color={exp.color} image={exp.image} position={exp.position} company_name={exp.company_name} />
            </>
          ))}
        </div>
    </div>
  )
}

export default Experiencelist