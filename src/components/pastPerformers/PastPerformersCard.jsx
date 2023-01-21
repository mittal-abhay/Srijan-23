import React from "react";
import "./pastPerformersCard.css";

export default function PastPerformersCard(props) {
  return (
    <div
      className="past-performers-card-wrapper"
      style={{ flexDirection: `${props.alignRight ? "row-reverse" : "row"}` }}
    >
      <div className="past-performers-card-image-container">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="past-performers-caption-text">
        <h2>{props.name}</h2>
        <h5>{props.occupation}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
