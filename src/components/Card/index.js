import React from 'react'

import "../../assets/css/card.css"

function index({ title, image, body }) {
    return (
        <div className="card">
            <img src={image}/>
            <h3>{title}</h3> 
            <p> {body} </p>
            <div className="card-overlay"></div>
        </div>
    )
}

export default index
