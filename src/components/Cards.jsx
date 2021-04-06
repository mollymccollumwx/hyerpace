import React from "react";
import "./Cards.css";

const Cards = ({ name, gender, birthYear, hairColor, skinColor, eyeColor }) => {
  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{gender}</h6>
          <ul>
          <li className="card-text">Birth Year: {birthYear}</li>
          <li className="card-text">Hair Color: {hairColor}</li>
          <li className="card-text">Skin Color: {skinColor}</li>
          <li className="card-text">Eye Color: {eyeColor}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cards;
