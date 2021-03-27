import React, { Component } from 'react';
import './Social.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
    render() {
        return (
        <div class = "social">
            <div class = "call">
                Click on the icons to connect with me!</div>
            <div class="sociallinks">
            <p>GitHub</p>
            <a href="https://github.com/oolongmilkteax" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <p>Instagram</p>
            <a href="https://www.instagram.com/oolongmilktea_/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/rachel-ho-3617741ab/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            </div>
        </div>
        )
    }
}
export default Social