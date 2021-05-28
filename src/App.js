import React from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './contents/Home.js';
import About from './contents/About.js';
import Nav from './components/Navbar';
import Education from './contents/Education';
import Contact from './contents/Contact';

function App() {
  return (
    <div className="app">
    <Router>
      <Nav/>
      <div className="App">
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
      </div>
    </Router>
    </div>
  )
}export default App;