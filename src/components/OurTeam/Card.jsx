import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const CardBody = styled.div`
  padding: 10px;
  width: 350px;
  margin: 15px !important;
  background: rgba(0, 0, 0, 0.25) !important;
  box-shadow: 0 8px 32px 0 rgba(218, 165, 32, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
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
  height: 400px;
  overflow: hidden;
`;

const CardHeader = styled.div`
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;
`;
const CardCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
`;

const CardAvatar = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
`;
const CardName = styled.h1`
  position: absolute;
  bottom: 0;
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
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
`;
const CardDesignation = styled.h2`
  position: absolute;
  margin: 0;
  bottom: -4px;
  margin-top: 4px;
  font-size: 12px;
  white-space: nowrap;
  font-weight: 800;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  left: 50%;
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
  transform: translateX(-50%) translateY(-7px);
`;
const CardSocial = styled.div`
  position: absolute;
  bottom: 0;
  top: 210px;
  color: #ccc;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
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
  position: absolute;
  display: flex;

  top: 300px;
  color: #ccc;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
`;

export default function Card(props) {
  const [member, setMember] = useState(props.member);

  return (
    <CardBody id={member.id}>
      <CardHeader>
        <CardCover style={{ backgroundImage: member.image }}></CardCover>
        <CardAvatar src={member.image} alt={member.name} />
        <CardName>{member.name}</CardName>
        <CardDesignation>{member.designation}</CardDesignation>
        <CardContact>
          <CardSocialLink href={member.linkedin}>
            <IconContext.Provider value={{ color: "goldenrod", size: 22 }}>
              <FaLinkedinIn />
            </IconContext.Provider>
          </CardSocialLink>
          <CardSocialLink href={"tel:" + member.contact}>
            <IconContext.Provider value={{ color: "goldenrod", size: 18 }}>
              <BsTelephoneFill />
            </IconContext.Provider>
          </CardSocialLink>
        </CardContact>
      </CardHeader>
    </CardBody>
  );
}
