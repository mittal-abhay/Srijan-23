import React, { Component } from "react";
import { Helmet } from "react-helmet";
import rule_book from "./RuleBook";
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  text-align: center;
`;

export default function Rules() {
  const { event } = this.props;

  return (
    <div className="container" style={{ display: "block", width: "80vw" }}>
      <Helmet>
        <title>{event.name}</title>
        <meta
          name="description"
          content={`Organized by ${
            event.is_club ? event.club + " club " : event.dept + " department "
          } of IIT (ISM) Dhanbad, during concetto 2019. ${
            !event.rules ? event.description : "Rules: " + event.rules
          } `}
        />
        <meta
          name="keywords"
          content={`${event.name} concetto rules, ${event.name} rules , ${
            event.name
          } 2019 rules, ${
            event.is_club ? event.club : event.dept
          } concetto , iit ism dhanbad techfest, iit dhanbad techfest, concetto,concetto 19,concetto 2019,concetto 2k19,concetto IIT,concetto IIT (ISM) DHANBAD,concetto IIT ISM, concetto techfest,concetto tecnical fest, concetto 2019-2020, concetto tech fest 19,concetto tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
        />
      </Helmet>
      <br />
      <ul>
        <StyledText>
          {event.rules
            ? event.rules.split(";").map((str) => <li>{"  " + str}</li>)
            : rule_book({ link: event.pdf })}
        </StyledText>
      </ul>
    </div>
  );
}
