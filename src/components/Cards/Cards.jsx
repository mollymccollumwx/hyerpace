import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";

// destructured props
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

  //second API call to SWAPI based on URL provided by response from the first call
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

  // resuable card component
  return (
    <>
      <div className="card m-3 mb-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title fs-3 fw-bold">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Homeplanet: {homeworldAPI}</h6>
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
