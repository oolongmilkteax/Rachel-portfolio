import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.jpg';
import './Home.css';

class Home extends Component {
    render() {
        return (
        <div className="home">
            <img src={profilepic} className="profilepic" alt="Me"></img><br></br>
            <ReactTypingEffect id="typing" text={['I am Rachel Ho!']} speed={60} eraseDelay={600} typingDelay={500} eraseSpeed={70} cursor=" "/>
            <span>A business analytics undergraduate at NUS <i class="far fa-hand-peace"></i></span>
        </div>
        )
    }
} export default Home