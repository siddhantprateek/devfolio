import './App.css';
import { Header } from './components/header/header.components';
// import { Footer } from './components/footer/footer.components';
import Home from './routes/home/home.pages';
import About from './routes/about/about.pages';
import Projects from './routes/projects/project.pages';
import Experience from './routes/experience/experience.pages';
import Blogs from './routes/blogs/blogs.pages';
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
        </Routes>
      </div>
    );
  }
}

export default App;
