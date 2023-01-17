import React from "react";
import "./eventCardNew.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EventCardNew(props) {
  const [event, setEvent] = useState(null);
  useEffect(() => {
    setEvent(props.event);
  }, []);

  return (
    <div className="event-card-new">
      {event && (
        <>
          {event.presented_by && (
            <div className="event-card-new-details-chip">
              {event.presented_by}
            </div>
          )}
          <div className="event-card-new-image-container">
            <img src={event.image} alt="Event Image" />
          </div>
          <div className="event-card-new-details">
            <h3>{event.name.toLowerCase()}</h3>
            <p>{event.summary}</p>
            <div className="hide-backspacer">Hide Spacer</div>
          </div>
          <Link
            to={{
              pathname: `club-events/${event.name.split(" ").join("-")}/about`,
              state: { event: event },
            }}
            style={{ textDecoration: "none" }}
          >
            <div className="hide">Learn More</div>
          </Link>
        </>
      )}
    </div>
  );
}
