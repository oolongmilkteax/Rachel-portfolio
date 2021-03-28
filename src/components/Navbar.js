import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
        <nav className = "nav"> 
            <p>
                    <Link to = "/">Home</Link><br></br>
                    <Link to = "/about">About</Link><br></br>
                    <Link to = "/education">Education</Link><br></br>
                    <Link to = "/contact">Contact</Link>
            </p>
        </nav>)
    }
} export default Navbar