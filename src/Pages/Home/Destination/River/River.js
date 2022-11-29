import React from 'react'

const River = ({river}) => {
  const {image, description, name} = river;
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

export default River
