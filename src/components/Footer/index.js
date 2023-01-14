import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Container,
  Link,
  Divider,
} from "@material-ui/core";
<<<<<<< HEAD
import iit from "../../assets/Logo_Final.png";
=======
import iit from "../../assets/Srijan'23 Logo Gold.png";
>>>>>>> 3efc9071d745c0a1c7c0a78d896f4d875c796bda
import "./styles.css";

const socialNetworks = [
  {
    socialHandle: "facebook",
    link: "https://www.facebook.com/107585406021823/posts/pfbid0rdXTqps78PEPkPiKej9g4SRdpBRfpE6QSrGRoSZ7hXuQBbYFP4cDu1onMiiCovCol/?mibextid=Nif5oz",
    icon: <FontAwesomeIcon icon={faFacebook} />,
    iconColor: "#3b5998",
  },
  {
    socialHandle: "linkeldn",
    link: "https://www.linkedin.com/company/srijaniitismdhn/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    iconColor: "#0e76a8",
  },
  {
    socialHandle: "instagram",
    link: "https://instagram.com/srijaniitism?igshid=YmMyMTA2M2Y",
    icon: <FontAwesomeIcon icon={faInstagram} />,
    iconColor: "#cc2467",
  },
];

const StyledLink = styled(Link)(({ iconColor }) => ({
  "&:hover": {
    color: `${iconColor} !important`,
  },
  transition: "300ms ease-in",
  color: "goldenrod",
}));

const Styles = (theme) => ({
  container: {
    background: "rgba(0 0 0/0.25)",
    // borderTop: "2px solid gold",
    position: "relative",
    width: "100%",
    color: "#fff ",
    marginTop: "5em",
    padding: "0.5em 1em 0.5em 1em",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "6px",
  },
  box2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "15px",
    width: "100%",
  },
  grid2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBlock: "0.3em",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      letterSpacing: "50px",
    },
  },
  gap: {
    marginBlock: "0.5em",
  },
  abcd: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});

function Footer({ classes }) {
  const Copyright = (props) => {
    return (
      <Typography
        variant="body2"
        align="center"
        style={{ textDecoration: "none" }}
        {...props}
      >
        {"Copyright © "}- IIT (ISM) Dhanbad {new Date().getFullYear()}
      </Typography>
    );
  };

  return (
    <Grid container component="footer" className={classes.container}>
      <Grid
        item
        xs={0}
        sm={3}
        className={classes.grid}
        style={{ justifyContent: "flex-start" }}
      >
        <img
          src={iit}
          alt="iitism"
          style={{ width: "200px", objectFit: "contain" }}
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <Grid container className={classes.grid2}>
          <Grid item xs={12}>
            {" "}
            {/* 6 kario */}
            <NavLink to="/home" exact strict>
              <div className="footer-nav">
                <a>Home</a>
              </div>
            </NavLink>
            <NavLink to="/about-us" exact strict>
              <div className="footer-nav">
                <a>About Us</a>
              </div>
            </NavLink>
            <NavLink to="/club-events" exact strict>
              <div className="footer-nav">
                <a>Events</a>
              </div>
            </NavLink>
          </Grid>
          {/* <Grid item xs={6}>
            <div className="footer-nav">
              <a>Our Sponsors</a>
            </div>
            <div className="footer-nav">
              <a>Our Team</a>
            </div>
          </Grid> */}
        </Grid>
      </Grid>

      {/* <Grid item xs={3}>
        <div heading>Contact Us</div>
      </Grid> */}

      <Grid item xs={12} sm={3}>
        <Grid container className={classes.grid2}>
          <Grid item xs={12}>
            <NavLink to="/sponsors" exact strict>
              <div className="footer-nav">
                <a>Our Sponsors</a>
              </div>
            </NavLink>
            <NavLink to="/our-team" exact strict>
              <div className="footer-nav">
                <a>Our Team</a>
              </div>
            </NavLink>

            <div className="footer-nav">
              <a href="#">Register Here</a>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.grid2}>
        <Box className={classes.box}>
          <Typography
            variant="div"
            style={{ borderBottom: "1px solid #000" }}
            className={` ${classes.abcd} footer-nav`}
          >
            FOLLOW US AT-
          </Typography>
          <Box className={classes.box2}>
            {socialNetworks.map(({ socialHandle, link, icon, iconColor }) => (
              <StyledLink
                key={socialHandle}
                href={link}
                target="_blank"
                iconColor={iconColor}
              >
                {icon}
              </StyledLink>
            ))}
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} className={classes.gap}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <Container className="footer-nav">
          <Copyright />
        </Container>
      </Grid>
    </Grid>
  );
}

export default withStyles(Styles)(Footer);
