import React, { Component } from 'react'
import './style.css'
class listcard extends Component {
    render() {
        return (
            <div className="card">
               <div className="container">
                   
                  <h3>{this.props.item}</h3> 
                   
                   </div> 
            </div>
        )
    }
}

export default listcard
