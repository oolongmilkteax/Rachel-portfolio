import React, { Component } from 'react'
import './Contact.css'
import Card from '../components/Card';
import contactpic from '../img/contact.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="contactpage">
                <h1 className="contactheading">Contact Me <i class="fas fa-phone"></i></h1>
                <Card
                    link = "mailto: rachelllhooo@gmail.com"
                    image= {contactpic}
                    text= " Email: rachelllhooo@gmail.com" 
                    icon= "far fa-envelope"
                    secondtext= " Mobile: 9157 8163"
                    secondicon= "fas fa-mobile-alt"
                />
        </div>
        )
    }
} export default Contact