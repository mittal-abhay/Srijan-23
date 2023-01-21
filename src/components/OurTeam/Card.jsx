import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const CardBody = styled.div`
  padding: 10px;
  width: 300px;
  margin: 2rem !important;
  background: rgba(0, 0, 0, 0.25) !important;
  box-shadow: 0 8px 32px 0 rgba(218, 165, 32, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.18);
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

const CardAvatar = styled.img`
  width: 130px;
  height: 130px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: 4px solid black;
  object-position: center;
  object-fit: cover;
  background-color: black;
  position: relative;
`;

const CardName = styled.h1`
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
const CardDesignation = styled.h2`
  position: relative;
  margin: 0;
  margin-top: 4px;
  font-size: 12px;
  white-space: pre-wrap;
  font-weight: 800;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
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
const CardSocialLink = styled.a`
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
const CardContact = styled.div`
  position: relative;
  display: flex;
  color: #ccc;
  font-size: 16px;
  font-weight: 700;
`;

export default function Card(props) {
  const [member, setMember] = useState(props.member);

  return (
    <CardBody id={member.id}>
      <div className="gradient-outline-rounded">
        <CardAvatar src={member.image} alt={member.name} />
      </div>
      <CardName>{member.name}</CardName>
      <CardDesignation>{member.designation}</CardDesignation>
      <CardContact>
        <CardSocialLink href={member.linkedin}>
          <IconContext.Provider value={{ color: "goldenrod", size: 22 }}>
            <FaLinkedin />
          </IconContext.Provider>
        </CardSocialLink>
        <CardSocialLink href={"tel:" + member.contact} target='_blank'>
          <IconContext.Provider value={{ color: "goldenrod", size: 18 }}>
            <BsTelephoneFill />
          </IconContext.Provider>
        </CardSocialLink>
      </CardContact>
    </CardBody>
  );
}
