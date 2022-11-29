import React from "react";
import { Link } from "react-router-dom";
import jungle1 from "../../../../images/destinationPhoto/jungle1.jpg";
import river1 from "../../../../images/destinationPhoto/river1.jpg";
import heritage1 from "../../../../images/destinationPhoto/heritage1.jpg";

const Destination = () => {
  return (
    <div className="container ">
      <h2 className="mt-4 text-center">See Your Destination</h2>
      <div className="d-flex justify-content-around align-items-center mt-4">
        <Link to="/jungles">Jungles</Link>
        <Link to="/rivers">Rivers</Link>
        <Link to="/others">Others</Link>
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-4 mb-4">
        <Link to="/jungles">
          <div>
            <img src={jungle1} className="w-100" alt="" />
          </div>
        </Link>
        <Link to="/rivers">
          <div>
            <img src={river1} className="w-100" alt="" />
          </div>
        </Link>
        <Link to="/others">
          <div>
            <img src={heritage1} className="w-100" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Destination;
