import './home.style.css'
import React from 'react';
import Type from './type.component';
class Home extends React.Component{
    render(){
        const resumeURL= "https://docs.google.com/document/d/13OwvkH2RvZ9OuUQtTUhRrhEXnq6C5CPRPepkrmUmIz8/edit#heading=h.5x0d5h95i329"
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
                    <img className="profile-img" src={`https://github.com/siddhantprateek/devfolio/blob/master/src/assets/icons/PRO.png?raw=true`} alt="" />
                </div>                
            </div>
        )
    }
}

export default Home;