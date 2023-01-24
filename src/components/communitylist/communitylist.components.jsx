import React from 'react'
import { AVIYEL } from '../../assets/expicon';
import Communitycard from '../communitycard/communitycard.components';
import "./communitylist.styles.css";

let Communities = [
    {
        color: "#845FCF",
        image: AVIYEL,
        title: "Aviyel",
        font_color: "white",
    },
    {
        color: "",
        image: "https://avatars.githubusercontent.com/u/66388388?s=200&v=4",
        title: "EddieHub",
        font_color: "white",
    },
    {
        color: "white",
        image: "https://avatars.githubusercontent.com/u/44620851?s=200&v=4",
        title: "Layer5",
        font_color: "black",
    },

]


const Communitylist = () => {
  return (
    <div className="community-container">
        <div className='community-list'>
          {Communities.map((Community) => (
            <>
              <Communitycard color={Community.color} image={Community.image} title={Community.title} font_color={Community.font_color} />
            </>
          ))}
        </div>
    </div>
  )
}

export default Communitylist