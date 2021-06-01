import React from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './contents/Home.js';
import About from './contents/About.js';
import Navbar from './components/Navbar/Navbar';
import Education from './contents/Education';
import Contact from './contents/Contact';
import Social from './components/Social'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className = "content">
      <Router>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/about" component = {About}/>
        <Route exact path="/education" component = {Education}/>
        <Route exact path="/contact" component = {Contact}/>
      </Router>
      </div>
      <Social/>
    </div>
  )
}export default App;