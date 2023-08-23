import React from 'react'
import { AVIYEL, GOUP, LFX, ABBLOR } from '../../assets/expicon';
import Experiencecard from '../experiencecard/experiencecard.components';
import "./experiencelist.styles.css";

let Experience = [
  {
    image: LFX,
    position: "LFX Mentee",
    company_name: "The Linux Foundation",
    color: "#e3e3e3"
  },
  {
    image: ABBLOR,
    position: "Full Stack Developer",
    company_name: "Abblor Tech",
    color: "#000000"
  },
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