import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./Styles.css";
import About from "./About";
import Rules from "./Rules";
import Details from "./Details";
import Register from "./Register";
import Mobileview from "./Mobileview";
import Header from "../Header/index";
import HomeHeader from "../HomeHeader/index";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iit from "../../assets/Srijan'23_Logo_White.png";

const StyledImage = styled.img``;
const styles = (theme) => ({
  // verticalTab: {
  //   display: "flex",
  //   flexDirection: "column",
  //   width: "20vw !important",
  //   backgroundColor: "rgba(97, 97, 97, 0.1)",
  //   position: "fixed",
  //   height: "100vh",
  //   [theme.breakpoints.down("sm")]: {
  //     display: "none",
  //   },
  // },
  desktopView: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "3vw",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginTop: "50px",
    },
  },
});

class EventDetail extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes, active, event } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <div className={classes.verticalTab}>
          <div>
            <NavLink to="home">
              <img
                src={iit}
                alt="iitism"
                style={{ width: "100px", objectFit: "contain" }}
              />
            </NavLink>
          </div>
          <div className="btnFlex">
            <Link to="about">
              <button
                // style={{zIndex:5}}
                className={
                  "btn btn-event btn-2 " +
                  (active === "about" ? "active-bottom" : "")
                }
              >
                ABOUT
              </button>
            </Link>
            <Link to="details">
              <button
                // style={{zIndex:3}}
                className={
                  "btn btn-event btn-2 " +
                  (active === "details" ? "active-bottom" : "")
                }
              >
                DETAILS
              </button>
            </Link>
            <Link to="register">
              <button
                className={
                  "btn btn-event btn-2 " +
                  (active === "register" ? "active-bottom" : "")
                }
              >
                REGISTER
              </button>
            </Link>
          </div>
        </div>
        {window.innerWidth < 960 ? <Header /> : <HomeHeader />}
        <div className={classes.image}>
          <img
            src={event.image}
            alt={event.name}
            className="event-img rounded"
          />
          <div
            style={{
              fontSize: "40px",
              fontWeight: 800,
              textTransform: "capitalize",
            }}
            className="title"
          >
            {event.name}
          </div>
          <div className={classes.desktopView}>
            {active === "about" && <About event={this.props.event} />}
            {active === "details" && <Details event={this.props.event} />}
            {active === "register" && <Register event={this.props.event} />}
          </div>
          <div>
            {window.innerWidth < 960 ? <Mobileview event={event} /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(EventDetail);
