import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Container,
  Link,
  Divider,
} from "@material-ui/core";
import iit from "../../assets/Logo_Final.webp";
import "./styles.css";

const socialNetworks = [
  {
    socialHandle: "facebook",
    link: "https://www.facebook.com/ism.srijan",
    icon: <FontAwesomeIcon icon={faFacebook} />,
    iconcolor: "#3b5998",
  },
  {
    socialHandle: "linkeldn",
    link: "https://www.linkedin.com/company/srijaniitismdhn/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    iconcolor: "#0e76a8",
  },
  {
    socialHandle: "instagram",
    link: "https://instagram.com/srijaniitism?igshid=YmMyMTA2M2Y",
    icon: <FontAwesomeIcon icon={faInstagram} />,
    iconcolor: "#cc2467",
  },
];

const StyledLink = styled(Link)(({ iconcolor }) => ({
  "&:hover": {
    color: `${iconcolor} !important`,
  },
  transition: "300ms ease-in",
  color: "goldenrod !important",
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
    [theme.breakpoints.down("xs")]: {
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
        sm={3}
        className={classes.grid}
        style={{ justifyContent: "flex-start" }}
      >
        <img
          src={iit}
          alt="iitism"
          style={{ width: "150px", objectFit: "contain" }}
        />
      </Grid>

      <Grid item xs={12} sm={3} style={{ display: "flex" }}>
        <Grid container className={classes.grid2}>
          <Grid item xs={12} className="some">
            <div className="footer-nav">
              <NavLink to="/home" exact strict>
                HOME
              </NavLink>
            </div>
            <div className="footer-nav">
              <NavLink to="/about-us" exact strict>
                About Us
              </NavLink>
            </div>
            <div className="footer-nav">
              <NavLink to="/club-events" exact strict>
                Events
              </NavLink>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={3} style={{ display: "flex" }}>
        <Grid container className={classes.grid2}>
          <Grid item xs={12}>
            <div className="footer-nav">
              <NavLink to="/sponsors" exact strict>
                Our Sponsors
              </NavLink>
            </div>
            <div className="footer-nav">
              <NavLink to="/our-team" exact strict>
                Our Team
              </NavLink>
            </div>
            <div className="footer-nav">
              <a href="https://forms.gle/46dqT7bEVZBj5R596" target="_blank">
                Register here
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={3} className={classes.grid2}>
        <Box className={classes.box}>
          <Typography
            style={{ borderBottom: "1px solid #000" }}
            className={` ${classes.abcd} footer-nav for-using-not`}
          >
            FOLLOW US AT-
          </Typography>
          <Box className={classes.box2}>
            {socialNetworks.map(({ socialHandle, link, icon, iconColor }) => (
              <StyledLink
                key={socialHandle}
                href={link}
                target="_blank"
                iconcolor={iconColor}
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
