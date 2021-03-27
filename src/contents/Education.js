import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import './Education.css';

class Education extends Component {
    render() {
        return (
            <div className="educationpage">
                <h1 className="educationheading">My Education</h1>
                <div className="educationcontent">
                    <Widecard 
                    link = "https://www.nus.edu.sg"
                    image= "https://www.nus.edu.sg/images/default-source/identity-images/NUS_logo_full-horizontal.jpg"
                    where="National University of Singapore" 
                    from="Aug 2019" 
                    to="Present"
                    />
                    <Widecard 
                    link = "https://tmjc.moe.edu.sg/our-heritage/meridian-jc"
                    image = "https://www.kingmaker.com.sg/wp-content/uploads/sites/10/2016/07/MJC.png"
                    where="Meridian Junior College" 
                    from="2017" 
                    to="2018"/>
                    <Widecard 
                    link = "https://anglicanhigh.moe.edu.sg"
                    image = "https://upload.wikimedia.org/wikipedia/en/b/ba/Anglican_High_School_Crest.png"
                    where="Anglican High School" 
                    from="2013" 
                    to="2016"/>
                </div>
            </div>
        )
    }
}export default Education