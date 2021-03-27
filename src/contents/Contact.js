import React, { Component } from 'react'
import './Contact.css'
import Social from '../components/Social'

class Contact extends Component {
    render() {
        return (
            <div className="contactpage">
                <div className="contact">
                    <h1 className="contactheader">Contact Me:</h1>
                    <p className="contactcontent">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvREPlK4wDiySVN-SHaZH2hWupyU2Y65sxkg&usqp=CAU" alt="Contact"></img><br></br>
                        Email: rachelllhooo@gmail.com<br></br>
                        Mobile: 9157 8163
                    </p>
                </div>
            <Social/>
        </div>
        )
    }
} export default Contact