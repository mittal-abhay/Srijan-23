import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import "../EventDetail/Styles.css";
import DepartmentEvent from "./DepartmentEvent";
import { Link } from "react-router-dom";
import ClubEvent from "./ClubEvent";
import Mobileview from "./Mobileview";
import Header from "../Header";
import { NavLink } from "react-router-dom";
import iit from "../../assets/Srijan'23_Logo_White.png";
import EventPageNew from "../EventsNew/EventPageNew";
import { encryptData, decryptData } from "../../Encryption/encrypt";
import { Helmet } from "react-helmet";

const styles = (theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  // verticalTab: {
  //   display: "flex",
  //   flexDirection: "column",
  //   width: "20vw !important",
  //   backgroundColor: "rgba(97, 97, 97, 0.1)",
  //   position: "fixed",
  //   height: "100vh",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none",
  //   },
  // },
  eventsCard: {
    margin: "auto 0",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      // display: "none",
    },
  },
});

function EventPage(props) {
  const [classes, setClasses] = useState(props.classes);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    if (typeof events === "undefined" || events == null) {
      if (localStorage.getItem("events") !== null) {
        setEvents(decryptData(localStorage.getItem("events")));
      } else {
        fetchData();
      }
    }
  }, []);

  useEffect(() => {
    if (events != null)
      window.localStorage.setItem("events", encryptData(events));
  }, [events]);

  const fetchData = async () => {
    fetch("https://srijan.herokuapp.com/events/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch(() => {
        alert("You are offline!!!");
      });
  };

  return (
    <>
    <Helmet>
    <title>Srijan | Events</title>
    <meta
      name="description"
      content="srijan is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Meet the core-team and developers of srijan here."
    />
    <meta
      name="keywords"
      content="iit ism dhanbad techfest, iit dhanbad techfest,srijan,srijan 22,srijan 2022,srijan 2k22,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan core-team, srijan developers, srijan techfest,srijan tecnical fest, srijan 2022-2023, srijan tech fest 22,srijan tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
    />
  </Helmet>
    <div className="gradientBg">
      <div className="root">
        <Header />
      </div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "60px",
          color: "white",
          fontSize: "52px",
          fontFamily: "'Montserrat', sans-serif",
        }}
        className="title"
      >
        EVENTS
      </h1>
      {events && <EventPageNew events={events} />}
    </div>
    </>
  );
}

export default withStyles(styles)(EventPage);
