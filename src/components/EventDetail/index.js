import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { encryptData, decryptData } from "../../Encryption/encrypt";
import EventDetailPageNew from "../EventDetailNew/EventDetailPageNew";
import Header from "../Header";

export default function EventDetail() {
  const [event, setEvent] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (typeof event === "undefined" || event == null) {
      if (typeof location.state === "undefined" || location.state == null) {
        setEvent(decryptData(window.sessionStorage.getItem("event")));
      } else {
        setEvent(location.state.event);
      }
    }
  }, []);

  useEffect(() => {
    if (event != null)
      window.sessionStorage.setItem("event", encryptData(event));
  }, [event]);

  return (
    <div>
      <Header />
      {event && <EventDetailPageNew event={event} />}
    </div>
  );
}
