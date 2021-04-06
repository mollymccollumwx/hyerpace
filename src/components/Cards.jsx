import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Homeworld: {props.homeworld}
          </h6>
          <p className="card-text">Birth Year: {props.birthYear}</p>
          <p className="card-text">Hair Color: {props.hairColor}</p>
          <p className="card-text">Skin Color: {props.skinColor}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
