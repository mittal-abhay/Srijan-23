import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Header from "../Header";
import { Helmet } from "react-helmet";
import "./style.css";
import Carousel from "react-material-ui-carousel";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  .carousel-div {
    width: 60%;
    padding: 1em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

const videos = [
  "https://youtu.be/116whs5_MWA",
  "https://youtu.be/czDC2xP2ors",
  "https://youtu.be/m7J0gEjUaFg",
  "https://youtu.be/a5JDY82qK1A",
];

function SocialLink() {
  const settings = {
    autoPlay: true,
    animation: "fade",
    indicators: true,
    duration: 2000,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
  };

  return (
    <Container>
      <Helmet>
        <title>srijan</title>
        <meta
          name="description"
          content="srijan is one of the largest Techno-management fest of IIT (ISM) Dhanbad in Eastern India with a massive participation of more than 2000 participants from 300 different colleges and institutes. Know about the theme of this year - To the moon and back."
        />
        <meta
          name="keywords"
          content="to the moon and back, iit ism dhanbad techfest, iit dhanbad techfest,srijan,srijan 19,srijan 2019,srijan 2k19,srijan IIT,srijan IIT (ISM) DHANBAD,srijan IIT ISM, srijan theme, srijan techfest,srijan tecnical fest, srijan 2019-2020, srijan tech fest 19,srijan tech fest 2019,IIT ISM, IIT (ISM) DHANBAD, events, exhibition, Workshops,Techno-management fest"
        />
      </Helmet>
      <Header />
      <br />

      <h1
        style={{
          textAlign: "center",
          marginTop: "60px",
          color: "white",
          fontSize: "52px",
          fontFamily: "'Montserrat', sans-serif",
        }}
        className="title"
      >
        OUR SOCIAL LINKS
      </h1>
      <Grid container style={{ marginTop: "2.5em" }}>
        <Grid item xs={12}>
          <Wrapper>
            <Carousel {...settings} className="carousel-div">
              {videos.map((item, idx) => (
                <ReactPlayer
                  key={idx}
                  url={item}
                  width="100%"
                  controls={true}
                  playing={false}
                  pip={true}
                />
              ))}
            </Carousel>
          </Wrapper>
        </Grid>

        <Grid item xs={12} style={{ alignItems: "center" }}>
          <div className="title2" style={{ fontSize: "0.5em" }}></div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fism.srijan%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="500 "
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SocialLink;
