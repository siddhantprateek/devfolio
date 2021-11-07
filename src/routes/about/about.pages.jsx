import React from 'react';
import './about.styles.css';
import UNILOGO from '../../assets/icons/instituteIcon.png'
class About extends React.Component {
    render() {
        return(
            <div className="About">
                <div className="about-content">
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Tortor ullamcorper ridiculus blandit lectus. Mattis phasellus 
                        justo, aliquet eu posuere non in. In arcu, urna varius est quis 
                        maecenas. Enim feugiat aenean id ultricies magna mauris.
                    </p>
                </div> 
                <div className="institute-content">
                    <div className="building-logo">
                        <img className="uni-logo" src={UNILOGO} alt="" height="40px" width="40px"/>
                    </div>
                    <div className="uni-content">
                        <h2>Kalinga Institute of Industrial Technology</h2>
                        <p>Bachelors in Computer Science and Engineering</p>
                    </div>
                </div>        
                <img className="profile-img" src={'https://i.imgur.com/3adsZEe.png'} alt="" />
            </div>
        )
    }
}
export default About;