import React from "react";
import "./eventCardNew.css";
import { Link } from "react-router-dom";

export default function EventCardNew(props) {
  return (
    <div className="event-card-new">
      {props.presentedBy && (
        <div className="event-card-new-details-chip">{props.presentedBy}</div>
      )}
      <div className="event-card-new-image-container">
        <img src={props.image} alt="Event Image" />
      </div>
      <div className="event-card-new-details">
        <h3>{props.eventName}</h3>
        <p>{props.eventDescription}</p>
        <div className="hide-backspacer">Hide Spacer</div>
      </div>
      <Link
        to={`club-events/${props.eventName.split(" ").join("-")}/about`}
        style={{ textDecoration: "none" }}
      >
        <div className="hide">Read More</div>
      </Link>
    </div>
  );
}
