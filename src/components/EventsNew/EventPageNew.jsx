import React from "react";
import EventCardNew from "./EventCardNew";
import "./eventPageNew.css";
import img from "./../../assets/film/2.jpg";
import { useEffect, useState } from "react";

export default function EventPageNew(props) {
  const [events, setEvents] = useState(props.events);
  const temp =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi pariatur quo deleniti, facere mollitia quod doloremque est nostrum deserunt nobis, officia necessitatibus reiciendis unde voluptatum sunt ex sed sint quis.";

  const eventsList = events.map((event) => (
    <EventCardNew
      image={img}
      eventName={event.name}
      eventDescription={event.summary}
      presentedBy={event.presented_by}
    />
  ));

  useEffect(() => {
    setEvents(props.events);
  }, props.event);

  return (
    <div className="event-page-new">
      <div className="event-cards-new">{eventsList}</div>
    </div>
  );
}
