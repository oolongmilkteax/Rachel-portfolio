import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
        <div className="aboutpage">
            <div className = "about">
                <h1 className = "aboutheading">About Me</h1>
                <h2>Hey there!</h2>
                <p className = "aboutcontent">
                People often ask me why I chose to major in business analytics.<br></br>
                To be honest, business administration was what I thought I'll end up majoring in.
                However that all changed when I joined Cruger Haus SG Pte Ltd, a market research company.
                I was shocked to find out how much our clients were willing to spend on collecting data and it made me wonder what they were going to do with it and how it would be useful.
                I started doing some research on my own and it took me down the rabbit hole of analytics.                
                I realised that more companies were starting to embrace big data and analytics, which meant an increase in demand for such skillsets.
                But what intrigued me the most was that through these statistics and figures, people are able to draw trends, spot anomalies and use them to come up with new solutions or streamline operations to further improve the organisation.
                This resonates strongly with my personal belief that 'change is the only constant' in the fast-paced world that we live in today, and that is why I decided to major in business analytics. 
                </p>
            </div>
        </div>
        )
    }
} export default About