import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import nus from '../img/nus.jpg';
import './Education.css';


class Education extends Component {
    render() {
        return (
            <div className="educationpage">
                <h1 className="educationheading">My Education <i class="fas fa-graduation-cap"></i></h1>
                <div className="educationcontent">
                    <Widecard 
                    link = "https://www.nus.edu.sg"
                    image= {nus}
                    text="National University of Singapore" 
                    secondtext="Aug 2019 - Present"
                    />
                    <Widecard 
                    link = "https://tmjc.moe.edu.sg/our-heritage/meridian-jc"
                    image = "https://www.kingmaker.com.sg/wp-content/uploads/sites/10/2016/07/MJC.png"
                    text="Meridian Junior College" 
                    secondtext="2017 - 2018"/>
                    <Widecard 
                    link = "https://anglicanhigh.moe.edu.sg"
                    image = "https://upload.wikimedia.org/wikipedia/en/b/ba/Anglican_High_School_Crest.png"
                    text="Anglican High School" 
                    secondtext="2013 - 2016"/>
                </div>
            </div>
        )
    }
}export default Education