import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";

const Cards = ({
  name,
  gender,
  birthYear,
  hairColor,
  skinColor,
  eyeColor,
  homeworld,
}) => {
  const [homeworldAPI, setHomeworld] = useState("");

  useEffect(() => {
    axios
      .get(homeworld)
      .then((res) => {
        // console.log(res.data.name);
        setHomeworld(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [homeworld]);

  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{homeworldAPI}</h6>
          <ul>
            <li className="card-text"><strong>Birth Year:</strong> {birthYear}</li>
            <li className="card-text"><strong>Gender:</strong> {gender}</li>
            <li className="card-text"><strong>Hair Color:</strong> {hairColor}</li>
            <li className="card-text"><strong>Skin Color:</strong> {skinColor}</li>
            <li className="card-text"><strong>Eye Color:</strong> {eyeColor}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cards;
