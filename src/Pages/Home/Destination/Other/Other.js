import React from 'react'

const Other = ({other}) => {
  const {name, image, description} = other ;
  return (
    <div className="col">
    <div className="card">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
  )
}

export default Other
