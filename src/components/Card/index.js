import React from 'react'

function index({ title, image, body }) {
    return (
        <div className="card mb-5" style={{ width:"350px" , boxShadow: "0 16px 8px 3px lightgrey", borderRadius: "12px"}}>
            <img className="card-img-top" src={image} alt="Card image" style={{width:"100%", height:"200px"}} />
            <div className="card-body">
              <h4 className="card-title text-primary px-3 font-weight-bold">{title}</h4>
              <p className="card-text text-secondary p-3">{body}</p>
            </div>
      </div>
    )
}

export default index
