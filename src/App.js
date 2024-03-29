import './App.css';
import { Header } from './components/header/header.components';
import { Footer } from './components/footer/footer.components';
import {Home, About, Projects, Experience, Blogs } from './routes';

import { Project1, Project2, Project3, Project4, Project5, Project6, Project7,Project8, Project9, Project10, Project11 } from './components/project-profile'
import data from './components/projects.json'
import { Route, Routes } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/projects/project1" element={<Project1 {...data[0]} />} />
          <Route exact path="/projects/project2" element={<Project2 {...data[1]} />} />
          <Route exact path="/projects/project3" element={<Project3 {...data[2]} />} />
          <Route exact path="/projects/project4" element={<Project4 {...data[3]} />} />
          <Route exact path="/projects/project5" element={<Project5 {...data[4]} />} />
          <Route exact path="/projects/project6" element={<Project6 {...data[5]} />} />
          <Route exact path="/projects/project7" element={<Project7 {...data[6]} />} />
          <Route exact path="/projects/project8" element={<Project8 {...data[7]} />} />
          <Route exact path="/projects/project9" element={<Project9 {...data[8]} />} />
          <Route exact path="/projects/project10" element={<Project10 {...data[9]} />} />
          <Route exact path="/projects/project11" element={<Project11 {...data[10]} />} />
          {/* <Route exact path="/projects/project12" element={<Project12 {...data[11]} />} /> */}
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;
