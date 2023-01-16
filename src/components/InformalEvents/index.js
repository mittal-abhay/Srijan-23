import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Header";
// import CardBody from "reactstrap";
import styled from "styled-components";

const CardBody = styled.div`
  background: rgba(255, 255, 255, 0.11) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const CardImageBody = styled.div`
  height: 200px;
`;
const CardImage = styled.img`
  opacity: 0.7;
`;
const CardTitle = styled.h2`
  color: cyan !important;
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

class InformalEvents extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { Informals } = this.props;
    return (
      <div>
        <Helmet>
          <title>srijan Informals</title>
          <meta
            name="description"
            content="srijan, the annual Techno-management fest of IIT(ISM), organizes a variety of workshops with the best in the business so that our participants feel lucid while competing with technical brilliance."
          />
          <meta
            name="keywords"
            content="informals iit ism dhanbad techfest, iit dhanbad techfest, iit dhanbad informals, srijan,srijan 19,srijan 2019,srijan 2k19,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan techfest,srijan tecnical fest, srijan 2019-2020, srijan tech fest 19,srijan tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
          />
        </Helmet>
        <Header />
        <br />
        <br />
        <h1
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
          className="title"
        >
          INFORMAL EVENTS
        </h1>
        <div className="container">
          {Informals.map((event, id) => {
            return (
              <div className="cards">
                <CardBody className="card-item" key={event.name}>
                  <Link
                    to={`informal-events/${event.name
                      .split(" ")
                      .join("-")}/about`}
                    style={{ textDecoration: "none" }}
                  >
                    <CardImageBody className="card-image p-2">
                      <CardImage
                        src={event.img}
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
                      <CardSummary>{event.prizes}</CardSummary>
                    </div>
                  </Link>
                </CardBody>
              </div>

              // <div className="cards">
              //     <div className="card-item" key={event.name}>
              //       <Link
              //         to={`informal-events/${event.name
              //           .split(" ")
              //           .join("-")}/about`}
              //         style={{ textDecoration: "none" }}
              //       >
              //         <div className="card-image">
              //           <img
              //             src={`${event.img}`}
              //             alt={event.name}
              //             className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              //             width="500"
              //             height="500"
              //             xmlns="http://www.w3.org/2000/svg"
              //             preserveAspectRatio="xMidYMid slice"
              //             focusable="false"
              //           />
              //         </div>
              //         <div className="card-info">
              //           <h2
              //             className="card-title"
              //             style={{ textTransform: "uppercase" }}
              //           >
              //             {event.name}
              //           </h2>
              //           <p style={{ color: "green", marginBottom: "10px" }}>
              //             {event.prizes}
              //           </p>
              //         </div>
              //       </Link>
              //     </div>
              //   </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default InformalEvents;
