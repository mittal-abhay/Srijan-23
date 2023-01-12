import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TestImg } from "../../assets/1.webp";

const EventCardBody = styled.div`
  padding: 10px;
  width: 300px;
  margin: 2rem !important;
  /* background: rgba(0, 0, 0, 0.25); */
  /* background-image: url(${({ bg }) => bg}); */
  /* background-image: url("../../assets/0.webp") !important;
  /* box-shadow: 0 8px 32px 0 rgba(218, 165, 32, 0.37); */
  /* backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); */
  /* border: 1px solid rgba(0, 0, 0, 0.18); */
  /* background: url(require("../../assets/1.jpg")) !important; */
  border-radius: 12px;
  border: 1px solid;
  max-width: 400px;
  margin: 3rem;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  overflow: hidden;
`;

const EventCardAvatar = styled.img`
  width: 130px;
  height: 130px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 4px solid black;
  object-position: center;
  object-fit: cover;
  position: relative;
`;

const EventCardName = styled.h1`
  position: relative;
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
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`;
const EventCardDesignation = styled.h2`
  position: relative;
  margin: 0;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
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
  margin-bottom: 30px;
`;
const StyledSVG = styled.svg`
  fill: white;
  color: white;
  width: 25px;
  height: 40px;
  display: block;
  transition: 0.3s;
  text-align: center;
  margin: 0 auto;
`;
const EventCardSocialLink = styled.a`
  color: #8797a1;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  background-color: rgba(93, 133, 193, 0.05);
  border-radius: 50%;
  margin-right: 10px;
  &:hover {
    svg {
      fill: #ffd700;
    }
  }
  &:last-child {
    margin-right: 0;
  }
`;
const EventCardContact = styled.div`
  position: relative;
  display: flex;
  color: #ccc;
  font-size: 16px;
  font-weight: 700;
`;

export default function EventCard({ event }) {
  //   (
  //     <div className="cards">
  //       <div className="card-image-temp">
  //         <CardBody className="card-item" key={event.name}>
  //           <Link
  //             to={`club-events/${event.name.split(" ").join("-")}/about`}
  //             style={{ textDecoration: "none" }}
  //           >
  //             <div className="card-info">
  //               <CardTitle className="card-title">{event.name}</CardTitle>
  //               <CardSummary>{event.summary}</CardSummary>
  //               <CardDepartment>{event.presented_by}</CardDepartment>
  //             </div>
  //           </Link>
  //         </CardBody>
  //       </div>
  //     </div>
  //   );
  // })}
  // </div>
  // );
  //   return (
  //     <div
  //       style={{ backgroundImage: `url('${event.image}')` }}
  //     >
  //       <EventCardBody id={event.name}>
  //         <Link
  //           to={`club-events/${event.name.split(" ").join("-")}/about`}
  //           style={{ textDecoration: "none" }}
  //         >
  //           <EventCardName>{event.name}</EventCardName>
  //           <EventCardDesignation>{event.summary}</EventCardDesignation>
  //         </Link>
  //       </EventCardBody>
  //     </div>
  //   );
}
