import React, { Component } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledText = styled.p`
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 16px;
  text-align: center;
`;

class Details extends Component {
  render() {
    const { event } = this.props;
    return (
      <div className="container" style={{ display: "block", width: "80vw" }}>
        <Helmet>
          <title>{event.name}</title>
          <meta
            name="description"
            content={`Organized by ${
              event.event_type === "club"
                ? event.presented_by + " club "
                : event.presented_by + " department "
            } of IIT (ISM) Dhanbad, during srijan 2019. ${event.details}`}
          />
          <meta
            name="keywords"
            content={`details of ${event.name} srijan , details of ${event.name} , ${event.name} 2019 details , ${event.presented_by} srijan , iit ism dhanbad techfest, iit dhanbad techfest, srijan,srijan 19,srijan 2019,srijan 2k19,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan techfest,srijan tecnical fest, srijan 2019-2020, srijan tech fest 19,srijan tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest`}
          />
        </Helmet>
        <StyledText>{event.details}</StyledText>
        <StyledText>
          {event.brochure_link ? (
            <React.Fragment>
              <br />
              For detailed description, refer the{" "}
              <a href={event.brochure_link}>document</a>
            </React.Fragment>
          ) : (
            ""
          )}
        </StyledText>
        <br />
      </div>
    );
  }
}

export default Details;
