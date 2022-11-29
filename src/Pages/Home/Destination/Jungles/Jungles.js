import React, { useEffect, useState } from "react";
import Jungle from "../Jungle/Jungle";

const Jungles = () => {
  const [jungles, setJungles] = useState([]);
  useEffect(() => {
    fetch("jungles.json")
      .then((res) => res.json())
      .then((data) => {
        setJungles(data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <br />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {
          jungles.map(jungle => <Jungle key={jungle.id} jungle={jungle}></Jungle>)
        }
      </div>
    </div>
  );
};

export default Jungles;

/*

const jungles = [
  {
    id: 1,
    name: "Tree Review",
    description:"It is a long established fact that a reader will be distracted by the readable content of a page when ",
    image : "https://i.ibb.co/tPW3trb/jungle4.jpg"
  },
  {
    id: 2,
    name: "Tree Review",
    description:"It is a long established fact that a reader will be distracted by the readable content of a page when ",
    image : "https://i.ibb.co/KzZdMkR/jungle3.jpg"
  },
  {
    id: 3,
    name: "Tree Review",
    description:"It is a long established fact that a reader will be distracted by the readable content of a page when ",
    image : "https://i.ibb.co/jTSg0fR/jungle2.jpg"
  },
  {
    id: 1,
    name: "Tree Review",
    description:"It is a long established fact that a reader will be distracted by the readable content of a page when ",
    image : "https://i.ibb.co/gdTYYjj/jungle1.jpg"
  },
];
*/
