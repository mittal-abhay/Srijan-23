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
        const newData = data.results.sort(function (a, b) {
          return a.event_id - b.event_id;
        });
        setEvents(newData);
        console.log(data.results)
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
          content="iit ism dhanbad socio-cultural fest, iit dhanbad socio-cultural fest,srijan,srijan 23,srijan 2023,srijan 2k23,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan core-team, srijan developers, srijan socio-cultural fest, srijan 2022-2023, srijan socio-cultural fest 23,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,socio-cultural fest"
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
            <div
              style={{
                color: "#333",
                margin: "auto",
                textAlign: "center",
                background:
                  "linear-gradient(94.75deg,#d19a08,#fedb7e 27.6%,#eac460 50%,#d19a08 66.15%,#d19a08)",
                padding: "0.75em 2em",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <span style={{ color: "red" }}>Attention : </span> Those who are not
              from IIT(ISM), they need to fill the registration form before
              filling out the participation form of any event.&nbsp;
              <a href="https://forms.gle/46dqT7bEVZBj5R596" target="_blank">
                Register Here.
              </a>
            </div>
            {events && <EventPageNew events={events} />}
          </>
        )}
      </div>
    </>
  );
}

export default withStyles(styles)(EventPage);
