import React, { Component } from 'react'
import './Widecard.css'

class Widecard extends Component {
    render() {
        return (
        <div class="widecard">
            <div class="compdet">
                <a href = {this.props.link}  target="_blank" rel="noreferrer">
                    <img className="edu" src={this.props.image} alt="School"></img>
                    <h4 className="text">{this.props.text}</h4>
                    <h4 className="text">{this.props.secondtext}</h4>
                </a>
            </div>
        </div>
        )
    }
}export default Widecard