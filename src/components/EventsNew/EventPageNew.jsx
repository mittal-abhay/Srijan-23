import React from "react";
import EventCardNew from "./EventCardNew";
import "./eventPageNew.css";
import { useEffect, useState } from "react";
import { Suspense } from "react";

export default function EventPageNew(props) {
  const [events, setEvents] = useState(props.events);
  const eventsList = events.map((event) => (
    <EventCardNew key={event.name} event={event} />
  ));

  useEffect(() => {
    setEvents(props.events);
  }, []);

  return (
    <Suspense fallback={<h1 style={{color: "#fff"}}>Hello</h1>}>
      <div className="event-page-new">
        <div className="event-cards-new">{eventsList}</div>
      </div>
    </Suspense>
  );
}
