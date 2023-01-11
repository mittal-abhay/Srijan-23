import React, { useState, useEffect } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import EventCard from "./EventCard";

const CardBody = styled.div`
  background: rgba(0, 0, 0, 0.25) !important;
  box-shadow: 0 8px 32px 0 rgba(218, 165, 32, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
`;
const CardImageBody = styled.div`
  height: 200px;
`;
const CardImage = styled.img`
  opacity: 0.7;
`;
const CardTitle = styled.h2`
  -webkit-text-fill-color: transparent;
  background: linear-gradient(
    94.75deg,
    #d19a08,
    #fedb7e 27.6%,
    #eac460 50%,
    #d19a08 66.15%,
    #d19a08
  );
  -webkit-background-clip: text;
  letter-spacing: 1px;
  font-family: "Montserrat";
  font-size: 1.3rem;
  text-align: center;
  margin: 0.6em 0.2em;
  text-transform: uppercase;
  margin-top: 10px;
`;
const CardDepartment = styled.p`
  color: #988d8d !important;
  letter-spacing: -1px;
  font-family: "Noto Sans", sans-serif;
  font-size: 0.65em;
  font-weight: 300px;
  margin: 10px;
  text-align: center;
`;
const CardSummary = styled.p`
  font-size: 0.6em;
  margin: 0 10px;
`;

function ClubEvent(props) {
  const [events, setEvents] = useState(props.events);

  useEffect(() => {
    setEvents(props.events);
  }, props.event);

  return (
    <div className="container">
      <Helmet>
        <title>Srijan club events</title>
        <meta
          name="description"
          content="Organized by the various clubs of IIT (ISM) Dhanbad, are the attraction of srijan 2022. Having a special combination of management and technical prowess, club events provide a platform to budding entrepreneurs to showcase their skills and to prove their mettle among the very best in the field."
        />
        <meta
          name="keywords"
          content="club events Srijan 2022, club event IIT dhanbad, iit ism dhanbad techfest, iit dhanbad techfest,srijan,srijan 22,srijan 2022,srijan 2k22,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan theme, srijan techfest,srijan tecnical fest, srijan 2022-2020, srijan tech fest 22,srijan tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
        />
      </Helmet>
      {events.map((event, id) => {
        return (
          <div className="cards">
            <CardBody className="card-item" key={event.name}>
              <Link
                to={`club-events/${event.name.split(" ").join("-")}/about`}
                style={{ textDecoration: "none" }}
              >
                <CardImageBody className="card-image p-2">
                  <CardImage
                    src={event.image}
                    alt={event.name}
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  />
                </CardImageBody>
                <div className="card-info">
                  <CardTitle className="card-title">{event.name}</CardTitle>
                  <CardSummary>{event.summary}</CardSummary>
                  <CardDepartment>{event.presented_by}</CardDepartment>
                </div>
              </Link>
            </CardBody>
          </div>
        );
      })}
      {/* {events.map((event, id) => {
        // return (
        //   <div className="cards">
        //     <div className="card-image-temp">
        //       <CardBody className="card-item" key={event.name}>
        //         <Link
        //           to={`club-events/${event.name.split(" ").join("-")}/about`}
        //           style={{ textDecoration: "none" }}
        //         >
        //           <div className="card-info">
        //             <CardTitle className="card-title">{event.name}</CardTitle>
        //             <CardSummary>{event.summary}</CardSummary>
        //             <CardDepartment>{event.presented_by}</CardDepartment>
        //           </div>
        //         </Link>
        //       </CardBody>
        //     </div>
        //   </div>
        // );
        return <EventCard event={event} />;
      })} */}
    </div>
  );
}

export default ClubEvent;
