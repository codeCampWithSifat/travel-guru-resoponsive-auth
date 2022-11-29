import React, { useEffect, useState } from "react";
import River from "../River/River"

const Rivers = () => {
  const [rivers, setRivers] = useState([]);
  useEffect(() => {
    fetch("rivers.json")
      .then((res) => res.json())
      .then((data) => {
        setRivers(data);
      });
  }, []);
  return (
    <div className="container mt-5">
       <br />
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {
          rivers.map(river => <River key={river.id} river={river}></River>)
        }
      </div>
    </div>
  );
};

export default Rivers;

/*

const rivers = [
  {
    id: 1,
    name: "River view",
    description:"It is a long established fact that a reader will be distracted by the ",
    image : "https://i.ibb.co/kKkmTDN/river4.jpg",
  },
  {
    id: 2,
    name: "River Understanding",
    description:"It is a long established fact that a reader will be distracted by the ",
    image : "https://i.ibb.co/PDtZfZv/river3.jpg",
  },
  {
    id: 3,
    name: "River Sight",
    description:"It is a long established fact that a reader will be distracted by the ",
    image : "https://i.ibb.co/VV86GPR/river2.jpg",
  },
  {
    id: 4,
    name: "River Camping",
    description:"It is a long established fact that a reader will be distracted by the ",
    image : "https://i.ibb.co/zfp5w1g/river1.jpg",
  },
];
*/
