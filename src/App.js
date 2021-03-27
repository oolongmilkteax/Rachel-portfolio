import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route,
} from "react-router-dom";
import Home from './contents/Home.js';
import About from './contents/About.js';
import Nav from './components/Navbar';
import Education from './contents/Education';
import Contact from './contents/Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className = "header">
          <span> </span><br></br>
          <Link to = "/nav"><FontAwesomeIcon icon = {faBars} size = "3x" /></Link>
        </div>
        <div className="content"> 
          <Route exact path="/nav">
            <Nav/>
          </Route>
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
      </div>
    </Router>
    
  )
}export default App;