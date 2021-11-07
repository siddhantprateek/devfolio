import './home.style.css'
import React from 'react';
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="content">
                    <h1>Hello, my name is</h1>
                    <h1>Siddhant Prateek</h1>
                    <h1>Mahanayak</h1>
                    <h2>Open Sourcer</h2>
                </div>                
                <img className="profile-img" src={'https://i.imgur.com/3adsZEe.png'} alt="" />
            </div>
        )
    }
}

export default Home;