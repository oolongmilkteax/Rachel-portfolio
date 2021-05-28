import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className = "nav">
            <div className = "header">
            {click ? (
                <FontAwesomeIcon icon = {faTimes} size = "3x" onClick={handleClick}/>
            ) : (
                <FontAwesomeIcon icon = {faBars} size = "3x" onClick={handleClick}/>
            )}
            </div>
            <nav>
                {click ? (
                    <p>
                        <Link to = "/" onClick={handleClick}>Home</Link><br/>
                        <Link to = "/about" onClick={handleClick}>About</Link><br/>
                        <Link to = "/education" onClick={handleClick}>Education</Link><br/>
                        <Link to = "/contact" onClick={handleClick}>Contact</Link>
                    </p>
                ) : (
                null
                )}  
                
            </nav>
        </div>
    )
};
export default Navbar;
