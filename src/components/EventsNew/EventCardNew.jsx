import React from "react";
import "./eventCardNew.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EventCardNew(props) {
  return (
    <div className="event-card-new">
      {props.event.presented_by && (
        <div className="event-card-new-details-chip">
          {props.event.presented_by}
        </div>
      )}
      <div className="event-card-new-image-container">
        <img src={props.event.image} alt="Event Image" />
      </div>
      <div className="event-card-new-details">
        <h3>{props.event.name.toLowerCase()}</h3>
        <p>{props.event.summary}</p>
        <div className="hide-backspacer">Hide Spacer</div>
      </div>
      <Link
        to={{
          pathname: `club-events/${props.event.name
            .split(" ")
            .join("-")}/about`,
          state: { event: props.event },
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="hide">Learn More</div>
      </Link>
    </div>
  );
}
