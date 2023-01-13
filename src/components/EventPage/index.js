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

function EventDetail(props) {
  const [events, setEvents] = useState(props.events);
  const [classes, setClasses] = useState(props.classes);
  const [active, setActive] = useState(props.active);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="gradientBg">
      <div className={classes.root}>
        <Header />
        {/* <div className={classes.verticalTab}> */}
        {/* <div>
          <NavLink to="home" exact strict>
            <img
              src={iit}
              alt="iitism"
              style={{ width: "100px", objectFit: "contain" }}
            />
          </NavLink>
        </div> */}
        <br />
        {/* <div className="btnFlex">
          <Link to="club-events">
            <button
              style={{ fontFamily: "'Noto Sans',sans-serif", zIndex: 3 }}
              className={
                "btn btn-event btn-2 " + (active === 1 ? "active-bottom" : "")
              }
            >
              CLUB
            </button>
          </Link>
        </div> */}
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

      <EventPageNew events={events} />

    </div>
  );
}

export default withStyles(styles)(EventDetail);