import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  text-align: center;
`;

export default function About(props) {
  const [event, setEvent] = useState(props.event);

  const convertTimestamp = (timestamp) => {
    let myDate = new Date(timestamp).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    console.log(myDate);
    return myDate;
  };

  return (
    <div className="container" style={{ display: "block", width: "80vw" }}>
      <Helmet>
        <title>{event.name}</title>
        <meta
          name="description"
          content={`Organized by ${
            event.event_type == "club"
              ? event.presented_by + " club "
              : event.presented_by + " department "
          } of IIT (ISM) Dhanbad, during concetto 2019. ${event.details} `}
        />
        <meta
          name="keywords"
          content={`${event.name} concetto , ${event.name} , ${event.name} 2022   , ${event.presented_by}
            concetto , iit ism dhanbad techfest, iit dhanbad techfest, concetto,concetto 22,concetto 2022,concetto 2k22,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 22,concetto tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
        />
      </Helmet>{" "}
      <StyledText>{event.summary}</StyledText>
      <StyledText>
        {`${
          event.event_type === "club"
            ? " CLUB  :  " + event.presented_by
            : "  DEPARTMENT  :  " + event.presented_by
        }`}
      </StyledText>
      <br />
      <StyledText>
        {`Registration ends : ${convertTimestamp(event.register_timestamp)}`}
      </StyledText>
      <StyledText>
        {`Event duration : ${convertTimestamp(
          event.start_timestamp
        )} - ${convertTimestamp(event.end_timestamp)}`}
      </StyledText>
      <StyledText>{`Venue : ${event.venue}`}</StyledText>
    </div>
  );
}
