import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Header from "../Header";
import { Helmet } from "react-helmet";
import "./styles.css";
import { API_BASE_URL } from "../../data/Constants";

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
    fetch(`${API_BASE_URL}/sponsors/`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data[0].logo);
      })
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
          content="Srijan is the biggest socio-cultural festival in eastern India, which has been in the limelight since 1977. It attracts an annual footfall of over 30,000 from more than 200 colleges across the country and has prize money worth more than INR 7.5 lakhs. It offers a fantastic platform where participants from different parts of thecountry get an opportunity to interact, enhance and demonstrate their creativity, personality, and talents."
        />
        <meta
          name="keywords"
          content="iit ism dhanbad socio-cultural fest, iit dhanbad socio-cultural fest,srijan,srijan 23,srijan 2023,srijan 2k23,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan core-team, srijan developers, srijan socio-cultural fest, srijan 2022-2023, srijan socio-cultural fest 23,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,socio-cultural fest"
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
              if (sponsor.sponsor_type == "title") {
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
              if (sponsor.sponsor_type == "Decoration") {
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
              if (sponsor.sponsor_type == "Associate") {
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
              if (sponsor.sponsor_type == "strategic") {
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
              if (sponsor.sponsor_type == "prize") {
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
              if (sponsor.sponsor_type == "logistics") {
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
              if (sponsor.sponsor_type == "style") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                    hi
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}>Coming Soon...</span>
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
      </section>
    </>
  );
}
