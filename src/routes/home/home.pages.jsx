import './home.style.css'
import React from 'react';
import Type from './type.component';
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="content">
                    <h1 className="">Hello, my name is</h1>
                    <h1>Siddhant Prateek</h1>
                    <h1>Mahanayak</h1>
                    <Type strings={[
    	                '<h2>Open Source Enthusiast</h2>',
                        '<h2>Cloud Native Enthusiast</h2>',
                        '<h2>Web Developer</h2>',
                        '<h2>Open Source Enthusiast</h2>',
                        '<h2>Cloud Native Enthusiast</h2>',
                        '<h2>Web Developer</h2>',
                        '<h2>Open Source Enthusiast</h2>',
                        '<h2>Cloud Native Enthusiast</h2>',
                        '<h2>Web Developer</h2>',
                        '<h2>Open Source Enthusiast</h2>',
                        '<h2>Cloud Native Enthusiast</h2>',
                        '<h2>Web Developer</h2>',
                        '<h2>Open Source Enthusiast</h2>',
                        '<h2>Cloud Native Enthusiast</h2>',
                        '<h2>Web Developer</h2>'
                    ]}/>
                </div>                
                <img className="profile-img" src={'https://i.imgur.com/3adsZEe.png'} alt="" />
            </div>
        )
    }
}

export default Home;