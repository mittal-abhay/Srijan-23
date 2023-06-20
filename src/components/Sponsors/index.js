import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Header from "../Header";
import { Helmet } from "react-helmet";
import "./styles.css";
import { API_BASE_URL } from "../../data/Constants";

import domino from "../../assets/pastSponsors/domino.png";
import jhtours from "../../assets/pastSponsors/jhtours.png";
import oilindia from "../../assets/pastSponsors/oilindia.jpg";
import ongc from "../../assets/pastSponsors/ongc.png";
import pepsi from "../../assets/pastSponsors/pepsi.png";
import reliance from "../../assets/pastSponsors/reliance.png";
import sbi from "../../assets/pastSponsors/sbi.png";
import tata from "../../assets/pastSponsors/tata.jpg";
import vh1 from "../../assets/pastSponsors/vh1.jpeg";
import vodafone from "../../assets/pastSponsors/vodafone.png";
import cairn from "../../assets/pastSponsors/cairn.png";
import indianoil from "../../assets/pastSponsors/indianoil.jpeg";
import jetairways from "../../assets/pastSponsors/jetairways.png";
import pnb from "../../assets/pastSponsors/pnb.png";
import pantaloons from "../../assets/pastSponsors/pantaloons.png";
import vanhuesen from "../../assets/pastSponsors/vanhuesen.png";
import redbull from "../../assets/pastSponsors/redbull.png";
import shell from "../../assets/pastSponsors/shell.png";
import planetfashion from "../../assets/pastSponsors/planetfashion.png";
import hcl from "../../assets/pastSponsors/hcl.png";
import canara from "../../assets/pastSponsors/canara.png";

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
  height: 180px !important;
`;

export default function Sponsors() {
  const [windowHeight, setWindowHeight] = useState(null);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const updateDimensions = () => {
  //     setWindowHeight(window.innerHeight);
  //   };
  //   window.addEventListener("resize", updateDimensions);
  // });

  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/sponsors/`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
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
        {/* <Subtitle>Title Sponsor</Subtitle>
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
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer> */}
        <Subtitle>Gold Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Gold Sponsor") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Silver Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Silver Sponsor") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Bronze Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Bronze Sponsor") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Associate Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Associate Sponsor") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Pronight Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Pronight Sponsor") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Strategic Sponsor</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Strategic Sponsor") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle> Grooming Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Grooming Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Talent Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Talent Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}> </span>
          </div>
        </SponsorsContainer>
        <Subtitle> Entertainment Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Entertainment Partne") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <img src={sponsor.logo} style={{ height: "120px" }} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>

        <Subtitle>Festival Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Festival Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                    <div style={{ color: "white" }}>
                      <span style={{ color: "#03fdfc" }}>Campus</span> events
                    </div>
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>

        <Subtitle>Hospitality Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Hospitality Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Food Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Food Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Gifting Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Gifting Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Merchandise Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Merchandise Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>
        <Subtitle>Beverage Partner</Subtitle>
        <SponsorsContainer>
          <div className="sponsors-list">
            {data.map((sponsor) => {
              if (sponsor.sponsor_type == "Beverage Partner") {
                return (
                  <a href={sponsor.url} target="_blank">
                    <StyledImg src={sponsor.logo} />
                  </a>
                );
              }
            })}
            <span style={{ color: "white" }}></span>
          </div>
        </SponsorsContainer>

        <Title style={{ marginTop: "3em", marginBottom: "1em" }}>
          Our Past Sponsors
        </Title>
        <SponsorsContainer>
          <div className="sponsors-list">
            <a href="#" target="_blank">
              <StyledImg src={hcl} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={planetfashion} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={redbull} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={canara} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={shell} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={vanhuesen} />
            </a>
          </div>
        </SponsorsContainer>
        <SponsorsContainer>
          <div className="sponsors-list">
            <a href="#" target="_blank">
              <StyledImg src={domino} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={vh1} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={oilindia} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={ongc} />
            </a>
            <a href="#" target="_blank">
              <img src={pnb} style={{ height: "110px" }} />
            </a>
          </div>
        </SponsorsContainer>
        <SponsorsContainer>
          <div className="sponsors-list">
            <a href="#" target="_blank">
              <StyledImg src={cairn} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={jetairways} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={pantaloons} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={indianoil} />
            </a>
          </div>
        </SponsorsContainer>
        <SponsorsContainer>
          <div className="sponsors-list">
            <a href="#" target="_blank">
              <StyledImg src={pepsi} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={reliance} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={sbi} />
            </a>
          </div>
        </SponsorsContainer>
        <SponsorsContainer>
          <div className="sponsors-list">
            <a href="#" target="_blank">
              <StyledImg src={tata} />
            </a>
            <a href="#" target="_blank">
              <StyledImg src={jhtours} />
            </a>
          </div>
        </SponsorsContainer>
        <SponsorsContainer>
          <div className="sponsors-list">
            <a href="#" target="_blank">
              <img src={vodafone} style={{ height: "120px" }} />
            </a>
          </div>
        </SponsorsContainer>
      </section>
    </>
  );
}
