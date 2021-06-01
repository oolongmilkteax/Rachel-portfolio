import React, { Component } from 'react'
import './Contact.css'
import Widecard from '../components/Widecard';
import contactpic from '../img/contact.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="contactpage">
                <h1 className="contactheading">Contact Me <i class="fas fa-phone"></i></h1>
                <Widecard 
                    link = "mailto: rachelllhooo@gmail.com"
                    image= {contactpic}
                    text= "Email: rachelllhooo@gmail.com"
                    secondtext= "Mobile: 9157 8163"
                />
        </div>
        )
    }
} export default Contact