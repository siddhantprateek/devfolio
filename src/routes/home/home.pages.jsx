import './home.style.css'
import React from 'react';
import Type from './type.component';
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="content">
                    <h3>Hello, my name is</h3>
                    <h1 className="">Siddhant Prateek <br />Mahanayak</h1>
                    {/* <h1>Siddhant Prateek</h1> */}
                    {/* <h1>Mahanayak</h1> */}
                    <div className='typer'>
                        <Type strings={[
                            '<h2>Open Source Developer</h2>',
                            '<h2>Cloud Native Enthusiast</h2>',
                            '<h2>Full Stack Developer</h2>',
                            '<h2>Tech Writer</h2>'
                        ]}/>
                    </div>
                </div>
                <div className="pro-div">    
                    <img className="profile-img" src={'https://i.imgur.com/Zk8Uwfo.png'} alt="" />
                </div>                
            </div>
        )
    }
}

export default Home;