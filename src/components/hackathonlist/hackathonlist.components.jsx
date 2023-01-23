import React from 'react';
import "./hackathonlist.styles.css";
import { HackathonCard } from '..';

let Hackathons = [
    {
        color: "#ecf8f4",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/001/354/datas/medium.png",
        title: "Coastal Hacks",
        font_color: "#000000"
    },
    {
        color: "#1c1c1e",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/064/961/datas/medium.png",
        title: "Wild Hacks II",
        font_color: "white"
    },
    {
        color: "#fdda90",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/064/961/datas/medium.png",
        title: "Wild Hacks II",
        font_color: "#000000"
    },
    {
        color: "#f4ecf3",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/006/140/datas/medium.png",
        title: "Mental Health Hacks II",
        font_color: "#000000"
    },

]
// #fdda90
// #f4ecf3
const Hackathonlist = () => {
  return (
    <div className="hack-container">
        <div className='hack-list'>
          {Hackathons.map((hack) => (
            <>
              <HackathonCard color={hack.color} image={hack.image} title={hack.title} font_color={hack.font_color} />
            </>
          ))}
        </div>
    </div>
  )
}

export default Hackathonlist