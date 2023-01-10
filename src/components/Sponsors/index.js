import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Header from "../Header";
import "./styles.css";

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
            {/* {data.map((sponsor) => {
              if (sponsor.category == "Books Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                   
                  </a>
                );
              }
            })} */}
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
      </section>
    </>
  );
}
