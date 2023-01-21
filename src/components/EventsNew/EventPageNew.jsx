import React from "react";
import EventCardNew from "./EventCardNew";
import "./eventPageNew.css";
import { useState } from "react";

export default function EventPageNew(props) {
  const [events, setEvents] = useState(props.events);
  const eventsList = events.map((event) => {
    return <EventCardNew key={event.name} event={event} />;
  });

  return (
    <div className="event-page-new">
      <div className="event-cards-new">{eventsList}</div>
    </div>
  );
}
