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
    width: 100%;
    height: 100%;
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
    animation: "slide",
    indicators: true,
    duration: 2000,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
  };

  return (
    <Container>
      <Helmet>
        <title>Srijan | Social Links</title>
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
        OUR&nbsp;&nbsp;SOCIAL&nbsp;&nbsp;LINKS
      </h1>
      <Grid
        container
        style={{ marginTop: "2.5em", paddingInline: "1em" }}
        spacing={2}
      >
        <Grid item xs={12} md={8}>
          <div className="title2" style={{ fontSize: "0.5em" }}>
            YOUTUBE
          </div>
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

        <Grid
          item
          xs={12}
          md={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="title2" style={{ fontSize: "0.5em" }}>
            FACEBOOK
          </div>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fism.srijan%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="345"
            height="400"
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
