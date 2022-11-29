import React from "react";

const Jungle = ({ jungle }) => {
  const {image, description, name} = jungle;
  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={image} className="card-img-top w-auto" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jungle;
