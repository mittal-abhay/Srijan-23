import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import "../EventDetail/Styles.css";
import Header from "../Header";
import EventPageNew from "../EventsNew/EventPageNew";
import { encryptData, decryptData } from "../../Encryption/encrypt";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";
import { API_BASE_URL } from "../../data/Constants";

const styles = (theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  eventsCard: {
    margin: "auto 0",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
});

function EventPage(props) {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof events === "undefined" || events == null) {
      if (sessionStorage.getItem("events") !== null) {
        setEvents(decryptData(sessionStorage.getItem("events")));
      } else {
        fetchData();
      }
    }
  }, []);

  useEffect(() => {
    if (events != null) {
      window.sessionStorage.setItem("events", encryptData(events));
      setLoading(false);
    }
  }, [events]);

  const fetchData = async () => {
    fetch(`${API_BASE_URL}/events/`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.results);
      })
      .catch((e) => {
        alert(e);
        // TODO : Error Page
      });
  };

  return (
    <>
      <Helmet>
        <title>Srijan | Events</title>
        <meta
          name="description"
          content="Srijan is the biggest socio-cultural festival in eastern India, which has been in the limelight since 1977. It attracts an annual footfall of over 30,000 from more than 200 colleges across the country and has prize money worth more than INR 7.5 lakhs. It offers a fantastic platform where participants from different parts of thecountry get an opportunity to interact, enhance and demonstrate their creativity, personality, and talents."
        />
        <meta
          name="keywords"
          content="iit ism dhanbad techfest, iit dhanbad techfest,srijan,srijan 22,srijan 2022,srijan 2k22,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan core-team, srijan developers, srijan techfest,srijan tecnical fest, srijan 2022-2023, srijan tech fest 22,srijan tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
        />
      </Helmet>
      <div className="gradientBg">
        {loading ? (
          <Loading />
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

export default withStyles(styles)(EventPage);
