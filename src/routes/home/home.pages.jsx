import './home.style.css'
import React from 'react';
import Type from './type.component';
import { PROIMAGE } from '../../assets/picture';
class Home extends React.Component{
    render(){
        const resumeURL= "https://drive.google.com/file/d/1kCooOZkNvFUjGi29WybVyw8B46yCwy96/view?usp=sharing"
        return(
            <div className="home">
                <div className="content">
                    <h3>Hello, my name is</h3>
                    <h1 className="">Siddhant Prateek <br />Mahanayak</h1>
                    <div className='typer'>
                        <Type strings={[
                            '<h2>Open Source Developer</h2>',
                            '<h2>Cloud Native Enthusiast</h2>',
                            '<h2>Full Stack Developer</h2>',
                            '<h2>Technical Writer</h2>',
                            '<h2>Blockchain Enthusiast</h2>'
                        ]}/>
                    </div>
                    <a href={resumeURL} target="__blank">
                        <div className='resume-btn'> 
                        <img src={`https://img.icons8.com/ios-filled/30/000000/link--v1.png`} 
                        height="16px"
                        alt=""/> 
                        <p>Resume</p>
                        </div>
                    </a>
                </div>
                <div className="pro-div">    
                    <img className="profile-img" src={PROIMAGE} alt="" />
                </div>                
            </div>
        )
    }
}

export default Home;