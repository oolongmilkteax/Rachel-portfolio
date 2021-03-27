import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Rachel.jpg';
import './Home.css';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
        <div className="home">
            <img src={profilepic} className="profilepic" alt="Me"></img><br></br>
            <ReactTypingEffect id="typing" text={['I am Rachel Ho!']} speed={60} eraseDelay={600} typingDelay={500} eraseSpeed={70} cursor=" "/>
            <span>A business analytics undergraduate at NUS</span>
            <Social/>
        </div>
        )
    }
} export default Home