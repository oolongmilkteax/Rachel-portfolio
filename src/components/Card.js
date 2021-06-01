import React, { Component } from  'react';
import './Card.css'

class Card extends Component {
    render() {
        return (
        <div className = "card">
            <a href = {this.props.link}  target="_blank" rel="noreferrer">
                <img className = "image" src = {this.props.image}></img> <br/><br/>
                <p className = "cardtext1"><i class={this.props.icon}></i>{this.props.text}</p>
                <p className = "cardtext2"><i class={this.props.secondicon}></i>{this.props.secondtext}</p>
            </a>
        </div>
        )
    }
} export default Card