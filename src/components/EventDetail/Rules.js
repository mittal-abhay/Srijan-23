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
          } of IIT (ISM) Dhanbad, during srijan 2019. ${
            !event.rules ? event.description : "Rules: " + event.rules
          } `}
        />
        <meta
          name="keywords"
          content={`${event.name} srijan rules, ${event.name} rules , ${
            event.name
          } 2019 rules, ${
            event.is_club ? event.club : event.dept
          } srijan , iit ism dhanbad techfest, iit dhanbad techfest, srijan,srijan 19,srijan 2019,srijan 2k19,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan techfest,srijan tecnical fest, srijan 2019-2020, srijan tech fest 19,srijan tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
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
