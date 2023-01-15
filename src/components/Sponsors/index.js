import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Header from "../Header";
import { Helmet } from "react-helmet";
import "./styles.css";
import { pepsi } from "../../assets/Pepsi.png";
import { redbull } from "../../assets/RedBull.webp";
import { reliance } from "../../assets/Reliance.webp";
import { vanhuesen } from "../../assets/VanHuesen.png";
import { ongc } from "../../assets/Ongc.png";

const SponsorsContainer = styled(Container)`
  position: relative;
  background: rgba(0, 0, 0, 0.25) !important;
  box-shadow: 0 8px 32px 0 rgba(218, 165, 32, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 0px solid rgba(255, 255, 255, 0.18);
  justify-content: center;
`;
const Title = styled.h2`
  display: flex;
  text-align: center;
  margin-top: 40px;
  letter-spacing: -2px;
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
  font-size: 44px !important;
  font-family: "Montserrat", sans-serif;
`;
const Subtitle = styled.h3`
  display: flex;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 30px;
  letter-spacing: -2px;
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
  font-size: 36px;
  font-family: "Moneterrat", sans-serif;
`;
const StyledImg = styled.img`
  height: 120px !important;
`;

export default function Sponsors() {
  const [windowHeight, setWindowHeight] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateDimensions);
  });

  useEffect(() => {
    fetch("https://srijan.herokuapp.com/sponsors/", { mode: "cors" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => {
        alert("You are offline!!!");
      });
  }, []);

  return (
    <>
    <Helmet>
        <title>Srijan | Sponsors</title>
        <meta
          name="description"
          content="srijan is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Meet the core-team and developers of srijan here."
        />
        <meta
          name="keywords"
          content="iit ism dhanbad techfest, iit dhanbad techfest,srijan,srijan 22,srijan 2022,srijan 2k22,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan core-team, srijan developers, srijan techfest,srijan tecnical fest, srijan 2022-2023, srijan tech fest 22,srijan tech fest 2022,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
        />
      </Helmet>
      <Header />
      <section
        className="sponsors"
        style={{ minHeight: { windowHeight } + "px" }}
      >
        <Title>Sponsors</Title>
        <Subtitle>Title Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Major Sponsors") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Decoration Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Skill Development Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Associate Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Event Sponsor") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Strategic Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Food Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Prize Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Education Sponsor") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Logistics Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Hospitality Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Style Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Technology Service Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Health Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Books Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Beverage Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Books Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        <Subtitle>Online Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.category == "Books Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> Coming Soon...</span>
          </div>
        </SponsorsContainer>
        {/* <Subtitle>Grateful to our past sponsors</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            <div className="past-sponsors-container">
              <div>
                <img src={pepsi} alt="" />
              </div>
              <div>
                <img src={ongc} alt="" />
              </div>
              <div>
                <img src={redbull} alt="" />
              </div>
              <div>
                <img src={vanhuesen} alt="" />
              </div>
              <div>
                <img src={reliance} alt="" />
              </div>
            </div>
          </div>
        </SponsorsContainer> */}
      </section>
    </>
  );
}
