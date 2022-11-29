import React, { useEffect, useState } from "react";
import Other from "../Other/Other"

const Others = () => {
  const [others, setOthers] = useState([]);
  useEffect(() => {
    fetch("heritages.json")
    .then(res => res.json())
    .then(data => {
      setOthers(data)
      console.log(data);
    })
  },[])
  return (
    <div className="container mt-5">
      <br />
      <div className="row row-cols-1 row-cols-md-2 g-4">
         {
          others.map(other => <Other key={other.id} other={other}></Other>)
         }
      </div>
    </div>
  );
};

export default Others;

/*
const heritages = [
  {
    id: 1,
    name: "Buddist Temple",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is ",
    image: "https://i.ibb.co/GMbDMM0/heritage4.jpg",
  },
  {
    id: 2,
    name: "Buddist Temple",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is ",
    image: "https://i.ibb.co/BsYh4sz/heritage3.jpg",
  },
  {
    id: 3,
    name: "Buddist Temple",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is ",
    image: "https://i.ibb.co/1nQN4tp/heritage2.jpg",
  },
  {
    id: 4,
    name: "Buddist Temple",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is ",
    image: "https://i.ibb.co/RCn09Hj/heritage1.jpg",
  },
];
*/
